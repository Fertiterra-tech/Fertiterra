import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-rose-600">FertiTerra</h1>
            <div className="space-x-4">
              <Button asChild variant="outline">
                <Link href="/debug">Debug</Link>
              </Button>
              <Button asChild>
                <Link href="/basic-signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Simple Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to FertiTerra</h1>
          <p className="text-xl text-gray-600">Your fertility health journey starts here</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>🧪 Fertility Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Comprehensive hormone testing from home</p>
                <Button asChild className="w-full">
                  <Link href="/basic-signup">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>👩‍⚕️ Doctor Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Connect with fertility specialists</p>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/basic-signup">Book Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="text-lg font-semibold">Having issues?</h3>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link href="/debug">Run Diagnostics</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/basic-signup">Simple Signup</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
