"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Header } from "@/components/header"
import { CheckCircle, CalendarIcon, Clock, Video } from "lucide-react"

const timeSlots = [
  "9:00 AM",
  "9:15 AM",
  "9:30 AM",
  "9:45 AM",
  "10:00 AM",
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
  "2:00 PM",
  "2:15 PM",
  "2:30 PM",
  "2:45 PM",
  "3:00 PM",
  "3:15 PM",
  "3:30 PM",
  "3:45 PM",
  "4:00 PM",
  "4:15 PM",
  "4:30 PM",
  "4:45 PM",
]

export default function SchedulePage() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [isScheduling, setIsScheduling] = useState(false)

  const handleSchedule = async () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time for your consultation")
      return
    }

    setIsScheduling(true)

    try {
      const response = await fetch("/api/fertility-checkup/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: selectedDate.toISOString().split("T")[0],
          time: selectedTime,
          consultationType: "basic-fertility-checkup",
        }),
      })

      if (response.ok) {
        router.push("/plans/basic-fertility-checkup/confirmation")
      } else {
        throw new Error("Failed to schedule consultation")
      }
    } catch (error) {
      console.error("Scheduling error:", error)
      alert("Failed to schedule consultation. Please try again.")
    } finally {
      setIsScheduling(false)
    }
  }

  // Disable past dates
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h1 className="text-3xl font-bold tracking-tight">Payment Successful!</h1>
              </div>
              <p className="text-lg text-gray-600">
                Now let's schedule your consultation with our fertility specialist
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Scheduling */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5" />
                      Choose Your Consultation Date
                    </CardTitle>
                    <CardDescription>Select a convenient date and time for your 15-minute consultation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="font-medium mb-3">Select Date</h3>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < today}
                          className="rounded-md border"
                        />
                      </div>

                      <div>
                        <h3 className="font-medium mb-3">Select Time</h3>
                        <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedTime(time)}
                              className={selectedTime === time ? "bg-rose-500 hover:bg-rose-600" : ""}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Video className="h-5 w-5 text-rose-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Video Consultation</p>
                          <p className="text-sm text-gray-600">
                            Secure video call with our fertility specialist from the comfort of your home
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-rose-500 mt-0.5" />
                        <div>
                          <p className="font-medium">15-Minute Session</p>
                          <p className="text-sm text-gray-600">
                            Comprehensive review of your health information and personalized recommendations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Follow-up Resources</p>
                          <p className="text-sm text-gray-600">
                            Written summary and next steps sent to your email after the consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Consultation Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Consultation Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium">Basic Fertility Checkup</p>
                      <p className="text-sm text-gray-600">15-minute consultation</p>
                    </div>

                    {selectedDate && (
                      <div>
                        <p className="font-medium">Selected Date</p>
                        <p className="text-sm text-gray-600">
                          {selectedDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    )}

                    {selectedTime && (
                      <div>
                        <p className="font-medium">Selected Time</p>
                        <p className="text-sm text-gray-600">{selectedTime}</p>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <p className="font-medium">What's Included:</p>
                      <ul className="text-sm text-gray-600 space-y-1 mt-2">
                        <li>• Personalized fertility assessment</li>
                        <li>• Review of your health information</li>
                        <li>• Expert recommendations</li>
                        <li>• Written follow-up summary</li>
                        <li>• Next steps guidance</li>
                      </ul>
                    </div>

                    <Button
                      onClick={handleSchedule}
                      className="w-full bg-rose-500 hover:bg-rose-600"
                      disabled={!selectedDate || !selectedTime || isScheduling}
                    >
                      {isScheduling ? "Scheduling..." : "Confirm Consultation"}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      You'll receive a confirmation email with video call details
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
