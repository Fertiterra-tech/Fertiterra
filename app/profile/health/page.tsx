import Link from "next/link"
import { AlertTriangle } from "lucide-react"
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
              Cycle, symptom, medication, goal, and export features are paused until private health records can be
              stored and protected by an active secure backend. Please do not enter health details here.
            </p>
            <Button asChild variant="outline">
              <Link href="/profile">Return to profile</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
