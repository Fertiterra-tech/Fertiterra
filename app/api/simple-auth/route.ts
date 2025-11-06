import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, email, password } = body

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          error: "Email and password are required",
        },
        { status: 400 },
      )
    }

    if (action === "signup") {
      if (password.length < 6) {
        return NextResponse.json(
          {
            success: false,
            error: "Password must be at least 6 characters",
          },
          { status: 400 },
        )
      }

      // Try to connect to Supabase
      try {
        // Dynamic import to avoid build issues
        const { createClient } = await import("@supabase/supabase-js")

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
          console.error("Missing Supabase environment variables")
          return NextResponse.json(
            {
              success: false,
              error: "Server configuration error. Please check environment variables.",
            },
            { status: 500 },
          )
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
          console.error("Supabase signup error:", error)
          return NextResponse.json(
            {
              success: false,
              error: error.message,
            },
            { status: 400 },
          )
        }

        return NextResponse.json({
          success: true,
          message: "Account created successfully! Please check your email for confirmation.",
          needsConfirmation: !data.user?.email_confirmed_at,
        })
      } catch (supabaseError) {
        console.error("Supabase connection error:", supabaseError)
        return NextResponse.json(
          {
            success: false,
            error: "Authentication service temporarily unavailable. Please try again later.",
          },
          { status: 503 },
        )
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: "Invalid action",
      },
      { status: 400 },
    )
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Server error occurred",
      },
      { status: 500 },
    )
  }
}
