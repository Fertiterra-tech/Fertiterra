"use client"

/**
 * FertiTerra waitlist page.
 * One job: collect an email so the person hears about the app launch.
 * Writes to public.waitlist, which the public may insert into and nobody may read.
 */

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import { createClient } from "@/lib/supabase"

const JOINING = [
  { value: "myself", label: "Myself" },
  { value: "couple", label: "My partner and me" },
  { value: "someone", label: "Someone I care for" },
]

type Status = "idle" | "sending" | "done" | "exists" | "invalid" | "error"

export default function WaitlistPage() {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [joiningFor, setJoiningFor] = useState("myself")
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "sending") return

    const cleanEmail = email.trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setStatus("invalid")
      return
    }

    setStatus("sending")
    try {
      const supabase = createClient()
      const { error } = await supabase.from("waitlist").insert({
        email: cleanEmail,
        first_name: firstName.trim() || null,
        joining_for: joiningFor,
        source: "waitlist-page",
      })
      if (!error) setStatus("done")
      else if (error.code === "23505") setStatus("exists")
      else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  const settled = status === "done" || status === "exists"

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-8 sm:py-12 lg:px-20 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* left, the ask */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#1F3D33] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FAF7F2]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1F3D33]" aria-hidden="true" />
              Coming soon
            </p>

            <h1 className="mt-5 max-w-[16ch] font-[family-name:var(--font-playfair)] text-[34px] sm:mt-6 leading-[1.08] tracking-[-0.01em] text-[#1F2328] sm:text-[48px] lg:text-[60px]">
              The FertiTerra app is <em className="italic">coming.</em>
            </h1>

            <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-[#1F2328]/75 sm:text-[19px]">
              Track your cycle, flow and symptoms. Keep every result and report in one place. Reach a
              FertiTerra doctor from your phone. Join the waitlist and we will send you the link the day it
              launches.
            </p>

            <div className="mt-6 rounded-3xl border border-[#1F2328]/10 bg-white p-5 sm:mt-8 sm:p-8">
              {settled ? (
                <div aria-live="polite">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4EDE6]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F3D33" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="mt-5 font-[family-name:var(--font-playfair)] text-[26px] leading-snug text-[#1F2328] sm:text-[30px]">
                    {status === "exists" ? "You are already on the list." : "You are on the list."}
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#1F2328]/70">
                    {status === "exists"
                      ? "That email is already saved. Nothing else to do."
                      : `We will email ${email.trim().toLowerCase()} the day the app goes live.`}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href="/"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#1F3D33] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#12261F]"
                    >
                      Back to FertiTerra
                    </Link>
                    <Link href="/screening" className="text-[15px] font-medium text-[#1F3D33] underline underline-offset-4">
                      Start my free assessment
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="waitlist-name" className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1F2328]/60">
                      First name <span className="font-normal normal-case tracking-normal text-[#1F2328]/45">(optional)</span>
                    </label>
                    <input
                      id="waitlist-name"
                      type="text"
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      className="mt-2 h-11 w-full rounded-xl sm:h-12 border border-[#1F2328]/15 bg-[#FAF7F2] px-4 text-[16px] text-[#1F2328] outline-none transition-colors placeholder:text-[#1F2328]/35 focus:border-[#1F3D33] focus:bg-white"
                      placeholder="Chijioke"
                    />
                  </div>

                  <div className="mt-4 sm:mt-5">
                    <label htmlFor="waitlist-email" className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1F2328]/60">
                      Email address
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value)
                        if (status === "error" || status === "invalid") setStatus("idle")
                      }}
                      className="mt-2 h-11 w-full rounded-xl sm:h-12 border border-[#1F2328]/15 bg-[#FAF7F2] px-4 text-[16px] text-[#1F2328] outline-none transition-colors placeholder:text-[#1F2328]/35 focus:border-[#1F3D33] focus:bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mt-4 sm:mt-5">
                    <label htmlFor="waitlist-joining" className="block text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1F2328]/60">
                      I am joining for
                    </label>
                    <select
                      id="waitlist-joining"
                      value={joiningFor}
                      onChange={(event) => setJoiningFor(event.target.value)}
                      className="mt-2 h-11 w-full rounded-xl sm:h-12 border border-[#1F2328]/15 bg-[#FAF7F2] px-4 text-[16px] text-[#1F2328] outline-none transition-colors focus:border-[#1F3D33] focus:bg-white"
                    >
                      {JOINING.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-5 inline-flex h-14 w-full sm:mt-6 items-center justify-center rounded-full bg-[#1F3D33] text-[17px] font-semibold text-[#FAF7F2] transition-colors hover:bg-[#d8f455] disabled:opacity-60"
                  >
                    {status === "sending" ? "Saving..." : "Join the waitlist"}
                  </button>

                  <p className="mt-4 text-[13px] leading-relaxed text-[#1F2328]/55" aria-live="polite">
                    {status === "invalid"
                      ? "That email address does not look complete. Check it and try again."
                      : status === "error"
                        ? "That did not save. Try once more in a moment."
                        : "One email when the app is ready. Nothing else, and you can unsubscribe."}
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* right, what it does */}
          <aside className="rounded-3xl bg-[#1F3D33] p-7 text-[#FAF7F2] sm:p-9">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#FAF7F2]">Inside the app</p>
            <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-[26px] leading-snug sm:text-[30px]">
              What you will be able to do
            </h2>

            <ul className="mt-7 space-y-6">
              {[
                ["01", "Track your cycle, flow and symptoms", "A calendar that learns your pattern and shows your fertile window."],
                ["02", "Keep results and reports in one place", "Your test results, doctor notes and past assessments, always to hand."],
                ["03", "Reach a FertiTerra doctor from your phone", "Book a private video call when a result needs a conversation."],
              ].map(([number, title, body]) => (
                <li key={number} className="flex gap-4">
                  <span className="mt-0.5 font-[family-name:var(--font-playfair)] text-[15px] text-[#FAF7F2]">{number}</span>
                  <span>
                    <span className="block text-[17px] font-medium leading-snug">{title}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-[#FAF7F2]/65">{body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-white/15 pt-5 text-[14px] leading-relaxed text-[#FAF7F2]/70">
              The app is in build now. Until it lands, the assessment, test kits and doctor calls all work on
              this website.
            </p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
