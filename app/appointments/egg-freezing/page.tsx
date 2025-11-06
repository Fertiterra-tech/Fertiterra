import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Snowflake, Shield, Calendar, Users, Award, AlertCircle } from "lucide-react"

export default function EggFreezingPage() {
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
          <span className="text-gray-900">Egg Freezing</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-4 bg-rose-100 text-rose-800">Book an appointment</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Egg Freezing (Oocyte Cryopreservation)</h1>
              <p className="text-xl text-gray-600 mb-6">
                Preserve your fertility for the future with advanced egg freezing technology. Take control of your
                reproductive timeline with our comprehensive egg freezing program.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Snowflake className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Advanced Vitrification</h3>
                  <p className="text-gray-600">State-of-the-art flash-freezing technology</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Specialists</h3>
                  <p className="text-gray-600">Board-certified reproductive endocrinologists</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Secure Storage</h3>
                  <p className="text-gray-600">24/7 monitored cryogenic storage facilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Comprehensive Support</h3>
                  <p className="text-gray-600">Full medical and emotional support throughout</p>
                </div>
              </div>
            </div>

            {/* The Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>The Egg Freezing Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Initial Consultation & Testing</h4>
                    <p className="text-gray-600">Comprehensive fertility assessment, blood work, and ultrasound</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Ovarian Stimulation</h4>
                    <p className="text-gray-600">
                      10-14 days of hormone injections to stimulate multiple egg development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Monitoring</h4>
                    <p className="text-gray-600">Regular ultrasounds and blood tests to track egg development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Egg Retrieval</h4>
                    <p className="text-gray-600">Minimally invasive procedure under light sedation (20-30 minutes)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-rose-100 text-rose-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">
                    5
                  </div>
                  <div>
                    <h4 className="font-medium">Vitrification & Storage</h4>
                    <p className="text-gray-600">Eggs are flash-frozen and stored in secure cryogenic tanks</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Who Should Consider */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Who Should Consider Egg Freezing?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Women in their 20s and early 30s who want to delay childbearing</li>
                  <li>• Career-focused women who want reproductive flexibility</li>
                  <li>• Those facing medical treatments that may affect fertility (chemotherapy, etc.)</li>
                  <li>• Women with family history of early menopause</li>
                  <li>• Those diagnosed with conditions like endometriosis or PCOS</li>
                  <li>• Women who haven't found the right partner yet</li>
                  <li>• Military deployment or extended travel plans</li>
                </ul>
              </CardContent>
            </Card>

            {/* Success Rates */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Success Rates & Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Age-Related Success Rates</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Under 30: 85-90% survival rate</li>
                      <li>• 30-35: 80-85% survival rate</li>
                      <li>• 35-40: 70-80% survival rate</li>
                      <li>• Over 40: 60-70% survival rate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Important Factors</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Younger age = better outcomes</li>
                      <li>• Number of eggs retrieved matters</li>
                      <li>• Individual response varies</li>
                      <li>• No guarantee of pregnancy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Costs & Storage */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Investment & Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-800">Important Investment Information</h4>
                      <p className="text-yellow-700 text-sm">
                        Egg freezing is a significant financial investment. We offer payment plans and financing
                        options.
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Initial cycle: ₦800,000 - ₦1,200,000 (includes medications)</li>
                  <li>• Annual storage fee: ₦50,000 per year</li>
                  <li>• Future thawing and IVF: ₦400,000 - ₦600,000</li>
                  <li>• Payment plans available</li>
                  <li>• Insurance coverage varies</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Journey</CardTitle>
                <CardDescription>Book your egg freezing consultation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">₦15,000</div>
                  <div className="text-gray-600">Initial consultation</div>
                  <div className="text-sm text-gray-500 mt-1">Comprehensive assessment included</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Available 6 days a week</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Board-certified specialists</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Snowflake className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Advanced vitrification technology</span>
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book Consultation</Button>

                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="text-sm text-blue-800 font-medium">Free Information Session</p>
                  <p className="text-xs text-blue-600 mt-1">
                    Join our monthly webinar to learn more about egg freezing.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Questions about the process?{" "}
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
