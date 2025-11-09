"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card } from "@/components/ui/card"

const screeningOptions = [
  "I am just curious",
  "I am planning for babies in the future",
  "I am experiencing symptoms",
  "I am actively trying to conceive",
  "I am thinking about egg freezing",
  "I am thinking about IVF",
  "I think I'm going through perimenopause",
  "I am perimenopausal",
  "I am menopausal",
]

export default function ScreeningPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string>("")

  const handleNext = () => {
    if (selectedOption) {
      // Save to session storage for persistence
      sessionStorage.setItem("screeningSelection", selectedOption)

      // Navigate to next step (to be implemented with detailed questions)
      router.push("/screening/questions")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
        <div className="container max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-gray-900">
              Quick screening — tell us who you are
            </h1>
            <p className="text-lg text-gray-600">Which of the following best describes you?</p>
          </div>

          <Card className="p-6 md:p-8 bg-white shadow-lg">
            <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-4">
              {screeningOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-rose-300 hover:bg-rose-50/50 transition-all cursor-pointer group"
                  onClick={() => setSelectedOption(option)}
                >
                  <RadioGroupItem value={option} id={`option-${index}`} className="shrink-0" />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 text-base cursor-pointer font-medium text-gray-900 group-hover:text-rose-600 transition-colors"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleNext}
                disabled={!selectedOption}
                size="lg"
                className="w-full md:w-auto min-w-[200px] bg-rose-600 hover:bg-rose-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-lg py-6"
              >
                Next
              </Button>
            </div>
          </Card>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Your responses are private and will help us personalize your experience.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
