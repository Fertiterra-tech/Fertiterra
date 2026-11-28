import type { ContentEntry } from "./section-types"

export type LearnKey = "guides" | "webinars" | "real-stories" | "glossary"

export const LEARN: Record<LearnKey, ContentEntry> = {
  guides: {
    h1: "Guides and how-to's",
    intro:
      "Longer reads for the questions that need more than a paragraph. Each guide is written to be read once and used afterwards.",
    heroCta: { label: "Start with your assessment", href: "/screening" },
    sections: [
      {
        kind: "links",
        title: "Guides to start with",
        items: [
          { title: "Get started kit", href: "/learn/get-started-kit" },
          { title: "Trying to conceive", href: "/learn/trying-to-conceive" },
          { title: "Struggling to conceive", href: "/learn/struggling-to-conceive" },
          { title: "Planning for children later", href: "/learn/planning-future-children" },
          { title: "Starting an LGBTQIA+ family", href: "/learn/lgbtqia-family" },
          { title: "Knowledge centre", href: "/knowledge-centre" },
        ],
      },
      {
        kind: "prose",
        title: "How our guides are written",
        body: "Every guide is checked against the clinical evidence and reviewed by a clinician before it goes up. Where the evidence is thin, we say so instead of filling the gap with confident advice.",
        bullets: [
          "Written in plain English, not clinical shorthand",
          "Reviewed by a clinician before publication",
          "Dated, and revised when the guidance changes",
          "No sponsored products and no affiliate links",
        ],
      },
      {
        kind: "cta",
        title: "Reading is a good start. Your own numbers are better.",
        body: "A hormone and fertility test tells you where you stand rather than where people generally stand.",
        label: "See the test",
        href: "/test-kits",
      },
    ],
  },

  webinars: {
    h1: "Webinars and events",
    intro:
      "Live sessions with our clinicians, where you can ask the question you would not ask in a rushed appointment.",
    sections: [
      {
        kind: "prose",
        title: "How our sessions work",
        body: "Sessions run online, usually in the evening, and last around 45 minutes: a short talk from a clinician, then open questions. You can attend with your camera off and ask in writing.",
      },
      {
        kind: "cards",
        title: "What a session covers",
        items: [
          { title: "One topic, properly", body: "A single subject rather than a survey, so there is time to go deep." },
          { title: "A clinician, live", body: "Not a recording. Someone who can answer your specific question." },
          { title: "Questions in writing", body: "Ask in the chat if you would rather not speak." },
          { title: "Notes afterwards", body: "A summary of what was covered, sent to everyone who registered." },
        ],
      },
      {
        kind: "prose",
        title: "Next dates",
        body: "We are setting the next season of sessions now. There are no confirmed dates to publish yet, and we would rather say that than list a date we cannot hold.",
        bullets: [
          "Join the waitlist and you will be told before dates are announced",
          "Topics are chosen from the questions people send in most",
          "Sessions are free to attend",
        ],
      },
      {
        kind: "cta",
        title: "Be told when the next session is announced.",
        label: "Join the waitlist",
        href: "/waitlist",
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Will sessions be recorded?", a: "Some are, where everyone attending agrees. A written summary goes out either way." },
          { q: "Can I submit a question in advance?", a: "Yes. Questions sent ahead of time get answered first." },
          { q: "Is it free?", a: "Yes." },
        ],
      },
    ],
  },

  "real-stories": {
    h1: "Real stories",
    intro:
      "First-hand accounts from people going through testing, treatment and everything around it. Told by them, in their words.",
    sections: [
      {
        kind: "prose",
        title: "Why we publish these",
        body: "Clinical information tells you what happens. It does not tell you what it feels like to sit in the waiting room, or to read a result you were not expecting. That part is usually only available from other people.",
      },
      {
        kind: "prose",
        title: "How we handle consent",
        body: "Nothing is published without the person's written consent, and they see the final piece before it goes up.",
        bullets: [
          "Written consent, with the right to withdraw at any point",
          "The contributor approves the final text",
          "Names are used only when the person asks for them",
          "No story is edited to make an outcome sound better than it was",
        ],
      },
      {
        kind: "prose",
        title: "Nothing published yet",
        body: "We are collecting the first set of stories now. Rather than write placeholders or borrow someone else's, this page will stay empty until the real ones are ready and approved.",
      },
      {
        kind: "cta",
        title: "If you would like to tell yours, we would like to hear it.",
        body: "You decide how much detail goes in, and you approve the final version.",
        label: "Get in touch",
        href: "/contact",
      },
    ],
  },

  glossary: {
    h1: "Fertility glossary",
    intro:
      "The words that turn up in results, letters and clinic appointments, explained without the shorthand.",
    sections: [
      {
        kind: "prose",
        title: "Hormones",
        bullets: [
          "AMH (anti-Mullerian hormone) — a hormone produced by the small follicles in your ovaries. Used as an estimate of ovarian reserve, not of fertility itself.",
          "FSH (follicle stimulating hormone) — signals the ovaries to grow follicles. High FSH can suggest the ovaries are working harder to respond.",
          "LH (luteinising hormone) — surges mid-cycle to trigger ovulation.",
          "Oestrogen — builds the womb lining in the first half of the cycle.",
          "Progesterone — holds the lining in place after ovulation, ready for implantation.",
          "Prolactin — a hormone that can suppress ovulation when high.",
          "TSH (thyroid stimulating hormone) — shows how hard the thyroid is working. Thyroid problems affect cycles and fertility.",
          "Testosterone — present in women too. High levels are linked to acne, hair growth and irregular ovulation.",
        ],
      },
      {
        kind: "prose",
        title: "Cycle and tests",
        bullets: [
          "Antral follicle count (AFC) — the number of small follicles seen on a scan, another measure of ovarian reserve.",
          "Follicular phase — the first half of the cycle, before ovulation.",
          "Luteal phase — the second half, from ovulation to your period.",
          "Ovarian reserve — how many eggs remain. It falls with age and does not predict whether you can conceive now.",
          "Ovulation — the release of an egg from the ovary, roughly mid-cycle.",
          "Day 3 test — a blood test taken early in the cycle, when hormone levels are read against a baseline.",
        ],
      },
      {
        kind: "prose",
        title: "Treatment",
        bullets: [
          "IUI (intrauterine insemination) — prepared sperm placed in the womb around ovulation.",
          "IVF (in vitro fertilisation) — eggs collected and fertilised outside the body, then an embryo transferred.",
          "ICSI — a single sperm injected directly into an egg.",
          "Embryo — a fertilised egg in its early days of development.",
          "Blastocyst — an embryo around five days old, the stage usually transferred.",
          "Retrieval — the procedure to collect eggs.",
          "Transfer — placing an embryo in the womb.",
          "Reciprocal IVF — one partner provides the eggs, the other carries the pregnancy.",
        ],
      },
      {
        kind: "prose",
        title: "Conditions",
        bullets: [
          "PCOS / PMOS — a hormonal condition affecting ovulation, androgens and insulin. Increasingly called PMOS.",
          "Endometriosis — tissue similar to the womb lining growing outside the womb.",
          "Fibroids — non-cancerous growths in the muscle of the womb.",
          "PMDD — a severe form of premenstrual mood change that affects daily functioning.",
          "Perimenopause — the transition before menopause, when cycles and hormones fluctuate.",
          "HRT (hormone replacement therapy) — oestrogen, with or without a progestogen, used to treat menopausal symptoms.",
        ],
      },
      {
        kind: "cta",
        title: "A word you did not find here?",
        body: "Send it over and we will add it.",
        label: "Get in touch",
        href: "/contact",
      },
    ],
  },
}
