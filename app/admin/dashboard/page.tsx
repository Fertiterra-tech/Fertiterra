import Link from "next/link"
import { ArrowUpRight, BarChart3, CalendarDays, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const adminSections = [
  { title: "User accounts", description: "Manage user access and account details.", href: "/admin/users", icon: Users },
  { title: "Appointments", description: "Review appointment operations.", href: "/admin/appointments", icon: CalendarDays },
  { title: "Analytics", description: "View reporting when verified data is available.", href: "/admin/analytics", icon: BarChart3 },
]

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-8 px-4 py-8 sm:px-6">
      <header>
        <p className="text-sm font-medium text-muted-foreground">Administration</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Operations overview</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Choose an area to manage. Live metrics and patient records are intentionally omitted until they can be loaded from a verified, authorized source.
        </p>
      </header>
      <section aria-label="Admin tools" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {adminSections.map(({ title, description, href, icon: Icon }) => (
          <Link key={href} href={href} className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Card className="h-full transition-colors group-hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <span className="rounded-lg bg-muted p-2"><Icon aria-hidden="true" className="h-5 w-5" /></span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <CardTitle className="pt-2 text-lg">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </section>
      <Card className="border-amber-300/70 bg-amber-50/60 dark:bg-amber-950/10">
        <CardContent className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center">
          <p className="text-sm font-medium">Data integrity notice</p>
          <p className="text-sm leading-6 text-muted-foreground">No sample counts or patient details are shown as live operational data.</p>
        </CardContent>
      </Card>
    </main>
  )
}
