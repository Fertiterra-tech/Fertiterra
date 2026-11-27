"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FertiTerraLogo } from "@/components/fertiterra-logo"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/auth-context"
import { Menu, X, ShoppingBag, Linkedin, Instagram } from "lucide-react"

export function Header() {
  const { user, profile, isAdmin, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full text-[#1F2328]">
      {/* Announcement bar */}
      <div className="w-full bg-[#1F3D33] px-4 py-2 text-center text-[13px] leading-snug text-white/90 sm:py-2.5 sm:text-[14px]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>Download a sample Advanced Hormone and Fertility Test report.</span>
          <Link
            href="/sample-report"
            className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-[#E6FF70] transition-opacity hover:opacity-80"
          >
            Download it here
            <span aria-hidden="true" className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#E6FF70] text-[11px] leading-none">
              &rarr;
            </span>
          </Link>
          <div className="ml-3 hidden items-center gap-3.5 sm:flex">
            <a
              href="https://www.linkedin.com/company/fertiterra-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 transition-colors hover:text-[#E6FF70]"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 transition-colors hover:text-[#E6FF70]"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header: same 1440px / 80px rails as the hero so logo and headline share one left edge */}
      <div className="w-full border-b border-[#1F2328]/10 bg-[#FAF7F2]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#FAF7F2]/80">
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-20">
        <Link href="/" aria-label="FertiTerra home" className="flex shrink-0 items-center">
          <FertiTerraLogo className="h-[34px] w-auto lg:h-[38px]" />
        </Link>

        {/* Right side - Navigation, Cart, Login, Signup */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
            <div className="relative dropdown-container">
              <button
                className="flex items-center gap-1 text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]"
                onClick={() => setActiveDropdown(activeDropdown === "hormones" ? null : "hormones")}
              >
                Hormones & Fertility
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
                  className="h-4 w-4 opacity-60"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full z-50 mt-3 w-80 rounded-xl border border-[#1F2328]/10 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${activeDropdown === "hormones" ? "block" : "hidden"}`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Buy an at-home test</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/test-kits/hormone-fertility" className="text-sm hover:text-rose-500 block">
                          Hormone & Fertility Test
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Book an appointment</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/appointments/advisor-call" className="text-sm hover:text-rose-500 block">
                          Hormone & Fertility Advisor Call
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/ultrasound" className="text-sm hover:text-rose-500 block">
                          Pelvic Ultrasound Scan
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/gynaecologist" className="text-sm hover:text-rose-500 block">
                          Private Gynaecologist Consultation
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/nutrition" className="text-sm hover:text-rose-500 block">
                          Fertility Nutrition Consultation
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/counselling" className="text-sm hover:text-rose-500 block">
                          Fertility Counselling
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/egg-freezing" className="text-sm hover:text-rose-500 block">
                          Egg Freezing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Learn</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/learn/planning-future-children" className="text-sm hover:text-rose-500 block">
                          Planning future children
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/trying-to-conceive" className="text-sm hover:text-rose-500 block">
                          Trying to conceive
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/struggling-to-conceive" className="text-sm hover:text-rose-500 block">
                          Struggling to conceive
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/lgbtqia-family" className="text-sm hover:text-rose-500 block">
                          Starting an LGBTQIA+ family
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/get-started-kit" className="text-sm hover:text-rose-500 block">
                          Get started kit
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h3 className="font-medium text-gray-900 mb-2">Not sure where to start?</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tell us what brought you here and we'll let you know how we can help.
                    </p>
                    <Link href="/quiz" className="text-sm font-medium text-rose-500 hover:text-rose-600">
                      Start here
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative dropdown-container">
              <button
                className="flex items-center gap-1 text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]"
                onClick={() => setActiveDropdown(activeDropdown === "symptoms" ? null : "symptoms")}
              >
                Symptoms
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
                  className="h-4 w-4 opacity-60"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full z-50 mt-3 w-80 rounded-xl border border-[#1F2328]/10 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${activeDropdown === "symptoms" ? "block" : "hidden"}`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Buy an at-home test</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/test-kits/hormone-fertility" className="text-sm hover:text-rose-500 block">
                          Hormone & Fertility Test
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Book an appointment</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/appointments/advisor-call" className="text-sm hover:text-rose-500 block">
                          Hormone & Fertility Advisor Call
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/ultrasound" className="text-sm hover:text-rose-500 block">
                          Pelvic Ultrasound Scan
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/gynaecologist" className="text-sm hover:text-rose-500 block">
                          Private Gynaecologist Consultation
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/menopause-specialist" className="text-sm hover:text-rose-500 block">
                          Menopause Specialist Consultation
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Learn</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/learn/experiencing-symptoms" className="text-sm hover:text-rose-500 block">
                          Experiencing symptoms
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/get-started-kit" className="text-sm hover:text-rose-500 block">
                          Get started kit
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h3 className="font-medium text-gray-900 mb-2">Not sure where to start?</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tell us what brought you here and we'll let you know how we can help.
                    </p>
                    <Link href="/quiz" className="text-sm font-medium text-rose-500 hover:text-rose-600">
                      Start here
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative dropdown-container">
              <button
                className="flex items-center gap-1 text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]"
                onClick={() => setActiveDropdown(activeDropdown === "clinical" ? null : "clinical")}
              >
                Clinical Care
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
                  className="h-4 w-4 opacity-60"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full z-50 mt-3 w-80 rounded-xl border border-[#1F2328]/10 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${activeDropdown === "clinical" ? "block" : "hidden"}`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">At-home test</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/test-kits/hormone-fertility" className="text-sm hover:text-rose-500 block">
                          Hormone & Fertility Test
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Appointments</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/appointments/advisor-call" className="text-sm hover:text-rose-500 block">
                          Hormone & Fertility Advisor Call
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/nutrition" className="text-sm hover:text-rose-500 block">
                          Fertility Nutrition Consultation
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/counselling" className="text-sm hover:text-rose-500 block">
                          Fertility Counselling
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Treatments</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/appointments/ultrasound" className="text-sm hover:text-rose-500 block">
                          Pelvic Ultrasound Scan
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/gynaecologist" className="text-sm hover:text-rose-500 block">
                          Private Gynaecologist Consultation
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/menopause-specialist" className="text-sm hover:text-rose-500 block">
                          Menopause Specialist Consultation
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/egg-freezing" className="text-sm hover:text-rose-500 block">
                          Egg Freezing
                        </Link>
                      </li>
                      <li>
                        <Link href="/appointments/skin-consultation" className="text-sm hover:text-rose-500 block">
                          Skin Consultation
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/trusted-clinics" className="text-sm hover:text-rose-500 block font-medium">
                          Trusted Clinics
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/get-started-kit" className="text-sm hover:text-rose-500 block font-medium">
                          Get started kit
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h3 className="font-medium text-gray-900 mb-2">Not sure where to start?</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tell us what brought you here and we'll let you know how we can help.
                    </p>
                    <Link href="/quiz" className="text-sm font-medium text-rose-500 hover:text-rose-600">
                      Start here
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative dropdown-container">
              <button
                className="flex items-center gap-1 text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]"
                onClick={() => setActiveDropdown(activeDropdown === "learn" ? null : "learn")}
              >
                Learn
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
                  className="h-4 w-4 opacity-60"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full z-50 mt-3 w-80 rounded-xl border border-[#1F2328]/10 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${activeDropdown === "learn" ? "block" : "hidden"}`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">FertiTerra</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/about/founders-story" className="text-sm hover:text-rose-500 block">
                          Founder's story
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/research" className="text-sm hover:text-rose-500 block">
                          Research
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/team" className="text-sm hover:text-rose-500 block">
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/about/diversity-inclusion" className="text-sm hover:text-rose-500 block">
                          Diversity and inclusion
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/knowledge-centre" className="text-sm hover:text-rose-500 block">
                          Knowledge centre
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/guides" className="text-sm hover:text-rose-500 block">
                          Guides
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/real-stories" className="text-sm hover:text-rose-500 block">
                          Real stories
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/get-started-kit" className="text-sm hover:text-rose-500 block">
                          Get started kit
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h3 className="font-medium text-gray-900 mb-2">Not sure where to start?</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tell us what brought you here and we'll let you know how we can help.
                    </p>
                    <Link href="/quiz" className="text-sm font-medium text-rose-500 hover:text-rose-600">
                      Start here
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative dropdown-container">
              <button
                className="flex items-center gap-1 text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]"
                onClick={() => setActiveDropdown(activeDropdown === "shop" ? null : "shop")}
              >
                Shop
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
                  className="h-4 w-4 opacity-60"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full z-50 mt-3 w-80 rounded-xl border border-[#1F2328]/10 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(31,61,51,0.22)] ${activeDropdown === "shop" ? "block" : "hidden"}`}
              >
                <div className="space-y-4">
                  <div>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/test-kits/hormone-fertility"
                          className="text-sm hover:text-rose-500 block font-medium"
                        >
                          Hormone & Fertility Test
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/merch" className="text-sm hover:text-rose-500 block font-medium">
                          FertiTerra Merch
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop/gift-cards" className="text-sm hover:text-rose-500 block font-medium">
                          Gift cards
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/get-started-kit" className="text-sm hover:text-rose-500 block font-medium">
                          Get started kit
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md">
                    <h3 className="font-medium text-gray-900 mb-2">Not sure where to start?</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tell us what brought you here and we'll let you know how we can help.
                    </p>
                    <Link href="/quiz" className="text-sm font-medium text-rose-500 hover:text-rose-600">
                      Start here
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/for-employers" className="text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]">
              For Employers
            </Link>
          </nav>

          {/* Cart, Login, and CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/cart" aria-label="Cart" className="block text-[#1F2328] transition-colors hover:text-[#1F3D33]">
              <ShoppingBag className="h-[22px] w-[22px]" strokeWidth={1.6} />
            </Link>

            {user ? (
              <div className="hidden md:flex items-center gap-4">
                {isAdmin && (
                  <Link href="/admin/dashboard">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
                    >
                      Admin
                    </Button>
                  </Link>
                )}
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <Link href="/login" className="text-[15px] font-medium text-[#1F2328] transition-colors hover:text-[#1F3D33]">
                  Login
                </Link>
                <Link href="/screening">
                  <Button className="h-11 rounded-lg bg-[#1F2328] px-5 text-[15px] font-medium text-white shadow-none transition-colors hover:bg-[#1F3D33]">
                    Start now
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[#1F2328]/10 bg-[#FAF7F2] lg:hidden">
          <div className="mx-auto flex max-h-[calc(100vh-110px)] w-full max-w-[1440px] flex-col space-y-4 overflow-y-auto px-6 py-4 sm:px-10">
            {/* Mobile navigation sections */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "hormones" ? null : "hormones")}
                >
                  Hormones & Fertility
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
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "hormones" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "hormones" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Buy an at-home test</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/test-kits/hormone-fertility"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Test
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Book an appointment</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/appointments/advisor-call"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Advisor Call
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/ultrasound"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Pelvic Ultrasound Scan
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/gynaecologist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Private Gynaecologist Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/nutrition"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Fertility Nutrition Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/counselling"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Fertility Counselling
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/egg-freezing"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Egg Freezing
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Learn</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/learn/planning-future-children"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Planning future children
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/learn/trying-to-conceive"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Trying to conceive
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/learn/struggling-to-conceive"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Struggling to conceive
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/lgbtqia-family" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Starting an LGBTQIA+ family
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/get-started-kit" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "symptoms" ? null : "symptoms")}
                >
                  Symptoms
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
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "symptoms" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "symptoms" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Buy an at-home test</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/test-kits/hormone-fertility"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Test
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Book an appointment</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/appointments/advisor-call"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Advisor Call
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/ultrasound"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Pelvic Ultrasound Scan
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/gynaecologist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Private Gynaecologist Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/menopause-specialist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Menopause Specialist Consultation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Learn</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/learn/experiencing-symptoms"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Experiencing symptoms
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/get-started-kit" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "clinical" ? null : "clinical")}
                >
                  Clinical Care
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
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "clinical" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "clinical" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">At-home test</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/test-kits/hormone-fertility"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Test
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Appointments</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/appointments/advisor-call"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Advisor Call
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/nutrition"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Fertility Nutrition Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/counselling"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Fertility Counselling
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Treatments</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/appointments/ultrasound"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Pelvic Ultrasound Scan
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/gynaecologist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Private Gynaecologist Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/menopause-specialist"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Menopause Specialist Consultation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/egg-freezing"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Egg Freezing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/appointments/skin-consultation"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Skin Consultation
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/trusted-clinics"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Trusted Clinics
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/learn/get-started-kit"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "learn" ? null : "learn")}
                >
                  Learn
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
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "learn" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "learn" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">FertiTerra</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/about/founders-story" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Founder's story
                          </Link>
                        </li>
                        <li>
                          <Link href="/about/research" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Research
                          </Link>
                        </li>
                        <li>
                          <Link href="/about/team" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about/diversity-inclusion"
                            className="text-sm block py-1"
                            onClick={toggleMobileMenu}
                          >
                            Diversity and inclusion
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Resources</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link href="/knowledge-centre" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Knowledge centre
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/guides" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Guides
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/real-stories" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Real stories
                          </Link>
                        </li>
                        <li>
                          <Link href="/learn/get-started-kit" className="text-sm block py-1" onClick={toggleMobileMenu}>
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-b pb-2">
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setExpandedSection(expandedSection === "shop" ? null : "shop")}
                >
                  Shop
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
                    className={`ml-1 h-4 w-4 transition-transform ${expandedSection === "shop" ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {expandedSection === "shop" && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/test-kits/hormone-fertility"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Hormone & Fertility Test
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop/merch"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            FertiTerra Merch
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop/gift-cards"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Gift cards
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/learn/get-started-kit"
                            className="text-sm block py-1 font-medium"
                            onClick={toggleMobileMenu}
                          >
                            Get started kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-md">
                      <h3 className="font-medium text-gray-900 mb-2 text-sm">Not sure where to start?</h3>
                      <p className="text-xs text-gray-600 mb-2">
                        Tell us what brought you here and we'll let you know how we can help.
                      </p>
                      <Link href="/quiz" className="text-sm font-medium text-rose-500" onClick={toggleMobileMenu}>
                        Start here
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/for-employers" className="block font-medium" onClick={toggleMobileMenu}>
                For Employers
              </Link>
            </div>

            <div className="border-t pt-4 flex flex-col space-y-2">
              <Link href="/cart" onClick={toggleMobileMenu}>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Cart
                </Button>
              </Link>

              {user ? (
                <>
                  {isAdmin && (
                    <Link href="/admin/dashboard" onClick={toggleMobileMenu}>
                      <Button variant="outline" className="w-full bg-purple-50 text-purple-700 border-purple-200">
                        Admin Dashboard
                      </Button>
                    </Link>
                  )}
                  <Link href="/dashboard" onClick={toggleMobileMenu}>
                    <Button variant="outline" className="w-full bg-transparent">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      signOut()
                      toggleMobileMenu()
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={toggleMobileMenu}>
                    <Button variant="outline" className="w-full bg-transparent">
                      Login
                    </Button>
                  </Link>
                  <Link href="/screening" onClick={toggleMobileMenu}>
                    <Button className="w-full bg-green-500/90 hover:bg-green-600 text-white shadow-md">
                      Start now
                    </Button>
                  </Link>
                </>
              )}

              {/* Mobile Social Media Links */}
              <div className="flex justify-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/fertiterra-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
