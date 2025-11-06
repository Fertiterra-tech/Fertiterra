import { NextResponse } from "next/server"

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  // In a real app, you'd check if the token is valid by making a test API call
  const connected = !!accessToken

  return NextResponse.json({
    connected,
    hasToken: !!accessToken,
    configured: !!(process.env.INSTAGRAM_APP_ID && process.env.INSTAGRAM_APP_SECRET),
  })
}
