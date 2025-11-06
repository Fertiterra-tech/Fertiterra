interface InstagramUser {
  id: string
  username: string
  name?: string
  profilePicture?: string
  lastInteraction: Date
  messageCount: number
  isActive: boolean
}

interface InstagramMessage {
  id: string
  senderId: string
  recipientId: string
  text: string
  timestamp: Date
  type: "text" | "image" | "video" | "story_reply"
  isFromUser: boolean
}

class InstagramService {
  private users: Map<string, InstagramUser> = new Map()
  private messages: InstagramMessage[] = []

  // User management
  addUser(userId: string, username: string, name?: string): InstagramUser {
    const user: InstagramUser = {
      id: userId,
      username,
      name,
      lastInteraction: new Date(),
      messageCount: 0,
      isActive: true,
    }

    this.users.set(userId, user)
    return user
  }

  getUser(userId: string): InstagramUser | undefined {
    return this.users.get(userId)
  }

  updateUserActivity(userId: string): void {
    const user = this.users.get(userId)
    if (user) {
      user.lastInteraction = new Date()
      user.messageCount += 1
    }
  }

  // Message management
  addMessage(senderId: string, recipientId: string, text: string, isFromUser = true): InstagramMessage {
    const message: InstagramMessage = {
      id: Date.now().toString(),
      senderId,
      recipientId,
      text,
      timestamp: new Date(),
      type: "text",
      isFromUser,
    }

    this.messages.push(message)
    this.updateUserActivity(isFromUser ? senderId : recipientId)

    return message
  }

  getMessagesForUser(userId: string): InstagramMessage[] {
    return this.messages
      .filter((msg) => msg.senderId === userId || msg.recipientId === userId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
  }

  getRecentMessages(limit = 10): InstagramMessage[] {
    return this.messages.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, limit)
  }

  // Analytics
  getStats() {
    const totalUsers = this.users.size
    const activeUsers = Array.from(this.users.values()).filter((user) => {
      const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
      return user.lastInteraction > dayAgo
    }).length

    const totalMessages = this.messages.length
    const userMessages = this.messages.filter((msg) => msg.isFromUser).length
    const botMessages = this.messages.filter((msg) => !msg.isFromUser).length

    const responseRate = userMessages > 0 ? (botMessages / userMessages) * 100 : 0

    return {
      totalUsers,
      activeUsers,
      totalMessages,
      userMessages,
      botMessages,
      responseRate: Math.round(responseRate * 10) / 10,
    }
  }

  // Fertility-specific features
  async handleFertilityQuery(userId: string, query: string): Promise<string> {
    const user = this.getUser(userId)
    if (!user) {
      return "I'd love to help! Please start by telling me a bit about yourself."
    }

    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes("cycle") || lowerQuery.includes("period")) {
      return this.getCycleAdvice()
    }

    if (lowerQuery.includes("ovulation") || lowerQuery.includes("fertile")) {
      return this.getOvulationInfo()
    }

    if (lowerQuery.includes("symptoms")) {
      return this.getSymptomGuidance()
    }

    if (lowerQuery.includes("test") || lowerQuery.includes("kit")) {
      return this.getTestingInfo()
    }

    return this.getGeneralFertilityInfo()
  }

  private getCycleAdvice(): string {
    return `🌸 Understanding your cycle is key to fertility awareness! Here's what I can help you track:

📅 Cycle length (typically 21-35 days)
🩸 Period duration and flow
🌡️ Basal body temperature
💧 Cervical mucus changes

Would you like me to help you start tracking any of these?`
  }

  private getOvulationInfo(): string {
    return `🥚 Ovulation is when your ovary releases an egg! Here are the key signs:

🌡️ Slight temperature rise (0.5-1°F)
💧 Clear, stretchy cervical mucus
📈 LH surge (detectable with ovulation tests)
💭 Mild pelvic pain on one side

Your fertile window is about 6 days: 5 days before ovulation + ovulation day.

Need help calculating your fertile window?`
  }

  private getSymptomGuidance(): string {
    return `💭 Tracking symptoms helps you understand your unique cycle patterns:

🔴 Menstrual phase: Cramping, fatigue, mood changes
🌱 Follicular phase: Energy increase, clearer skin
🥚 Ovulation: Mild cramping, increased libido
🌙 Luteal phase: Breast tenderness, mood swings, bloating

What symptoms would you like to track?`
  }

  private getTestingInfo(): string {
    return `🧪 FertiTerra offers comprehensive fertility testing:

🏠 At-home hormone testing kits
📊 Detailed fertility reports
👩‍⚕️ Telehealth consultations
📱 Cycle tracking app integration

Our tests measure key hormones like FSH, LH, estradiol, and progesterone.

Would you like to learn more about our testing options?`
  }

  private getGeneralFertilityInfo(): string {
    return `💜 I'm here to support your fertility journey! I can help with:

🌸 Menstrual cycle tracking
🥚 Ovulation prediction
💭 Symptom monitoring
🧪 Understanding fertility tests
📚 Educational resources
👩‍⚕️ Connecting with specialists

What aspect of fertility health interests you most?`
  }
}

export const instagramService = new InstagramService()
