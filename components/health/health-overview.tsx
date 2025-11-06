"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, TrendingUp, Heart, Activity, AlertCircle } from "lucide-react"
import { getFertilityInsights } from "@/actions/fertility-tracking"
import Link from "next/link"

type HealthStats = {
  currentCycleDay: number
  averageCycleLength: number | null
  nextPeriodDate: string | null
  fertileWindow: { start: string; end: string } | null
  recentSymptoms: string[]
  activeMedications: number
}

export function HealthOverview() {
  const [insights, setInsights] = useState<any>(null)
  const [healthStats, setHealthStats] = useState<HealthStats>({
    currentCycleDay: 14,
    averageCycleLength: null,
    nextPeriodDate: null,
    fertileWindow: null,
    recentSymptoms: ["Mild cramping", "Mood changes"],
    activeMedications: 2,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadInsights = async () => {
      try {
        const result = await getFertilityInsights()
        if (result.insights) {
          setInsights(result.insights)
          setHealthStats((prev) => ({
            ...prev,
            averageCycleLength: result.insights.averageCycleLength,
            nextPeriodDate: result.insights.estimatedNextPeriod,
            fertileWindow: result.insights.estimatedFertileWindow,
          }))
        }
      } catch (error) {
        console.error("Error loading insights:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadInsights()
  }, [])

  const cycleProgress = healthStats.averageCycleLength
    ? (healthStats.currentCycleDay / healthStats.averageCycleLength) * 100
    : 0

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Cycle</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Day {healthStats.currentCycleDay}</div>
            <p className="text-xs text-muted-foreground">
              {healthStats.averageCycleLength ? `of ${healthStats.averageCycleLength}` : "tracking..."}
            </p>
            <Progress value={cycleProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Cycle Length</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {healthStats.averageCycleLength ? `${healthStats.averageCycleLength} days` : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">
              {insights?.cycleRegularity ? `±${insights.cycleRegularity} days` : "Need more data"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Medications</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthStats.activeMedications}</div>
            <p className="text-xs text-muted-foreground">Currently taking</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Symptoms</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthStats.recentSymptoms.length}</div>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Fertility Window Alert */}
      {healthStats.fertileWindow && (
        <Card className="border-rose-200 bg-rose-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rose-800">
              <AlertCircle className="h-5 w-5" />
              Fertile Window
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-rose-700">
              Your estimated fertile window is from{" "}
              <strong>{new Date(healthStats.fertileWindow.start).toLocaleDateString()}</strong> to{" "}
              <strong>{new Date(healthStats.fertileWindow.end).toLocaleDateString()}</strong>
            </p>
            <Button className="mt-3" size="sm" asChild>
              <Link href="/profile/health/add-data">Log Today's Data</Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Symptoms</CardTitle>
            <CardDescription>Symptoms logged in the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {healthStats.recentSymptoms.map((symptom, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{symptom}</span>
                  <Badge variant="secondary">Today</Badge>
                </div>
              ))}
              {healthStats.recentSymptoms.length === 0 && (
                <p className="text-sm text-muted-foreground">No symptoms logged recently</p>
              )}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/profile/health?tab=symptoms">View All Symptoms</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Important dates and reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {healthStats.nextPeriodDate && (
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Expected Period</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(healthStats.nextPeriodDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Doctor Appointment</p>
                  <p className="text-xs text-muted-foreground">May 15, 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Medication Refill</p>
                  <p className="text-xs text-muted-foreground">May 20, 2025</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/appointments">Manage Appointments</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
