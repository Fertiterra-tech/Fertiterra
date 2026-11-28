"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import {
  TestTierCards,
  StageCards,
  SupportTabs,
  HormonePanel,
  ConsultationBand,
  ComparisonTable,
  PartnerBand,
  FaqAccordion,
} from "@/components/ft/sections"

const GREEN = "#1F3D33"
const LIME = "#FAF7F2"
const CREAM = "#FAF7F2"
const INK = "#1F2328"

/**
 * One page, five entry points, the way Hertility serves its stage links.
 * Same H1 and same sections on every stage; only the stage card is marked.
 */
export function StagePage({ stage }: { stage: string }) {
  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <Header />

      <section className="w-full pt-14 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <p className="text-[13px] font-semibold uppercase tracking-[0.1em]" style={{ color: "rgba(31,61,51,0.6)" }}>
            At-home testing
          </p>
          <h1 className="mt-4 max-w-[820px] font-[family-name:var(--font-playfair)] text-[38px] leading-[1.08] sm:text-[58px]" style={{ color: INK }}>
            At-home hormone and fertility tests
          </h1>
          <p className="mt-5 max-w-[620px] text-[17px] leading-relaxed" style={{ color: "rgba(31,35,40,0.75)" }}>
            A blood test you take at home, a doctor-written report, and a care plan built around what you told us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/screening" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold" style={{ background: GREEN, color: "#fff" }}>
              Start my free assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/sample-report" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold" style={{ background: LIME, color: GREEN }}>
              See a sample report
            </Link>
          </div>
        </div>
      </section>

      <StageCards active={stage} />
      <TestTierCards />
      <SupportTabs />
      <HormonePanel />
      <ConsultationBand />
      <ComparisonTable />
      <PartnerBand />
      <FaqAccordion />

      <SiteFooter />
    </div>
  )
}
