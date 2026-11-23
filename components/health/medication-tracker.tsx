import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MedicationTracker() {
  return (
    <section aria-live="polite" role="status">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
            Medication tracking is unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            Medication records and reminders are paused until private health data can be stored securely. No sample
            medications or reminders are shown.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
