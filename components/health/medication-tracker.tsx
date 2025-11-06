"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Pill, Clock, AlertTriangle } from "lucide-react"

type Medication = {
  id: string
  name: string
  dosage: string
  frequency: string
  startDate: string
  endDate?: string
  notes?: string
  reminders: boolean
  sideEffects?: string[]
}

export function MedicationTracker() {
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: "1",
      name: "Folic Acid",
      dosage: "400mcg",
      frequency: "Daily",
      startDate: "2025-01-01",
      notes: "Prenatal vitamin",
      reminders: true,
      sideEffects: [],
    },
    {
      id: "2",
      name: "Clomid",
      dosage: "50mg",
      frequency: "Days 3-7 of cycle",
      startDate: "2025-01-15",
      endDate: "2025-03-15",
      notes: "Ovulation induction",
      reminders: true,
      sideEffects: ["Hot flashes", "Mood swings"],
    },
  ])
  const [isAddingMedication, setIsAddingMedication] = useState(false)
  const [newMedication, setNewMedication] = useState<Partial<Medication>>({
    reminders: true,
  })

  const activeMedications = medications.filter((med) => !med.endDate || new Date(med.endDate) > new Date())
  const pastMedications = medications.filter((med) => med.endDate && new Date(med.endDate) <= new Date())

  const handleAddMedication = () => {
    if (newMedication.name && newMedication.dosage && newMedication.frequency && newMedication.startDate) {
      const medication: Medication = {
        id: Date.now().toString(),
        name: newMedication.name,
        dosage: newMedication.dosage,
        frequency: newMedication.frequency,
        startDate: newMedication.startDate,
        endDate: newMedication.endDate,
        notes: newMedication.notes,
        reminders: newMedication.reminders || false,
        sideEffects: [],
      }
      setMedications((prev) => [...prev, medication])
      setNewMedication({ reminders: true })
      setIsAddingMedication(false)
    }
  }

  const handleStopMedication = (id: string) => {
    setMedications((prev) =>
      prev.map((med) => (med.id === id ? { ...med, endDate: new Date().toISOString().split("T")[0] } : med)),
    )
  }

  return (
    <div className="space-y-6">
      {/* Add Medication Button */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Medication Tracker</h3>
          <p className="text-sm text-muted-foreground">Manage your medications and supplements</p>
        </div>
        <Dialog open={isAddingMedication} onOpenChange={setIsAddingMedication}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Medication
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Medication</DialogTitle>
              <DialogDescription>Add a medication or supplement to your tracker</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="med-name">Medication Name</Label>
                <Input
                  id="med-name"
                  value={newMedication.name || ""}
                  onChange={(e) => setNewMedication((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Folic Acid"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input
                    id="dosage"
                    value={newMedication.dosage || ""}
                    onChange={(e) => setNewMedication((prev) => ({ ...prev, dosage: e.target.value }))}
                    placeholder="e.g., 400mcg"
                  />
                </div>
                <div>
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select onValueChange={(value) => setNewMedication((prev) => ({ ...prev, frequency: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Daily">Daily</SelectItem>
                      <SelectItem value="Twice daily">Twice daily</SelectItem>
                      <SelectItem value="Three times daily">Three times daily</SelectItem>
                      <SelectItem value="Weekly">Weekly</SelectItem>
                      <SelectItem value="As needed">As needed</SelectItem>
                      <SelectItem value="Cycle specific">Cycle specific</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={newMedication.startDate || ""}
                    onChange={(e) => setNewMedication((prev) => ({ ...prev, startDate: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="end-date">End Date (Optional)</Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={newMedication.endDate || ""}
                    onChange={(e) => setNewMedication((prev) => ({ ...prev, endDate: e.target.value }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={newMedication.notes || ""}
                  onChange={(e) => setNewMedication((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="Any additional notes..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingMedication(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddMedication}>Add Medication</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Active Medications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5" />
            Active Medications ({activeMedications.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeMedications.map((medication) => (
              <div key={medication.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{medication.name}</h4>
                      <Badge variant="outline">{medication.dosage}</Badge>
                      {medication.reminders && (
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          Reminders On
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      <strong>Frequency:</strong> {medication.frequency}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      <strong>Started:</strong> {new Date(medication.startDate).toLocaleDateString()}
                    </p>
                    {medication.notes && (
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Notes:</strong> {medication.notes}
                      </p>
                    )}
                    {medication.sideEffects && medication.sideEffects.length > 0 && (
                      <div className="flex items-center gap-1 text-sm text-amber-600">
                        <AlertTriangle className="h-3 w-3" />
                        <span>Side effects: {medication.sideEffects.join(", ")}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleStopMedication(medication.id)}>
                      Stop
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            {activeMedications.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No active medications. Add one to get started.</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Past Medications */}
      {pastMedications.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Past Medications ({pastMedications.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pastMedications.map((medication) => (
                <div key={medication.id} className="flex items-center justify-between p-3 border rounded-lg bg-gray-50">
                  <div>
                    <h4 className="font-medium">{medication.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(medication.startDate).toLocaleDateString()} -{" "}
                      {medication.endDate && new Date(medication.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant="secondary">Completed</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
