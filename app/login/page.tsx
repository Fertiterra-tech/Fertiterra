"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { INK, GREEN, LIME, CREAM, PHOTO } from "@/lib/brand"

export default function LoginPage() {
  const router = useRouter()
  const { signIn } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError("")
    const result = await signIn(email.trim(), password)
    if (result.error) {
      setError(
        result.error.message === "Invalid login credentials"
          ? "That email and password do not match an account."
          : result.error.message || "We could not sign you in.",
      )
      setBusy(false)
      return
    }
    router.push("/health-hub/home")
  }

  return (
    <div className="flex min-h-screen" style={{ background: CREAM }}>
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:w-1/2 lg:px-20">
        <Link href="/" className="mb-12 font-serif text-2xl font-semibold" style={{ color: GREEN }}>
          fertiterra
        </Link>

        <div className="w-full max-w-md">
          <h1 className="mb-2 font-serif text-4xl" style={{ color: INK }}>
            Welcome back
          </h1>
          <p className="mb-8 text-base" style={{ color: INK, opacity: 0.7 }}>
            Sign in to see your results, care plan and next steps.
          </p>

          <form onSubmit={submit} className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium" style={{ color: INK }}>
              Email address
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 w-full rounded-xl border bg-white px-4 text-base outline-none"
                style={{ borderColor: "rgba(31,61,51,0.2)", color: INK }}
              />
            </label>

            <label className="grid gap-2 text-sm font-medium" style={{ color: INK }}>
              Password
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 w-full rounded-xl border bg-white px-4 pr-20 text-base outline-none"
                  style={{ borderColor: "rgba(31,61,51,0.2)", color: INK }}
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

            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-sm" style={{ color: GREEN }}>
                Forgot your password?
              </Link>
            </div>

            {error ? (
              <p role="alert" className="rounded-lg px-4 py-3 text-sm" style={{ background: "#FDECEC", color: "#8A1C1C" }}>
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={busy}
              className="h-14 w-full rounded-full text-base font-semibold disabled:opacity-60"
              style={{ background: GREEN, color: "#FFFFFF" }}
            >
              {busy ? "Signing in..." : "Login"}
            </button>
          </form>

          <p className="mt-8 text-sm" style={{ color: INK, opacity: 0.75 }}>
            New to FertiTerra?{" "}
            <Link href="/register" className="font-semibold" style={{ color: GREEN }}>
              Create an account
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
            Clear results. Personal steps. Expert care.
          </p>
          <p className="text-base" style={{ color: LIME }}>
            Your health hub, in one place.
          </p>
        </div>
      </div>
    </div>
  )
}
