#!/usr/bin/env python3
"""
FertiTerra - Tests dropdown only, rebuilt to Hertility's measured placement.

Target: components/header.tsx as it exists in your Fertiterra folder (the ft-nav-v4
header: Tests / Appointments / Treatments / Symptoms / Learn / Employers).

What it changes, and nothing else:
  1. The Tests menu's five links become Hertility's five labels.
  2. The Tests sheet matches Hertility's measured geometry.
  3. The page dims behind the Tests sheet, and clicking the dim closes it.

Every other menu is untouched: each change is gated on menu.id === "tests", and the
non-Tests branch keeps your existing class names byte for byte.

Idempotent: run it twice and the second run writes nothing.
"""
import re, shutil, sys
from pathlib import Path

FILE = Path("components/header.tsx")
if not FILE.exists():
    sys.exit("No components/header.tsx here. Run this from the Fertiterra folder.")
src = FILE.read_text(encoding="utf-8")

MARK = "// ft-tests-sheet-v5"
if MARK in src:
    print("Already applied. Nothing to do.")
    sys.exit(1)

def need(anchor, what, count=1):
    n = src.count(anchor)
    if n != count:
        sys.exit("Could not find " + what + " exactly %d time(s) (found %d). Stopped, nothing written." % (count, n))

# ---------- anchors, taken from your file ----------
TESTS_LINKS = '''            { label: "Trying to conceive", href: "/learn/trying-to-conceive" },
            { label: "Experiencing symptoms", href: "/learn/experiencing-symptoms" },
            { label: "Planning ahead", href: "/learn/planning-future-children" },
            { label: "Struggling to conceive", href: "/learn/struggling-to-conceive" },
            { label: "Just curious", href: "/test-kits/hormone-fertility" },'''
PANEL   = 'className={`absolute left-0 right-0 top-full z-50 border-t border-[#1F2328]/10 bg-[#FAF7F2] shadow-[0_24px_48px_-16px_rgba(31,61,51,0.28)] ${open ? "block" : "hidden"}`}'
INNER   = '<div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-9 sm:px-10 lg:flex-row lg:items-start lg:px-20">'
LINKBOX = '<div className={`flex-1 ${menu.groups.length > 1 ? "grid grid-cols-2 gap-x-10 gap-y-6" : "grid grid-cols-1 gap-y-1"}`}>'
LINKROW = 'className="flex items-center justify-between rounded-lg px-2.5 py-2 text-[15px] text-[#1F2328] transition-colors hover:bg-[#E4EDE6] hover:text-[#1F3D33]"'
CARD    = '<div className="w-full shrink-0 rounded-2xl bg-[#E4EDE6] p-6 lg:w-[360px]">'
EYEBROW = '<p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1F3D33]/70">'
BODY    = '<p className="mt-2 text-[15px] leading-snug text-[#1F2328]/80">'
BTN     = 'className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#E6FF70] px-5 py-2.5 text-[14px] font-semibold text-[#1F3D33] transition-opacity hover:opacity-90"'
ARROW   = '                          <span aria-hidden="true">&rarr;</span>'
MENUOPEN = '                  <div\n                    className={`absolute left-0 right-0 top-full z-50'

for a, w in [(TESTS_LINKS, "the Tests links"), (PANEL, "the dropdown sheet"), (INNER, "the sheet inner row"),
             (LINKBOX, "the link column"), (LINKROW, "a link row"), (CARD, "the assessment card"),
             (EYEBROW, "the card eyebrow"), (BODY, "the card body"), (BTN, "the lime button"),
             (ARROW, "the button arrow"), (MENUOPEN, "the sheet opening")]:
    need(a, w)

# ---------- 1. Tests links: Hertility's five labels ----------
src = src.replace(TESTS_LINKS, '''            { label: "Trying to conceive", href: "/learn/trying-to-conceive" },
            { label: "Experiencing symptoms", href: "/learn/experiencing-symptoms" },
            { label: "Planning ahead", href: "/learn/planning-future-children" },
            { label: "Perimenopausal", href: "/test-kits/hormone-fertility" },
            { label: "Just curious", href: "/test-kits/hormone-fertility" },''', 1)

# ---------- 2. sheet: mark it, add the dim behind Tests ----------
src = src.replace(MENUOPEN, '''                  {menu.id === "tests" && open && (
                    <div aria-hidden="true" onClick={() => setActiveDropdown(null)} className="absolute left-0 top-full z-40 h-[200vh] w-full bg-black/40" />
                  )}
                  <div
                    className={`absolute left-0 right-0 top-full z-50''', 1)

# ---------- 3. sheet geometry: 31px above, 34px below, one rail ----------
src = src.replace(INNER,
    '<div className={menu.id === "tests" ? "mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pb-[34px] pt-[31px] sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-20" : "mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-9 sm:px-10 lg:flex-row lg:items-start lg:px-20"}>', 1)

# ---------- 4. link column: plain list at the logo edge ----------
src = src.replace(LINKBOX,
    '<div className={menu.id === "tests" ? "flex-1" : `flex-1 ${menu.groups.length > 1 ? "grid grid-cols-2 gap-x-10 gap-y-6" : "grid grid-cols-1 gap-y-1"}`}>', 1)
src = src.replace('''                        <div key={gi}>''', '''                        <div key={gi} className={menu.id === "tests" ? "pt-[14px]" : undefined}>''', 1)
src = src.replace('''                          <ul className="space-y-0.5">''', '''                          <ul className={menu.id === "tests" ? "space-y-0" : "space-y-0.5"}>''', 1)
src = src.replace(LINKROW,
    'className={menu.id === "tests" ? "flex items-center py-[10px] text-[18px] leading-[25px] text-[#1F2328] transition-colors hover:text-[#1F3D33]" : "flex items-center justify-between rounded-lg px-2.5 py-2 text-[15px] text-[#1F2328] transition-colors hover:bg-[#E4EDE6] hover:text-[#1F3D33]"}', 1)

# ---------- 5. card: 357 x 274, far right, button filling it ----------
src = src.replace(CARD,
    '<div className={menu.id === "tests" ? "w-full shrink-0 rounded-2xl bg-[#E4EDE6] px-7 pb-12 pt-[55px] lg:w-[357px]" : "w-full shrink-0 rounded-2xl bg-[#E4EDE6] p-6 lg:w-[360px]"}>', 1)
src = src.replace(EYEBROW,
    '<p className={menu.id === "tests" ? "mb-[10px] text-[12px] font-semibold uppercase leading-[20px] tracking-[0.1em] text-[#1F2328]/80" : "text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1F3D33]/70"}>', 1)
src = src.replace(BODY,
    '<p className={menu.id === "tests" ? "text-[15px] leading-[25px] text-[#1F2328]/80" : "mt-2 text-[15px] leading-snug text-[#1F2328]/80"}>', 1)
src = src.replace(BTN,
    'className={menu.id === "tests" ? "mt-[25px] flex h-[46px] w-full items-center justify-center rounded-full bg-[#E6FF70] text-[16px] font-semibold text-[#1F3D33] transition-opacity hover:opacity-90" : "mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#E6FF70] px-5 py-2.5 text-[14px] font-semibold text-[#1F3D33] transition-opacity hover:opacity-90"}', 1)
src = src.replace(ARROW, '''                          {menu.id !== "tests" && <span aria-hidden="true">&rarr;</span>}''', 1)

src = src.replace("  // ft-nav-v4-hertility-structure", "  // ft-nav-v4-hertility-structure\n  " + MARK, 1)

# ---------- preflight on the result ----------
checks = [
    ('menu.id === "tests"', 10, "the Tests-only gates"),
    ('label: "Perimenopausal"', 1, "the Perimenopausal link"),
    ('id: "appointments"', 1, "the Appointments menu"),
    ('id: "employers"', 1, "the Employers menu"),
]
for frag, want, what in checks:
    got = src.count(frag)
    if got < want:
        sys.exit("Self-check failed on " + what + " (" + str(got) + "). Stopped, nothing written.")

shutil.copyfile(FILE, str(FILE) + ".bak-before-tests-v5")
FILE.write_text(src, encoding="utf-8")
print("Done. Tests dropdown rebuilt. Nothing else in the header changed.")
print("Backup: components/header.tsx.bak-before-tests-v5")
