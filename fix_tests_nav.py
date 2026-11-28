#!/usr/bin/env python3
"""
Makes a press on a Tests link navigate immediately.

Your header listens for presses on the page and closes the dropdown when the
press is outside the trigger. The Tests sheet sits outside that trigger, so the
panel closes on press-down, the link is removed before the press completes, and
the click never happens. That is why a typed URL works and a click does not.

This makes each Tests link start navigating on the press itself, which is the
first thing that happens, so nothing can close the panel out from under it.
"""
import re
from pathlib import Path

HEADER = Path("components/header.tsx")
LABELS = ["Trying to conceive", "Perimenopausal", "Just curious"]
NAV = 'onPointerDown={() => { window.location.href = item.href; }}'


def main():
    if not HEADER.is_file():
        print("components/header.tsx not found. Run this from the Fertiterra folder.")
        return
    src = HEADER.read_text(encoding="utf-8")
    original = src

    if not all(lab in src for lab in LABELS):
        print("The Tests panel is not in this header. Nothing to do.")
        return
    if NAV in src:
        print("Already in place: the Tests links already navigate on press.")
        show_listener(src)
        return

    anchor = src.find("Perimenopausal")
    link_at = src.find("<Link", anchor)
    if link_at == -1:
        print("Found the labels but not the <Link> that renders them. Nothing written.")
        return

    src = src[: link_at + 5] + "\n            " + NAV + src[link_at + 5:]

    HEADER.with_suffix(".tsx.bak-before-nav-fix").write_text(original, encoding="utf-8")
    HEADER.write_text(src, encoding="utf-8")

    print("Done. Each Tests link now navigates the moment you press it.")
    print("Backup: components/header.tsx.bak-before-nav-fix")
    print("")
    print("Reload http://localhost:3000, click Tests, click Trying to conceive.")
    print("It will do a full page load rather than a soft transition. That is intended.")
    print("")
    show_listener(src)


def show_listener(src):
    lines = src.splitlines()
    print("=" * 46)
    print("The listener that closes your menu")
    shown = 0
    for i, line in enumerate(lines):
        if "addEventListener" in line:
            start, end = max(0, i - 8), min(len(lines), i + 6)
            for j in range(start, end):
                print(f"{j + 1:5} {lines[j][:140]}")
            print("")
            shown += 1
            if shown >= 2:
                break
    if not shown:
        print("   none found")


if __name__ == "__main__":
    main()
