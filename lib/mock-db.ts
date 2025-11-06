// Mock database for storing users between API calls
// In a real app, you would use a proper database

// This is a simple in-memory store that persists during the server's lifetime
export const mockDB = {
  users: new Map<string, any>([
    // Add some demo users
    ["demo@fertiterra.com", { email: "demo@fertiterra.com", password: "demo123" }],
    ["test@example.com", { email: "test@example.com", password: "test123" }],
  ]),

  // Add a user to the database
  addUser(email: string, password: string) {
    this.users.set(email, {
      email,
      password,
      createdAt: new Date().toISOString(),
    })
    console.log(`User added: ${email}`)
    console.log(`Total users: ${this.users.size}`)
    return true
  },

  // Check if a user exists
  hasUser(email: string) {
    return this.users.has(email)
  },

  // Get a user by email
  getUser(email: string) {
    return this.users.get(email)
  },

  // List all users (for debugging)
  listUsers() {
    return Array.from(this.users.keys())
  },
}
