"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) => (prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]))
  }

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      // Save to session storage for persistence
      sessionStorage.setItem("screeningSelections", JSON.stringify(selectedOptions))

      router.push("/screening/contact")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-white">
        <div className="container max-w-4xl px-4">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">So, what brings you here?</h1>
            <p className="text-base md:text-lg text-gray-700 mb-2">
              This helps our doctors tailor which hormones to test you for as well as creating your care plan and
              report.
            </p>
            <p className="text-base font-semibold text-gray-900">Please select one or more options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {screeningOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => toggleOption(option)}
                className={`
                  flex items-center gap-3 px-5 py-4 rounded-lg text-left transition-all
                  ${
                    selectedOptions.includes(option)
                      ? "bg-[#e8d5c4] border-2 border-[#d4b5a0]"
                      : "bg-[#f5ebe1] border-2 border-transparent hover:border-[#e8d5c4]"
                  }
                `}
              >
                <Plus
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    selectedOptions.includes(option) ? "rotate-45 text-gray-700" : "text-gray-600"
                  }`}
                />
                <span className="text-base text-gray-900 font-medium">{option}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-start">
            <Button
              onClick={handleNext}
              disabled={selectedOptions.length === 0}
              size="lg"
              className="
                rounded-full px-8 py-6 text-base font-medium
                disabled:bg-[#d1d5db] disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-100
                bg-gray-900 hover:bg-gray-800 text-white
                transition-colors
              "
            >
              Next
              <span className="ml-2">⊙</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
