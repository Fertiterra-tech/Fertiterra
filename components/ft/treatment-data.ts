export type TreatmentKey = "ivf-support" | "egg-freezing" | "lgbtqia-family" | "trusted-clinics"

type Item = { title: string; body: string }
type Col = { title: string; items: string[] }

export type Section =
  | { kind: "prose"; title: string; body?: string; bullets?: string[] }
  | { kind: "steps"; title: string; intro?: string; items: Item[] }
  | { kind: "cards"; title: string; intro?: string; items: Item[] }
  | { kind: "compare"; title: string; intro?: string; left: Col; right: Col }
  | { kind: "price"; title: string; body?: string; items: { label: string; value: string }[]; note?: string }
  | { kind: "cta"; title: string; body?: string; label: string; href: string }
  | { kind: "faq"; title: string; items: { q: string; a: string }[] }
  | { kind: "links"; title: string; items: { title: string; href: string }[] }

type Entry = {
  h1: string
  intro: string
  heroCta?: { label: string; href: string }
  sections: Section[]
}

const BOOK = "/contact"

export const TREATMENTS: Record<TreatmentKey, Entry> = {
  "ivf-support": {
    h1: "Thinking about IVF? Here is how to work out your next steps",
    intro:
      "IVF is a sequence of decisions, not a single appointment. This is what each stage involves, what drives the cost, and how to judge what a clinic is offering you.",
    heroCta: { label: "Talk to a Fertility Advisor", href: "/appointments/advisor-call" },
    sections: [
      {
        kind: "prose",
        title: "The fertility clinic landscape",
        body: "Clinics differ far more than their websites suggest: success rates, what a cycle includes, how much of the cost is bundled, and how much they explain before you pay. There is no single number that tells you which clinic is best for you, so the work is knowing what to ask.",
      },
      {
        kind: "compare",
        title: "The public and private routes",
        intro: "Both routes use the same procedures. The differences are access, waiting and cost.",
        left: {
          title: "The public route",
          items: [
            "You usually need a referral from a doctor",
            "Waiting lists can run for months or longer",
            "Eligibility rules on age, cycle count and previous children",
            "Lower cost to you, but less choice of clinic and timing",
          ],
        },
        right: {
          title: "The private route",
          items: [
            "You can book directly, without a referral",
            "Appointments and cycles start sooner",
            "You pay per cycle or per package",
            "You choose the clinic and the clinician",
          ],
        },
      },
      {
        kind: "cards",
        title: "What types of fertility treatment are available?",
        intro: "IVF is one option among several. Which one is right depends on what the tests show.",
        items: [
          { title: "IVF", body: "Eggs are collected and fertilised outside the body, then an embryo is transferred to the womb." },
          { title: "IUI", body: "Prepared sperm is placed in the womb around ovulation. Less invasive, and often tried before IVF." },
          { title: "ICSI", body: "A single sperm is injected into an egg. Used where sperm quality or fertilisation has been a problem." },
          { title: "Egg freezing", body: "Eggs are collected and stored, so you can use them later." },
          { title: "Donor eggs or sperm", body: "Where your own eggs or sperm cannot be used, or where a solo parent or same-sex couple needs a donor." },
          { title: "Surrogacy support", body: "Guidance on the process where a surrogate carries the pregnancy." },
        ],
      },
      {
        kind: "price",
        title: "What does IVF cost?",
        body: "A quoted cycle price rarely covers everything. This is what each part costs, so you can tell what a clinic is including.",
        items: [
          { label: "Initial consultation", value: "390,000 to 680,000 RWF" },
          { label: "Standard IVF cycle, including tests and storage", value: "9,510,000 to 13,590,000 RWF" },
          { label: "Fertility medication", value: "1,940,000 to 4,850,000 RWF" },
          { label: "Embryo storage, per year", value: "580,000 to 970,000 RWF" },
          { label: "ICSI, if required", value: "1,550,000 to 2,910,000 RWF" },
        ],
        note: "Converted from Hertility's published UK prices at 1 GBP = 1,941 RWF. Your clinic quotes against your own protocol.",
      },
      {
        kind: "prose",
        title: "Understanding IVF add-ons",
        body: "Add-ons are treatments offered on top of standard IVF. Some help specific problems. Others have thin evidence behind them and still add to the bill. The question to ask is never whether a clinic offers it, but what the evidence is for someone with your history.",
        bullets: [
          "Ask what problem the add-on is meant to solve in your case",
          "Ask what the evidence is, and whether it changes live birth rates",
          "Ask whether it is included in the quoted price",
          "Be wary of anything offered before your results are looked at",
        ],
      },
      {
        kind: "steps",
        title: "What is the typical IVF timeline?",
        intro: "One cycle usually runs across six to eight weeks, from first appointment to the pregnancy test.",
        items: [
          { title: "Consultation and tests", body: "Your history, hormone tests and a scan to check ovarian reserve and the womb." },
          { title: "The plan", body: "The clinic sets your protocol, medication and dates, and explains the risks." },
          { title: "Stimulation", body: "Daily medication for around ten to twelve days, with scans to track follicle growth." },
          { title: "Collection", body: "A short procedure under sedation to collect the eggs." },
          { title: "Fertilisation", body: "Eggs and sperm are combined in the lab, and embryos are watched for a few days." },
          { title: "Transfer and wait", body: "One embryo is transferred, then a pregnancy test about two weeks later." },
        ],
      },
      {
        kind: "cards",
        title: "How FertiTerra helps you go in informed",
        intro: "You do not have to work out the clinic question on your own.",
        items: [
          { title: "A Fertility Advisor call", body: "A 45-minute conversation about your options, what each treatment involves, and what to ask before you commit." },
          { title: "Your results, in writing", body: "Test results you can take to any clinic, so you are not paying twice for the same baseline." },
          { title: "A written question list", body: "The questions worth asking a clinic, in a form you can take into the appointment." },
        ],
      },
      {
        kind: "cta",
        title: "Work out your next step before you spend on a cycle.",
        body: "A Fertility Advisor call is 45 minutes and 76,000 RWF.",
        label: "Book your call",
        href: "/appointments/advisor-call",
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Do I need a referral for IVF?", a: "Not for a private clinic. Public routes usually require one." },
          { q: "How many cycles might I need?", a: "It varies with age, ovarian reserve and the reason for treatment. A clinic should tell you what is realistic for your case rather than a general average." },
          { q: "Can I do tests before choosing a clinic?", a: "Yes. Having your results first means every clinic is quoting against the same information." },
        ],
      },
    ],
  },

  "egg-freezing": {
    h1: "Egg freezing with FertiTerra",
    intro:
      "Egg freezing lets you store eggs while they are younger, so you have the option to use them later. This is what the process involves, what it costs, and how to decide whether it is worth it for you.",
    heroCta: { label: "Book a consultation", href: BOOK },
    sections: [
      {
        kind: "prose",
        title: "What is egg freezing?",
        body: "Egg freezing, or oocyte cryopreservation, means collecting eggs from your ovaries, freezing them, and storing them. The eggs can be thawed later, fertilised, and transferred as an embryo. The quality of an egg is tied to the age at which it was frozen, which is why timing matters more than the number of eggs alone.",
      },
      {
        kind: "cards",
        title: "Why do people freeze their eggs?",
        intro: "The reasons are personal, and most people have more than one.",
        items: [
          { title: "Not ready yet", body: "You want children, but not in the next few years, and you want to protect the option." },
          { title: "No partner right now", body: "You do not want your timeline decided by someone else's." },
          { title: "Medical treatment ahead", body: "Some treatments, including certain cancer therapies, affect fertility. Freezing before them protects the option." },
          { title: "A family history of early menopause", body: "Where ovarian reserve is likely to fall sooner, freezing earlier can matter." },
        ],
      },
      {
        kind: "steps",
        title: "How to freeze your eggs with FertiTerra",
        intro: "From first conversation to stored eggs usually takes six to eight weeks.",
        items: [
          { title: "Consultation", body: "A clinician reviews your history and explains what the process involves, including the parts people find hardest." },
          { title: "Baseline tests", body: "Hormone tests and a scan to measure ovarian reserve, which tells you what is realistic." },
          { title: "The decision", body: "You get the numbers and the costs in writing before you commit to anything." },
          { title: "Stimulation", body: "Daily medication for around ten to twelve days, with scans to track how the follicles are growing." },
          { title: "Collection", body: "A short procedure under sedation to collect the eggs." },
          { title: "Freezing and storage", body: "Mature eggs are frozen and stored. You are told how many were stored and what that means." },
        ],
      },
      {
        kind: "prose",
        title: "Is egg freezing right for me?",
        body: "Freezing is a way to protect an option, not a guarantee. The honest answer depends on your age, your ovarian reserve and what you would do differently if the numbers were low.",
        bullets: [
          "You are in your twenties or early thirties and want children later",
          "You have a medical treatment ahead that could affect fertility",
          "You have a family history of early menopause",
          "You want to know your ovarian reserve before deciding anything",
          "You have been told your reserve is low and want to act quickly",
        ],
      },
      {
        kind: "cards",
        title: "Why FertiTerra?",
        items: [
          { title: "Numbers before sales", body: "You get your reserve figures and the full cost in writing before you are asked to commit." },
          { title: "Clinicians, not call handlers", body: "Your consultation is with someone who does this work, and who will tell you when freezing is not worth it." },
          { title: "One plan, written down", body: "What happens now, what it costs, and what happens if you use the eggs years later." },
        ],
      },
      {
        kind: "price",
        title: "What egg freezing costs",
        body: "Prices are set out before you start, so there is no surprise at the point of collection.",
        items: [
          { label: "Pre-treatment tests and referral package", value: "775,000 RWF" },
          { label: "Complete package, including referral", value: "815,000 RWF" },
          { label: "Annual storage", value: "580,000 to 970,000 RWF per year" },
        ],
        note: "The freezing cycle itself is quoted by the clinic after your baseline tests. The figures above are our pre-treatment package and storage, converted from Hertility at 1 GBP = 1,941 RWF.",
      },
      {
        kind: "cta",
        title: "Find out where you stand before you decide.",
        body: "A consultation covers your reserve, the realistic outcome and the full cost.",
        label: "Book your consultation",
        href: BOOK,
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Does freezing guarantee a baby later?", a: "No. It protects the option. The chance of a live birth depends on your age when you freeze and how many mature eggs are stored." },
          { q: "How long can eggs stay frozen?", a: "Eggs can be stored for years without deterioration in storage. The limit is set by the clinic and by your own plans." },
          { q: "Does it hurt?", a: "The stimulation involves daily injections, which most people manage. Collection is done under sedation." },
          { q: "What happens if I do not use them?", a: "You decide whether to keep storing, donate, or discard. Nothing happens without your instruction." },
        ],
      },
    ],
  },

  "lgbtqia-family": {
    h1: "Starting an LGBTQIA+ family",
    intro:
      "Inclusive, affirming fertility care for same-sex couples and solo parents. Your route to a family may involve a donor, a surrogate, or a shared cycle, and the first step is knowing your own fertility.",
    heroCta: { label: "Talk to a Fertility Advisor", href: "/appointments/advisor-call" },
    sections: [
      {
        kind: "prose",
        title: "Navigating healthcare as a same-sex couple",
        body: "Most fertility services are still built around a heterosexual couple. That means assumptions, forms that do not fit, and clinicians who have not had the conversation before. You are entitled to care that starts from your family, not from an explanation of why it is unusual.",
      },
      {
        kind: "steps",
        title: "How to conceive as a same-sex couple",
        intro: "The clinical route is well established. It follows four steps.",
        items: [
          { title: "Check both of your fertility levels", body: "Both partners test. Knowing both results changes which treatment makes sense and who carries." },
          { title: "Screen the donor sperm", body: "Donor sperm is screened for infections and inherited conditions, whether from a bank or a known donor." },
          { title: "Choose the treatment", body: "IUI, IVF or reciprocal IVF, depending on your results and who will carry the pregnancy." },
          { title: "Get the referral", body: "A clinician reviews your results and refers you to a clinic that handles donor and same-sex pathways." },
        ],
      },
      {
        kind: "cards",
        title: "Fertility treatment options",
        items: [
          { title: "IUI with donor sperm", body: "Prepared donor sperm is placed in the womb around ovulation. Often the first step where both partners' results are normal." },
          { title: "IVF with donor sperm", body: "Eggs are collected from the carrying partner, fertilised with donor sperm, and an embryo is transferred." },
          { title: "Reciprocal IVF", body: "One partner provides the eggs, the other carries the pregnancy. Both are clinically involved." },
          { title: "Surrogacy", body: "A surrogate carries the pregnancy. It involves legal steps as well as clinical ones, and needs proper advice." },
        ],
      },
      {
        kind: "prose",
        title: "Things to consider before treatment",
        bullets: [
          "Both partners' fertility results, not just the carrying partner's",
          "Whether you use a known donor or a bank, and what that means legally",
          "Who will carry, and how that decision is made together",
          "What the clinic's experience with same-sex couples actually is",
          "The legal position on parentage in your country, which is not the same as being the birth parent",
        ],
      },
      {
        kind: "cards",
        title: "Other ways to build your family",
        intro: "Clinical treatment is one route. It is not the only one, and it is not always the right one.",
        items: [
          { title: "Adoption", body: "Many agencies now work with same-sex couples and solo parents. Requirements vary by country." },
          { title: "Fostering", body: "Short and long term placements, with training and support provided." },
          { title: "Co-parenting", body: "An arrangement with someone you choose, with a written agreement about roles and decisions." },
        ],
      },
      {
        kind: "prose",
        title: "Our commitment to inclusive care",
        body: "We use the language you use for your family. Forms, records and conversations are built to fit you rather than asking you to fit them, and if we get something wrong we want to be told.",
      },
      {
        kind: "cta",
        title: "Start with your own fertility, not with an explanation.",
        body: "A Fertility Advisor call covers your options, the donor question and what a clinic will ask you.",
        label: "Book your call",
        href: "/appointments/advisor-call",
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Do both partners need testing?", a: "Yes. Both partners' results decide who carries and which treatment gives the best chance." },
          { q: "Can we use a known donor?", a: "Often, yes. Known donors need screening, and the legal position should be checked before treatment starts." },
          { q: "Is reciprocal IVF available?", a: "At clinics that offer it. A clinician can tell you whether your results make it a sensible option." },
        ],
      },
    ],
  },

  "trusted-clinics": {
    h1: "Choosing a fertility clinic you can trust",
    intro:
      "Clinics are not interchangeable. Success rates, what a cycle includes, and how clearly they explain the cost vary enormously. This is what to check before you commit.",
    heroCta: { label: "Book a call to talk it through", href: BOOK },
    sections: [
      {
        kind: "prose",
        title: "What a clinic worth trusting looks like",
        body: "The strongest signal is not the headline success rate. It is whether the clinic will talk about your specific case honestly, in writing, before you pay.",
        bullets: [
          "It publishes success rates by age group, not one overall figure",
          "It explains what is and is not included in a quoted cycle",
          "It tells you when a treatment is unlikely to help you",
          "It has a named clinician who will handle your case",
          "It is clear about what happens if a cycle fails",
          "It handles donor, surrogacy and same-sex pathways as routine, not as exceptions",
        ],
      },
      {
        kind: "cards",
        title: "Wherever you are, whatever you need",
        intro: "Different clinics specialise in different things. Match the clinic to your route.",
        items: [
          { title: "Fertility preservation", body: "Egg and embryo freezing, and preservation before medical treatment." },
          { title: "Fertility treatment", body: "IUI, IVF and ICSI, with the lab capacity those depend on." },
          { title: "Egg donation", body: "Donor programmes, with screening and matching handled properly." },
          { title: "Surrogacy", body: "Clinics that work with surrogates, with the legal side handled alongside." },
        ],
      },
      {
        kind: "prose",
        title: "Questions to ask before you pay",
        bullets: [
          "What is my predicted chance of a live birth, and based on what",
          "What exactly does this price include, and what is charged separately",
          "What are the add-ons, and what is the evidence for them in my case",
          "Who is my named clinician, and how do I reach them",
          "What happens, and what does it cost, if the first cycle does not work",
          "What is the clinic's policy on embryo storage after treatment ends",
        ],
      },
      {
        kind: "cta",
        title: "Get your results first, then choose the clinic.",
        body: "Arriving with your own results means every clinic quotes against the same information.",
        label: "Book a call",
        href: BOOK,
      },
      {
        kind: "links",
        title: "Want to learn more",
        items: [
          { title: "Thinking about IVF", href: "/treatments/ivf-support" },
          { title: "Egg freezing", href: "/treatments/egg-freezing" },
          { title: "Starting an LGBTQIA+ family", href: "/treatments/lgbtqia-family" },
        ],
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Do you refer me to a clinic?", a: "A clinician can review your results and set out which clinics handle your route, so you are choosing from a shortlist rather than a search page." },
          { q: "Can I use my FertiTerra results at another clinic?", a: "Yes. Your results are yours, and clinics accept recent test results rather than repeating them immediately." },
        ],
      },
    ],
  },
}
