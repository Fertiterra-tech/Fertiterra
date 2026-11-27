"use client"

import type React from "react"
import { useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { createClientInstance } from "@/lib/supabase"
import { INK, GREEN, LIME, CREAM, PHOTO } from "@/lib/brand"

const COUNTRIES = [
  { code: "+250", label: "Rwanda" },
  { code: "+234", label: "Nigeria" },
  { code: "+254", label: "Kenya" },
  { code: "+256", label: "Uganda" },
  { code: "+255", label: "Tanzania" },
  { code: "+44", label: "United Kingdom" },
  { code: "+1", label: "United States" },
]

const field =
  "h-14 w-full rounded-xl border bg-white px-4 text-base outline-none focus:ring-2 focus:ring-[#1F3D33]/25"
const border = { borderColor: "rgba(31,61,51,0.2)", color: INK }

export default function RegisterPage() {
  const router = useRouter()
  const { signUp, resendConfirmation } = useAuth()

  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [dial, setDial] = useState("+250")
  const [phone, setPhone] = useState("")
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [sex, setSex] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [marketing, setMarketing] = useState(false)
  const [show, setShow] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [sent, setSent] = useState(false)
  const [existing, setExisting] = useState(false)
  const [resending, setResending] = useState(false)
  const [resendNote, setResendNote] = useState("")

  const pwIssue = useMemo(() => {
    if (!password) return ""
    if (password.length < 8) return "Use at least 8 characters."
    if (confirm && password !== confirm) return "The two passwords do not match."
    return ""
  }, [password, confirm])

  const dobValid = () => {
    const d = Number(day)
    const m = Number(month)
    const y = Number(year)
    if (!d || !m || !y) return false
    if (d < 1 || d > 31 || m < 1 || m > 12) return false
    if (y < 1900 || y > new Date().getFullYear()) return false
    return true
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!first.trim() || !last.trim()) {
      setError("Please enter your first and last name.")
      return
    }
    if (!dobValid()) {
      setError("Please enter a valid date of birth.")
      return
    }
    if (!sex) {
      setError("Please tell us the sex you were assigned at birth.")
      return
    }
    if (password.length < 8) {
      setError("Use at least 8 characters for your password.")
      return
    }
    if (password !== confirm) {
      setError("The two passwords do not match.")
      return
    }

    setBusy(true)
    const result = await signUp(email.trim(), password)

    if (result.error) {
      const message = String(result.error.message || "")
      setError(
        /already registered|already exists/i.test(message)
          ? "An account already exists for that email. Try logging in instead."
          : message || "We could not create your account. Please try again.",
      )
      setBusy(false)
      return
    }

    if (result.existingAccount) {
      setExisting(true)
      setBusy(false)
      return
    }

    // Best effort: keep the details they gave us against the new profile.
    try {
      const supabase = createClientInstance()
      const { data } = await supabase.auth.getUser()
      if (data && data.user) {
        await supabase.from("profiles").upsert(
          {
            id: data.user.id,
            full_name: (first + " " + last).trim(),
            phone: dial + phone,
            date_of_birth: year + "-" + String(month).padStart(2, "0") + "-" + String(day).padStart(2, "0"),
            sex_at_birth: sex,
            marketing_opt_in: marketing,
          },
          { onConflict: "id" },
        )
      }
    } catch {
      // The account exists either way; details can be completed in Account.
    }

    if (result.needsConfirmation) {
      setSent(true)
      setBusy(false)
      return
    }

    router.push("/health-hub/home")
  }

  const handleResend = async () => {
    setResending(true)
    setResendNote("")
    const outcome = await resendConfirmation(email.trim())
    setResendNote(
      outcome.error
        ? "We could not send it just now. Wait a minute and try again."
        : "Sent. Check your inbox and your spam folder.",
    )
    setResending(false)
  }

  if (existing) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6" style={{ background: CREAM }}>
        <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center">
          <h1 className="mb-3 font-serif text-3xl" style={{ color: INK }}>
            That email already has an account
          </h1>
          <p className="mb-6 text-base leading-relaxed" style={{ color: INK, opacity: 0.75 }}>
            {email} is already registered with FertiTerra. Sign in with your password. If you never finished
            setting it up, we can send a fresh confirmation link.
          </p>
          <Link
            href="/login"
            className="mb-3 inline-block w-full rounded-full px-7 py-3 text-base font-semibold"
            style={{ background: GREEN, color: "#FFFFFF" }}
          >
            Sign in
          </Link>
          <button
            type="button"
            onClick={handleResend}
            disabled={resending}
            className="mb-3 inline-block w-full rounded-full border px-7 py-3 text-base font-semibold disabled:opacity-60"
            style={{ borderColor: "rgba(31,61,51,0.25)", color: INK }}
          >
            {resending ? "Sending..." : "Send a new confirmation link"}
          </button>
          {resendNote ? (
            <p className="mb-3 text-sm" style={{ color: INK, opacity: 0.7 }}>
              {resendNote}
            </p>
          ) : null}
          <button
            type="button"
            onClick={() => {
              setExisting(false)
              setEmail("")
              setError("")
            }}
            className="text-sm underline"
            style={{ color: INK, opacity: 0.7 }}
          >
            Use a different email
          </button>
        </div>
      </div>
    )
  }

  if (sent) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6" style={{ background: CREAM }}>
        <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center">
          <h1 className="mb-3 font-serif text-3xl" style={{ color: INK }}>
            Check your email
          </h1>
          <p className="mb-6 text-base leading-relaxed" style={{ color: INK, opacity: 0.75 }}>
            We sent a confirmation link to {email}. Open it to finish setting up your account, then sign in.
          </p>
          <Link
            href="/login"
            className="inline-block rounded-full px-7 py-3 text-base font-semibold"
            style={{ background: GREEN, color: "#FFFFFF" }}
          >
            Go to login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen" style={{ background: CREAM }}>
      <div className="flex w-full flex-col px-6 py-10 sm:px-10 lg:w-1/2 lg:px-20">
        <Link href="/" className="mb-8 inline-block font-serif text-2xl font-semibold" style={{ color: GREEN }}>
          fertiterra
        </Link>

        <Link href="/login" className="mb-8 text-sm font-medium" style={{ color: GREEN }}>
          Back to login
        </Link>

        <div className="w-full max-w-[420px]">
          <h1 className="mb-8 font-serif text-4xl" style={{ color: INK }}>
            Create account
          </h1>

          <form onSubmit={submit} className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium" style={{ color: INK }}>
              First name
              <input value={first} onChange={(e) => setFirst(e.target.value)} placeholder="Amara" className={field} style={border} required />
            </label>

            <label className="grid gap-2 text-sm font-medium" style={{ color: INK }}>
              Last name
              <input value={last} onChange={(e) => setLast(e.target.value)} placeholder="Mugisha" className={field} style={border} required />
            </label>

            <label className="grid gap-2 text-sm font-medium" style={{ color: INK }}>
              Email address
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className={field} style={border} required />
            </label>

            <label className="grid gap-2 text-sm font-medium" style={{ color: INK }}>
              Phone number
              <div className="flex gap-2">
                <select
                  aria-label="Country code"
                  value={dial}
                  onChange={(e) => setDial(e.target.value)}
                  className="h-14 shrink-0 rounded-xl border bg-white px-3 text-base outline-none"
                  style={border}
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} {c.label}
                    </option>
                  ))}
                </select>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="790 000 000"
                  inputMode="tel"
                  className={field}
                  style={border}
                  required
                />
              </div>
            </label>

            <div className="grid gap-2">
              <span className="text-sm font-medium" style={{ color: INK }}>
                Date of birth
              </span>
              <div className="grid grid-cols-3 gap-2">
                <input aria-label="Day" value={day} onChange={(e) => setDay(e.target.value)} placeholder="DD" inputMode="numeric" maxLength={2} className={field + " text-center"} style={border} required />
                <input aria-label="Month" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="MM" inputMode="numeric" maxLength={2} className={field + " text-center"} style={border} required />
                <input aria-label="Year" value={year} onChange={(e) => setYear(e.target.value)} placeholder="YYYY" inputMode="numeric" maxLength={4} className={field + " text-center"} style={border} required />
              </div>
            </div>

            <fieldset className="grid gap-2">
              <legend className="mb-2 text-sm font-medium" style={{ color: INK }}>
                What sex were you assigned at birth?
              </legend>
              <div className="flex gap-2">
                {["Female", "Male"].map((option) => {
                  const on = sex === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSex(option)}
                      aria-pressed={on}
                      className="h-14 flex-1 rounded-xl border text-base font-medium"
                      style={{
                        background: on ? GREEN : "#FFFFFF",
                        borderColor: on ? GREEN : "rgba(31,61,51,0.2)",
                        color: on ? "#FFFFFF" : INK,
                      }}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <label className="grid gap-2 text-sm font-medium" style={{ color: INK }}>
              New password
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={field + " pr-20"}
                  style={border}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium"
                  style={{ color: GREEN }}
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <label className="grid gap-2 text-sm font-medium" style={{ color: INK }}>
              Confirm new password
              <input
                type={show ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm password"
                className={field}
                style={border}
                required
              />
            </label>

            {pwIssue ? (
              <p className="text-sm" style={{ color: "#8A1C1C" }}>
                {pwIssue}
              </p>
            ) : null}

            <label className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: INK, opacity: 0.85 }}>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 rounded border"
                style={{ accentColor: GREEN }}
              />
              <span>
                I want to receive email communications on new products, exclusive offers and events. You can unsubscribe at any
                time. <Link href="/legal/privacy" className="underline" style={{ color: GREEN }}>View our Privacy Policy.</Link>
              </span>
            </label>

            {error ? (
              <p role="alert" className="rounded-lg px-4 py-3 text-sm" style={{ background: "#FDECEC", color: "#8A1C1C" }}>
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={busy}
              className="mt-2 h-14 w-full rounded-full text-base font-semibold disabled:opacity-60"
              style={{ background: GREEN, color: "#FFFFFF" }}
            >
              {busy ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-8 text-sm" style={{ color: INK, opacity: 0.75 }}>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold" style={{ color: GREEN }}>
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="relative hidden lg:block lg:w-1/2">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(" + PHOTO + ")",
            backgroundSize: "cover",
            backgroundPosition: "center 58%",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(31,61,51,0.55)" }} />
        <div className="absolute inset-x-0 bottom-0 p-14">
          <p className="mb-3 font-serif text-3xl leading-tight" style={{ color: "#FFFFFF" }}>
            Start with answers, not guesses.
          </p>
          <p className="text-base" style={{ color: LIME }}>
            A few questions, then a plan built for you.
          </p>
        </div>
      </div>
    </div>
  )
}
