import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName, source = "website" } = await request.json()

    // Log subscription for tracking
    console.log("Newsletter Subscription:", {
      email,
      firstName,
      lastName,
      source,
      timestamp: new Date().toISOString(),
    })

    // Send notification to FertiTerra team
    await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "fertiterratechnologies@africanimpactinitiative.com",
        type: "newsletter_subscription",
        message: `
📧 NEW NEWSLETTER SUBSCRIPTION

Email: ${email}
Name: ${firstName} ${lastName}
Source: ${source}
Date: ${new Date().toLocaleString()}

This person has subscribed to receive updates about FertiTerra's fertility services and health insights.
        `,
      }),
    })

    // Send welcome email to subscriber
    if (email) {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          type: "newsletter_welcome",
          message: `Welcome to FertiTerra newsletter! 🌟

Thank you for subscribing to our newsletter. You'll receive:
- Latest fertility health insights
- Special offers and discounts
- Expert tips from our medical team
- Updates on new services and test kits

Your journey to better fertility health starts here!

Best regards,
The FertiTerra Team
          `,
        }),
      })
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter",
    })
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return NextResponse.json({ error: "Failed to subscribe to newsletter" }, { status: 500 })
  }
}
