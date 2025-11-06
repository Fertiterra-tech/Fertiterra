import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    // Format questionnaire data for email
    const questionnaireData = `
BASIC FERTILITY CHECKUP QUESTIONNAIRE SUBMISSION
=============================================

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone || "Not provided"}
- Age: ${formData.age}
- Location: ${formData.location || "Not provided"}

Health Information:
- Current Health Status: ${formData.healthStatus}
- Medications: ${formData.medications || "None"}
- Previous Pregnancies: ${formData.previousPregnancies || "Not specified"}
- Menstrual Cycle Regularity: ${formData.cycleRegularity || "Not specified"}
- Last Menstrual Period: ${formData.lastPeriod || "Not provided"}

Fertility Goals:
- Family Planning Timeline: ${formData.familyPlanningTimeline || "Not specified"}
- Specific Concerns: ${formData.concerns || "None mentioned"}
- Previous Fertility Treatments: ${formData.previousTreatments || "None"}

Lifestyle Factors:
- Exercise Frequency: ${formData.exerciseFrequency || "Not specified"}
- Diet Type: ${formData.dietType || "Not specified"}
- Smoking Status: ${formData.smokingStatus || "Not specified"}
- Alcohol Consumption: ${formData.alcoholConsumption || "Not specified"}
- Stress Level: ${formData.stressLevel || "Not specified"}

Additional Information:
- Partner Information: ${formData.partnerInfo || "Not provided"}
- Insurance Coverage: ${formData.insuranceCoverage || "Not specified"}
- Preferred Consultation Time: ${formData.preferredTime || "Not specified"}
- Additional Notes: ${formData.additionalNotes || "None"}

Newsletter Subscription: ${formData.subscribeNewsletter ? "Yes" : "No"}

Submission Details:
- Date: ${new Date().toLocaleString()}
- IP Address: ${request.headers.get("x-forwarded-for") || "Unknown"}
- User Agent: ${request.headers.get("user-agent") || "Unknown"}

=============================================
Next Steps:
1. Review questionnaire responses
2. Wait for payment confirmation
3. Schedule 15-minute consultation
4. Prepare personalized recommendations
`

    // Send detailed questionnaire data to FertiTerra team
    const notificationResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "fertiterratechnologies@africanimpactinitiative.com",
        type: "questionnaire_submission",
        subject: `New Fertility Checkup Questionnaire - ${formData.firstName} ${formData.lastName}`,
        message: questionnaireData,
        customerEmail: formData.email,
      }),
    })

    if (!notificationResponse.ok) {
      console.error("Failed to send questionnaire notification")
    }

    // Subscribe to newsletter if opted in
    if (formData.subscribeNewsletter) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/newsletter/subscribe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
          }),
        })
      } catch (newsletterError) {
        console.error("Newsletter subscription failed:", newsletterError)
        // Don't fail the main submission if newsletter fails
      }
    }

    // Store form data (in a real app, save to database)
    console.log("Fertility Checkup Form Submission:", {
      timestamp: new Date().toISOString(),
      customerEmail: formData.email,
      customerName: `${formData.firstName} ${formData.lastName}`,
      ...formData,
    })

    return NextResponse.json({
      success: true,
      message: "Questionnaire submitted successfully",
      nextStep: "payment",
    })
  } catch (error) {
    console.error("Error processing fertility checkup submission:", error)
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 })
  }
}
