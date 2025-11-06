"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/context/auth-context"
import { Loader2, Plus } from "lucide-react"
import { HealthOverview } from "@/components/health/health-overview"
import { CycleTracking } from "@/components/health/cycle-tracking"
import { SymptomHistory } from "@/components/health/symptom-history"
import { MedicationTracker } from "@/components/health/medication-tracker"
import { HealthGoals } from "@/components/health/health-goals"
import { DataExport } from "@/components/health/data-export"

export default function HealthProfilePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/fertiterra-logo.png"
                alt="FertiTerra Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </header>
        <main className="flex-1 container py-8">
          <div className="flex justify-center items-center h-full">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p className="ml-2">Loading health profile...</p>
          </div>
        </main>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/fertiterra-logo.png"
              alt="FertiTerra Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/profile" className="text-sm font-medium">
              Profile
            </Link>
            <Link href="/profile/health" className="text-sm font-medium text-rose-600">
              Health
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Health Profile</h1>
              <p className="text-muted-foreground">Track your fertility journey and health data</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/profile/health/add-data">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Data
                </Link>
              </Button>
              <Button asChild>
                <Link href="/profile">Back to Profile</Link>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cycles">Cycles</TabsTrigger>
              <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="export">Export</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <HealthOverview />
            </TabsContent>

            <TabsContent value="cycles">
              <CycleTracking />
            </TabsContent>

            <TabsContent value="symptoms">
              <SymptomHistory />
            </TabsContent>

            <TabsContent value="medications">
              <MedicationTracker />
            </TabsContent>

            <TabsContent value="goals">
              <HealthGoals />
            </TabsContent>

            <TabsContent value="export">
              <DataExport />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
