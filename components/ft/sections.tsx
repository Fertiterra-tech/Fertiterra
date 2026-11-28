"use client"

/**
 * FertiTerra page sections.
 * Structure, section order and content types follow Hertility's pages.
 * Every colour, word, asset and claim is FertiTerra's own.
 *
 * PRICING: fill these two numbers in when you are ready to publish prices.
 * Leave null and the cards show "Pricing confirmed before you pay" instead of a made-up figure.
 */
const PRICING = {
  // Hertility's GBP prices converted at 1 GBP = 1,941.30 RWF (live rate, 28 Nov 2026)
  // GBP 249 -> 483,383 RWF, rounded to 485,000
  // GBP 199 -> 386,319 RWF, rounded to 385,000
  advanced: 485000 as number | null,
  standard: 385000 as number | null,
}

import { useState } from "react"
import Link from "next/link"
import { Check, Minus, ArrowRight, ChevronDown, Phone, FileText, MapPin, ShieldCheck, Sparkles } from "lucide-react"

const GREEN = "#1F3D33"
const LIME = "#FAF7F2"
const CREAM = "#FAF7F2"
const INK = "#1F2328"
const MINT = "#E4EDE6"

function money(n: number | null) {
  return n === null ? null : n.toLocaleString("en-RW") + " RWF"
}

/* ------------------------------------------------------------------ 1 */
export function TestTierCards() {
  const tiers = [
    {
      name: "Advanced Hormone and Fertility Test",
      blurb: "Diagnostic results with a 1-on-1 specialist nurse walkthrough.",
      price: PRICING.advanced,
      included: [
        "Clinical results review call",
        "At-home blood collection kit",
        "Doctor-written report",
        "Care plan with personalised recommendations",
      ],
      missing: [] as string[],
      cta: "Start my free assessment",
      href: "/screening",
      featured: true,
    },
    {
      name: "Hormone and Fertility Test",
      blurb: "A clinical-grade report for those confident navigating their results.",
      price: PRICING.standard,
      included: ["At-home blood collection kit", "Doctor-written report", "Care plan with personalised recommendations"],
      missing: ["Clinical results review call"],
      cta: "Start my free assessment",
      href: "/screening",
      featured: false,
    },
  ]

  return (
    <section className="w-full py-16 sm:py-20" style={{ background: CREAM }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-[32px] leading-tight sm:text-[42px]" style={{ color: INK }}>
          Choose your test
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-3xl border p-7 sm:p-9"
              style={{
                background: "#fff",
                borderColor: t.featured ? GREEN : "rgba(31,35,40,0.12)",
                borderWidth: t.featured ? 2 : 1,
              }}
            >
              {t.featured && (
                <span
                  className="mb-4 inline-flex w-fit rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em]"
                  style={{ background: LIME, color: GREEN }}
                >
                  Most complete
                </span>
              )}
              <h3 className="font-[family-name:var(--font-playfair)] text-[26px] leading-snug" style={{ color: INK }}>
                {t.name}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "rgba(31,35,40,0.72)" }}>
                {t.blurb}
              </p>

              <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: "rgba(31,61,51,0.6)" }}>
                Included in the price
              </p>
              <ul className="mt-3 space-y-2.5">
                {t.included.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[15px]" style={{ color: INK }}>
                    <Check className="mt-0.5 h-[18px] w-[18px] shrink-0" style={{ color: GREEN }} strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
                {t.missing.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[15px]" style={{ color: "rgba(31,35,40,0.42)" }}>
                    <Minus className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                {money(t.price) ? (
                  <p className="text-[26px] font-semibold" style={{ color: INK }}>{money(t.price)}</p>
                ) : (
                  <p className="text-[14px]" style={{ color: "rgba(31,35,40,0.6)" }}>
                    Price confirmed before you pay
                  </p>
                )}
                <Link
                  href={t.href}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-opacity hover:opacity-90"
                  style={{ background: t.featured ? GREEN : MINT, color: t.featured ? "#fff" : GREEN }}
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px]" style={{ color: "rgba(31,35,40,0.7)" }}>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: GREEN }} />Free sample return</span>
          <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" style={{ color: GREEN }} />Results within 10 days</span>
          <Link href="#compare" className="inline-flex items-center gap-2 font-semibold" style={{ color: GREEN }}>
            Compare products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ 2 */
export function StageCards({ active }: { active?: string }) {
  const stages = [
    { slug: "trying-to-conceive", title: "Trying to conceive", blurb: "Actively trying, or about to start, and want to know where you stand." },
    { slug: "experiencing-symptoms", title: "Experiencing symptoms", blurb: "Fatigue, low mood, acne, painful or irregular periods that will not settle." },
    { slug: "planning-ahead", title: "Planning ahead", blurb: "Children are a few years away and you want a baseline now." },
    { slug: "perimenopausal", title: "Perimenopausal", blurb: "Changing cycles, hot flushes, poor sleep or low mood in your 40s and 50s." },
    { slug: "just-curious", title: "Just curious", blurb: "No symptoms, no plan. You simply want to understand your own hormones." },
  ]
  return (
    <section className="w-full py-16 sm:py-20" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-[32px] leading-tight sm:text-[42px]" style={{ color: INK }}>
          We&apos;re all at different stages of your journey
        </h2>
        <p className="mt-3 text-[16px]" style={{ color: "rgba(31,35,40,0.7)" }}>What&apos;s most important to you?</p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((s) => {
            const on = active === s.slug
            return (
              <Link
                key={s.slug}
                href={"/test-kits/" + s.slug}
                aria-current={on ? "page" : undefined}
                className="group flex flex-col rounded-3xl p-6 transition-transform hover:-translate-y-0.5"
                style={{
                  background: on ? GREEN : MINT,
                  border: on ? "2px solid " + GREEN : "2px solid transparent",
                }}
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-[21px] leading-snug" style={{ color: on ? "#fff" : INK }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: on ? "rgba(250,247,242,0.8)" : "rgba(31,35,40,0.75)" }}>
                  {s.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: on ? LIME : GREEN }}>
                  {on ? "You are here" : "Start my free assessment"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ 3 */
export function SupportTabs() {
  const tabs = [
    { label: "Testing", body: "Your at-home blood collection kit arrives with clear instructions, and support on the phone if you need it." },
    { label: "Watch how to do the test", body: "A short walkthrough shows you how to collect your sample at home, step by step." },
    { label: "Understanding your results", body: "Every hormone is explained in plain language, with what it means for your body and what to do next." },
    { label: "Speak to an in-house expert", body: "Book time with our clinical team to talk through your report and ask anything that is still unclear." },
    { label: "Your care plan", body: "A doctor-written plan built around your results, your symptoms and your goals." },
    { label: "Ongoing support", body: "Follow-up appointments and treatment options stay available to you after your report." },
  ]
  const [active, setActive] = useState(0)
  return (
    <section className="w-full py-16 sm:py-20" style={{ background: CREAM }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-[32px] leading-tight sm:text-[42px]" style={{ color: INK }}>
          We&apos;re here to support you
        </h2>
        <p className="mt-3 text-[16px]" style={{ color: "rgba(31,35,40,0.7)" }}>Your journey with FertiTerra</p>

        <div className="mt-9 grid gap-8 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col gap-1.5">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => setActive(i)}
                className="rounded-xl px-4 py-3 text-left text-[15px] font-medium transition-colors"
                style={{
                  background: i === active ? GREEN : "transparent",
                  color: i === active ? "#fff" : "rgba(31,35,40,0.8)",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="rounded-3xl p-8 sm:p-10" style={{ background: "#fff" }}>
            <h3 className="font-[family-name:var(--font-playfair)] text-[24px]" style={{ color: INK }}>{tabs[active].label}</h3>
            <p className="mt-3 text-[16px] leading-relaxed" style={{ color: "rgba(31,35,40,0.78)" }}>{tabs[active].body}</p>
            <Link href="/screening" className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold" style={{ background: GREEN, color: "#fff" }}>
              Start my free assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ 4 */
export function HormonePanel() {
  const hormones = [
    { name: "Anti-Müllerian Hormone (AMH)", body: "Gives an indication of your egg quantity and can help signal conditions like polycystic ovaries." },
    { name: "Oestradiol", body: "Shows how well your ovaries are working across your cycle. Low levels can cause symptoms." },
    { name: "Follicle-stimulating hormone (FSH)", body: "Important for maturing your eggs. High levels may suggest menopause." },
    { name: "Luteinising hormone (LH)", body: "Triggers egg release. Low or high levels can disrupt ovulation and your cycle." },
    { name: "Progesterone", body: "Confirms whether ovulation has happened in the second half of your cycle." },
    { name: "Testosterone", body: "High levels can disrupt your periods and may cause acne or excess hair." },
    { name: "Sex hormone-binding globulin (SHBG)", body: "Measures how much of your sex hormones are available for your body to use." },
    { name: "Prolactin", body: "Influences the signals for ovulation. High levels can disrupt your cycle." },
    { name: "Thyroid-stimulating hormone (TSH)", body: "Checks whether your thyroid is working too much or too little." },
    { name: "Free thyroxine (FT4)", body: "Measures active thyroid hormone levels and helps diagnose thyroid problems." },
    { name: "DHEAS", body: "Shows androgen levels from your adrenal glands. High levels can cause acne or excess hair." },
    { name: "Free Androgen Index (FAI)", body: "Puts your testosterone and SHBG together to show the androgens your body can use." },
  ]
  return (
    <section className="w-full py-16 sm:py-20" style={{ background: GREEN }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-[32px] leading-tight text-white sm:text-[42px]">
          We&apos;ll build your bespoke test with up to 10 hormones
        </h2>
        <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed" style={{ color: "rgba(250,247,242,0.78)" }}>
          Using your free assessment answers, we choose the hormones that answer your question. Not everyone needs all of them.
        </p>
        <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {hormones.map((h) => (
            <div key={h.name}>
              <h3 className="text-[16px] font-semibold" style={{ color: LIME }}>{h.name}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "rgba(250,247,242,0.72)" }}>{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ 5 */
export function ConsultationBand() {
  return (
    <section className="w-full py-14" style={{ background: MINT }}>
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-5 sm:px-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ background: GREEN }}>
            <Phone className="h-5 w-5" style={{ color: LIME }} />
          </span>
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-[24px] leading-snug sm:text-[30px]" style={{ color: INK }}>
              30-minute call with an expert, included with every Advanced Test
            </h2>
            <p className="mt-2 text-[15px]" style={{ color: "rgba(31,35,40,0.72)" }}>
              A specialist nurse walks you through your report and answers your questions.
            </p>
          </div>
        </div>
        <Link href="/screening" className="shrink-0 rounded-full px-6 py-3.5 text-[15px] font-semibold" style={{ background: GREEN, color: "#fff" }}>
          Start my free assessment
        </Link>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ 6 */
type Row = { label: string; advanced: boolean | string; standard: boolean | string }

export function ComparisonTable() {
  const rows: Row[] = [
    { label: "30-minute online consultation with a specialist nurse", advanced: true, standard: false },
    { label: "Hormone testing", advanced: true, standard: true },
    { label: "Clinical results review call", advanced: true, standard: false },
    { label: "Hormones chosen for your symptoms", advanced: true, standard: true },
    { label: "Insight into your egg count through AMH", advanced: true, standard: true },
    { label: "Answers to symptoms like acne or irregular periods", advanced: true, standard: true },
    { label: "Screening for conditions such as PCOS", advanced: true, standard: true },
    { label: "Suitable if you are on hormonal contraception", advanced: true, standard: true },
    { label: "Guidance call to get your blood sample right", advanced: true, standard: true },
    { label: "Results back within 10 days", advanced: true, standard: true },
    { label: "Doctor-written report with a clinical care plan", advanced: true, standard: true },
    { label: "Imaging and scans", advanced: "Optional add-on", standard: "Optional add-on" },
  ]
  const cell = (v: boolean | string) =>
    typeof v === "string" ? (
      <span className="text-[13px]" style={{ color: "rgba(31,35,40,0.7)" }}>{v}</span>
    ) : v ? (
      <Check className="mx-auto h-5 w-5" style={{ color: GREEN }} strokeWidth={2.5} />
    ) : (
      <Minus className="mx-auto h-5 w-5" style={{ color: "rgba(31,35,40,0.28)" }} />
    )

  return (
    <section id="compare" className="w-full py-16 sm:py-20" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-[32px] leading-tight sm:text-[42px]" style={{ color: INK }}>
          Compare your options at a glance
        </h2>
        <p className="mt-3 text-[16px]" style={{ color: "rgba(31,35,40,0.7)" }}>Use this guide to find your starting point.</p>

        <div className="mt-9 overflow-x-auto rounded-3xl border" style={{ borderColor: "rgba(31,35,40,0.1)" }}>
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr style={{ background: CREAM }}>
                <th className="p-5 text-[14px] font-semibold" style={{ color: "rgba(31,61,51,0.65)" }}>What you get</th>
                <th className="p-5 text-center text-[14px] font-semibold" style={{ color: GREEN }}>Advanced</th>
                <th className="p-5 text-center text-[14px] font-semibold" style={{ color: INK }}>Standard</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} style={{ background: i % 2 ? CREAM : "#fff" }}>
                  <td className="p-5 text-[15px]" style={{ color: INK }}>{r.label}</td>
                  <td className="p-5 text-center">{cell(r.advanced)}</td>
                  <td className="p-5 text-center">{cell(r.standard)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[13px]" style={{ color: "rgba(31,35,40,0.55)" }}>
          Results timing counts from the lab receiving your sample.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ 7 */
export function PartnerBand() {
  return (
    <section className="w-full py-16" style={{ background: CREAM }}>
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:px-10 md:grid-cols-2">
        <div className="rounded-3xl p-8" style={{ background: "#fff" }}>
          <MapPin className="h-6 w-6" style={{ color: GREEN }} />
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-[26px] leading-snug" style={{ color: INK }}>
            We partner with trusted clinics
          </h2>
          <p className="mt-2.5 text-[15px] leading-relaxed" style={{ color: "rgba(31,35,40,0.75)" }}>
            For scans, appointments and treatment such as IVF, IUI and egg freezing, we work with clinics we have checked.
          </p>
          <Link href="/trusted-clinics" className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: GREEN }}>
            Read more about our partners <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-3xl p-8" style={{ background: "#fff" }}>
          <ShieldCheck className="h-6 w-6" style={{ color: GREEN }} />
          <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-[26px] leading-snug" style={{ color: INK }}>
            Your results stay private
          </h2>
          <p className="mt-2.5 text-[15px] leading-relaxed" style={{ color: "rgba(31,35,40,0.75)" }}>
            Your report is written for you and shared only with the clinician caring for you. We treat what you tell us as confidential medical information.
          </p>
          <Link href="/privacy" className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: GREEN }}>
            Read our privacy policy <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ 8 */
export function FaqAccordion() {
  const faqs = [
    {
      q: "How does the Advanced Hormone and Fertility Test work?",
      a: "You start with a free assessment covering your goals, symptoms and history. From your answers we choose the hormones to test, send your at-home blood collection kit, and analyse the sample in an accredited lab. You get a doctor-written report and a care plan, and on the Advanced Test a specialist nurse walks you through it on a call.",
    },
    {
      q: "Which day of my cycle should I test?",
      a: "Day 3 is usually best, counting day 1 as the first day of your period. If your periods are irregular, wait until you have a period so the results are easier to read. If your cycles are shorter than 21 days, test on day 2. If you have no periods at all, you can test any day.",
    },
    {
      q: "What time of day should I test?",
      a: "In the morning, within the first few hours of waking, and after fasting overnight where you can. Some hormones change through the day, so a morning sample is easier to compare.",
    },
    {
      q: "How long do results take?",
      a: "Results are back within 10 days of the lab receiving your sample.",
    },
    {
      q: "What do I get alongside my results?",
      a: "A doctor-written report explaining what each hormone means for you, and a care plan with personalised recommendations. On the Advanced Test you also get a call with a specialist nurse.",
    },
    {
      q: "What is included in the panel?",
      a: "Up to 10 hormones chosen for you from AMH, oestradiol, FSH, LH, progesterone, testosterone, SHBG, prolactin, TSH, FT4, DHEAS and the Free Androgen Index. Not everyone needs all of them.",
    },
  ]
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="w-full py-16 sm:py-20" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-[900px] px-5 sm:px-10">
        <h2 className="font-[family-name:var(--font-playfair)] text-[32px] leading-tight sm:text-[42px]" style={{ color: INK }}>
          Got questions?
        </h2>
        <div className="mt-8 divide-y" style={{ borderColor: "rgba(31,35,40,0.12)" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="py-1" style={{ borderTop: i ? "1px solid rgba(31,35,40,0.12)" : undefined }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-[17px] font-medium" style={{ color: INK }}>{f.q}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 transition-transform"
                    style={{ color: GREEN, transform: isOpen ? "rotate(180deg)" : "none" }}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-10 text-[15px] leading-relaxed" style={{ color: "rgba(31,35,40,0.78)" }}>{f.a}</p>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/sample-report" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold" style={{ background: GREEN, color: "#fff" }}>
            <FileText className="h-4 w-4" /> See a sample report
          </Link>
          <Link href="/screening" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold" style={{ border: `1px solid ${GREEN}`, color: GREEN }}>
            Start my free assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
