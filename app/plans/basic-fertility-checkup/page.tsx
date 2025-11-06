"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { ArrowRight, CheckCircle } from "lucide-react"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  age: string

  // Health Information
  menstrualCycleRegular: string
  lastPeriodDate: string
  tryingToConceive: string
  howLongTrying: string
  previousPregnancies: string
  currentMedications: string
  medicalConditions: string[]
  symptoms: string[]

  // Lifestyle
  smokingStatus: string
  alcoholConsumption: string
  exerciseFrequency: string
  stressLevel: string

  // Goals and Concerns
  primaryConcerns: string
  specificQuestions: string

  // Newsletter
  subscribeNewsletter: boolean
}

const medicalConditions = [
  "PCOS (Polycystic Ovary Syndrome)",
  "Endometriosis",
  "Thyroid disorders",
  "Diabetes",
  "High blood pressure",
  "Autoimmune conditions",
  "Previous miscarriages",
  "Irregular periods",
  "None of the above",
]

const symptoms = [
  "Irregular periods",
  "Heavy or painful periods",
  "Difficulty getting pregnant",
  "Mood swings",
  "Fatigue",
  "Weight changes",
  "Acne",
  "Hair loss or excess hair growth",
  "Hot flashes",
  "Sleep problems",
  "Low libido",
  "Pelvic pain",
]

export default function BasicFertilityCheckupPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    menstrualCycleRegular: "",
    lastPeriodDate: "",
    tryingToConceive: "",
    howLongTrying: "",
    previousPregnancies: "",
    currentMedications: "",
    medicalConditions: [],
    symptoms: [],
    smokingStatus: "",
    alcoholConsumption: "",
    exerciseFrequency: "",
    stressLevel: "",
    primaryConcerns: "",
    specificQuestions: "",
    subscribeNewsletter: true,
  })

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayToggle = (field: "medicalConditions" | "symptoms", value: string) => {
    const currentArray = formData[field] as string[]
    if (currentArray.includes(value)) {
      updateFormData(
        field,
        currentArray.filter((item) => item !== value),
      )
    } else {
      updateFormData(field, [...currentArray, value])
    }
  }

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Submit form data and notify FertiTerra
      const response = await fetch("/api/fertility-checkup/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Redirect to payment page
        router.push("/plans/basic-fertility-checkup/payment")
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalSteps = 5

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Basic Fertility Checkup</h1>
              <p className="text-lg text-gray-600">Help us understand your health better with a few questions</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-rose-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
                      <p className="text-gray-600">Let's start with some basic information about you.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="max-w-xs">
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="18"
                        max="65"
                        value={formData.age}
                        onChange={(e) => updateFormData("age", e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.subscribeNewsletter}
                        onCheckedChange={(checked) => updateFormData("subscribeNewsletter", checked)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for fertility tips and updates
                      </Label>
                    </div>
                  </div>
                )}

                {/* Step 2: Menstrual Health */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Menstrual Health</h2>
                      <p className="text-gray-600">Tell us about your menstrual cycle and reproductive health.</p>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Are your menstrual cycles regular? *</Label>
                      <RadioGroup
                        value={formData.menstrualCycleRegular}
                        onValueChange={(value) => updateFormData("menstrualCycleRegular", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="regular-yes" />
                          <Label htmlFor="regular-yes">Yes, they come every 21-35 days</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="regular-no" />
                          <Label htmlFor="regular-no">No, they are irregular</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unsure" id="regular-unsure" />
                          <Label htmlFor="regular-unsure">I'm not sure</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="lastPeriod">When was your last period? *</Label>
                      <Input
                        id="lastPeriod"
                        type="date"
                        value={formData.lastPeriodDate}
                        onChange={(e) => updateFormData("lastPeriodDate", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label className="text-base font-medium">Are you currently trying to conceive? *</Label>
                      <RadioGroup
                        value={formData.tryingToConceive}
                        onValueChange={(value) => updateFormData("tryingToConceive", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="trying-yes" />
                          <Label htmlFor="trying-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="trying-no" />
                          <Label htmlFor="trying-no">No</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="planning" id="trying-planning" />
                          <Label htmlFor="trying-planning">Planning to in the future</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {formData.tryingToConceive === "yes" && (
                      <div>
                        <Label className="text-base font-medium">How long have you been trying? *</Label>
                        <RadioGroup
                          value={formData.howLongTrying}
                          onValueChange={(value) => updateFormData("howLongTrying", value)}
                          className="mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="less-than-6" id="trying-less-6" />
                            <Label htmlFor="trying-less-6">Less than 6 months</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6-12" id="trying-6-12" />
                            <Label htmlFor="trying-6-12">6-12 months</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1-2-years" id="trying-1-2" />
                            <Label htmlFor="trying-1-2">1-2 years</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="more-than-2" id="trying-more-2" />
                            <Label htmlFor="trying-more-2">More than 2 years</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    )}

                    <div>
                      <Label className="text-base font-medium">Have you been pregnant before?</Label>
                      <RadioGroup
                        value={formData.previousPregnancies}
                        onValueChange={(value) => updateFormData("previousPregnancies", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="never" id="pregnant-never" />
                          <Label htmlFor="pregnant-never">Never</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes-live-birth" id="pregnant-live-birth" />
                          <Label htmlFor="pregnant-live-birth">Yes, with live birth(s)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes-miscarriage" id="pregnant-miscarriage" />
                          <Label htmlFor="pregnant-miscarriage">Yes, but ended in miscarriage(s)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="both" id="pregnant-both" />
                          <Label htmlFor="pregnant-both">Both live births and miscarriages</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 3: Medical History */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Medical History</h2>
                      <p className="text-gray-600">Help us understand your current health status.</p>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">
                        Do you have any of the following medical conditions? (Select all that apply)
                      </Label>
                      <div className="grid gap-3 md:grid-cols-2">
                        {medicalConditions.map((condition) => (
                          <div key={condition} className="flex items-center space-x-2">
                            <Checkbox
                              id={`condition-${condition}`}
                              checked={formData.medicalConditions.includes(condition)}
                              onCheckedChange={() => handleArrayToggle("medicalConditions", condition)}
                            />
                            <Label htmlFor={`condition-${condition}`} className="text-sm">
                              {condition}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-3 block">
                        Are you experiencing any of these symptoms? (Select all that apply)
                      </Label>
                      <div className="grid gap-3 md:grid-cols-2">
                        {symptoms.map((symptom) => (
                          <div key={symptom} className="flex items-center space-x-2">
                            <Checkbox
                              id={`symptom-${symptom}`}
                              checked={formData.symptoms.includes(symptom)}
                              onCheckedChange={() => handleArrayToggle("symptoms", symptom)}
                            />
                            <Label htmlFor={`symptom-${symptom}`} className="text-sm">
                              {symptom}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="medications">Current Medications</Label>
                      <Textarea
                        id="medications"
                        placeholder="Please list any medications, supplements, or vitamins you're currently taking..."
                        value={formData.currentMedications}
                        onChange={(e) => updateFormData("currentMedications", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Lifestyle */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Lifestyle Factors</h2>
                      <p className="text-gray-600">These factors can impact your fertility and overall health.</p>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Smoking Status *</Label>
                      <RadioGroup
                        value={formData.smokingStatus}
                        onValueChange={(value) => updateFormData("smokingStatus", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="never" id="smoke-never" />
                          <Label htmlFor="smoke-never">Never smoked</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="former" id="smoke-former" />
                          <Label htmlFor="smoke-former">Former smoker</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="current" id="smoke-current" />
                          <Label htmlFor="smoke-current">Current smoker</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Alcohol Consumption *</Label>
                      <RadioGroup
                        value={formData.alcoholConsumption}
                        onValueChange={(value) => updateFormData("alcoholConsumption", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="alcohol-none" />
                          <Label htmlFor="alcohol-none">I don't drink alcohol</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="occasional" id="alcohol-occasional" />
                          <Label htmlFor="alcohol-occasional">Occasionally (1-2 drinks per week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="alcohol-moderate" />
                          <Label htmlFor="alcohol-moderate">Moderate (3-7 drinks per week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="heavy" id="alcohol-heavy" />
                          <Label htmlFor="alcohol-heavy">Heavy (8+ drinks per week)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Exercise Frequency *</Label>
                      <RadioGroup
                        value={formData.exerciseFrequency}
                        onValueChange={(value) => updateFormData("exerciseFrequency", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="exercise-none" />
                          <Label htmlFor="exercise-none">Rarely or never</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="light" id="exercise-light" />
                          <Label htmlFor="exercise-light">Light (1-2 times per week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="exercise-moderate" />
                          <Label htmlFor="exercise-moderate">Moderate (3-4 times per week)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intense" id="exercise-intense" />
                          <Label htmlFor="exercise-intense">Intense (5+ times per week)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Current Stress Level *</Label>
                      <RadioGroup
                        value={formData.stressLevel}
                        onValueChange={(value) => updateFormData("stressLevel", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="stress-low" />
                          <Label htmlFor="stress-low">Low - I feel relaxed most of the time</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="stress-moderate" />
                          <Label htmlFor="stress-moderate">Moderate - Some stress but manageable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="stress-high" />
                          <Label htmlFor="stress-high">High - Often feeling overwhelmed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="very-high" id="stress-very-high" />
                          <Label htmlFor="stress-very-high">Very High - Constantly stressed</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Step 5: Goals and Concerns */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Your Goals and Concerns</h2>
                      <p className="text-gray-600">Help us understand what you hope to achieve with this checkup.</p>
                    </div>

                    <div>
                      <Label htmlFor="concerns">What are your primary fertility concerns or goals? *</Label>
                      <Textarea
                        id="concerns"
                        placeholder="Please describe your main concerns, goals, or what you hope to learn from this checkup..."
                        value={formData.primaryConcerns}
                        onChange={(e) => updateFormData("primaryConcerns", e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="questions">Any specific questions for our fertility specialist?</Label>
                      <Textarea
                        id="questions"
                        placeholder="Is there anything specific you'd like to discuss during your consultation?"
                        value={formData.specificQuestions}
                        onChange={(e) => updateFormData("specificQuestions", e.target.value)}
                        rows={3}
                      />
                    </div>

                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h3 className="font-medium text-rose-900 mb-2">What happens next?</h3>
                      <ul className="text-sm text-rose-800 space-y-1">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          We'll review your information and prepare for your consultation
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          You'll proceed to secure payment
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Schedule your consultation with our fertility specialist
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Receive personalized recommendations and next steps
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                  )}

                  <div className="ml-auto">
                    {currentStep < totalSteps ? (
                      <Button
                        onClick={handleNext}
                        className="bg-rose-500 hover:bg-rose-600"
                        disabled={
                          (currentStep === 1 &&
                            (!formData.firstName ||
                              !formData.lastName ||
                              !formData.email ||
                              !formData.phone ||
                              !formData.age)) ||
                          (currentStep === 2 &&
                            (!formData.menstrualCycleRegular ||
                              !formData.lastPeriodDate ||
                              !formData.tryingToConceive)) ||
                          (currentStep === 4 &&
                            (!formData.smokingStatus ||
                              !formData.alcoholConsumption ||
                              !formData.exerciseFrequency ||
                              !formData.stressLevel)) ||
                          (currentStep === 5 && !formData.primaryConcerns)
                        }
                      >
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        className="bg-rose-500 hover:bg-rose-600"
                        disabled={isSubmitting || !formData.primaryConcerns}
                      >
                        {isSubmitting ? "Submitting..." : "Proceed to Payment"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
