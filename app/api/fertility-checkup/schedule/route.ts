import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { date, time, consultationType } = await request.json()

    // Generate consultation ID
    const consultationId = `consult_${Date.now()}`
    const appointmentDateTime = `${date} at ${time}`

    // Send notification to FertiTerra team
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "fertiterratechnologies@africanimpactinitiative.com",
          type: "consultation_scheduled",
          subject: "New Consultation Scheduled - Basic Fertility Checkup",
          message: `New consultation scheduled for ${appointmentDateTime}

Consultation Details:
- Service: ${consultationType}
- Date & Time: ${appointmentDateTime}
- Consultation ID: ${consultationId}
- Duration: 15 minutes
- Type: Video consultation

Preparation Required:
- Review customer questionnaire responses
- Prepare personalized fertility assessment
- Set up video call room
- Prepare written recommendations template

Customer will receive video call link 30 minutes before appointment.`,
        }),
      })
    } catch (emailError) {
      console.error("Failed to send scheduling notification:", emailError)
    }

    // In a real app, you would:
    // 1. Save to database
    // 2. Send calendar invites
    // 3. Set up video call room
    // 4. Send confirmation emails to customer

    console.log("Consultation Scheduled:", {
      consultationId,
      date,
      time,
      consultationType,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      consultationId,
      appointmentDateTime,
      message: "Consultation scheduled successfully",
      nextSteps: [
        "Confirmation email sent",
        "Calendar invite will be sent 24 hours before",
        "Video call link will be provided 30 minutes before appointment",
        "Written summary will be sent after consultation",
      ],
    })
  } catch (error) {
    console.error("Error scheduling consultation:", error)
    return NextResponse.json(
      {
        error: "Failed to schedule consultation",
        message: "Please try again or contact support",
      },
      { status: 500 },
    )
  }
}
