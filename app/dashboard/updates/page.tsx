"use client"

import Link from "next/link"
import { ArrowLeft, Bell, CheckCircle2, Info, Heart, Calendar } from "lucide-react"

export default function UpdatesPage() {
  const notifications = [
    {
      id: 1,
      type: "reminder",
      icon: <Bell className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-600",
      title: "Fertile Window Approaching",
      message: "Your fertile window starts in 2 days. Consider tracking ovulation signs.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 2,
      type: "success",
      icon: <CheckCircle2 className="w-5 h-5" />,
      color: "bg-green-100 text-green-600",
      title: "Test Results Available",
      message: "Your hormone panel results are ready to view in Diagnostics.",
      time: "3 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      icon: <Info className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-600",
      title: "New Article Published",
      message: "Understanding Ovulation Signs - A comprehensive guide for TTC",
      time: "Yesterday",
      read: true,
    },
    {
      id: 4,
      type: "reminder",
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-pink-100 text-pink-600",
      title: "Period Expected Soon",
      message: "Your period is expected to start in 3 days based on your cycle history.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 5,
      type: "community",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-rose-100 text-rose-600",
      title: "Community Support",
      message: "Sarah M. commented on your post in the TTC Journey group.",
      time: "3 days ago",
      read: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-900" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Updates</h1>
              <p className="text-sm text-gray-600">Stay informed</p>
            </div>
          </div>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Mark all as read</button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Unread Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">New</h2>
          <div className="space-y-3">
            {notifications
              .filter((n) => !n.read)
              .map((notification) => (
                <div
                  key={notification.id}
                  className="bg-white rounded-2xl p-5 border-2 border-blue-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.color}`}
                    >
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Earlier Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Earlier</h2>
          <div className="space-y-3">
            {notifications
              .filter((n) => n.read)
              .map((notification) => (
                <div
                  key={notification.id}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer opacity-75"
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.color}`}
                    >
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}
