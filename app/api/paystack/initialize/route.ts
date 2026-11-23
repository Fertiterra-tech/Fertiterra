import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    {
      error:
        "Secure payment records are unavailable. No payment was started. Contact support if you need help with this service.",
    },
    { status: 503 },
  )
}
