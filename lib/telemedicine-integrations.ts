// Option A: Twilio Video
export class TwilioVideoService {
  async createRoom(roomName: string) {
    const response = await fetch("/api/video/create-room", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName }),
    })
    return response.json()
  }

  async generateAccessToken(identity: string, roomName: string) {
    const response = await fetch("/api/video/access-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identity, roomName }),
    })
    return response.json()
  }
}

// Option B: Daily.co
export class DailyVideoService {
  async createRoom() {
    const response = await fetch("https://api.daily.co/v1/rooms", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          max_participants: 2,
          enable_screenshare: false,
          enable_chat: true,
        },
      }),
    })
    return response.json()
  }
}

// Option C: Agora
export class AgoraVideoService {
  async generateToken(channelName: string, uid: number) {
    // Generate Agora token for video call
    const response = await fetch("/api/video/agora-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ channelName, uid }),
    })
    return response.json()
  }
}
