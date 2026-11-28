export type AppointmentKey =
  | "advisor-call"
  | "hormone-symptom"
  | "ultrasound"
  | "gynaecologist"
  | "counselling"
  | "nutrition"
  | "menopause"
  | "skin"

type Entry = {
  h1: string
  subtitle: string
  badges: { label: string }[]
  bookHeading: string
  bookBody: string
  included: string[]
  card: { name: string; duration: string; description: string; price: string; note: string; cta: string; href: string }
  rightFor?: { title: string; body: string; listTitle: string; items: string[] }
  team?: { title: string; body: string; members: { name: string; credential: string; bio: string; tags: string[] }[] }
  talk: { title: string; body: string; items: { title: string; body: string }[] }
  compare?: { title: string; left: { title: string; items: string[] }; right: { title: string; items: string[] } }
  learn: { title: string; items: { title: string; href: string }[] }
  related: { name: string; body: string; href: string }[]
  faqs: { q: string; a: string }[]
  closing: string
}

const BOOK = "/contact"

export const APPOINTMENTS: Record<AppointmentKey, Entry> = {
  "advisor-call": {
    h1: "Speak to a Fertility Advisor",
    subtitle:
      "Book an online appointment with a Fertility Advisor. Get clear guidance on your fertility, from understanding your options to knowing what to do next.",
    badges: [
      { label: "Appointments in as little as 1 day" },
      { label: "Online consultations" },
      { label: "No referral required" },
      { label: "Confidential advice" },
    ],
    bookHeading: "Book a Fertility Advisor call with FertiTerra",
    bookBody:
      "Book an online appointment with a Fertility Advisor to talk confidentially about your fertility. The call is in-depth and personal, with practical guidance on the services and treatments available to you.",
    included: [
      "Guidance on navigating fertility treatments and procedures",
      "Advice on managing your symptoms",
      "Clear information on services such as IVF, IUI and egg freezing",
      "A non-judgemental space to ask anything",
    ],
    card: {
      name: "Fertility Advisor call",
      duration: "45 min",
      description:
        "In-depth, personalised advice from a Fertility Advisor who works with fertility treatments and services every day.",
      price: "76,000 RWF",
      note: "Paid securely before your appointment",
      cta: "Book your call",
      href: BOOK,
    },
    talk: {
      title: "What can I talk to a Fertility Advisor about?",
      body: "Anything related to your fertility or hormonal health. No two calls are the same, and it is entirely up to you what you discuss. These are the areas people ask about most.",
      items: [
        {
          title: "Step-by-step guidance on fertility treatments",
          body: "Not sure what egg freezing involves, or how IVF works? Your advisor walks you through each treatment and what starting it would look like.",
        },
        {
          title: "Follow-up procedures and appointments",
          body: "Your advisor can talk you through anything you have been recommended or are considering, including scans and specialist consultations.",
        },
        {
          title: "Which FertiTerra service is right for you",
          body: "If you are unsure where to start, your advisor explains each service and helps you choose the one that fits your situation.",
        },
      ],
    },
    compare: {
      title: "Should I speak to a Fertility Advisor or a doctor?",
      left: {
        title: "When to talk to a Fertility Advisor",
        items: [
          "You are thinking about fertility treatments and want more information",
          "You have questions about fertility services and clinics",
          "You want general guidance on managing hormonal symptoms",
          "You want advice on contraception",
        ],
      },
      right: {
        title: "When to talk to a doctor",
        items: [
          "You have abnormal hormone results or low ovarian reserve",
          "You have a suspected or diagnosed reproductive health condition",
          "You need a clinical treatment plan",
          "You have been trying to conceive for more than 6 months",
          "You have had recurrent miscarriages",
        ],
      },
    },
    learn: {
      title: "Want to learn more about fertility treatments and procedures",
      items: [
        { title: "Trying to conceive: where to start", href: "/learn/trying-to-conceive" },
        { title: "Planning for children later", href: "/learn/planning-future-children" },
        { title: "See what is inside a test report", href: "/sample-report" },
      ],
    },
    related: [
      {
        name: "Private Gynaecologist Consultation",
        body: "An in-depth consultation with a gynaecologist for symptom management, referrals and care plans.",
        href: "/appointments/gynaecologist",
      },
      {
        name: "Nutrition Consultation",
        body: "A consultation with a nutritionist trained in pre-conception and pregnancy nutrition.",
        href: "/appointments/nutrition",
      },
      {
        name: "Counselling",
        body: "One-to-one emotional support for anything related to fertility, including infertility and loss.",
        href: "/appointments/counselling",
      },
    ],
    faqs: [
      {
        q: "What does a Fertility Advisor do?",
        a: "A Fertility Advisor has working knowledge of fertility services and referral pathways, and of treatments such as IVF, egg freezing and IUI. They help you understand which options fit your circumstances.",
      },
      {
        q: "How much does the call cost?",
        a: "A 45-minute Fertility Advisor call is 76,000 RWF, paid before the appointment.",
      },
      {
        q: "Do I need a referral?",
        a: "No. You can book a call at a time that suits you without a referral.",
      },
      {
        q: "When should I speak to a Fertility Advisor?",
        a: "There is no right or wrong time. People book when they are considering treatment, have questions about clinics, or want to understand which service fits them.",
      },
    ],
    closing: "Not sure where to start? Talk to an advisor first.",
  },

  "hormone-symptom": {
    h1: "Hormone and Symptom Consultation",
    subtitle:
      "Book a 45-minute online consultation with a clinician trained in women's health. Get clarity on your cycle, understand what may be behind your symptoms, and know what to do next.",
    badges: [
      { label: "Appointments in as little as 1 day" },
      { label: "Online consultations from home" },
      { label: "No referral required" },
      { label: "Confidential advice" },
    ],
    bookHeading: "Book a Hormone and Symptom Consultation with FertiTerra",
    bookBody:
      "Tired of being told your symptoms are normal? Whether it is painful periods, energy crashes or mood changes you cannot explain, you deserve more than a shrug. This is where you get clarity and feel properly understood.",
    included: [
      "Guidance on your menstrual cycle and how hormones work",
      "Possible root causes of your symptoms",
      "Information on common hormonal conditions",
      "Advice on contraception options and side effects",
      "Guidance on sexual health",
      "A follow-up letter with clear next steps",
    ],
    card: {
      name: "Hormone and Symptom Consultation",
      duration: "45 min",
      description:
        "Expert guidance on your cycle, hormonal symptoms, sexual health and contraception from a clinician trained in women's health.",
      price: "76,000 RWF",
      note: "Price to confirm before launch",
      cta: "Book your consultation",
      href: BOOK,
    },
    rightFor: {
      title: "Is a Hormone and Symptom Consultation right for you?",
      body: "Compassionate, evidence-based guidance across a wide range of concerns. No guessing, just expert insight into what your body is doing.",
      listTitle: "This consultation is for you if:",
      items: [
        "You have fatigue, mood changes, irregular or painful periods and want to understand the cause",
        "You have questions about conditions such as PMOS, endometriosis, fibroids, thyroid issues or perimenopause",
        "You want to understand premenstrual symptoms or how to get a PMS or PMDD diagnosis",
        "You want guidance on heavy or irregular bleeding, spotting or discharge",
        "You want to discuss sexual health, including STIs and prevention",
        "You want to discuss contraception options, side effects, or your cycle since stopping",
      ],
    },
    talk: {
      title: "What can I talk to a clinician about?",
      body: "Bring the questions keeping you up at night. Hormones, cycle, symptoms, sexual health. Your consultation is personalised, and these are the areas the team helps with most.",
      items: [
        {
          title: "Understand your menstrual cycle",
          body: "Not sure what is normal? We walk through the phases of your cycle and explain how hormones such as FSH, LH, oestrogen and progesterone work.",
        },
        {
          title: "Understand possible reasons behind your symptoms",
          body: "From irregular cycles and fatigue to bloating and mood changes, we map your symptoms to possible hormonal causes.",
        },
        {
          title: "Find your next steps",
          body: "You leave with a clear recommendation on which test or pathway is right for you, in writing.",
        },
      ],
    },
    compare: {
      title: "Not sure which service is right for you?",
      left: {
        title: "When to book a Hormone and Symptom Consultation",
        items: [
          "Your main concern is a symptom you want explained",
          "You want to understand your cycle or contraception",
          "You want guidance on a possible hormonal condition",
        ],
      },
      right: {
        title: "When to talk to a Fertility Advisor",
        items: [
          "Your main concern is getting pregnant",
          "You want to understand IVF, IUI or egg freezing",
          "You want guidance on fertility clinics and pathways",
        ],
      },
    },
    learn: {
      title: "Want to learn more about your hormones and cycle",
      items: [
        { title: "Understand your symptoms", href: "/symptoms" },
        { title: "Knowledge centre", href: "/knowledge-centre" },
        { title: "Trying to conceive: where to start", href: "/learn/trying-to-conceive" },
      ],
    },
    related: [
      {
        name: "Fertility Advisor Call",
        body: "Guidance on navigating fertility services and treatment options.",
        href: "/appointments/advisor-call",
      },
      {
        name: "Nutrition Consultation",
        body: "Support with nutrition for hormonal symptoms and pre-conception.",
        href: "/appointments/nutrition",
      },
      {
        name: "Pelvic Ultrasound Scan",
        body: "A scan to investigate symptoms and get an accurate follicle count.",
        href: "/appointments/ultrasound",
      },
    ],
    faqs: [
      {
        q: "Who will I speak to?",
        a: "A clinician trained in women's hormonal and reproductive health. Some areas, including sexual health and contraception, are covered by specific members of the team, and booking guides you to the right person.",
      },
      {
        q: "What happens after the consultation?",
        a: "You receive a follow-up letter setting out what was discussed and the recommended next steps.",
      },
      {
        q: "Do I need a referral?",
        a: "No. You can book directly.",
      },
    ],
    closing: "Get clarity on your symptoms, from someone who takes them seriously.",
  },

  ultrasound: {
    h1: "Book a Pelvic Ultrasound Scan",
    subtitle:
      "Investigate hormonal symptoms, understand your egg count and look into possible reproductive conditions with a pelvic ultrasound scan.",
    badges: [
      { label: "Appointments in as little as 1 day" },
      { label: "Scan at a partner clinic" },
      { label: "No referral required" },
      { label: "Results explained clearly" },
    ],
    bookHeading: "Book your Pelvic Ultrasound Scan today",
    bookBody:
      "A pelvic ultrasound looks at your uterus and ovaries. It is used to investigate symptoms such as pain or irregular bleeding, to count your follicles as a measure of ovarian reserve, and to look for conditions such as fibroids or ovarian cysts.",
    included: [
      "A scan at one of our partner clinics",
      "An antral follicle count as a measure of ovarian reserve",
      "A written report of what was seen",
      "Guidance on what to do with the result",
    ],
    card: {
      name: "Pelvic ultrasound scan",
      duration: "30 min",
      description:
        "A pelvic ultrasound at a partner clinic to investigate symptoms and get an accurate antral follicle count.",
      price: "425,000 RWF",
      note: "Paid securely before your appointment",
      cta: "Book your scan",
      href: BOOK,
    },
    rightFor: {
      title: "Who can benefit from a Pelvic Ultrasound Scan?",
      body: "A scan gives a clearer picture than symptoms alone. It is commonly booked in these situations.",
      listTitle: "Consider a scan if:",
      items: [
        "You have pelvic pain or painful periods",
        "You have irregular or heavy bleeding",
        "You want to know your ovarian reserve",
        "You have been told you may have fibroids, cysts or polyps",
        "You are starting fertility treatment and need a baseline",
        "You want reassurance that everything looks as it should",
      ],
    },
    talk: {
      title: "What is a Pelvic Ultrasound Scan?",
      body: "A pelvic ultrasound uses sound waves to build a picture of your uterus and ovaries. It is quick, safe and does not use radiation.",
      items: [
        {
          title: "What the scan shows",
          body: "The size and shape of your uterus, the lining of your womb, your ovaries, and the number of small follicles in each ovary.",
        },
        {
          title: "How long it takes",
          body: "The appointment usually takes around 30 minutes, including time to talk through what the sonographer is seeing.",
        },
        {
          title: "What happens after",
          body: "You get a written report. If anything needs clinical review, we tell you what the next step is.",
        },
      ],
    },
    learn: {
      title: "Want to learn more about scans and fertility",
      items: [
        { title: "See what is inside a test report", href: "/sample-report" },
        { title: "Understand your symptoms", href: "/symptoms" },
        { title: "Knowledge centre", href: "/knowledge-centre" },
      ],
    },
    related: [
      {
        name: "Private Gynaecologist Consultation",
        body: "Have your scan reviewed by a gynaecologist and get a care plan.",
        href: "/appointments/gynaecologist",
      },
      {
        name: "Fertility Advisor Call",
        body: "Talk through what your scan means for your next steps.",
        href: "/appointments/advisor-call",
      },
      {
        name: "Hormone and Symptom Consultation",
        body: "Understand the hormonal side of your symptoms.",
        href: "/appointments/hormone-symptom-consultation",
      },
    ],
    faqs: [
      {
        q: "Is the scan painful?",
        a: "No. A pelvic ultrasound is not painful. You may feel mild pressure from the probe.",
      },
      {
        q: "Do I need to prepare?",
        a: "You may be asked to arrive with a full bladder. Your appointment confirmation sets out exactly what to do.",
      },
      {
        q: "Can the scan diagnose a condition?",
        a: "The scan shows what your uterus and ovaries look like. A diagnosis comes from a clinician reviewing the images with your history.",
      },
    ],
    closing: "Get a clear picture of what is happening inside.",
  },

  gynaecologist: {
    h1: "Book a Private Gynaecologist Consultation",
    subtitle:
      "Speak to a gynaecologist about your symptoms, have your results reviewed, and leave with a clinical plan for what happens next.",
    badges: [
      { label: "Appointments in as little as 1 day" },
      { label: "Online or in person" },
      { label: "No referral required" },
      { label: "Confidential advice" },
    ],
    bookHeading: "Book a private gynaecology consultation with FertiTerra",
    bookBody:
      "A gynaecologist is the right person when you need a diagnosis, a clinical plan, or a specialist opinion on results you already have. The consultation is unhurried and focused on your specific concern.",
    included: [
      "A full review of your history and symptoms",
      "Review of any test or scan results you bring",
      "A personalised clinical plan",
      "Guidance on further investigations or treatments",
      "A written clinical letter after the appointment",
    ],
    card: {
      name: "Private Gynaecologist Consultation",
      duration: "45 min",
      description:
        "An in-depth consultation with a gynaecologist covering symptom management, specialist referrals and care plans.",
      price: "330,000 RWF",
      note: "Paid securely before your appointment",
      cta: "Book your consultation",
      href: BOOK,
    },
    team: {
      title: "Meet our gynaecologists",
      body: "Our clinical team includes specialists in obstetrics and gynaecology, fertility and sexual and reproductive health.",
      members: [
        {
          name: "Dr Favour Ayeboua",
          credential: "Obstetrics, Gynaecology and Fertility Specialist",
          bio: "Specialist in obstetrics and gynaecology with a focus on fertility care and reproductive health.",
          tags: ["Fertility", "Gynaecology", "Reproductive health"],
        },
        {
          name: "Dr Smart Akuma",
          credential: "Obstetrics, Gynaecology and Fertility Advisor",
          bio: "Obstetrics and gynaecology specialist supporting patients through investigation and treatment planning.",
          tags: ["Gynaecology", "Fertility", "Treatment planning"],
        },
        {
          name: "Dr Christelle Giraneza",
          credential: "Doctor and Sexual and Reproductive Health Advisor",
          bio: "Doctor and sexual and reproductive health advisor, with a focus on accessible, practical guidance.",
          tags: ["Sexual health", "Reproductive health", "Contraception"],
        },
      ],
    },
    talk: {
      title: "What happens at a gynaecologist appointment",
      body: "The consultation follows a clear structure, so you know what you are getting before you book.",
      items: [
        {
          title: "A full review",
          body: "Your history, your symptoms, and any results or scans you have already had.",
        },
        {
          title: "A clinical plan",
          body: "What the gynaecologist thinks is going on, and what the sensible next steps are.",
        },
        {
          title: "A written letter",
          body: "A clinical letter after the appointment, which you can share with another doctor if you need to.",
        },
      ],
    },
    compare: {
      title: "Should I see a gynaecologist or a Fertility Advisor?",
      left: {
        title: "See a gynaecologist if",
        items: [
          "You have abnormal hormone results or low ovarian reserve",
          "You have a suspected or diagnosed condition",
          "You need a clinical treatment plan",
          "You have had recurrent miscarriages",
        ],
      },
      right: {
        title: "See a Fertility Advisor if",
        items: [
          "You want to understand fertility treatments",
          "You have questions about clinics and pathways",
          "You want general guidance on your options",
        ],
      },
    },
    learn: {
      title: "Want to learn more about reproductive health conditions",
      items: [
        { title: "Understand your symptoms", href: "/symptoms" },
        { title: "Knowledge centre", href: "/knowledge-centre" },
        { title: "Meet the clinical team", href: "/meet-the-team" },
      ],
    },
    related: [
      {
        name: "Pelvic Ultrasound Scan",
        body: "Investigate symptoms and get an accurate follicle count.",
        href: "/appointments/ultrasound",
      },
      {
        name: "Hormone and Symptom Consultation",
        body: "Start with the hormonal side of your symptoms.",
        href: "/appointments/hormone-symptom-consultation",
      },
      {
        name: "Counselling",
        body: "Emotional support alongside your clinical care.",
        href: "/appointments/counselling",
      },
    ],
    faqs: [
      {
        q: "Do I need a referral to see a gynaecologist?",
        a: "No. You can book directly.",
      },
      {
        q: "Can the gynaecologist review my existing results?",
        a: "Yes. Bring any test or scan results with you and they will be reviewed during the consultation.",
      },
      {
        q: "Will I get a written record?",
        a: "Yes. You receive a clinical letter after the appointment.",
      },
    ],
    closing: "A specialist opinion, without the wait.",
  },

  counselling: {
    h1: "Chat to a Counsellor Online",
    subtitle:
      "Talk to a counsellor about the emotional side of fertility and reproductive health, in a confidential space with someone trained for exactly this.",
    badges: [
      { label: "Appointments in as little as 1 day" },
      { label: "Online sessions" },
      { label: "No referral required" },
      { label: "Completely confidential" },
    ],
    bookHeading: "Book a counselling session with FertiTerra",
    bookBody:
      "Fertility and reproductive health problems carry an emotional weight that is easy to underestimate. Counselling gives you a place to put it down, with someone who understands the language you are speaking.",
    included: [
      "A 50-minute one-to-one session online",
      "A counsellor trained in fertility and reproductive health",
      "Space to talk about diagnosis, treatment or loss",
      "Practical help with anxiety, grief and decision-making",
    ],
    card: {
      name: "Counselling session",
      duration: "50 min",
      description:
        "One-to-one emotional support with a counsellor trained in fertility and reproductive health issues.",
      price: "165,000 RWF",
      note: "Paid securely before your session",
      cta: "Book a session",
      href: BOOK,
    },
    talk: {
      title: "What can I talk to a counsellor about?",
      body: "Counselling is a safe space to explore the emotional side of fertility and reproductive health. These are the areas people bring most often.",
      items: [
        {
          title: "Emotional support after a diagnosis",
          body: "Being told something is wrong with your body is a shock. Counselling helps you process it at your own pace.",
        },
        {
          title: "The emotional impact of treatment",
          body: "Appointments, waiting, disappointment. Treatment is demanding, and it is normal to need support through it.",
        },
        {
          title: "Miscarriage and loss",
          body: "Grief after miscarriage or termination is real and often unspoken. This is somewhere to say it out loud.",
        },
      ],
    },
    learn: {
      title: "Want to learn more about mental health and fertility",
      items: [
        { title: "Knowledge centre", href: "/knowledge-centre" },
        { title: "Community", href: "/community" },
        { title: "Struggling to conceive", href: "/learn/struggling-to-conceive" },
      ],
    },
    related: [
      {
        name: "Fertility Advisor Call",
        body: "Practical guidance on your fertility options.",
        href: "/appointments/advisor-call",
      },
      {
        name: "Private Gynaecologist Consultation",
        body: "A clinical opinion on what is happening and what to do.",
        href: "/appointments/gynaecologist",
      },
      {
        name: "Nutrition Consultation",
        body: "Support with nutrition for your fertility and wellbeing.",
        href: "/appointments/nutrition",
      },
    ],
    faqs: [
      {
        q: "Is counselling confidential?",
        a: "Yes. What you discuss stays between you and your counsellor.",
      },
      {
        q: "Do I need to be a FertiTerra patient?",
        a: "No. You can book a counselling session whether or not you have tested with us.",
      },
      {
        q: "How long is a session?",
        a: "A session lasts 50 minutes.",
      },
    ],
    closing: "You do not have to carry this on your own.",
  },

  nutrition: {
    h1: "Chat to a Nutritionist online",
    subtitle:
      "Work with a nutritionist trained in pre-conception and pregnancy nutrition, and in nutrition for hormonal conditions.",
    badges: [
      { label: "Appointments in as little as 1 day" },
      { label: "Online consultations" },
      { label: "No referral required" },
      { label: "Practical, personalised advice" },
    ],
    bookHeading: "Book an online nutrition consultation with FertiTerra",
    bookBody:
      "Nutrition affects your cycle, your energy and your fertility. A consultation gives you a plan built around your body and your life, not a generic list of foods to avoid.",
    included: [
      "A full review of your diet and current symptoms",
      "A nutrition plan you can actually follow",
      "Guidance on pre-conception and pregnancy nutrition",
      "Advice on nutrition for PMOS and hormonal conditions",
      "A written summary after the consultation",
    ],
    card: {
      name: "Nutrition consultation",
      duration: "60 min",
      description:
        "A consultation with a nutritionist trained in pre-conception, pregnancy nutrition and PMOS-specific nutrition.",
      price: "190,000 RWF",
      note: "Paid securely before your consultation",
      cta: "Book your consultation",
      href: BOOK,
    },
    talk: {
      title: "How does nutrition affect fertility?",
      body: "Diet influences hormone balance, weight, blood sugar and the quality of your cycle. These are the areas a nutritionist works on with you.",
      items: [
        {
          title: "Your cycle and hormones",
          body: "What you eat affects insulin, oestrogen and ovulation. We look at what your current diet is doing.",
        },
        {
          title: "Pre-conception nutrition",
          body: "The nutrients that matter before pregnancy, and how to get them from food you like.",
        },
        {
          title: "A plan you can keep",
          body: "Not a list of banned foods. A realistic plan that fits your budget, your kitchen and your routine.",
        },
      ],
    },
    learn: {
      title: "Want to learn more about nutrition and fertility",
      items: [
        { title: "Planning for children", href: "/learn/planning-future-children" },
        { title: "Knowledge centre", href: "/knowledge-centre" },
        { title: "Treatments", href: "/treatments" },
      ],
    },
    related: [
      {
        name: "Hormone and Symptom Consultation",
        body: "Understand the hormonal side of your symptoms.",
        href: "/appointments/hormone-symptom-consultation",
      },
      {
        name: "Fertility Advisor Call",
        body: "Guidance on your fertility options and next steps.",
        href: "/appointments/advisor-call",
      },
      {
        name: "Counselling",
        body: "Emotional support through your journey.",
        href: "/appointments/counselling",
      },
    ],
    faqs: [
      {
        q: "What happens in a nutrition consultation?",
        a: "The nutritionist reviews your diet, symptoms and goals, then sets out a plan and explains the reasoning behind it.",
      },
      {
        q: "Will I get a written plan?",
        a: "Yes. You receive a written summary of the plan after the consultation.",
      },
      {
        q: "Can nutrition help with PMOS?",
        a: "Nutrition is one of the main ways PMOS symptoms are managed, particularly around blood sugar and weight.",
      },
    ],
    closing: "Food is one of the few things you can change this week.",
  },

  menopause: {
    h1: "Speak to a Menopause Specialist",
    subtitle:
      "Get personalised advice on menopause and perimenopause from a specialist, including what your options are and what the next steps look like.",
    badges: [
      { label: "Appointments in as little as 1 day" },
      { label: "Online consultations" },
      { label: "No referral required" },
      { label: "Confidential advice" },
    ],
    bookHeading: "Book a menopause consultation with FertiTerra",
    bookBody:
      "Perimenopause and menopause affect sleep, mood, energy, skin and more. A specialist consultation gives you a proper explanation of what is happening and a clear view of your options.",
    included: [
      "A review of your symptoms and history",
      "An explanation of what stage you are likely in",
      "A discussion of treatment options, including HRT where appropriate",
      "Practical advice on lifestyle, sleep and symptom management",
      "A written summary of the plan",
    ],
    card: {
      name: "Menopause specialist consultation",
      duration: "45 min",
      description:
        "In-depth, personalised advice from a menopause specialist, including detailed next steps such as HRT where appropriate.",
      price: "190,000 RWF",
      note: "Specialist and doctor appointments are priced separately",
      cta: "Book your consultation",
      href: BOOK,
    },
    team: {
      title: "Meet our menopause team",
      body: "Our clinical team includes doctors and advisors who work on perimenopause and menopause.",
      members: [
        {
          name: "Dr Favour Ayeboua",
          credential: "Obstetrics, Gynaecology and Fertility Specialist",
          bio: "Specialist in obstetrics and gynaecology, supporting patients through perimenopause and menopause.",
          tags: ["Menopause", "Gynaecology", "Hormone health"],
        },
        {
          name: "Dr Christelle Giraneza",
          credential: "Doctor and Sexual and Reproductive Health Advisor",
          bio: "Doctor and reproductive health advisor, with a focus on practical, accessible guidance.",
          tags: ["Menopause", "Reproductive health", "Hormone health"],
        },
      ],
    },
    talk: {
      title: "What happens in your appointment?",
      body: "The consultation is structured so nothing is rushed and nothing is left vague.",
      items: [
        {
          title: "Initial appointment",
          body: "A full review of your symptoms, history and any results, followed by a discussion of what stage you are likely in.",
        },
        {
          title: "Next steps and follow-ups",
          body: "A plan, in writing, including what to try, what to expect, and when to come back.",
        },
        {
          title: "Treatment options",
          body: "Including HRT where appropriate, and the risks and benefits that apply to you specifically.",
        },
      ],
    },
    learn: {
      title: "Want to learn more about menopause symptoms",
      items: [
        { title: "Knowledge centre", href: "/knowledge-centre" },
        { title: "Understand your symptoms", href: "/symptoms" },
        { title: "Test kits", href: "/test-kits" },
      ],
    },
    related: [
      {
        name: "Hormone and Symptom Consultation",
        body: "Understand the hormonal side of your symptoms.",
        href: "/appointments/hormone-symptom-consultation",
      },
      {
        name: "Private Gynaecologist Consultation",
        body: "A specialist clinical opinion and care plan.",
        href: "/appointments/gynaecologist",
      },
      {
        name: "Nutrition Consultation",
        body: "Nutrition support for symptom management.",
        href: "/appointments/nutrition",
      },
    ],
    faqs: [
      {
        q: "Can I get HRT through this consultation?",
        a: "Where it is clinically appropriate, HRT can be discussed and prescribed as part of your care.",
      },
      {
        q: "How do I know if I am perimenopausal?",
        a: "Symptoms plus your age and history usually give the answer. The consultation is where that is worked out properly.",
      },
      {
        q: "Do I need a referral?",
        a: "No. You can book directly.",
      },
    ],
    closing: "Get a straight answer about what is happening and what to do.",
  },

  skin: {
    h1: "Skin Consultation",
    subtitle:
      "Talk to a clinician about skin and hair changes that come with hormonal shifts, and get a plan that treats the cause as well as the symptom.",
    badges: [
      { label: "Appointments in as little as 1 day" },
      { label: "Online consultations" },
      { label: "No referral required" },
      { label: "Confidential advice" },
    ],
    bookHeading: "Book a skin consultation with FertiTerra",
    bookBody:
      "Acne, thinning hair and changes in skin texture are often hormonal before they are dermatological. This consultation looks at the hormonal picture alongside the skin itself.",
    included: [
      "A review of your skin, hair and history",
      "An explanation of the likely hormonal drivers",
      "A treatment plan appropriate to your skin",
      "Guidance on what to use and what to stop",
      "A written summary after the consultation",
    ],
    card: {
      name: "Skin consultation",
      duration: "30 min",
      description:
        "A consultation on hormonal skin and hair changes, with a treatment plan built around your skin and history.",
      price: "39,000 RWF",
      note: "Longer and follow-up appointments are priced separately",
      cta: "Book your consultation",
      href: BOOK,
    },
    talk: {
      title: "What can I talk about in a skin consultation?",
      body: "Skin and hair changes are common with hormonal conditions, and they are treatable. These are the usual starting points.",
      items: [
        {
          title: "Acne and breakouts",
          body: "Where the acne sits, what triggers it, and whether the driver is hormonal.",
        },
        {
          title: "Hair thinning and loss",
          body: "Pattern hair loss often has a hormonal cause. We look at what is likely in your case.",
        },
        {
          title: "Texture and pigmentation",
          body: "Changes in skin texture or pigmentation that have appeared alongside other symptoms.",
        },
      ],
    },
    learn: {
      title: "Want to learn more about skin and hormones",
      items: [
        { title: "Understand your symptoms", href: "/symptoms" },
        { title: "Knowledge centre", href: "/knowledge-centre" },
        { title: "Test kits", href: "/test-kits" },
      ],
    },
    related: [
      {
        name: "Hormone and Symptom Consultation",
        body: "Understand the hormonal cause behind skin changes.",
        href: "/appointments/hormone-symptom-consultation",
      },
      {
        name: "Private Gynaecologist Consultation",
        body: "A specialist clinical opinion and care plan.",
        href: "/appointments/gynaecologist",
      },
      {
        name: "Menopause Consultation",
        body: "Skin changes around perimenopause and menopause.",
        href: "/appointments/menopause-specialist",
      },
    ],
    faqs: [
      {
        q: "Is this a dermatology appointment?",
        a: "It is a clinical consultation focused on hormonal skin and hair changes, with a treatment plan. If you need a dermatologist, we tell you.",
      },
      {
        q: "Will I get a prescription?",
        a: "Where it is clinically appropriate, treatment can be prescribed as part of your plan.",
      },
      {
        q: "How long does it take to see a change?",
        a: "Skin and hair respond slowly. Most plans are reviewed after a few months rather than weeks.",
      },
    ],
    closing: "Treat the cause, not just the breakout.",
  },
}
