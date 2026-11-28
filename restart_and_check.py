#!/usr/bin/env python3
"""
Restarts your dev server with a clean .next, then proves the five pages work.

Why: Next's watcher missed two folders, so its route list never included them
and it answered 404 without ever compiling the page. Clearing .next forces a
full rescan of app/ on boot.

It stops whatever is on port 3000, deletes .next, starts pnpm dev in the
background, waits for it to answer, then requests all five pages and prints
the status codes.
"""
import json
import os
import shutil
import signal
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
BASE = f"http://localhost:{PORT}"
STAGES = [
    "trying-to-conceive",
    "experiencing-symptoms",
    "planning-ahead",
    "perimenopausal",
    "just-curious",
]
LOG = Path(".dev-server.log")
MANIFEST = Path(".next/server/app-paths-manifest.json")


def stop_port():
    try:
        out = subprocess.run(
            ["lsof", "-ti", f"tcp:{PORT}"], capture_output=True, text=True, timeout=20
        ).stdout.split()
    except Exception:
        out = []
    for pid in out:
        try:
            os.kill(int(pid), signal.SIGTERM)
            print(f"   stopped process {pid}")
        except Exception:
            pass
    time.sleep(2)
    try:
        out = subprocess.run(
            ["lsof", "-ti", f"tcp:{PORT}"], capture_output=True, text=True, timeout=20
        ).stdout.split()
        for pid in out:
            os.kill(int(pid), signal.SIGKILL)
    except Exception:
        pass


def wait_ready(seconds=180):
    start = time.time()
    while time.time() - start < seconds:
        try:
            with urllib.request.urlopen(BASE + "/", timeout=8) as r:
                if r.status == 200:
                    return True
        except Exception:
            pass
        time.sleep(2)
    return False


def main():
    if not Path("package.json").is_file():
        print("No package.json here. Run this from the Fertiterra folder.")
        return

    print(f"1. Freeing port {PORT}")
    stop_port()

    print("2. Deleting .next")
    shutil.rmtree(".next", ignore_errors=True)
    print("   done")

    print("3. Starting pnpm dev")
    env = dict(os.environ)
    env["PORT"] = str(PORT)
    pnpm = shutil.which("pnpm")
    if pnpm:
        cmd = [pnpm, "dev"]
    elif shutil.which("npx"):
        cmd = [shutil.which("npx"), "next", "dev"]
    else:
        cmd = ["/bin/sh", "-lc", "pnpm dev"]
    with LOG.open("w") as log:
        subprocess.Popen(
            cmd,
            stdout=log,
            stderr=subprocess.STDOUT,
            stdin=subprocess.DEVNULL,
            start_new_session=True,
            env=env,
        )

    print("4. Waiting for it to answer")
    if not wait_ready():
        print(f"   It never answered on {BASE}. Last lines of {LOG}:")
        try:
            print("   " + "\n   ".join(LOG.read_text().splitlines()[-15:]))
        except Exception:
            pass
        return
    print("   ready")

    print("5. Asking for the five pages")
    ok = 0
    for stage in STAGES:
        url = BASE + "/test-kits/" + stage
        try:
            with urllib.request.urlopen(url, timeout=120) as r:
                status = r.status
                r.read()
        except Exception as e:
            status = getattr(e, "code", 0)
        if status == 200:
            ok += 1
        print(f"   {'/test-kits/' + stage:38} {status}")

    print("")
    if MANIFEST.is_file():
        try:
            m = json.loads(MANIFEST.read_text())
            reg = {
                k.strip("/").split("/")[1]
                for k in m
                if k.startswith("/test-kits/") and k.count("/") == 3
            }
            missing = [s for s in STAGES if s not in reg]
            print("Registered routes: " + ("all five" if not missing else ", ".join(missing) + " still missing"))
        except Exception:
            pass

    print("")
    if ok == len(STAGES):
        print("All five pages open. Open them in your browser now.")
        print("")
        print("The server is running in the background; its output goes to .dev-server.log.")
        print(f"To take port {PORT} back in your own tab, run:  lsof -ti tcp:{PORT} | xargs kill   then   pnpm dev")
    else:
        print(f"{ok} of {len(STAGES)} opened. Server log: {LOG.resolve()}")
        print("Send me that log and I will find the rest.")


if __name__ == "__main__":
    main()
