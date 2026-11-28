import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Check, Clock, Video, CalendarCheck, ShieldCheck, HeartHandshake } from "lucide-react"
import { APPOINTMENTS, type AppointmentKey } from "./appointment-data"

const GREEN = "#1F3D33"
const CREAM = "#FAF7F2"
const MINT = "#E4EDE6"
const INK = "#1F2328"

function Badge({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[13px] leading-[18px]" style={{ color: GREEN }}>
      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.7} />
      <span>{label}</span>
    </div>
  )
}

export function AppointmentPage({ slug }: { slug: AppointmentKey }) {
  const a = APPOINTMENTS[slug]

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: INK }}>
      <Header />

      <main>
        {/* hero */}
        <section className="mx-auto w-full max-w-[1440px] px-5 pt-10 sm:px-10 lg:px-20 lg:pt-14">
          <h1
            className="max-w-[900px] text-[34px] leading-[1.1] sm:text-[44px] lg:text-[56px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}
          >
            {a.h1}
          </h1>
          <p className="mt-5 max-w-[720px] text-[17px] leading-[27px] opacity-80">{a.subtitle}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
            {a.badges.map((b) => (
              <Badge key={b.label} icon={[CalendarCheck, Video, ShieldCheck, HeartHandshake][a.badges.indexOf(b) % 4]} label={b.label} />
            ))}
          </div>
        </section>

        {/* book + card */}
        <section className="mx-auto mt-12 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-16">
            <div>
              <h2
                className="text-[26px] leading-[1.2] sm:text-[32px]"
                style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}
              >
                {a.bookHeading}
              </h2>
              <p className="mt-4 text-[16px] leading-[26px] opacity-80">{a.bookBody}</p>

              <h3 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.12em]" style={{ color: GREEN }}>
                What is included
              </h3>
              <ul className="mt-4 space-y-3">
                {a.included.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-[24px]">
                    <Check className="mt-[3px] h-4 w-4 shrink-0" strokeWidth={2.4} style={{ color: GREEN }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="h-fit rounded-2xl p-7 lg:sticky lg:top-28" style={{ backgroundColor: "#FFFFFF" }}>
              <p className="text-[19px] font-semibold" style={{ color: GREEN }}>
                {a.card.name}
              </p>
              <div className="mt-3 flex items-center gap-2 text-[13px] opacity-70">
                <Clock className="h-4 w-4" strokeWidth={1.8} />
                <span>{a.card.duration}</span>
              </div>
              <p className="mt-4 text-[14px] leading-[22px] opacity-80">{a.card.description}</p>
              <p className="mt-6 text-[30px] leading-none" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
                {a.card.price}
              </p>
              <p className="mt-2 text-[12px] opacity-60">{a.card.note}</p>
              <Link
                href={a.card.href}
                className="mt-6 flex h-[48px] w-full items-center justify-center rounded-full text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: GREEN }}
              >
                {a.card.cta}
              </Link>
            </aside>
          </div>
        </section>

        {/* right for you */}
        {a.rightFor && (
          <section className="mx-auto mt-16 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
            <div className="rounded-2xl px-7 py-9 sm:px-10" style={{ backgroundColor: MINT }}>
              <h2 className="text-[24px] leading-[1.25] sm:text-[28px]" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
                {a.rightFor.title}
              </h2>
              <p className="mt-3 max-w-[760px] text-[15px] leading-[25px] opacity-80">{a.rightFor.body}</p>
              <p className="mt-6 text-[14px] font-semibold" style={{ color: GREEN }}>
                {a.rightFor.listTitle}
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {a.rightFor.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[14px] leading-[22px]">
                    <Check className="mt-[3px] h-4 w-4 shrink-0" strokeWidth={2.4} style={{ color: GREEN }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* team */}
        {a.team && (
          <section className="mx-auto mt-16 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
            <h2 className="text-[26px] leading-[1.2] sm:text-[32px]" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
              {a.team.title}
            </h2>
            <p className="mt-4 max-w-[820px] text-[15px] leading-[26px] opacity-80">{a.team.body}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {a.team.members.map((m) => (
                <div key={m.name} className="rounded-2xl bg-white p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-[15px] font-semibold"
                    style={{ backgroundColor: MINT, color: GREEN }}
                  >
                    {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </div>
                  <p className="mt-4 text-[17px] font-semibold" style={{ color: GREEN }}>
                    {m.name}
                  </p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.08em] opacity-60">{m.credential}</p>
                  <p className="mt-3 text-[14px] leading-[22px] opacity-80">{m.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span key={t} className="rounded-full px-2.5 py-1 text-[11px]" style={{ backgroundColor: MINT, color: GREEN }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* what you can talk about */}
        <section className="mx-auto mt-16 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
          <h2 className="text-[26px] leading-[1.2] sm:text-[32px]" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
            {a.talk.title}
          </h2>
          <p className="mt-4 max-w-[820px] text-[15px] leading-[26px] opacity-80">{a.talk.body}</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {a.talk.items.map((item) => (
              <div key={item.title}>
                <p className="text-[16px] font-semibold" style={{ color: GREEN }}>
                  {item.title}
                </p>
                <p className="mt-2 text-[14px] leading-[23px] opacity-80">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* compare */}
        {a.compare && (
          <section className="mx-auto mt-16 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
            <h2 className="text-[26px] leading-[1.2] sm:text-[32px]" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
              {a.compare.title}
            </h2>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              {[a.compare.left, a.compare.right].map((col, i) => (
                <div key={col.title} className="rounded-2xl p-7" style={{ backgroundColor: i === 0 ? "#FFFFFF" : MINT }}>
                  <p className="text-[16px] font-semibold" style={{ color: GREEN }}>
                    {col.title}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2 text-[14px] leading-[22px]">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: GREEN }} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* learn more */}
        <section className="mx-auto mt-16 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
          <h2 className="text-[26px] leading-[1.2] sm:text-[32px]" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
            {a.learn.title}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {a.learn.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex items-start justify-between gap-3 rounded-2xl bg-white p-6 transition-shadow hover:shadow-sm"
              >
                <span className="text-[15px] font-semibold leading-[22px]" style={{ color: GREEN }}>
                  {item.title}
                </span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: GREEN }} />
              </Link>
            ))}
          </div>
        </section>

        {/* related */}
        <section className="mx-auto mt-16 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
          <h2 className="text-[26px] leading-[1.2] sm:text-[32px]" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
            Related services
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {a.related.map((r) => (
              <Link key={r.href} href={r.href} className="group rounded-2xl bg-white p-6 transition-shadow hover:shadow-sm">
                <p className="text-[16px] font-semibold" style={{ color: GREEN }}>
                  {r.name}
                </p>
                <p className="mt-2 text-[14px] leading-[22px] opacity-80">{r.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold" style={{ color: GREEN }}>
                  More info
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* faq */}
        <section className="mx-auto mt-16 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
          <h2 className="text-[26px] leading-[1.2] sm:text-[32px]" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
            Got questions?
          </h2>
          <div className="mt-6 divide-y" style={{ borderColor: "rgba(31,35,40,0.12)" }}>
            {a.faqs.map((f) => (
              <details key={f.q} className="group py-5" style={{ borderColor: "rgba(31,35,40,0.12)" }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold" style={{ color: GREEN }}>
                  {f.q}
                  <span className="text-[20px] leading-none opacity-50 group-open:opacity-100">+</span>
                </summary>
                <p className="mt-3 max-w-[820px] text-[15px] leading-[25px] opacity-80">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* closing */}
        <section className="mx-auto mt-16 w-full max-w-[1440px] px-5 pb-20 sm:px-10 lg:px-20">
          <div className="rounded-2xl px-7 py-10 sm:px-12" style={{ backgroundColor: GREEN }}>
            <p className="max-w-[640px] text-[22px] leading-[1.3] text-white sm:text-[26px]" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {a.closing}
            </p>
            <Link
              href={a.card.href}
              className="mt-6 inline-flex h-[48px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-semibold"
              style={{ color: GREEN }}
            >
              {a.card.cta}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
