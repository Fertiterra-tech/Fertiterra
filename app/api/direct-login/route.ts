import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password, users } = await request.json()

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    console.log(`Login attempt for: ${email}`)
    console.log(`Received users data:`, users ? Object.keys(users) : "No users data")

    // Check against provided users data (from client-side storage)
    if (users && users[email]) {
      const user = users[email]
      if (user.password === password) {
        return NextResponse.json({
          success: true,
          message: "Login successful",
          user: {
            email: user.email,
            role: user.role,
            fullName: user.fullName,
          },
        })
      } else {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 })
      }
    }

    // Fallback to demo accounts
    const demoAccounts = {
      "admin@fertiterra.com": { password: "admin123", role: "admin", fullName: "FertiTerra Admin" },
      "demo@fertiterra.com": { password: "demo123", role: "patient", fullName: "Demo User" },
      "test@example.com": { password: "test123", role: "patient", fullName: "Test User" },
    }

    const demoAccount = demoAccounts[email as keyof typeof demoAccounts]
    if (demoAccount && demoAccount.password === password) {
      return NextResponse.json({
        success: true,
        message: "Login successful with demo account",
        user: {
          email,
          role: demoAccount.role,
          fullName: demoAccount.fullName,
        },
      })
    }

    // Account not found
    return NextResponse.json(
      {
        error: "Account not found. Please sign up first.",
        availableAccounts: Object.keys(users || {}),
        demoAccounts: Object.keys(demoAccounts),
      },
      { status: 401 },
    )
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
  }
}
