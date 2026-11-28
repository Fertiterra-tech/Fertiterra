import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { ContentEntry } from "./section-types"

const GREEN = "#1F3D33"
const CREAM = "#FAF7F2"
const MINT = "#E4EDE6"
const INK = "#1F2328"

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[26px] leading-[1.2] sm:text-[32px]" style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}>
      {children}
    </h2>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-[820px] text-[15px] leading-[26px] opacity-80">{children}</p>
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-[15px] leading-[24px]">
          <Check className="mt-[3px] h-4 w-4 shrink-0" strokeWidth={2.4} style={{ color: GREEN }} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  )
}

export function SectionsPage({ entry }: { entry: ContentEntry }) {
  const t = entry

  return (
    <div className="min-h-screen" style={{ backgroundColor: CREAM, color: INK }}>
      <Header />

      <main>
        <section className="mx-auto w-full max-w-[1440px] px-5 pt-10 sm:px-10 lg:px-20 lg:pt-14">
          <h1
            className="max-w-[900px] text-[34px] leading-[1.1] sm:text-[44px] lg:text-[54px]"
            style={{ fontFamily: "var(--font-playfair), serif", color: GREEN }}
          >
            {t.h1}
          </h1>
          <p className="mt-5 max-w-[720px] text-[17px] leading-[27px] opacity-80">{t.intro}</p>
          {t.heroCta && (
            <Link
              href={t.heroCta.href}
              className="mt-7 inline-flex h-[48px] items-center justify-center rounded-full px-8 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              {t.heroCta.label}
            </Link>
          )}
        </section>

        {t.sections.map((s, idx) => (
          <section key={idx} className="mx-auto mt-14 w-full max-w-[1440px] px-5 sm:px-10 lg:px-20">
            {s.kind === "prose" && (
              <div>
                <H2>{s.title}</H2>
                {s.body && <Body>{s.body}</Body>}
                {s.bullets && <Bullets items={s.bullets} />}
              </div>
            )}

            {s.kind === "steps" && (
              <div>
                <H2>{s.title}</H2>
                {s.intro && <Body>{s.intro}</Body>}
                <ol className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {s.items.map((it, i) => (
                    <li key={it.title} className="rounded-2xl bg-white p-6">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-semibold"
                        style={{ backgroundColor: MINT, color: GREEN }}
                      >
                        {i + 1}
                      </span>
                      <p className="mt-4 text-[16px] font-semibold" style={{ color: GREEN }}>
                        {it.title}
                      </p>
                      <p className="mt-2 text-[14px] leading-[23px] opacity-80">{it.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {s.kind === "cards" && (
              <div>
                <H2>{s.title}</H2>
                {s.intro && <Body>{s.intro}</Body>}
                <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {s.items.map((it) => (
                    <div key={it.title} className="rounded-2xl bg-white p-6">
                      <p className="text-[16px] font-semibold" style={{ color: GREEN }}>
                        {it.title}
                      </p>
                      <p className="mt-2 text-[14px] leading-[23px] opacity-80">{it.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {s.kind === "compare" && (
              <div>
                <H2>{s.title}</H2>
                {s.intro && <Body>{s.intro}</Body>}
                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  {[s.left, s.right].map((col, i) => (
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
              </div>
            )}

            {s.kind === "price" && (
              <div className="rounded-2xl bg-white p-7 sm:p-9">
                <H2>{s.title}</H2>
                {s.body && <Body>{s.body}</Body>}
                <ul className="mt-5 divide-y" style={{ borderColor: "rgba(31,35,40,0.1)" }}>
                  {s.items.map((it) => (
                    <li key={it.label} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="text-[15px] leading-[23px]">{it.label}</span>
                      <span className="whitespace-nowrap text-[16px] font-semibold" style={{ color: GREEN }}>
                        {it.value}
                      </span>
                    </li>
                  ))}
                </ul>
                {s.note && <p className="mt-4 text-[12px] opacity-60">{s.note}</p>}
              </div>
            )}

            {s.kind === "cta" && (
              <div className="rounded-2xl px-7 py-10 sm:px-12" style={{ backgroundColor: GREEN }}>
                <p className="max-w-[640px] text-[22px] leading-[1.3] text-white sm:text-[26px]" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  {s.title}
                </p>
                {s.body && <p className="mt-3 max-w-[560px] text-[15px] leading-[24px] text-white/80">{s.body}</p>}
                <Link
                  href={s.href}
                  className="mt-6 inline-flex h-[48px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-semibold"
                  style={{ color: GREEN }}
                >
                  {s.label}
                </Link>
              </div>
            )}

            {s.kind === "faq" && (
              <div>
                <H2>{s.title}</H2>
                <div className="mt-5 divide-y" style={{ borderColor: "rgba(31,35,40,0.12)" }}>
                  {s.items.map((f) => (
                    <details key={f.q} className="group py-5" style={{ borderColor: "rgba(31,35,40,0.12)" }}>
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold" style={{ color: GREEN }}>
                        {f.q}
                        <span className="text-[20px] leading-none opacity-50 group-open:opacity-100">+</span>
                      </summary>
                      <p className="mt-3 max-w-[820px] text-[15px] leading-[25px] opacity-80">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {s.kind === "links" && (
              <div>
                <H2>{s.title}</H2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {s.items.map((it) => (
                    <Link
                      key={it.title}
                      href={it.href}
                      className="group flex items-start justify-between gap-3 rounded-2xl bg-white p-6 transition-shadow hover:shadow-sm"
                    >
                      <span className="text-[15px] font-semibold leading-[22px]" style={{ color: GREEN }}>
                        {it.title}
                      </span>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" style={{ color: GREEN }} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}

        <div className="pb-20" />
      </main>

      <SiteFooter />
    </div>
  )
}
