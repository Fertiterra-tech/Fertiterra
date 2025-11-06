import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, MapPin, Shield, CheckCircle, Calendar, Stethoscope } from "lucide-react"

export default function UltrasoundPage() {
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
          <span className="text-gray-900">Pelvic Ultrasound Scan</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-4 bg-rose-100 text-rose-800">Book an appointment</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Pelvic Ultrasound Scan</h1>
              <p className="text-xl text-gray-600 mb-6">
                Get detailed insights into your reproductive health with our comprehensive pelvic ultrasound scans
                performed by certified sonographers.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Stethoscope className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Sonographers</h3>
                  <p className="text-gray-600">Certified professionals with fertility expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">30-Minute Appointment</h3>
                  <p className="text-gray-600">Comprehensive scan with detailed explanation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Multiple Locations</h3>
                  <p className="text-gray-600">Convenient clinics across Lagos and Abuja</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Same-Day Results</h3>
                  <p className="text-gray-600">Immediate discussion of findings with report</p>
                </div>
              </div>
            </div>

            {/* What We Check */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What We Check During Your Scan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Ovarian Health</h4>
                    <p className="text-gray-600">Size, shape, and follicle count to assess ovarian reserve</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Uterine Structure</h4>
                    <p className="text-gray-600">Uterine lining thickness and overall uterine health</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Fallopian Tubes</h4>
                    <p className="text-gray-600">Assessment for any blockages or abnormalities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Cysts and Fibroids</h4>
                    <p className="text-gray-600">Detection of any growths that might affect fertility</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preparation */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How to Prepare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Drink 4-6 glasses of water 1 hour before your appointment</li>
                  <li>• Avoid urinating for 1 hour before the scan</li>
                  <li>• Wear comfortable, loose-fitting clothing</li>
                  <li>• Bring a list of current medications</li>
                  <li>• Schedule for days 5-10 of your menstrual cycle if possible</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Scan</CardTitle>
                <CardDescription>Professional pelvic ultrasound with expert analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">₦35,000</div>
                  <div className="text-gray-600">Including consultation</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Available Monday-Saturday</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Lagos & Abuja locations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Same-day results</span>
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book Your Scan</Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Questions about the procedure?{" "}
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
