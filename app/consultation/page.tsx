"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Mock data for doctors
const doctors = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Reproductive Endocrinologist",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Sarah",
    specialties: ["Fertility", "PCOS", "IVF"],
    experience: "12 years",
    rating: 4.9,
    reviewCount: 124,
    bio: "Dr. Sarah Johnson is a board-certified reproductive endocrinologist with over 12 years of experience helping women navigate their fertility journey.",
    nextAvailable: "Tomorrow",
    price: "$150",
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    title: "OB/GYN, Fertility Specialist",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Michael",
    specialties: ["Hormonal Health", "Endometriosis", "Fertility Preservation"],
    experience: "8 years",
    rating: 4.8,
    reviewCount: 98,
    bio: "Dr. Michael Chen is an OB/GYN with specialized training in reproductive medicine. He focuses on hormonal health and endometriosis management.",
    nextAvailable: "Today",
    price: "$130",
  },
  {
    id: "dr-amara-patel",
    name: "Dr. Amara Patel",
    title: "Reproductive Immunologist",
    image: "/placeholder.svg?height=200&width=200&text=Dr.+Amara",
    specialties: ["Recurrent Pregnancy Loss", "Immunology", "Unexplained Infertility"],
    experience: "15 years",
    rating: 4.9,
    reviewCount: 156,
    bio: "Dr. Amara Patel specializes in reproductive immunology, focusing on recurrent pregnancy loss and unexplained infertility.",
    nextAvailable: "In 2 days",
    price: "$180",
  },
]

// Available time slots
const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: false },
  { time: "11:00 AM", available: true },
  { time: "1:00 PM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: false },
  { time: "4:00 PM", available: true },
]

export default function ConsultationPage() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0])
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [consultationType, setConsultationType] = useState("video")
  const [isBooking, setIsBooking] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const router = useRouter()

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time for your appointment")
      return
    }

    setIsBooking(true)

    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false)
      setBookingSuccess(true)

      // Redirect to confirmation after 2 seconds
      setTimeout(() => {
        router.push(
          `/consultation/confirmation?doctor=${selectedDoctor.id}&date=${selectedDate}&time=${selectedTime}&type=${consultationType}`,
        )
      }, 2000)
    }, 1500)
  }

  if (bookingSuccess) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "3rem",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "500px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#16a34a", marginBottom: "1rem" }}>
            Appointment Booked Successfully!
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "2rem" }}>
            Your consultation with {selectedDoctor.name} has been confirmed for {selectedDate} at {selectedTime}.
          </p>
          <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>Redirecting to confirmation page...</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", borderBottom: "1px solid #e5e7eb", padding: "1rem 0" }}>
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
          <Link href="/dashboard" style={{ color: "#e11d48", textDecoration: "none", fontSize: "0.875rem" }}>
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#111827", marginBottom: "1rem" }}>
            Book a Consultation
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
            Connect with our fertility specialists for personalized guidance on your reproductive health journey.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", alignItems: "start" }}>
          {/* Main Content */}
          <div>
            {/* Doctor Selection */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
                Choose Your Doctor
              </h2>
              <div style={{ display: "grid", gap: "1rem" }}>
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor)}
                    style={{
                      backgroundColor: "white",
                      padding: "1.5rem",
                      borderRadius: "12px",
                      border: selectedDoctor.id === doctor.id ? "2px solid #e11d48" : "1px solid #e5e7eb",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      boxShadow:
                        selectedDoctor.id === doctor.id
                          ? "0 4px 12px rgba(225, 29, 72, 0.15)"
                          : "0 1px 3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <Image
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        width={80}
                        height={80}
                        style={{ borderRadius: "8px", objectFit: "cover" }}
                      />
                      <div style={{ flex: 1 }}>
                        <h3
                          style={{ fontSize: "1.125rem", fontWeight: "600", color: "#111827", marginBottom: "0.25rem" }}
                        >
                          {doctor.name}
                        </h3>
                        <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{doctor.title}</p>
                        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                          {doctor.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              style={{
                                backgroundColor: "#fef2f2",
                                color: "#e11d48",
                                padding: "0.25rem 0.5rem",
                                borderRadius: "4px",
                                fontSize: "0.75rem",
                              }}
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            fontSize: "0.875rem",
                            color: "#6b7280",
                          }}
                        >
                          <span>
                            ⭐ {doctor.rating} ({doctor.reviewCount} reviews)
                          </span>
                          <span>📅 Available {doctor.nextAvailable}</span>
                          <span>💰 {doctor.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Type */}
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
                Consultation Type
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div
                  onClick={() => setConsultationType("video")}
                  style={{
                    backgroundColor: "white",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    border: consultationType === "video" ? "2px solid #e11d48" : "1px solid #e5e7eb",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📹</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
                    Video Consultation
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Secure video call from home</p>
                </div>
                <div
                  onClick={() => setConsultationType("in-person")}
                  style={{
                    backgroundColor: "white",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    border: consultationType === "in-person" ? "2px solid #e11d48" : "1px solid #e5e7eb",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🏥</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>
                    In-Person Visit
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Visit our clinic</p>
                </div>
              </div>
            </div>

            {/* Date & Time Selection */}
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
                Select Date & Time
              </h2>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "0.875rem",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Time
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          style={{
                            padding: "0.5rem",
                            border: selectedTime === slot.time ? "2px solid #e11d48" : "1px solid #d1d5db",
                            borderRadius: "6px",
                            backgroundColor: !slot.available
                              ? "#f3f4f6"
                              : selectedTime === slot.time
                                ? "#fef2f2"
                                : "white",
                            color: !slot.available ? "#9ca3af" : selectedTime === slot.time ? "#e11d48" : "#374151",
                            cursor: slot.available ? "pointer" : "not-allowed",
                            fontSize: "0.875rem",
                          }}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div style={{ position: "sticky", top: "2rem" }}>
            <div
              style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "12px", border: "1px solid #e5e7eb" }}
            >
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
                Booking Summary
              </h3>

              <div style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <Image
                    src={selectedDoctor.image || "/placeholder.svg"}
                    alt={selectedDoctor.name}
                    width={48}
                    height={48}
                    style={{ borderRadius: "6px", objectFit: "cover" }}
                  />
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: "500", color: "#111827" }}>
                      {selectedDoctor.name}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>{selectedDoctor.title}</div>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "1rem", marginBottom: "1rem" }}>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>Type: </span>
                  <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#111827" }}>
                    {consultationType === "video" ? "Video Call" : "In-Person"}
                  </span>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>Date: </span>
                  <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#111827" }}>
                    {selectedDate || "Not selected"}
                  </span>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>Time: </span>
                  <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#111827" }}>
                    {selectedTime || "Not selected"}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>Fee: </span>
                  <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#111827" }}>
                    {selectedDoctor.price}
                  </span>
                </div>
              </div>

              <button
                onClick={handleBookAppointment}
                disabled={!selectedDate || !selectedTime || isBooking}
                style={{
                  width: "100%",
                  backgroundColor: !selectedDate || !selectedTime || isBooking ? "#d1d5db" : "#e11d48",
                  color: "white",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  cursor: !selectedDate || !selectedTime || isBooking ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                {isBooking ? (
                  <>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid white",
                        borderTop: "2px solid transparent",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                      }}
                    ></div>
                    Booking...
                  </>
                ) : (
                  "Book Appointment"
                )}
              </button>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
