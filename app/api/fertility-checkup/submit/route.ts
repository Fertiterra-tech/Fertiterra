import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    {
      error:
        "Secure questionnaire storage is unavailable. Your health information was not saved or sent. Please contact support or try again later.",
    },
    { status: 503 },
  )
}
