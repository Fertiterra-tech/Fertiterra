import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Heart, Shield, CheckCircle, Calendar, MessageCircle } from "lucide-react"

export default function CounsellingPage() {
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
          <Link href="/appointments" className="hover:text-rose-500">
            Appointments
          </Link>
          <span>/</span>
          <span className="text-gray-900">Fertility Counselling</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-4 bg-rose-100 text-rose-800">Book an appointment</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Fertility Counselling</h1>
              <p className="text-xl text-gray-600 mb-6">
                Navigate your fertility journey with compassionate, professional support from licensed counselors who
                understand the emotional challenges of conception and reproductive health.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Compassionate Support</h3>
                  <p className="text-gray-600">Understanding counselors specializing in fertility</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">50-Minute Sessions</h3>
                  <p className="text-gray-600">Individual or couples counseling available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Complete Confidentiality</h3>
                  <p className="text-gray-600">Safe, private space to share your concerns</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-6 w-6 text-rose-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                  <p className="text-gray-600">Regular sessions and crisis support available</p>
                </div>
              </div>
            </div>

            {/* What We Help With */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What We Help You Navigate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Fertility Anxiety & Stress</h4>
                    <p className="text-gray-600">Managing the emotional toll of trying to conceive</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Pregnancy Loss Support</h4>
                    <p className="text-gray-600">Grief counseling and healing after miscarriage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Relationship Challenges</h4>
                    <p className="text-gray-600">Maintaining intimacy and connection during fertility struggles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Treatment Decision Making</h4>
                    <p className="text-gray-600">Support in choosing fertility treatment options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Family Pressure & Expectations</h4>
                    <p className="text-gray-600">Dealing with cultural and family pressures around childbearing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Counseling Approaches */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Our Counseling Approaches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Individual Counseling</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Cognitive Behavioral Therapy (CBT)</li>
                      <li>• Mindfulness-based stress reduction</li>
                      <li>• Grief and loss counseling</li>
                      <li>• Anxiety and depression support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Couples Counseling</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Communication improvement</li>
                      <li>• Intimacy and relationship support</li>
                      <li>• Decision-making guidance</li>
                      <li>• Conflict resolution</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Sensitivity */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Culturally Sensitive Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our counselors understand the unique cultural context of fertility in Nigeria and Africa, including:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Extended family expectations and pressures</li>
                  <li>• Religious and spiritual considerations</li>
                  <li>• Traditional beliefs about fertility and childbearing</li>
                  <li>• Stigma around infertility and treatment</li>
                  <li>• Balancing modern medicine with cultural values</li>
                </ul>
              </CardContent>
            </Card>

            {/* When to Seek Support */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>When to Seek Fertility Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Feeling overwhelmed by the fertility journey</li>
                  <li>• Experiencing anxiety, depression, or mood changes</li>
                  <li>• Relationship strain due to fertility challenges</li>
                  <li>• Difficulty coping with treatment failures</li>
                  <li>• Processing pregnancy loss or repeated miscarriages</li>
                  <li>• Making difficult decisions about treatment options</li>
                  <li>• Dealing with family or social pressure</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Book Session</CardTitle>
                <CardDescription>Professional fertility counseling support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">₦20,000</div>
                  <div className="text-gray-600">50-minute session</div>
                  <div className="text-sm text-gray-500 mt-1">Individual or couples</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Flexible scheduling available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Licensed fertility counselors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Complete confidentiality</span>
                  </div>
                </div>

                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Book Session</Button>

                <div className="bg-blue-50 p-3 rounded-md">
                  <p className="text-sm text-blue-800 font-medium">Crisis Support Available</p>
                  <p className="text-xs text-blue-600 mt-1">
                    If you're in emotional distress, contact us immediately for urgent support.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Questions about counseling?{" "}
                    <Link href="/contact" className="text-rose-500 hover:underline">
                      Contact us
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
