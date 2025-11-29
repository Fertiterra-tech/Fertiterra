"use client"

import Link from "next/link"
import { ArrowLeft, TestTube2, Calendar, Clock, CheckCircle2, AlertCircle } from "lucide-react"

export default function DiagnosticsPage() {
  const tests = [
    {
      id: 1,
      name: "Hormone Panel",
      description: "Comprehensive hormone level analysis",
      status: "completed",
      date: "2025-01-15",
      results: "View Results",
    },
    {
      id: 2,
      name: "AMH Test",
      description: "Anti-Müllerian hormone testing",
      status: "pending",
      date: "2025-01-20",
      results: null,
    },
    {
      id: 3,
      name: "Thyroid Function",
      description: "TSH, T3, T4 levels",
      status: "scheduled",
      date: "2025-01-25",
      results: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Diagnostics</h1>
            <p className="text-sm text-gray-600">Track your test results</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Book New Test CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 mb-6 text-white">
          <TestTube2 className="w-10 h-10 mb-4 opacity-90" />
          <h2 className="text-xl font-bold mb-2">Schedule a New Test</h2>
          <p className="text-blue-100 mb-4">Get comprehensive fertility diagnostics from the comfort of your home</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Book Test Now
          </button>
        </div>

        {/* Test History */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Your Tests</h2>
          <div className="space-y-4">
            {tests.map((test) => (
              <div key={test.id} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{test.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                  </div>
                  {test.status === "completed" && <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />}
                  {test.status === "pending" && <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0" />}
                  {test.status === "scheduled" && <Calendar className="w-6 h-6 text-blue-500 flex-shrink-0" />}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(test.date).toLocaleDateString()}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      test.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : test.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                  </span>
                </div>

                {test.results && (
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors">
                    {test.results}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Test Preparation Tips</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Fast for 8-12 hours before blood tests</li>
                <li>• Schedule hormone tests on specific cycle days</li>
                <li>• Take basal body temperature first thing in the morning</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
