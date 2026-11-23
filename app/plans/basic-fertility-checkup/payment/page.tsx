import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentUnavailablePage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-slate-900">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <Card className="w-full max-w-xl border-stone-200 shadow-sm">
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-900">
              <AlertTriangle aria-hidden="true" className="h-5 w-5" />
            </div>
            <CardTitle className="text-2xl">Checkout is temporarily unavailable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-slate-600" role="status">
              No payment was started or recorded. Checkout is paused until secure payment processing and durable order
              records are available.
            </p>
            <div className="mt-6 rounded-xl border border-stone-200 bg-stone-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Selected service</p>
              <p className="mt-1 font-semibold">Basic Fertility Checkup</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-emerald-800 hover:bg-emerald-900">
                <Link href="/">Return to FertiTerra</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/plans/basic-fertility-checkup">View service status</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
