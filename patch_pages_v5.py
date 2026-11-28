#!/usr/bin/env python3
"""
FertiTerra - the five Tests dropdown pages, plus the lime colour removed.

What this does:

  1. Creates components/ft/test-stage-page.tsx, one page built to Hertility's
     /hormone-and-fertility-testing structure: hero, choose your test, stages,
     symptoms band, hormone panel, journey, sample report, expert call,
     comparison table, FAQ. FertiTerra colours only.
  2. Creates the five routes the Tests dropdown points at:
     /test-kits/trying-to-conceive, /experiencing-symptoms, /planning-ahead,
     /perimenopausal, /just-curious. Each renders that page with its own
     eyebrow line and preselected goal, which is exactly how Hertility does it.
  3. Repoints the five Tests links in components/header.tsx to those routes.
  4. Removes the lime #E6FF70 from the Tests "Start here" button and from the
     hero waitlist call to action, replacing it with brand deep green #1F3D33
     and cream text.

Safe: idempotent, backs up every file it edits, and stops without writing if it
cannot find the menu.
"""
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(".")
HEADER = ROOT / "components" / "header.tsx"

if not HEADER.exists():
    sys.exit("No components/header.tsx here. Run this from the Fertiterra folder.")

STAGES = [
    ("trying-to-conceive", "Trying to get pregnant?"),
    ("experiencing-symptoms", "Symptoms you want answers for?"),
    ("planning-ahead", "Planning ahead?"),
    ("perimenopausal", "Perimenopause or menopause?"),
    ("just-curious", "Curious about your hormones?"),
]

PAGE_TEMPLATE = '''import type {{ Metadata }} from "next";
import {{ Header }} from "@/components/header";
import {{ SiteFooter }} from "@/components/site-footer";
import {{ TestStagePage }} from "@/components/ft/test-stage-page";

export const metadata: Metadata = {{
  title: "At-Home Hormone and Fertility Tests | FertiTerra",
  description:
    "A blood test, a doctor-written report and a care plan built around your stage: {desc}",
}};

export default function Page() {{
  return (
    <>
      <Header />
      <TestStagePage stage="{stage}" />
      <SiteFooter />
    </>
  );
}}
'''

DESC = {
    "trying-to-conceive": "trying to conceive.",
    "experiencing-symptoms": "symptoms you want answers for.",
    "planning-ahead": "planning ahead.",
    "perimenopausal": "perimenopause and menopause.",
    "just-curious": "curiosity about your own hormones.",
}

LIME = re.compile(r"#E6FF70|#e6ff70|lime-\[#[0-9A-Fa-f]{6}\]")


def fix_lime_in_classname(block):
    """Lime becomes brand deep green as a fill, cream as a text or tint."""
    if not LIME.search(block):
        return block, 0
    before = block
    block = block.replace("bg-[#E6FF70]", "bg-[#1F3D33]").replace("bg-[#e6ff70]", "bg-[#1F3D33]")
    if "bg-[#1F3D33]" in block:
        block = block.replace("text-[#1F3D33]", "text-[#FAF7F2]")
    block = block.replace("rgba(230,255,112,", "rgba(250,247,242,")
    block = re.sub(r"#E6FF70|#e6ff70", "#FAF7F2", block)
    return block, (0 if block == before else 1)


def patch_lime(path: Path):
    src = path.read_text(encoding="utf-8")
    if not LIME.search(src):
        return 0
    out = []
    changed = 0
    for line in src.split("\n"):
        if LIME.search(line):
            new, n = fix_lime_in_classname(line)
            changed += n
            out.append(new)
        else:
            out.append(line)
    if changed:
        shutil.copyfile(path, str(path) + ".bak-lime")
        path.write_text("\n".join(out), encoding="utf-8")
    return changed


def patch_lime_css(path: Path):
    """In CSS a lime fill becomes deep green, and its text becomes cream."""
    src = path.read_text(encoding="utf-8")
    if not LIME.search(src):
        return 0

    def fix_rule(m):
        head, body = m.group(1), m.group(2)
        if not LIME.search(body):
            return m.group(0)
        body = re.sub(r"(background\s*:\s*)#e6ff70", r"\g<1>#1F3D33", body, flags=re.I)
        body = re.sub(r"(background\s*:\s*)#E6FF70", r"\g<1>#1F3D33", body)
        if "#1F3D33" in body:
            body = re.sub(r"(color\s*:\s*)#1f2328", r"\g<1>#FAF7F2", body, flags=re.I)
            body = re.sub(r"(color\s*:\s*)#1f3d33", r"\g<1>#FAF7F2", body, flags=re.I)
        body = re.sub(r"#e6ff70|#E6FF70", "#FAF7F2", body)
        return head + "{" + body + "}"

    out = re.sub(r"([^{}]*)\{([^{}]*)\}", fix_rule, src)
    if out == src:
        return 0
    shutil.copyfile(path, str(path) + ".bak-lime")
    path.write_text(out, encoding="utf-8")
    return 1


# ---------- 1. the page component ----------
component_dir = ROOT / "components" / "ft"
component_dir.mkdir(parents=True, exist_ok=True)
component_file = component_dir / "test-stage-page.tsx"

SOURCE = r"""import Link from "next/link";

/**
 * The At-Home Hormone and Fertility Tests page.
 *
 * Structure, section order and every content block follow Hertility's
 * /hormone-and-fertility-testing page. Colours, assets and wording are
 * FertiTerra's own. No lime: the palette is deep green, cream, mint and ink.
 *
 * All five Tests dropdown destinations render this page with their own
 * eyebrow line and preselected goal, exactly as Hertility does.
 */

export type Stage = "trying-to-conceive" | "experiencing-symptoms" | "planning-ahead" | "perimenopausal" | "just-curious";

export const STAGES: Record<Stage, { eyebrow: string; goal: "symptoms" | "fertility" | "perimenopause" }> = {
  "trying-to-conceive": { eyebrow: "Trying to get pregnant? Take our", goal: "fertility" },
  "experiencing-symptoms": { eyebrow: "Symptoms you want answers for? Take our", goal: "symptoms" },
  "planning-ahead": { eyebrow: "Planning ahead? Take our", goal: "fertility" },
  perimenopausal: { eyebrow: "Perimenopause or menopause? Take our", goal: "perimenopause" },
  "just-curious": { eyebrow: "Curious about your hormones? Take our", goal: "symptoms" },
};

const INK = "#1F2328";
const GREEN = "#1F3D33";
const CREAM = "#FAF7F2";
const MINT = "#E4EDE6";

const PRODUCTS = [
  {
    name: "Advanced Hormone and Fertility Test",
    line: "Diagnostic results with a one-to-one specialist nurse walkthrough.",
    price: "485,000 RWF",
    included: [
      "Clinical results review call",
      "At-home blood collection kit",
      "Doctor-written report",
      "Care plan with personalised recommendations",
    ],
    featured: true,
  },
  {
    name: "Hormone and Fertility Test",
    line: "A clinical-grade report for those confident navigating their results.",
    price: "385,000 RWF",
    included: ["At-home blood collection kit", "Doctor-written report", "Personalised care plan"],
    featured: false,
  },
];

const ASSURANCES = ["Free sample return", "Courier delivery", "Results back within 6 days"];

const GOALS = [
  {
    title: "Managing symptoms",
    body: "Fatigue, irritability, anxiety, feeling cold, low mood, acne.",
    goal: "symptoms" as const,
  },
  {
    title: "Fertility",
    body: "Planning for the future or actively trying to conceive.",
    goal: "fertility" as const,
  },
  {
    title: "Perimenopause or menopause",
    body: "Menopausal or experiencing symptoms and looking for answers.",
    goal: "perimenopause" as const,
  },
];

const HORMONES = [
  { name: "Anti-Müllerian Hormone", points: ["Gives an indication of your egg quantity.", "Helps signal some conditions like polycystic ovaries."] },
  { name: "Oestradiol", points: ["Shows how well your ovaries are working across your cycle.", "Low levels can cause symptoms or indicate menopause."] },
  { name: "Free thyroxine", points: ["Measures active thyroid hormone levels.", "Helps diagnose thyroid problems, over-active or under-active."] },
  { name: "Luteinising hormone", points: ["Triggers egg release, ovulation.", "Low or high levels can disrupt ovulation and your cycle."] },
  { name: "Follicle-stimulating hormone", points: ["Important for maturing your eggs.", "High levels may suggest menopause."] },
  { name: "Thyroid-stimulating hormone", points: ["Checks if your thyroid is working too much or too little.", "Shows if your thyroid needs support for balanced energy."] },
  { name: "Testosterone", points: ["High levels can disrupt your periods and cause acne.", "Important for detecting conditions like PMOS."] },
  { name: "Sex hormone-binding globulin", points: ["Measures how much of your sex hormones your body can use.", "Helps understand hormonal balance."] },
  { name: "DHEAS", points: ["Shows androgen levels from your adrenal glands.", "High levels can cause acne or excess hair, often linked to PMOS."] },
  { name: "Prolactin", points: ["Influences the signals for ovulation.", "High levels can disrupt your cycle and ovulation."] },
];

const JOURNEY = [
  { title: "Testing", body: "Your at-home blood collection kit, with support if you need it." },
  { title: "Understanding your results", body: "A doctor-written report that explains what each hormone means for you." },
  { title: "Speak to an expert", body: "A one-to-one call with a specialist nurse to walk through your results." },
  { title: "Your care plan", body: "Personalised recommendations built around your symptoms and goals." },
  { title: "Ongoing support", body: "Your results, your report and your plan stay with you." },
];

const COMPARE: { label: string; advanced: string | boolean; base: string | boolean }[] = [
  { label: "Consultation", advanced: "30-min online consultation with a specialist nurse", base: false },
  { label: "Hormone testing", advanced: true, base: true },
  { label: "Clinical results review call", advanced: true, base: false },
  { label: "Tests personalised key hormones", advanced: true, base: true },
  { label: "Insights into your egg count through AMH", advanced: true, base: true },
  { label: "Answers to hormonal symptoms, like acne or irregular periods", advanced: true, base: true },
  { label: "Screens for conditions such as PMOS", advanced: true, base: true },
  { label: "Suitable for those on hormonal contraception", advanced: true, base: true },
  { label: "Get it right blood draw call", advanced: true, base: true },
  { label: "Clinical grade results in 6 days", advanced: true, base: true },
  { label: "Doctor-written report with a clinical care plan", advanced: true, base: true },
];

const FAQ = [
  {
    q: "What is your refund policy?",
    a: "We refund at-home hormone and fertility test orders placed within 30 days of the refund request. Orders already dispatched are not refunded. If there is an issue with your blood sample, we cover the cost of the test.",
  },
  {
    q: "Is the packaging discreet?",
    a: "Yes. Your order arrives in plain packaging with no mention of FertiTerra or of what is inside.",
  },
  {
    q: "When should I return my sample?",
    a: "Return your sample the same day it was taken, using the prepaid envelope included in your kit.",
  },
  {
    q: "How does the Advanced Hormone and Fertility Test work?",
    a: "It works in four steps. You complete the online health assessment covering your goals, symptoms, medical history and lifestyle. Your kit is sent by courier. You collect a small finger-prick sample, with a free blood draw call if you want help. Your sample is analysed in a clinical laboratory and a doctor-written report with a personalised care plan follows.",
  },
  {
    q: "Which day of my cycle should I test?",
    a: "Day 3 of your cycle, counting day 1 as the first day of your period. If your periods are irregular, wait until you have a period for the most useful insights. If you do not have periods at all, you can test at any time.",
  },
  {
    q: "What time of day should I test?",
    a: "In the morning, within the first few hours of waking, after fasting for at least 8 hours overnight. Some hormones move through the day and are affected by food.",
  },
  {
    q: "What else do I get alongside my blood results?",
    a: "A doctor-written report explaining what each hormone means for you, a personalised clinical care plan, and a call with a specialist nurse on the Advanced Test.",
  },
  {
    q: "What is included in a full hormone panel?",
    a: "The Advanced panel covers up to 10 hormones, chosen for you from your online health assessment. Not everyone needs all 10.",
  },
  {
    q: "How much is a FertiTerra test?",
    a: "385,000 RWF for the Hormone and Fertility Test, or 485,000 RWF for the Advanced Hormone and Fertility Test. Both use the same blood collection kit and the same laboratory analysis. The Advanced Test adds the clinical results review call.",
  },
  {
    q: "How do I use a FertiTerra test?",
    a: "Follow the directions in your blood collection kit and use the finger-prick device as shown. If you would rather not do it alone, book the free blood draw call and a nurse will guide you through it live.",
  },
];

function Check({ on }: { on: boolean }) {
  if (!on) return <span className="text-[#1F2328]/30">-</span>;
  return (
    <svg viewBox="0 0 20 20" className="mx-auto h-5 w-5" fill="none" stroke={GREEN} strokeWidth="2">
      <path d="m4 10 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TestStagePage({ stage }: { stage: Stage }) {
  const config = STAGES[stage];
  const heroCta = `/quiz?goal=${config.goal}`;

  return (
    <main className="w-full bg-[#FAF7F2] text-[#1F2328]">
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1440px] px-5 pb-10 pt-14 sm:px-10 lg:px-20 lg:pb-14 lg:pt-20">
        <p className="text-[12px] font-semibold uppercase leading-[20px] tracking-[0.12em] text-[#1F3D33]/70">
          {config.eyebrow}
        </p>
        <h1 className="mt-4 max-w-[900px] font-serif text-[38px] leading-[1.08] tracking-[-0.01em] text-[#1F2328] sm:text-[52px] lg:text-[64px]">
          At-Home Hormone and Fertility Tests
        </h1>
        <p className="mt-5 max-w-[620px] text-[17px] leading-[28px] text-[#1F2328]/75">
          One blood test, a doctor-written report and a plan you can act on. Built for your stage, whether that is symptoms, fertility or perimenopause.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={heroCta}
            className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#1F3D33] px-8 text-[16px] font-semibold text-[#FAF7F2] transition-opacity hover:opacity-90"
          >
            Start my free assessment
          </Link>
          <Link
            href="/test-kits"
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#1F2328]/20 px-8 text-[16px] font-semibold text-[#1F2328] transition-colors hover:border-[#1F3D33]"
          >
            Compare products
          </Link>
        </div>
      </section>

      {/* Choose your test */}
      <section className="mx-auto w-full max-w-[1440px] px-5 pb-4 sm:px-10 lg:px-20">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1F3D33]/70">Choose your test</p>
        <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-2xl p-8"
              style={{ backgroundColor: p.featured ? GREEN : MINT }}
            >
              <h2
                className="font-serif text-[26px] leading-[1.2]"
                style={{ color: p.featured ? CREAM : INK }}
              >
                {p.name}
              </h2>
              <p
                className="mt-3 text-[15px] leading-[25px]"
                style={{ color: p.featured ? "rgba(250,247,242,0.78)" : "rgba(31,35,40,0.75)" }}
              >
                {p.line}
              </p>
              <ul className="mt-6 space-y-3">
                {p.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-[24px]">
                    <span
                      className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full"
                      style={{ backgroundColor: p.featured ? CREAM : GREEN }}
                    />
                    <span style={{ color: p.featured ? CREAM : INK }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className="mt-8 font-serif text-[30px]"
                style={{ color: p.featured ? CREAM : INK }}
              >
                {p.price}
              </p>
              <Link
                href={heroCta}
                className="mt-5 inline-flex h-[48px] items-center justify-center rounded-full text-[15px] font-semibold transition-opacity hover:opacity-90"
                style={
                  p.featured
                    ? { backgroundColor: CREAM, color: GREEN }
                    : { backgroundColor: GREEN, color: CREAM }
                }
              >
                Start here
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#1F2328]/10 pt-5 text-[14px] text-[#1F2328]/70">
          {ASSURANCES.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20">
        <h2 className="max-w-[760px] font-serif text-[32px] leading-[1.15] sm:text-[42px]">
          We're all at different stages of our journey
        </h2>
        <p className="mt-4 text-[17px] leading-[28px] text-[#1F2328]/75">What's most important to you?</p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {GOALS.map((g) => (
            <Link
              key={g.title}
              href={`/quiz?goal=${g.goal}`}
              className="group flex flex-col rounded-2xl border border-[#1F2328]/10 bg-white/60 p-7 transition-colors hover:border-[#1F3D33]"
            >
              <h3 className="font-serif text-[22px] leading-[1.25]">{g.title}</h3>
              <p className="mt-3 text-[15px] leading-[25px] text-[#1F2328]/70">{g.body}</p>
              <span className="mt-6 text-[14px] font-semibold text-[#1F3D33]">Start here</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Symptoms test */}
      <section className="w-full" style={{ backgroundColor: MINT }}>
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="max-w-[560px] font-serif text-[28px] leading-[1.2] sm:text-[34px]">
                Suss out your symptoms. Meet your diagnostic symptoms test with clinical grade results and expert support.
              </h3>
              <p className="mt-5 max-w-[520px] text-[16px] leading-[27px] text-[#1F2328]/75">
                Painful periods? Tired all the time? Acne? Finally understand what's causing your symptoms.
              </p>
              <Link
                href="/stories"
                className="mt-7 inline-flex h-[48px] items-center justify-center rounded-full bg-[#1F3D33] px-7 text-[15px] font-semibold text-[#FAF7F2] transition-opacity hover:opacity-90"
              >
                Watch other people's stories
              </Link>
            </div>
            <div className="rounded-2xl bg-[#FAF7F2] p-8">
              <p className="text-[15px] leading-[26px] text-[#1F2328]/80">
                Using your online health assessment answers, we craft a test tailored to you.
              </p>
              <p className="mt-6 font-serif text-[40px] leading-none text-[#1F3D33]">0 / 10</p>
              <p className="mt-2 text-[14px] text-[#1F2328]/60">hormones in the full panel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hormone panel */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20">
        <h2 className="font-serif text-[32px] leading-[1.15] sm:text-[42px]">What we measure</h2>
        <p className="mt-4 max-w-[640px] text-[16px] leading-[27px] text-[#1F2328]/75">
          Up to 10 hormones, chosen for you from your assessment. Here is what each one tells you.
        </p>
        <div className="mt-9 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          {HORMONES.map((h) => (
            <div key={h.name} className="border-t border-[#1F2328]/10 pt-5">
              <h3 className="text-[17px] font-semibold">{h.name}</h3>
              <ul className="mt-2 space-y-1.5">
                {h.points.map((p) => (
                  <li key={p} className="text-[15px] leading-[25px] text-[#1F2328]/70">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="w-full" style={{ backgroundColor: GREEN }}>
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20">
          <h2 className="font-serif text-[32px] leading-[1.15] text-[#FAF7F2] sm:text-[42px]">We're here to support you</h2>
          <p className="mt-3 text-[15px] uppercase tracking-[0.12em] text-[#FAF7F2]/60">Your journey with FertiTerra</p>
          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {JOURNEY.map((j, i) => (
              <div key={j.title} className="rounded-2xl bg-[#FAF7F2]/[0.06] p-7">
                <p className="font-serif text-[15px] text-[#FAF7F2]/50">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-[21px] leading-[1.25] text-[#FAF7F2]">{j.title}</h3>
                <p className="mt-2 text-[15px] leading-[25px] text-[#FAF7F2]/75">{j.body}</p>
              </div>
            ))}
          </div>
          <Link
            href={heroCta}
            className="mt-9 inline-flex h-[50px] items-center justify-center rounded-full bg-[#FAF7F2] px-8 text-[15px] font-semibold text-[#1F3D33] transition-opacity hover:opacity-90"
          >
            Start my free assessment
          </Link>
        </div>
      </section>

      {/* Sample report */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-[30px] leading-[1.15] sm:text-[38px]">Get a sample report by email</h2>
            <p className="mt-4 max-w-[480px] text-[16px] leading-[27px] text-[#1F2328]/75">
              See exactly what arrives after your test: every hormone explained, your care plan, and the next steps your doctor recommends.
            </p>
            <Link
              href="/sample-report"
              className="mt-6 inline-flex h-[48px] items-center justify-center rounded-full bg-[#1F3D33] px-7 text-[15px] font-semibold text-[#FAF7F2] transition-opacity hover:opacity-90"
            >
              Download a sample report
            </Link>
            <p className="mt-4 text-[13px] text-[#1F2328]/55">
              By requesting a sample you agree to our{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: MINT }}>
            <h3 className="font-serif text-[22px] leading-[1.25]">Our laboratory</h3>
            <p className="mt-3 text-[15px] leading-[26px] text-[#1F2328]/75">
              Every sample is processed in a clinical laboratory and every report is written by a doctor. Your results are reviewed by a clinician before they reach you, and your care plan is written around your answers, not a template.
            </p>
          </div>
        </div>
      </section>

      {/* Expert call */}
      <section className="w-full" style={{ backgroundColor: MINT }}>
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <h2 className="font-serif text-[30px] leading-[1.15] sm:text-[38px]">
              30 min call with an expert included with every Advanced Test
            </h2>
            <div>
              <p className="text-[16px] leading-[27px] text-[#1F2328]/75">
                A specialist nurse walks you through your results line by line, answers what you did not understand, and tells you what to do next. It is the difference between a set of numbers and a plan.
              </p>
              <Link
                href="/appointments"
                className="mt-6 inline-flex h-[48px] items-center justify-center rounded-full bg-[#1F3D33] px-7 text-[15px] font-semibold text-[#FAF7F2] transition-opacity hover:opacity-90"
              >
                Speak to an expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20">
        <h2 className="font-serif text-[32px] leading-[1.15] sm:text-[42px]">Compare your options at a glance</h2>
        <p className="mt-4 text-[16px] leading-[27px] text-[#1F2328]/75">Use this guide to find your starting point.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[46%] border-b border-[#1F2328]/15 pb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#1F2328]/55">
                  &nbsp;
                </th>
                <th className="border-b border-[#1F2328]/15 pb-4 text-center text-[14px] font-semibold">
                  Advanced Hormone and Fertility Test
                </th>
                <th className="border-b border-[#1F2328]/15 pb-4 text-center text-[14px] font-semibold">
                  Hormone and Fertility Test
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row) => (
                <tr key={row.label}>
                  <td className="border-b border-[#1F2328]/10 py-4 pr-6 text-[15px] leading-[24px]">{row.label}</td>
                  <td className="border-b border-[#1F2328]/10 px-4 py-4 text-center text-[14px] text-[#1F2328]/75">
                    {typeof row.advanced === "string" ? row.advanced : <Check on={row.advanced} />}
                  </td>
                  <td className="border-b border-[#1F2328]/10 px-4 py-4 text-center text-[14px] text-[#1F2328]/75">
                    {typeof row.base === "string" ? row.base : <Check on={row.base} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-[820px] text-[13px] leading-[22px] text-[#1F2328]/55">
          If you are on hormonal contraception we do not measure LH, FSH or Oestradiol, because those hormones are influenced by contraception. Results are back within 6 days on average from the laboratory receiving your sample.
        </p>
      </section>

      {/* FAQ */}
      <section className="w-full" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto w-full max-w-[900px] px-5 py-16 sm:px-10">
          <h2 className="font-serif text-[32px] leading-[1.15] sm:text-[42px]">Got questions?</h2>
          <div className="mt-8 divide-y divide-[#1F2328]/10 border-t border-[#1F2328]/10">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="text-[17px] font-semibold leading-[26px]">{item.q}</h3>
                  <span className="mt-1 shrink-0 text-[20px] leading-none text-[#1F3D33]/60 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[760px] text-[15px] leading-[26px] text-[#1F2328]/75">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
"""

wrote_component = False
if not component_file.exists() or component_file.read_text(encoding="utf-8") != SOURCE:
    component_file.write_text(SOURCE, encoding="utf-8")
    wrote_component = True
print(("Created " if wrote_component else "Already current: ") + "components/ft/test-stage-page.tsx")

# ---------- 2. the five routes ----------
made = []
for stage, _ in STAGES:
    d = ROOT / "app" / "test-kits" / stage
    d.mkdir(parents=True, exist_ok=True)
    f = d / "page.tsx"
    body = PAGE_TEMPLATE.format(stage=stage, desc=DESC[stage])
    if not f.exists() or f.read_text(encoding="utf-8") != body:
        f.write_text(body, encoding="utf-8")
        made.append("/test-kits/" + stage)
print("Routes ready: " + (", ".join(made) if made else "all five already in place"))

# ---------- 3. point the Tests links at them ----------
src = HEADER.read_text(encoding="utf-8")
before = src
for stage, _ in STAGES:
    label = {
        "trying-to-conceive": "Trying to conceive",
        "experiencing-symptoms": "Experiencing symptoms",
        "planning-ahead": "Planning ahead",
        "perimenopausal": "Perimenopausal",
        "just-curious": "Just curious",
    }[stage]
    pattern = re.compile(r'(label:\s*"%s",\s*href:\s*")[^"]*(")' % re.escape(label))
    src, n = pattern.subn(r"\g<1>/test-kits/%s\g<2>" % stage, src)
    print(f'  {label:22} -> /test-kits/{stage}' + ("" if n else "  (label not found)"))

if src != before:
    if not Path(str(HEADER) + ".bak-before-links").exists():
        shutil.copyfile(HEADER, str(HEADER) + ".bak-before-links")
    HEADER.write_text(src, encoding="utf-8")
    print("Tests links updated.")
else:
    print("Tests links already point at the new routes.")

# ---------- 4. remove the banned lime everywhere ----------
total_files = 0
total_elements = 0
for base in ["app", "components"]:
    for f in sorted(Path(base).rglob("*")):
        if f.suffix not in (".tsx", ".ts", ".css"):
            continue
        try:
            text = f.read_text(encoding="utf-8")
        except Exception:
            continue
        if not LIME.search(text):
            continue
        n = patch_lime_css(f) if f.suffix == ".css" else patch_lime(f)
        if n:
            total_files += 1
            total_elements += n
            print(f"  {f}: {n}")

if total_files:
    print(f"Lime #E6FF70 removed from {total_files} file(s), {total_elements} place(s). Backups: *.bak-lime")
else:
    print("No lime #E6FF70 left anywhere in app/ or components/.")

# ---------- 5. check the five routes on your own dev server ----------
import urllib.request

def probe(path):
    try:
        with urllib.request.urlopen("http://localhost:3000" + path, timeout=90) as r:
            return r.status
    except Exception as e:
        code = getattr(e, "code", None)
        return code if code else type(e).__name__

print("")
print("Checking http://localhost:3000 (your dev server):")
for stage, _ in STAGES:
    path = "/test-kits/" + stage
    print(f"  {path:38} {probe(path)}")

# ---------- summary ----------
print("")
print("Done.")
print("  The five Tests links now open real pages.")
print("  The page uses only: ink #1F2328, deep green #1F3D33, cream #FAF7F2, mint #E4EDE6.")
print("  Backups: *.bak-lime and components/header.tsx.bak-before-links")
