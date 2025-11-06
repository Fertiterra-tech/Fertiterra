"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { User, Session } from "@supabase/supabase-js"
import { createClientInstance as createClient } from "@/lib/supabase"

type UserRole = "admin" | "doctor" | "patient" | "support"

type UserProfile = {
  id: string
  email: string
  full_name: string | null
  role: UserRole
  status: "active" | "inactive" | "suspended"
  created_at: string
  updated_at: string
}

type AuthContextType = {
  user: User | null
  profile: UserProfile | null
  session: Session | null
  isLoading: boolean
  isAdmin: boolean
  isEmailConfirmed: boolean
  signUp: (
    email: string,
    password: string,
  ) => Promise<{ error: any | null; success: boolean; needsConfirmation?: boolean }>
  signIn: (email: string, password: string) => Promise<{ error: any | null; success: boolean }>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
  resendConfirmation: (email: string) => Promise<{ error: any | null; success: boolean }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  const isAdmin = profile?.role === "admin"
  const isEmailConfirmed = user?.email_confirmed_at !== null

  useEffect(() => {
    const getSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
        setIsLoading(false)
      } catch (error) {
        console.error("Error getting session:", error)
        setIsLoading(false)
      }
    }

    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        return { error, success: false }
      }

      return { error: null, success: true, needsConfirmation: !data.user?.email_confirmed_at }
    } catch (error) {
      return { error: { message: "Network error. Please try again." }, success: false }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { error, success: false }
      }

      if (data.user && !data.user.email_confirmed_at) {
        await supabase.auth.signOut()
        return {
          error: { message: "Please confirm your email address before signing in." },
          success: false,
        }
      }

      router.push("/dashboard")
      return { error: null, success: true }
    } catch (error) {
      return { error: { message: "Network error. Please try again." }, success: false }
    }
  }

  const resendConfirmation = async (email: string) => {
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email,
      })

      if (error) {
        return { error, success: false }
      }

      return { error: null, success: true }
    } catch (error) {
      return { error: { message: "Network error. Please try again." }, success: false }
    }
  }

  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      setProfile(null)
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const refreshProfile = async () => {
    // Placeholder for profile refresh
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        session,
        isLoading,
        isAdmin,
        isEmailConfirmed,
        signUp,
        signIn,
        signOut,
        refreshProfile,
        resendConfirmation,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
