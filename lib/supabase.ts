import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type BrowserSupabaseClient = ReturnType<typeof createClientComponentClient>

let supabaseClient: BrowserSupabaseClient | null = null

export const createClientInstance = () => {
  if (supabaseClient) return supabaseClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY env vars.")
  }

  supabaseClient = createClientComponentClient({
    supabaseUrl,
    supabaseKey: supabaseAnonKey,
    isSingleton: true,
  })

  return supabaseClient
}

export const checkSupabaseConfig = () => {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

export { createClientInstance as createClient }
