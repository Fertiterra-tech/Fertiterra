import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ error: "Automatic environment setup is disabled." }, { status: 410 })
}
