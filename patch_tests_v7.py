#!/usr/bin/env python3
"""
FertiTerra - the Tests dropdown, rebuilt to Hertility's measured placement.

This version does not depend on exact text or indentation. It finds the menu
containers by structure, takes the first one, and replaces it with the Tests
dropdown. Everything else in the header is left alone.

What it does:
  1. The first nav menu becomes Tests, with Hertility's five stage links.
  2. Its dropdown becomes Hertility's full-width sheet, measured from your screenshot.
  3. The page dims behind it; clicking the dim closes it.
  4. One class added to the header bar so the sheet can span full width.

Safe: idempotent, writes a backup, and stops without writing if it cannot find
what it needs. If it stops it prints what it saw so you can paste it back.
"""
import re
import shutil
import sys
from pathlib import Path

FILE = Path("components/header.tsx")
if not FILE.exists():
    sys.exit("No components/header.tsx here. Run this from the Fertiterra folder.")

src = FILE.read_text(encoding="utf-8")
src_before = src

MARK = "ft-tests-sheet-v7"
if MARK in src:
    print("Already applied. Nothing to do.")
    sys.exit(0)

def scan_divs(text):
    """Every <div and </div with its end index, handling JSX braces and strings."""
    out = []
    i = 0
    n = len(text)
    while i < n:
        a = text.find("<div", i)
        b = text.find("</div", i)
        if a == -1 and b == -1:
            break
        if a != -1 and (b == -1 or a < b):
            j = a + 4
            depth = 0
            quote = None
            while j < n:
                ch = text[j]
                if quote:
                    if ch == quote and text[j - 1] != "\\":
                        quote = None
                elif ch in "\"'`":
                    quote = ch
                elif ch == "{":
                    depth += 1
                elif ch == "}":
                    depth -= 1
                elif ch == ">" and depth == 0:
                    break
                j += 1
            self_closing = text[a:j].rstrip().endswith("/")
            out.append((a, j + 1, False, self_closing))
            i = j + 1
        else:
            j = text.find(">", b)
            if j == -1:
                break
            out.append((b, j + 1, True, False))
            i = j + 1
    return out


def div_balance(text):
    tags = scan_divs(text)
    o = sum(1 for t in tags if not t[2] and not t[3])
    c = sum(1 for t in tags if t[2])
    return o, c

# ---------- locate the menu containers by structure ----------
CONTAINER_RE = re.compile(r'<div\b[^>]*className=(?:"[^"]*|\{[^}]*)\bdropdown-container\b[^>]*>')
matches = list(CONTAINER_RE.finditer(src))

if not matches:
    print("Could not find any menu container. Nothing written.")
    print("")
    print("What I saw:")
    print("  'dropdown-container' appears %d time(s)" % src.count("dropdown-container"))
    print("  'activeDropdown' appears %d time(s)" % src.count("activeDropdown"))
    print("  file length %d characters, %d lines" % (len(src), src.count("\n") + 1))
    for line in src.split("\n"):
        if "dropdown-container" in line:
            print("  first line with it: " + line.strip()[:120])
            break
    sys.exit(1)


def block_end(text, start):
    """Index just past the </div> that closes the div opening at start."""
    depth = 0
    for a, end_i, is_close, self_closing in scan_divs(text):
        if a < start:
            continue
        if is_close:
            depth -= 1
            if depth == 0:
                return end_i
        elif not self_closing:
            depth += 1
    return -1


first = matches[0]
start = first.start()
end = block_end(src, start)
if end == -1:
    sys.exit("Found the first menu but could not find where it ends. Nothing written.")

block = src[start:end]

# guard: this patch expects five or more separate menu blocks, not a mapped list
tag = first.group(0)
if "key=" in tag or ".map(" in src[max(0, start - 400):start]:
    sys.exit(
        "This header builds its menus from a list, so replacing one block would\n"
        "change every menu. Nothing written. Send me this line and I will adapt it:\n"
        "  " + " ".join(tag.split())[:160]
    )
line_start = src.rfind("\n", 0, start) + 1
indent = src[line_start:start]
if indent.strip():
    indent = " " * 12

label = "unknown"
m = re.search(r">\s*\n\s*([A-Za-z][^<>{}\n]{1,40})\n\s*<svg", block)
if m:
    label = m.group(1).strip()

print("Found %d menu container(s)." % len(matches))
print("First menu is currently: %r" % label)
print("")

# ---------- the new Tests block ----------
NEW = '''<div className="dropdown-container">
  <button
    className="flex items-center gap-1 text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]"
    aria-expanded={activeDropdown === "tests"}
    onClick={() => setActiveDropdown(activeDropdown === "tests" ? null : "tests")}
  >
    Tests
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 opacity-60 transition-transform duration-200 ${activeDropdown === "tests" ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>

  {activeDropdown === "tests" && (
    <div
      aria-hidden="true"
      onClick={() => setActiveDropdown(null)}
      className="absolute left-0 top-full z-40 h-[200vh] w-full bg-black/40"
    />
  )}

  <div
    className={`absolute left-0 right-0 top-full z-50 border-t border-[#1F2328]/10 bg-[#FAF7F2] shadow-[0_24px_48px_-16px_rgba(31,61,51,0.28)] ${activeDropdown === "tests" ? "block" : "hidden"}`}
  >
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pb-[34px] pt-[31px] sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-20">
      <ul className="space-y-0 pt-[14px]">
        {[
          { label: "Trying to conceive", href: "/learn/trying-to-conceive" },
          { label: "Experiencing symptoms", href: "/symptoms" },
          { label: "Planning ahead", href: "/learn/planning-future-children" },
          { label: "Perimenopausal", href: "/test-kits/hormone-fertility" },
          { label: "Just curious", href: "/test-kits/hormone-fertility" },
        ].map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={() => setActiveDropdown(null)}
              className="flex items-center py-[10px] text-[18px] leading-[25px] text-[#1F2328] transition-colors hover:text-[#1F3D33]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex w-full shrink-0 flex-col rounded-2xl bg-[#E4EDE6] px-7 pb-12 pt-[55px] lg:h-[274px] lg:w-[357px]">
        <p className="mb-[10px] text-[12px] font-semibold uppercase leading-[20px] tracking-[0.1em] text-[#1F2328]/80">
          Not sure where to start?
        </p>
        <p className="text-[15px] leading-[25px] text-[#1F2328]/80">
          Tell us what brought you here and we&apos;ll let you know how we can help.
        </p>
        <Link
          href="/quiz"
          onClick={() => setActiveDropdown(null)}
          className="mt-auto flex h-[46px] w-full items-center justify-center rounded-full bg-[#E6FF70] text-[16px] font-semibold text-[#1F3D33] transition-opacity hover:opacity-90"
        >
          Start here
        </Link>
      </div>
    </div>
  </div>
</div>'''

NEW = "\n".join((indent + line) if line.strip() else line for line in NEW.split("\n"))

src = src[:start] + NEW + src[end:]

# ---------- let the sheet span the header, not the button ----------
BAR_RE = re.compile(r'<div\b[^>]*className="([^"]*\bbackdrop-blur[^"]*)"')
bar = BAR_RE.search(src)
if not bar:
    sys.exit("Could not find the header bar to widen the sheet. Nothing written.")
cls = bar.group(1)
if "relative" not in cls.split():
    src = src[:bar.start(1)] + "relative " + cls + src[bar.end(1):]

# ---------- marker ----------
if "export function Header()" in src:
    src = src.replace("export function Header() {", "export function Header() {\n  // " + MARK, 1)
else:
    src = "// " + MARK + "\n" + src

# ---------- self-check ----------
after = list(CONTAINER_RE.finditer(src))
if len(after) != len(matches):
    sys.exit("Container count changed from %d to %d. Nothing written." % (len(matches), len(after)))
for frag, want, what in [
    ('activeDropdown === "tests"', 5, "the Tests menu"),
    ('label: "Perimenopausal"', 1, "the Perimenopausal link"),
    ("lg:h-[274px]", 1, "the card height"),
]:
    got = src.count(frag)
    if got != want:
        sys.exit("Self-check failed on %s (found %d, wanted %d). Nothing written." % (what, got, want))
o, c = div_balance(src)
if o != c:
    sys.exit("Div tags unbalanced after the edit (%d open, %d close). Nothing written." % (o, c))

shutil.copyfile(FILE, str(FILE) + ".bak-before-tests-v7")
FILE.write_text(src, encoding="utf-8")
print("Done. The first menu is now the Tests dropdown.")
print("The other menus are untouched. Backup: components/header.tsx.bak-before-tests-v7")
