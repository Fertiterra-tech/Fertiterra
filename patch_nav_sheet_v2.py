#!/usr/bin/env python3
"""
1. Puts every dropdown on the Tests sheet layout (one shared panel, one card per menu).
2. Makes /workplace itself the Workplace hub, so the "What we do" link has a page.

Edits components/header.tsx in place after writing components/header.tsx.bak-before-sheet.
Writes app/workplace/page.tsx if it is not already the hub.
If an anchor is missing it prints what it looked for and changes nothing.
"""
from pathlib import Path

HUB_PAGE = """import type { Metadata } from "next"
import { SectionsPage } from "@/components/ft/sections-page"
import { WORKPLACE } from "@/components/ft/workplace-data"

export const metadata: Metadata = {
  title: "What We Do | FertiTerra",
  description: "How FertiTerra works with employers, insurers and brokers to give teams real fertility and hormone care.",
}

export default function Page() {
  return <SectionsPage entry={WORKPLACE["workplace"]} />
}
"""


def transform(src):
    
    
    # ---------- 1. menu data: one card per menu, Tests links point at real pages ----------
    CARD_BLOCK = '''
      // ft-sheet-v9: every dropdown shares the Tests sheet layout. One card per menu.
      type NavCard = { eyebrow: string; body: string; label: string; href: string }
      const NAV_CARDS: Record<string, NavCard> = {
        tests: {
          eyebrow: "Not sure where to start?",
          body: "Tell us what brought you here and we'll let you know how we can help.",
          label: "Start here",
          href: "/screening",
        },
        appointments: {
          eyebrow: "Not sure who to see?",
          body: "A Fertility Advisor can talk you through which appointment fits what you are dealing with.",
          label: "Speak to an advisor",
          href: "/appointments/advisor-call",
        },
        treatments: {
          eyebrow: "Thinking about treatment?",
          body: "Get your results first, so every clinic you speak to is quoting against the same information.",
          label: "See the test",
          href: "/test-kits",
        },
        symptoms: {
          eyebrow: "Not sure what is causing it?",
          body: "A hormone and fertility test shows what your levels are doing, instead of guessing from symptoms.",
          label: "See the test",
          href: "/test-kits",
        },
        learn: {
          eyebrow: "Start your assessment",
          body: "Get personalised next steps built around your symptoms and goals in about eight minutes.",
          label: "Start my free assessment",
          href: "/screening",
        },
        employers: {
          eyebrow: "Looking to support your team?",
          body: "Tell us your headcount and we will come back with a plan and a price in writing.",
          label: "Get in touch",
          href: "/workplace/contact",
        },
        workplace: {
          eyebrow: "Looking to support your team?",
          body: "Tell us your headcount and we will come back with a plan and a price in writing.",
          label: "Get in touch",
          href: "/workplace/contact",
        },
      }
    '''
    
    if "ft-sheet-v9" not in src:
        anchor = "  const Chevron = ({ open }"
        assert src.count(anchor) == 1, "Chevron anchor"
        src = src.replace(anchor, CARD_BLOCK + "\n" + anchor, 1)
    
    
    if "ft-sheet-v9: Escape" not in src:
        assert src.count("  // ft-nav-v4-hertility-structure") == 1, "escape anchor"
        src = src.replace("  // ft-nav-v4-hertility-structure", '\n  // ft-sheet-v9: Escape closes an open dropdown\n  useEffect(() => {\n    if (!activeDropdown) return\n    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveDropdown(null) }\n    document.addEventListener("keydown", onKey)\n    return () => document.removeEventListener("keydown", onKey)\n  }, [activeDropdown])\n' + "\n" + "  // ft-nav-v4-hertility-structure", 1)
    
    # ---------- 2. cut the generic panel ----------
    g0 = src.index('{menu.id === "tests" ? null : (')
    g1 = src.index(')}\n                </div>\n              )\n            })}', g0) + 2
    src = src[:g0] + "{null}" + src[g1:]
    
    # ---------- 3. cut the bespoke tests overlay + panel ----------
    t0 = src.index('{activeDropdown === "tests" && (')
    t1 = src.index('</nav>', t0)
    src = src[:t0] + "{{SHEET}}\n\n          " + src[t1:]
    
    SHEET = '''{(() => {
                const menu = NAV_MENUS.find((m) => m.id === activeDropdown)
                if (!menu) return null
                const card = NAV_CARDS[menu.id] ?? { eyebrow: "Not sure where to start?", body: "Tell us what brought you here and we'll let you know how we can help.", label: "Start here", href: "/screening" }
                const multi = menu.groups.length > 1
                return (
                  <>
                    <div
                      aria-hidden="true"
                      onClick={() => setActiveDropdown(null)}
                      className="absolute left-0 top-full z-40 h-[200vh] w-full bg-black/40"
                    />
                    <div data-ft-sheet className="dropdown-container absolute left-0 right-0 top-full z-50 border-t border-[#1F2328]/10 bg-[#FAF7F2] shadow-[0_24px_48px_-16px_rgba(31,61,51,0.28)]">
                      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 pb-[34px] pt-[31px] sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-20">
                        <div className={multi ? "grid flex-1 gap-x-16 gap-y-6 pt-[14px] lg:max-w-[820px] " + (menu.groups.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2") : "pt-[14px]"}>
                          {menu.groups.map((group, gi) => (
                            <div key={gi}>
                              {group.heading && (
                                <p className="mb-1 text-[12px] font-semibold uppercase leading-[20px] tracking-[0.1em] text-[#1F3D33]/70">{group.heading}</p>
                              )}
                              <ul>
                                {group.links.map((l) => (
                                  <li key={l.label}>
                                    <Link
                                      href={l.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-center py-[10px] text-[18px] leading-[25px] text-[#1F2328] transition-colors hover:text-[#1F3D33]"
                                    >
                                      {l.label}
                                      {l.badge && (
                                        <span className="ml-3 rounded-full bg-[#1F3D33] px-2 py-0.5 text-[11px] font-semibold leading-[16px] text-white">{l.badge}</span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
    
                        <div className="flex w-full shrink-0 flex-col rounded-2xl bg-[#E4EDE6] px-7 pb-12 pt-[55px] lg:h-[274px] lg:w-[357px]">
                          <p className="mb-[10px] text-[12px] font-semibold uppercase leading-[20px] tracking-[0.1em] text-[#1F2328]/80">
                            {card.eyebrow}
                          </p>
                          <p className="text-[15px] leading-[25px] text-[#1F2328]/80">{card.body}</p>
                          <Link
                            href={card.href}
                            onClick={() => setActiveDropdown(null)}
                            className="mt-auto flex h-[46px] w-full items-center justify-center rounded-full bg-[#1F3D33] text-[16px] font-semibold text-[#FAF7F2] transition-opacity hover:opacity-90"
                          >
                            {card.label}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })()}'''
    src = src.replace("{{SHEET}}", SHEET, 1)
    
    # ---------- 4. tidy: a stray leftover {null} is harmless, but remove it ----------
    src = src.replace("{null}\n", "", 1) if "{null}\n" in src else src.replace("{null}", "", 1)
    
    
    return src


def write_hub():
    if not Path("components/ft/workplace-data.ts").is_file():
        print("hub: skipped, components/ft/workplace-data.ts is missing")
        return
    target = Path("app/workplace/page.tsx")
    if target.is_file() and 'WORKPLACE["workplace"]' in target.read_text(encoding="utf-8"):
        print("hub: already current (/workplace)")
        return
    if target.is_file():
        target.with_suffix(".tsx.bak-before-hub").write_text(target.read_text(encoding="utf-8"), encoding="utf-8")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(HUB_PAGE, encoding="utf-8")
    print("hub: wrote app/workplace/page.tsx  (/workplace now opens)")


def main():
    if not Path("package.json").is_file() or not Path("app").is_dir():
        print("Run this from the Fertiterra folder.")
        return
    header = Path("components/header.tsx")
    if not header.is_file():
        print("components/header.tsx not found.")
        return

    src = header.read_text(encoding="utf-8")
    if "ft-sheet-v9" in src:
        print("dropdowns: already on the Tests sheet layout")
    else:
        for anchor, what in [
            ('{menu.id === "tests" ? null : (', "the per-menu dropdown panel"),
            ('{activeDropdown === "tests" && (', "the Tests sheet block"),
            ("</nav>", "the end of the desktop nav"),
            ("const Chevron = ({ open }", "the Chevron component"),
            ("// ft-nav-v4-hertility-structure", "the nav data marker"),
        ]:
            if anchor not in src:
                print("dropdowns: stopped, could not find " + what + ".")
                print("  looking for: " + anchor)
                print("  nothing was changed.")
                write_hub()
                return
        try:
            out = transform(src)
        except Exception as e:
            print("dropdowns: stopped while rebuilding the panel: " + str(e))
            print("  nothing was changed.")
            write_hub()
            return
        header.with_suffix(".tsx.bak-before-sheet").write_text(src, encoding="utf-8")
        header.write_text(out, encoding="utf-8")
        print("dropdowns: all six menus now use the Tests sheet layout")
        print("  backup: components/header.tsx.bak-before-sheet")

    write_hub()
    print("")
    print("Check it compiles:")
    print("   npx tsc --noEmit 2>&1 | grep -E 'header|workplace'")
    print("")
    print("Then restart the dev server if any dropdown looks stale:")
    print("   Ctrl+C, then  rm -rf .next && pnpm dev")


if __name__ == "__main__":
    main()
