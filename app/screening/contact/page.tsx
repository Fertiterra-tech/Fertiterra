"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, X, Mail } from "lucide-react"

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    wantsNewsletter: false,
  })

  // Verify that user came from screening page
  useEffect(() => {
    const selections = sessionStorage.getItem("screeningSelections")
    if (!selections) {
      router.push("/screening")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Save form data to session storage
    sessionStorage.setItem("contactInfo", JSON.stringify(formData))

    // If user wants newsletter, add to Mailchimp
    if (formData.wantsNewsletter && formData.email) {
      // TODO: Implement Mailchimp API integration
      console.log("[v0] Newsletter subscription requested for:", formData.email)
    }

    // Navigate to next step
    router.push("/screening/questions")
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top Navigation */}
      <div className="border-b border-gray-200">
        <div className="container flex items-center justify-between py-4 px-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Previous</span>
          </button>
          <button onClick={() => router.push("/")} className="text-gray-700 hover:text-gray-900 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="border-b border-gray-200">
        <div className="container px-4">
          <div className="flex items-center gap-1 py-6">
            {/* Step 1 - Completed */}
            <div className="flex items-center flex-1">
              <div className="w-full h-2 bg-[#d4ff00] rounded-full" />
            </div>
            {/* Step 2 - Current */}
            <div className="flex items-center flex-1">
              <div className="w-full h-2 bg-gray-200 rounded-full" />
            </div>
            {/* Step 3 */}
            <div className="flex items-center flex-1">
              <div className="w-full h-2 bg-gray-200 rounded-full" />
            </div>
            {/* Step 4 */}
            <div className="flex items-center flex-1">
              <div className="w-full h-2 bg-gray-200 rounded-full" />
            </div>
          </div>
          <p className="text-sm text-gray-600 uppercase tracking-wider pb-4">SCREENING</p>
        </div>
      </div>

      <main className="flex-1">
        <div className="container max-w-6xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Form */}
            <div>
              <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">Where should we send your results?</h1>
              <p className="text-base md:text-lg text-gray-700 mb-8">
                This will be used for your results and clinical consultations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First name*
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last name*
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email address*
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
                    />
                  </div>
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    id="newsletter"
                    type="checkbox"
                    checked={formData.wantsNewsletter}
                    onChange={(e) => setFormData({ ...formData, wantsNewsletter: e.target.checked })}
                    className="w-5 h-5 mt-0.5 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
                  />
                  <label htmlFor="newsletter" className="text-base text-gray-900 cursor-pointer">
                    I want to receive communications about new products, offers and events.
                  </label>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-12 h-12 rounded-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 text-white rotate-180" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Column - Testimonial */}
            <div className="hidden lg:block">
              <div className="sticky top-12 bg-gray-900 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f5ebe1] to-[#e8d5c4] flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Sarah</p>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-[#d4ff00]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                      <span>Verified Fertiterra customer</span>
                    </div>
                  </div>
                </div>
                <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed">
                  "In a world where fertility can be scary, Fertiterra gave me peace of mind"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
