import Link from "next/link"
import { AlertTriangle, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BankTransferPendingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-xl">
          <Card>
            <CardHeader className="text-center">
              <AlertTriangle aria-hidden="true" className="mx-auto mb-3 h-12 w-12 text-amber-600" />
              <CardTitle>Bank transfer is unavailable</CardTitle>
              <CardDescription>No invoice or transfer request was created.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-center">
              <p className="text-sm leading-6 text-gray-600">
                Bank transfers are not connected to a verified payment workflow. Contact support before sending any
                money.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="flex-1 bg-rose-600 hover:bg-rose-700">
                  <a href="mailto:fertiterratechnologies@africanimpactinitiative.com?subject=Bank%20transfer%20payment%20question">
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
        </div>
      </main>
    </div>
  )
}
