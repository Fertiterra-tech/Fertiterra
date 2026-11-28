"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { QUESTIONS } from "@/lib/assessment/questions"

const INK = "#1F2328"
const GREEN = "#1F3D33"
const LIME = "#FAF7F2"
const CREAM = "#FAF7F2"
const MINT = "#E4EDE6"

type Answers = Record<string, unknown>

export default function ScreeningPage() {
  const router = useRouter()
  const [answers, setAnswers] = useState<Answers>({})
  const [step, setStep] = useState(0)
  const [person, setPerson] = useState({ firstName: "", lastName: "", email: "", phone: "" })
  const [marketingOptIn, setMarketingOptIn] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")

  const visible = useMemo(
    () => QUESTIONS.filter((q) => !q.showIf || q.showIf(answers)),
    [answers],
  )
  // Going back and changing an early answer can shorten the branch, so the
  // index is clamped rather than allowed to point past the end.
  const safeStep = Math.min(step, Math.max(0, visible.length - 1))
  const q = visible[safeStep]
  const progress = Math.round(((safeStep + 1) / Math.max(1, visible.length)) * 100)

  const value = q ? answers[q.id] : undefined
  const selected = Array.isArray(value) ? (value as string[]) : value ? [String(value)] : []

  const setSingle = (id: string, v: string) => {
    setAnswers((prev) => ({ ...prev, [id]: v }))
    setError("")
  }

  const toggle = (id: string, v: string) => {
    setAnswers((prev) => {
      const cur = Array.isArray(prev[id]) ? ([...(prev[id] as string[])] as string[]) : []
      const next = cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]
      return { ...prev, [id]: next }
    })
    setError("")
  }

  const canContinue = () => {
    if (!q) return false
    if (q.type === "contact") {
      return Boolean(person.firstName.trim() && person.lastName.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(person.email.trim()))
    }
    if (q.optional) return true
    if (q.type === "pair") return Boolean(answers.height_cm && answers.weight_kg)
    if (q.type === "number" || q.type === "scale") return String(answers[q.id] || "").length > 0
    return selected.length > 0
  }

  const submit = async () => {
    setBusy(true)
    setError("")
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...person, answers, marketingOptIn }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || "We could not save your answers.")
        setBusy(false)
        return
      }
      router.push("/screening/thank-you")
    } catch {
      setError("We could not reach the server. Check your connection and try again.")
      setBusy(false)
    }
  }

  const next = () => {
    if (!canContinue()) {
      setError(q?.type === "contact" ? "Please add your name and a valid email." : "Choose an answer to continue.")
      return
    }
    if (safeStep === visible.length - 1) {
      void submit()
      return
    }
    setStep((s) => s + 1)
  }

  const back = () => {
    setError("")
    setStep((s) => Math.max(0, Math.min(s, safeStep) - 1))
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ background: CREAM }}>
      <Header />
      <div className="w-full" style={{ background: MINT }}>
        <div className="mx-auto h-1.5 w-full max-w-[1440px]" style={{ background: "rgba(31,61,51,0.12)" }}>
          <div className="h-1.5 transition-all duration-300" style={{ width: progress + "%", background: GREEN }} />
        </div>
      </div>

      <main className="mx-auto w-full max-w-[760px] flex-1 px-6 py-12 sm:px-8 md:py-16">
        {q ? (
          <>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: GREEN }}>
              Step {safeStep + 1} of {visible.length}
            </p>
            <h1 className="mb-3 font-serif text-3xl leading-tight sm:text-4xl" style={{ color: INK }}>
              {q.title}
            </h1>
            {q.help ? (
              <p className="mb-8 text-base leading-relaxed" style={{ color: INK, opacity: 0.72 }}>
                {q.help}
              </p>
            ) : null}

            {q.type === "contact" ? (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    aria-label="First name"
                    placeholder="First name"
                    value={person.firstName}
                    onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
                    className="h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"
                    style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }}
                  />
                  <input
                    aria-label="Last name"
                    placeholder="Last name"
                    value={person.lastName}
                    onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
                    className="h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"
                    style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }}
                  />
                </div>
                <input
                  aria-label="Email address"
                  placeholder="Email address"
                  type="email"
                  value={person.email}
                  onChange={(e) => setPerson({ ...person, email: e.target.value })}
                  className="h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"
                  style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }}
                />
                <input
                  aria-label="Phone number"
                  placeholder="Phone number (optional)"
                  value={person.phone}
                  onChange={(e) => setPerson({ ...person, phone: e.target.value })}
                  className="h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"
                  style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }}
                />
                <label className="flex items-start gap-3 text-sm" style={{ color: INK, opacity: 0.8 }}>
                  <input
                    type="checkbox"
                    checked={marketingOptIn}
                    onChange={(e) => setMarketingOptIn(e.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                  Send me occasional FertiTerra news and offers. You can unsubscribe at any time.
                </label>
              </div>
            ) : null}

            {q.type === "multi" ? (
              <div className="grid gap-3">
                {q.options?.map((opt) => {
                  const on = selected.includes(opt)
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggle(q.id, opt)}
                      aria-pressed={on}
                      className="flex w-full items-center gap-3 rounded-xl border px-5 py-4 text-left text-base transition"
                      style={{
                        background: on ? MINT : "#FFFFFF",
                        borderColor: on ? GREEN : "rgba(31,61,51,0.16)",
                        color: INK,
                      }}
                    >
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm"
                        style={{ background: on ? GREEN : "transparent", color: on ? "#FFFFFF" : GREEN, border: on ? "none" : "1px solid rgba(31,61,51,0.3)" }}
                      >
                        {on ? "\u2713" : "+"}
                      </span>
                      {opt}
                    </button>
                  )
                })}
              </div>
            ) : null}

            {q.type === "single" ? (
              <div className="grid gap-3">
                {q.options?.map((opt) => {
                  const on = selected.includes(opt)
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSingle(q.id, opt)}
                      aria-pressed={on}
                      className="w-full rounded-xl border px-5 py-4 text-left text-base transition"
                      style={{
                        background: on ? MINT : "#FFFFFF",
                        borderColor: on ? GREEN : "rgba(31,61,51,0.16)",
                        color: INK,
                      }}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            ) : null}

            {q.type === "date" ? (
              <input
                type="date"
                value={String(answers[q.id] || "")}
                onChange={(e) => setSingle(q.id, e.target.value)}
                className="h-14 w-full max-w-xs rounded-xl border bg-white px-4 text-base outline-none"
                style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }}
              />
            ) : null}

            {q.type === "number" ? (
              <div className="flex max-w-sm items-center gap-3">
                <input
                  type="number"
                  inputMode="numeric"
                  value={String(answers[q.id] || "")}
                  onChange={(e) => setSingle(q.id, e.target.value)}
                  className="h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"
                  style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }}
                />
                {q.unit ? <span className="whitespace-nowrap text-sm" style={{ color: INK, opacity: 0.6 }}>{q.unit}</span> : null}
              </div>
            ) : null}

            {q.type === "scale" ? (
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 11 }, (_, i) => i).map((n) => {
                  const on = String(answers[q.id] || "") === String(n)
                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setSingle(q.id, String(n))}
                      aria-pressed={on}
                      className="h-12 w-12 rounded-full border text-base font-semibold transition"
                      style={{
                        background: on ? GREEN : "#FFFFFF",
                        borderColor: on ? GREEN : "rgba(31,61,51,0.16)",
                        color: on ? "#FFFFFF" : INK,
                      }}
                    >
                      {n}
                    </button>
                  )
                })}
              </div>
            ) : null}

            {q.type === "pair" ? (
              <div className="grid max-w-sm gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: INK }}>Height (cm)</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    value={String(answers.height_cm || "")}
                    onChange={(e) => setSingle("height_cm", e.target.value)}
                    className="h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"
                    style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium" style={{ color: INK }}>Weight (kg)</label>
                  <input
                    type="number"
                    inputMode="numeric"
                    value={String(answers.weight_kg || "")}
                    onChange={(e) => setSingle("weight_kg", e.target.value)}
                    className="h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"
                    style={{ borderColor: "rgba(31,61,51,0.18)", color: INK }}
                  />
                </div>
              </div>
            ) : null}

            {error ? (
              <p role="alert" className="mt-5 rounded-lg px-4 py-3 text-sm" style={{ background: "#FDECEC", color: "#8A1C1C" }}>
                {error}
              </p>
            ) : null}

            <div className="mt-9 flex items-center gap-4">
              <button
                type="button"
                onClick={back}
                disabled={safeStep === 0}
                className="rounded-full px-6 py-3 text-base font-medium disabled:opacity-40"
                style={{ color: INK, border: "1px solid rgba(31,61,51,0.25)" }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={next}
                disabled={busy}
                className="rounded-full px-8 py-3 text-base font-semibold transition disabled:opacity-60"
                style={{ background: GREEN, color: "#FFFFFF" }}
              >
                {busy ? "Saving..." : safeStep === visible.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <p style={{ color: INK }}>Loading your questions...</p>
        )}
      </main>
    </div>
  )
}
