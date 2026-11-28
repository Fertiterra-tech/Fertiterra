import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Users, Apple, CheckCircle, Calendar, BookOpen } from "lucide-react"

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-rose-500">
            Home
          </Link>
          <span>/</span>
          <Link href="/appointments" className="hover:text-rose-500">
            Appointments
          </Link>
          <span>/</span>
          <span className="text-gray-900">Fertility Nutrition Consultation</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-4 bg-rose-100 text-rose-800">Book an appointment</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Fertility Nutrition Consultation</h1>
              <p className="text-xl text-gray-600 mb-6">
                Optimize your fertility through personalized nutrition guidance from certified fertility nutritionists
                who understand the African diet and lifestyle.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Apple className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Fertility-Focused Nutrition</h3>
                  <p className="text-gray-600">Evidence-based dietary strategies for conception</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">60-Minute Session</h3>
                  <p className="text-gray-600">Comprehensive nutrition assessment and planning</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Certified Nutritionists</h3>
                  <p className="text-gray-600">Specialists in fertility and reproductive nutrition</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BookOpen className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Personalized Meal Plans</h3>
                  <p className="text-gray-600">Custom plans with local Nigerian foods</p>
                </div>
              </div>
            </div>

            {/* What's Covered */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What We'll Cover in Your Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Nutritional Assessment</h4>
                    <p className="text-gray-600">Complete evaluation of your current diet and eating patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Fertility-Boosting Foods</h4>
                    <p className="text-gray-600">Learn which foods enhance fertility and hormone balance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Supplement Guidance</h4>
                    <p className="text-gray-600">Personalized recommendations for fertility supplements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Meal Planning</h4>
                    <p className="text-gray-600">Practical meal plans using accessible Nigerian ingredients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Lifestyle Integration</h4>
                    <p className="text-gray-600">How to maintain healthy eating with your busy schedule</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nutrition Focus Areas */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Key Nutrition Areas for Fertility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Essential Nutrients</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Folate and B-vitamins</li>
                      <li>• Iron and zinc</li>
                      <li>• Omega-3 fatty acids</li>
                      <li>• Antioxidants (Vitamin C, E)</li>
                      <li>• Vitamin D optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Dietary Patterns</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Mediterranean-style eating</li>
                      <li>• Anti-inflammatory foods</li>
                      <li>• Blood sugar balance</li>
                      <li>• Healthy weight management</li>
                      <li>• Hydration optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Who Should Book */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Who Should Book This Consultation?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Women trying to conceive or planning pregnancy</li>
                  <li>• Those with PCOS, endometriosis, or hormonal imbalances</li>
                  <li>• Couples preparing for IVF or fertility treatments</li>
                  <li>• Women with irregular cycles or fertility concerns</li>
                  <li>• Anyone wanting to optimize their reproductive health</li>
                  <li>• Those struggling with weight management affecting fertility</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Book Consultation</CardTitle>
                <CardDescription>Personalized fertility nutrition guidance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">₦30,000</div>
                  <div className="text-gray-600">60-minute consultation + meal plan</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Available 7 days a week</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Apple className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Certified fertility nutritionists</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Personalized meal plans included</span>
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book Consultation</Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Questions about nutrition?{" "}
                    <Link href="/contact" className="text-rose-500 hover:underline">
                      Contact us
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
