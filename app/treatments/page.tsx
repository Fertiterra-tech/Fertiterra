import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata = {
  title: "Treatment and care, without the wait | FertiTerra",
  description: "Every service below is delivered by FertiTerra's clinical team, from an at-home hormone test to a specialist appointment in Kigali.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 lg:px-20 lg:py-20">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1F3D33]/70">FertiTerra</p>
        <h1 className="mt-4 max-w-[20ch] font-[family-name:var(--font-playfair)] text-[34px] leading-[1.12] tracking-[-0.01em] text-[#1F2328] sm:text-[44px] lg:text-[56px]">
          Treatment and care, without the wait
        </h1>
        <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-[#1F2328]/75 sm:text-[19px]">
          Every service below is delivered by FertiTerra's clinical team, from an at-home hormone test to a specialist appointment in Kigali.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/screening"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Fertility assessment</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">An 8-minute assessment that maps your symptoms to the right next step.</span>
          </Link>
          <Link
            href="/test-kits/hormone-fertility"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">At-home hormone test</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">AMH, FSH, LH, estradiol, progesterone and Free Androgen Index. Results within 10 days.</span>
          </Link>
          <Link
            href="/appointments/ultrasound"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Ultrasound scan</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">A pelvic ultrasound at a partner clinic to look at your ovaries and uterus.</span>
          </Link>
          <Link
            href="/appointments/gynaecologist"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Gynaecologist consult</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">A specialist appointment for pain, cycles and conditions.</span>
          </Link>
          <Link
            href="/appointments/egg-freezing"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Egg freezing</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Understand your options and what the process involves.</span>
          </Link>
          <Link
            href="/consultation"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">IVF support</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Guidance on clinics, timing and what to ask before you commit.</span>
          </Link>
          <Link
            href="/appointments/counselling"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Counselling</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Emotional support from a trained counsellor, in your own time.</span>
          </Link>
          <Link
            href="/appointments/nutrition"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Nutrition support</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Food and lifestyle guidance built around your results.</span>
          </Link>
          <Link
            href="/appointments/menopause-specialist"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Menopause care</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Support for perimenopause and menopause symptoms.</span>
          </Link>
        </div>
        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-[26px] leading-tight text-[#1F2328] sm:text-[30px]">How it starts</h2>

        <ol className="mt-8 max-w-[62ch] space-y-4 text-[17px] leading-relaxed text-[#1F2328]/75">
          <li>1. Take the free 8-minute assessment.</li>
          <li>2. We recommend the test or appointment that fits your answers.</li>
          <li>3. A clinician reviews your results and writes your care plan.</li>
        </ol>
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
            See the at-home test
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
