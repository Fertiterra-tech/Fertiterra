import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Sprout } from "lucide-react"
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
        <section className="relative overflow-hidden border-b border-[#e7e6df] bg-[#f1f7f1]">
          <div className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12">
            <Link href="/about/founders-story" className="inline-flex items-center gap-2 rounded-full border border-[#cbd9c8] bg-white/70 px-4 py-2 text-sm font-medium text-black transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a957]">
              <ArrowLeft aria-hidden="true" className="size-4" />
              Our founding story
            </Link>
            <div className="mt-12 grid items-end gap-10 md:grid-cols-[1fr_auto] md:gap-12">
              <div className="max-w-3xl">
                <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black">
                  <Sprout aria-hidden="true" className="size-4 text-[#008b49]" />
                  FertiTerra · People first
                </p>
                <h1 className="text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl">
                  Care starts with people.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-black sm:text-xl">
                  Meet the clinicians, operators and builders working together to make fertility care more accessible and inclusive across Africa.
                </p>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-[#ff4242] pl-5 md:mb-2">
                <span className="text-4xl font-semibold tracking-tight text-black">05</span>
                <span className="max-w-24 text-sm leading-5 text-black">people, one shared mission</span>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -right-24 -top-28 size-80 rounded-full border border-[#c4d8c1] sm:size-[28rem]" />
          <div aria-hidden="true" className="absolute -right-12 -top-16 size-64 rounded-full border border-[#c4d8c1] sm:size-96" />
        </section>

        <section aria-labelledby="team-heading" className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black">The people behind the work</p>
              <h2 id="team-heading" className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-4xl">Our team</h2>
            </div>
            <p className="text-sm text-black">A multidisciplinary team with a shared purpose.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {teamMembers.map((member, index) => (
              <article key={member.name} className="group overflow-hidden rounded-[1.35rem] border border-[#e8e6df] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#b7d4bc] hover:shadow-[0_18px_50px_-28px_rgba(0,87,47,0.35)] focus-within:ring-2 focus-within:ring-[#00a957]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f7f1]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority={index < 2}
                    className={`object-cover transition-transform duration-500 group-hover:scale-[1.035] ${member.name === "Kalu Chijioke" ? "object-center" : "object-top"}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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
