"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName: "",
          lastName: "",
          source: "footer_newsletter",
        }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage("Successfully subscribed to our newsletter!")
        setEmail("")
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900 p-8 md:p-12">
      {/* Background pattern/texture overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-md mx-auto text-center">
        <p className="text-white text-lg mb-6 font-medium mt-4">Sign up to our newsletter</p>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white border-0 text-gray-900 placeholder:text-gray-500 h-12 rounded-lg text-base"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !email}
            className="bg-gray-800 hover:bg-gray-700 text-white h-12 px-4 rounded-lg transition-colors"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </Button>
        </form>

        {message && (
          <p className={`mt-4 text-sm ${message.includes("Successfully") ? "text-green-200" : "text-red-200"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
