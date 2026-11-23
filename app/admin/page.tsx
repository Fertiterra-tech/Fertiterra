import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminOverviewPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8" aria-live="polite" role="status">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
            Admin analytics are unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            The connected database is inactive. User, consultation, revenue, and service metrics are not available, so
            no sample activity or fabricated system-health indicators are displayed.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
