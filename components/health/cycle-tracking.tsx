"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Plus, CalendarIcon, TrendingUp } from "lucide-react"
import { getCycles, createCycle } from "@/actions/fertility-tracking"
import type { FertilityCycle } from "@/actions/fertility-tracking"
import Link from "next/link"

export function CycleTracking() {
  const [cycles, setCycles] = useState<FertilityCycle[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadCycles()
  }, [])

  const loadCycles = async () => {
    try {
      const cycleData = await getCycles()
      setCycles(cycleData)
    } catch (error) {
      console.error("Error loading cycles:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleStartNewCycle = async () => {
    if (!selectedDate) return

    try {
      const result = await createCycle({
        cycle_start_date: selectedDate.toISOString().split("T")[0],
      })

      if (result.data) {
        setCycles((prev) => [result.data, ...prev])
      }
    } catch (error) {
      console.error("Error starting new cycle:", error)
    }
  }

  const currentCycle = cycles.find((cycle) => !cycle.cycle_end_date)
  const completedCycles = cycles.filter((cycle) => cycle.cycle_end_date)

  const getCycleDuration = (cycle: FertilityCycle) => {
    if (!cycle.cycle_end_date) return null
    const start = new Date(cycle.cycle_start_date)
    const end = new Date(cycle.cycle_end_date)
    return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  }

  const getCurrentCycleDays = (cycle: FertilityCycle) => {
    const start = new Date(cycle.cycle_start_date)
    const today = new Date()
    return Math.round((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
  }

  return (
    <div className="space-y-6">
      {/* Current Cycle */}
      {currentCycle && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Current Cycle
            </CardTitle>
            <CardDescription>Started on {new Date(currentCycle.cycle_start_date).toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">Day {getCurrentCycleDays(currentCycle)}</p>
                <p className="text-sm text-muted-foreground">Current cycle day</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href="/profile/health/add-data">Log Data</Link>
                </Button>
                <Button variant="outline">End Cycle</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Cycle Calendar</CardTitle>
            <CardDescription>{currentCycle ? "Track your current cycle" : "Start a new cycle"}</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
            {!currentCycle && (
              <Button className="w-full mt-4" onClick={handleStartNewCycle} disabled={!selectedDate}>
                <Plus className="h-4 w-4 mr-2" />
                Start New Cycle
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Cycle History */}
        <Card>
          <CardHeader>
            <CardTitle>Cycle History</CardTitle>
            <CardDescription>Your past {completedCycles.length} cycles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {completedCycles.map((cycle) => {
                const duration = getCycleDuration(cycle)
                return (
                  <div key={cycle.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{new Date(cycle.cycle_start_date).toLocaleDateString()}</p>
                      <p className="text-sm text-muted-foreground">{duration} days</p>
                    </div>
                    <Badge variant={duration && duration >= 21 && duration <= 35 ? "default" : "secondary"}>
                      {duration && duration >= 21 && duration <= 35 ? "Normal" : "Irregular"}
                    </Badge>
                  </div>
                )
              })}
              {completedCycles.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">No completed cycles yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cycle Statistics */}
      {completedCycles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Cycle Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <p className="text-2xl font-bold">
                  {Math.round(
                    completedCycles.reduce((sum, cycle) => {
                      const duration = getCycleDuration(cycle)
                      return sum + (duration || 0)
                    }, 0) / completedCycles.length,
                  )}
                </p>
                <p className="text-sm text-muted-foreground">Average Length (days)</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">
                  {Math.min(...completedCycles.map((cycle) => getCycleDuration(cycle) || 0))}
                </p>
                <p className="text-sm text-muted-foreground">Shortest Cycle</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">
                  {Math.max(...completedCycles.map((cycle) => getCycleDuration(cycle) || 0))}
                </p>
                <p className="text-sm text-muted-foreground">Longest Cycle</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
