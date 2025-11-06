import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Heart, CheckCircle } from "lucide-react"

export default function PlanningFutureChildrenPage() {
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
          <Link href="/learn" className="hover:text-rose-500">
            Learn
          </Link>
          <span>/</span>
          <span className="text-gray-900">Planning Future Children</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Learn</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Planning Future Children</h1>
            <p className="text-xl text-gray-600">
              Whether you're thinking about starting a family in the next few years or just want to understand your
              fertility better, planning ahead gives you more options and peace of mind.
            </p>
          </div>

          {/* Key Topics */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Calendar className="h-8 w-8 text-rose-500 mb-2" />
                <CardTitle>Optimal Timing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Understanding your biological clock and the best age ranges for conception and pregnancy.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Peak fertility years: 20s to early 30s</li>
                  <li>• Gradual decline after 32</li>
                  <li>• More significant decline after 37</li>
                  <li>• Individual variation is important</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-rose-500 mb-2" />
                <CardTitle>Preconception Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Optimizing your health 3-6 months before trying to conceive improves outcomes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Start taking folic acid supplements</li>
                  <li>• Maintain healthy weight</li>
                  <li>• Regular exercise routine</li>
                  <li>• Limit alcohol and quit smoking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Fertility Assessment */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Understanding Your Fertility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Even if you're not ready to start trying immediately, understanding your current fertility status can
                help you make informed decisions about timing.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">AMH Testing</h4>
                  <p className="text-sm text-gray-600">Measures ovarian reserve and egg quantity</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Hormone Panel</h4>
                  <p className="text-sm text-gray-600">Checks reproductive hormone levels</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cycle Tracking</h4>
                  <p className="text-sm text-gray-600">Understanding your menstrual patterns</p>
                </div>
              </div>

              <Link href="/test-kits/hormone-fertility">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">Learn About Our Fertility Test</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Lifestyle Factors */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Lifestyle Factors That Impact Fertility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Positive Factors</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Regular moderate exercise</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Balanced, nutritious diet</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Adequate sleep (7-9 hours)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Stress management techniques</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Maintaining healthy weight</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Factors to Limit</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>&gt; Excessive alcohol consumption</li>
                    <li>&gt; Smoking and tobacco use</li>
                    <li>&gt; High caffeine intake (&gt;400mg/day)</li>
                    <li>&gt; Extreme exercise or weight loss</li>
                    <li>&gt; Chronic high stress levels</li>
                    <li>&gt; Exposure to environmental toxins</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Financial Planning */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Financial Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Planning for the financial aspects of pregnancy, childbirth, and raising children in Nigeria.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Immediate Costs</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Prenatal care and checkups</li>
                    <li>• Delivery and hospital costs</li>
                    <li>• Baby essentials and equipment</li>
                    <li>• Maternity leave considerations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Long-term Planning</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Education savings</li>
                    <li>• Healthcare and insurance</li>
                    <li>• Childcare costs</li>
                    <li>• Family housing needs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partner Considerations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Partner and Relationship Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Important conversations and considerations for couples planning their family journey.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Discussing family size preferences</li>
                <li>• Timing and career considerations</li>
                <li>• Parenting styles and values</li>
                <li>• Financial responsibilities and planning</li>
                <li>• Support systems and extended family</li>
                <li>• What if conception takes longer than expected?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">If You're Planning in 1-2 Years</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Consider fertility testing to understand your baseline</li>
                    <li>• Start optimizing your health and lifestyle</li>
                    <li>• Begin taking prenatal vitamins</li>
                    <li>• Schedule a preconception consultation</li>
                  </ul>
                  <Link href="/appointments/advisor-call" className="inline-block mt-4">
                    <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                      Book Fertility Advisor Call
                    </Button>
                  </Link>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">If You're Planning in 3+ Years</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Focus on maintaining overall health</li>
                    <li>• Consider egg freezing if you're over 30</li>
                    <li>• Track your menstrual cycles</li>
                    <li>• Build your support network</li>
                  </ul>
                  <Link href="/appointments/egg-freezing" className="inline-block mt-4">
                    <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                      Learn About Egg Freezing
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="bg-rose-50 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h3>
            <p className="text-gray-600 mb-6">
              Get personalized guidance on your fertility journey with our comprehensive hormone and fertility test.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/test-kits/hormone-fertility">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">Order Your Test Kit</Button>
              </Link>
              <Link href="/appointments/advisor-call">
                <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                  Speak to an Advisor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
