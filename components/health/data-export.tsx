import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DataExport() {
  return (
    <section aria-live="polite" role="status">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
            Health data export is unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            Export and sharing are paused until a secure health-data service is available. No file or sharing link has
            been created.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
