// Client-side user storage for demo purposes
// In a real app, you would use a proper database

export interface User {
  email: string
  password: string
  fullName: string
  age: number
  country: string
  phoneNumber?: string
  dateOfBirth?: string
  medicalConditions?: string[]
  currentMedications?: string
  fertilityGoals?: string
  howDidYouHear?: string
  role: "patient" | "admin" | "doctor"
  createdAt: string
  lastLogin?: string
}

export const userStorage = {
  // Get all users from localStorage
  getAllUsers(): Map<string, User> {
    if (typeof window === "undefined") return new Map()

    try {
      const stored = localStorage.getItem("fertiterra_users")
      if (stored) {
        const usersArray = JSON.parse(stored)
        return new Map(usersArray)
      }
    } catch (error) {
      console.error("Error loading users:", error)
    }

    // Return default users if nothing stored
    return new Map([
      [
        "admin@fertiterra.com",
        {
          email: "admin@fertiterra.com",
          password: "admin123",
          fullName: "FertiTerra Admin",
          age: 35,
          country: "United States",
          role: "admin" as const,
          fertilityGoals: "Platform Management",
          howDidYouHear: "Internal",
          createdAt: new Date().toISOString(),
        },
      ],
      [
        "demo@fertiterra.com",
        {
          email: "demo@fertiterra.com",
          password: "demo123",
          fullName: "Demo User",
          age: 28,
          country: "United Kingdom",
          role: "patient" as const,
          fertilityGoals: "Trying to conceive",
          howDidYouHear: "Google search",
          createdAt: new Date().toISOString(),
        },
      ],
    ])
  },

  // Save all users to localStorage
  saveAllUsers(users: Map<string, User>): void {
    if (typeof window === "undefined") return

    try {
      const usersArray = Array.from(users.entries())
      localStorage.setItem("fertiterra_users", JSON.stringify(usersArray))
      console.log("Users saved to localStorage:", usersArray.length)
    } catch (error) {
      console.error("Error saving users:", error)
    }
  },

  // Add a new user
  addUser(userData: Omit<User, "createdAt" | "role">): boolean {
    const users = this.getAllUsers()

    if (users.has(userData.email)) {
      console.log("User already exists:", userData.email)
      return false
    }

    const newUser: User = {
      ...userData,
      role: "patient", // Default role for new signups
      createdAt: new Date().toISOString(),
    }

    users.set(userData.email, newUser)
    this.saveAllUsers(users)

    console.log("User added successfully:", userData.email)
    console.log("Total users:", users.size)
    return true
  },

  // Get a specific user
  getUser(email: string): User | undefined {
    const users = this.getAllUsers()
    return users.get(email)
  },

  // Check if user exists
  hasUser(email: string): boolean {
    const users = this.getAllUsers()
    return users.has(email)
  },

  // Check if user is admin
  isAdmin(email: string): boolean {
    const user = this.getUser(email)
    return user?.role === "admin"
  },

  // List all user emails
  listUsers(): string[] {
    const users = this.getAllUsers()
    return Array.from(users.keys())
  },

  // Get user count
  getUserCount(): number {
    const users = this.getAllUsers()
    return users.size
  },

  // Get users by role
  getUsersByRole(role: "patient" | "admin" | "doctor"): User[] {
    const users = this.getAllUsers()
    return Array.from(users.values()).filter((user) => user.role === role)
  },

  // Update last login
  updateLastLogin(email: string): void {
    const users = this.getAllUsers()
    const user = users.get(email)
    if (user) {
      user.lastLogin = new Date().toISOString()
      users.set(email, user)
      this.saveAllUsers(users)
    }
  },
}
