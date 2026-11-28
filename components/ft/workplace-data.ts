import type { ContentEntry } from "./section-types"

export type WorkplaceKey =
  | "workplace"
  | "pricing"
  | "mission"
  | "contact"
  | "employee-benefits"
  | "for-insurers"
  | "for-brokers"
  | "case-studies"
  | "resources"

const TALK = { label: "Talk to us", href: "/contact" }

export const WORKPLACE: Record<WorkplaceKey, ContentEntry> = {
  workplace: {
    h1: "Hormone and reproductive health benefits for every life stage",
    intro:
      "FertiTerra for Work gives your people access to testing, clinical appointments and specialist care for the things that quietly take people out of work: periods, fertility treatment, miscarriage and menopause.",
    heroCta: TALK,
    sections: [
      {
        kind: "prose",
        title: "What we provide",
        body: "A benefit that covers the reproductive health issues people rarely raise with a manager, delivered through the same clinical service we run for individuals.",
        bullets: [
          "Hormone and fertility testing, with results explained",
          "Appointments with gynaecologists, counsellors and nutritionists",
          "Menopause and perimenopause support",
          "Fertility treatment guidance, including where to go and what to ask",
          "Manager and HR briefing so the benefit is used rather than ignored",
        ],
      },
      {
        kind: "cards",
        title: "Our solutions",
        items: [
          { title: "For HR leaders", body: "A benefit you can launch without adding admin, with usage reporting you can show the board." },
          { title: "For insurers", body: "Add reproductive health to a policy, with clinical pathways already built." },
          { title: "For brokers", body: "A product to put in front of clients that answers a question their staff are already asking." },
        ],
      },
      {
        kind: "prose",
        title: "Why workplaces need it",
        body: "Reproductive health problems are common, treatable, and almost never discussed at work. The cost shows up as absence, quiet disengagement and people leaving after a bad year.",
        bullets: [
          "Symptom-led absence that gets recorded as sickness without a cause",
          "Fertility treatment appointments that people hide",
          "Menopause symptoms that push experienced staff out early",
          "Miscarriage, which is usually taken as ordinary leave and nothing more",
        ],
      },
      {
        kind: "steps",
        title: "How it works",
        items: [
          { title: "Talk to us", body: "We look at your headcount, your sector and what you already offer." },
          { title: "Choose a plan", body: "A per-employee plan or a credit package, depending on how you want to run it." },
          { title: "Launch", body: "We give you the materials for your people and a briefing for managers." },
          { title: "Report", body: "Usage and outcomes, aggregated, so you can see whether it is being used." },
        ],
      },
      {
        kind: "cta",
        title: "See what it would look like for your team.",
        body: "Tell us your headcount and we will come back with a plan and a price in writing.",
        label: TALK.label,
        href: TALK.href,
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Is employee health data shared with the employer?", a: "No. Employers see aggregated usage, never an individual's results or appointments." },
          { q: "Can we offer it to partners and dependants?", a: "Yes, on the plans that include family cover." },
          { q: "How long does it take to launch?", a: "Usually a few weeks from signing, once we have your employee list." },
        ],
      },
    ],
  },

  pricing: {
    h1: "Plans for businesses",
    intro:
      "Pricing depends on headcount and how much of the service you want to include. We quote in writing rather than publishing a number that will not fit your organisation.",
    heroCta: { label: "Request a quote", href: "/contact" },
    sections: [
      {
        kind: "cards",
        title: "How the plans differ",
        items: [
          { title: "Core", body: "Testing and one clinical appointment per employee, plus the manager briefing." },
          { title: "Plus", body: "Adds counselling, nutrition and a second appointment, with priority booking." },
          { title: "Custom", body: "Adds menopause support, family cover for partners, and on-site sessions." },
        ],
      },
      {
        kind: "prose",
        title: "What drives the price",
        bullets: [
          "Number of employees covered",
          "Whether partners and dependants are included",
          "How many clinical appointments are included per person",
          "Whether you want on-site sessions or reporting",
          "Contract length, since annual terms cost less per head",
        ],
      },
      {
        kind: "prose",
        title: "Credits, if you prefer them",
        body: "Some organisations would rather buy a block of appointments and allocate them as needed, instead of covering everyone. Credits work like that: you buy a pool, your people draw on it, and unused credits carry into the next term.",
      },
      {
        kind: "cta",
        title: "Get a figure for your headcount.",
        body: "Send your headcount and we will reply with a plan and a price in writing.",
        label: "Request a quote",
        href: "/contact",
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Is there a minimum headcount?", a: "No. Small teams can buy credits instead of a per-employee plan." },
          { q: "Do you invoice annually?", a: "Yes, and we can invoice quarterly on larger contracts." },
          { q: "What happens to unused credits?", a: "They carry into the next term rather than expiring at the end of the year." },
        ],
      },
    ],
  },

  mission: {
    h1: "Our mission",
    intro:
      "Reproductive health problems are common, treatable and still routinely dismissed. We exist to shorten the distance between having a symptom and knowing what it means.",
    sections: [
      {
        kind: "prose",
        title: "The problem we are solving",
        body: "It takes years for many conditions to be diagnosed, and the usual reason is not that the condition is rare. It is that the symptoms were treated as normal, and nobody ran the tests.",
        bullets: [
          "Symptoms normalised instead of investigated",
          "Tests run one at a time, months apart",
          "Results handed over without explanation",
          "Care that stops at a diagnosis instead of continuing into treatment",
        ],
      },
      {
        kind: "prose",
        title: "What we do differently",
        bullets: [
          "Test the whole hormonal picture at once, not one marker per visit",
          "Explain the result in plain language, with a next step attached",
          "Keep the clinical path joined up, from test to appointment to treatment",
          "Publish our reasoning, so you can check it",
        ],
      },
      {
        kind: "prose",
        title: "Who we build for",
        body: "We build for the person who has been told their symptoms are normal, and for the employer who would rather keep that person than replace them.",
      },
      {
        kind: "cta",
        title: "If this is the problem you want solved too, talk to us.",
        label: TALK.label,
        href: TALK.href,
      },
    ],
  },

  contact: {
    h1: "Talk to us",
    intro:
      "Tell us your headcount and what you are trying to solve, and we will come back with a plan and a price.",
    heroCta: { label: "Send an enquiry", href: "/contact" },
    sections: [
      {
        kind: "steps",
        title: "What happens after you get in touch",
        items: [
          { title: "A reply within two working days", body: "From a person, not an autoresponder." },
          { title: "A short call", body: "Twenty minutes to understand your team and what you already offer." },
          { title: "A written proposal", body: "Plan, price and launch timeline, in writing, so you can take it to a decision-maker." },
        ],
      },
      {
        kind: "prose",
        title: "Useful to have ready",
        bullets: [
          "Headcount, and whether partners are included",
          "Whether you already offer private health cover",
          "The problem you are trying to fix, in your own words",
          "Any budget range you are working within",
        ],
      },
      {
        kind: "cta",
        title: "Prefer to speak to someone directly?",
        body: "Book a call and we will talk it through.",
        label: "Book a call",
        href: "/contact",
      },
    ],
  },

  "employee-benefits": {
    h1: "For HR leaders",
    intro:
      "A reproductive health benefit that launches without adding to your workload, and reports in a way you can take to the board.",
    heroCta: TALK,
    sections: [
      {
        kind: "prose",
        title: "The gap in most benefits packages",
        body: "Private health cover handles the general case well and the reproductive case badly. Periods, fertility treatment, miscarriage and menopause are either excluded, or covered in a way nobody feels able to use.",
      },
      {
        kind: "cards",
        title: "What your people get",
        items: [
          { title: "Testing, with an explanation", body: "Hormone and fertility testing, with results explained rather than handed over." },
          { title: "Clinical appointments", body: "Gynaecology, counselling and nutrition, bookable around work." },
          { title: "Menopause support", body: "Specialist appointments and practical adjustments for people in perimenopause." },
          { title: "Fertility treatment guidance", body: "Advice on options, clinics and what to ask before committing to a cycle." },
        ],
      },
      {
        kind: "steps",
        title: "How we launch it",
        items: [
          { title: "Briefing for managers", body: "So the benefit is understood and not treated as awkward." },
          { title: "Materials for staff", body: "Copy you can drop into your intranet and your all-hands." },
          { title: "Simple access", body: "A link and a code, no procurement project for your team." },
          { title: "Reporting", body: "Aggregated usage, so you can see take-up without seeing anyone's data." },
        ],
      },
      {
        kind: "cta",
        title: "Bring it to your next benefits review.",
        body: "We will send a one-page summary you can circulate.",
        label: TALK.label,
        href: TALK.href,
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Do I see individual results?", a: "No. Reporting is aggregated and never identifies a person." },
          { q: "Can we pilot it with one team?", a: "Yes. Pilots usually run for one quarter before a wider rollout." },
          { q: "Does it replace private medical insurance?", a: "No. It covers what PMI usually leaves out." },
        ],
      },
    ],
  },

  "for-insurers": {
    h1: "For insurers",
    intro:
      "Add reproductive health to a policy without building the clinical pathway yourself. The service, the clinicians and the reporting already exist.",
    heroCta: TALK,
    sections: [
      {
        kind: "prose",
        title: "What we bring to a policy",
        body: "A defined pathway from symptom to diagnosis to treatment, with the clinical work delivered by our team and the outcome reported back to you in aggregate.",
      },
      {
        kind: "cards",
        title: "Where it fits",
        items: [
          { title: "Group health", body: "An added benefit that addresses a gap members already notice." },
          { title: "Income protection", body: "Earlier diagnosis and treatment, which shortens the absence that drives claims." },
          { title: "Life and critical illness", body: "A prevention layer that sits in front of the claim event." },
        ],
      },
      {
        kind: "prose",
        title: "How integration works",
        bullets: [
          "Members are identified through your existing eligibility file",
          "Access is through a code or a link, with no new system for you to run",
          "Clinical records stay with us and with the member",
          "You receive aggregated utilisation and outcome reporting",
        ],
      },
      {
        kind: "cta",
        title: "Talk to us about a pilot cohort.",
        label: TALK.label,
        href: TALK.href,
      },
    ],
  },

  "for-brokers": {
    h1: "For brokers",
    intro:
      "A product you can put in front of clients that answers a question their staff are already asking, with a price you can quote and a launch that does not stall.",
    heroCta: TALK,
    sections: [
      {
        kind: "cards",
        title: "What you can offer",
        items: [
          { title: "A defined benefit", body: "Testing and clinical appointments, priced per employee or by credit block." },
          { title: "A menopause add-on", body: "A specific answer to the request clients are now bringing to renewals." },
          { title: "A pilot", body: "One quarter, one team, with reporting at the end." },
        ],
      },
      {
        kind: "prose",
        title: "What we handle",
        bullets: [
          "The clinical service and the clinicians",
          "Employee materials and manager briefings",
          "Onboarding and access codes",
          "Aggregated reporting for the client",
        ],
      },
      {
        kind: "prose",
        title: "What we need from you",
        bullets: [
          "Headcount and eligibility",
          "Whether partners are included",
          "The client's renewal date, so the launch lands in time",
        ],
      },
      {
        kind: "cta",
        title: "Ask us for a quote you can take to a client.",
        label: TALK.label,
        href: TALK.href,
      },
    ],
  },

  "case-studies": {
    h1: "Case studies",
    intro:
      "What organisations found when they added reproductive health to their benefits, written up with their permission.",
    sections: [
      {
        kind: "prose",
        title: "Nothing published yet",
        body: "We are running our first workplace pilots now. Rather than write up a client who has not agreed to it, or borrow a case study from somewhere else, this page stays empty until the first one is finished and signed off.",
      },
      {
        kind: "prose",
        title: "What a case study will contain",
        bullets: [
          "The organisation, named, with their permission",
          "What they offered before, and the gap they were trying to close",
          "What they launched, and how long it took",
          "Take-up, and what people actually used",
          "What they changed as a result",
        ],
      },
      {
        kind: "cta",
        title: "Want to be one of the first?",
        body: "Pilot places are limited, and pilots are where these write-ups come from.",
        label: TALK.label,
        href: TALK.href,
      },
    ],
  },

  resources: {
    h1: "Resources",
    intro:
      "Material for the people running the benefit and the people using it: guides, sessions and plain explanations.",
    sections: [
      {
        kind: "links",
        title: "Start here",
        items: [
          { title: "Guides and how-to's", href: "/learn/guides" },
          { title: "Webinars and events", href: "/learn/webinars" },
          { title: "Fertility glossary", href: "/learn/glossary" },
          { title: "Knowledge centre", href: "/knowledge-centre" },
          { title: "Symptoms and conditions", href: "/blog/pcos" },
          { title: "Menopause consultation", href: "/appointments/menopause-specialist" },
        ],
      },
      {
        kind: "prose",
        title: "For managers",
        body: "The conversations that go wrong usually go wrong at the start. These are the points worth getting right.",
        bullets: [
          "Ask what someone needs, not what is wrong with them",
          "Treat a fertility appointment like any other medical appointment",
          "Do not require a diagnosis before offering flexibility",
          "Keep it confidential, including from the rest of the team",
          "Check in after a miscarriage, and again a month later",
        ],
      },
      {
        kind: "cta",
        title: "Want the manager briefing pack?",
        body: "We send it as part of onboarding, or on its own if you ask.",
        label: TALK.label,
        href: TALK.href,
      },
    ],
  },
}
