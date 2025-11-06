import { type NextRequest, NextResponse } from "next/server"

const INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET
const REDIRECT_URI = process.env.NEXT_PUBLIC_APP_URL + "/api/instagram/callback"

export async function GET(request: NextRequest) {
  if (!INSTAGRAM_APP_ID) {
    return NextResponse.json({ error: "Instagram App ID not configured" }, { status: 500 })
  }

  // Redirect to Instagram OAuth
  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=user_profile,user_media&response_type=code`

  return NextResponse.redirect(authUrl)
}
