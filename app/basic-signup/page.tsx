"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function BasicSignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Basic validation
    if (!email || !password) {
      setStatus("error")
      setMessage("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setStatus("error")
      setMessage("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setStatus("error")
      setMessage("Password must be at least 6 characters")
      return
    }

    try {
      // Simple signup without complex dependencies
      const response = await fetch("/api/basic-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setMessage("Account created successfully! Check your email for confirmation.")
      } else {
        setStatus("error")
        setMessage(result.error || "Signup failed")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            <Link href="/simple-home" className="text-rose-600 hover:text-rose-700">
              FertiTerra
            </Link>
          </CardTitle>
          <p className="text-center text-gray-600">Create your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {message && (
              <Alert className={status === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}>
                <AlertDescription className={status === "success" ? "text-green-800" : "text-red-800"}>
                  {message}
                </AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/basic-login" className="text-rose-600 hover:text-rose-700">
                Sign in
              </Link>
            </p>
            <p className="text-sm">
              <Link href="/debug" className="text-gray-500 hover:text-gray-700">
                Having issues? Run diagnostics
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
