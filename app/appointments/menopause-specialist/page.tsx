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
  Video,
  Star,
  ArrowRight,
  Thermometer,
  Moon,
  Heart,
  Brain,
  Shield,
  Activity,
} from "lucide-react"

export default function MenopauseSpecialistPage() {
  const symptoms = [
    { icon: Thermometer, name: "Hot flashes", description: "Sudden feelings of heat" },
    { icon: Moon, name: "Sleep disturbances", description: "Difficulty sleeping or staying asleep" },
    { icon: Heart, name: "Irregular periods", description: "Changes in menstrual cycle" },
    { icon: Brain, name: "Mood changes", description: "Anxiety, depression, or irritability" },
    { icon: Activity, name: "Fatigue", description: "Persistent tiredness or low energy" },
    { icon: Shield, name: "Vaginal dryness", description: "Discomfort during intimacy" },
  ]

  const consultationTypes = [
    {
      type: "Initial Consultation",
      duration: "60 minutes",
      price: "₦75,000",
      description: "Comprehensive assessment of your symptoms and medical history",
      includes: [
        "Detailed symptom evaluation",
        "Medical history review",
        "Physical examination",
        "Treatment plan discussion",
        "Lifestyle recommendations",
      ],
    },
    {
      type: "Follow-up Consultation",
      duration: "30 minutes",
      price: "₦45,000",
      description: "Review progress and adjust treatment as needed",
      includes: [
        "Treatment response evaluation",
        "Symptom monitoring",
        "Medication adjustments",
        "Ongoing support",
        "Next steps planning",
      ],
    },
    {
      type: "Hormone Therapy Consultation",
      duration: "45 minutes",
      price: "₦60,000",
      description: "Specialized consultation for hormone replacement therapy",
      includes: [
        "HRT suitability assessment",
        "Risk-benefit analysis",
        "Treatment options review",
        "Monitoring plan",
        "Safety guidelines",
      ],
    },
  ]

  const specialists = [
    {
      name: "Dr. Adaora Okafor",
      title: "Consultant Gynaecologist & Menopause Specialist",
      experience: "15+ years",
      qualifications: "MBBS, FWACS, Menopause Society Certified",
      specialties: ["Hormone Therapy", "Natural Menopause Management", "Surgical Menopause"],
      rating: 4.9,
      reviews: 127,
    },
    {
      name: "Dr. Funmi Adeleke",
      title: "Reproductive Endocrinologist",
      experience: "12+ years",
      qualifications: "MBBS, MRCOG, Fellowship in Reproductive Medicine",
      specialties: ["Perimenopause", "Premature Menopause", "Fertility Preservation"],
      rating: 4.8,
      reviews: 98,
    },
  ]

  const treatmentOptions = [
    {
      title: "Hormone Replacement Therapy (HRT)",
      description: "Estrogen and progesterone therapy to manage symptoms",
      suitability: "Most effective for moderate to severe symptoms",
      considerations: "Requires careful monitoring and risk assessment",
    },
    {
      title: "Non-Hormonal Medications",
      description: "Alternative medications for those who cannot use hormones",
      suitability: "Good for women with contraindications to HRT",
      considerations: "May be less effective than hormonal options",
    },
    {
      title: "Lifestyle Modifications",
      description: "Diet, exercise, and stress management strategies",
      suitability: "Beneficial for all women going through menopause",
      considerations: "Requires commitment and lifestyle changes",
    },
    {
      title: "Complementary Therapies",
      description: "Herbal supplements, acupuncture, and other natural approaches",
      suitability: "Can be used alongside conventional treatments",
      considerations: "Evidence varies; discuss with specialist",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Menopause Care</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Menopause Specialist Consultation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert care for women navigating menopause and perimenopause. Get personalized treatment plans from
              certified menopause specialists who understand your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Link href="/learn/menopause-guide">
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms We Treat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Symptoms We Treat</h2>
              <p className="text-lg text-gray-600">
                Our specialists help manage a wide range of menopause-related symptoms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <symptom.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{symptom.name}</h3>
                  <p className="text-sm text-gray-600">{symptom.description}</p>
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
              <p className="text-lg text-gray-600">Choose the consultation type that best fits your needs</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-orange-900">{consultation.type}</CardTitle>
                    <div className="text-3xl font-bold text-orange-600 my-2">{consultation.price}</div>
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
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
              <p className="text-lg text-gray-600">
                Board-certified specialists with extensive experience in menopause care
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {specialists.map((doctor, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-600">
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-orange-600 font-medium">{doctor.title}</p>
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

      {/* Treatment Options */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Options</h2>
              <p className="text-lg text-gray-600">
                Personalized treatment approaches based on your symptoms and preferences
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {treatmentOptions.map((treatment, index) => (
                <Card key={index} className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-900">{treatment.title}</CardTitle>
                    <CardDescription>{treatment.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Best for: </span>
                      <span className="text-gray-600">{treatment.suitability}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Considerations: </span>
                      <span className="text-gray-600">{treatment.considerations}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Book Your Consultation</h2>
              <p className="text-lg text-gray-600">Simple steps to get the menopause care you need</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Choose Your Appointment</h3>
                <p className="text-gray-600">Select the consultation type and preferred time slot</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Complete Pre-Consultation</h3>
                <p className="text-gray-600">Fill out health questionnaire and symptom tracker</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Attend Your Consultation</h3>
                <p className="text-gray-600">Meet with your specialist via video call or in-person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Menopause Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let menopause symptoms control your life. Get expert care and personalized treatment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation Now
              </Button>
              <Link href="/learn/menopause-guide">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  Learn About Menopause
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
