"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Users, TrendingUp, Settings, Instagram, Send } from "lucide-react"

interface InstagramStats {
  totalMessages: number
  activeUsers: number
  responseRate: number
  avgResponseTime: string
}

interface RecentMessage {
  id: string
  username: string
  message: string
  timestamp: string
  replied: boolean
}

export default function InstagramAdminDashboard() {
  const [stats, setStats] = useState<InstagramStats>({
    totalMessages: 0,
    activeUsers: 0,
    responseRate: 0,
    avgResponseTime: "0s",
  })

  const [recentMessages, setRecentMessages] = useState<RecentMessage[]>([])
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Simulate loading data
    setStats({
      totalMessages: 1247,
      activeUsers: 89,
      responseRate: 94.5,
      avgResponseTime: "2.3s",
    })

    setRecentMessages([
      {
        id: "1",
        username: "@sarah_wellness",
        message: "Hi! I need help tracking my cycle",
        timestamp: "2 minutes ago",
        replied: false,
      },
      {
        id: "2",
        username: "@healthy_mama",
        message: "When is my fertile window?",
        timestamp: "5 minutes ago",
        replied: true,
      },
      {
        id: "3",
        username: "@fertility_journey",
        message: "Can you explain ovulation signs?",
        timestamp: "8 minutes ago",
        replied: true,
      },
    ])

    // Check Instagram connection status
    checkInstagramConnection()
  }, [])

  const checkInstagramConnection = async () => {
    try {
      const response = await fetch("/api/instagram/status")
      const data = await response.json()
      setIsConnected(data.connected)
    } catch (error) {
      console.error("Failed to check Instagram connection:", error)
    }
  }

  const connectInstagram = async () => {
    // Redirect to Instagram OAuth
    window.location.href = "/api/instagram/auth"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Instagram Chatbot</h1>
              <p className="text-gray-600">FertiTerra Fertility Assistant</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant={isConnected ? "default" : "destructive"} className="px-3 py-1">
              {isConnected ? "Connected" : "Disconnected"}
            </Badge>
            {!isConnected && (
              <Button onClick={connectInstagram} className="bg-gradient-to-r from-purple-500 to-pink-500">
                Connect Instagram
              </Button>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Messages</CardTitle>
              <MessageCircle className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.totalMessages.toLocaleString()}</div>
              <p className="text-xs text-green-600 mt-1">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Active Users</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.activeUsers}</div>
              <p className="text-xs text-green-600 mt-1">+8% from last week</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Response Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.responseRate}%</div>
              <p className="text-xs text-green-600 mt-1">+2% from last week</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg Response Time</CardTitle>
              <Settings className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stats.avgResponseTime}</div>
              <p className="text-xs text-green-600 mt-1">-0.5s from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Messages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-purple-500" />
                Recent Messages
              </CardTitle>
              <CardDescription>Latest Instagram DMs from users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900">{message.username}</span>
                        <Badge variant={message.replied ? "default" : "secondary"} className="text-xs">
                          {message.replied ? "Replied" : "Pending"}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{message.message}</p>
                      <p className="text-xs text-gray-400">{message.timestamp}</p>
                    </div>
                    {!message.replied && (
                      <Button size="sm" variant="outline" className="ml-2">
                        <Send className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bot Configuration */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-purple-500" />
                Bot Configuration
              </CardTitle>
              <CardDescription>Instagram chatbot settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Welcome Message</label>
                <textarea
                  className="w-full p-2 border border-gray-200 rounded-md text-sm"
                  rows={3}
                  defaultValue="Hi! 👋 I'm your FertiTerra fertility assistant. I can help you track your cycle, understand ovulation, and answer questions about fertility health. How can I help you today?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Auto-Reply</label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-600">Enable automatic responses</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Response Delay</label>
                <select className="w-full p-2 border border-gray-200 rounded-md text-sm">
                  <option>Instant</option>
                  <option>1-2 seconds</option>
                  <option>3-5 seconds</option>
                </select>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Save Configuration</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
