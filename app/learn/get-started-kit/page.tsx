"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import {
  Download,
  CheckCircle,
  Calendar,
  Phone,
  Heart,
  Activity,
  Brain,
  ArrowRight,
  FileText,
  Video,
  Users,
  Stethoscope,
} from "lucide-react"

export default function GetStartedKitPage() {
  const kitContents = [
    {
      icon: FileText,
      title: "Fertility Assessment Checklist",
      description: "Comprehensive checklist to evaluate your current fertility status",
      type: "PDF Guide",
      pages: "8 pages",
    },
    {
      icon: Calendar,
      title: "Cycle Tracking Templates",
      description: "Easy-to-use templates for tracking your menstrual cycle and symptoms",
      type: "Printable Templates",
      pages: "4 templates",
    },
    {
      icon: Heart,
      title: "Lifestyle Optimization Guide",
      description: "Evidence-based recommendations for improving fertility naturally",
      type: "Digital Guide",
      pages: "12 pages",
    },
    {
      icon: Brain,
      title: "Understanding Your Hormones",
      description: "Simple explanations of key fertility hormones and what they mean",
      type: "Infographic",
      pages: "2 pages",
    },
    {
      icon: Activity,
      title: "Fertility-Friendly Recipes",
      description: "Nutritious recipes designed to support reproductive health",
      type: "Recipe Collection",
      pages: "16 recipes",
    },
    {
      icon: Users,
      title: "Partner Communication Guide",
      description: "Tips for discussing fertility and family planning with your partner",
      type: "Communication Guide",
      pages: "6 pages",
    },
  ]

  const bonusResources = [
    {
      title: "Video: Understanding Your Fertility Window",
      description: "15-minute educational video explaining ovulation and timing",
      duration: "15 minutes",
      format: "HD Video",
    },
    {
      title: "Fertility Myths vs Facts Cheat Sheet",
      description: "Quick reference guide debunking common fertility misconceptions",
      duration: "Quick read",
      format: "PDF",
    },
    {
      title: "When to Seek Help Decision Tree",
      description: "Interactive guide to help you decide when to consult a specialist",
      duration: "5 minutes",
      format: "Interactive PDF",
    },
  ]

  const nextSteps = [
    {
      step: 1,
      title: "Download Your Kit",
      description: "Get instant access to all resources and start your fertility journey",
      action: "Download Now",
      link: "#download",
    },
    {
      step: 2,
      title: "Complete the Assessment",
      description: "Use our checklist to understand your current fertility status",
      action: "Start Assessment",
      link: "/fertility-assessment",
    },
    {
      step: 3,
      title: "Track Your Cycle",
      description: "Begin monitoring your cycle using our tracking templates",
      action: "Start Tracking",
      link: "/cycle-tracker",
    },
    {
      step: 4,
      title: "Book a Consultation",
      description: "Discuss your results with one of our fertility experts",
      action: "Book Now",
      link: "/appointments/advisor-call",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">Free Resource</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get Started Kit</h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to begin your fertility journey. Download our comprehensive starter kit with
              expert-curated resources, templates, and guides - completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Download className="mr-2 h-5 w-5" />
                Download Free Kit
              </Button>
              <Link href="/appointments/advisor-call">
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Your Kit</h2>
              <p className="text-lg text-gray-600">Six comprehensive resources to kickstart your fertility journey</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kitContents.map((item, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <item.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.pages}</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bonus Resources</h2>
              <p className="text-lg text-gray-600">Additional materials to enhance your fertility knowledge</p>
            </div>

            <div className="space-y-6">
              {bonusResources.map((resource, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Video className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                        <p className="text-gray-600">{resource.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{resource.duration}</div>
                      <div className="text-sm text-gray-500">{resource.format}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Your Kit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Next Steps</h2>
              <p className="text-lg text-gray-600">
                Follow this simple roadmap to make the most of your fertility journey
              </p>
            </div>

            <div className="space-y-8">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    {index < nextSteps.length - 1 && <div className="w-0.5 h-16 bg-green-200 mt-4"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="text-xl text-green-900">{step.title}</CardTitle>
                        <CardDescription className="text-green-700">{step.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href={step.link}>
                          <Button className="bg-green-600 hover:bg-green-700">
                            {step.action}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Others Are Saying</h2>
              <p className="text-lg text-gray-600">
                Hear from people who started their journey with our Get Started Kit
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "The Get Started Kit was exactly what I needed to understand my fertility better. The cycle tracking
                    templates helped me identify patterns I never noticed before."
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Amara O.</strong> - Lagos, Nigeria
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">
                    "As someone new to fertility planning, this kit gave me the confidence to start my journey. The
                    information is clear and not overwhelming."
                  </p>
                  <div className="text-sm text-gray-600">
                    <strong>Kemi A.</strong> - Abuja, Nigeria
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Download your free Get Started Kit now and take the first step towards understanding your fertility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Download Free Kit
              </Button>
              <Link href="/test-kits/hormone-fertility">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Order Fertility Test
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
