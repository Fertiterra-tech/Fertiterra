import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Meet Our Team - Transforming Fertility Care in Africa",
  description:
    "Meet the passionate team behind FertiTerra's mission to provide accessible and personalized fertility care across Africa.",
}

const teamMembers = [
  {
    name: "Kalu Chijioke Ugorji",
    title: "Founder & CEO",
    imageUrl: "/images/team/kalu-chijioke-ugorji.jpg",
    bio: "Kalu is a visionary leader with a passion for leveraging technology to improve healthcare access. He holds degrees in Engineering, Public Health and an MBA from MIT, and has over 15 years of experience in healthcare innovation and entrepreneurship.  Driven by a desire to address the significant challenges in fertility care across Africa, Kalu founded FertiTerra Technologies to offer affordable and personalized solutions.",
  },
  {
    name: "Dr. Lilian Igweze",
    title: "Head of Research & Diagnostics",
    imageUrl: "/images/team/lilian-igweze.jpg",
    bio: "Dr. Igweze is a renowned expert in reproductive endocrinology with over 20 years of experience in fertility research and diagnostics.  She holds a PhD in Reproductive Biology and has published extensively in leading medical journals.   As Head of Research & Diagnostics at FertiTerra, she spearheads the development of cutting-edge diagnostic tools and research initiatives to improve fertility outcomes for women across Africa.",
  },
  {
    name: "Dr. Simpa Dania",
    title: "Head of Partnerships & Business Development",
    imageUrl: "/images/team/simpa-dania.jpg",
    bio: "Dr. Dania is a seasoned healthcare executive with expertise in strategic partnerships and business development. He holds an MD and MBA from Yale University, and has a proven track record of building successful healthcare ventures across Africa.   At FertiTerra, Dr. Dania leads efforts to establish key partnerships with hospitals, clinics, and other organizations to expand access to FertiTerra’s services.",
  },
  {
    name: "Dr. Kelechi Okoro",
    title: "Head of Public Health Education & Advocacy",
    imageUrl: "/images/team/kelechi-okoro.jpg",
    bio: "Dr. Okoro is a passionate advocate for women’s health and reproductive rights. She is a medical doctor with over 10 years of experience in public health education and community engagement. As Head of Public Health Education & Advocacy at FertiTerra, Dr. Okoro develops and implements awareness campaigns to address infertility stigma and promote informed decision-making about reproductive health.",
  },
  {
    name: "Dr. Smart Akuma",
    title: "Head of Medical Affairs (Gynecology & Fertility Care)",
    imageUrl: "/images/team/smart-akuma.jpg",
    bio: "Dr. Akuma is a skilled gynecologist and fertility specialist with expertise in assisted reproductive technologies and personalized fertility care. He holds an MD and a Fellowship in Reproductive Endocrinology, and is committed to providing compassionate and evidence-based care to women facing fertility challenges. As Head of Medical Affairs, Dr. Akuma oversees the development of clinical protocols and medical partnerships to ensure quality and safety in FertiTerra's services.",
  },
  {
    name: "Joshua Alana",
    title: "Head of Technology & Product Development",
    imageUrl: "/images/team/joshua-alana.jpg",
    bio: "Joshua is a creative technology leader with over 8 years of experience in software development and product design. He is passionate about using technology to solve real-world problems and improve people's lives. At FertiTerra, Joshua leads the development of innovative technology solutions to make fertility care more accessible, personalized, and convenient.",
  },
  {
    name: "Isaiah Kporon",
    title: "Head of Finance & Impact Measurement",
    imageUrl: "/images/team/isaiah-kporon.jpg",
    bio: "Isaiah is a seasoned finance professional with a passion for social impact. He holds a Masters in Finance and has extensive experience in financial management, impact investing, and social enterprise. At FertiTerra, Isaiah leads the financial operations and develops metrics to measure the social impact of the company.",
  },
]

export default function MeetTheTeamPage() {
  return (
    <div className="bg-white">
      <header className="bg-white">
        {/* Header Content - Reuse existing component */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/fertiterra-logo.png"
            alt="FertiTerra Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Team Members Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Our team is made up of world-class experts in healthcare and technology
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <Card key={member.name} className="border-0 shadow-xl">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={member.imageUrl || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">{member.name}</CardTitle>
                    <CardDescription className="text-gray-500">{member.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-600 text-sm leading-relaxed line-clamp-5">{member.bio}</CardContent>
                </Card>
              ))}
            </div>
          </section>
          {/* Cofounder Application Form Section */}
          <section className="py-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg shadow-xl">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Join FertiTerra as a Cofounder – Medical Team
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  FertiTerra is transforming fertility care across Africa through technology, innovation, and
                  compassion. We are looking for a passionate female cofounder with a medical background to join our
                  leadership team. If you are driven to make fertility care more accessible and equitable, we would love
                  to hear from you.
                </p>
                <form action="https://formspree.io/f/xldodngw" method="POST" className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="Full Name"
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="Email Address"
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="Phone Number"
                      placeholder="+234 (Nigeria) 8000000000"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country of Residence
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="country"
                      name="Country of Residence"
                      placeholder="Enter your country of residence"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Professional Title / Background
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="title"
                      name="Professional Title / Background"
                      placeholder="e.g., Gynecologist, Nurse, Fertility Specialist"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience in Healthcare
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      id="experience"
                      name="Years of Experience in Healthcare"
                      placeholder="Enter the number of years"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Organization / Affiliation
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="organization"
                      name="Current Organization / Affiliation"
                      placeholder="Enter your current organization"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="whyInterested" className="block text-sm font-medium text-gray-700 mb-1">
                      Why are you interested in joining FertiTerra as a cofounder?
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Textarea
                      id="whyInterested"
                      name="Why are you interested in joining FertiTerra as a cofounder?"
                      placeholder="Explain your interest in a short paragraph"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500 h-24"
                    />
                  </div>

                  <div>
                    <Label htmlFor="skillsExpertise" className="block text-sm font-medium text-gray-700 mb-1">
                      What unique skills or expertise will you bring to the FertiTerra medical team?
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Textarea
                      id="skillsExpertise"
                      name="What unique skills or expertise will you bring to the FertiTerra medical team?"
                      placeholder="Describe your unique skills and expertise"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500 h-24"
                    />
                  </div>

                  <div>
                    <Label htmlFor="fertilityExperience" className="block text-sm font-medium text-gray-700 mb-1">
                      Have you previously worked in fertility or reproductive health?
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn Profile or Portfolio URL
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      type="url"
                      id="linkedin"
                      name="LinkedIn Profile or Portfolio URL"
                      placeholder="Enter your LinkedIn profile URL or portfolio URL"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvUpload" className="block text-sm font-medium text-gray-700 mb-1">
                      Upload CV (PDF or DOCX only)
                      <span className="text-rose-500">*</span>
                    </Label>
                    <input
                      type="file"
                      id="cvUpload"
                      name="cvUpload"
                      accept=".pdf,.docx"
                      required
                      className="w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md
                    file:border-0
                    file:text-sm file:font-semibold
                    file:bg-rose-500 file:text-white
                    hover:file:bg-rose-700
                    cursor-pointer"
                    />
                  </div>

                  <div>
                    <Label htmlFor="commitment" className="block text-sm font-medium text-gray-700 mb-1">
                      How soon can you commit to joining the team?
                      <span className="text-rose-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full px-4 py-2 border rounded-md focus:ring-rose-500 focus:border-rose-500">
                        <SelectValue placeholder="Select a timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Immediately">Immediately</SelectItem>
                        <SelectItem value="1–3 months">1–3 months</SelectItem>
                        <SelectItem value="3–6 months">3–6 months</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full py-3 bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-semibold rounded-md shadow-md transition-colors duration-300 transform hover:scale-105">
                    Submit Application
                  </Button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Thank you for your interest in joining FertiTerra. We review every application carefully and will
                  reach out to shortlisted candidates via email.
                </p>
              </div>
            </div>
          </section>
          {/* Previous section with the same styling */}
        </div>
      </main>
    </div>
  )
}
