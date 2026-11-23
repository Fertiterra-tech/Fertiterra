"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"

export default function WombsDashboard() {
  const { user, isLoading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) router.replace("/login")
  }, [isLoading, router, user])

  if (isLoading || !user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-50" aria-busy="true">
        <p className="text-sm text-stone-600">Loading your secure dashboard…</p>
      </main>
    )
  }

  const displayName =
    typeof user.user_metadata?.full_name === "string" && user.user_metadata.full_name.trim()
      ? user.user_metadata.full_name
      : user.email

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div>
            <p className="text-sm font-medium text-emerald-800">FertiTerra</p>
            <h1 className="text-xl font-semibold tracking-tight">Your care dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="hidden text-sm text-slate-600 sm:block">{displayName}</p>
            <button
              type="button"
              onClick={() => void signOut()}
              className="rounded-md border border-stone-300 px-3 py-2 text-sm font-medium hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6" role="status">
          <h2 className="text-lg font-semibold text-amber-950">Personalized tracking is temporarily unavailable</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-amber-900">
            Secure health-data storage is currently offline. This dashboard will not generate cycle or fertility
            predictions, and it will not claim that tracking data has been saved.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2" aria-label="Available services">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold">Fertility checkup</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Secure intake and appointment scheduling are paused until the health-data service is restored.
            </p>
            <Link
              href="/plans/basic-fertility-checkup"
              className="mt-5 inline-flex rounded-md border border-stone-300 px-4 py-2 text-sm font-medium hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              Check service status
            </Link>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold">General health education</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Learn about fertility and reproductive health without entering personal health information.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex rounded-md border border-stone-300 px-4 py-2 text-sm font-medium hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
            >
              Explore FertiTerra
            </Link>
          </article>
        </section>
      </main>
    </div>
  )
}
