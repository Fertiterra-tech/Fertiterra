import Link from "next/link"
import { Header } from "@/components/header"

const INK = "#1F2328"
const GREEN = "#1F3D33"
const LIME = "#FAF7F2"
const CREAM = "#FAF7F2"
const MINT = "#E4EDE6"

const steps = [
  {
    n: "1",
    title: "A doctor reviews your answers",
    body: "Within one working day a FertiTerra doctor reads what you told us and decides which hormones need testing.",
  },
  {
    n: "2",
    title: "Your test is arranged",
    body: "We tell you which test fits your answers and where to give your sample in Kigali, or send a kit to your address.",
  },
  {
    n: "3",
    title: "You get a report you can act on",
    body: "Plain-language results, what they mean for you, and a care plan with your next step.",
  },
]

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: CREAM }}>
      <Header />
      <main className="mx-auto w-full max-w-[820px] flex-1 px-6 py-14 sm:px-8 md:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: GREEN }}>
          Assessment complete
        </p>
        <h1 className="mb-4 font-serif text-3xl leading-tight sm:text-5xl" style={{ color: INK }}>
          Thank you. Your answers are with our doctors.
        </h1>
        <p className="mb-10 text-lg leading-relaxed" style={{ color: INK, opacity: 0.75 }}>
          We have sent a copy to your email so you can come back to it.
        </p>

        <div className="mb-10 grid gap-4">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 rounded-2xl p-6" style={{ background: MINT }}>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-lg"
                style={{ background: GREEN, color: LIME }}
              >
                {s.n}
              </span>
              <div>
                <h2 className="mb-1 text-lg font-semibold" style={{ color: INK }}>{s.title}</h2>
                <p className="text-base leading-relaxed" style={{ color: INK, opacity: 0.78 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/consultation"
            className="rounded-full px-8 py-4 text-base font-semibold"
            style={{ background: GREEN, color: "#FFFFFF" }}
          >
            Book a consultation
          </Link>
          <Link
            href="/"
            className="rounded-full px-8 py-4 text-base font-semibold"
            style={{ border: "1px solid rgba(31,61,51,0.25)", color: INK }}
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}
