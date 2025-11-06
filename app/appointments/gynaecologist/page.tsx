import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Shield, CheckCircle, Calendar, Stethoscope, Award } from "lucide-react"

export default function GynaecologistPage() {
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
          <span className="text-gray-900">Private Gynaecologist Consultation</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-4 bg-rose-100 text-rose-800">Book an appointment</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Private Gynaecologist Consultation</h1>
              <p className="text-xl text-gray-600 mb-6">
                Consult with experienced gynaecologists specializing in reproductive health, fertility, and women's
                wellness in a private, comfortable setting.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Board-Certified Specialists</h3>
                  <p className="text-gray-600">Experienced gynaecologists with fertility expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">60-Minute Consultation</h3>
                  <p className="text-gray-600">Comprehensive examination and discussion</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Complete Privacy</h3>
                  <p className="text-gray-600">Confidential consultations in private rooms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Stethoscope className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Comprehensive Care</h3>
                  <p className="text-gray-600">Full examination with treatment recommendations</p>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What's Included in Your Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Detailed Medical History</h4>
                    <p className="text-gray-600">Comprehensive review of your reproductive and general health</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Physical Examination</h4>
                    <p className="text-gray-600">Professional gynecological examination as needed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Fertility Assessment</h4>
                    <p className="text-gray-600">Evaluation of your fertility health and potential concerns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Treatment Plan</h4>
                    <p className="text-gray-600">Personalized recommendations and next steps</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Test Recommendations</h4>
                    <p className="text-gray-600">Guidance on additional tests if needed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Concerns */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Common Concerns We Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Irregular menstrual cycles</li>
                    <li>• Fertility concerns and planning</li>
                    <li>• PCOS and hormonal imbalances</li>
                    <li>• Endometriosis symptoms</li>
                    <li>• Pelvic pain and discomfort</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Contraception counseling</li>
                    <li>• Preconception health optimization</li>
                    <li>• Menopause management</li>
                    <li>• Sexual health concerns</li>
                    <li>• Preventive gynecological care</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Our Specialists */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Our Specialists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our team includes board-certified gynaecologists with specialized training in:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reproductive endocrinology and fertility</li>
                  <li>• Minimally invasive gynecological surgery</li>
                  <li>• Hormonal disorders and PCOS management</li>
                  <li>• Adolescent and young adult gynecology</li>
                  <li>• Menopause and hormone therapy</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Book Consultation</CardTitle>
                <CardDescription>Expert gynecological care with fertility focus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">₦45,000</div>
                  <div className="text-gray-600">60-minute consultation</div>
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
                    <Shield className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Complete privacy & confidentiality</span>
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book Consultation</Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Need to discuss your case first?{" "}
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
