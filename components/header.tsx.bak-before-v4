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
          <span>See what is inside your Advanced Hormone and Fertility Test report.</span>
          <span className="hidden text-white/35 sm:inline" aria-hidden="true">|</span>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-[#E6FF70] transition-opacity hover:opacity-80"
          >
            <span className="sm:hidden">App coming soon</span>
            <span className="hidden sm:inline">The app is coming soon. Join the waitlist</span>
          </Link>
          <Link
            href="/sample-report"
            className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-[#E6FF70] transition-opacity hover:opacity-80"
          >
            Take a look
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
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:h-[68px] lg:px-20">
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
          <div className="flex items-center gap-0 sm:gap-2 lg:gap-4">
            <Link href="/cart" aria-label="Cart" className="flex h-12 w-12 items-center justify-center text-[#1F2328] transition-colors hover:text-[#1F3D33] lg:block lg:h-auto lg:w-auto">
              <ShoppingBag className="h-[28px] w-[28px] lg:h-[22px] lg:w-[22px]" strokeWidth={1.5} />
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
              className="h-12 w-12 hover:bg-transparent lg:hidden [&_svg]:!size-[36px]"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X strokeWidth={1.25} /> : <Menu strokeWidth={1.25} />}
            </Button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Navigation: ft-mobile-menu-v2 */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[var(--ft-head,118px)] z-30 flex flex-col overflow-y-auto bg-[#FAF7F2] lg:hidden">
          <nav aria-label="Mobile" className="border-t border-[#1F2328]/25">
            {/* ft-mobile-menu-v3 */}
            {[
              { id: "tests", label: "Tests", items: [
                { label: "Advanced Hormone and Fertility Test", href: "/test-kits/hormone-fertility" },
                { label: "All at-home tests", href: "/test-kits" },
              ] },
              { id: "appointments", label: "Appointments", items: [
                { label: "Fertility Advisor Call", href: "/appointments/advisor-call" },
                { label: "Private Gynaecologist", href: "/appointments/gynaecologist" },
                { label: "Pelvic Ultrasound Scan", href: "/appointments/ultrasound" },
                { label: "Nutrition Consultation", href: "/appointments/nutrition" },
                { label: "Menopause Specialist", href: "/appointments/menopause-specialist" },
                { label: "Counselling", href: "/appointments/counselling" },
                { label: "Egg Freezing", href: "/appointments/egg-freezing" },
                { label: "Skin Consultation", href: "/appointments/skin-consultation" },
              ] },
              { id: "treatments", label: "Treatments", items: [
                { label: "All treatments and care", href: "/treatments" },
                { label: "Egg Freezing", href: "/appointments/egg-freezing" },
                { label: "IVF support", href: "/consultation" },
                { label: "Counselling", href: "/appointments/counselling" },
                { label: "Nutrition support", href: "/appointments/nutrition" },
                { label: "Menopause care", href: "/appointments/menopause-specialist" },
              ] },
              { id: "symptoms", label: "Symptoms", items: [
                { label: "All symptoms we help with", href: "/symptoms" },
                { label: "PCOS", href: "/symptoms" },
                { label: "Endometriosis", href: "/symptoms" },
                { label: "Fibroids", href: "/symptoms" },
                { label: "Irregular periods", href: "/symptoms" },
                { label: "Male fertility", href: "/symptoms" },
              ] },
              { id: "learn", label: "Learn", items: [
                { label: "Knowledge Centre", href: "/knowledge-centre" },
                { label: "Trying to conceive", href: "/learn/trying-to-conceive" },
                { label: "Struggling to conceive", href: "/learn/struggling-to-conceive" },
                { label: "Planning for future children", href: "/learn/planning-for-future-children" },
                { label: "LGBTQIA+ family building", href: "/learn/lgbtqia-family" },
                { label: "Get started kit", href: "/learn/get-started-kit" },
              ] },
              { id: "shop", label: "Shop", items: [
                { label: "All products", href: "/shop" },
                { label: "Merchandise", href: "/shop/merch" },
              ] },
            ].map((section) => {
              const open = expandedSection === section.id
              return (
                <div key={section.id} className="border-b border-[#1F2328]/25">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setExpandedSection(open ? null : section.id)}
                    className="flex h-[56px] w-full items-center justify-between px-6 text-left text-[20px] font-normal tracking-[0.01em] text-[#1F2328] sm:px-10"
                  >
                    {section.label}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className={"transition-transform duration-200 " + (open ? "rotate-90" : "")}
                    >
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </button>
                  {open && (
                    <ul className="pb-4 pl-6 pr-6 sm:pl-10 sm:pr-10">
                      {section.items.map((it) => (
                        <li key={it.label}>
                          <Link href={it.href} onClick={toggleMobileMenu} className="block py-3 text-[17px] text-[#1F2328]/80">
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="mt-auto px-5 pb-6 pt-6 sm:px-10">
            {/* ft-menu-secondary-v1 */}
            <div className="mb-6 flex items-center gap-6 text-[17px] text-[#1F2328]/75">
              <Link href="/about/team" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link href="/for-employers" onClick={toggleMobileMenu}>
                Workplace
              </Link>
            </div>
            <div className="rounded-2xl bg-[#E4EDE6] px-5 py-4">
              <p className="text-[13px] font-semibold uppercase leading-snug tracking-[0.08em] text-[#1F2328]">
                Start your 8-minute hormone &amp; fertility assessment
              </p>
              <p className="mt-2 text-[17px] leading-snug text-[#1F2328]">
                Get personalised next steps built around your symptoms and goals.
              </p>
            </div>

            <Link
              href="/screening"
              onClick={toggleMobileMenu}
              className="mt-4 flex h-[56px] w-full items-center justify-center rounded-xl bg-[#1F2328] text-[18px] font-medium text-white"
            >
              Start my free assessment
            </Link>

            {user ? (
              <div className="mt-6 flex flex-col items-center gap-4">
                {isAdmin && (
                  <Link href="/admin/dashboard" onClick={toggleMobileMenu} className="text-[19px] text-[#1F2328]">
                    Admin
                  </Link>
                )}
                <Link href="/dashboard" onClick={toggleMobileMenu} className="text-[19px] text-[#1F2328]">
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    signOut()
                    toggleMobileMenu()
                  }}
                  className="text-[19px] text-[#1F2328]"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link href="/login" onClick={toggleMobileMenu} className="mt-5 block text-center text-[18px] text-[#1F2328]">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
