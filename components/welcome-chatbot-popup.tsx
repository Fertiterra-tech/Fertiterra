"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send, Linkedin, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: number
  sender: "bot" | "user"
  text: string
}

const initialBotMessage = "Hi, I'm Makoko 🤖 — welcome to FertiTerra! How can I help you today?"

const OPTION_MAP: Record<string, { reply: string; link?: string }> = {
  tests: {
    reply: "Great! You can view our at-home Hormone & Fertility Test here.",
    link: "/test-kits/hormone-fertility",
  },
  consult: {
    reply: "Sure thing! You can browse available consultations here.",
    link: "/appointments",
  },
  learn: {
    reply: "Wonderful! Check out our knowledge centre for in-depth resources.",
    link: "/learn/knowledge-centre",
  },
  browse: {
    reply: "No problem. Feel free to look around!",
  },
}

export function WelcomeChatbotPopup() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ id: 0, sender: "bot", text: initialBotMessage }])
  const [showEmailStep, setShowEmailStep] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  // Auto-show once per session
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("ft_welcome_seen")
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setOpen(true)
        sessionStorage.setItem("ft_welcome_seen", "1")
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSelect = (key: keyof typeof OPTION_MAP) => {
    const userMsg = {
      id: messages.length + 1,
      sender: "user",
      text: (() => {
        switch (key) {
          case "tests":
            return "Show me fertility tests"
          case "consult":
            return "Book a consultation"
          case "learn":
            return "I want to learn more"
          default:
            return "Just browsing"
        }
      })(),
    }
    const botData = OPTION_MAP[key]
    const botMsg = {
      id: messages.length + 2,
      sender: "bot",
      text: botData.reply,
    }
    setMessages((prev) => [...prev, userMsg, botMsg])
    if (botData.link) {
      // Delay navigation suggestion
      setTimeout(() => {
        window.location.href = botData.link!
      }, 800)
    }
    // Always show email step afterwards
    setShowEmailStep(true)
  }

  const subscribe = async () => {
    if (!email) return
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const { success, message } = await res.json()
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "user",
          text: email,
        },
        {
          id: prev.length + 2,
          sender: "bot",
          text: success
            ? "You're on the list! 🎉  Expect helpful fertility insights soon."
            : `Oops: ${message ?? "something went wrong"}`,
        },
      ])
      if (success) {
        setTimeout(() => setOpen(false), 2000)
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "bot",
          text: "Sorry, an error occurred. Please try again later.",
        },
      ])
    } finally {
      setIsSubmitting(false)
      setEmail("")
      setShowEmailStep(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-sm sm:rounded-xl bg-white shadow-lg flex flex-col h-[85vh] sm:h-auto">
        <header className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-t-xl">
          <p className="font-semibold">Makoko Assistant</p>
          <button onClick={() => setOpen(false)} aria-label="Close popup" className="hover:opacity-75">
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* chat area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "max-w-xs rounded-lg px-3 py-2 text-sm",
                m.sender === "bot" ? "bg-gray-100 text-gray-900" : "bg-rose-500 text-white ml-auto",
              )}
            >
              {m.text}
            </div>
          ))}

          {!showEmailStep && (
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" onClick={() => handleSelect("tests")} className="text-xs">
                Fertility tests
              </Button>
              <Button variant="outline" onClick={() => handleSelect("consult")} className="text-xs">
                Consult a doctor
              </Button>
              <Button variant="outline" onClick={() => handleSelect("learn")} className="text-xs">
                Learn more
              </Button>
              <Button variant="outline" onClick={() => handleSelect("browse")} className="text-xs">
                Just browsing
              </Button>
            </div>
          )}

          {showEmailStep && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe for fertility tips and updates ✉️</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={subscribe} disabled={isSubmitting || !email} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Social Media Footer */}
        <div className="border-t bg-gray-50 p-4">
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-600">Follow us for more fertility insights</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/fertiterra-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-pink-600 hover:text-pink-800 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
