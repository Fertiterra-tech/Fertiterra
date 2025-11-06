"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Search, TrendingUp } from "lucide-react"

type Symptom = {
  id: string
  date: string
  symptom: string
  intensity: number
  notes?: string
}

const COMMON_SYMPTOMS = [
  "Cramping",
  "Bloating",
  "Mood changes",
  "Breast tenderness",
  "Headache",
  "Fatigue",
  "Nausea",
  "Back pain",
  "Acne",
  "Food cravings",
  "Insomnia",
  "Hot flashes",
]

export function SymptomHistory() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([
    {
      id: "1",
      date: "2025-01-29",
      symptom: "Cramping",
      intensity: 3,
      notes: "Mild cramping in the morning",
    },
    {
      id: "2",
      date: "2025-01-28",
      symptom: "Mood changes",
      intensity: 2,
      notes: "Feeling more emotional than usual",
    },
    {
      id: "3",
      date: "2025-01-27",
      symptom: "Bloating",
      intensity: 4,
      notes: "Significant bloating after meals",
    },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSymptom, setFilterSymptom] = useState<string>("all")
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: undefined,
    to: undefined,
  })

  const filteredSymptoms = symptoms.filter((symptom) => {
    const matchesSearch =
      symptom.symptom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (symptom.notes?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    const matchesFilter = filterSymptom === "all" || symptom.symptom === filterSymptom
    const matchesDate =
      !dateRange.from ||
      !dateRange.to ||
      (new Date(symptom.date) >= dateRange.from && new Date(symptom.date) <= dateRange.to)

    return matchesSearch && matchesFilter && matchesDate
  })

  const getIntensityColor = (intensity: number) => {
    if (intensity <= 2) return "bg-green-100 text-green-800"
    if (intensity <= 3) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  const getIntensityLabel = (intensity: number) => {
    if (intensity <= 2) return "Mild"
    if (intensity <= 3) return "Moderate"
    return "Severe"
  }

  const symptomFrequency = symptoms.reduce(
    (acc, symptom) => {
      acc[symptom.symptom] = (acc[symptom.symptom] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const mostCommonSymptoms = Object.entries(symptomFrequency)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Symptoms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search symptoms or notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <Select value={filterSymptom} onValueChange={setFilterSymptom}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by symptom" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All symptoms</SelectItem>
                {COMMON_SYMPTOMS.map((symptom) => (
                  <SelectItem key={symptom} value={symptom}>
                    {symptom}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Date Range
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={(range) => setDateRange(range || { from: undefined, to: undefined })}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Symptom List */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Symptom History</CardTitle>
              <CardDescription>{filteredSymptoms.length} symptoms found</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredSymptoms.map((symptom) => (
                  <div key={symptom.id} className="flex items-start justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{symptom.symptom}</h4>
                        <Badge className={getIntensityColor(symptom.intensity)}>
                          {getIntensityLabel(symptom.intensity)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {new Date(symptom.date).toLocaleDateString()}
                      </p>
                      {symptom.notes && <p className="text-sm">{symptom.notes}</p>}
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                ))}
                {filteredSymptoms.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">No symptoms found matching your criteria</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Most Common
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {mostCommonSymptoms.map(([symptom, count]) => (
                  <div key={symptom} className="flex items-center justify-between">
                    <span className="text-sm">{symptom}</span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-2xl font-bold">{symptoms.length}</p>
                  <p className="text-sm text-muted-foreground">Total Symptoms</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{symptoms.filter((s) => s.intensity >= 4).length}</p>
                  <p className="text-sm text-muted-foreground">Severe Episodes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{new Set(symptoms.map((s) => s.symptom)).size}</p>
                  <p className="text-sm text-muted-foreground">Unique Symptoms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
