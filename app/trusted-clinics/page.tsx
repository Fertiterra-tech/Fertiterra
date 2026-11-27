import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata = {
  title: "Where your scans and referrals happen | FertiTerra",
  description: "FertiTerra is a digital clinic. Scans and procedures that need a physical room are carried out at partner clinics in Kigali, booked through us.",
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:px-8 lg:px-20 lg:py-20">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1F3D33]/70">FertiTerra</p>
        <h1 className="mt-4 max-w-[20ch] font-[family-name:var(--font-playfair)] text-[34px] leading-[1.12] tracking-[-0.01em] text-[#1F2328] sm:text-[44px] lg:text-[56px]">
          Where your scans and referrals happen
        </h1>
        <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-[#1F2328]/75 sm:text-[19px]">
          FertiTerra is a digital clinic. Scans and procedures that need a physical room are carried out at partner clinics in Kigali, booked through us.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6">
            <p className="font-[family-name:var(--font-playfair)] text-[19px] text-[#1F2328]">Booked here</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#1F2328]/65">You book the scan through FertiTerra, not by calling a clinic yourself.</p>
          </div>
          <div className="rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6">
            <p className="font-[family-name:var(--font-playfair)] text-[19px] text-[#1F2328]">Carried out there</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#1F2328]/65">A sonographer at the partner clinic performs the scan.</p>
          </div>
          <div className="rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6">
            <p className="font-[family-name:var(--font-playfair)] text-[19px] text-[#1F2328]">Reviewed here</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#1F2328]/65">Your report comes back to FertiTerra and a clinician talks you through it.</p>
          </div>
        </div>
        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-[26px] leading-tight text-[#1F2328] sm:text-[30px]">What you can book now</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/appointments/ultrasound"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Pelvic ultrasound scan</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Referred to a partner clinic in Kigali.</span>
          </Link>
          <Link
            href="/appointments/gynaecologist"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Gynaecologist consult</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Specialist review of your symptoms and results.</span>
          </Link>
          <Link
            href="/consultation"
            className="group flex min-h-[132px] flex-col justify-between rounded-2xl border border-[#1F2328]/10 bg-white/70 p-6 transition-colors hover:border-[#1F3D33]/40 hover:bg-white"
          >
            <span className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug text-[#1F2328]">Talk it through first</span>
            <span className="mt-3 text-[15px] leading-relaxed text-[#1F2328]/65">Not sure what you need? Speak to a FertiTerra advisor.</span>
          </Link>
        </div>
        </section>
        <p className="mt-12 max-w-[62ch] text-[15px] leading-relaxed text-[#1F2328]/60">
          FertiTerra Technologies is registered with the Rwanda Development Board. Partner clinics are named at the
          point of booking, so you know exactly where your appointment will take place before you pay.
        </p>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/appointments/ultrasound"
            className="inline-flex h-[56px] items-center justify-center rounded-xl bg-[#1F2328] px-7 text-[17px] font-medium text-white transition-colors hover:bg-[#1F3D33]"
          >
            Book a scan
          </Link>
          <Link
            href="/screening"
            className="inline-flex h-[56px] items-center justify-center rounded-xl border border-[#1F2328]/25 px-7 text-[17px] font-medium text-[#1F2328] transition-colors hover:border-[#1F2328]"
          >
            Start my free assessment
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
