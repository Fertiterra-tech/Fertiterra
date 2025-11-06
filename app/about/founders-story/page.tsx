"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Globe, Target, Users } from "lucide-react"
import { Header } from "@/components/header"

export default function FoundersStoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/learn" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Learn
            </Link>

            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Founder's Story</h1>
              <p className="text-xl text-gray-600 mb-8">
                FertiTerra was born from a deeply personal journey of witnessing pain, finding purpose, and building
                hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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

              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">A Journey Born from Love and Loss</h2>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    Growing up in Nigeria, I witnessed the silent pain of infertility through my foster mother, who
                    endured years of stigma, shame, and emotional isolation because she couldn't conceive. In our
                    community, infertility was seen as a personal failure rather than a medical issue—leading to broken
                    homes, discrimination, and untreated trauma.
                  </p>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    At the same time, my biological mother, a midwife, introduced me to the world of reproductive
                    health. She shared stories of women walking for miles just to access basic care, many of them
                    leaving without answers.
                  </p>

                  <p className="text-gray-900 leading-relaxed text-xl font-semibold">These two women shaped my path.</p>
                </div>
              </div>
            </div>

            {/* The Realization */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Realization</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  I realized early on that infertility is not just a medical issue—it's a social, emotional, and deeply
                  human crisis, especially in Africa where access to fertility care is scarce and expensive.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  As I pursued my education in software engineering at the African Leadership University, and later,
                  health sciences and biomedical technology, I made a promise: to use technology to build something that
                  could change lives.
                </p>

                <div className="bg-white p-6 rounded-lg border-l-4 border-rose-500">
                  <p className="text-gray-900 text-lg font-medium">
                    "I promised myself that no one should suffer in silence the way my foster mother did. Technology
                    could be the bridge between pain and hope."
                  </p>
                </div>
              </div>
            </div>

            {/* The Birth of FertiTerra */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">The Birth of FertiTerra</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  That promise became <strong className="text-rose-600">FertiTerra</strong>—Africa's first AI-powered,
                  digital fertility health platform. Our goal is simple: to ensure that no one suffers in silence, and
                  everyone—regardless of income, location, or gender—has the right to understand and manage their
                  fertility.
                </p>

                <div className="bg-gradient-to-r from-rose-500 to-green-500 text-white p-8 rounded-2xl">
                  <p className="text-xl font-medium italic mb-4">
                    "We're not just building a platform; we're building a movement to transform reproductive healthcare
                    across Africa."
                  </p>
                  <p className="text-lg">— Chijioke Ugorji Kalu, Founder & CEO, FertiTerra Technologies</p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-rose-500" />
                  </div>
                  <CardTitle className="text-xl">Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every feature we build is rooted in empathy and understanding of the fertility journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-xl">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Making fertility care accessible to everyone, regardless of location or economic status.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-purple-500" />
                  </div>
                  <CardTitle className="text-xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Leveraging cutting-edge AI and technology to provide personalized fertility insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Building supportive communities where no one has to face their fertility journey alone.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* The Impact We're Making */}
            <div className="bg-rose-50 rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Impact We're Making</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <div className="text-4xl font-bold text-rose-600 mb-2">10,000+</div>
                  <p className="text-gray-700">Lives touched across Africa</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                  <p className="text-gray-700">Countries served</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                  <p className="text-gray-700">User satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the movement to transform fertility care across Africa. Your journey matters, and we're here to
              support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
