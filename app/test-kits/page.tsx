"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Star, Clock, Users, ArrowRight } from "lucide-react"

const testKits = [
  {
    id: "hormone-fertility",
    name: "Advanced Hormone & Fertility Test",
    description: "Comprehensive hormone panel including AMH, FSH, LH, and more",
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviews: 1247,
    duration: "10 days",
    href: "/test-kits/hormone-fertility",
    image: "/placeholder.svg?height=200&width=300&text=Hormone+Test",
    popular: true,
    features: ["AMH Testing", "Fertility Assessment", "Doctor Consultation", "Personalized Report"],
  },
  {
    id: "ovulation",
    name: "Ovulation Tracking Kit",
    description: "Track your ovulation cycle with precision timing",
    price: 49,
    originalPrice: 69,
    rating: 4.7,
    reviews: 892,
    duration: "5 days",
    href: "/test-kits/ovulation",
    image: "/placeholder.svg?height=200&width=300&text=Ovulation+Test",
    features: ["LH Surge Detection", "Cycle Tracking", "Mobile App", "Expert Support"],
  },
  {
    id: "pregnancy",
    name: "Early Pregnancy Test",
    description: "Detect pregnancy up to 6 days before missed period",
    price: 29,
    originalPrice: 39,
    rating: 4.8,
    reviews: 2156,
    duration: "1 day",
    href: "/test-kits/pregnancy",
    image: "/placeholder.svg?height=200&width=300&text=Pregnancy+Test",
    features: ["99% Accuracy", "Early Detection", "Digital Display", "Easy to Use"],
  },
  {
    id: "menopause",
    name: "Menopause Hormone Panel",
    description: "Comprehensive testing for perimenopause and menopause",
    price: 129,
    originalPrice: 169,
    rating: 4.6,
    reviews: 634,
    duration: "7 days",
    href: "/test-kits/menopause",
    image: "/placeholder.svg?height=200&width=300&text=Menopause+Test",
    features: ["FSH & Estradiol", "Symptom Analysis", "Treatment Options", "Specialist Consultation"],
  },
]

export default function TestKitsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-rose-50 to-purple-50 py-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">Personalized Fertility Testing</h1>
              <p className="text-lg text-gray-600 mb-6">
                Get insights into your reproductive health with our comprehensive at-home testing kits. All tests
                include expert analysis and personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-rose-500" />
                  <span>Results in 5-10 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-500" />
                  <span>Doctor consultation included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-rose-500" />
                  <span>Trusted by 50,000+ women</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {testKits.map((kit) => (
                <Card key={kit.id} className="overflow-hidden">
                  {kit.popular && (
                    <div className="bg-rose-500 text-white text-center py-1 text-sm font-medium">Most Popular</div>
                  )}
                  <div className="relative h-48 w-full">
                    <Image src={kit.image || "/placeholder.svg"} alt={kit.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{kit.name}</CardTitle>
                    <CardDescription>{kit.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{kit.rating}</span>
                      <span className="text-sm text-gray-500">({kit.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">${kit.price}</span>
                      <span className="text-sm text-gray-500 line-through">${kit.originalPrice}</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        Save ${kit.originalPrice - kit.price}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      {kit.features.map((feature, index) => (
                        <div key={index} className="text-sm text-gray-600">
                          • {feature}
                        </div>
                      ))}
                    </div>

                    <div className="text-sm text-gray-500">Results in {kit.duration}</div>
                  </CardContent>
                  <CardFooter>
                    <Link href={kit.href} className="w-full">
                      <Button className="w-full bg-rose-500 hover:bg-rose-600">
                        Personalize Test <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
