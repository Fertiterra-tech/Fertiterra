import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { CheckCircle, Users, Heart, Star, Calendar, MessageCircle } from "lucide-react"

export default function TryingToConcievePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Your Journey to
                <span className="block text-rose-500">Conception</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Comprehensive support, expert guidance, and personalized care for couples actively trying to conceive.
                Start your 3-month journey with confidence.
              </p>

              {/* Stripe Payment Button */}
              <div className="mb-8">
                <a
                  href="https://buy.stripe.com/test_9B628rfL1aHwb9W8qqaR200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-[#635bff] hover:bg-[#5a52e8] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Start Your TTC Journey - $200
                  </Button>
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>3-Month Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span>Expert Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-rose-500" />
                  <span>Personalized Care</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Your TTC Plan</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everything you need for a successful conception journey, backed by medical expertise and personalized
                  support.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-rose-500" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Fertility Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Comprehensive health evaluation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Hormone level testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Ovulation tracking guidance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Expert Consultations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Monthly fertility specialist calls</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Nutritionist guidance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>24/7 support access</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-purple-500" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">Personalized Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Custom fertility roadmap</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Lifestyle optimization tips</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Progress tracking tools</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Month Journey Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your 3-Month Journey</h2>
                <p className="text-gray-600">
                  A structured approach to maximize your chances of conception with expert guidance every step of the
                  way.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Month 1: Foundation & Assessment</h3>
                    <p className="text-gray-600 mb-3">
                      Complete health evaluation, establish baseline metrics, and create your personalized fertility
                      plan.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Initial consultation with fertility specialist</li>
                      <li>• Comprehensive health and lifestyle assessment</li>
                      <li>• Hormone testing and analysis</li>
                      <li>• Personalized nutrition and supplement plan</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Month 2: Optimization & Tracking</h3>
                    <p className="text-gray-600 mb-3">
                      Fine-tune your approach based on initial results and implement advanced tracking methods.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Advanced ovulation tracking techniques</li>
                      <li>• Lifestyle optimization adjustments</li>
                      <li>• Partner health evaluation</li>
                      <li>• Stress management and wellness coaching</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Month 3: Results & Next Steps</h3>
                    <p className="text-gray-600 mb-3">
                      Evaluate progress, celebrate successes, and plan for continued support if needed.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Progress evaluation and results analysis</li>
                      <li>• Continued support planning</li>
                      <li>• Success celebration or next phase planning</li>
                      <li>• Long-term fertility health guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-gray-600">
                  Real couples, real results. See how our TTC program has helped families grow.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "After 8 months of trying, we joined the TTC program. Within 2 months, we got our positive test!
                      The personalized guidance made all the difference."
                    </p>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">Sarah & Michael</p>
                      <p className="text-gray-500">Lagos, Nigeria</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "The hormone testing revealed issues we didn't know about. With the right treatment plan, we
                      conceived in month 3 of the program!"
                    </p>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">Adaora & Chike</p>
                      <p className="text-gray-500">Abuja, Nigeria</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "The 24/7 support was incredible. Having experts to talk to during our journey reduced our stress
                      and kept us motivated."
                    </p>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">Kemi & Tunde</p>
                      <p className="text-gray-500">Port Harcourt, Nigeria</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment in Your Future</h2>
                <p className="text-gray-600">
                  Comprehensive 3-month program with everything you need to maximize your conception chances.
                </p>
              </div>

              <Card className="border-0 shadow-xl max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete TTC Program</h3>
                    <div className="text-4xl font-bold text-rose-500 mb-2">$200</div>
                    <p className="text-gray-500">One-time payment • 3-month program</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive fertility assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Monthly expert consultations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Personalized fertility plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">24/7 support access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Hormone testing & analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Nutrition & lifestyle guidance</span>
                    </div>
                  </div>

                  <a
                    href="https://buy.stripe.com/test_9B628rfL1aHwb9W8qqaR200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#635bff] hover:bg-[#5a52e8] text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      Start Your TTC Journey Now
                    </Button>
                  </a>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Secure payment powered by Stripe • 30-day money-back guarantee
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">Get answers to common questions about our TTC program.</p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How soon can I expect results?</h3>
                    <p className="text-gray-600">
                      While every couple is different, many of our clients see positive results within the first 2-3
                      months. Our program is designed to optimize your fertility health and timing for the best possible
                      outcomes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this program suitable for all ages?</h3>
                    <p className="text-gray-600">
                      Our TTC program is designed for women aged 18-42 and their partners. We customize our approach
                      based on age, health status, and individual circumstances.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      What if I don't conceive during the 3 months?
                    </h3>
                    <p className="text-gray-600">
                      We offer continued support options and can help you transition to more advanced fertility
                      treatments if needed. Our goal is to support you throughout your entire fertility journey.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Do you provide support for male partners?
                    </h3>
                    <p className="text-gray-600">
                      Male fertility is equally important. We include male health assessments, lifestyle guidance, and
                      support for both partners throughout the program.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of couples who have successfully conceived with our expert guidance and support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href="https://buy.stripe.com/test_9B628rfL1aHwb9W8qqaR200" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#635bff] hover:bg-[#5a52e8] text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Start Your TTC Journey - $200
                  </Button>
                </a>

                <Link href="/consultation">
                  <Button
                    variant="outline"
                    className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors duration-300 bg-transparent"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Free Consultation
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-gray-500">
                Questions? Contact our fertility specialists at{" "}
                <a href="mailto:support@fertiterratechnologies.com" className="text-rose-500 hover:underline">
                  support@fertiterratechnologies.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
