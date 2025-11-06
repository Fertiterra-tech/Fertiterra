"use server"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Types for user management
export type UserRole = "admin" | "doctor" | "patient" | "support"

export type UserProfile = {
  id: string
  email: string
  full_name: string | null
  role: UserRole
  status: "active" | "inactive" | "suspended"
  created_at: string
  updated_at: string
  last_login: string | null
  phone: string | null
  date_of_birth: string | null
  specialization?: string | null // For doctors
  license_number?: string | null // For doctors
}

export type CreateUserData = {
  email: string
  password: string
  full_name: string
  role: UserRole
  phone?: string
  date_of_birth?: string
  specialization?: string // For doctors
  license_number?: string // For doctors
}

// Check if current user is admin
async function checkAdminAccess() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  // Get user profile to check role
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single()

  if (!profile || profile.role !== "admin") {
    redirect("/dashboard")
  }

  return session.user
}

// Get all users with pagination
export async function getUsers(page = 1, limit = 10, search?: string) {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  let query = supabase.from("profiles").select("*", { count: "exact" }).order("created_at", { ascending: false })

  if (search) {
    query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%`)
  }

  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error, count } = await query.range(from, to)

  if (error) {
    console.error("Error fetching users:", error)
    return { users: [], total: 0, error: error.message }
  }

  return {
    users: data as UserProfile[],
    total: count || 0,
    error: null,
  }
}

// Get user by ID
export async function getUserById(userId: string) {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

  if (error) {
    console.error("Error fetching user:", error)
    return { user: null, error: error.message }
  }

  return { user: data as UserProfile, error: null }
}

// Create new user
export async function createUser(userData: CreateUserData) {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  try {
    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: userData.email,
      password: userData.password,
      email_confirm: true,
    })

    if (authError) {
      console.error("Auth error:", authError)
      return { error: authError.message, user: null }
    }

    if (!authData.user) {
      return { error: "Failed to create user", user: null }
    }

    // Create profile
    const profileData = {
      id: authData.user.id,
      email: userData.email,
      full_name: userData.full_name,
      role: userData.role,
      status: "active" as const,
      phone: userData.phone || null,
      date_of_birth: userData.date_of_birth || null,
      specialization: userData.specialization || null,
      license_number: userData.license_number || null,
    }

    const { data: profile, error: profileError } = await supabase.from("profiles").insert(profileData).select().single()

    if (profileError) {
      console.error("Profile error:", profileError)
      // Try to clean up the auth user if profile creation failed
      await supabase.auth.admin.deleteUser(authData.user.id)
      return { error: profileError.message, user: null }
    }

    return { error: null, user: profile as UserProfile }
  } catch (error) {
    console.error("Unexpected error creating user:", error)
    return { error: "An unexpected error occurred", user: null }
  }
}

// Update user role
export async function updateUserRole(userId: string, newRole: UserRole) {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("profiles")
    .update({
      role: newRole,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .select()
    .single()

  if (error) {
    console.error("Error updating user role:", error)
    return { error: error.message, user: null }
  }

  return { error: null, user: data as UserProfile }
}

// Update user status
export async function updateUserStatus(userId: string, status: "active" | "inactive" | "suspended") {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("profiles")
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .select()
    .single()

  if (error) {
    console.error("Error updating user status:", error)
    return { error: error.message, user: null }
  }

  return { error: null, user: data as UserProfile }
}

// Update user profile
export async function updateUserProfile(userId: string, updates: Partial<UserProfile>) {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("profiles")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .select()
    .single()

  if (error) {
    console.error("Error updating user profile:", error)
    return { error: error.message, user: null }
  }

  return { error: null, user: data as UserProfile }
}

// Delete user
export async function deleteUser(userId: string) {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  // Delete profile first
  const { error: profileError } = await supabase.from("profiles").delete().eq("id", userId)

  if (profileError) {
    console.error("Error deleting profile:", profileError)
    return { error: profileError.message }
  }

  // Delete auth user
  const { error: authError } = await supabase.auth.admin.deleteUser(userId)

  if (authError) {
    console.error("Error deleting auth user:", authError)
    return { error: authError.message }
  }

  return { error: null }
}

// Send invitation email
export async function sendUserInvitation(email: string, role: UserRole) {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  try {
    // Generate invitation token (in a real app, you'd store this in a database)
    const invitationToken = Math.random().toString(36).substring(2, 15)

    // In a real application, you would:
    // 1. Store the invitation in a database with expiration
    // 2. Send an email with the invitation link
    // 3. Handle the invitation acceptance flow

    console.log(`Invitation sent to ${email} for role ${role} with token ${invitationToken}`)

    return { error: null, token: invitationToken }
  } catch (error) {
    console.error("Error sending invitation:", error)
    return { error: "Failed to send invitation" }
  }
}

// Get user statistics
export async function getUserStatistics() {
  await checkAdminAccess()
  const supabase = createServerComponentClient({ cookies })

  const { data: stats, error } = await supabase.rpc("get_user_statistics")

  if (error) {
    console.error("Error fetching user statistics:", error)
    // Return default stats if RPC fails
    return {
      total_users: 0,
      active_users: 0,
      doctors: 0,
      patients: 0,
      admins: 0,
      new_this_week: 0,
    }
  }

  return stats
}
