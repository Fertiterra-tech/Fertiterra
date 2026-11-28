import type { ContentEntry } from "./section-types"

const BOOK = "/contact"
const TEST = "/test-kits"

export type SymptomKey =
  | "fatigue-low-energy"
  | "mood-mental-health"
  | "skin-hair-changes"
  | "painful-irregular-cycles"
  | "pcos"
  | "endometriosis"
  | "fibroids"
  | "pms-pmdd"

const TESTED = {
  kind: "cta" as const,
  title: "Symptoms are information. Tests are how you read them.",
  body: "A hormone and fertility test shows what your levels are actually doing, instead of guessing from how you feel.",
  label: "See the test",
  href: TEST,
}

export const SYMPTOMS: Record<SymptomKey, ContentEntry> = {
  "fatigue-low-energy": {
    h1: "Fatigue and low energy",
    intro:
      "Tired all the time is not a personality trait. Persistent fatigue has physical causes, and hormone problems are among the most common in women.",
    sections: [
      {
        kind: "prose",
        title: "What does persistent fatigue look like?",
        body: "Everyone has tired days. What matters is the pattern: waking up unrefreshed, energy falling at the same point each day, or needing caffeine to function. When that lasts weeks rather than days, it is worth looking at the cause rather than pushing through.",
      },
      {
        kind: "cards",
        title: "Common symptoms that come with it",
        items: [
          { title: "Waking unrefreshed", body: "Sleeping seven or eight hours and still feeling like you have not slept." },
          { title: "Afternoon crashes", body: "Energy dropping sharply after lunch, most days." },
          { title: "Brain fog", body: "Poor concentration and slower recall than usual." },
          { title: "Low motivation", body: "Tasks that used to be easy feeling heavy." },
        ],
      },
      {
        kind: "prose",
        title: "What can cause it",
        body: "Fatigue is a symptom, not a diagnosis. These are the causes worth ruling out first.",
        bullets: [
          "Thyroid problems, particularly an underactive thyroid",
          "Low iron or ferritin, common with heavy periods",
          "Hormonal changes around the cycle, after pregnancy, or in perimenopause",
          "Insulin resistance and blood sugar swings",
          "Poor sleep quality, including sleep disrupted by night sweats",
          "Stress and low mood, which affect energy directly",
        ],
      },
      {
        kind: "prose",
        title: "When to get tested",
        bullets: [
          "Fatigue has lasted more than a few weeks",
          "You also have heavy, irregular or painful periods",
          "You have noticed weight, skin or hair changes alongside it",
          "You are in your late thirties or forties and other symptoms have appeared",
          "You have been told your bloods are normal but nothing has changed",
        ],
      },
      TESTED,
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Can hormones really cause fatigue?", a: "Yes. Thyroid, iron and sex hormones all affect energy directly, which is why they are checked together rather than one at a time." },
          { q: "What if my bloods were normal?", a: "Ask which tests were run. Full thyroid and ferritin are often not included in a standard panel." },
          { q: "Should I test on a particular day?", a: "Yes. Some hormones are read against your cycle day, and the instructions with your test tell you when to take it." },
        ],
      },
    ],
  },

  "mood-mental-health": {
    h1: "Mood and mental health",
    intro:
      "Mood that shifts with your cycle, or drops for no clear reason, is often treated as something to manage rather than something to investigate. Hormones are part of the picture.",
    sections: [
      {
        kind: "prose",
        title: "When mood is hormonal",
        body: "The clue is timing. If low mood, irritability or anxiety arrives in the same phase of your cycle each month and lifts once your period starts, the cycle is part of the mechanism. If it is constant, that is a different picture and deserves its own assessment.",
      },
      {
        kind: "cards",
        title: "Common patterns",
        items: [
          { title: "Pre-menstrual low mood", body: "Anxiety or irritability building in the week before your period, then lifting." },
          { title: "Flat through the month", body: "Low mood that is not tied to your cycle and does not lift." },
          { title: "Anxiety around ovulation", body: "Restlessness or panic that peaks mid-cycle." },
          { title: "Mood changes in perimenopause", body: "Irritability and low mood appearing alongside sleep and cycle changes." },
        ],
      },
      {
        kind: "prose",
        title: "What can drive it",
        bullets: [
          "Cyclical hormone shifts, particularly in the luteal phase",
          "Perimenopause, where oestrogen fluctuates rather than simply falling",
          "Thyroid problems, which mimic low mood and anxiety",
          "PMDD, a severe form of premenstrual mood change",
          "Postnatal hormonal change",
          "Poor sleep, which amplifies everything else",
        ],
      },
      {
        kind: "prose",
        title: "When to get help",
        bullets: [
          "Mood changes follow a clear monthly pattern",
          "Symptoms are affecting work, relationships or sleep",
          "You have thoughts of harming yourself, which needs help today, not a test",
          "You have been offered antidepressants without anyone checking your hormones",
        ],
      },
      {
        kind: "cta",
        title: "If you are struggling right now, speak to someone today.",
        body: "Book a consultation if you want the hormonal side looked at properly.",
        label: "Book a consultation",
        href: BOOK,
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Can a test tell me if my mood is hormonal?", a: "It shows your levels and helps rule out thyroid and other physical causes. The pattern of your symptoms matters just as much as the numbers." },
          { q: "Is PMDD the same as PMS?", a: "No. PMDD is more severe and affects daily functioning. It needs a proper assessment rather than being put down to bad periods." },
          { q: "Will testing replace therapy?", a: "No. They answer different questions, and many people need both." },
        ],
      },
    ],
  },

  "skin-hair-changes": {
    h1: "Skin and hair changes",
    intro:
      "Acne, thinning hair and changes in skin texture are often hormonal before they are dermatological. Treating the surface alone tends to disappoint.",
    sections: [
      {
        kind: "prose",
        title: "Why skin and hair follow hormones",
        body: "Androgens affect how much oil your skin produces and how hair grows. When androgens rise, or when your follicles become more sensitive to them, the result shows on your face, chest and scalp before it shows anywhere else.",
      },
      {
        kind: "cards",
        title: "Common changes",
        items: [
          { title: "Acne along the jaw and chin", body: "The classic hormonal pattern, often worse before your period." },
          { title: "Thinning at the parting", body: "Widening parting or a thinner ponytail over months." },
          { title: "Oily skin and enlarged pores", body: "Skin that changed texture without a change in routine." },
          { title: "Facial hair growth", body: "Coarse hair on the upper lip, chin or chest." },
        ],
      },
      {
        kind: "prose",
        title: "What can drive it",
        bullets: [
          "Polycystic ovary syndrome and other causes of high androgens",
          "Insulin resistance, which raises androgen production",
          "Coming off or changing hormonal contraception",
          "Perimenopause, where oestrogen falls relative to androgens",
          "Thyroid problems, which affect hair growth and shedding",
          "Postpartum hair loss, which is common and usually temporary",
        ],
      },
      {
        kind: "prose",
        title: "When to get tested",
        bullets: [
          "Acne has not responded to topical treatment",
          "You have hair thinning alongside irregular periods",
          "You have other signs of high androgens",
          "Skin or hair changed after stopping contraception and did not settle",
          "You are losing hair in patches or rapidly",
        ],
      },
      TESTED,
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Will a test explain my acne?", a: "It shows whether androgens or insulin are contributing, which changes what treatment makes sense." },
          { q: "Is hair loss always permanent?", a: "No. Some causes, including thyroid and postpartum shedding, reverse once the cause is treated." },
          { q: "Should I see a dermatologist?", a: "A clinician can tell you whether your case needs one after looking at the hormonal picture." },
        ],
      },
    ],
  },

  "painful-irregular-cycles": {
    h1: "Painful and irregular cycles",
    intro:
      "Periods that stop you working, or that arrive unpredictably, are not something to put up with. Both have causes that can be found.",
    sections: [
      {
        kind: "prose",
        title: "What counts as irregular",
        body: "A cycle between 21 and 35 days is typical. Irregular means cycles that vary by more than a week month to month, cycles longer than 35 days, bleeding that lasts more than seven days, or bleeding between periods.",
      },
      {
        kind: "cards",
        title: "Common patterns",
        items: [
          { title: "Pain that stops your day", body: "Cramping that does not respond to painkillers, or pain during sex." },
          { title: "Heavy bleeding", body: "Changing protection hourly, or clots larger than a coin." },
          { title: "Cycles that skip", body: "Months with no period, or cycles that swing between short and long." },
          { title: "Bleeding between periods", body: "Spotting or bleeding outside your expected window." },
        ],
      },
      {
        kind: "prose",
        title: "What can cause it",
        bullets: [
          "Endometriosis, where tissue similar to the womb lining grows elsewhere",
          "Fibroids, non-cancerous growths in the womb",
          "Polycystic ovary syndrome",
          "Thyroid problems and high prolactin",
          "Perimenopause, where cycles shorten then lengthen",
          "A coil or recent change in contraception",
        ],
      },
      {
        kind: "prose",
        title: "When to get tested",
        bullets: [
          "Pain does not improve with standard painkillers",
          "Cycles are consistently outside 21 to 35 days",
          "Bleeding is heavy enough to affect your daily life",
          "You have bleeding after sex or between periods",
          "You have been trying to conceive for six months or more",
        ],
      },
      TESTED,
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Is severe period pain normal?", a: "Common, yes. Normal, no. Pain that stops your day is a reason to investigate, not to endure." },
          { q: "Can irregular cycles be fixed?", a: "Often the cause can be treated, which usually restores a regular pattern." },
          { q: "Do I need a scan as well as a test?", a: "Sometimes. A pelvic ultrasound shows fibroids and endometriomas that blood tests cannot." },
        ],
      },
    ],
  },

  pcos: {
    h1: "Polycystic ovary syndrome (PCOS)",
    intro:
      "PCOS is one of the most common hormonal conditions in women of reproductive age. It affects how your ovaries work, and it is managed rather than cured.",
    sections: [
      {
        kind: "prose",
        title: "What is PCOS?",
        body: "PCOS means your ovaries do not release an egg regularly, androgens are higher than expected, or your ovaries show many small follicles on a scan. You need two of those three for a diagnosis, and other causes must be ruled out first. The name is misleading: it is not about cysts, and it does not mean you cannot have children.",
      },
      {
        kind: "cards",
        title: "Common symptoms",
        items: [
          { title: "Irregular or missing periods", body: "Cycles longer than 35 days, or only a few periods a year." },
          { title: "Acne and facial hair", body: "Hormonal acne along the jaw, and coarse hair on the face or body." },
          { title: "Weight and blood sugar", body: "Weight that is hard to shift, and cravings driven by insulin resistance." },
          { title: "Hair thinning", body: "Thinning at the crown or parting." },
        ],
      },
      {
        kind: "prose",
        title: "What is happening underneath",
        bullets: [
          "High androgens affect oil production, hair growth and ovulation",
          "Insulin resistance makes the body produce more insulin, which raises androgens further",
          "Ovulation becomes irregular, which is why cycles stretch out",
          "The cycle of insulin and androgens is why both are addressed together",
        ],
      },
      {
        kind: "prose",
        title: "When to get tested",
        bullets: [
          "Cycles are consistently longer than 35 days",
          "You have acne or facial hair alongside irregular periods",
          "You have been trying to conceive without success",
          "You have gained weight around the middle without a change in habits",
          "You were diagnosed years ago and have never had the hormones rechecked",
        ],
      },
      TESTED,
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Can I get pregnant with PCOS?", a: "Yes. Many people with PCOS conceive, sometimes with help to restore ovulation. Irregular ovulation makes timing harder, not impossible." },
          { q: "Does PCOS go away?", a: "It is managed, not cured. Symptoms often improve with treatment and change with age." },
          { q: "Do I need an ultrasound to diagnose it?", a: "A scan helps, but a diagnosis can also be made from hormones and symptoms. Your clinician decides which applies." },
        ],
      },
    ],
  },

  endometriosis: {
    h1: "Endometriosis",
    intro:
      "Endometriosis affects roughly one in ten women. It takes an average of several years to diagnose, largely because severe period pain is treated as normal.",
    sections: [
      {
        kind: "prose",
        title: "What is endometriosis?",
        body: "Tissue similar to the lining of the womb grows outside it, commonly on the ovaries, the tissue lining the pelvis, and the bowel. It responds to your cycle, bleeding where it sits, which causes inflammation, scarring and pain.",
      },
      {
        kind: "cards",
        title: "Common symptoms",
        items: [
          { title: "Pain that stops your day", body: "Cramping that painkillers do not touch, often worsening over the years." },
          { title: "Pain during or after sex", body: "A deep pain that is frequently dismissed." },
          { title: "Pain when opening your bowels", body: "Particularly around your period." },
          { title: "Difficulty conceiving", body: "Endometriosis is found in a significant share of people investigated for infertility." },
        ],
      },
      {
        kind: "prose",
        title: "Why it is missed",
        bullets: [
          "Period pain is normalised, so the severity is never explored",
          "Symptoms overlap with IBS, so it is investigated as a gut problem",
          "A normal scan does not rule it out; it often does not show on ultrasound",
          "Diagnosis has historically needed surgery, though clinical diagnosis is increasingly used",
        ],
      },
      {
        kind: "prose",
        title: "When to get help",
        bullets: [
          "Period pain stops you working, studying or sleeping",
          "Painkillers no longer work, or you are taking them preventively",
          "You have pain during sex",
          "You have been told it is just bad periods",
          "You are trying to conceive and have not been assessed",
        ],
      },
      {
        kind: "cta",
        title: "Pain that disrupts your life deserves a proper assessment.",
        body: "A gynaecology consultation reviews your history and sets out the next step.",
        label: "Book a consultation",
        href: "/appointments/gynaecologist",
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Can endometriosis be seen on a scan?", a: "Sometimes, particularly endometriomas. A normal scan does not exclude it." },
          { q: "Does pregnancy cure it?", a: "No. Symptoms may pause during pregnancy and return afterwards." },
          { q: "Can I still have children?", a: "Most people with endometriosis can. Severity affects the route and the timing, which is why early assessment helps." },
        ],
      },
    ],
  },

  fibroids: {
    h1: "Fibroids",
    intro:
      "Fibroids are non-cancerous growths in the muscle of the womb. They are very common, and most do not need treatment, but they can cause heavy bleeding and pain.",
    sections: [
      {
        kind: "prose",
        title: "What are fibroids?",
        body: "Fibroids grow in or around the wall of the womb. They range from tiny to the size of a melon, and they can be single or numerous. They are not cancer, and they rarely become cancer. Whether they cause problems depends on size, number and position.",
      },
      {
        kind: "cards",
        title: "Common symptoms",
        items: [
          { title: "Heavy periods", body: "Bleeding that soaks protection quickly, sometimes with large clots." },
          { title: "Pressure and bloating", body: "A feeling of fullness, or needing to urinate often." },
          { title: "Pain", body: "Period pain, pain during sex, or a persistent lower back ache." },
          { title: "Fertility problems", body: "Some fibroids affect implantation or the shape of the womb cavity." },
        ],
      },
      {
        kind: "prose",
        title: "What influences them",
        bullets: [
          "Oestrogen and progesterone encourage their growth",
          "They often shrink after menopause",
          "They are more common, and tend to be more symptomatic, in Black women",
          "Being overweight increases the likelihood",
          "A family history raises your risk",
        ],
      },
      {
        kind: "prose",
        title: "When to get help",
        bullets: [
          "Periods are heavy enough to affect your daily life",
          "You have pain or pressure that has lasted months",
          "You are trying to conceive and have not been assessed",
          "You can feel a lump or your abdomen has changed shape",
          "Bleeding happens between periods or after sex",
        ],
      },
      {
        kind: "cta",
        title: "A scan is how fibroids are confirmed.",
        body: "A pelvic ultrasound shows whether fibroids are present, and where.",
        label: "Book a scan",
        href: "/appointments/ultrasound",
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Are fibroids cancer?", a: "No. They are non-cancerous growths, and the risk of one being cancerous is very low." },
          { q: "Do all fibroids need treatment?", a: "No. Many cause no symptoms and are monitored rather than treated." },
          { q: "Do they affect fertility?", a: "Some do, depending on position. A scan and a clinician's view tell you whether yours are relevant." },
        ],
      },
    ],
  },

  "pms-pmdd": {
    h1: "PMS and PMDD",
    intro:
      "Premenstrual symptoms are common. PMDD is a severe form that disrupts work and relationships, and it is frequently mistaken for ordinary PMS or for depression.",
    sections: [
      {
        kind: "prose",
        title: "PMS and PMDD are not the same",
        body: "PMS covers the familiar symptoms in the week or two before a period: bloating, breast tenderness, irritability, low mood, cravings. They are noticeable but manageable. PMDD is a recognised condition where mood symptoms are severe enough to affect daily functioning, and they lift once bleeding starts.",
      },
      {
        kind: "cards",
        title: "Common symptoms",
        items: [
          { title: "Mood that swings with the cycle", body: "Irritability, tearfulness or anger arriving on a predictable schedule." },
          { title: "Anxiety and tension", body: "A sense of dread or being on edge in the luteal phase." },
          { title: "Physical symptoms", body: "Bloating, breast tenderness, headaches, fatigue." },
          { title: "Withdrawal", body: "Avoiding people and cancelling plans in the same phase each month." },
        ],
      },
      {
        kind: "prose",
        title: "What helps the diagnosis",
        body: "PMDD is diagnosed from the pattern, not from a blood test. Tracking is the most useful thing you can bring to an appointment.",
        bullets: [
          "Track mood daily for two cycles, noting your period dates",
          "Look for symptoms that appear in the luteal phase and disappear with bleeding",
          "Note the impact on work, relationships and sleep, not just the feeling",
          "Bring any history of depression or anxiety, since the two can overlap",
        ],
      },
      {
        kind: "prose",
        title: "When to get help",
        bullets: [
          "Symptoms affect your work or relationships every cycle",
          "You have thoughts of harming yourself in the premenstrual phase",
          "You have been treated for depression that does not improve",
          "Symptoms have worsened recently",
          "You want to understand your options beyond painkillers",
        ],
      },
      {
        kind: "cta",
        title: "Two cycles of tracking is enough to see the pattern.",
        body: "A consultation can review the pattern with you and set out the options.",
        label: "Book a consultation",
        href: "/appointments/hormone-symptom-consultation",
      },
      {
        kind: "faq",
        title: "Got questions?",
        items: [
          { q: "Is PMDD a hormone imbalance?", a: "Not necessarily. It is thought to be a sensitivity to normal hormone changes, which is why standard hormone tests can look normal." },
          { q: "How is PMDD treated?", a: "Options include targeted treatment, hormonal approaches and psychological support. A clinician sets out what fits your history." },
          { q: "Can I have PMDD and depression?", a: "Yes, and the two need separating, because the treatment differs." },
        ],
      },
    ],
  },
}
