import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SymptomHistory() {
  return (
    <section aria-live="polite" role="status">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
            Symptom history is unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            Symptom tracking is paused until private health records can be stored securely. No sample or personal
            symptom entries are displayed.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
