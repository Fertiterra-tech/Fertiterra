"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Droplet, Heart, Thermometer, Moon, Smile, Frown, Meh } from "lucide-react"

export default function TrackingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [flowIntensity, setFlowIntensity] = useState<"light" | "medium" | "heavy" | null>(null)
  const [symptoms, setSymptoms] = useState<string[]>([])
  const [mood, setMood] = useState<"happy" | "neutral" | "sad" | null>(null)
  const [temperature, setTemperature] = useState("")
  const [notes, setNotes] = useState("")

  const symptomOptions = ["Cramps", "Headache", "Bloating", "Tender breasts", "Fatigue", "Acne", "Nausea", "Back pain"]

  const toggleSymptom = (symptom: string) => {
    setSymptoms((prev) => (prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]))
  }

  const handleSave = () => {
    // Save tracking data
    console.log("[v0] Saving tracking data:", {
      date: selectedDate,
      flow: flowIntensity,
      symptoms,
      mood,
      temperature,
      notes,
    })
    alert("Tracking data saved successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Track Your Cycle</h1>
            <p className="text-sm text-gray-600">Log today's data</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Date Selection */}
        <div className="bg-white rounded-2xl p-6 mb-4 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h2 className="font-semibold text-gray-900">Date</h2>
          </div>
          <input
            type="date"
            value={selectedDate.toISOString().split("T")[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Flow Intensity */}
        <div className="bg-white rounded-2xl p-6 mb-4 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Droplet className="w-5 h-5 text-red-500" />
            <h2 className="font-semibold text-gray-900">Flow Intensity</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {(["light", "medium", "heavy"] as const).map((intensity) => (
              <button
                key={intensity}
                onClick={() => setFlowIntensity(intensity)}
                className={`py-3 px-4 rounded-xl font-medium transition-all ${
                  flowIntensity === intensity ? "bg-red-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Symptoms */}
        <div className="bg-white rounded-2xl p-6 mb-4 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-pink-500" />
            <h2 className="font-semibold text-gray-900">Symptoms</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {symptomOptions.map((symptom) => (
              <button
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  symptoms.includes(symptom) ? "bg-pink-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>

        {/* Mood */}
        <div className="bg-white rounded-2xl p-6 mb-4 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Moon className="w-5 h-5 text-purple-500" />
            <h2 className="font-semibold text-gray-900">Mood</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setMood("happy")}
              className={`py-4 rounded-xl transition-all ${
                mood === "happy" ? "bg-green-500 text-white" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <Smile className="w-8 h-8 mx-auto" />
            </button>
            <button
              onClick={() => setMood("neutral")}
              className={`py-4 rounded-xl transition-all ${
                mood === "neutral" ? "bg-yellow-500 text-white" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <Meh className="w-8 h-8 mx-auto" />
            </button>
            <button
              onClick={() => setMood("sad")}
              className={`py-4 rounded-xl transition-all ${
                mood === "sad" ? "bg-red-500 text-white" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <Frown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>

        {/* Temperature */}
        <div className="bg-white rounded-2xl p-6 mb-4 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="w-5 h-5 text-orange-500" />
            <h2 className="font-semibold text-gray-900">Basal Body Temperature (°F)</h2>
          </div>
          <input
            type="number"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="97.5"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Notes</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any additional notes..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-colors"
        >
          Save Tracking Data
        </button>
      </main>
    </div>
  )
}
