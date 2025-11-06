import { NextResponse } from "next/server"
import { emailService } from "@/lib/email-service"

export async function POST(request: Request) {
  try {
    const { email, type } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailType = type || "welcome"

    console.log(`Testing ${emailType} email for: ${email}`)

    let success = false

    switch (emailType) {
      case "welcome":
        success = await emailService.sendWelcomeEmail(email)
        break
      case "confirmation":
        success = await emailService.sendConfirmationEmail(email)
        break
      case "appointment":
        success = await emailService.sendAppointmentConfirmation(email, "Dr. Sarah Johnson", "Tomorrow at 2:00 PM")
        break
      default:
        return NextResponse.json({ error: "Invalid email type" }, { status: 400 })
    }

    if (success) {
      return NextResponse.json({
        success: true,
        message: `${emailType} email sent successfully`,
        email,
        type: emailType,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Test email error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while sending test email",
      },
      { status: 500 },
    )
  }
}
