"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClientInstance } from "@/lib/supabase"
import { useAuth } from "@/context/auth-context"
import { INK, GREEN, MINT } from "@/lib/brand"

type Row = {
  id: string
  created_at: string
  updated_at: string
  goal: string | null
  status: string | null
}

function fmt(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) +
    " | " + d.toLocaleTimeString("en-GB", { hour: "numeric", minute: "2-digit" })
}

export default function AssessmentsPage() {
  const { user, isLoading } = useAuth()
  const [rows, setRows] = useState<Row[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (isLoading || !user) return
    let alive = true
    const load = async () => {
      try {
        const supabase = createClientInstance()
        const { data } = await supabase
          .from("assessments")
          .select("id, created_at, updated_at, goal, status")
          .order("created_at", { ascending: false })
        if (alive) setRows((data as Row[]) || [])
      } catch {
        if (alive) setRows([])
      } finally {
        if (alive) setReady(true)
      }
    }
    void load()
    return () => {
      alive = false
    }
  }, [user, isLoading])

  return (
    <div className="mx-auto w-full max-w-[980px]">
      <h1 className="mb-2 font-serif text-3xl sm:text-4xl" style={{ color: INK }}>
        Assessments
      </h1>
      <p className="mb-8 text-base" style={{ color: INK, opacity: 0.72 }}>
        The foundation of your personalised care.
      </p>

      {ready && rows.length === 0 ? (
        <div className="rounded-2xl border p-10 text-center" style={{ borderColor: "rgba(31,61,51,0.14)", background: "#FFFFFF" }}>
          <p className="mb-2 text-lg font-semibold" style={{ color: INK }}>
            No assessments yet
          </p>
          <p className="mb-6 text-base" style={{ color: INK, opacity: 0.7 }}>
            Answer a few questions and we will build your first care plan.
          </p>
          <Link href="/screening" className="inline-block rounded-full px-7 py-3 text-base font-semibold" style={{ background: GREEN, color: "#FFFFFF" }}>
            Start my free assessment
          </Link>
        </div>
      ) : null}

      <div className="grid gap-3">
        {rows.map((r) => {
          const complete = (r.status || "").toLowerCase() === "submitted"
          return (
            <div
              key={r.id}
              className="flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
              style={{ background: MINT }}
            >
              <div>
                <span
                  className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: complete ? GREEN : "#FFFFFF", color: complete ? "#FFFFFF" : INK }}
                >
                  {complete ? "Complete" : "Incomplete"}
                </span>
                <p className="text-sm" style={{ color: INK, opacity: 0.65 }}>
                  {fmt(r.created_at)}
                </p>
                <p className="mt-1 text-base font-semibold" style={{ color: INK }}>
                  Online health assessment
                </p>
                {r.goal ? (
                  <p className="mt-1 text-sm" style={{ color: INK, opacity: 0.7 }}>
                    {r.goal}
                  </p>
                ) : null}
              </div>
              <Link
                href={complete ? "/health-hub/care-plan" : "/screening"}
                className="self-start rounded-full px-6 py-2.5 text-sm font-semibold"
                style={{ background: GREEN, color: "#FFFFFF" }}
              >
                {complete ? "View answers" : "Continue"}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
