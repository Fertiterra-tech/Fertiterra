"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "@/context/auth-context"
import { INK, GREEN, LIME, CREAM, MINT } from "@/lib/brand"

const NAV = [
  { href: "/health-hub/home", label: "Home" },
  { href: "/health-hub/care-plan", label: "Care Plan" },
  { href: "/health-hub/results", label: "Results" },
  { href: "/health-hub/insights", label: "Insights" },
  { href: "/health-hub/assessments", label: "Assessments" },
  { href: "/health-hub/orders", label: "Orders" },
  { href: "/health-hub/account", label: "Account" },
]

export default function HealthHubLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { user, isLoading, signOut } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) router.replace("/login")
  }, [user, isLoading, router])

  const logout = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row" style={{ background: CREAM }}>
      <aside
        className="w-full shrink-0 border-b px-6 py-6 lg:w-[268px] lg:border-b-0 lg:border-r lg:px-6 lg:py-10"
        style={{ background: CREAM, borderColor: "rgba(31,61,51,0.12)" }}
      >
        <Link href="/" className="mb-8 block">
          <span className="block font-serif text-2xl font-semibold" style={{ color: GREEN }}>
            fertiterra
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: INK, opacity: 0.55 }}>
            Health Hub
          </span>
        </Link>

        <nav className="grid gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-base transition"
                style={{
                  background: active ? GREEN : "transparent",
                  color: active ? "#FFFFFF" : INK,
                  fontWeight: active ? 600 : 400,
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-8 grid gap-1 border-t pt-6" style={{ borderColor: "rgba(31,61,51,0.12)" }}>
          <Link href="/consultation" className="rounded-xl px-4 py-3 text-base" style={{ color: INK }}>
            Chat with us
          </Link>
          <Link href="/shop" className="rounded-xl px-4 py-3 text-base" style={{ color: INK }}>
            FertiTerra services
          </Link>
          <button type="button" onClick={logout} className="rounded-xl px-4 py-3 text-left text-base" style={{ color: INK }}>
            Log out
          </button>
        </div>
      </aside>

      <main className="flex-1 px-6 py-8 sm:px-10 lg:px-14 lg:py-12">{children}</main>
    </div>
  )
}
