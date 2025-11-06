"use server"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Types for fertility tracking
export type FertilityCycle = {
  id: string
  user_id: string
  cycle_start_date: string
  cycle_end_date: string | null
  notes: string | null
  created_at: string
  updated_at: string
}

export type FertilityLog = {
  id: string
  user_id: string
  log_date: string
  cycle_id: string | null
  basal_temperature: number | null
  cervical_fluid: "dry" | "sticky" | "creamy" | "watery" | "egg white" | "unknown" | null
  cervical_position: "low" | "medium" | "high" | "unknown" | null
  cervical_firmness: "firm" | "medium" | "soft" | "unknown" | null
  cervical_openness: "closed" | "medium" | "open" | "unknown" | null
  lh_test_result: "negative" | "positive" | "not_tested" | null
  hcg_test_result: "negative" | "positive" | "not_tested" | null
  intercourse: boolean
  protected_intercourse: boolean
  menstruation_flow: "none" | "spotting" | "light" | "medium" | "heavy" | null
  notes: string | null
  created_at: string
  updated_at: string
  symptoms?: FertilitySymptom[]
  medications?: FertilityMedication[]
}

export type FertilitySymptom = {
  id: string
  log_id: string
  symptom: string
  intensity: number
  created_at: string
  updated_at: string
}

export type FertilityMedication = {
  id: string
  log_id: string
  medication_name: string
  dosage: string | null
  taken_at: string | null
  created_at: string
  updated_at: string
}

// Get current user or redirect to login
async function getCurrentUser() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  return session.user
}

// Get all cycles for the current user
export async function getCycles() {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("fertility_cycles")
    .select("*")
    .eq("user_id", user.id)
    .order("cycle_start_date", { ascending: false })

  if (error) {
    console.error("Error fetching cycles:", error)
    return []
  }

  return data as FertilityCycle[]
}

// Get a specific cycle by ID
export async function getCycleById(cycleId: string) {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("fertility_cycles")
    .select("*")
    .eq("id", cycleId)
    .eq("user_id", user.id)
    .single()

  if (error) {
    console.error("Error fetching cycle:", error)
    return null
  }

  return data as FertilityCycle
}

// Create a new cycle
export async function createCycle(cycleData: {
  cycle_start_date: string
  cycle_end_date?: string
  notes?: string
}) {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("fertility_cycles")
    .insert({
      user_id: user.id,
      cycle_start_date: cycleData.cycle_start_date,
      cycle_end_date: cycleData.cycle_end_date || null,
      notes: cycleData.notes || null,
    })
    .select()

  if (error) {
    console.error("Error creating cycle:", error)
    return { error: error.message }
  }

  return { data: data[0] as FertilityCycle }
}

// Update an existing cycle
export async function updateCycle(
  cycleId: string,
  cycleData: {
    cycle_start_date?: string
    cycle_end_date?: string | null
    notes?: string | null
  },
) {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("fertility_cycles")
    .update({
      ...cycleData,
      updated_at: new Date().toISOString(),
    })
    .eq("id", cycleId)
    .eq("user_id", user.id)
    .select()

  if (error) {
    console.error("Error updating cycle:", error)
    return { error: error.message }
  }

  return { data: data[0] as FertilityCycle }
}

// Delete a cycle
export async function deleteCycle(cycleId: string) {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  const { error } = await supabase.from("fertility_cycles").delete().eq("id", cycleId).eq("user_id", user.id)

  if (error) {
    console.error("Error deleting cycle:", error)
    return { error: error.message }
  }

  return { success: true }
}

// Get logs for a specific date range
export async function getLogs(startDate: string, endDate: string) {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("fertility_logs")
    .select(`
      *,
      fertility_symptoms (*),
      fertility_medications (*)
    `)
    .eq("user_id", user.id)
    .gte("log_date", startDate)
    .lte("log_date", endDate)
    .order("log_date", { ascending: false })

  if (error) {
    console.error("Error fetching logs:", error)
    return []
  }

  return data as FertilityLog[]
}

// Get a log for a specific date
export async function getLogByDate(date: string) {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("fertility_logs")
    .select(`
      *,
      fertility_symptoms (*),
      fertility_medications (*)
    `)
    .eq("user_id", user.id)
    .eq("log_date", date)
    .single()

  if (error && error.code !== "PGRST116") {
    // PGRST116 is the error code for no rows returned
    console.error("Error fetching log:", error)
    return null
  }

  return data as FertilityLog | null
}

// Create or update a log for a specific date
export async function saveLog(date: string, logData: Partial<FertilityLog>) {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  // Check if a log already exists for this date
  const existingLog = await getLogByDate(date)

  if (existingLog) {
    // Update existing log
    const { data, error } = await supabase
      .from("fertility_logs")
      .update({
        ...logData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", existingLog.id)
      .eq("user_id", user.id)
      .select()

    if (error) {
      console.error("Error updating log:", error)
      return { error: error.message }
    }

    return { data: data[0] as FertilityLog, id: existingLog.id }
  } else {
    // Create new log
    const { data, error } = await supabase
      .from("fertility_logs")
      .insert({
        user_id: user.id,
        log_date: date,
        ...logData,
      })
      .select()

    if (error) {
      console.error("Error creating log:", error)
      return { error: error.message }
    }

    return { data: data[0] as FertilityLog, id: data[0].id }
  }
}

// Add a symptom to a log
export async function addSymptom(logId: string, symptom: string, intensity: number) {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("fertility_symptoms")
    .insert({
      log_id: logId,
      symptom,
      intensity,
    })
    .select()

  if (error) {
    console.error("Error adding symptom:", error)
    return { error: error.message }
  }

  return { data: data[0] as FertilitySymptom }
}

// Remove a symptom from a log
export async function removeSymptom(symptomId: string) {
  const supabase = createServerComponentClient({ cookies })

  const { error } = await supabase.from("fertility_symptoms").delete().eq("id", symptomId)

  if (error) {
    console.error("Error removing symptom:", error)
    return { error: error.message }
  }

  return { success: true }
}

// Add a medication to a log
export async function addMedication(
  logId: string,
  medicationData: {
    medication_name: string
    dosage?: string
    taken_at?: string
  },
) {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase
    .from("fertility_medications")
    .insert({
      log_id: logId,
      medication_name: medicationData.medication_name,
      dosage: medicationData.dosage || null,
      taken_at: medicationData.taken_at || null,
    })
    .select()

  if (error) {
    console.error("Error adding medication:", error)
    return { error: error.message }
  }

  return { data: data[0] as FertilityMedication }
}

// Remove a medication from a log
export async function removeMedication(medicationId: string) {
  const supabase = createServerComponentClient({ cookies })

  const { error } = await supabase.from("fertility_medications").delete().eq("id", medicationId)

  if (error) {
    console.error("Error removing medication:", error)
    return { error: error.message }
  }

  return { success: true }
}

// Get fertility insights based on logged data
export async function getFertilityInsights() {
  const user = await getCurrentUser()
  const supabase = createServerComponentClient({ cookies })

  // Get the last 3 completed cycles
  const { data: cycles, error: cyclesError } = await supabase
    .from("fertility_cycles")
    .select("*")
    .eq("user_id", user.id)
    .not("cycle_end_date", "is", null)
    .order("cycle_start_date", { ascending: false })
    .limit(3)

  if (cyclesError) {
    console.error("Error fetching cycles for insights:", cyclesError)
    return { error: cyclesError.message }
  }

  if (!cycles || cycles.length === 0) {
    return {
      insights: {
        averageCycleLength: null,
        cycleRegularity: null,
        estimatedFertileWindow: null,
        estimatedNextPeriod: null,
      },
    }
  }

  // Calculate average cycle length
  let totalDays = 0
  const cycleLengths: number[] = []

  cycles.forEach((cycle) => {
    if (cycle.cycle_start_date && cycle.cycle_end_date) {
      const start = new Date(cycle.cycle_start_date)
      const end = new Date(cycle.cycle_end_date)
      const days = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      totalDays += days
      cycleLengths.push(days)
    }
  })

  const averageCycleLength = cycles.length > 0 ? Math.round(totalDays / cycles.length) : null

  // Calculate cycle regularity (standard deviation)
  let cycleRegularity = null
  if (cycleLengths.length > 1) {
    const mean = averageCycleLength || 0
    const squaredDiffs = cycleLengths.map((length) => Math.pow(length - mean, 2))
    const variance = squaredDiffs.reduce((sum, diff) => sum + diff, 0) / cycleLengths.length
    cycleRegularity = Math.round(Math.sqrt(variance) * 10) / 10
  }

  // Estimate fertile window and next period
  let estimatedFertileWindow = null
  let estimatedNextPeriod = null

  if (averageCycleLength && cycles[0].cycle_start_date) {
    const lastCycleStart = new Date(cycles[0].cycle_start_date)

    // Estimate next period
    const nextPeriodDate = new Date(lastCycleStart)
    nextPeriodDate.setDate(nextPeriodDate.getDate() + averageCycleLength)
    estimatedNextPeriod = nextPeriodDate.toISOString().split("T")[0]

    // Estimate fertile window (typically days 11-17 of a 28-day cycle, adjusted for actual cycle length)
    const fertileStartDay = Math.max(Math.round(averageCycleLength * 0.39), 8) // At least 8 days after period starts
    const fertileEndDay = Math.min(Math.round(averageCycleLength * 0.61), averageCycleLength - 10) // At least 10 days before next period

    const fertileStartDate = new Date(lastCycleStart)
    fertileStartDate.setDate(fertileStartDate.getDate() + fertileStartDay)

    const fertileEndDate = new Date(lastCycleStart)
    fertileEndDate.setDate(fertileEndDate.getDate() + fertileEndDay)

    estimatedFertileWindow = {
      start: fertileStartDate.toISOString().split("T")[0],
      end: fertileEndDate.toISOString().split("T")[0],
    }
  }

  return {
    insights: {
      averageCycleLength,
      cycleRegularity,
      estimatedFertileWindow,
      estimatedNextPeriod,
    },
  }
}
