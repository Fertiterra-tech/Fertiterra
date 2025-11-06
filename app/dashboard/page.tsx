"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function DashboardPage() {
  const [user, setUser] = useState<{ email: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const userEmail = localStorage.getItem("userEmail")

    if (!isLoggedIn || !userEmail) {
      router.push("/login")
      return
    }

    setUser({ email: userEmail })
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9fafb",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #e5e7eb",
              borderTop: "4px solid #e11d48",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 1rem",
            }}
          ></div>
          <p style={{ color: "#6b7280" }}>Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "1rem 0",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/placeholder.svg?height=40&width=140&text=FertiTerra"
              alt="FertiTerra Logo"
              width={140}
              height={40}
              style={{ height: "40px", width: "auto" }}
            />
          </Link>

          <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <Link
              href="/dashboard"
              style={{ color: "#e11d48", textDecoration: "none", fontWeight: "500", fontSize: "0.875rem" }}
            >
              Dashboard
            </Link>
            <Link href="/cycle-tracking" style={{ color: "#6b7280", textDecoration: "none", fontSize: "0.875rem" }}>
              Track Cycle
            </Link>
            <Link href="/consultation" style={{ color: "#6b7280", textDecoration: "none", fontSize: "0.875rem" }}>
              Consultations
            </Link>
            <Link href="/blog" style={{ color: "#6b7280", textDecoration: "none", fontSize: "0.875rem" }}>
              Learn
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#e11d48",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                {user.email.charAt(0).toUpperCase()}
              </div>
              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "1px solid #d1d5db",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                  color: "#6b7280",
                }}
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Welcome Section */}
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#111827", marginBottom: "0.5rem" }}>
            Welcome back, {user.email.split("@")[0]}! 🌸
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1.125rem" }}>
            Track your fertility journey and connect with healthcare professionals.
          </p>
        </div>

        {/* Quick Actions */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Cycle Tracking Card */}
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fef2f2",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>📅</span>
              </div>
              <div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#111827", margin: 0 }}>
                  Track Your Cycle
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Log periods and symptoms</p>
              </div>
            </div>
            <Link
              href="/cycle-tracking"
              style={{
                display: "inline-block",
                backgroundColor: "#e11d48",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Start Tracking
            </Link>
          </div>

          {/* Consultation Card */}
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#f0f9ff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>👩‍⚕️</span>
              </div>
              <div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#111827", margin: 0 }}>
                  Book Consultation
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Talk to fertility experts</p>
              </div>
            </div>
            <Link
              href="/consultation"
              style={{
                display: "inline-block",
                backgroundColor: "#0369a1",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Learning Card */}
          <div
            style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#f0fdf4",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>📚</span>
              </div>
              <div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#111827", margin: 0 }}>
                  Learn About Fertility
                </h3>
                <p style={{ color: "#6b7280", fontSize: "0.875rem", margin: 0 }}>Expert articles and guides</p>
              </div>
            </div>
            <Link
              href="/blog"
              style={{
                display: "inline-block",
                backgroundColor: "#16a34a",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Start Learning
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div
          style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
            Your Fertility Journey
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            <div style={{ textAlign: "center", padding: "1rem" }}>
              <div style={{ fontSize: "2rem", fontWeight: "700", color: "#e11d48", marginBottom: "0.5rem" }}>0</div>
              <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>Cycles Tracked</div>
            </div>
            <div style={{ textAlign: "center", padding: "1rem" }}>
              <div style={{ fontSize: "2rem", fontWeight: "700", color: "#0369a1", marginBottom: "0.5rem" }}>0</div>
              <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>Consultations</div>
            </div>
            <div style={{ textAlign: "center", padding: "1rem" }}>
              <div style={{ fontSize: "2rem", fontWeight: "700", color: "#16a34a", marginBottom: "0.5rem" }}>0</div>
              <div style={{ color: "#6b7280", fontSize: "0.875rem" }}>Articles Read</div>
            </div>
          </div>
        </div>
      </main>

      {/* CSS for spinner animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
