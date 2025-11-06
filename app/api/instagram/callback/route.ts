import { type NextRequest, NextResponse } from "next/server"

const INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET
const REDIRECT_URI = process.env.NEXT_PUBLIC_APP_URL + "/api/instagram/callback"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const error = searchParams.get("error")

  if (error) {
    return NextResponse.redirect("/instagram-admin?error=" + error)
  }

  if (!code) {
    return NextResponse.redirect("/instagram-admin?error=no_code")
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://api.instagram.com/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: INSTAGRAM_APP_ID!,
        client_secret: INSTAGRAM_APP_SECRET!,
        grant_type: "authorization_code",
        redirect_uri: REDIRECT_URI,
        code: code,
      }),
    })

    const tokenData = await tokenResponse.json()

    if (tokenData.access_token) {
      // Store the access token securely (in a real app, use a database)
      console.log("Instagram access token received:", tokenData.access_token)

      return NextResponse.redirect("/instagram-admin?success=connected")
    } else {
      return NextResponse.redirect("/instagram-admin?error=token_exchange_failed")
    }
  } catch (error) {
    console.error("Instagram OAuth error:", error)
    return NextResponse.redirect("/instagram-admin?error=oauth_failed")
  }
}
