#!/usr/bin/env python3
"""
FertiTerra - the Tests dropdown, rebuilt to Hertility's measured placement.

Target: components/header.tsx as it is in your Fertiterra folder right now:
783 lines, five menus (Hormones & Fertility, Symptoms, Clinical Care, Learn, Shop),
each dropdown a 320px white card.

What it changes:
  1. The first menu becomes Tests, with Hertility's five stage links.
  2. Its dropdown becomes Hertility's full-width sheet, measured from your screenshot.
  3. The page dims behind it; clicking the dim closes it.
  4. One class added to the header bar so the sheet can span full width.

The other four menus (Symptoms, Clinical Care, Learn, Shop) are not touched:
their markup is left byte for byte, and the script checks that at the end.

Idempotent. Stops and writes nothing if the file is not what it expects.
"""
import shutil, sys
from pathlib import Path

FILE = Path("components/header.tsx")
if not FILE.exists():
    sys.exit("No components/header.tsx here. Run this from the Fertiterra folder.")
src = FILE.read_text(encoding="utf-8")

MARK = "ft-tests-sheet-v6"
if MARK in src:
    print("Already applied. Nothing to do.")
    sys.exit(1)

CONTAINER = '            <div className="relative dropdown-container">'
BAR = '      <div className="w-full border-b border-[#1F2328]/10 bg-[#FAF7F2]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#FAF7F2]/80">'
HORMONE_PANEL = 'absolute left-0 top-full z-50 mt-3 w-80 rounded-xl border border-[#1F2328]/10 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${activeDropdown === "hormones" ? "block" : "hidden"}'

def need(s, what, count=1, _label=None):
    n = s.count(what)
    if n != count:
        sys.exit("Could not find " + (_label or what) + " exactly %d time(s) (found %d). Stopped, nothing written." % (count, n))

need(src, CONTAINER, 5, "the menu containers")
need(src, BAR, 1, "the header bar")
need(src, HORMONE_PANEL, 1, "the first menu's dropdown card")

start = src.index(CONTAINER)
nxt = src.index(CONTAINER, start + len(CONTAINER))
block = src[start:nxt]
if 'Hormones & Fertility' not in block or 'activeDropdown === "hormones"' not in block:
    sys.exit("The first menu is not the one I expect. Stopped, nothing written.")

NEW = '''            <div className="dropdown-container">
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
            </div>

'''

src = src[:start] + NEW + src[nxt:]

src = src.replace(BAR, BAR.replace('<div className="w-full', '<div className="relative w-full'), 1)

src = src.replace('export function Header() {', 'export function Header() {\n  // ' + MARK, 1)

for frag, want, what in [("activeDropdown === \"tests\"", 5, "the Tests menu"),
                         ('label: "Perimenopausal"', 1, "the Perimenopausal link"),
                         ('activeDropdown === "symptoms"', 2, "the Symptoms menu"),
                         ('activeDropdown === "clinical"', 2, "the Clinical Care menu"),
                         ('activeDropdown === "learn"', 2, "the Learn menu"),
                         ('activeDropdown === "shop"', 2, "the Shop menu")]:
    if src.count(frag) != want:
        sys.exit("Self-check failed on " + what + " (" + str(src.count(frag)) + "). Stopped, nothing written.")

shutil.copyfile(FILE, str(FILE) + ".bak-before-tests-v6")
FILE.write_text(src, encoding="utf-8")
print("Done. The first menu is now the Tests dropdown. The other four menus are untouched.")
print("Backup: components/header.tsx.bak-before-tests-v6")
