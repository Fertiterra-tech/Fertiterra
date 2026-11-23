import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8" aria-live="polite" role="status">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
            Analytics are unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            Revenue, consultations, and user metrics require a connected database. Reports and exports are disabled
            until real, authorized data is available.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
