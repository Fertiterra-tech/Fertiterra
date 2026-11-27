import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const firstName = String(body.firstName || "").trim()
    const lastName = String(body.lastName || "").trim()
    const email = String(body.email || "").trim().toLowerCase()
    const phone = String(body.phone || "").trim()

    if (!firstName || !lastName) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 })
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!url || (!serviceKey && !anonKey)) {
      return NextResponse.json({ error: "Storage is not configured" }, { status: 500 })
    }

    // With the service role key we can safely update an existing row for the
    // same email. With the anon key we only ever insert, because letting a
    // browser update rows by email would let one visitor overwrite another
    // person's medical answers.
    const privileged = Boolean(serviceKey)
    const supabase = createClient(url, (serviceKey || anonKey) as string, {
      auth: { persistSession: false },
    })

    const answers = body.answers && typeof body.answers === "object" ? body.answers : {}
    const goal = Array.isArray(answers.goal) ? answers.goal.join(", ") : String(answers.goal || "")

    const row = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || null,
      goal: goal || null,
      answers,
      marketing_opt_in: Boolean(body.marketingOptIn),
      research_opt_in: Array.isArray(answers.consent)
        ? answers.consent.includes("You may store my anonymised data for research")
        : false,
      status: "submitted",
      source: "screening",
    }

    if (privileged) {
      const { data, error } = await supabase
        .from("assessments")
        .upsert(row, { onConflict: "email" })
        .select("id")
        .single()

      if (error) {
        console.error("assessment save failed", error)
        return NextResponse.json({ error: "We could not save your answers. Please try again." }, { status: 500 })
      }
      return NextResponse.json({ id: data?.id ?? null, ok: true })
    }

    const { error } = await supabase.from("assessments").insert(row)

    if (error) {
      console.error("assessment save failed", error)
      return NextResponse.json({ error: "We could not save your answers. Please try again." }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("assessment route error", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
