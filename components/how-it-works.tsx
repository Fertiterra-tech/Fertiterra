import { CheckCircle2, Package, Calendar, FileText } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes fertility testing and treatment accessible to everyone.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-4">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Order Your Kit</h3>
            <p className="text-gray-600">
              Choose the fertility test kit that's right for you and have it delivered to your door.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-4">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Your Test</h3>
            <p className="text-gray-600">
              Follow the simple instructions to collect your sample and send it back to our lab.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-4">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Your Results</h3>
            <p className="text-gray-600">Receive comprehensive results and insights about your fertility health.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-white shadow-sm">
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Plan</h3>
            <p className="text-gray-600">
              Connect with our fertility specialists to create your customized treatment plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
