import { createClient } from "@supabase/supabase-js"

/**
 * Lightweight helper that **only** runs outside of the browser.
 * In next-lite this will still bundle, but uses the browser-safe SDK.
 */
export const createServerClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY env vars.")
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}
