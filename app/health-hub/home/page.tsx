"use client"

import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { INK, GREEN, LIME, MINT, PHOTO } from "@/lib/brand"

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return "Good morning"
  if (h < 18) return "Good afternoon"
  return "Good evening"
}

export default function HealthHubHome() {
  const { user, profile } = useAuth()
  const name = (profile && profile.full_name ? profile.full_name : (user && user.email ? user.email.split("@")[0] : "")).toUpperCase()

  return (
    <div className="mx-auto w-full max-w-[980px]">
      <h1 className="mb-8 font-serif text-3xl sm:text-4xl" style={{ color: INK }}>
        {greeting()}
        {name ? ", " + name : ""}.
      </h1>

      <section
        className="relative mb-10 overflow-hidden rounded-3xl p-8 sm:p-10"
        style={{ background: GREEN, minHeight: 240 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(" + PHOTO + ")",
            backgroundSize: "cover",
            backgroundPosition: "center 58%",
            opacity: 0.35,
          }}
        />
        <div className="relative">
          <h2 className="mb-3 font-serif text-2xl sm:text-3xl" style={{ color: "#FFFFFF" }}>
            Continue with your recommendations
          </h2>
          <p className="mb-6 max-w-xl text-base leading-relaxed" style={{ color: "#FFFFFF", opacity: 0.85 }}>
            Your assessment is complete and your personalised recommendations are ready. Take a look to choose your next steps.
          </p>
          <Link
            href="/health-hub/care-plan"
            className="inline-block rounded-full px-7 py-3 text-base font-semibold"
            style={{ background: LIME, color: INK }}
          >
            View my recommendations
          </Link>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-xl font-semibold" style={{ color: INK }}>
          Track with the FertiTerra app
        </h2>
        <p className="mb-5 max-w-2xl text-base leading-relaxed" style={{ color: INK, opacity: 0.75 }}>
          Log your cycle and symptoms, follow your fertile window and get insights built on clinical-grade testing.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl p-6" style={{ background: MINT }}>
            <h3 className="mb-2 font-serif text-xl" style={{ color: INK }}>
              Stay in sync with your body
            </h3>
            <p className="text-base leading-relaxed" style={{ color: INK, opacity: 0.78 }}>
              Scan the code in the app store to download FertiTerra and keep your cycle and symptoms in one place.
            </p>
          </div>
          <div className="rounded-2xl p-6" style={{ background: MINT }}>
            <h3 className="mb-2 font-serif text-xl" style={{ color: INK }}>
              Join the inner cycle
            </h3>
            <p className="mb-4 text-base leading-relaxed" style={{ color: INK, opacity: 0.78 }}>
              Refer a friend and you both get money off your next order.
            </p>
            <Link
              href="/refer"
              className="inline-block rounded-full px-6 py-2.5 text-sm font-semibold"
              style={{ background: GREEN, color: "#FFFFFF" }}
            >
              Refer a friend
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
