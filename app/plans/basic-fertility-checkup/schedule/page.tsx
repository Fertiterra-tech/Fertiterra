import Link from "next/link"
import { AlertTriangle, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-xl">
          <Card>
            <CardHeader className="text-center">
              <AlertTriangle aria-hidden="true" className="mx-auto mb-3 h-12 w-12 text-amber-600" />
              <CardTitle>Online scheduling is unavailable</CardTitle>
              <CardDescription>No consultation has been booked.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-center">
              <p className="text-sm leading-6 text-gray-600">
                The scheduling service is not connected to a secure appointment system yet. If you have a verified
                payment, contact support with your payment reference to arrange your consultation.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="flex-1 bg-rose-600 hover:bg-rose-700">
                  <a href="mailto:fertiterratechnologies@africanimpactinitiative.com?subject=Fertility%20consultation%20scheduling">
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
