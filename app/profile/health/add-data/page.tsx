"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useAuth } from "@/context/auth-context"
import { CalendarIcon, Thermometer, Activity, Pill } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function AddHealthDataPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [activeTab, setActiveTab] = useState("daily")

  // Daily log state
  const [dailyData, setDailyData] = useState({
    basalTemperature: "",
    cervicalFluid: "",
    cervicalPosition: "",
    lhTest: "",
    hcgTest: "",
    intercourse: false,
    protectedIntercourse: false,
    menstruationFlow: "",
    notes: "",
  })

  // Symptoms state
  const [symptoms, setSymptoms] = useState<{ symptom: string; intensity: number }[]>([])
  const [newSymptom, setNewSymptom] = useState({ symptom: "", intensity: 1 })

  // Medication state
  const [medications, setMedications] = useState<{ name: string; dosage: string; taken: boolean }[]>([])

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return null
  }

  const handleSaveData = async () => {
    // In a real app, this would save to the database
    console.log("Saving data for", format(selectedDate, "yyyy-MM-dd"), {
      dailyData,
      symptoms,
      medications,
    })

    // Redirect back to health profile
    router.push("/profile/health")
  }

  const addSymptom = () => {
    if (newSymptom.symptom) {
      setSymptoms((prev) => [...prev, newSymptom])
      setNewSymptom({ symptom: "", intensity: 1 })
    }
  }

  const removeSymptom = (index: number) => {
    setSymptoms((prev) => prev.filter((_, i) => i !== index))
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
  ]

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
            <Link href="/profile/health" className="text-sm font-medium">
              ← Back to Health Profile
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Add Health Data</h1>
              <p className="text-muted-foreground">Log your daily fertility and health information</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/profile/health">Cancel</Link>
              </Button>
              <Button onClick={handleSaveData}>Save Data</Button>
            </div>
          </div>

          {/* Date Selection */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => date && setSelectedDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="daily">Daily Log</TabsTrigger>
              <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="daily">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5" />
                    Daily Fertility Tracking
                  </CardTitle>
                  <CardDescription>Record your daily fertility signs and symptoms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <Label htmlFor="basal-temp">Basal Body Temperature (°F)</Label>
                      <Input
                        id="basal-temp"
                        type="number"
                        step="0.1"
                        placeholder="98.6"
                        value={dailyData.basalTemperature}
                        onChange={(e) => setDailyData((prev) => ({ ...prev, basalTemperature: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cervical-fluid">Cervical Fluid</Label>
                      <Select onValueChange={(value) => setDailyData((prev) => ({ ...prev, cervicalFluid: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dry">Dry</SelectItem>
                          <SelectItem value="sticky">Sticky</SelectItem>
                          <SelectItem value="creamy">Creamy</SelectItem>
                          <SelectItem value="watery">Watery</SelectItem>
                          <SelectItem value="egg-white">Egg white</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="cervical-position">Cervical Position</Label>
                      <Select onValueChange={(value) => setDailyData((prev) => ({ ...prev, cervicalPosition: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="menstruation">Menstruation Flow</Label>
                      <Select onValueChange={(value) => setDailyData((prev) => ({ ...prev, menstruationFlow: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select flow" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="spotting">Spotting</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="heavy">Heavy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">Ovulation Tests</Label>
                      <div className="grid gap-4 md:grid-cols-2 mt-2">
                        <div>
                          <Label htmlFor="lh-test">LH Test Result</Label>
                          <RadioGroup
                            value={dailyData.lhTest}
                            onValueChange={(value) => setDailyData((prev) => ({ ...prev, lhTest: value }))}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="negative" id="lh-negative" />
                              <Label htmlFor="lh-negative">Negative</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="positive" id="lh-positive" />
                              <Label htmlFor="lh-positive">Positive</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="not-tested" id="lh-not-tested" />
                              <Label htmlFor="lh-not-tested">Not tested</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div>
                          <Label htmlFor="hcg-test">Pregnancy Test Result</Label>
                          <RadioGroup
                            value={dailyData.hcgTest}
                            onValueChange={(value) => setDailyData((prev) => ({ ...prev, hcgTest: value }))}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="negative" id="hcg-negative" />
                              <Label htmlFor="hcg-negative">Negative</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="positive" id="hcg-positive" />
                              <Label htmlFor="hcg-positive">Positive</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="not-tested" id="hcg-not-tested" />
                              <Label htmlFor="hcg-not-tested">Not tested</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Intimacy</Label>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="intercourse"
                            checked={dailyData.intercourse}
                            onCheckedChange={(checked) =>
                              setDailyData((prev) => ({ ...prev, intercourse: checked as boolean }))
                            }
                          />
                          <Label htmlFor="intercourse">Intercourse</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="protected"
                            checked={dailyData.protectedIntercourse}
                            onCheckedChange={(checked) =>
                              setDailyData((prev) => ({ ...prev, protectedIntercourse: checked as boolean }))
                            }
                          />
                          <Label htmlFor="protected">Protected intercourse</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="symptoms">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Symptoms & Feelings
                  </CardTitle>
                  <CardDescription>Track how you're feeling today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <Select
                      value={newSymptom.symptom}
                      onValueChange={(value) => setNewSymptom((prev) => ({ ...prev, symptom: value }))}
                    >
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Select symptom" />
                      </SelectTrigger>
                      <SelectContent>
                        {COMMON_SYMPTOMS.map((symptom) => (
                          <SelectItem key={symptom} value={symptom}>
                            {symptom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      value={newSymptom.intensity.toString()}
                      onValueChange={(value) =>
                        setNewSymptom((prev) => ({ ...prev, intensity: Number.parseInt(value) }))
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Intensity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 - Mild</SelectItem>
                        <SelectItem value="2">2 - Mild</SelectItem>
                        <SelectItem value="3">3 - Moderate</SelectItem>
                        <SelectItem value="4">4 - Severe</SelectItem>
                        <SelectItem value="5">5 - Severe</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={addSymptom}>Add</Button>
                  </div>

                  <div className="space-y-2">
                    {symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <span className="font-medium">{symptom.symptom}</span>
                          <span className="ml-2 text-sm text-muted-foreground">Intensity: {symptom.intensity}/5</span>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => removeSymptom(index)}>
                          Remove
                        </Button>
                      </div>
                    ))}
                    {symptoms.length === 0 && (
                      <p className="text-center text-muted-foreground py-4">No symptoms added yet</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="h-5 w-5" />
                    Medications Taken Today
                  </CardTitle>
                  <CardDescription>Record which medications you took today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="folic-acid" />
                        <Label htmlFor="folic-acid">Folic Acid (400mcg)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="prenatal" />
                        <Label htmlFor="prenatal">Prenatal Vitamin</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="clomid" />
                        <Label htmlFor="clomid">Clomid (50mg)</Label>
                      </div>
                    </div>
                    <Button variant="outline">Add Custom Medication</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Notes</CardTitle>
                  <CardDescription>Add any additional notes about your day</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="How are you feeling today? Any other observations or notes..."
                    value={dailyData.notes}
                    onChange={(e) => setDailyData((prev) => ({ ...prev, notes: e.target.value }))}
                    className="min-h-32"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
