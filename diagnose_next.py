#!/usr/bin/env python3
"""
Shows what Next.js itself believes exists.

Next decides whether a URL is a page or a 404 from one file:
  .next/server/app-paths-manifest.json

If a route is missing from that file, Next never even tries to compile it,
which is why the request comes back in about 20 milliseconds. This prints
the manifest, compares it to the files on disk, and tells you the fix.
"""
import json
import os
from datetime import datetime
from pathlib import Path

STAGES = [
    "trying-to-conceive",
    "experiencing-symptoms",
    "planning-ahead",
    "perimenopausal",
    "just-curious",
]
MANIFEST = Path(".next/server/app-paths-manifest.json")
ROOT = Path("app/test-kits")


def stamp(p):
    try:
        return datetime.fromtimestamp(p.stat().st_mtime).strftime("%d %b %H:%M:%S")
    except OSError:
        return "missing"


def main():
    print("Page files on disk")
    for stage in STAGES:
        f = ROOT / stage / "page.tsx"
        print(f"   {stage:22} {'present' if f.is_file() else 'MISSING':8} written {stamp(f) if f.is_file() else ''}")

    print("")
    print("What Next has registered")
    if not MANIFEST.is_file():
        print("   No manifest at all, so no route can resolve. .next is missing or empty.")
        print("")
        print("Fix: stop pnpm dev with Ctrl+C, then run:  rm -rf .next && pnpm dev")
        return

    try:
        manifest = json.loads(MANIFEST.read_text())
    except Exception as e:
        print(f"   Could not read the manifest: {e}")
        return

    registered = set()
    for key in manifest:
        parts = key.strip("/").split("/")
        if len(parts) == 3 and parts[0] == "test-kits" and parts[2] == "page":
            registered.add(parts[1])

    for stage in STAGES:
        ok = stage in registered
        print(f"   {stage:22} {'registered' if ok else 'NOT REGISTERED'}")

    print("")
    print(f"Manifest last written {stamp(MANIFEST)}")

    missing = [s for s in STAGES if s not in registered]
    print("")
    if not missing:
        print("Verdict: Next has all five. The 404 is not a routing problem,")
        print("so the page itself is failing. Send me the dev server output for that URL.")
        return

    print(f"Verdict: Next never registered {', '.join(missing)}.")
    print("The files exist but Next's route list is stale, so it answers 404 without compiling.")
    print("")
    print("Do this:")
    print("  1. Go to the tab running pnpm dev and press Ctrl+C.")
    print("  2. Wait for your prompt to come back.")
    print("  3. Run:  rm -rf .next && pnpm dev")
    print("  4. Wait for Ready on http://localhost:3000.")
    print("  5. Run this again:  python3 diagnose_next.py")


if __name__ == "__main__":
    main()
