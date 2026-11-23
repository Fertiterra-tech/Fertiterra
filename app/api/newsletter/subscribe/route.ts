import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { error: "Newsletter signup is temporarily unavailable. Your email was not subscribed." },
    { status: 503 },
  )
}
