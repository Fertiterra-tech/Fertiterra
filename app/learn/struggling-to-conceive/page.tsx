"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Heart, Clock, Phone, CheckCircle, AlertCircle, ArrowRight, Stethoscope, Brain, Activity } from "lucide-react"

export default function StrugglintToConceivePage() {
  const timelineSteps = [
    {
      month: "Month 1-6",
      title: "Initial Assessment",
      description: "Track cycles, lifestyle factors, and basic health markers",
      actions: ["Start cycle tracking", "Take fertility test", "Optimize lifestyle"],
    },
    {
      month: "Month 6-12",
      title: "Deeper Investigation",
      description: "Comprehensive testing and professional consultation",
      actions: ["Advanced hormone testing", "Partner evaluation", "Specialist consultation"],
    },
    {
      month: "Month 12+",
      title: "Treatment Options",
      description: "Explore assisted reproductive technologies and treatments",
      actions: ["IVF consultation", "Treatment planning", "Emotional support"],
    },
  ]

  const commonCauses = [
    {
      category: "Female Factors",
      icon: Heart,
      causes: [
        "Ovulation disorders (PCOS, thyroid issues)",
        "Blocked fallopian tubes",
        "Endometriosis",
        "Age-related egg quality decline",
        "Uterine or cervical problems",
      ],
    },
    {
      category: "Male Factors",
      icon: Activity,
      causes: [
        "Low sperm count or poor motility",
        "Abnormal sperm shape",
        "Hormonal imbalances",
        "Genetic factors",
        "Lifestyle factors (smoking, stress)",
      ],
    },
    {
      category: "Combined/Unknown",
      icon: Brain,
      causes: [
        "Unexplained infertility (10-15% of cases)",
        "Multiple factors affecting both partners",
        "Immune system issues",
        "Environmental factors",
        "Stress and mental health",
      ],
    },
  ]

  const supportResources = [
    {
      title: "1-on-1 Fertility Counselling",
      description: "Professional emotional support throughout your journey",
      price: "₦25,000",
      duration: "60 minutes",
      link: "/appointments/counselling",
    },
    {
      title: "Support Groups",
      description: "Connect with others facing similar challenges",
      price: "Free",
      duration: "Weekly sessions",
      link: "/community/support-groups",
    },
    {
      title: "Partner Counselling",
      description: "Strengthen your relationship during fertility challenges",
      price: "₦35,000",
      duration: "90 minutes",
      link: "/appointments/couples-counselling",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Fertility Support</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Struggling to Conceive?</h1>
            <p className="text-xl text-gray-600 mb-8">
              You're not alone. Get comprehensive support, expert guidance, and personalized treatment options to help
              you on your fertility journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/test-kits/hormone-fertility">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Start with Testing
                </Button>
              </Link>
              <Link href="/appointments/advisor-call">
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Help</h2>
              <p className="text-lg text-gray-600">Understanding the right time to get professional support</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-8 w-8 text-orange-600" />
                    <div>
                      <CardTitle className="text-orange-900">Under 35 Years</CardTitle>
                      <CardDescription className="text-orange-700">After 12 months of trying</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-orange-800">
                  <p>
                    If you're under 35 and have been trying to conceive for 12 months without success, it's time to seek
                    professional evaluation and support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-8 w-8 text-red-600" />
                    <div>
                      <CardTitle className="text-red-900">Over 35 Years</CardTitle>
                      <CardDescription className="text-red-700">After 6 months of trying</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-red-800">
                  <p>
                    If you're over 35, fertility naturally declines, so it's recommended to seek help after 6 months of
                    unsuccessful attempts.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-3">Seek Help Immediately If:</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  You have irregular or absent periods
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  Known fertility issues (PCOS, endometriosis, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  History of pelvic inflammatory disease
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  Previous cancer treatment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  Partner has known fertility issues
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding the Causes</h2>
              <p className="text-lg text-gray-600">
                Infertility affects about 1 in 6 couples. Here are the most common causes:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {commonCauses.map((category, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <category.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.causes.map((cause, causeIndex) => (
                        <li key={causeIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Fertility Journey Timeline</h2>
              <p className="text-lg text-gray-600">A structured approach to addressing fertility challenges</p>
            </div>

            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {index < timelineSteps.length - 1 && <div className="w-0.5 h-16 bg-blue-200 mt-4"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary">{step.month}</Badge>
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div className="space-y-2">
                        {step.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Support */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emotional Support & Counselling</h2>
              <p className="text-lg text-gray-600">
                Fertility challenges can be emotionally overwhelming. You don't have to face this alone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportResources.map((resource, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-rose-600">{resource.price}</div>
                      <div className="text-sm text-gray-500">{resource.duration}</div>
                    </div>
                    <Link href={resource.link}>
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your personalized fertility assessment today and get the support you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/test-kits/hormone-fertility">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Order Fertility Test
                </Button>
              </Link>
              <Link href="/appointments/advisor-call">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
