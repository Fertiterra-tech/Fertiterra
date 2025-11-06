import { NextResponse } from "next/server"

// This would be your actual Paystack integration
export async function POST(request: Request) {
  try {
    const { email, amount, reference, metadata } = await request.json()

    // In production, use your actual Paystack secret key
    const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || "sk_test_your_secret_key"

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack expects amount in kobo (cents)
        reference,
        metadata,
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/plans/basic-fertility-checkup/payment-success`,
      }),
    })

    const data = await response.json()

    if (data.status) {
      return NextResponse.json({
        success: true,
        authorization_url: data.data.authorization_url,
        access_code: data.data.access_code,
        reference: data.data.reference,
      })
    } else {
      throw new Error(data.message || "Payment initialization failed")
    }
  } catch (error) {
    console.error("Paystack initialization error:", error)
    return NextResponse.json(
      {
        error: "Payment initialization failed",
        message: "Please try again or contact support",
      },
      { status: 500 },
    )
  }
}
