import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
    role: "Co-founder & Medical Lead — All Country Operations",
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
    role: "Head of Medical Affairs · Gynecology & Fertility Care",
    image: "/images/team/smart-akuma-portrait.png",
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
    <div className="min-h-screen bg-[#fbfaf7] text-black">
      <Header />
      <main>
        <section className="border-b border-[#e7e6df] bg-[#f1f7f1]">
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14 lg:px-12 lg:py-20">
            <h1 className="max-w-md text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#123d2b] sm:text-6xl lg:text-7xl">
              We are the Ferti-team.
            </h1>
            <p className="max-w-2xl border-l-2 border-[#00a957] pl-5 text-base leading-7 text-black sm:pl-7 sm:text-lg sm:leading-8">
              We are a growing team of experts, including scientists, researchers, doctors, lawyers, designers, developers, and business people. All on a mission to educate, empower and help you be #ReProductive. We all bring our individual skill sets together to ensure that we can provide entirely tailored, accessible, affordable, and high-quality at-home health testing.
            </p>
          </div>
        </section>

        <section aria-label="Team profiles" className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {teamMembers.map((member, index) => (
              <article key={member.name} className="group overflow-hidden rounded-[1.35rem] border border-[#e8e6df] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#b7d4bc] hover:shadow-[0_18px_50px_-28px_rgba(0,87,47,0.35)] focus-within:ring-2 focus-within:ring-[#00a957]">
                <div className="relative aspect-square overflow-hidden bg-[#f1f7f1]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index < 2}
                    className={`object-cover grayscale transition-transform duration-500 group-hover:scale-[1.035] ${member.name === "Kalu Chijioke" ? "object-center" : "object-top"}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-black">{member.name}</h3>
                  <p className="mt-2 min-h-10 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-black">{member.role}</p>
                  <div className="my-4 h-px w-10 bg-[#00a957] transition-all duration-300 group-hover:w-16" />
                  <p className="text-sm leading-6 text-black">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
          <div className="flex flex-col gap-7 rounded-[1.5rem] bg-[#dff3e5] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black">A more hopeful way forward</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-black sm:text-4xl">Your journey deserves thoughtful care.</h2>
              <p className="mt-3 max-w-xl leading-7 text-black">We’re here to make fertility support feel more personal, informed and within reach.</p>
            </div>
            <Link href="/" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#00bf63] px-6 font-semibold text-black transition hover:bg-[#00a957] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
              Explore FertiTerra
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
