"use server"

import { createServerClient } from "@/lib/supabase-server"
import { redirect } from "next/navigation"

export async function signUpAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return {
      error: "Email and password are required",
      success: false,
    }
  }

  if (password.length < 6) {
    return {
      error: "Password must be at least 6 characters",
      success: false,
    }
  }

  try {
    const supabase = createServerClient()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/confirm`,
      },
    })

    if (error) {
      return {
        error: error.message,
        success: false,
      }
    }

    return {
      success: true,
      needsConfirmation: !data.user?.email_confirmed_at,
      email: email,
    }
  } catch (error) {
    console.error("Signup error:", error)
    return {
      error: "An unexpected error occurred. Please try again.",
      success: false,
    }
  }
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return {
      error: "Email and password are required",
      success: false,
    }
  }

  try {
    const supabase = createServerClient()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return {
        error: error.message,
        success: false,
      }
    }

    if (data.user && !data.user.email_confirmed_at) {
      return {
        error: "Please confirm your email address before signing in.",
        success: false,
      }
    }

    redirect("/dashboard")
  } catch (error) {
    console.error("Sign in error:", error)
    return {
      error: "An unexpected error occurred. Please try again.",
      success: false,
    }
  }
}
