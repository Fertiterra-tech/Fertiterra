"use client"

import type React from "react"

import { useState } from "react"

export default function WorkingLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    if (!email || !password) {
      setStatus("error")
      setMessage("Email and password are required")
      return
    }

    try {
      const response = await fetch("/api/simple-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "login",
          email,
          password,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setMessage("Login successful! Redirecting...")
        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = "/dashboard"
        }, 1000)
      } else {
        setStatus("error")
        setMessage(result.error || "Login failed")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Connection error. Please try again.")
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
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#e11d48",
              marginBottom: "0.5rem",
            }}
          >
            FertiTerra
          </h1>
          <p style={{ color: "#6b7280" }}>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "1rem",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "1rem",
              }}
            />
          </div>

          {message && (
            <div
              style={{
                padding: "0.75rem",
                borderRadius: "6px",
                backgroundColor: status === "success" ? "#dcfce7" : "#fef2f2",
                border: `1px solid ${status === "success" ? "#bbf7d0" : "#fecaca"}`,
                color: status === "success" ? "#166534" : "#dc2626",
              }}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: status === "loading" ? "#9ca3af" : "#e11d48",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: status === "loading" ? "not-allowed" : "pointer",
            }}
          >
            {status === "loading" ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Don't have an account?{" "}
            <a href="/working-signup" style={{ color: "#e11d48", textDecoration: "none" }}>
              Create account
            </a>
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <a href="/" style={{ fontSize: "0.875rem", color: "#9ca3af", textDecoration: "none" }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
