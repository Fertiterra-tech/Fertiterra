"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Heart, Users, Shield, BookOpen, Calendar, CheckCircle, Stethoscope } from "lucide-react"

export default function LGBTQIAFamilyPage() {
  const familyBuildingOptions = [
    {
      title: "Intrauterine Insemination (IUI)",
      description: "A fertility treatment where sperm is placed directly into the uterus",
      suitableFor: ["Single women", "Female couples", "Those with mild fertility issues"],
      process: "Sperm preparation → Ovulation monitoring → Insemination procedure",
      successRate: "15-20% per cycle",
      cost: "₦150,000 - ₦250,000 per cycle",
    },
    {
      title: "In Vitro Fertilization (IVF)",
      description: "Eggs and sperm are combined in a laboratory, then transferred to the uterus",
      suitableFor: ["Complex fertility issues", "Genetic screening needs", "Multiple failed IUI cycles"],
      process: "Ovarian stimulation → Egg retrieval → Fertilization → Embryo transfer",
      successRate: "40-50% per cycle (age dependent)",
      cost: "₦800,000 - ₦1,500,000 per cycle",
    },
    {
      title: "Reciprocal IVF",
      description: "One partner provides eggs, the other carries the pregnancy",
      suitableFor: ["Female couples", "Shared biological connection desired"],
      process: "Egg provider stimulation → Egg retrieval → Partner embryo transfer",
      successRate: "Similar to traditional IVF",
      cost: "₦1,000,000 - ₦1,800,000 per cycle",
    },
    {
      title: "Surrogacy",
      description: "Another person carries the pregnancy for the intended parents",
      suitableFor: ["Unable to carry pregnancy", "Medical contraindications", "Male couples"],
      process: "Surrogate selection → Legal agreements → Medical procedures → Pregnancy care",
      successRate: "60-70% per transfer",
      cost: "₦2,000,000 - ₦4,000,000 total",
    },
  ]

  const supportServices = [
    {
      icon: Heart,
      title: "LGBTQIA+ Friendly Counselling",
      description: "Specialized support for unique challenges faced by LGBTQIA+ individuals and couples",
      features: ["Identity-affirming therapy", "Relationship counselling", "Family planning guidance"],
    },
    {
      icon: Shield,
      title: "Legal Support",
      description: "Navigate the legal aspects of family building and parental rights",
      features: ["Parental rights consultation", "Surrogacy agreements", "Adoption guidance"],
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with others on similar journeys in a safe, inclusive environment",
      features: ["Support groups", "Peer mentorship", "Online community access"],
    },
    {
      icon: Stethoscope,
      title: "Inclusive Medical Care",
      description: "Healthcare providers trained in LGBTQIA+ affirming care",
      features: ["Culturally competent care", "Hormone therapy coordination", "Comprehensive health screening"],
    },
  ]

  const planningSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss your family goals, medical history, and explore options",
      duration: "60-90 minutes",
      cost: "₦50,000",
    },
    {
      step: 2,
      title: "Medical Evaluation",
      description: "Comprehensive fertility testing and health assessment",
      duration: "2-3 weeks",
      cost: "₦100,000 - ₦200,000",
    },
    {
      step: 3,
      title: "Treatment Planning",
      description: "Create a personalized treatment plan based on your needs and goals",
      duration: "1-2 weeks",
      cost: "Included in consultation",
    },
    {
      step: 4,
      title: "Begin Treatment",
      description: "Start your chosen fertility treatment with ongoing support",
      duration: "Varies by treatment",
      cost: "Varies by treatment option",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">LGBTQIA+ Family Building</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Starting an LGBTQIA+ Family</h1>
            <p className="text-xl text-gray-600 mb-8">
              Inclusive, affirming fertility care designed to help LGBTQIA+ individuals and couples build the families
              they dream of. Your journey to parenthood is valid and supported.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointments/advisor-call">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </Link>
              <Link href="/community/lgbtqia-support">
                <Button size="lg" variant="outline">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusive Care Promise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Inclusive Care</h2>
              <p className="text-lg text-gray-600">
                At FertiTerra, we believe everyone deserves the chance to build their family in a supportive,
                non-judgmental environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((service, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
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

      {/* Family Building Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Family Building Options</h2>
              <p className="text-lg text-gray-600">
                Explore the different paths to parenthood available to LGBTQIA+ individuals and couples
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {familyBuildingOptions.map((option, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-900">{option.title}</CardTitle>
                    <CardDescription className="text-base">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Suitable For:</h4>
                      <ul className="space-y-1">
                        {option.suitableFor.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Process:</h4>
                      <p className="text-sm text-gray-600">{option.process}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Success Rate</div>
                        <div className="text-sm text-purple-600">{option.successRate}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">Estimated Cost</div>
                        <div className="text-sm text-purple-600">{option.cost}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey to Parenthood</h2>
              <p className="text-lg text-gray-600">A step-by-step guide to starting your family building journey</p>
            </div>

            <div className="space-y-6">
              {planningSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    {index < planningSteps.length - 1 && <div className="w-0.5 h-16 bg-purple-200 mt-4"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <Card className="border-purple-200">
                      <CardHeader>
                        <CardTitle className="text-xl text-purple-900">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Duration: {step.duration}</span>
                          <span className="font-semibold text-purple-600">{step.cost}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Support */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-lg text-gray-600">Comprehensive support for your family building journey</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    Educational Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="/learn/guides/lgbtqia-fertility"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">LGBTQIA+ Fertility Guide</div>
                    <div className="text-sm text-gray-600">Comprehensive guide to fertility options</div>
                  </Link>
                  <Link
                    href="/learn/guides/legal-considerations"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">Legal Considerations</div>
                    <div className="text-sm text-gray-600">Understanding parental rights and legal processes</div>
                  </Link>
                  <Link
                    href="/learn/guides/financial-planning"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">Financial Planning</div>
                    <div className="text-sm text-gray-600">Budgeting for fertility treatments</div>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-purple-600" />
                    Community & Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="/community/lgbtqia-support"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">LGBTQIA+ Support Groups</div>
                    <div className="text-sm text-gray-600">Connect with others on similar journeys</div>
                  </Link>
                  <Link
                    href="/community/success-stories"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">Success Stories</div>
                    <div className="text-sm text-gray-600">Inspiring stories from LGBTQIA+ families</div>
                  </Link>
                  <Link
                    href="/appointments/counselling"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium">Specialized Counselling</div>
                    <div className="text-sm text-gray-600">LGBTQIA+ affirming mental health support</div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Family Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards building your family with inclusive, affirming care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointments/advisor-call">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/community/lgbtqia-support">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
