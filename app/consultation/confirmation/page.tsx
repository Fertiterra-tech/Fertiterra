"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { useAuth } from "@/context/auth-context"
import { Calendar, Clock, Video, MapPin, Check, Download, CalendarIcon } from "lucide-react"

// Mock data for doctors
const doctors = {
  "dr-sarah-johnson": {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Reproductive Endocrinologist",
    image: "/images/doctor-1.jpg",
  },
  "dr-michael-chen": {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    title: "OB/GYN, Fertility Specialist",
    image: "/images/doctor-2.jpg",
  },
  "dr-amara-patel": {
    id: "dr-amara-patel",
    name: "Dr. Amara Patel",
    title: "Reproductive Immunologist",
    image: "/images/doctor-3.jpg",
  },
  "dr-james-wilson": {
    id: "dr-james-wilson",
    name: "Dr. James Wilson",
    title: "Reproductive Urologist",
    image: "/images/doctor-4.jpg",
  },
}

export default function ConfirmationPage() {
  const { user } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)

  const doctorId = searchParams.get("doctor")
  const dateParam = searchParams.get("date")
  const timeParam = searchParams.get("time")
  const typeParam = searchParams.get("type")

  const [doctor, setDoctor] = useState<any>(null)
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState<string | null>(null)
  const [type, setType] = useState<string>("video")

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    if (doctorId && doctors[doctorId as keyof typeof doctors]) {
      setDoctor(doctors[doctorId as keyof typeof doctors])
    }

    if (dateParam) {
      setDate(new Date(dateParam))
    }

    if (timeParam) {
      setTime(timeParam)
    }

    if (typeParam) {
      setType(typeParam)
    }

    setLoading(false)
  }, [doctorId, dateParam, timeParam, typeParam, user, router])

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
            <p>Loading your appointment details...</p>
          </div>
        </main>
      </div>
    )
  }

  if (!doctor || !date || !time) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Error</CardTitle>
              <CardDescription>We couldn't find your appointment details.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>There was an error processing your appointment. Please try booking again.</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/consultation">Return to Consultations</Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Appointment Confirmed!</h1>
            <p className="text-lg text-gray-600">
              Your consultation with {doctor.name} has been scheduled successfully.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{doctor.name}</h3>
                    <p className="text-sm text-gray-500">{doctor.title}</p>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-rose-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-gray-600">
                        {date.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-rose-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-gray-600">{time} (30 minutes)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    {type === "video" ? (
                      <Video className="h-5 w-5 text-rose-500 mt-0.5" />
                    ) : (
                      <MapPin className="h-5 w-5 text-rose-500 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">Appointment Type</p>
                      <p className="text-gray-600">{type === "video" ? "Video Consultation" : "In-Person Visit"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-500 mt-0.5">
                      $
                    </div>
                    <div>
                      <p className="font-medium">Fee</p>
                      <p className="text-gray-600">$150.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/dashboard/appointments">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  View All Appointments
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Add to Calendar
                </Link>
              </Button>
              {type === "video" && (
                <Button asChild className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600">
                  <Link href={`/consultation/room/${doctorId}`}>
                    <Video className="mr-2 h-4 w-4" />
                    Join Video Call
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <h2 className="text-xl font-bold">What's Next?</h2>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center mb-2">
                    <span className="font-semibold text-rose-600">1</span>
                  </div>
                  <CardTitle className="text-base">Complete Health Questionnaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Please complete your health questionnaire at least 24 hours before your appointment.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/questionnaire">Complete Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center mb-2">
                    <span className="font-semibold text-rose-600">2</span>
                  </div>
                  <CardTitle className="text-base">Prepare for Your Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    {type === "video"
                      ? "Test your camera and microphone before the appointment. Find a quiet, private space."
                      : "Bring your ID, insurance card, and a list of any medications you're taking."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/appointment-prep">View Checklist</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center mb-2">
                    <span className="font-semibold text-rose-600">3</span>
                  </div>
                  <CardTitle className="text-base">
                    {type === "video" ? "Join Your Video Call" : "Visit Our Clinic"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    {type === "video"
                      ? "Join your video call 5 minutes before your scheduled time."
                      : "Arrive 15 minutes early to complete check-in procedures."}
                  </p>
                </CardContent>
                <CardFooter>
                  {type === "video" ? (
                    <Button asChild className="w-full bg-rose-500 hover:bg-rose-600">
                      <Link href={`/consultation/room/${doctorId}`}>Join Video Call</Link>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/clinic-locations">Get Directions</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Need to Reschedule?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If you need to reschedule or cancel your appointment, please do so at least 24 hours in advance to
                  avoid any cancellation fees.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/dashboard/appointments">Reschedule</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/dashboard/appointments">Cancel</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold mb-4">Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help with any questions about your upcoming appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/faq">View FAQs</Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-8 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FertiTerra. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-rose-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-rose-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
