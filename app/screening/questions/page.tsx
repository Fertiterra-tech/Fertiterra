import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"

export default function ScreeningQuestionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
        <div className="container max-w-3xl">
          <Card className="p-8 md:p-12 bg-white shadow-lg text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-6 text-gray-900">Detailed Questions Coming Soon</h1>
            <p className="text-lg text-gray-600 mb-4">
              Thank you for completing the initial screening. We're preparing personalized questions based on your
              selection.
            </p>
            <p className="text-gray-500">
              This page is ready to accept question sets for each screening option via a simple JSON structure.
            </p>
          </Card>
        </div>
      </main>
    </div>
  )
}
