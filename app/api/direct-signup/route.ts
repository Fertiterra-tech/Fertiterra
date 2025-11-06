import { NextResponse } from "next/server"
import { emailService } from "@/lib/email-service"

export async function POST(request: Request) {
  try {
    const { email, password, confirmPassword } = await request.json()

    // Basic validation
    if (!email || !password || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 })
    }

    console.log(`Signup attempt for: ${email}`)

    // Send welcome email
    try {
      await emailService.sendWelcomeEmail(email)
      console.log(`✅ Welcome email sent to: ${email}`)
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError)
      // Don't fail signup if email fails
    }

    // Send confirmation email
    try {
      await emailService.sendConfirmationEmail(email)
      console.log(`✅ Confirmation email sent to: ${email}`)
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError)
    }

    return NextResponse.json({
      success: true,
      message: "Account created successfully! Please check your email for confirmation and welcome messages.",
      user: { email },
      timestamp: new Date().toISOString(),
      emailsSent: true,
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "An error occurred during signup" }, { status: 500 })
  }
}
