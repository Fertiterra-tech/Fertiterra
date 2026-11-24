import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    name: "Kalu Chijioke",
    title: "Founder & CEO",
    imageUrl: "/images/team/kalu-chijioke-official.jpeg",
    bio: "Kalu is a visionary leader with a passion for leveraging technology to improve healthcare access. He holds degrees in Engineering, Public Health and an MBA from MIT, and has over 15 years of experience in healthcare innovation and entrepreneurship.  Driven by a desire to address the significant challenges in fertility care across Africa, Kalu founded FertiTerra Technologies to offer affordable and personalized solutions.",
  },
  {
    name: "Dr. Favour Ayeboua",
    title: "Co-founder & Medical Lead - All Country Operations",
    imageUrl: "/images/team/dr-favour-ayeboua-portrait.png",
    bio: "Dr. Favour Ayeboua is a gynaecologist and obstetrician and co-founder of FertiTerra. She leads medical operations across our countries, guiding evidence-based, patient-centred reproductive care and clinical partnerships.",
  },
  {
    name: "Paulin Fiangueu",
    title: "Chief Operations Officer",
    imageUrl: "/images/team/paulin-fiangueu.png",
    bio: "Paulin Fiangueu is an entrepreneur and operations leader with a Biomedical Sciences background and experience in business development and project management. He has led ventures across Cameroon and Rwanda, including work with African Fresh Market in Kigali.",
  },
  {
    name: "Dr. Smart Akuma",
    title: "Head of Medical Affairs (Gynecology & Fertility Care)",
    imageUrl: "/images/team/smart-akuma-portrait.png",
    bio: "Dr. Akuma is a skilled gynecologist and fertility specialist with expertise in assisted reproductive technologies and personalized fertility care. He holds an MD and a Fellowship in Reproductive Endocrinology, and is committed to providing compassionate and evidence-based care to women facing fertility challenges. As Head of Medical Affairs, Dr. Akuma oversees the development of clinical protocols and medical partnerships to ensure quality and safety in FertiTerra's services.",
  },
  {
    name: "Dr. Christelle Giraneza",
    title: "Clinical Advisor & Strategic Partner",
    imageUrl: "/images/team/dr-christelle-giraneza.png",
    bio: "Dr. Christelle Giraneza is a medical doctor with an MSc in Gender, Sexual and Reproductive Health, founder of Urukundo Initiative, and host of the Vitalia Podcast. At FertiTerra, she reviews our clinical guidance and at-home test journey, and advises on regulation, partnerships, and market entry.",
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
                <Card key={member.name} className="group border-0 shadow-xl">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={member.imageUrl || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover ${member.name === "Kalu Chijioke" ? "object-center" : "object-top"} grayscale transition-transform duration-500 group-hover:scale-110`}
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
        </div>
      </main>
    </div>
  )
}
