import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({
        success: false,
        error: "Email and password are required",
      })
    }

    if (password.length < 6) {
      return NextResponse.json({
        success: false,
        error: "Password must be at least 6 characters",
      })
    }

    // Try Supabase signup
    try {
      const { createClient } = await import("@supabase/supabase-js")

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseKey) {
        return NextResponse.json({
          success: false,
          error: "Server configuration error. Please contact support.",
        })
      }

      const supabase = createClient(supabaseUrl, supabaseKey)

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/confirm`,
        },
      })

      if (error) {
        return NextResponse.json({
          success: false,
          error: error.message,
        })
      }

      return NextResponse.json({
        success: true,
        message: "Account created successfully! Please check your email for confirmation.",
        needsConfirmation: !data.user?.email_confirmed_at,
      })
    } catch (supabaseError) {
      console.error("Supabase error:", supabaseError)
      return NextResponse.json({
        success: false,
        error: "Authentication service unavailable. Please try again later.",
      })
    }
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({
      success: false,
      error: "Server error. Please try again.",
    })
  }
}
