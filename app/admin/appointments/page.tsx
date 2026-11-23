import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AppointmentsPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8" aria-live="polite" role="status">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
            Appointment management is unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            The appointment database is inactive. Patient records, scheduling, exports, and appointment actions are
            disabled; no sample patient information is shown.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
