import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { error: "This payment method is unavailable. No payment was recorded." },
    { status: 503 },
  )
}
