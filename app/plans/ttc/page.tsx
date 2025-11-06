import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Heart, Users, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FertiTerra - TTC Plan - Try to Conceive Support in Africa",
  description:
    "Comprehensive TTC support with at-home test kits, expert guidance, and personalized action plans for couples actively trying to conceive in Africa.",
}

export default function TTCPlanPage() {
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
          <Link href="/plans" className="hover:text-rose-500">
            Plans
          </Link>
          <span>/</span>
          <span className="text-gray-900">Trying to Conceive</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-green-100 text-green-800">TTC Plan</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Trying to Conceive Plan</h1>
            <p className="text-xl text-gray-600">
              Comprehensive support and guidance for couples ready to start their fertility journey. Get personalized
              insights, expert consultations, and the tools you need to optimize your chances of conception.
            </p>
          </div>

          {/* Plan Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-rose-500" />
                <span>What's Included in Your TTC Plan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Comprehensive Testing</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Hormone fertility test kit</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Ovulation tracking tools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Personalized health assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Male fertility screening</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Expert Support</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>1-on-1 fertility advisor consultation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Personalized nutrition guidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Lifestyle optimization plan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>24/7 support via WhatsApp</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-rose-500" />
                <span>Your 3-Month Journey</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Month 1: Assessment & Baseline</h4>
                    <p className="text-gray-600">
                      Complete comprehensive testing, receive personalized health assessment, and establish your
                      fertility baseline.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Month 2: Optimization & Tracking</h4>
                    <p className="text-gray-600">
                      Implement personalized lifestyle changes, begin cycle tracking, and receive ongoing support from
                      our experts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Month 3: Progress Review & Next Steps</h4>
                    <p className="text-gray-600">
                      Evaluate progress, adjust strategies as needed, and plan your continued fertility journey.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Stories */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-rose-500" />
                <span>Success Stories</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3 italic">
                    "The TTC plan gave us the confidence and knowledge we needed. We conceived in our second month!"
                  </p>
                  <p className="text-sm text-gray-600">- Sarah & Michael, Lagos</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3 italic">
                    "Having expert support made all the difference. The personalized guidance was invaluable."
                  </p>
                  <p className="text-sm text-gray-600">- Adaora & Chike, Abuja</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Start Your TTC Journey Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">$200</div>
                  <p className="text-gray-600">Complete 3-month TTC plan</p>
                  <p className="text-sm text-gray-500">One-time payment • No hidden fees</p>
                </div>

                <div className="mb-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Limited Time:</strong> Save $50 compared to individual services
                    </p>
                  </div>
                </div>

                <a
                  href="https://buy.stripe.com/test_9B628rfL1aHwb9W8qqaR200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full max-w-md"
                >
                  <Button
                    size="lg"
                    className="w-full bg-[#635bff] hover:bg-[#5a52e8] text-white px-8 py-4 text-lg font-semibold transition-colors duration-200"
                  >
                    Pay $200 - Start Your TTC Journey
                  </Button>
                </a>

                <p className="text-sm text-gray-500 mt-4">
                  Secure payment powered by Stripe &bull; 30-day money-back guarantee
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How quickly will I see results?</h4>
                  <p className="text-gray-600">
                    While every couple is different, many of our clients see improvements in their understanding of
                    their fertility within the first month, with conception often occurring within 3-6 months.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Is this plan suitable for both partners?</h4>
                  <p className="text-gray-600">
                    Yes! Our TTC plan includes guidance and testing for both partners, as male fertility is equally
                    important in the conception process.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What if I don't conceive within 3 months?</h4>
                  <p className="text-gray-600">
                    We provide ongoing support and can help you transition to more advanced fertility treatments if
                    needed. Our goal is to support you throughout your entire fertility journey.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Can I get a refund if I'm not satisfied?</h4>
                  <p className="text-gray-600">
                    Yes, we offer a 30-day money-back guarantee. If you're not completely satisfied with our service
                    within the first 30 days, we'll provide a full refund.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our fertility experts are here to help. Get in touch for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointments/advisor-call">
                <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50 bg-transparent">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
