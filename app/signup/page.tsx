"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import { useAuth } from "@/context/auth-context"

export default function SignupPage() {
  const router = useRouter()
  const { signUp } = useAuth()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")

    if (password.length < 8) {
      setErrorMessage("Choose a password with at least 8 characters.")
      return
    }

    if (password !== confirmPassword) {
      setErrorMessage("The passwords do not match.")
      return
    }

    setIsSubmitting(true)
    try {
      const result = await signUp(email.trim(), password, fullName.trim())
      if (!result.success) {
        setErrorMessage(result.error?.message ?? "Account creation is temporarily unavailable.")
        return
      }

      if (result.needsConfirmation) {
        setSuccessMessage("Check your email to confirm your account before signing in.")
        setPassword("")
        setConfirmPassword("")
        return
      }

      router.push("/dashboard")
    } catch {
      setErrorMessage("Account creation is temporarily unavailable. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto flex max-w-6xl justify-center px-4 py-12 sm:px-6 lg:py-16">
        <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-labelledby="signup-title">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-rose-700">FertiTerra</p>
            <h1 id="signup-title" className="text-3xl font-semibold tracking-tight text-slate-900">Create your account</h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start with your account details. Health information is not collected during sign-up.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="full-name" className="mb-1.5 block text-sm font-medium text-slate-800">Full name</label>
              <input
                id="full-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="h-11 w-full rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-800">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 w-full rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-800">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                maxLength={128}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-11 w-full rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20"
              />
              <p className="mt-1.5 text-xs text-slate-500">Use at least 8 characters.</p>
            </div>

            <div>
              <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-medium text-slate-800">Confirm password</label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                maxLength={128}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="h-11 w-full rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-rose-600 focus:ring-2 focus:ring-rose-600/20"
              />
            </div>

            {errorMessage && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-800">{errorMessage}</p>}
            {successMessage && <p role="status" aria-live="polite" className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-800">{successMessage}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-11 w-full items-center justify-center rounded-lg bg-rose-700 px-4 text-sm font-semibold text-white transition hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account? <Link href="/login" className="font-semibold text-rose-700 underline-offset-4 hover:underline">Sign in</Link>
          </p>
        </section>
      </main>
    </div>
  )
}
