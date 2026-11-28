#!/usr/bin/env python3
"""
FertiTerra - the Tests dropdown, rebuilt to Hertility's measured placement.

Your header renders its six menus from a list (NAV_MENUS.map), so this patch
works with that instead of replacing a block:

  1. It hides the default panel for the Tests menu only.
  2. It adds Hertility's full-width Tests sheet, with the five stage links and
     the assessment card, as its own element under the header.
  3. The page dims behind it; clicking the dim closes it.

The other five menus keep their exact current markup and behaviour.

Safe: idempotent, writes a backup, and stops without writing if it cannot find
what it needs. If it stops it prints what it saw.
"""
import re
import shutil
import sys
from pathlib import Path

FILE = Path("components/header.tsx")
if not FILE.exists():
    sys.exit("No components/header.tsx here. Run this from the Fertiterra folder.")

src = FILE.read_text(encoding="utf-8")

MARK = "ft-tests-sheet-v8"
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
            out.append((a, j + 1, False, text[a:j].rstrip().endswith("/")))
            i = j + 1
        else:
            j = text.find(">", b)
            if j == -1:
                break
            out.append((b, j + 1, True, False))
            i = j + 1
    return out


# ---------- the first menu must be a list item ----------
CONTAINER_RE = re.compile(r'<div\b[^>]*className=(?:"[^"]*|\{[^}]*)\bdropdown-container\b[^>]*>')
matches = list(CONTAINER_RE.finditer(src))
if not matches:
    print("Could not find any menu container. Nothing written.")
    for line in src.split("\n"):
        if "dropdown-container" in line:
            print("  first line with it: " + line.strip()[:120])
            break
    sys.exit(1)

first = matches[0]
tag = first.group(0)
mkey = re.search(r"key=\{([A-Za-z_$][\w$]*)\.", tag)
if not mkey:
    print("This header's menus are not built from a list. Nothing written.")
    print("  " + " ".join(tag.split())[:160])
    sys.exit(1)
menu_var = mkey.group(1)
print("Menus come from a list, iterated as %r." % menu_var)

# ---------- find the panel inside that first menu ----------
pstart = -1
pend = -1
for a, end_i, is_close, self_closing in scan_divs(src):
    if a <= first.start() or is_close:
        continue
    opening = src[a:end_i]
    if "top-full" in opening and "z-50" in opening:
        pstart = a
        break
if pstart == -1:
    print("Could not find the dropdown panel inside the first menu. Nothing written.")
    sys.exit(1)

depth = 0
for a, end_i, is_close, self_closing in scan_divs(src):
    if a < pstart:
        continue
    if is_close:
        depth -= 1
        if depth == 0:
            pend = end_i
            break
    elif not self_closing:
        depth += 1
if pend == -1:
    print("Found the panel but not where it ends. Nothing written.")
    sys.exit(1)

panel = src[pstart:pend]
print("First menu is %r." % menu_var)
print("")

# ---------- 1. hide that panel for Tests only ----------
guard = '{%s.id === "tests" ? null : (\n' % menu_var
src = src[:pstart] + guard + panel + "\n)}" + src[pend:]

# ---------- 2. add the Tests sheet under the header ----------
nav_close = src.find("</nav>", pstart)
if nav_close == -1:
    print("Could not find the end of the nav. Nothing written.")
    sys.exit(1)
line_start = src.rfind("\n", 0, nav_close) + 1
indent = src[line_start:nav_close]
if indent.strip():
    indent = " " * 10

SHEET = '''{activeDropdown === "tests" && (
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

'''
SHEET = "\n".join((indent + line) if line.strip() else line for line in SHEET.split("\n"))
src = src[:line_start] + SHEET + src[line_start:]

# ---------- marker ----------
if "export function Header()" in src:
    src = src.replace("export function Header() {", "export function Header() {\n  // " + MARK, 1)

# ---------- self-check ----------
for frag, want, what in [
    ('activeDropdown === "tests"', 2, "the Tests sheet toggle"),
    ('%s.id === "tests" ? null' % menu_var, 1, "the hidden default panel"),
    ('label: "Perimenopausal"', 1, "the Perimenopausal link"),
    ("lg:h-[274px]", 1, "the card height"),
]:
    got = src.count(frag)
    if got != want:
        sys.exit("Self-check failed on %s (found %d, wanted %d). Nothing written." % (what, got, want))
def div_balance(text):
    tags = scan_divs(text)
    o = sum(1 for t in tags if not t[2] and not t[3])
    c = sum(1 for t in tags if t[2])
    return o, c


o, c = div_balance(src)
if o != c:
    sys.exit("Div tags unbalanced after the edit (%d open, %d close). Nothing written." % (o, c))

shutil.copyfile(FILE, str(FILE) + ".bak-before-tests-v8")
FILE.write_text(src, encoding="utf-8")
print("Done. The Tests menu now shows Hertility's sheet.")
print("The other five menus are untouched. Backup: components/header.tsx.bak-before-tests-v8")
