"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Activity, TrendingUp, Bell, Heart, Calendar, Users, BookOpen, TestTube2, User } from "lucide-react"

export default function WombsDashboard() {
  const [user, setUser] = useState<{ email: string; firstName: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [cycleDay, setCycleDay] = useState(14)
  const [fertileWindow, setFertileWindow] = useState(3)
  const [nextPeriod, setNextPeriod] = useState(14)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const userEmail = localStorage.getItem("userEmail")

    if (!isLoggedIn || !userEmail) {
      router.push("/login")
      return
    }

    // Extract first name from email
    const firstName = userEmail.split("@")[0].charAt(0).toUpperCase() + userEmail.split("@")[0].slice(1)

    setUser({ email: userEmail, firstName })
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#e11d48] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  const cycleProgress = (cycleDay / 28) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Wombs</h1>
            <p className="text-sm text-gray-600">by FertiTerra</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm text-gray-600">Good morning,</p>
              <p className="text-lg font-semibold text-gray-900">{user.firstName}</p>
            </div>
            <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
        {/* Fertility Insights Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white mb-6 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Heart className="w-8 h-8 opacity-20" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Your Fertility Insights</h2>
          <p className="text-blue-100 mb-6 max-w-2xl">
            Based on your recent tracking, your fertile window is approaching in {fertileWindow} days. Consider
            scheduling intimacy and monitoring ovulation signs.
          </p>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2.5 rounded-xl font-medium transition-all">
            View Details
          </button>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-white rounded-2xl p-6 text-left hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Log Symptoms</h4>
              <p className="text-sm text-gray-600">Track today's data</p>
            </button>
            <button className="bg-white rounded-2xl p-6 text-left hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">View Cycle</h4>
              <p className="text-sm text-gray-600">See predictions</p>
            </button>
          </div>
        </div>

        {/* Current Cycle */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Current Cycle</h3>

          <div className="flex items-center justify-between mb-4">
            <div className="text-4xl font-bold text-blue-600">Day {cycleDay}</div>
            <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium">
              Ovulation Phase
            </span>
          </div>

          <div className="mb-6">
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${cycleProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{cycleDay} days into cycle</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Fertile Window</p>
              <p className="text-3xl font-bold text-gray-900">{fertileWindow} days</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Next Period</p>
              <p className="text-3xl font-bold text-gray-900">{nextPeriod} days</p>
            </div>
          </div>
        </div>

        {/* Health Education */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Health Education</h3>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">See All</button>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-100">
            <h4 className="font-semibold text-gray-900 mb-2">Understanding Ovulation Signs</h4>
            <p className="text-sm text-gray-600 mb-4">Learn to identify your body's fertile signals</p>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700">Read More →</button>
          </div>
        </div>

        {/* Care Navigation */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Care Navigation</h3>
          <h4 className="font-semibold text-gray-900 mb-2">Find Fertility Clinics Near You</h4>
          <p className="text-sm text-gray-600 mb-4">Connect with trusted specialists in your area</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Find Clinics
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 safe-area-pb">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-7 gap-2">
            <Link href="/dashboard" className="flex flex-col items-center gap-1 text-blue-600">
              <Calendar className="w-5 h-5" />
              <span className="text-xs font-medium">Home</span>
            </Link>
            <Link
              href="/dashboard/tracking"
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900"
            >
              <Activity className="w-5 h-5" />
              <span className="text-xs">Tracking</span>
            </Link>
            <Link
              href="/dashboard/tests"
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900"
            >
              <TestTube2 className="w-5 h-5" />
              <span className="text-xs">Diagnostics</span>
            </Link>
            <Link
              href="/dashboard/education"
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-xs">Learn</span>
            </Link>
            <Link
              href="/dashboard/community"
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900"
            >
              <Users className="w-5 h-5" />
              <span className="text-xs">Community</span>
            </Link>
            <Link
              href="/dashboard/updates"
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900"
            >
              <Bell className="w-5 h-5" />
              <span className="text-xs">Updates</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-900"
            >
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
