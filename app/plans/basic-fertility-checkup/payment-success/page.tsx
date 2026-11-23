import Link from "next/link"
import { AlertTriangle, CheckCircle, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const EXPECTED_AMOUNT = 500
const EXPECTED_CURRENCY = "USD"
const REFERENCE_PATTERN = /^fertility_[a-f0-9-]{36}$/i

interface PaystackVerificationResponse {
  status?: boolean
  data?: {
    amount?: number
    currency?: string
    metadata?: { service?: string }
    paid_at?: string
    reference?: string
    status?: string
  }
}

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams?: { reference?: string | string[] }
}) {
  const reference = typeof searchParams?.reference === "string" ? searchParams.reference : ""
  const secretKey = process.env.PAYSTACK_SECRET_KEY
  let paidAt: string | null = null
  let paymentVerified = false

  if (secretKey && REFERENCE_PATTERN.test(reference)) {
    try {
      const response = await fetch(
        `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
        {
          headers: { Authorization: `Bearer ${secretKey}` },
          cache: "no-store",
          signal: AbortSignal.timeout(10000),
        },
      )
      const result = (await response.json()) as PaystackVerificationResponse
      const transaction = result.data

      paymentVerified = Boolean(
        response.ok &&
          result.status &&
          transaction?.status === "success" &&
          transaction.reference === reference &&
          transaction.amount === EXPECTED_AMOUNT &&
          transaction.currency === EXPECTED_CURRENCY &&
          transaction.metadata?.service === "basic-fertility-checkup",
      )
      paidAt = paymentVerified && typeof transaction?.paid_at === "string" ? transaction.paid_at : null
    } catch {
      paymentVerified = false
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-2xl">
          {paymentVerified ? (
            <Card>
              <CardHeader className="text-center">
                <CheckCircle aria-hidden="true" className="mx-auto mb-3 h-14 w-14 text-emerald-600" />
                <CardTitle className="text-2xl">Payment verified</CardTitle>
                <CardDescription>
                  Paystack confirmed your $5.00 USD payment for the Basic Fertility Checkup.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <dl className="grid gap-4 rounded-lg bg-gray-50 p-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-medium text-gray-600">Payment reference</dt>
                    <dd className="mt-1 break-all font-mono">{reference}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-600">Payment date</dt>
                    <dd className="mt-1">{paidAt ? new Date(paidAt).toLocaleString() : "Confirmed"}</dd>
                  </div>
                </dl>
                <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950" role="status">
                  Online appointment scheduling is temporarily unavailable. Your consultation has not been booked.
                  Contact support with your payment reference to arrange the next step.
                </div>
                <Button asChild className="w-full bg-rose-600 hover:bg-rose-700">
                  <a href={`mailto:fertiterratechnologies@africanimpactinitiative.com?subject=${encodeURIComponent("Verified fertility checkup payment")}&body=${encodeURIComponent(`Payment reference: ${reference}`)}`}>
                    <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
                    Contact support
                  </a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <AlertTriangle aria-hidden="true" className="mx-auto mb-3 h-14 w-14 text-amber-600" />
                <CardTitle className="text-2xl">Payment not confirmed</CardTitle>
                <CardDescription>
                  We could not verify this transaction. Do not retry the payment until you have checked its status.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {reference && REFERENCE_PATTERN.test(reference) ? (
                  <p className="break-all rounded-lg bg-gray-50 p-4 text-sm font-mono">Reference: {reference}</p>
                ) : null}
                <p className="text-sm text-gray-600">
                  If your account was charged, contact support with your payment reference. No appointment has been
                  booked.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="flex-1 bg-rose-600 hover:bg-rose-700">
                    <a href={`mailto:fertiterratechnologies@africanimpactinitiative.com?subject=${encodeURIComponent("Check fertility payment status")}&body=${encodeURIComponent(`Payment reference: ${reference || "not provided"}`)}`}>
                      <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
                      Contact support
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/">Return to home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
