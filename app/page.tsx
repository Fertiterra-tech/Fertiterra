import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Video,
  Package,
  ArrowRight,
  CheckCircle,
  Heart,
  Users,
  Shield,
  TestTube,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Header } from "@/components/header"
import { HomeHero } from "@/components/home-hero"
import { HomePartnershipStrips } from "@/components/home-partnership-strips"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FertiTerra - Personalized Fertility Tests & Support",
  description:
    "Take control of your fertility journey with FertiTerra. Get at-home testing, expert consultations, and a supportive community. Serving Africa and beyond.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <HomePartnershipStrips />

        {/* Journey Cards Section */}
        <section className="journey-section" aria-labelledby="journey-section-title">
          <div className="journey-section__inner">
            <div className="journey-section__intro">
              <h2 id="journey-section-title">
                We&apos;re all at different stages of our <em>journey</em>
              </h2>
              <p>What&apos;s most important to you?</p>
            </div>

            <div className="journey-section__cards">
              <Link href="/appointments/menopause-specialist" className="journey-card group">
                <Image
                  src="/images/couple-fertility-journey-2.png"
                  alt="Happy couple at home - woman in red headwrap and man in gray cardigan smiling together"
                  fill
                  className="journey-card__image"
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 54vw, 700px"
                />
                <span className="journey-card__gradient" aria-hidden="true" />
                <span className="journey-card__plus" aria-hidden="true">+</span>
                <span className="journey-card__copy">
                  <span className="journey-card__title">Managing symptoms</span>
                  <span className="journey-card__description">Fatigue, irritability, anxiety, feeling cold, low mood, acne...</span>
                </span>
              </Link>

              <Link href="/plans/ttc" className="journey-card group">
                <Image
                  src="/images/couple-fertility-journey-1.png"
                  alt="Loving couple in kitchen - man embracing woman from behind, both smiling warmly"
                  fill
                  className="journey-card__image"
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 54vw, 700px"
                />
                <span className="journey-card__gradient" aria-hidden="true" />
                <span className="journey-card__plus" aria-hidden="true">+</span>
                <span className="journey-card__copy">
                  <span className="journey-card__title">Fertility</span>
                  <span className="journey-card__description">Planning for the future or actively trying to conceive</span>
                </span>
              </Link>

              <Link href="/learn/experiencing-symptoms" className="journey-card group">
                <Image
                  src="/images/couple-fertility-journey-3.png"
                  alt="Joyful couple outdoors at sunset - man giving woman piggyback ride, both laughing"
                  fill
                  className="journey-card__image"
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 54vw, 700px"
                />
                <span className="journey-card__gradient" aria-hidden="true" />
                <span className="journey-card__plus" aria-hidden="true">+</span>
                <span className="journey-card__copy">
                  <span className="journey-card__title">Perimenopause or Menopause</span>
                  <span className="journey-card__description">Menopausal or experiencing symptoms and looking for support</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why You Deserve Better Section - Enhanced with Images */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-rose-50/30 to-purple-50/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-gray-900 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                Why You Deserve Better
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Traditional fertility care is broken. We're here to fix it with personalized, accessible, and
                compassionate care that puts you first.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
              {/* No More Waiting Card */}
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-rose-50/50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="relative mb-6">
                    <div className="h-48 w-full overflow-hidden rounded-xl mb-4">
                      <Image
                        src="/images/healthcare-provider-hands.png"
                        alt="Healthcare provider in teal scrubs holding patient's hands in supportive gesture"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg border-4 border-rose-100 group-hover:border-rose-200 transition-colors duration-300">
                      <Clock className="h-8 w-8 text-rose-500" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                    No More Waiting
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pt-2">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Get answers in days, not months. Our at-home tests and telemedicine consultations mean faster
                    results and quicker action.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-2 text-sm text-rose-600 font-medium">
                      <CheckCircle className="h-4 w-4" />
                      <span>Same-day consultations available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personalized Care Card */}
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="relative mb-6">
                    <div className="h-48 w-full overflow-hidden rounded-xl mb-4">
                      <Image
                        src="/images/woman-health-checkup.png"
                        alt="Smiling Black woman having comfortable health checkup with healthcare provider"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg border-4 border-purple-100 group-hover:border-purple-200 transition-colors duration-300">
                      <Heart className="h-8 w-8 text-purple-500" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    Personalized Care
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pt-2">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Your fertility journey is unique. Get personalized insights, treatment plans, and support tailored
                    specifically to your needs.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                      <CheckCircle className="h-4 w-4" />
                      <span>Tailored to your unique needs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expert Community Card */}
              <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-pink-50/50">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="relative mb-6">
                    <div className="h-48 w-full overflow-hidden rounded-xl mb-4">
                      <Image
                        src="/images/supportive-hands.png"
                        alt="Supportive hands holding each other in caring, comforting gesture representing community support"
                        width={400}
                        height={200}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg border-4 border-pink-100 group-hover:border-pink-200 transition-colors duration-300">
                      <Users className="h-8 w-8 text-pink-500" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                    Expert Community
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pt-2">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Connect with fertility specialists, nutritionists, and a supportive community of women on similar
                    journeys.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-2 text-sm text-pink-600 font-medium">
                      <CheckCircle className="h-4 w-4" />
                      <span>10,000+ women in our community</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Trust Indicators */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="font-medium">HIPAA Compliant</span>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Board-Certified Specialists</span>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Heart className="h-5 w-5 text-rose-500" />
                  <span className="font-medium">99% Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FertiTerra Plans Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">FertiTerra Plans</h2>
              <p className="text-lg text-gray-600">Choose the plan that best fits your fertility journey</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {/* Free / Access Tier */}
              <Card className="flex flex-col overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="space-y-3 pb-6">
                  <div className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-blue-500" />
                    <CardTitle className="text-xl">Free / Access Tier</CardTitle>
                  </div>
                  <CardDescription className="text-sm">Fertility Awareness & Tracking</CardDescription>
                  <div className="pt-2">
                    <div className="text-4xl font-bold text-blue-600">
                      $0<span className="text-lg font-normal text-gray-500">/month</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 pb-6">
                  <ul className="space-y-3">
                    {[
                      "Cycle and ovulation tracking",
                      "Hormone education & webinars",
                      "Fertility literacy newsletter",
                      "Interactive quizzes & self-learning",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 pb-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  >
                    <Link href="/plans/free-access">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Self-Assessment Tier */}
              <Card className="flex flex-col overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="space-y-3 pb-6">
                  <div className="flex items-center gap-2">
                    <TestTube className="h-6 w-6 text-teal-500" />
                    <CardTitle className="text-xl">Self-Assessment Tier</CardTitle>
                  </div>
                  <CardDescription className="text-sm">Know Your Fertility Status</CardDescription>
                  <div className="pt-2">
                    <div className="text-4xl font-bold text-teal-600">
                      $35–$200<span className="text-lg font-normal text-gray-500">/one-time</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 pb-6">
                  <ul className="space-y-3">
                    {[
                      "At-home fertility test kit (hormone, ovarian reserve, sperm)",
                      "AI-powered fertility score & personalized health report",
                      "Optional results consultation via app",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 pb-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
                  >
                    <Link href="/plans/self-assessment">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Guided Support Tier */}
              <Card className="flex flex-col overflow-hidden border-2 border-rose-200 shadow-md hover:shadow-lg transition-shadow bg-white relative">
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-rose-500 text-white text-xs font-semibold py-2 px-4 text-center">Most Popular</div>
                </div>
                <CardHeader className="space-y-3 pb-6 pt-12">
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-rose-500" />
                    <CardTitle className="text-xl">Guided Support Tier</CardTitle>
                  </div>
                  <CardDescription className="text-sm">Improve & Take Action</CardDescription>
                  <div className="pt-2">
                    <div className="text-4xl font-bold text-rose-600">
                      $20<span className="text-lg font-normal text-gray-500">/month</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 pb-6">
                  <ul className="space-y-3">
                    {[
                      "Personalized digital plans (diet, supplements, habits)",
                      "AI-driven progress tracking",
                      "Optional teleconsults with experts",
                      "Access to support groups & fertility community",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 pb-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white"
                  >
                    <Link href="/plans/guided-support">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Partner & Referral Tier */}
              <Card className="flex flex-col overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="space-y-3 pb-6">
                  <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-purple-500" />
                    <CardTitle className="text-xl">Partner & Referral Tier</CardTitle>
                  </div>
                  <CardDescription className="text-sm">Clinical & Specialist Escalation</CardDescription>
                  <div className="pt-2">
                    <div className="text-4xl font-bold text-purple-600">Pay-as-you-go</div>
                    <p className="text-sm text-gray-500 mt-1">(referral-based)</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-3 pb-6">
                  <ul className="space-y-3">
                    {[
                      "Referral to vetted fertility clinics & labs",
                      "Priority scheduling with partner specialists",
                      "Shared medical reports for continuity of care",
                      "Hospital referral discounts & revenue-sharing partnerships",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0 pb-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                  >
                    <Link href="/plans/partner-referral">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How FertiTerra Works</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Your journey to better reproductive health in four simple steps
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  title: "Choose Your Plan",
                  description: "Start with our Basic Checkup or comprehensive TTC plan—whatever feels right for you.",
                  icon: Package,
                },
                {
                  title: "Get Personalized Care",
                  description: "Receive detailed insights and recommendations tailored to your unique situation.",
                  icon: Heart,
                },
                {
                  title: "Connect with Experts",
                  description: "Speak with fertility specialists who understand and validate your concerns.",
                  icon: Video,
                },
                {
                  title: "Take Action",
                  description: "Move forward with confidence using your personalized care plan.",
                  icon: CheckCircle,
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-lg">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 text-rose-600 mb-6">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our fertility plans and services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">About Our Plans</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        How do I know which plan is right for me?
                      </AccordionTrigger>
                      <AccordionContent>
                        The Basic Fertility Checkup is ideal if you're just starting to explore your fertility health or
                        planning for the future. The TTC Plan is best if you're actively trying to conceive and want
                        comprehensive support. Still unsure? Start with our free 15-minute consultation to get
                        personalized guidance.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        What's included in the at-home fertility test kit?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our TTC Plan includes a comprehensive test kit with 70 test strips for tracking ovulation and
                        fertility hormones. For female partners, it includes an AMH test to assess ovarian reserve. For
                        male partners, it includes a sperm quality analysis kit. All tests can be completed at home and
                        include clear instructions.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        Can I upgrade from the Basic Plan to the TTC Plan?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes! You can easily upgrade from the Basic Fertility Checkup to the TTC Plan at any time. We'll
                        apply the $5 you paid for the Basic Plan as a credit toward your TTC Plan purchase.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">When will the other plans be available?</AccordionTrigger>
                      <AccordionContent>
                        We're working hard to launch our Perimenopausal/Menopausal Health Plan and General Wellness &
                        Fertility Support Plan in the coming months. Join our waitlist to be notified as soon as they're
                        available and receive special early access pricing.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">Testing & Results</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">How accurate are the at-home tests?</AccordionTrigger>
                      <AccordionContent>
                        Our at-home fertility tests are over 99% accurate when used correctly. They're the same
                        laboratory-grade tests used by fertility clinics, but designed for convenient home use. Each kit
                        includes detailed instructions to ensure accurate results.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-left">How long does it take to get results?</AccordionTrigger>
                      <AccordionContent>
                        For the TTC Plan, ovulation test results are immediate. For hormone tests that require lab
                        analysis (like AMH testing), you'll receive results within 7-10 days after your sample arrives
                        at our lab. Your consultation will be scheduled after all results are available.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-left">
                        What happens after I receive my results?
                      </AccordionTrigger>
                      <AccordionContent>
                        After receiving your results, you'll have a consultation with one of our fertility specialists
                        who will explain your results in detail and provide personalized recommendations. For TTC Plan
                        members, you'll also receive a customized action plan with specific steps to optimize your
                        fertility.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                      <AccordionTrigger className="text-left">Can I order additional test strips?</AccordionTrigger>
                      <AccordionContent>
                        Yes! TTC Plan members can order additional test strips at a discounted rate. Simply log into
                        your account and visit the "Order Supplies" section, or contact our customer support team for
                        assistance.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">Consultations & Support</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-9">
                      <AccordionTrigger className="text-left">Who are your fertility specialists?</AccordionTrigger>
                      <AccordionContent>
                        Our fertility specialists are board-certified reproductive endocrinologists, OB/GYNs, and
                        fertility nurses with extensive experience in reproductive health. All specialists undergo
                        rigorous vetting and training to ensure they provide compassionate, evidence-based care.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                      <AccordionTrigger className="text-left">How do the consultations work?</AccordionTrigger>
                      <AccordionContent>
                        Consultations take place via secure video call at a time that's convenient for you. The Basic
                        Plan includes a 15-minute consultation, while the TTC Plan includes a comprehensive 30-minute
                        session. You'll receive a link to join your consultation via email, and you can connect from any
                        device with internet access.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                      <AccordionTrigger className="text-left">
                        What kind of support is available after my consultation?
                      </AccordionTrigger>
                      <AccordionContent>
                        Both plans include access to our community support groups via WhatsApp or Telegram. TTC Plan
                        members also receive ongoing customer support checks and can opt for additional services like
                        private messaging with specialists and follow-up consultations at preferential rates.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                      <AccordionTrigger className="text-left">
                        How do the community support groups work?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our community support groups are moderated spaces where you can connect with others on similar
                        fertility journeys. Groups include monthly expert Q&A sessions where specialists answer
                        questions. All groups follow strict privacy and respect guidelines to ensure a safe, supportive
                        environment.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-rose-600">Billing & Practical Matters</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-13">
                      <AccordionTrigger className="text-left">Do you accept insurance for your plans?</AccordionTrigger>
                      <AccordionContent>
                        While we don't directly bill insurance companies, many of our services may be eligible for
                        reimbursement through your insurance provider or HSA/FSA accounts. We provide detailed receipts
                        that you can submit to your insurance for potential reimbursement.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14">
                      <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                      <AccordionContent>
                        We accept all major credit cards, PayPal, and Apple Pay. For the TTC Plan, we also offer
                        installment payment options through Affirm or Klarna to make fertility care more accessible.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15">
                      <AccordionTrigger className="text-left">What is your refund policy?</AccordionTrigger>
                      <AccordionContent>
                        If you're not satisfied with our services, we offer a 30-day money-back guarantee for unused
                        test kits (unopened and in original packaging). Consultation fees are non-refundable once the
                        consultation has taken place. Please contact our customer support team for assistance with
                        returns or refunds.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-16">
                      <AccordionTrigger className="text-left">How is my privacy protected?</AccordionTrigger>
                      <AccordionContent>
                        We take your privacy seriously. All your health information is protected under HIPAA
                        regulations. Your test results and consultations are confidential and securely stored. We never
                        share or sell your personal information. You can review our complete privacy policy for more
                        details.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">Don't see your question answered here? Our team is ready to help.</p>
                <Button asChild className="bg-rose-600 hover:bg-rose-700">
                  <Link href="/support">Contact Our Support Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Certification Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-gray-500 mb-4">Trusted and certified by</p>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "CQC", image: "/placeholder.svg?height=48&width=80&text=CQC" },
                  { name: "ISO", image: "/placeholder.svg?height=48&width=80&text=ISO" },
                  { name: "CE", image: "/placeholder.svg?height=48&width=80&text=CE" },
                ].map((cert) => (
                  <div key={cert.name} className="h-12 w-auto">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.name}
                      width={80}
                      height={48}
                      className="h-full w-auto opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-purple-600">
          <div className="container">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto text-white">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Ready to get the care you deserve?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of women who've taken control of their fertility journey with FertiTerra's personalized
                testing, expert consultations, and supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Link href="/plans/basic-fertility-checkup">Start with Basic Plan</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-4 bg-transparent"
                >
                  <Link href="/plans/ttc">Choose TTC Plan</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 md:pl-12">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/images/fertiterra-logo.png"
                  alt="FertiTerra Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-500 mb-4">
                Empowering women with the fertility care they deserve—personalized, accessible, and compassionate.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/fertiterra-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/fertiterra_technologies?igsh=MXMyZmN3cGRraTJzcg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Plans</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/plans/basic-fertility-checkup" className="text-sm text-gray-500 hover:text-rose-500">
                    Basic Fertility Checkup
                  </Link>
                </li>
                <li>
                  <Link href="/plans/ttc" className="text-sm text-gray-500 hover:text-rose-500">
                    TTC Plan
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-gray-400">Perimenopausal Plan (Coming Soon)</span>
                </li>
                <li>
                  <span className="text-sm text-gray-400">General Wellness (Coming Soon)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/consultation" className="text-sm text-gray-500 hover:text-rose-500">
                    Doctor Consultations
                  </Link>
                </li>
                <li>
                  <Link href="/test-kits" className="text-sm text-gray-500 hover:text-rose-500">
                    At-Home Test Kits
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-gray-500 hover:text-rose-500">
                    Support Groups
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about/founders-story" className="text-sm text-gray-500 hover:text-rose-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-500 hover:text-rose-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-gray-500 hover:text-rose-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} FertiTerra. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-rose-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-rose-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
