"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
import { Target, Plus, CheckCircle, Calendar, TrendingUp } from "lucide-react"

type HealthGoal = {
  id: string
  title: string
  description: string
  category: "fertility" | "lifestyle" | "medical" | "nutrition"
  targetDate: string
  progress: number
  status: "active" | "completed" | "paused"
  milestones: string[]
  completedMilestones: string[]
}

export function HealthGoals() {
  const [goals, setGoals] = useState<HealthGoal[]>([
    {
      id: "1",
      title: "Track ovulation for 3 months",
      description: "Use ovulation tests and track basal body temperature daily",
      category: "fertility",
      targetDate: "2025-04-30",
      progress: 65,
      status: "active",
      milestones: [
        "Purchase ovulation test kit",
        "Track BBT for 1 month",
        "Track BBT for 2 months",
        "Track BBT for 3 months",
      ],
      completedMilestones: ["Purchase ovulation test kit", "Track BBT for 1 month", "Track BBT for 2 months"],
    },
    {
      id: "2",
      title: "Improve diet quality",
      description: "Eat more fertility-supporting foods and reduce processed foods",
      category: "nutrition",
      targetDate: "2025-06-01",
      progress: 40,
      status: "active",
      milestones: [
        "Plan weekly meals",
        "Increase leafy greens intake",
        "Reduce sugar consumption",
        "Add omega-3 rich foods",
      ],
      completedMilestones: ["Plan weekly meals", "Increase leafy greens intake"],
    },
  ])
  const [isAddingGoal, setIsAddingGoal] = useState(false)
  const [newGoal, setNewGoal] = useState<Partial<HealthGoal>>({
    status: "active",
    progress: 0,
    milestones: [],
    completedMilestones: [],
  })

  const activeGoals = goals.filter((goal) => goal.status === "active")
  const completedGoals = goals.filter((goal) => goal.status === "completed")

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fertility":
        return "bg-rose-100 text-rose-800"
      case "lifestyle":
        return "bg-blue-100 text-blue-800"
      case "medical":
        return "bg-green-100 text-green-800"
      case "nutrition":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleAddGoal = () => {
    if (newGoal.title && newGoal.description && newGoal.category && newGoal.targetDate) {
      const goal: HealthGoal = {
        id: Date.now().toString(),
        title: newGoal.title,
        description: newGoal.description,
        category: newGoal.category as any,
        targetDate: newGoal.targetDate,
        progress: 0,
        status: "active",
        milestones: [],
        completedMilestones: [],
      }
      setGoals((prev) => [...prev, goal])
      setNewGoal({
        status: "active",
        progress: 0,
        milestones: [],
        completedMilestones: [],
      })
      setIsAddingGoal(false)
    }
  }

  const updateGoalProgress = (goalId: string, newProgress: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId
          ? { ...goal, progress: newProgress, status: newProgress >= 100 ? "completed" : "active" }
          : goal,
      ),
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Health Goals</h3>
          <p className="text-sm text-muted-foreground">Set and track your fertility and health objectives</p>
        </div>
        <Dialog open={isAddingGoal} onOpenChange={setIsAddingGoal}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Health Goal</DialogTitle>
              <DialogDescription>Set a new goal to track your progress</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="goal-title">Goal Title</Label>
                <Input
                  id="goal-title"
                  value={newGoal.title || ""}
                  onChange={(e) => setNewGoal((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Track ovulation for 3 months"
                />
              </div>
              <div>
                <Label htmlFor="goal-description">Description</Label>
                <Textarea
                  id="goal-description"
                  value={newGoal.description || ""}
                  onChange={(e) => setNewGoal((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your goal in detail..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setNewGoal((prev) => ({ ...prev, category: value as any }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fertility">Fertility</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      <SelectItem value="medical">Medical</SelectItem>
                      <SelectItem value="nutrition">Nutrition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="target-date">Target Date</Label>
                  <Input
                    id="target-date"
                    type="date"
                    value={newGoal.targetDate || ""}
                    onChange={(e) => setNewGoal((prev) => ({ ...prev, targetDate: e.target.value }))}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingGoal(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddGoal}>Add Goal</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Active Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Active Goals ({activeGoals.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {activeGoals.map((goal) => (
              <div key={goal.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{goal.title}</h4>
                      <Badge className={getCategoryColor(goal.category)}>{goal.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{goal.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Target: {new Date(goal.targetDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {goal.progress}% complete
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>

                  {goal.milestones.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium mb-2">Milestones</h5>
                      <div className="space-y-1">
                        {goal.milestones.map((milestone, index) => {
                          const isCompleted = goal.completedMilestones.includes(milestone)
                          return (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className={`h-4 w-4 ${isCompleted ? "text-green-600" : "text-gray-300"}`} />
                              <span className={isCompleted ? "line-through text-muted-foreground" : ""}>
                                {milestone}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateGoalProgress(goal.id, Math.min(goal.progress + 25, 100))}
                    >
                      Update Progress
                    </Button>
                    {goal.progress < 100 && (
                      <Button variant="outline" size="sm" onClick={() => updateGoalProgress(goal.id, 100)}>
                        Mark Complete
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {activeGoals.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No active goals. Add one to get started on your health journey.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Completed Goals */}
      {completedGoals.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Completed Goals ({completedGoals.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {completedGoals.map((goal) => (
                <div key={goal.id} className="flex items-center justify-between p-3 border rounded-lg bg-green-50">
                  <div>
                    <h4 className="font-medium text-green-800">{goal.title}</h4>
                    <p className="text-sm text-green-600">
                      Completed on {new Date(goal.targetDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Completed
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
