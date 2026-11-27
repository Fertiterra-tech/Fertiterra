import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata = {
  title: "What your report contains | FertiTerra",
  description: "Every at-home hormone and fertility test ends with a written report and a clinician review. This is what you get and how to read it.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 lg:px-20 lg:py-20">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1F3D33]/70">FertiTerra</p>
        <h1 className="mt-4 max-w-[20ch] font-[family-name:var(--font-playfair)] text-[34px] leading-[1.12] tracking-[-0.01em] text-[#1F2328] sm:text-[44px] lg:text-[56px]">
          What your report contains
        </h1>
        <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-[#1F2328]/75 sm:text-[19px]">
          Every at-home hormone and fertility test ends with a written report and a clinician review. This is what you get and how to read it.
        </p>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-[26px] leading-tight text-[#1F2328] sm:text-[30px]">The six markers in the core panel</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/test-kits/hormone-fertility"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">AMH</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Anti-Müllerian hormone, an indicator of ovarian reserve.</span>
          </Link>
          <Link
            href="/test-kits/hormone-fertility"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">FSH</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Follicle stimulating hormone, part of how your cycle is driven.</span>
          </Link>
          <Link
            href="/test-kits/hormone-fertility"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">LH</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Luteinizing hormone, which triggers ovulation.</span>
          </Link>
          <Link
            href="/test-kits/hormone-fertility"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Estradiol</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">The main form of oestrogen your body produces.</span>
          </Link>
          <Link
            href="/test-kits/hormone-fertility"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Progesterone</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Confirms whether and when you ovulated.</span>
          </Link>
          <Link
            href="/test-kits/hormone-fertility"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Free Androgen Index</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Androgen activity, relevant to PCOS and skin or cycle changes.</span>
          </Link>
        </div>
        </section>
        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-[26px] leading-tight text-[#1F2328] sm:text-[30px]">What comes with it</h2>

        <ul className="mt-8 max-w-[62ch] space-y-4 text-[17px] leading-relaxed text-[#1F2328]/75">
          <li>Your results in plain language, not just numbers on a page.</li>
          <li>A care plan written by a FertiTerra clinician, based on your results and your answers.</li>
          <li>A clinical result review call to walk through what it means for your next step.</li>
          <li>Results within 10 days of your sample reaching the lab.</li>
        </ul>
        <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed text-[#1F2328]/60">
          A sample report is shared with you directly once your test is booked, so the example you read matches the
          panel you were actually tested for.
        </p>
        </section>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/screening"
            className="inline-flex h-[56px] items-center justify-center rounded-xl bg-[#1F2328] px-7 text-[17px] font-medium text-white transition-colors hover:bg-[#1F3D33]"
          >
            Start my free assessment
          </Link>
          <Link
            href="/test-kits/hormone-fertility"
            className="inline-flex h-[56px] items-center justify-center rounded-xl border border-[#1F2328]/25 px-7 text-[17px] font-medium text-[#1F2328] transition-colors hover:border-[#1F2328]"
          >
            See the test
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
