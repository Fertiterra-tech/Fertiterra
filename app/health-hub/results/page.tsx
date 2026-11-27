"use client"

import Link from "next/link"
import { INK, GREEN } from "@/lib/brand"

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-[980px]">
      <h1 className="mb-8 font-serif text-3xl sm:text-4xl" style={{ color: INK }}>
        Results
      </h1>
      <div className="rounded-2xl border p-10 text-center" style={{ borderColor: "rgba(31,61,51,0.14)", background: "#FFFFFF" }}>
        <p className="mb-2 text-lg font-semibold" style={{ color: INK }}>
          No results yet
        </p>
        <p className="mb-6 text-base" style={{ color: INK, opacity: 0.7 }}>
          Once your first test or consultation is done, your results will appear here.
        </p>
        <Link
          href="/screening"
          className="inline-block rounded-full px-7 py-3 text-base font-semibold"
          style={{ background: GREEN, color: "#FFFFFF" }}
        >
          Start my free assessment
        </Link>
      </div>
    </div>
  )
}
