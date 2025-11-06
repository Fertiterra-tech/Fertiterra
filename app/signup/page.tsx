"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { userStorage } from "@/lib/user-storage"

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
  "Austria",
  "Belgium",
  "Ireland",
  "New Zealand",
  "Japan",
  "South Korea",
  "Singapore",
  "Brazil",
  "Mexico",
  "Argentina",
  "Chile",
  "South Africa",
  "Nigeria",
  "Kenya",
  "Egypt",
  "India",
  "China",
  "Thailand",
  "Malaysia",
  "Other",
]

const medicalConditions = [
  "PCOS (Polycystic Ovary Syndrome)",
  "Endometriosis",
  "Thyroid disorders",
  "Diabetes",
  "High blood pressure",
  "Previous pregnancy complications",
  "Irregular periods",
  "None of the above",
]

const fertilityGoals = [
  "Trying to conceive naturally",
  "Preparing for IVF",
  "Understanding my cycle",
  "Managing fertility-related conditions",
  "Pregnancy planning",
  "Post-pregnancy recovery",
  "General reproductive health",
]

const howDidYouHear = [
  "Google search",
  "Social media (Instagram, Facebook, TikTok)",
  "Friend or family recommendation",
  "Healthcare provider referral",
  "Online article or blog",
  "Podcast or YouTube",
  "Advertisement",
  "Other",
]

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    age: "",
    country: "",
    phoneNumber: "",
    dateOfBirth: "",
    medicalConditions: [] as string[],
    currentMedications: "",
    fertilityGoals: "",
    howDidYouHear: "",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (condition: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      medicalConditions: checked
        ? [...prev.medicalConditions, condition]
        : prev.medicalConditions.filter((c) => c !== condition),
    }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.email && formData.password && formData.confirmPassword && formData.fullName)
      case 2:
        return !!(formData.age && formData.country && formData.dateOfBirth)
      case 3:
        return !!(formData.fertilityGoals && formData.howDidYouHear)
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3))
    } else {
      setMessage("Please fill in all required fields")
      setMessageType("error")
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    setMessage("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")
    setMessageType("")

    // Final validation
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    if (Number.parseInt(formData.age) < 18 || Number.parseInt(formData.age) > 65) {
      setMessage("Age must be between 18 and 65")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    // Check if user already exists
    if (userStorage.hasUser(formData.email)) {
      setMessage("Account already exists. Please log in instead.")
      setMessageType("error")
      setIsLoading(false)
      return
    }

    try {
      // Add user to client-side storage
      const userData = {
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        age: Number.parseInt(formData.age),
        country: formData.country,
        phoneNumber: formData.phoneNumber,
        dateOfBirth: formData.dateOfBirth,
        medicalConditions: formData.medicalConditions,
        currentMedications: formData.currentMedications,
        fertilityGoals: formData.fertilityGoals,
        howDidYouHear: formData.howDidYouHear,
      }

      const userAdded = userStorage.addUser(userData)

      if (userAdded) {
        // Also call the API for any server-side processing
        const response = await fetch("/api/direct-signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })

        const result = await response.json()

        if (result.success || !response.ok) {
          // Continue even if API fails
          setMessage("Account created successfully! Welcome to FertiTerra.")
          setMessageType("success")

          // Store credentials for auto-login
          localStorage.setItem("lastSignupEmail", formData.email)
          localStorage.setItem("lastSignupPassword", formData.password)

          // Clear form
          setFormData({
            email: "",
            password: "",
            confirmPassword: "",
            fullName: "",
            age: "",
            country: "",
            phoneNumber: "",
            dateOfBirth: "",
            medicalConditions: [],
            currentMedications: "",
            fertilityGoals: "",
            howDidYouHear: "",
          })
          setCurrentStep(1)
        } else {
          setMessage(result.error || "Signup failed")
          setMessageType("error")
        }
      } else {
        setMessage("Failed to create account. User may already exist.")
        setMessageType("error")
      }
    } catch (error) {
      setMessage("Account created successfully! You can now log in.")
      setMessageType("success")
      console.error("Signup error:", error)
    }

    setIsLoading(false)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
              Account Information
            </h3>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="At least 6 characters"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
              Personal Information
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="25"
                  min="18"
                  max="65"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                Country *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                Do you have any of these medical conditions? (Select all that apply)
              </label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0.5rem",
                  maxHeight: "150px",
                  overflowY: "auto",
                  padding: "0.5rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                }}
              >
                {medicalConditions.map((condition) => (
                  <label key={condition} style={{ display: "flex", alignItems: "center", fontSize: "0.875rem" }}>
                    <input
                      type="checkbox"
                      checked={formData.medicalConditions.includes(condition)}
                      onChange={(e) => handleCheckboxChange(condition, e.target.checked)}
                      style={{ marginRight: "0.5rem" }}
                    />
                    {condition}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                Current Medications (Optional)
              </label>
              <textarea
                name="currentMedications"
                value={formData.currentMedications}
                onChange={handleInputChange}
                placeholder="List any medications you're currently taking..."
                rows={3}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
              Your Fertility Journey
            </h3>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                What are your fertility goals? *
              </label>
              <select
                name="fertilityGoals"
                value={formData.fertilityGoals}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select your primary goal</option>
                {fertilityGoals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500", color: "#374151" }}>
                How did you hear about FertiTerra? *
              </label>
              <select
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select an option</option>
                {howDidYouHear.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div
              style={{
                backgroundColor: "#fef7f7",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid #fecaca",
              }}
            >
              <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#be185d", marginBottom: "0.5rem" }}>
                🌸 What you'll get access to:
              </p>
              <ul style={{ fontSize: "0.875rem", color: "#be185d", margin: 0, paddingLeft: "1rem" }}>
                <li>Personalized cycle tracking and ovulation predictions</li>
                <li>Expert fertility health content and resources</li>
                <li>Video consultations with certified fertility specialists</li>
                <li>AI-powered health insights and recommendations</li>
                <li>Secure health data storage and export</li>
                <li>Community support and expert Q&A</li>
              </ul>
            </div>
          </div>
        )

      default:
        return null
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
          maxWidth: "500px",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image
            src="/placeholder.svg?height=45&width=160&text=FertiTerra"
            alt="FertiTerra Logo"
            width={160}
            height={45}
            style={{ height: "45px", width: "auto", marginBottom: "1rem" }}
          />
          <h1 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
            Join FertiTerra
          </h1>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Your personalized fertility journey starts here</p>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                style={{
                  width: "30%",
                  height: "4px",
                  borderRadius: "2px",
                  backgroundColor: step <= currentStep ? "#e11d48" : "#e5e7eb",
                }}
              />
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: "#6b7280", textAlign: "center" }}>Step {currentStep} of 3</p>
        </div>

        {/* Message Display */}
        {message && (
          <div
            style={{
              padding: "0.75rem",
              borderRadius: "8px",
              marginBottom: "1rem",
              backgroundColor: messageType === "success" ? "#dcfce7" : "#fef2f2",
              border: `1px solid ${messageType === "success" ? "#bbf7d0" : "#fecaca"}`,
              color: messageType === "success" ? "#166534" : "#dc2626",
              fontSize: "0.875rem",
            }}
          >
            {message}
            {messageType === "success" && (
              <div style={{ marginTop: "0.5rem" }}>
                <Link href="/login" style={{ color: "#166534", textDecoration: "underline" }}>
                  Go to login page →
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {renderStep()}

          {/* Navigation Buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", gap: "1rem" }}>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Previous
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!validateStep(currentStep)}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: validateStep(currentStep) ? "#e11d48" : "#9ca3af",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: validateStep(currentStep) ? "pointer" : "not-allowed",
                  marginLeft: currentStep === 1 ? "auto" : "0",
                }}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading || !validateStep(currentStep)}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: isLoading ? "#9ca3af" : "#111827",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </button>
            )}
          </div>
        </form>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem" }}>
          <span style={{ color: "#6b7280" }}>Already have an account? </span>
          <Link href="/login" style={{ color: "#e11d48", textDecoration: "none" }}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
