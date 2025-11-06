"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Upload } from "lucide-react"
import { Header } from "@/components/header"

const teamMembers = [
  {
    name: "Kalu Chijioke Ugorji",
    role: "Founder & CEO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2825.jpg-eDlS1ieHsDEmaAru7g89kXmLXHgaJF.jpeg",
    bio: "Chijioke is a polymath and academic scholar with expertise in technology, engineering, and health sciences. He studied Chemistry at Michael Okpara University, Industrial Engineering at Dangote Academy, and is pursuing advanced studies in software engineering and health sciences. Driven by personal experiences with infertility stigma, he founded FertiTerra to transform fertility care in Africa through AI-driven, affordable, and inclusive solutions.",
  },
  {
    name: "Dr. Lilian Igweze",
    role: "Head of Research & Diagnostics",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%284%29-GtfLldufzdOV2s8XQH6DEVU9gl35rm.png",
    bio: "Lilian is a health researcher and diagnostics specialist with expertise in fertility testing and medical innovation. At FertiTerra, she spearheads research and the development of our fertility test kits, bridging science and accessibility to bring cutting-edge diagnostics to underserved populations.",
  },
  {
    name: "Dr. Simpa Dania",
    role: "Head of Partnerships & Business Development",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%285%29-u1y6fcOVsdhFiaBp0mNekdRuPrDHwr.png",
    bio: "Simpa is a strategic business leader with extensive experience in building impactful partnerships and scaling ventures across Africa. With a background in entrepreneurship and social innovation, he drives FertiTerra's external collaborations, ensuring strong stakeholder engagement with hospitals, research centers, and industry players.",
  },
  {
    name: "Dr. Kelechi Okoro",
    role: "Head of Public Health Education & Advocacy (Healthertainer)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%283%29-7aJEiLOLhBdqPLyXAdtXXjZ3Hs7kSX.png",
    bio: "Dr. Kelechi, popularly known as The Healthertainer, is a Medical doctor and a passionate health educator and advocate. With years of experience in public health communications, she leads FertiTerra's education and awareness campaigns, reducing stigma around infertility and promoting reproductive health literacy across communities.",
  },
  {
    name: "Dr. Smart Akuma",
    role: "Head of Medical Affairs (Gynecology & Fertility Care)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%282%29-Mdoo3uuoiddEvG2Zn4eWqKVM58bqpI.png",
    bio: "Dr. Smart is a medical doctor and gynecologist with over 7 years of clinical experience in women's reproductive health. He leads FertiTerra's medical advisory, ensuring that all solutions are evidence-based, safe, and patient-centered. His passion lies in helping couples overcome infertility challenges and creating inclusive reproductive health systems across Africa.",
  },
  {
    name: "Joshua Alana",
    role: "Head of Technology & Product Development",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-KmQCJXeTTvjA5VoX5A0RPPP5DxBgf7.png",
    bio: "Joshua is a skilled engineer and innovator with experience in building scalable tech solutions. He leads FertiTerra's digital product development, overseeing the design and implementation of our fertility health app and digital platforms to enhance patient care and user experience.",
  },
  {
    name: "Isaiah Kporon",
    role: "Head of Finance & Impact Measurement",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISAIAH%20-%20Headshot%20%281%29.jpg-n5MeflEirk26mJPEW80MuD73r57iRv.jpeg",
    bio: "Isaiah is a finance professional with a strong background in startup finance, impact investing, and social enterprise accountability. He leads FertiTerra's financial strategy, ensuring sustainability while measuring and reporting the social and health impact of our work.",
  },
]

export default function TeamPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [showExperienceDetails, setShowExperienceDetails] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

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
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* Cofounder Application Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Join FertiTerra as a Cofounder – Medical Team
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-center leading-relaxed">
                FertiTerra is transforming fertility care across Africa through technology, innovation, and compassion.
                We are looking for a passionate female cofounder with a medical background to join our leadership team.
                If you are driven to make fertility care more accessible and equitable, we would love to hear from you.
              </p>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ✅ Your application has been submitted successfully
                  </h3>
                  <p className="text-gray-600">Thank you for applying to join FertiTerra!</p>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/xldodngw"
                  method="POST"
                  encType="multipart/form-data"
                  className="space-y-6"
                  onSubmit={() => setFormSubmitted(true)}
                >
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number (with country code) <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+234 812 345 6789"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Country of Residence */}
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                      Country of Residence <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      placeholder="e.g., Nigeria, Kenya, South Africa"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Professional Title */}
                  <div>
                    <label htmlFor="professionalTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                      Professional Title / Background <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="professionalTitle"
                      name="professionalTitle"
                      required
                      placeholder="e.g., Gynecologist, Nurse, Fertility Specialist"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Years of Experience */}
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience in Healthcare <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="number"
                      id="experience"
                      name="experience"
                      required
                      min="0"
                      placeholder="e.g., 5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Current Organization */}
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Organization / Affiliation <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      placeholder="e.g., Lagos University Teaching Hospital"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Why interested */}
                  <div>
                    <label htmlFor="whyInterested" className="block text-sm font-semibold text-gray-700 mb-2">
                      Why are you interested in joining FertiTerra as a cofounder?{" "}
                      <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="whyInterested"
                      name="whyInterested"
                      required
                      rows={4}
                      placeholder="Share your motivation and vision for fertility care in Africa..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none outline-none"
                    />
                  </div>

                  {/* Unique skills */}
                  <div>
                    <label htmlFor="uniqueSkills" className="block text-sm font-semibold text-gray-700 mb-2">
                      What unique skills or expertise will you bring to the FertiTerra medical team?{" "}
                      <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="uniqueSkills"
                      name="uniqueSkills"
                      required
                      rows={4}
                      placeholder="Describe your specific expertise, skills, and value proposition..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none outline-none"
                    />
                  </div>

                  {/* Fertility experience */}
                  <div>
                    <label htmlFor="fertilityExperience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Have you previously worked in fertility or reproductive health?{" "}
                      <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="fertilityExperience"
                      name="fertilityExperience"
                      required
                      onChange={(e) => setShowExperienceDetails(e.target.value === "yes")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {/* Optional details for fertility experience */}
                  {showExperienceDetails && (
                    <div>
                      <label htmlFor="fertilityDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                        If yes, please provide details (Optional)
                      </label>
                      <textarea
                        id="fertilityDetails"
                        name="fertilityDetails"
                        rows={3}
                        placeholder="Describe your experience in fertility or reproductive health..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none outline-none"
                      />
                    </div>
                  )}

                  {/* LinkedIn Profile */}
                  <div>
                    <label htmlFor="linkedinProfile" className="block text-sm font-semibold text-gray-700 mb-2">
                      LinkedIn Profile or Portfolio URL <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="url"
                      id="linkedinProfile"
                      name="linkedinProfile"
                      required
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  {/* Upload CV */}
                  <div>
                    <label htmlFor="cv" className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload CV (PDF or DOCX only) <span className="text-rose-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="cv"
                        name="cv"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="cv"
                        className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-rose-500 transition-all"
                      >
                        <Upload className="w-5 h-5 mr-2 text-gray-400" />
                        <span className="text-gray-600">{fileName || "Click to upload CV (PDF or DOCX)"}</span>
                      </label>
                    </div>
                  </div>

                  {/* How soon can you commit */}
                  <div>
                    <label htmlFor="commitmentTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      How soon can you commit to joining the team? <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="commitmentTime"
                      name="commitmentTime"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none"
                    >
                      <option value="">Select a timeframe</option>
                      <option value="immediately">Immediately</option>
                      <option value="1-3-months">1–3 months</option>
                      <option value="3-6-months">3–6 months</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-rose-500 to-green-500 text-white font-bold py-4 px-8 rounded-lg hover:from-rose-600 hover:to-green-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </div>

                  {/* Footer Text */}
                  <p className="text-sm text-gray-600 text-center pt-4">
                    Thank you for your interest in joining FertiTerra. We review every application carefully and will
                    reach out to shortlisted candidates via email.
                  </p>
                </form>
              )}
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
