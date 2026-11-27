import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata = {
  title: "Care for every body, at every stage | FertiTerra",
  description: "FertiTerra exists because too many people are dismissed when they ask about their fertility. We do not turn anyone away for who they are or who they love.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 lg:px-20 lg:py-20">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1F3D33]/70">FertiTerra</p>
        <h1 className="mt-4 max-w-[20ch] font-[family-name:var(--font-playfair)] text-[34px] leading-[1.12] tracking-[-0.01em] text-[#1F2328] sm:text-[44px] lg:text-[56px]">
          Care for every body, at every stage
        </h1>
        <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-[#1F2328]/75 sm:text-[19px]">
          FertiTerra exists because too many people are dismissed when they ask about their fertility. We do not turn anyone away for who they are or who they love.
        </p>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-[26px] leading-tight text-[#1F2328] sm:text-[30px]">What this means in practice</h2>

        <ul className="mt-8 max-w-[62ch] space-y-4 text-[17px] leading-relaxed text-[#1F2328]/75">
          <li>We care for single people, couples and anyone building a family on their own terms.</li>
          <li>We care for LGBTQIA+ people, and our family building guidance is written for you, not adapted from somewhere else.</li>
          <li>We care for people at every stage, from planning ahead to perimenopause.</li>
          <li>We write in plain language, because being confused by your own health information is part of the problem.</li>
        </ul>
        </section>
        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-[26px] leading-tight text-[#1F2328] sm:text-[30px]">Where to start</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/learn/lgbtqia-family"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">LGBTQIA+ family building</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Options, clinics and what to ask.</span>
          </Link>
          <Link
            href="/learn/planning-future-children"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Planning for future children</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Check where you stand before you start.</span>
          </Link>
          <Link
            href="/about/team"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Meet the clinical team</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">The doctors and advisors you will speak to.</span>
          </Link>
        </div>
        </section>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/screening"
            className="inline-flex h-[56px] items-center justify-center rounded-xl bg-[#1F2328] px-7 text-[17px] font-medium text-white transition-colors hover:bg-[#1F3D33]"
          >
            Start my free assessment
          </Link>
          <Link
            href="/consultation"
            className="inline-flex h-[56px] items-center justify-center rounded-xl border border-[#1F2328]/25 px-7 text-[17px] font-medium text-[#1F2328] transition-colors hover:border-[#1F2328]"
          >
            Speak to an expert
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
