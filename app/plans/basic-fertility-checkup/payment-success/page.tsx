"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { CheckCircle, CreditCard, Calendar, ArrowRight } from "lucide-react"

export default function PaymentSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [paymentDetails, setPaymentDetails] = useState({
    paymentId: "",
    amount: "$5.00",
    service: "Basic Fertility Checkup",
  })

  useEffect(() => {
    // Get payment details from URL params or localStorage
    const paymentId = searchParams.get("paymentId") || `pay_${Date.now()}`
    setPaymentDetails((prev) => ({
      ...prev,
      paymentId,
    }))
  }, [searchParams])

  const handleScheduleConsultation = () => {
    router.push("/plans/basic-fertility-checkup/schedule")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
              <p className="text-lg text-gray-600">Your Basic Fertility Checkup has been purchased</p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Confirmation
                </CardTitle>
                <CardDescription>Your payment has been processed successfully</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-500">Payment ID</p>
                    <p className="font-mono">{paymentDetails.paymentId}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Amount Paid</p>
                    <p className="font-semibold text-green-600">{paymentDetails.amount}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Service</p>
                    <p>{paymentDetails.service}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-500">Date</p>
                    <p>{new Date().toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">What's Included:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Free 15-minute consultation with fertility specialist</li>
                    <li>• Personalized fertility report based on your responses</li>
                    <li>• Medical professional guidance and recommendations</li>
                    <li>• Future family planning insights and next steps</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Next Step: Schedule Your Consultation
                </CardTitle>
                <CardDescription>Book your 15-minute consultation with our fertility specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Now that your payment is confirmed, you can schedule your consultation at a time that works best for
                  you. Our fertility specialist will review your questionnaire responses and provide personalized
                  recommendations.
                </p>
                <Button onClick={handleScheduleConsultation} className="w-full bg-rose-500 hover:bg-rose-600">
                  Schedule My Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-gray-500">
              <p>A confirmation email has been sent to your email address.</p>
              <p>If you have any questions, contact us at fertiterratechnologies@africanimpactinitiative.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
