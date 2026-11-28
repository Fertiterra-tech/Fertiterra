#!/usr/bin/env python3
"""
FertiTerra header: the Tests dropdown ONLY.

Changes in components/header.tsx and nothing else:
  1. Tests menu items become: Trying to conceive, Experiencing symptoms,
     Planning ahead, Perimenopausal, Just curious. Each opens a page that exists today.
  2. Tests panel becomes a full-width sheet: links on the left, the assessment
     card on the right with a lime button.
Every other menu (Appointments, Treatments, Symptoms, Learn, Employers) is untouched.

Run from the Fertiterra repo root:   python3 patch_tests_only.py
Backup: components/header.tsx.bak-before-tests    Safe to run twice.
Every anchor is checked first. If any is missing it stops and writes nothing.
"""
import os, sys, shutil

PATH = "components/header.tsx"
MARK = "ft-tests-sheet-v1"

if not os.path.exists(PATH):
    sys.exit("Run this from the Fertiterra repo root (components/header.tsx not found).")
src = open(PATH, encoding="utf-8").read()
if MARK in src:
    sys.exit("Already applied. Nothing to do.")

def need(anchor, what):
    if src.count(anchor) != 1:
        sys.exit("Could not find " + what + " exactly once (found " + str(src.count(anchor)) + "). Stopped, nothing written.")

# ---- anchors -------------------------------------------------------------
PANEL = 'className={`absolute left-0 top-full z-50 mt-3 w-[340px] rounded-2xl border border-[#1F2328]/10 bg-[#FAF7F2] p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${open ? "block" : "hidden"}`}'
INNER = '<div className="space-y-5">'
CARD = '<div className="rounded-xl bg-[#E4EDE6] p-4">'
BTN = 'className="inline-flex items-center rounded-full bg-[#1F2328] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#1F3D33]"'
WRAP = '<div key={menu.id} className="relative dropdown-container">'
BAR = '<div className="w-full border-b border-[#1F2328]/10 bg-[#FAF7F2]/90 backdrop-blur-md'
for a, w in [(PANEL, "the dropdown panel"), (INNER, "the panel inner wrapper"), (CARD, "the assessment card"),
             (BTN, "the assessment button"), (WRAP, "the menu wrapper"), (BAR, "the header bar")]:
    need(a, w)
EYEBROW = '<p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1F3D33]/70">Start your 8-minute hormone &amp; fertility assessment</p>'
BODY = '<p className="mb-3 text-[14px] leading-snug text-[#1F2328]/80">Get personalised next steps built around your symptoms and goals.</p>'
need(EYEBROW, "the card eyebrow"); need(BODY, "the card body")

# ---- 1. Tests items ------------------------------------------------------
t0 = src.index('id: "tests",')
t1 = src.index('id: "appointments",')
seg = src[t0:t1]
if "links: [" not in seg:
    sys.exit("Tests menu is not in the expected shape. Stopped, nothing written.")
a = seg.index("links: [")
b = seg.index("],", a) + 2
seg = seg[:a] + '''links: [
            { label: "Trying to conceive", href: "/learn/trying-to-conceive" },
            { label: "Experiencing symptoms", href: "/symptoms" },
            { label: "Planning ahead", href: "/learn/planning-future-children" },
            { label: "Perimenopausal", href: "/test-kits/hormone-fertility" },
            { label: "Just curious", href: "/test-kits/hormone-fertility" },
          ],''' + seg[b:]
src = src[:t0] + seg + src[t1:]

# ---- 2. Tests panel: sheet for Tests only, every other menu unchanged ----
GROUP = '<div key={gi}>'
LINK = 'className="flex items-center justify-between rounded-lg px-2.5 py-2 text-[15px] text-[#1F2328] transition-colors hover:bg-[#E4EDE6] hover:text-[#1F3D33]"'
ULC = '<ul className="space-y-0.5">'
need(GROUP, "the link group"); need(LINK, "the link row"); need(ULC, "the link list")
src = src.replace(PANEL,
    'className={menu.id === "tests" ? `absolute left-0 right-0 top-full z-50 border-t border-[#1F2328]/10 bg-[#FAF7F2] shadow-[0_24px_48px_-16px_rgba(31,61,51,0.28)] ${open ? "block" : "hidden"}` : `absolute left-0 top-full z-50 mt-3 w-[340px] rounded-2xl border border-[#1F2328]/10 bg-[#FAF7F2] p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${open ? "block" : "hidden"}`}', 1)
src = src.replace(EYEBROW, '<p className={menu.id === "tests" ? "mb-[10px] text-[12px] font-semibold uppercase leading-[20px] tracking-[0.1em] text-[#1F2328]/80" : "mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1F3D33]/70"}>Start your 8-minute hormone &amp; fertility assessment</p>', 1)
src = src.replace(BODY, '<p className={menu.id === "tests" ? "mb-0 text-[15px] leading-[25px] text-[#1F2328]/80" : "mb-3 text-[14px] leading-snug text-[#1F2328]/80"}>Get personalised next steps built around your symptoms and goals.</p>', 1)
OVERLAY_ANCHOR = '                  <div\n                    className={menu.id === "tests" ?'
need(OVERLAY_ANCHOR, "the panel opening")
src = src.replace(OVERLAY_ANCHOR,
    '                  {menu.id === "tests" && open && (\n                    <div aria-hidden="true" onClick={() => setActiveDropdown(null)} className="absolute left-0 top-full z-40 h-[200vh] w-full bg-black/40" />\n                  )}\n' + OVERLAY_ANCHOR, 1)
src = src.replace(GROUP, '<div key={gi} className={menu.id === "tests" ? "pt-[14px]" : undefined}>', 1)
src = src.replace(ULC, '<ul className={menu.id === "tests" ? "space-y-0" : "space-y-0.5"}>', 1)
src = src.replace(LINK,
    'className={menu.id === "tests" ? "flex items-center py-[10px] text-[18px] leading-[25px] text-[#1F2328] transition-colors hover:text-[#1F3D33]" : "flex items-center justify-between rounded-lg px-2.5 py-2 text-[15px] text-[#1F2328] transition-colors hover:bg-[#E4EDE6] hover:text-[#1F3D33]"}', 1)
src = src.replace(INNER,
    '<div className={menu.id === "tests" ? "mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pb-[34px] pt-[31px] sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-20" : "space-y-5"}>', 1)
src = src.replace(CARD,
    '<div className={menu.id === "tests" ? "w-full shrink-0 rounded-2xl bg-[#E4EDE6] px-7 pb-12 pt-[55px] lg:w-[357px]" : "rounded-xl bg-[#E4EDE6] p-4"}>', 1)
src = src.replace(BTN,
    'className={menu.id === "tests" ? "mt-[25px] flex h-[46px] w-full items-center justify-center rounded-full bg-[#E6FF70] text-[16px] font-semibold text-[#1F3D33] transition-opacity hover:opacity-90" : "inline-flex items-center rounded-full bg-[#1F2328] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#1F3D33]"}', 1)
src = src.replace(WRAP,
    '<div key={menu.id} className={menu.id === "tests" ? "dropdown-container" : "relative dropdown-container"}>', 1)
src = src.replace(BAR, '<div className="relative w-full border-b border-[#1F2328]/10 bg-[#FAF7F2]/90 backdrop-blur-md', 1)
src = src.replace("export function Header", "// " + MARK + "\nexport function Header", 1)

shutil.copy(PATH, PATH + ".bak-before-tests")
open(PATH, "w", encoding="utf-8").write(src)
print("Done. Tests dropdown rebuilt. Nothing else in the header changed.")
print("Backup: components/header.tsx.bak-before-tests")
