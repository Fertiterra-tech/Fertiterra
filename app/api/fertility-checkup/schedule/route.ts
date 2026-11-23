import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { error: "Online scheduling is unavailable. No appointment was created." },
    { status: 503 },
  )
}
