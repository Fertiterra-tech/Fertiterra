"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, type FormEvent } from "react"

type FooterLink = { label: string; href: string; external?: boolean }
type FooterColumn = { title: string; links: FooterLink[] }

const COLUMNS: FooterColumn[] = [
  {
    title: "Health assessment",
    links: [
      { label: "Get started", href: "/screening" },
      { label: "At-home test kits", href: "/test-kits" },
      { label: "Fertility checkup", href: "/plans/basic-fertility-checkup" },
      { label: "Trying to conceive plan", href: "/plans/ttc" },
    ],
  },
  {
    title: "Care and treatments",
    links: [
      { label: "Consultations", href: "/consultation" },
      { label: "Gynaecologist", href: "/appointments/gynaecologist" },
      { label: "Pelvic ultrasound", href: "/appointments/ultrasound" },
      { label: "Egg freezing", href: "/appointments/egg-freezing" },
      { label: "Counselling", href: "/appointments/counselling" },
      { label: "Nutrition", href: "/appointments/nutrition" },
    ],
  },
  {
    title: "Who we are",
    links: [
      { label: "Our story", href: "/about/founders-story" },
      { label: "The FertiTerra team", href: "/about/team" },
      { label: "Community", href: "/community" },
      { label: "For employers", href: "/for-employers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Follow us",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg==",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/fertiterra-technologies/",
        external: true,
      },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Get in touch", href: "/screening/contact" },
      { label: "Knowledge centre", href: "/knowledge-centre" },
      { label: "Advisor call", href: "/appointments/advisor-call" },
      { label: "Menopause specialist", href: "/appointments/menopause-specialist" },
    ],
  },
]

const PHOTO = "https://images.pexels.com/photos/20094332/pexels-photo-20094332.jpeg"

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || status === "sending") return
    setStatus("sending")
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), firstName: "", lastName: "", source: "site_footer" }),
      })
      const data = await response.json().catch(() => ({ success: false }))
      if (!response.ok || !data.success) throw new Error("failed")
      setStatus("done")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="bg-[#1F3D33] text-[#F7F3EE]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-20 py-16 lg:py-20">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {COLUMNS.map((column) => (
                <div key={column.title}>
                  <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E6FF70]">
                    {column.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#F7F3EE]/75 transition-colors hover:text-[#E6FF70]"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-[#F7F3EE]/75 transition-colors hover:text-[#E6FF70]"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[28px] p-7 sm:p-9"
              style={{
                backgroundImage: "url(" + PHOTO + ")",
                backgroundSize: "cover",
                backgroundPosition: "center 58%",
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#12261F] via-[#1F3D33]/85 to-[#1F3D33]/25"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E6FF70]">
                  FertiTerra newsletter
                </p>
                <h3
                  className="mt-3 text-2xl leading-snug sm:text-3xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 400 }}
                >
                  Fertility answers, once a month.
                </h3>
                <p className="mt-2 text-sm text-[#F7F3EE]/75">New tests, expert guides and early access. No noise.</p>
                <form onSubmit={handleSubmit} className="mt-5">
                  <div className="flex items-center gap-2 rounded-full bg-white/95 p-1.5 pl-4 focus-within:ring-2 focus-within:ring-[#E6FF70]">
                    <label htmlFor="footer-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="footer-email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="your@email.com"
                      className="min-w-0 flex-1 bg-transparent text-sm text-[#1F2328] outline-none placeholder:text-[#1F2328]/45"
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      aria-label="Subscribe to the FertiTerra newsletter"
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#1F3D33] text-[#E6FF70] transition hover:bg-[#12261F] disabled:opacity-60"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h13" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <p className="mt-3 text-[11px] leading-relaxed text-[#F7F3EE]/60" aria-live="polite">
                    {status === "done"
                      ? "You are on the list. Look out for our next letter."
                      : status === "error"
                        ? "That did not send. Try again in a moment."
                        : "Fertility updates from FertiTerra. Unsubscribe anytime."}
                  </p>
                </form>
                <p className="mt-4 text-[13px] leading-relaxed text-[#F7F3EE]/70">
                  Waiting for the app?{" "}
                  <Link href="/waitlist" className="font-medium text-[#E6FF70] underline underline-offset-4">
                    Join the waitlist
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-20 flex flex-col gap-6 py-8 md:py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/" aria-label="FertiTerra home">
              <Image
                src="/images/fertiterra-logo.png"
                alt="FertiTerra"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <div className="flex items-center gap-3 rounded-full border border-white/15 px-3 py-1.5">
              <Image
                src="/images/partners/rdb-logo.webp"
                alt="Rwanda Development Board"
                width={28}
                height={28}
                className="h-6 w-auto"
              />
              <span className="text-[11px] text-[#F7F3EE]/70">Registered with Rwanda Development Board</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-[11px] text-[#F7F3EE]/55 md:items-end">
            <p>© 2026 FertiTerra Technologies</p>
            <p>Kigali, Rwanda</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
