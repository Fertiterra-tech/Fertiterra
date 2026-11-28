#!/usr/bin/env python3
"""
Fixes the failed Vercel build.

The push went through, but Vercel failed the build, so production kept serving
the old deployment. That is why nothing changed on the live site.

Cause: app/symptoms/page.tsx imported the same block twice (lines 4 and 5).
Webpack stops with "the name SymptomByline is defined multiple times", the build
fails, and the deploy is marked failed.

This removes any duplicated import line in app/ and components/. Idempotent.
"""
import sys
from pathlib import Path

ROOTS = ["app", "components"]


def main():
    if not Path("package.json").is_file() or not Path("app").is_dir():
        print("Run this from the Fertiterra folder.")
        return 1

    fixed = []
    for root in ROOTS:
        for p in Path(root).rglob("*.tsx"):
            try:
                lines = p.read_text(encoding="utf-8").splitlines(keepends=True)
            except Exception:
                continue
            out, seen, dropped = [], set(), []
            for line in lines:
                key = line.strip()
                if key.startswith("import ") and key in seen:
                    dropped.append(key)
                    continue
                if key.startswith("import "):
                    seen.add(key)
                out.append(line)
            if dropped:
                p.write_text("".join(out), encoding="utf-8")
                fixed.append((str(p), len(dropped)))

    if not fixed:
        print("No duplicated imports found. Nothing to change.")
        return 0

    for name, n in fixed:
        print("fixed %s (%d duplicate import line%s)" % (name, n, "" if n == 1 else "s"))
    print("")
    print("Now push so Vercel builds again:")
    print("   git add -A && git commit -m \"Fix duplicate import that broke the build\" && git push")
    return 0


if __name__ == "__main__":
    sys.exit(main())
