import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { reference } = await request.json()

    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || "sk_test_your_secret_key"

    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    })

    const data = await response.json()

    if (data.status && data.data.status === "success") {
      // Payment successful - notify FertiTerra team
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/send-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "fertiterratechnologies@africanimpactinitiative.com",
          type: "payment_confirmed",
          subject: "💳 PAYSTACK PAYMENT CONFIRMED - $5.00 - Basic Fertility Checkup",
          message: `✅ PAYMENT SUCCESSFULLY RECEIVED VIA PAYSTACK

Payment Details:
- Amount: $${(data.data.amount / 100).toFixed(2)} USD
- Reference: ${data.data.reference}
- Customer Email: ${data.data.customer.email}
- Payment Date: ${new Date(data.data.paid_at).toLocaleString()}
- Gateway Response: ${data.data.gateway_response}
- Channel: ${data.data.channel}

✅ PAYMENT CONFIRMED - READY TO SCHEDULE CONSULTATION

Next Steps:
1. Customer will schedule consultation
2. Prepare for 15-minute consultation session
3. Review customer questionnaire responses
4. Send consultation link 30 minutes before appointment`,
        }),
      })

      return NextResponse.json({
        success: true,
        data: data.data,
        message: "Payment verified successfully",
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Payment verification error:", error)
    return NextResponse.json(
      {
        error: "Payment verification failed",
        message: "Please contact support",
      },
      { status: 500 },
    )
  }
}
