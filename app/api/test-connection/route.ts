import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Test basic functionality
    const envVars = {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    }

    // Check if required environment variables exist
    if (!envVars.supabaseUrl || !envVars.supabaseKey) {
      return NextResponse.json({
        success: false,
        error: "Missing required environment variables",
        details: envVars,
      })
    }

    // Try to create a simple Supabase client
    try {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(envVars.supabaseUrl, envVars.supabaseKey)

      // Test a simple query
      const { data, error } = await supabase.from("users").select("count").limit(1)

      if (error && !error.message.includes("relation") && !error.message.includes("does not exist")) {
        return NextResponse.json({
          success: false,
          error: `Supabase error: ${error.message}`,
        })
      }

      return NextResponse.json({
        success: true,
        message: "Connection successful",
        envVars: {
          supabaseUrl: envVars.supabaseUrl ? "Set" : "Missing",
          supabaseKey: envVars.supabaseKey ? "Set" : "Missing",
          siteUrl: envVars.siteUrl ? "Set" : "Missing",
        },
      })
    } catch (supabaseError) {
      return NextResponse.json({
        success: false,
        error: `Supabase import error: ${supabaseError instanceof Error ? supabaseError.message : "Unknown"}`,
      })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: `Server error: ${error instanceof Error ? error.message : "Unknown error"}`,
    })
  }
}
