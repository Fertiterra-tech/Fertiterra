import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({ error: "Email delivery is not configured. No email was sent." }, { status: 503 })
}
