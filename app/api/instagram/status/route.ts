import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(
    { connected: false, error: "Instagram is not connected to a secure message store." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  )
}
