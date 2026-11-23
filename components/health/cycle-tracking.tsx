import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CycleTracking() {
  return (
    <section aria-live="polite" role="status">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
            Cycle tracking is unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            Cycle records and predictions are paused until the secure health-data service is active. No cycle dates or
            predictions are displayed.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
