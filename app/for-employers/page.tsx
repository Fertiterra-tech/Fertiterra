"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Calculator, Users, Heart, Shield } from "lucide-react"

export default function ForEmployersPage() {
  const [email, setEmail] = useState("")

  const companies = [
    "barclays",
    "mercer",
    "edelman",
    "charlotte_tilbury",
    "mccann",
    "wella",
    "JCDecaux",
    "multiplex",
    "sweatybetty",
    "bloomberg",
    "dentsu",
  ]

  const partnerLogos = [
    "mercer",
    "heka",
    "yulife",
    "ben",
    "pluxee",
    "pib",
    "lyfe",
    "perkbox",
    "hero",
    "boost-works",
    "david lloyd",
    "vivup",
  ]

  const resources = [
    {
      title: "Welcome To The Inequality Report",
      author: "FertiTerra Team",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Menopause in the workplace",
      author: "FertiTerra Team",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "How to support employees going through fertility treatment in the workplace?",
      author: "Zoya Ali",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Why should reproductive health be a part of your mental health benefits?",
      author: "Zoya Ali",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "How can period pain impact your employees?",
      author: "Zoya Ali",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "How to support LGBTQ+ employees",
      author: "Zoya Ali",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Being a 21st Century Employer – Supporting Women Through Menopause",
      author: "Ruby Relton",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Become a Reproductively Responsible™ employer</h1>
            <p className="text-xl text-gray-600 mb-8">
              The workplace wasn't designed for every body, we're here to change that.
            </p>
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3">
              Book a call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Proudly Supporting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-12">Proudly supporting</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-16 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium text-gray-600">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Reproductive Health Matters */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why does Reproductive Health matter to your business?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-rose-500 mb-2">1M</div>
                <p className="text-gray-600">women have left their jobs due to menopause symptoms</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-rose-500 mb-2">1/7</div>
                <p className="text-gray-600">couples are affected by infertility</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-rose-500 mb-2">4/5</div>
                <p className="text-gray-600">women suffer from a hormonal imbalance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <section className="py-20 bg-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Reproductive Health Impact Calculator</h2>
          <p className="text-xl mb-8 opacity-90">Estimate the cost impact of Reproductive Health on your business</p>
          <Button variant="outline" className="bg-white text-rose-500 hover:bg-gray-100">
            <Calculator className="mr-2 h-5 w-5" />
            Try our calculator
          </Button>
        </div>
      </section>

      {/* How to Become Reproductively Responsible */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How to become Reproductively Responsible™ employer
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reproductive Health Screening</h3>
              <p className="text-gray-600 mb-4">Provide employees with:</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• At-Home Hormone Tests, telemedicine services and aftercare</li>
                <li>• Early diagnosis & treatment</li>
                <li>• Access to specialists, at home</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CPD-accredited Educational Workshops</h3>
              <p className="text-gray-600 mb-4">
                Empower your employees with tools to support their reproductive health.
              </p>
              <p className="text-gray-600">Foster an inclusive, informed culture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Policy Implementation</h3>
              <p className="text-gray-600 mb-6">
                Make meaningful change by introducing reproductive policies, facilities and support networks
              </p>
              <Button className="bg-rose-500 hover:bg-rose-600">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workforce Demographics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Attract, support & retain a diverse workforce
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="text-sm text-rose-500 font-semibold mb-2">(18-35) YOUNG TALENT</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1 IN 3</div>
                <p className="text-gray-600">Workers believe fertility should be part of their benefits package</p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="text-sm text-rose-500 font-semibold mb-2">(30-45) FAMILY FORMERS</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1 IN 3</div>
                <p className="text-gray-600">Employees undergoing fertility treatment leave their jobs</p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="text-sm text-rose-500 font-semibold mb-2">(45-50+) SENIOR LEADERS</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4 IN 5</div>
                <p className="text-gray-600">
                  Perimenopausal and menopausal women believe symptoms negatively impact their work
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Revolutionising Reproductive Healthcare</h2>
          <p className="text-center text-gray-600 mb-12">eco system</p>
          <div className="text-center mb-8">
            <p className="text-lg font-semibold text-gray-900 mb-4">As featured on</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6 items-center opacity-60">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-12 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-medium text-gray-600">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Impact */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            A lack of reproductive health support can come at a cost
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Absenteeism</h3>
              <p className="text-gray-600">of women experience reproductive health symptoms at work.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Presenteeism</h3>
              <p className="text-gray-600">total productivity lost per year due to presenteeism.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Turnover</h3>
              <p className="text-gray-600">Of employees are willing to change jobs for fertility benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Good for your people, great for your business
          </h2>
          <p className="text-center text-gray-600 mb-16">
            Gender diverse companies have been shown to be more innovative, agile and financially successful
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Attract & Retain Top Talent</h3>
                <p className="text-gray-600">
                  Be the company everyone wants to work for and nobody wants to leave with progressive benefits &
                  inclusive culture.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Improve D&I & ESG metrics</h3>
                <p className="text-gray-600">
                  Attract, support & retain a more diverse workforce with benefits supporting women and the LGBTQ+
                  community
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Be ReProductively Responsible™</h3>
                <p className="text-gray-600">
                  Being Fertility-Friendly is only the start. Give employees the care they deserve to attract, support
                  and retain a diverse, thriving workforce.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Boost Engagement & Productivity</h3>
                <p className="text-gray-600">
                  Prioritise employee wellbeing & see a 6 x ROI in reduced presenteeism, absenteeism and turnover in
                  return for a healthy, happy workforce.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive fertility budget</h3>
                <p className="text-gray-600">
                  Support your employees to proactively manage their reproductive health to avoid the need for expensive
                  reactive benefits such as egg freezing.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gender Equality at all levels</h3>
                <p className="text-gray-600">
                  Support women from menstruation through menopause to ensure inclusive representation from young talent
                  to senior leaders
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button className="bg-rose-500 hover:bg-rose-600">Get in touch</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Flora Kong</h4>
                    <p className="text-sm text-gray-600">CO CHAIR OF THE ONE GENDER EQUALITY NETWORK AT DENTSU</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Dr Helen and the FertiTerra team did a phenomenal job in educating our workforce on all things
                  menopause related. It was done in such an approachable and engaging way."
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Alex Mahon</h4>
                    <p className="text-sm text-gray-600">CHANNEL 4 CHIEF EXECUTIVE</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "We are incredibly proud of this innovative new partnership with FertiTerra, [...] This latest
                  initiative aligns with our commitment to support women's health and the wellbeing of all our people."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">See a Return on Investment</h2>
          <p className="text-xl mb-12 opacity-90">
            For every £1 spent on FertiTerra Reproductive Health benefits, you'll receive £6 in reduced absenteeism,
            presenteeism and turnover.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div>
              <div className="text-sm opacity-75 mb-2">INVESTMENT</div>
              <div className="text-6xl font-bold">£1</div>
            </div>
            <ArrowRight className="h-8 w-8" />
            <div>
              <div className="text-sm opacity-75 mb-2">RETURNS</div>
              <div className="text-6xl font-bold">£6</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200"></div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sign-up for insights and resources on becoming a Reproductively Responsible™ workplace
          </h2>
          <div className="max-w-md mx-auto flex gap-4 mt-8">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <Button className="bg-rose-500 hover:bg-rose-600">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-center text-gray-600 mb-12">
            We're here to support you on your journey to becoming a Reproductively Responsible™ employer.
          </p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="policies">
                <AccordionTrigger>Do we help companies to implement Reproductive Health policies?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide comprehensive support to help companies implement reproductive health policies that
                  create inclusive and supportive workplace environments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="involvement">
                <AccordionTrigger>What does becoming a Reproductively Responsible™ employer involve?</AccordionTrigger>
                <AccordionContent>
                  It involves implementing comprehensive reproductive health screening, educational workshops, and
                  policy changes to support employees throughout their reproductive health journey.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="responsibility">
                <AccordionTrigger>Why is Reproductive Health an employer's responsibility?</AccordionTrigger>
                <AccordionContent>
                  Supporting reproductive health leads to improved employee wellbeing, reduced absenteeism, increased
                  productivity, and helps attract and retain top talent.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="diversity">
                <AccordionTrigger>How does FertiTerra help workplace diversity?</AccordionTrigger>
                <AccordionContent>
                  Our services support women and LGBTQ+ employees throughout their reproductive health journey, creating
                  more inclusive workplaces and improving diversity metrics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="males">
                <AccordionTrigger>How does FertiTerra support males in the workplace?</AccordionTrigger>
                <AccordionContent>
                  We provide male fertility testing and support services, recognizing that reproductive health affects
                  all employees regardless of gender.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ivf">
                <AccordionTrigger>Can we facilitate IVF and egg-freezing?</AccordionTrigger>
                <AccordionContent>
                  Yes, we can help facilitate access to IVF and egg-freezing services as part of comprehensive
                  reproductive health benefits packages.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-center mt-12">
            <Button className="bg-rose-500 hover:bg-rose-600">Get in touch</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
