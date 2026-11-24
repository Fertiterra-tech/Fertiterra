import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

const teamMembers = [
  {
    name: "Kalu Chijioke",
    role: "Founder & CEO",
    image: "/images/team/kalu-chijioke-official.jpeg",
    bio: "Chijioke is a polymath and academic scholar with expertise in technology, engineering, and health sciences. He studied Chemistry at Michael Okpara University, Industrial Engineering at Dangote Academy, and is pursuing advanced studies in software engineering and health sciences. Driven by personal experiences with infertility stigma, he founded FertiTerra to transform fertility care in Africa through AI-driven, affordable, and inclusive solutions.",
  },
  {
    name: "Dr. Favour Ayeboua",
    role: "Co-founder & Medical Lead - All Country Operations",
    image: "/images/team/dr-favour-ayeboua-portrait.png",
    bio: "Dr. Favour Ayeboua is a gynaecologist and obstetrician and co-founder of FertiTerra. She leads medical operations across our countries, guiding evidence-based, patient-centred reproductive care and clinical partnerships.",
  },
  {
    name: "Paulin Fiangueu",
    role: "Chief Operations Officer",
    image: "/images/team/paulin-fiangueu.png",
    bio: "Paulin Fiangueu is an entrepreneur and operations leader with a Biomedical Sciences background and experience in business development and project management. He has led ventures across Cameroon and Rwanda, including work with African Fresh Market in Kigali.",
  },
  {
    name: "Dr. Smart Akuma",
    role: "Head of Medical Affairs (Gynecology & Fertility Care)",
    image:
      "/images/team/smart-akuma-portrait.png",
    bio: "Dr. Smart is a medical doctor and gynecologist with over 7 years of clinical experience in women's reproductive health. He leads FertiTerra's medical advisory, ensuring that all solutions are evidence-based, safe, and patient-centered. His passion lies in helping couples overcome infertility challenges and creating inclusive reproductive health systems across Africa.",
  },
  {
    name: "Dr. Christelle Giraneza",
    role: "Clinical Advisor & Strategic Partner",
    image: "/images/team/dr-christelle-giraneza.png",
    bio: "Dr. Christelle Giraneza is a medical doctor with an MSc in Gender, Sexual and Reproductive Health, founder of Urukundo Initiative, and host of the Vitalia Podcast. At FertiTerra, she reviews our clinical guidance and at-home test journey, and advises on regulation, partnerships, and market entry.",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/about/founders-story"
              className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Founder's Story
            </Link>

            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Meet the Team</h1>
              <p className="text-xl text-gray-600 mb-8">
                We are a multidisciplinary team dedicated to transforming fertility care in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-2xl overflow-hidden bg-white"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className={`object-cover ${member.name === "Kalu Chijioke" ? "object-center" : "object-top"} grayscale group-hover:scale-105 transition-transform duration-300`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-rose-600 font-semibold mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                      <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-green-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Fertility Care?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our mission to make fertility care accessible, affordable, and inclusive across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-rose-600 bg-transparent"
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
