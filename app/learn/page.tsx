"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Heart, Globe, Award, Target } from "lucide-react"

export default function LearnPage() {
  const articles = [
    {
      title: "Understanding Your Fertility Window",
      description: "Learn about ovulation cycles and how to track your most fertile days",
      category: "Fertility Basics",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Hormone Testing: What You Need to Know",
      description: "A comprehensive guide to fertility hormones and what they tell us",
      category: "Testing",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Nutrition for Fertility Health",
      description: "Foods and nutrients that support reproductive health",
      category: "Lifestyle",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Managing Fertility Stress",
      description: "Mental health strategies for your fertility journey",
      category: "Wellness",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Male Fertility Factors",
      description: "Understanding male reproductive health and testing options",
      category: "Male Health",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "When to Seek Professional Help",
      description: "Signs it's time to consult with a fertility specialist",
      category: "Professional Care",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = ["All", "Fertility Basics", "Testing", "Lifestyle", "Wellness", "Male Health", "Professional Care"]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Learn About Fertility Health</h1>
            <p className="text-xl text-gray-600 mb-8">
              Evidence-based information to help you understand and take control of your reproductive health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founder's Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Founder's Story</h2>
              <p className="text-lg text-gray-600">FertiTerra was born from a deeply personal journey.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Growing up in Nigeria, I witnessed the silent pain of infertility through my foster mother, who
                    endured years of stigma, shame, and emotional isolation because she couldn't conceive. In our
                    community, infertility was seen as a personal failure rather than a medical issue—leading to broken
                    homes, discrimination, and untreated trauma.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    At the same time, my biological mother, a midwife, introduced me to the world of reproductive
                    health. She shared stories of women walking for miles just to access basic care, many of them
                    leaving without answers.
                  </p>

                  <p className="text-gray-700 leading-relaxed font-semibold">These two women shaped my path.</p>

                  <p className="text-gray-700 leading-relaxed">
                    I realized early on that infertility is not just a medical issue—it's a social, emotional, and
                    deeply human crisis, especially in Africa where access to fertility care is scarce and expensive. As
                    I pursued my education in software engineering at the African Leadership University, and later,
                    health sciences and biomedical technology, I made a promise: to use technology to build something
                    that could change lives.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    That promise became <strong className="text-rose-600">FertiTerra</strong>—Africa's first AI-powered,
                    digital fertility health platform. Our goal is simple: to ensure that no one suffers in silence, and
                    everyone—regardless of income, location, or gender—has the right to understand and manage their
                    fertility.
                  </p>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
                  <p className="text-gray-800 font-medium italic">
                    "— Chijioke Ugorji Kalu, Founder & CEO, FertiTerra Technologies"
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/founder-story.png"
                    alt="Chijioke Ugorji Kalu, Founder of FertiTerra, with his foster mother"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-100 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-100 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-rose-500" />
                  </div>
                  <CardTitle className="text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To democratize access to fertility care across Africa through technology, making reproductive health
                    services affordable, accessible, and stigma-free.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A world where every person has the knowledge, tools, and support they need to make informed
                    decisions about their reproductive health.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-purple-500" />
                  </div>
                  <CardTitle className="text-xl">Our Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Breaking down barriers, reducing stigma, and empowering individuals with personalized, AI-driven
                    fertility insights and care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Learning Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive, evidence-based information to guide you through every step of your fertility journey.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-rose-100 hover:text-rose-700"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gray-200 relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">{article.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-rose-600 hover:text-rose-700">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why FertiTerra */}
      <section className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose FertiTerra?</h2>
            <p className="text-xl text-gray-600 mb-12">
              We're not just another fertility platform. We're a movement to transform reproductive healthcare in
              Africa.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Culturally Sensitive",
                  description:
                    "Built by Africans, for Africans, understanding our unique cultural context and challenges.",
                },
                {
                  icon: Globe,
                  title: "AI-Powered Insights",
                  description:
                    "Advanced technology providing personalized recommendations based on your unique profile.",
                },
                {
                  icon: Users,
                  title: "Community Support",
                  description: "Connect with others on similar journeys in a safe, supportive environment.",
                },
                {
                  icon: Award,
                  title: "Expert Care",
                  description: "Access to qualified fertility specialists and healthcare professionals.",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                    <feature.icon className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of people who have taken control of their fertility health with FertiTerra.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
