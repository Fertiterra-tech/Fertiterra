"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import {
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  Star,
  ArrowRight,
  Sparkles,
  Sun,
  Moon,
  Zap,
  Shield,
  Heart,
} from "lucide-react"

export default function SkinConsultationPage() {
  const skinConcerns = [
    { icon: Sun, name: "Hormonal Acne", description: "Breakouts related to hormonal changes" },
    { icon: Moon, name: "Melasma", description: "Dark patches often triggered by hormones" },
    { icon: Zap, name: "PCOS-related Skin Issues", description: "Acne, hirsutism, and skin darkening" },
    { icon: Shield, name: "Pregnancy Skin Changes", description: "Stretch marks, pigmentation, sensitivity" },
    { icon: Heart, name: "Menopause Skin Effects", description: "Dryness, thinning, and aging changes" },
    { icon: Sparkles, name: "General Skin Health", description: "Overall skin wellness and prevention" },
  ]

  const consultationTypes = [
    {
      type: "Initial Skin Assessment",
      duration: "45 minutes",
      price: "₦50,000",
      description: "Comprehensive evaluation of your skin concerns and hormonal factors",
      includes: [
        "Detailed skin analysis",
        "Hormonal factor assessment",
        "Personalized treatment plan",
        "Product recommendations",
        "Lifestyle guidance",
      ],
    },
    {
      type: "Follow-up Consultation",
      duration: "30 minutes",
      price: "₦35,000",
      description: "Monitor progress and adjust treatment as needed",
      includes: [
        "Treatment progress review",
        "Skin improvement assessment",
        "Product adjustments",
        "Ongoing support",
        "Next steps planning",
      ],
    },
    {
      type: "Acne Treatment Consultation",
      duration: "60 minutes",
      price: "₦65,000",
      description: "Specialized consultation for hormonal and persistent acne",
      includes: [
        "Acne severity assessment",
        "Hormonal evaluation",
        "Treatment protocol design",
        "Medication guidance",
        "Prevention strategies",
      ],
    },
  ]

  const specialists = [
    {
      name: "Dr. Chioma Nwankwo",
      title: "Consultant Dermatologist",
      experience: "10+ years",
      qualifications: "MBBS, FWACS (Dermatology), Cosmetic Dermatology Certified",
      specialties: ["Hormonal Skin Issues", "Acne Treatment", "Pigmentation Disorders"],
      rating: 4.9,
      reviews: 156,
    },
    {
      name: "Dr. Folake Adebayo",
      title: "Dermatologist & Aesthetic Physician",
      experience: "8+ years",
      qualifications: "MBBS, Dermatology Residency, Aesthetic Medicine Fellowship",
      specialties: ["PCOS Skin Management", "Pregnancy Dermatology", "Anti-aging"],
      rating: 4.8,
      reviews: 89,
    },
  ]

  const treatmentApproaches = [
    {
      title: "Hormonal Acne Management",
      description: "Targeted treatments for hormone-related breakouts",
      treatments: ["Topical retinoids", "Hormonal therapy coordination", "Anti-inflammatory treatments"],
      timeline: "3-6 months for significant improvement",
    },
    {
      title: "Pigmentation Treatment",
      description: "Address melasma, dark spots, and uneven skin tone",
      treatments: ["Chemical peels", "Topical lightening agents", "Sun protection protocols"],
      timeline: "2-4 months for visible results",
    },
    {
      title: "PCOS Skin Care",
      description: "Comprehensive approach to PCOS-related skin issues",
      treatments: ["Acne management", "Hirsutism treatment", "Acanthosis nigricans care"],
      timeline: "Ongoing management with regular monitoring",
    },
    {
      title: "Pregnancy-Safe Skincare",
      description: "Safe and effective treatments during pregnancy and breastfeeding",
      treatments: ["Pregnancy-safe products", "Gentle treatments", "Preventive care"],
      timeline: "Customized to pregnancy stages",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-pink-100 text-pink-800">Dermatology Care</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Skin Consultation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert dermatological care focusing on hormone-related skin concerns. Get personalized treatment plans
              from certified dermatologists who understand the connection between hormones and skin health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Link href="/learn/skin-health-guide">
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Concerns We Address */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Skin Concerns We Address</h2>
              <p className="text-lg text-gray-600">
                Specialized care for hormone-related and reproductive health skin issues
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skinConcerns.map((concern, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <concern.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{concern.name}</h3>
                  <p className="text-sm text-gray-600">{concern.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Options</h2>
              <p className="text-lg text-gray-600">
                Choose the consultation type that best addresses your skin concerns
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-pink-900">{consultation.type}</CardTitle>
                    <div className="text-3xl font-bold text-pink-600 my-2">{consultation.price}</div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{consultation.duration}</span>
                    </div>
                    <CardDescription className="mt-2">{consultation.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {consultation.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Specialists */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Dermatologists</h2>
              <p className="text-lg text-gray-600">
                Board-certified dermatologists specializing in hormone-related skin conditions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {specialists.map((doctor, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-pink-600">
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-pink-600 font-medium">{doctor.title}</p>
                      <p className="text-sm text-gray-600 mb-2">{doctor.qualifications}</p>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{doctor.rating}</span>
                          <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                        </div>
                        <Badge variant="secondary">{doctor.experience}</Badge>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialties.map((specialty, specialtyIndex) => (
                            <Badge key={specialtyIndex} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Approaches</h2>
              <p className="text-lg text-gray-600">Evidence-based treatments tailored to your specific skin concerns</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {treatmentApproaches.map((approach, index) => (
                <Card key={index} className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-pink-900">{approach.title}</CardTitle>
                    <CardDescription>{approach.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Treatment Options:</h4>
                      <ul className="space-y-1">
                        {approach.treatments.map((treatment, treatmentIndex) => (
                          <li key={treatmentIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                            {treatment}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-3 border-t">
                      <span className="font-medium text-gray-900">Expected Timeline: </span>
                      <span className="text-gray-600">{approach.timeline}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Skin Health?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert dermatological care that addresses the root causes of your skin concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Book Skin Consultation
              </Button>
              <Link href="/test-kits/hormone-fertility">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600"
                >
                  Test Your Hormones First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
