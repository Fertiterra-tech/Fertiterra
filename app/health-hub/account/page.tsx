"use client"

import type React from "react"
import { useState } from "react"
import { useAuth } from "@/context/auth-context"
import { createClientInstance } from "@/lib/supabase"
import { INK, GREEN, MINT } from "@/lib/brand"

const field = "h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"

export default function AccountPage() {
  const { user, profile, refreshProfile } = useAuth()
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [phone, setPhone] = useState("")
  const [saved, setSaved] = useState("")
  const [password, setPassword] = useState("")
  const [pwMsg, setPwMsg] = useState("")

  const saveDetails = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaved("")
    try {
      const supabase = createClientInstance()
      const full = (first + " " + last).trim()
      const { error } = await supabase.from("profiles").upsert(
        { id: user?.id, full_name: full, phone },
        { onConflict: "id" },
      )
      if (error) throw error
      if (refreshProfile) await refreshProfile()
      setSaved("Saved.")
    } catch {
      setSaved("We could not save your details. Please try again.")
    }
  }

  const updatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setPwMsg("")
    try {
      const supabase = createClientInstance()
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      setPassword("")
      setPwMsg("Password updated.")
    } catch {
      setPwMsg("We could not update your password. Please try again.")
    }
  }

  return (
    <div className="mx-auto w-full max-w-[760px]">
      <h1 className="mb-2 font-serif text-3xl sm:text-4xl" style={{ color: INK }}>
        Account
      </h1>
      <p className="mb-8 text-base" style={{ color: INK, opacity: 0.72 }}>
        Manage your settings and preferences.
      </p>

      <section className="mb-6 rounded-2xl p-6" style={{ background: MINT }}>
        <h2 className="mb-4 text-lg font-semibold" style={{ color: INK }}>
          Personal details
        </h2>
        <form onSubmit={saveDetails} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input aria-label="First name" placeholder="First name" value={first} onChange={(e) => setFirst(e.target.value)} className={field} style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }} />
            <input aria-label="Last name" placeholder="Last name" value={last} onChange={(e) => setLast(e.target.value)} className={field} style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }} />
          </div>
          <input aria-label="Email" value={user?.email || ""} readOnly className={field} style={{ borderColor: "rgba(31,61,51,0.18)", color: INK, opacity: 0.7 }} />
          <input aria-label="Phone number" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }} />
          <div className="flex items-center gap-4">
            <button type="submit" className="rounded-full px-7 py-3 text-base font-semibold" style={{ background: GREEN, color: "#FFFFFF" }}>
              Save
            </button>
            {saved ? <span className="text-sm" style={{ color: INK, opacity: 0.75 }}>{saved}</span> : null}
          </div>
        </form>
      </section>

      <section className="mb-6 rounded-2xl p-6" style={{ background: MINT }}>
        <h2 className="mb-4 text-lg font-semibold" style={{ color: INK }}>
          Password
        </h2>
        <form onSubmit={updatePassword} className="grid gap-4">
          <input aria-label="New password" type="password" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)} className={field} style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }} />
          <div className="flex items-center gap-4">
            <button type="submit" className="rounded-full px-7 py-3 text-base font-semibold" style={{ background: GREEN, color: "#FFFFFF" }}>
              Update password
            </button>
            {pwMsg ? <span className="text-sm" style={{ color: INK, opacity: 0.75 }}>{pwMsg}</span> : null}
          </div>
        </form>
      </section>

      <section className="rounded-2xl p-6" style={{ background: MINT }}>
        <h2 className="mb-2 text-lg font-semibold" style={{ color: INK }}>
          Privacy
        </h2>
        <p className="mb-4 text-base leading-relaxed" style={{ color: INK, opacity: 0.78 }}>
          Your privacy is our top priority. You are always in control of your health data and can request access to it at any time.
        </p>
        <a href="mailto:privacy@fertiterratechnologies.com" className="text-sm font-semibold" style={{ color: GREEN }}>
          Request my data or delete my account
        </a>
      </section>
    </div>
  )
}
