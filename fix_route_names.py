#!/usr/bin/env python3
"""
Finds why two Tests pages 404 while three work.

On macOS the filesystem ignores letter case, so a folder called
Perimenopausal still looks like perimenopausal to a file check, but
Next.js builds routes from the real folder name and then serves
/test-kits/perimenopausal as a 404.

This prints the real folder names, then renames any near-miss
(case or stray space) to the exact name the links use.
"""
import os
from pathlib import Path

STAGES = [
    "trying-to-conceive",
    "experiencing-symptoms",
    "planning-ahead",
    "perimenopausal",
    "just-curious",
]
ROOT = Path("app/test-kits")


def listing():
    try:
        return sorted(os.listdir(ROOT))
    except FileNotFoundError:
        return []


def main():
    if not ROOT.is_dir():
        print("app/test-kits is not here. Run this from the Fertiterra folder.")
        return

    print("Real folder names inside app/test-kits:")
    for name in listing():
        mark = ""
        if name in STAGES:
            mark = "  ok"
        elif name.strip().lower() in STAGES:
            mark = "  WRONG NAME, links expect " + name.strip().lower()
        print(f"   {name!r}{mark}")

    print("")
    renamed = []
    for stage in STAGES:
        entries = listing()
        if stage in entries:
            continue
        near = [e for e in entries if e.strip().lower() == stage]
        if not near:
            print(f"   No folder for {stage} at all.")
            continue
        old = near[0]
        src = ROOT / old
        tmp = ROOT / (stage + "__renaming")
        os.rename(src, tmp)
        os.rename(tmp, ROOT / stage)
        renamed.append((old, stage))
        print(f"   Renamed {old!r} -> {stage!r}")

    print("")
    entries = listing()
    missing = [s for s in STAGES if s not in entries]
    if renamed:
        print(f"Renamed {len(renamed)} folder(s).")
    if missing:
        print("Still missing: " + ", ".join(missing))
        print("Run the patch script again to recreate them.")
    else:
        print("All five folders now have the exact names the links use.")
        print("Open http://localhost:3000/test-kits/perimenopausal and /just-curious")

    print("")
    print("Final check")
    for stage in STAGES:
        folder = ROOT / stage
        f = folder / "page.tsx"
        exact = stage in os.listdir(ROOT)
        has_export = False
        if f.is_file():
            has_export = "export default" in f.read_text(encoding="utf-8", errors="replace")
        state = "ok" if (exact and has_export) else "PROBLEM"
        print(f"   {stage:22} folder {str(exact):5}  default export {str(has_export):5}  {state}")


if __name__ == "__main__":
    main()
