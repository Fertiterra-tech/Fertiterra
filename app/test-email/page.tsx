"use client"

import { useState } from "react"

export default function TestEmailPage() {
  const [email, setEmail] = useState("")
  const [emailType, setEmailType] = useState<"welcome" | "confirmation" | "appointment">("welcome")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string>("")

  const handleSendTestEmail = async () => {
    if (!email) {
      setResult("❌ Please enter an email address")
      return
    }

    setLoading(true)
    setResult("")

    try {
      const response = await fetch("/api/test-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: emailType }),
      })

      const data = await response.json()

      if (data.success) {
        setResult(`✅ ${emailType} email sent successfully to ${email}`)
      } else {
        setResult(`❌ Failed to send email: ${data.error}`)
      }
    } catch (error) {
      setResult(`❌ Error sending email: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>📧 Test Email System</h1>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your-email@example.com"
            style={{
              width: "100%",
              padding: "12px",
              border: "2px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Email Type:</label>
          <select
            value={emailType}
            onChange={(e) => setEmailType(e.target.value as any)}
            style={{
              width: "100%",
              padding: "12px",
              border: "2px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          >
            <option value="welcome">Welcome Email</option>
            <option value="confirmation">Confirmation Email</option>
            <option value="appointment">Appointment Confirmation</option>
          </select>
        </div>

        <button
          onClick={handleSendTestEmail}
          disabled={loading}
          style={{
            width: "100%",
            padding: "15px",
            background: loading ? "#ccc" : "#667eea",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: "20px",
          }}
        >
          {loading ? "📤 Sending..." : `📧 Send ${emailType} Email`}
        </button>

        {result && (
          <div
            style={{
              padding: "15px",
              borderRadius: "8px",
              background: result.includes("✅") ? "#d4edda" : "#f8d7da",
              color: result.includes("✅") ? "#155724" : "#721c24",
              border: `1px solid ${result.includes("✅") ? "#c3e6cb" : "#f5c6cb"}`,
              marginBottom: "20px",
            }}
          >
            {result}
          </div>
        )}

        <div
          style={{
            background: "#f8f9fa",
            padding: "15px",
            borderRadius: "8px",
            fontSize: "14px",
            color: "#666",
          }}
        >
          <strong>Note:</strong> This is a test email system. In development, emails are logged to the console. In
          production, integrate with SendGrid, Mailgun, or similar service.
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href="/signup"
            style={{
              color: "#667eea",
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            ← Back to Signup
          </a>
          <a
            href="/dashboard"
            style={{
              color: "#667eea",
              textDecoration: "none",
            }}
          >
            Go to Dashboard →
          </a>
        </div>
      </div>
    </div>
  )
}
