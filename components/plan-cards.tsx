import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlanCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-teal-50 to-purple-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-teal-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-64 h-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-teal-100 to-purple-100 px-3 py-1 text-sm text-teal-700">
              Our Plans
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-teal-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
              Choose Your Fertility Journey
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Select the plan that best fits your current needs and goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-8">
          <Card className="flex flex-col border-teal-100 bg-white/80 backdrop-blur-sm shadow-md transform transition-transform hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-teal-700">Basic Fertility Checkup</CardTitle>
              <CardDescription>For those curious about their fertility health</CardDescription>
              <div className="mt-4 text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                $5
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-500" />
                  <span>Personalized fertility report</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-500" />
                  <span>15-minute doctor consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-500" />
                  <span>Basic fertility insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-500" />
                  <span>Future planning guidance</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/plans/basic" className="w-full">
                <Button className="w-full gap-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-rose-200 bg-gradient-to-b from-rose-50 to-rose-100/50 backdrop-blur-sm shadow-lg transform transition-transform hover:scale-105">
            <CardHeader className="pb-2">
              <div className="rounded-full bg-gradient-to-r from-rose-400 to-rose-500 px-3 py-1 text-sm text-white w-fit">
                Most Popular
              </div>
              <CardTitle className="mt-2 text-rose-700">TTC Plan</CardTitle>
              <CardDescription>For couples trying to conceive</CardDescription>
              <div className="mt-4 text-4xl font-bold bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">
                $200
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>At-home fertility test kits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>AMH & sperm quality analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Personalized TTC action plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>30-minute expert consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-rose-500" />
                  <span>Fertility maximizing strategies</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/plans/ttc" className="w-full">
                <Button className="w-full gap-1 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-purple-100 bg-white/80 backdrop-blur-sm shadow-md transform transition-transform hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-700">Perimenopause Plan</CardTitle>
              <CardDescription>For managing hormonal transitions</CardDescription>
              <div className="mt-4 text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                $170
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-lg font-semibold text-purple-600 mb-2">Coming Soon</div>
                <p className="text-center text-muted-foreground">
                  We're working on this plan and will launch it soon. Stay tuned!
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled
                className="w-full gap-1 bg-gradient-to-r from-purple-500 to-purple-600 opacity-70 cursor-not-allowed"
              >
                Coming Soon <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-teal-100 bg-white/80 backdrop-blur-sm shadow-md transform transition-transform hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-teal-700">General Wellness</CardTitle>
              <CardDescription>For improving reproductive health</CardDescription>
              <div className="mt-4 text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                $60
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-lg font-semibold text-teal-600 mb-2">Coming Soon</div>
                <p className="text-center text-muted-foreground">
                  We're working on this plan and will launch it soon. Stay tuned!
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled
                className="w-full gap-1 bg-gradient-to-r from-teal-500 to-teal-600 opacity-70 cursor-not-allowed"
              >
                Coming Soon <ArrowRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
