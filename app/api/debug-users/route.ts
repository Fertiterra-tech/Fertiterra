import { NextResponse } from "next/server"
import { mockDB } from "@/lib/mock-db"

export async function GET() {
  try {
    // Return the list of users for debugging
    return NextResponse.json({
      userCount: mockDB.users.size,
      users: mockDB.listUsers(),
    })
  } catch (error) {
    console.error("Debug error:", error)
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
