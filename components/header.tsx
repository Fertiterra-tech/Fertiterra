"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
    <header className="w-full bg-white">
      {/* Banner */}
      <div className="w-full bg-[#e5d6c9] py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-4">
          <span>Download a sample Advanced Hormone and Fertility Test report.</span>
          <Link href="/sample-report" className="font-medium">
            Download it here
          </Link>
          <div className="hidden sm:flex items-center gap-3 ml-4">
            <a
              href="https://www.linkedin.com/company/fertiterra-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/fertiterra-logo.png"
            alt="FertiTerra Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Right side - Navigation, Cart, Login, Signup */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative dropdown-container">
              <button
                className="text-sm font-medium hover:text-rose-500 flex items-center gap-1"
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
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-50 ${activeDropdown === "hormones" ? "block" : "hidden"}`}
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
                className="text-sm font-medium hover:text-rose-500 flex items-center gap-1"
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
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-50 ${activeDropdown === "symptoms" ? "block" : "hidden"}`}
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
                className="text-sm font-medium hover:text-rose-500 flex items-center gap-1"
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
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-50 ${activeDropdown === "clinical" ? "block" : "hidden"}`}
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
                className="text-sm font-medium hover:text-rose-500 flex items-center gap-1"
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
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-50 ${activeDropdown === "learn" ? "block" : "hidden"}`}
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
                className="text-sm font-medium hover:text-rose-500 flex items-center gap-1"
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
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-80 bg-white shadow-lg rounded-md p-4 z-50 ${activeDropdown === "shop" ? "block" : "hidden"}`}
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

            <Link href="/for-employers" className="text-sm font-medium hover:text-rose-500">
              For Employers
            </Link>
          </nav>

          {/* Cart, Login, and CTA */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="hidden md:block">
              <ShoppingBag className="h-5 w-5" />
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
                <Link href="/login" className="text-sm font-medium">
                  Login
                </Link>
                <Link href="/test-kits">
                  <Button className="bg-black hover:bg-gray-800 text-white rounded-md">Personalise my test</Button>
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container flex flex-col space-y-4 py-4">
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
                  <Link href="/test-kits" onClick={toggleMobileMenu}>
                    <Button className="w-full bg-black text-white">Personalise my test</Button>
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
