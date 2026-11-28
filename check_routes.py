#!/usr/bin/env python3
"""
Tells you exactly why a Tests page does or does not open.

It checks three separate things and prints the answer, so we stop guessing:
  1. is the page file on disk
  2. does the shared component know all five stages
  3. what your dev server actually answers, and whether it is running in
     development mode or as a stale production build
"""
import json
import re
import sys
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
COMPONENT = Path("components/ft/test-stage-page.tsx")


def fetch(path):
    try:
        with urllib.request.urlopen(BASE + path, timeout=120) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except Exception as e:
        code = getattr(e, "code", None)
        return code if code else 0, ""


def main():
    print("1. Page files on disk")
    missing = []
    for stage in STAGES:
        f = Path("app/test-kits") / stage / "page.tsx"
        if f.exists():
            text = f.read_text(encoding="utf-8")
            has_header = "<Header" in text
            has_footer = "<SiteFooter" in text
            print(f"   OK      {f}  ({len(text)} bytes, Header {has_header}, SiteFooter {has_footer})")
        else:
            missing.append(str(f))
            print(f"   MISSING {f}")

    print("")
    print("2. Shared component")
    if COMPONENT.exists():
        src = COMPONENT.read_text(encoding="utf-8")
        absent = [s for s in STAGES if s not in src]
        if absent:
            print(f"   MISSING stage(s) in {COMPONENT}: {', '.join(absent)}")
        else:
            print(f"   OK      all five stages present in {COMPONENT}")
    else:
        print(f"   MISSING {COMPONENT}")

    print("")
    print(f"3. What {BASE} answers")
    _, home = fetch("/")
    m = re.search(r'buildId\\*"?\s*:\s*\\*"?([A-Za-z0-9_.-]+)', home)
    build = m.group(1) if m else "unknown"
    if not home:
        mode = "NOT REACHABLE - is pnpm dev running?"
    elif build == "development":
        mode = "development (picks up new files)"
    else:
        mode = f"PRODUCTION BUILD (buildId {build}) - new pages never appear until you rebuild"
    print(f"   mode: {mode}")

    results = {}
    for stage in STAGES:
        status, _ = fetch("/test-kits/" + stage)
        results[stage] = status
        print(f"   {('/test-kits/' + stage):38} {status if status else 'no response'}")

    print("")
    print("Verdict")
    if missing:
        print("   The page file is not on disk, so nothing can serve it.")
        print("   Run the patch again from the Fertiterra folder.")
    elif any(s == 404 for s in results.values()) and mode.startswith("development"):
        print("   The files are all there but the dev server still says 404 for some.")
        print("   That is a stale route cache. Stop pnpm dev with Ctrl+C, then run:")
        print("     rm -rf .next && pnpm dev")
        print("   Then run this check again.")
    elif mode.startswith("PRODUCTION"):
        print("   You are serving a production build, so new routes cannot appear.")
        print("   Stop it with Ctrl+C, then run: pnpm dev")
    elif all(s == 200 for s in results.values()):
        print("   All five pages open. Nothing to fix on the server side.")
    else:
        print("   Something else is answering. Send me this whole output.")


if __name__ == "__main__":
    main()
