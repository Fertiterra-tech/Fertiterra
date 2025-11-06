"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { CheckCircle, Calendar, Video, Mail, Phone } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h1 className="text-3xl font-bold mb-2">Consultation Scheduled!</h1>
              <p className="text-lg text-gray-600">Your Basic Fertility Checkup consultation has been confirmed</p>
            </div>

            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle>What happens next?</CardTitle>
                <CardDescription>Here's what you can expect before your consultation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Confirmation Email</p>
                    <p className="text-sm text-gray-600">
                      You'll receive a confirmation email with your consultation details and video call link within the
                      next few minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Calendar Reminder</p>
                    <p className="text-sm text-gray-600">
                      We'll send you a reminder 24 hours before your consultation with all the necessary details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="h-5 w-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Video Consultation</p>
                    <p className="text-sm text-gray-600">
                      Join your secure video call at the scheduled time for a quick 15-minute consultation focused on
                      your fertility health assessment. Our fertility specialist will review your information and
                      provide personalized recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Personalized Plan</p>
                    <p className="text-sm text-gray-600">
                      Following the consultation, we'll craft a personalized plan tailored to your unique needs and
                      goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Need to make changes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  If you need to reschedule or have any questions about your consultation, please contact us at least 24
                  hours in advance.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>fertiterratechnologies@africanimpactinitiative.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button className="bg-rose-500 hover:bg-rose-600">Go to Dashboard</Button>
              </Link>
              <Link href="/learn">
                <Button variant="outline">Explore Resources</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
