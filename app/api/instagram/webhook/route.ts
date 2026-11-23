import { NextResponse } from "next/server"

const unavailable = () =>
  NextResponse.json(
    { error: "Instagram messaging is unavailable until webhook signature verification is configured." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  )

export async function GET() {
  return unavailable()
}

export async function POST() {
  return unavailable()
}
