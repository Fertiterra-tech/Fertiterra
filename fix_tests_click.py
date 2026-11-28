#!/usr/bin/env python3
"""
Makes the Tests dropdown links actually navigate.

Typed URLs work, clicks do not. The usual cause: the header closes the menu on
mousedown anywhere it thinks is outside the trigger, and the Tests sheet sits
outside that trigger. So the panel unmounts on mousedown and the <Link> never
receives the click.

This stops the sheet from closing itself when you press inside it, and keeps
it open while your pointer is over it. Nothing else is touched.
"""
import re
import sys
from pathlib import Path

HEADER = Path("components/header.tsx")
ROUTES = {
    "Trying to conceive": "/test-kits/trying-to-conceive",
    "Experiencing symptoms": "/test-kits/experiencing-symptoms",
    "Planning ahead": "/test-kits/planning-ahead",
    "Perimenopausal": "/test-kits/perimenopausal",
    "Just curious": "/test-kits/just-curious",
}
LABELS = list(ROUTES)
PROPS = [
    "onMouseDown={(e) => e.stopPropagation()}",
    "onClick={(e) => e.stopPropagation()}",
    'onMouseEnter={() => setActiveDropdown("tests")}',
]


def find_sheet(src):
    """Return the index of the '<div' that opens the Tests sheet."""
    marks = [
        'activeDropdown === "tests" ? "block" : "hidden"',
        'activeDropdown === "tests" ? "block"',
    ]
    anchor = -1
    for m in marks:
        anchor = src.find(m)
        if anchor != -1:
            break
    if anchor == -1:
        hit = src.find("Perimenopausal")
        if hit == -1:
            return -1
        anchor = hit
    return src.rfind("<div", 0, anchor)


def report(src):
    print("=" * 46)
    print("What your header does today")
    lines = src.splitlines()
    hit = next((i for i, l in enumerate(lines) if "Perimenopausal" in l), -1)
    if hit == -1:
        print("   no Perimenopausal link found")
        return
    start, end = max(0, hit - 30), min(len(lines), hit + 22)
    for i in range(start, end):
        t = lines[i].strip()
        if not t:
            continue
        if (
            "Perimenopausal" in t
            or "Just curious" in t
            or "Trying to conceive" in t
            or ("activeDropdown" in t and "tests" in t)
            or "bg-black" in t
            or "z-40" in t
            or "z-50" in t
            or "onMouseLeave" in t
            or "onMouseEnter" in t
            or "addEventListener" in t
            or "preventDefault" in t
            or "pointer-events" in t
        ):
            print(f"{i + 1:5} {t[:130]}")
    print("")
    print("   click-outside listener: " + ("yes" if "addEventListener" in src else "none found"))
    print("   closes on mouse leave:  " + ("yes" if "onMouseLeave" in src else "no"))
    print("   dim backdrop present:   " + ("yes" if "bg-black/" in src else "no"))


def main():
    if not HEADER.is_file():
        print("components/header.tsx not found. Run this from the Fertiterra folder.")
        return
    src = HEADER.read_text(encoding="utf-8")
    original = src

    if not all(lab in src for lab in LABELS):
        print("The Tests panel is not in this header, so there is nothing to fix here.")
        print("Run patch_tests_v8.py first.")
        return

    # 1. make sure every label points at its real page
    fixed_links = []
    for label, route in ROUTES.items():
        pattern = re.compile(
            r'(label:\s*"%s",\s*href:\s*")[^"]*(")' % re.escape(label)
        )
        match = pattern.search(src)
        if match and match.group(0).split('href: "')[1].rstrip('"') != route:
            src = pattern.sub(lambda m: m.group(1) + route + m.group(2), src, count=1)
            fixed_links.append(f"{label} -> {route}")
    if fixed_links:
        print("Repointed these Tests links:")
        for line in fixed_links:
            print("   " + line)
    else:
        print("Tests links already point at the right pages.")

    if "onMouseDown={(e) => e.stopPropagation()}" in src:
        print("Click handling was already patched earlier.")
        if fixed_links:
            HEADER.with_suffix(".tsx.bak-before-click-fix").write_text(original, encoding="utf-8")
            HEADER.write_text(src, encoding="utf-8")
            print("Saved the link fix. Reload http://localhost:3000 and click Tests.")
        return

    at = find_sheet(src)
    if at == -1:
        print("Found the Tests labels but not the panel that holds them. Nothing written.")
        return

    line_start = src.rfind("\n", 0, at) + 1
    indent = " " * (at - line_start)
    body = "\n".join(indent + "  " + p for p in PROPS)
    src = src[: at + 4] + "\n" + body + src[at + 4:]

    HEADER.with_suffix(".tsx.bak-before-click-fix").write_text(original, encoding="utf-8")
    HEADER.write_text(src, encoding="utf-8")

    print("Patched the Tests sheet so pressing a link does not close the menu.")
    print("Backup: components/header.tsx.bak-before-click-fix")
    print("")
    print("Next: the dev server reloads on its own. Open http://localhost:3000,")
    print("click Tests, then click Trying to conceive.")
    print("")
    print("If it still does not open, run:  python3 inspect_tests_click.py")
    print("and send me what it prints.")
    print("")
    report(original)


if __name__ == "__main__":
    main()
