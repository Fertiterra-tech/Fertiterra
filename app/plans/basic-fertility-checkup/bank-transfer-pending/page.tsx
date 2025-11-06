"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { CheckCircle, Clock, Mail, AlertTriangle, Copy } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function BankTransferPendingPage() {
  const searchParams = useSearchParams()
  const requestId = searchParams.get("requestId")

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-2xl">Invoice Sent - Payment Pending</CardTitle>
                <CardDescription>
                  Your bank transfer request has been submitted. Please complete the payment to proceed.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <h3 className="font-medium text-yellow-800">Payment Required</h3>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Your consultation cannot be scheduled until payment is received and verified.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">What happens next:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Invoice sent to your organization email</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm">Make bank transfer payment ($5.00)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm">Send payment confirmation to our team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm">We verify payment (within 24 hours)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-sm">Schedule your 15-minute consultation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-3">Payment Details:</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Request ID:</p>
                      <div className="flex items-center justify-between bg-white p-2 rounded border">
                        <span className="font-mono">{requestId}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(requestId || "", "Request ID")}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">Amount:</p>
                      <p>$5.00 USD</p>
                    </div>
                    <div>
                      <p className="font-medium">Service:</p>
                      <p>Basic Fertility Checkup (15-minute consultation)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <h3 className="font-medium text-blue-800">Send Payment Confirmation</h3>
                  </div>
                  <p className="text-sm text-blue-700 mb-3">
                    After making the bank transfer, please send your payment receipt/screenshot to:
                  </p>
                  <div className="flex items-center justify-between bg-white p-2 rounded border">
                    <span className="text-sm font-mono">fertiterratechnologies@africanimpactinitiative.com</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard("fertiterratechnologies@africanimpactinitiative.com", "Email address")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => (window.location.href = "mailto:fertiterratechnologies@africanimpactinitiative.com")}
                    className="bg-rose-500 hover:bg-rose-600"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
