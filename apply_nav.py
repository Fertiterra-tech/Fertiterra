#!/usr/bin/env python3
"""
FertiTerra header: rebuilt to Hertility's structure, FertiTerra branding.
Touches ONLY components/header.tsx. Keeps a backup. Safe to run twice.

Run from the repo root:   python3 apply_nav.py
"""
import os, re, shutil, sys

PATH = "components/header.tsx"
MARK = "ft-nav-v4-hertility-structure"

if not os.path.exists(PATH):
    sys.exit("Run this from the Fertiterra repo root (components/header.tsx not found).")

src = open(PATH, encoding="utf-8").read()
if MARK in src:
    sys.exit("Already applied. Nothing to do.")

shutil.copy(PATH, PATH + ".bak-before-v4")

# ---------------------------------------------------------------------------
# 1. Menu data: Hertility's six menus, mapped to pages that exist on FertiTerra
# ---------------------------------------------------------------------------
MENUS = r'''
  // ft-nav-v4-hertility-structure
  type NavLink = { label: string; href: string; badge?: string }
  type NavGroup = { heading?: string; links: NavLink[] }
  type NavMenu = { id: string; label: string; groups: NavGroup[] }

  const NAV_MENUS: NavMenu[] = [
    {
      id: "tests",
      label: "Tests",
      groups: [
        {
          links: [
            { label: "Trying to conceive", href: "/learn/trying-to-conceive" },
            { label: "Experiencing symptoms", href: "/learn/experiencing-symptoms" },
            { label: "Planning ahead", href: "/learn/planning-future-children" },
            { label: "Struggling to conceive", href: "/learn/struggling-to-conceive" },
            { label: "Just curious", href: "/test-kits/hormone-fertility" },
          ],
        },
      ],
    },
    {
      id: "appointments",
      label: "Appointments",
      groups: [
        {
          links: [
            { label: "Fertility Advisor", href: "/appointments/advisor-call" },
            { label: "Hormone and Symptom Consultation", href: "/consultation" },
            { label: "Pelvic Ultrasound Scan", href: "/appointments/ultrasound", badge: "Most popular" },
            { label: "Private Gynaecologist Consultation", href: "/appointments/gynaecologist" },
            { label: "Counselling", href: "/appointments/counselling" },
            { label: "Nutrition Consultation", href: "/appointments/nutrition" },
            { label: "Menopause Consultation", href: "/appointments/menopause-specialist" },
            { label: "Skin Consultation", href: "/appointments/skin-consultation" },
          ],
        },
      ],
    },
    {
      id: "treatments",
      label: "Treatments",
      groups: [
        {
          links: [
            { label: "IVF support", href: "/treatments" },
            { label: "Egg freezing", href: "/appointments/egg-freezing" },
            { label: "Starting an LGBTQIA+ family", href: "/learn/lgbtqia-family" },
            { label: "Trusted clinics", href: "/trusted-clinics" },
          ],
        },
      ],
    },
    {
      id: "symptoms",
      label: "Symptoms",
      groups: [
        {
          heading: "Symptoms",
          links: [
            { label: "Fatigue & low energy", href: "/symptoms" },
            { label: "Mood & mental health", href: "/symptoms" },
            { label: "Skin & hair changes", href: "/symptoms" },
            { label: "Painful & irregular cycles", href: "/symptoms" },
          ],
        },
        {
          heading: "Conditions",
          links: [
            { label: "PCOS", href: "/blog/pcos" },
            { label: "Endometriosis", href: "/symptoms" },
            { label: "Fibroids", href: "/symptoms" },
            { label: "PMS & PMDD", href: "/symptoms" },
          ],
        },
      ],
    },
    {
      id: "learn",
      label: "Learn",
      groups: [
        {
          heading: "Knowledge Centre",
          links: [
            { label: "Articles", href: "/blog" },
            { label: "Guides & how-to's", href: "/learn/guides" },
            { label: "Webinars & events", href: "/blog/webinars-events" },
            { label: "Real stories", href: "/learn/real-stories" },
            { label: "Get started kit", href: "/learn/get-started-kit" },
          ],
        },
        {
          heading: "About FertiTerra",
          links: [
            { label: "Founder's story", href: "/about/founders-story" },
            { label: "Meet the team", href: "/about/team" },
            { label: "Research", href: "/about/research" },
            { label: "Diversity and inclusion", href: "/about/diversity-inclusion" },
            { label: "Refer a friend", href: "/waitlist" },
          ],
        },
      ],
    },
    {
      id: "employers",
      label: "Employers",
      groups: [
        {
          heading: "About",
          links: [
            { label: "What we do", href: "/for-employers" },
            { label: "Pricing", href: "/for-employers" },
            { label: "Our mission", href: "/about/founders-story" },
            { label: "Contact us", href: "/screening/contact" },
          ],
        },
        {
          heading: "Solutions",
          links: [
            { label: "For HR leaders", href: "/for-employers" },
            { label: "For insurers", href: "/for-employers" },
            { label: "For brokers", href: "/for-employers" },
          ],
        },
        {
          heading: "Resources",
          links: [
            { label: "Case studies", href: "/learn/real-stories" },
            { label: "Guides and articles", href: "/learn/guides" },
          ],
        },
      ],
    },
  ]

  const Chevron = ({ open }: { open?: boolean }) => (
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
      className={`h-4 w-4 opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
'''

# ---------------------------------------------------------------------------
# 2. Announcement bar: one bold line, then a bold lime waitlist pill
# ---------------------------------------------------------------------------
BAR = r'''      {/* Announcement bar */}
      <div className="w-full bg-[#1F3D33] px-4 py-2.5 text-center text-white sm:py-3">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-[13px] leading-snug text-white/90 sm:text-[14px]">
            See what is inside your Advanced Hormone and Fertility Test report.{" "}
            <Link href="/sample-report" className="font-semibold underline underline-offset-4 decoration-[#E6FF70]/70 hover:decoration-[#E6FF70]">
              Take a look
            </Link>
          </span>
          <span className="hidden h-5 w-px bg-white/25 sm:inline-block" aria-hidden="true" />
          <Link
            href="/waitlist"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#E6FF70] px-4 py-1.5 text-[13px] font-bold tracking-[0.01em] text-[#1F3D33] shadow-[0_0_0_0_rgba(230,255,112,0.55)] transition-all hover:shadow-[0_0_0_6px_rgba(230,255,112,0.22)] sm:text-[14px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1F3D33]/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1F3D33]" />
            </span>
            <span className="sm:hidden">App coming soon. Join the waitlist</span>
            <span className="hidden sm:inline">The app is coming soon. Be first in: join the waitlist</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </Link>
          <div className="ml-1 hidden items-center gap-3.5 sm:flex">
            <a href="https://www.linkedin.com/company/fertiterra-technologies/" target="_blank" rel="noopener noreferrer" className="text-white/75 transition-colors hover:text-[#E6FF70]" aria-label="Follow us on LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg==" target="_blank" rel="noopener noreferrer" className="text-white/75 transition-colors hover:text-[#E6FF70]" aria-label="Follow us on Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
'''

# ---------------------------------------------------------------------------
# 3. Desktop nav: six menus, same dropdown pattern, FertiTerra colours only
# ---------------------------------------------------------------------------
DESKTOP = r'''          <nav className="hidden items-center gap-7 lg:flex xl:gap-8" aria-label="Main">
            {NAV_MENUS.map((menu) => {
              const open = activeDropdown === menu.id
              return (
                <div key={menu.id} className="relative dropdown-container">
                  <button
                    type="button"
                    aria-expanded={open}
                    className="flex items-center gap-1 text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]"
                    onClick={() => setActiveDropdown(open ? null : menu.id)}
                  >
                    {menu.label}
                    <Chevron open={open} />
                  </button>
                  <div
                    className={`absolute top-full z-50 mt-3 max-h-[calc(100vh-150px)] overflow-y-auto rounded-2xl border border-[#1F2328]/10 bg-[#FAF7F2] p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${menu.groups.length > 1 ? "w-[600px]" : "w-[340px]"} ${menu.id === "learn" || menu.id === "employers" ? "right-0" : menu.id === "symptoms" ? "left-1/2 -translate-x-1/2" : "left-0"} ${open ? "block" : "hidden"}`}
                  >
                    <div className={menu.groups.length > 1 ? "grid grid-cols-2 gap-x-6 gap-y-5" : "space-y-5"}>
                      {menu.groups.map((group, gi) => (
                        <div key={gi}>
                          {group.heading && (
                            <h3 className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#1F3D33]/70">{group.heading}</h3>
                          )}
                          <ul className="space-y-0.5">
                            {group.links.map((l) => (
                              <li key={l.label}>
                                <Link
                                  href={l.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center justify-between rounded-lg px-2.5 py-2 text-[15px] text-[#1F2328] transition-colors hover:bg-[#E4EDE6] hover:text-[#1F3D33]"
                                >
                                  <span>{l.label}</span>
                                  {l.badge && (
                                    <span className="ml-3 rounded-full bg-[#1F3D33] px-2 py-0.5 text-[11px] font-semibold text-[#E6FF70]">{l.badge}</span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div className={`rounded-xl bg-[#E4EDE6] p-4 ${menu.groups.length > 1 ? "col-span-2" : ""}`}>
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1F3D33]/70">Start your 8-minute hormone &amp; fertility assessment</p>
                        <p className="mb-3 text-[14px] leading-snug text-[#1F2328]/80">Get personalised next steps built around your symptoms and goals.</p>
                        <Link
                          href="/screening"
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center rounded-full bg-[#1F2328] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#1F3D33]"
                        >
                          Start my free assessment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </nav>
'''

# ---------------------------------------------------------------------------
# 4. Login becomes a person icon (like Hertility); cart stays a bag icon
# ---------------------------------------------------------------------------
LOGIN_OLD = re.compile(
    r'<Link href="/login" className="text-\[15px\] font-medium text-\[#1F2328\] transition-colors hover:text-\[#1F3D33\]">\s*Login\s*</Link>'
)
LOGIN_NEW = (
    '<Link href="/login" aria-label="Log in" className="flex h-12 w-12 items-center justify-center text-[#1F2328] '
    'transition-colors hover:text-[#1F3D33] lg:h-auto lg:w-auto">'
    '<UserCircle className="h-[28px] w-[28px] lg:h-[24px] lg:w-[24px]" strokeWidth={1.5} /></Link>'
)

# ---------------------------------------------------------------------------
# apply
# ---------------------------------------------------------------------------
# imports
src = src.replace(
    'import { Menu, X, ShoppingBag, Linkedin, Instagram } from "lucide-react"',
    'import { Menu, X, ShoppingBag, Linkedin, Instagram, UserCircle } from "lucide-react"',
)

# menu data goes right after the toggleMobileMenu function
anchor = "  const toggleMobileMenu = () => {\n    setMobileMenuOpen(!mobileMenuOpen)\n  }\n"
if anchor not in src:
    sys.exit("Could not find toggleMobileMenu anchor. Header changed since this script was written. Stopping with no edits.")
src = src.replace(anchor, anchor + MENUS, 1)

# announcement bar: replace the whole block between its comment and the main-header comment
a = src.index("      {/* Announcement bar */}")
b = src.index("      {/* Main header:")
src = src[:a] + BAR + "\n" + src[b:]

# desktop nav: from <nav ... lg:flex ...> to its closing </nav>
n1 = src.index('<nav className="hidden items-center gap-7 lg:flex xl:gap-8">')
n2 = src.index("</nav>", n1) + len("</nav>")
# keep indentation of the original start
line_start = src.rfind("\n", 0, n1) + 1
src = src[:line_start] + DESKTOP.rstrip("\n") + src[n2:]

# login icon
if not LOGIN_OLD.search(src):
    sys.exit("Could not find the Login link. Stopping with no edits to disk beyond the backup.")
src = LOGIN_OLD.sub(LOGIN_NEW, src, count=1)

# the "For Employers" top link is now a menu, so remove the standalone desktop link if present
src = re.sub(
    r'\s*<Link href="/for-employers" className="text-\[15px\] font-medium text-\[#1F2328\][^"]*">\s*For Employers\s*</Link>',
    "",
    src,
    count=1,
)

# mobile menu: replace the six sections with the same six menus and fix the dead link
m1 = src.index("{[\n              { id: \"tests\"") if '{[\n              { id: "tests"' in src else -1
if m1 != -1:
    m2 = src.index("].map((section) => {", m1)
    src = src[:m1] + "{[\n" + "\n".join(
        '              { id: "%s", label: "%s", items: [ ...NAV_MENUS.find((m) => m.id === "%s")!.groups.flatMap((g) => g.links) ] },' % (i, l, i)
        for i, l in [("tests", "Tests"), ("appointments", "Appointments"), ("treatments", "Treatments"),
                     ("symptoms", "Symptoms"), ("learn", "Learn"), ("employers", "Employers")]
    ) + "\n            " + src[m2:]

# dead mobile link fix (this one 404s on the live site today)
src = src.replace("/learn/planning-for-future-children", "/learn/planning-future-children")

# strip every off-palette colour the old header used
src = src.replace("text-rose-500", "text-[#1F3D33]").replace("hover:text-rose-500", "hover:text-[#1F3D33]")
src = src.replace("hover:text-rose-600", "hover:text-[#1F3D33]").replace("text-rose-600", "text-[#1F3D33]")
src = src.replace("bg-gray-50", "bg-[#E4EDE6]").replace("text-gray-900", "text-[#1F2328]").replace("text-gray-600", "text-[#1F2328]/80")

open(PATH, "w", encoding="utf-8").write(src)

left = len(re.findall(r"rose-|gray-", src))
print("header.tsx rewritten. Backup: components/header.tsx.bak-before-v4")
print("Off-palette colour classes left:", left)
