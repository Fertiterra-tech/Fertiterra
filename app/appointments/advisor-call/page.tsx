import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Users, Video, CheckCircle, Calendar, MessageCircle } from "lucide-react"

export default function AdvisorCallPage() {
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
          <span className="text-gray-900">Hormone & Fertility Advisor Call</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-4 bg-rose-100 text-rose-800">Book an appointment</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Hormone & Fertility Advisor Call</h1>
              <p className="text-xl text-gray-600 mb-6">
                Get personalized guidance from our certified fertility advisors to understand your hormone health and
                fertility journey.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Video className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Virtual Consultation</h3>
                  <p className="text-gray-600">Secure video call from the comfort of your home</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">45-Minute Session</h3>
                  <p className="text-gray-600">Comprehensive discussion about your fertility goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Advisors</h3>
                  <p className="text-gray-600">Certified fertility and hormone health specialists</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Follow-up Support</h3>
                  <p className="text-gray-600">Email summary and next steps after your call</p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What to Expect During Your Call</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Health History Review</h4>
                    <p className="text-gray-600">Discussion of your menstrual cycle, symptoms, and health background</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Goal Setting</h4>
                    <p className="text-gray-600">Understanding your fertility timeline and family planning goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Test Recommendations</h4>
                    <p className="text-gray-600">Personalized advice on which tests might benefit you</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Action Plan</h4>
                    <p className="text-gray-600">Clear next steps and recommendations for your fertility journey</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Who Should Book */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Who Should Book This Call?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Women planning to start a family in the next 1-2 years</li>
                  <li>• Those experiencing irregular periods or fertility concerns</li>
                  <li>• Anyone wanting to understand their hormone health better</li>
                  <li>• Couples trying to conceive for 6+ months</li>
                  <li>• Women considering egg freezing</li>
                  <li>• Those with PCOS, endometriosis, or other reproductive conditions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Call</CardTitle>
                <CardDescription>Get expert guidance on your fertility journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">₦25,000</div>
                  <div className="text-gray-600">45-minute consultation</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Available 7 days a week</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Secure video consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Follow-up email summary</span>
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book Your Call</Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Have questions?{" "}
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
