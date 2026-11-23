"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/auth-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setMessageType("")

    // Basic validation
    if (!email || !password) {
      setMessage("Email and password are required")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    try {
      const result = await signIn(email.trim(), password)
      if (!result.success) {
        setMessage(result.error?.message || "Unable to sign in. Please try again.")
        setMessageType("error")
      }
    } catch {
      setMessage("Connection error. Please try again.")
      setMessageType("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image
            src="/images/fertiterra-logo-main.png"
            alt="FertiTerra Logo"
            width={200}
            height={60}
            style={{ height: "auto", width: "200px", marginBottom: "1rem" }}
          />
          <h1 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
            Welcome back
          </h1>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Sign in to your FertiTerra account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Message Display */}
          {message && (
            <div
              style={{
                padding: "0.75rem",
                borderRadius: "8px",
                backgroundColor: messageType === "success" ? "#dcfce7" : "#fef2f2",
                border: `1px solid ${messageType === "success" ? "#bbf7d0" : "#fecaca"}`,
                color: messageType === "success" ? "#166534" : "#dc2626",
                fontSize: "0.875rem",
              }}
            >
              {message}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "1rem",
                backgroundColor: isLoading ? "#f9fafb" : "white",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password Field */}
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "1rem",
                backgroundColor: isLoading ? "#f9fafb" : "white",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: isLoading ? "#9ca3af" : "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "background-color 0.2s",
            }}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer Links */}
        <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={{ color: "#6b7280" }}>Don't have an account? </span>
            <Link href="/signup" style={{ color: "#e11d48", textDecoration: "none" }}>
              Sign up
            </Link>
          </div>
          <div>
            <Link href="/" style={{ color: "#9ca3af", textDecoration: "none" }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
