"use client"

export default function EmergencyHomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          padding: "1rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#e11d48",
            }}
          >
            FertiTerra
          </h1>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="/working-login"
              style={{
                padding: "0.5rem 1rem",
                color: "#e11d48",
                textDecoration: "none",
                border: "1px solid #e11d48",
                borderRadius: "6px",
              }}
            >
              Sign In
            </a>
            <a
              href="/working-signup"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#e11d48",
                color: "white",
                textDecoration: "none",
                borderRadius: "6px",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ padding: "4rem 1rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1rem",
            }}
          >
            Your Fertility Health Journey Starts Here
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#6b7280",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Track your cycle, understand your fertility, and connect with specialists - all in one platform.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/working-signup"
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#e11d48",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "1.125rem",
                fontWeight: "500",
              }}
            >
              Start Tracking Today
            </a>
            <a
              href="/consultation"
              style={{
                padding: "1rem 2rem",
                border: "1px solid #e11d48",
                color: "#e11d48",
                textDecoration: "none",
                borderRadius: "8px",
                fontSize: "1.125rem",
                fontWeight: "500",
              }}
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "4rem auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🩺</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Cycle Tracking</h3>
            <p style={{ color: "#6b7280" }}>
              Monitor your menstrual cycle and ovulation with our easy-to-use tracking tools.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>👩‍⚕️</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Expert Consultations</h3>
            <p style={{ color: "#6b7280" }}>Connect with fertility specialists through secure video consultations.</p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📊</div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>Health Insights</h3>
            <p style={{ color: "#6b7280" }}>Get personalized insights and recommendations based on your health data.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
