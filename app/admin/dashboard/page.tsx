import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboardPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8" aria-live="polite" role="status">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle aria-hidden="true" className="h-5 w-5 text-amber-600" />
            Admin dashboard data is unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            The connected database is inactive. Admin metrics and account records are hidden until they can be loaded
            from a secure, authorized source.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
