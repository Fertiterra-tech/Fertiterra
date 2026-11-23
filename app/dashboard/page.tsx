"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, BookOpen, CalendarDays, HeartPulse, UserRound } from "lucide-react"
import { useAuth } from "@/context/auth-context"

const careLinks = [
  { title: "Fertility resources", description: "Explore educational guides and practical information.", href: "/knowledge-centre", icon: BookOpen },
  { title: "Appointments", description: "Browse available specialist services.", href: "/appointments/gynaecologist", icon: CalendarDays },
  { title: "Your profile", description: "Review your account details.", href: "/profile", icon: UserRound },
  { title: "Health tracking", description: "View the current status of private tracking tools.", href: "/profile/health", icon: HeartPulse },
]

export default function WombsDashboard() {
  const { user, isLoading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) router.replace("/login")
  }, [isLoading, router, user])

  if (isLoading || !user) {
    return <main className="flex min-h-screen items-center justify-center bg-stone-50" aria-busy="true"><p className="text-sm text-stone-600">Loading your secure dashboard…</p></main>
  }

  const displayName = typeof user.user_metadata?.full_name === "string" && user.user_metadata.full_name.trim()
    ? user.user_metadata.full_name
    : user.email

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div><p className="text-sm font-medium text-emerald-800">FertiTerra</p><h1 className="text-xl font-semibold tracking-tight">Your care dashboard</h1></div>
          <div className="flex items-center gap-4"><p className="hidden text-sm text-slate-600 sm:block">{displayName}</p><button type="button" onClick={() => void signOut()} className="rounded-md border border-stone-300 px-3 py-2 text-sm font-medium hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">Sign out</button></div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6" role="status">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-800">Service update</p>
          <h2 className="mt-2 text-lg font-semibold text-amber-950">Personal health tracking is temporarily paused</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-amber-900">We’re protecting your privacy while secure health-record storage is being restored. Your account and educational resources remain available; cycle and fertility predictions are not shown.</p>
        </section>
        <section className="mt-10" aria-labelledby="care-links-title">
          <div className="mb-4"><h2 id="care-links-title" className="text-lg font-semibold">Continue with FertiTerra</h2><p className="mt-1 text-sm text-slate-600">Browse services and resources available to you.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {careLinks.map(({ title, description, href, icon: Icon }) => <Link key={href} href={href} className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-emerald-700/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"><div className="flex items-start justify-between"><span className="rounded-xl bg-emerald-50 p-2.5 text-emerald-800"><Icon aria-hidden="true" className="h-5 w-5" /></span><ArrowRight aria-hidden="true" className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1" /></div><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{description}</p></Link>)}
          </div>
        </section>
      </main>
    </div>
  )
}
