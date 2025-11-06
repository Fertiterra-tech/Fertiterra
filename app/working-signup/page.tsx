"use client"

import type React from "react"

import { useState } from "react"

export default function WorkingSignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setStatus("error")
      setMessage("All fields are required")
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
      const response = await fetch("/api/simple-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "signup",
          email,
          password,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setMessage("Account created successfully! Check your email for confirmation.")
        // Clear form
        setEmail("")
        setPassword("")
        setConfirmPassword("")
      } else {
        setStatus("error")
        setMessage(result.error || "Signup failed")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Connection error. Please try again.")
      console.error("Signup error:", error)
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
          <p style={{ color: "#6b7280" }}>Create your fertility health account</p>
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
              placeholder="At least 6 characters"
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
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
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

          <div
            style={{
              padding: "1rem",
              backgroundColor: "#fdf2f8",
              borderRadius: "6px",
              border: "1px solid #fce7f3",
            }}
          >
            <h4 style={{ fontWeight: "600", color: "#be185d", marginBottom: "0.5rem" }}>What you'll get:</h4>
            <ul style={{ fontSize: "0.875rem", color: "#be185d", margin: 0, paddingLeft: "1rem" }}>
              <li>🩺 Track menstrual cycles and ovulation</li>
              <li>📖 Access fertility health resources</li>
              <li>👩‍⚕️ Book video consultations with doctors</li>
              <li>📊 Get personalized health insights</li>
            </ul>
          </div>

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
            {status === "loading" ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Already have an account?{" "}
            <a href="/working-login" style={{ color: "#e11d48", textDecoration: "none" }}>
              Sign in
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
