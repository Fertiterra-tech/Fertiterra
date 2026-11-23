import { NextResponse } from "next/server"

const EXPECTED_AMOUNT = 500
const EXPECTED_CURRENCY = "USD"
const REFERENCE_PATTERN = /^fertility_[a-f0-9-]{36}$/i

interface PaystackVerificationResponse {
  status?: boolean
  data?: {
    amount?: number
    currency?: string
    metadata?: { service?: string }
    paid_at?: string
    reference?: string
    status?: string
  }
}

export async function GET(request: Request) {
  const reference = new URL(request.url).searchParams.get("reference") ?? ""
  const secretKey = process.env.PAYSTACK_SECRET_KEY

  if (!REFERENCE_PATTERN.test(reference)) {
    return NextResponse.json({ success: false, error: "Invalid payment reference." }, { status: 400 })
  }

  if (!secretKey) {
    return NextResponse.json({ success: false, error: "Payment verification is unavailable." }, { status: 503 })
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: { Authorization: `Bearer ${secretKey}` },
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      },
    )
    const result = (await response.json()) as PaystackVerificationResponse
    const transaction = result.data
    if (!transaction) {
      return NextResponse.json({ success: false, error: "Payment is not confirmed." }, { status: 409 })
    }

    const verified =
      response.ok &&
      result.status === true &&
      transaction.status === "success" &&
      transaction.reference === reference &&
      transaction.amount === EXPECTED_AMOUNT &&
      transaction.currency === EXPECTED_CURRENCY &&
      transaction.metadata?.service === "basic-fertility-checkup"

    if (!verified) {
      return NextResponse.json({ success: false, error: "Payment is not confirmed." }, { status: 409 })
    }

    return NextResponse.json(
      {
        success: true,
        payment: {
          reference: transaction.reference,
          amount: transaction.amount,
          currency: transaction.currency,
          paidAt: transaction.paid_at ?? null,
        },
      },
      { headers: { "Cache-Control": "no-store, private" } },
    )
  } catch {
    return NextResponse.json({ success: false, error: "Payment verification is unavailable." }, { status: 503 })
  }
}
