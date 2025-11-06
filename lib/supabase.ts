import { createClient, type SupabaseClient } from "@supabase/supabase-js"

/**
 * Singleton browser/client Supabase instance.
 * Works in next-lite because it relies only on
 * standard browser APIs (fetch, crypto, …).
 */
let supabaseClient: SupabaseClient | null = null

export const createClientInstance = () => {
  if (supabaseClient) return supabaseClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY env vars.")
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  })

  return supabaseClient
}

export const checkSupabaseConfig = () => {
  try {
    createClientInstance()
    return true
  } catch {
    return false
  }
}

// Alias so other modules can `import { createClient } from "@/lib/supabase"`
export { createClientInstance as createClient }
