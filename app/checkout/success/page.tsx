"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { CheckCircle, Package, Calendar, MessageCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
              <p className="text-gray-600">
                Thank you for your order. We've received your payment and will process your order shortly.
              </p>
            </div>

            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle>What happens next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Order Processing</p>
                    <p className="text-sm text-gray-600">
                      Your test kit will be shipped within 1-2 business days with free shipping.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Take Your Test</p>
                    <p className="text-sm text-gray-600">
                      Follow the included instructions and return your sample using the prepaid shipping label.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-rose-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Get Your Results</p>
                    <p className="text-sm text-gray-600">
                      Receive your results within 5-10 days and schedule a consultation with our specialists.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button className="bg-rose-500 hover:bg-rose-600">View Dashboard</Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
