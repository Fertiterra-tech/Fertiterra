import Link from "next/link"
import { AlertTriangle, BookOpen, HeartPulse, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HealthProfilePage() {
  return (
    <main className="container flex min-h-[60vh] items-center py-10">
      <section className="mx-auto w-full max-w-2xl" aria-live="polite" role="status">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
              Health tracking is temporarily unavailable
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-6 text-muted-foreground">
              We paused personal tracking while we restore secure, private health-record storage. No tracking entries or predictions are being generated, and you should not enter sensitive health details on this screen.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border bg-muted/30 p-4">
                <ShieldCheck aria-hidden="true" className="mb-2 h-5 w-5 text-emerald-700" />
                <p className="text-sm font-medium">Your privacy comes first</p>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">Tracking will return only when protected storage is available.</p>
              </div>
              <div className="rounded-lg border bg-muted/30 p-4">
                <BookOpen aria-hidden="true" className="mb-2 h-5 w-5 text-emerald-700" />
                <p className="text-sm font-medium">Keep learning</p>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">Educational content remains available without submitting personal health data.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild><Link href="/knowledge-centre">Explore fertility resources <HeartPulse aria-hidden="true" className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild variant="outline"><Link href="/profile">Return to profile</Link></Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
