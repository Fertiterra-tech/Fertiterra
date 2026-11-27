export type QuestionType =
  | "multi"
  | "single"
  | "date"
  | "text"
  | "number"
  | "pair"
  | "scale"
  | "contact"

export interface Question {
  id: string
  title: string
  help?: string
  type: QuestionType
  options?: string[]
  optional?: boolean
  unit?: string
  showIf?: (a: Record<string, unknown>) => boolean
}

const picked = (a: Record<string, unknown>, id: string): string[] => {
  const v = a[id]
  return Array.isArray(v) ? (v as string[]) : typeof v === "string" ? [v] : []
}

const has = (a: Record<string, unknown>, id: string, needle: string): boolean =>
  picked(a, id).some((x) => x.toLowerCase().includes(needle))

const isMenopause = (a: Record<string, unknown>): boolean =>
  has(a, "goal", "perimenopause") || has(a, "goal", "menopausal") || has(a, "goal", "post-menopausal")

/**
 * The complete assessment. Nothing is cut. Branching means each person is
 * asked only what applies to them, so the screen count varies from about 18
 * to about 34 while the question bank stays whole.
 */
export const QUESTIONS: Question[] = [
  {
    id: "goal",
    title: "What brings you to FertiTerra?",
    help: "Pick everything that applies. This decides which hormones our doctors test and how your report is written.",
    type: "multi",
    options: [
      "I am just curious",
      "I am planning for a baby later",
      "I have symptoms I want checked",
      "I am trying to conceive now",
      "I am considering egg freezing",
      "I am considering IVF",
      "I think I am in perimenopause",
      "I am perimenopausal",
      "I am post-menopausal",
    ],
  },
  {
    id: "trying_length",
    title: "How long have you been trying to conceive?",
    help: "A year is the point where doctors usually start investigating.",
    type: "single",
    options: ["Under 6 months", "6 to 12 months", "Over a year", "I am not sure"],
    showIf: (a) => has(a, "goal", "trying to conceive"),
  },
  {
    id: "planning_timeline",
    title: "When are you planning to have babies?",
    type: "single",
    options: [
      "Within 3 months",
      "3 to 6 months",
      "6 to 12 months",
      "1 to 2 years",
      "2 to 3 years",
      "3 to 5 years",
      "More than 5 years",
      "I am not sure yet",
    ],
    showIf: (a) => has(a, "goal", "planning"),
  },
  {
    id: "contact",
    title: "Where should we send your results?",
    help: "We save your answers so you can come back and finish later. Your details are encrypted and never sold.",
    type: "contact",
  },
  {
    id: "privacy_consent",
    title: "Your data, your choice",
    help: "Two optional permissions. You can say yes to either, both or neither.",
    type: "multi",
    optional: true,
    options: [
      "You may store my anonymised data for research",
      "You may contact me about future studies",
    ],
  },
  { id: "dob", title: "What is your date of birth?", help: "Hormone ranges change with age.", type: "date" },
  {
    id: "sex_at_birth",
    title: "What sex were you assigned at birth?",
    help: "Fertility testing is different for men and women. We support both.",
    type: "single",
    options: ["Female", "Male", "Intersex", "Prefer not to say"],
  },
  {
    id: "gender_identity",
    title: "Is your gender identity the same as the sex you were assigned at birth?",
    type: "single",
    options: ["Yes", "No", "Prefer not to say"],
  },
  {
    id: "ethnicity",
    title: "What is your ethnicity?",
    help: "Some conditions are more common in certain groups, and reference ranges differ.",
    type: "single",
    options: [
      "Black African",
      "Black Caribbean",
      "Black other",
      "South Asian",
      "East Asian",
      "White",
      "Mixed",
      "Other",
      "Prefer not to say",
    ],
  },
  {
    id: "height_weight",
    title: "What is your height and weight?",
    help: "Weight affects several hormones, including those linked to ovulation.",
    type: "pair",
  },
  {
    id: "body_shape",
    title: "How would you describe your body shape?",
    type: "single",
    optional: true,
    options: ["Slim", "Average", "Curvy", "Muscular", "Prefer not to say"],
  },
  {
    id: "cycle_length",
    title: "How many days is your cycle, from the first day of one period to the first day of the next?",
    help: "A typical cycle is 21 to 35 days. Count the first day of bleeding as day one.",
    type: "number",
    unit: "days",
    showIf: (a) => !has(a, "cycle_regularity", "do not have periods"),
  },
  {
    id: "cycle_regularity",
    title: "How regular is your period?",
    type: "single",
    options: ["Regular, I can predict it", "Irregular", "I do not have periods", "I am not sure"],
  },
  {
    id: "period_flow",
    title: "How heavy is your bleeding?",
    type: "single",
    optional: true,
    options: ["Light", "Moderate", "Heavy", "Very heavy, I change protection hourly"],
  },
  {
    id: "period_frequency",
    title: "How often do you get a period?",
    type: "single",
    options: ["Every month", "Every 2 to 3 months", "Fewer than 4 times a year", "I do not get periods"],
  },
  {
    id: "last_period",
    title: "When did your last period start?",
    help: "Some hormones must be tested on a specific day of your cycle.",
    type: "date",
    optional: true,
  },
  {
    id: "period_pain",
    title: "How painful are your periods, from 0 to 10?",
    help: "0 is no pain, 10 is the worst pain you can imagine.",
    type: "scale",
  },
  {
    id: "period_description",
    title: "Which of these describe your periods?",
    type: "multi",
    optional: true,
    options: [
      "Clots",
      "Spotting between periods",
      "Bleeding after sex",
      "Pain between periods",
      "Irregular timing",
      "None of these",
    ],
  },
  {
    id: "symptoms_general",
    title: "Are you experiencing any of these?",
    help: "Pick everything that applies.",
    type: "multi",
    options: [
      "Fatigue",
      "Low mood or anxiety",
      "Sleep problems",
      "Weight change",
      "Acne",
      "Hair thinning or loss",
      "Excess hair on face or body",
      "Hot flushes",
      "Night sweats",
      "None of these",
    ],
  },
  {
    id: "symptoms_pelvic",
    title: "Any pelvic symptoms?",
    type: "multi",
    optional: true,
    options: [
      "Pelvic pain",
      "Pain during sex",
      "Bloating",
      "Pain when passing urine",
      "Heavy feeling in the pelvis",
      "None of these",
    ],
  },
  {
    id: "symptom_frequency",
    title: "How often do these symptoms affect you?",
    type: "single",
    optional: true,
    options: ["Every day", "Most days", "A few times a month", "Rarely", "Never"],
  },
  {
    id: "symptom_timing",
    title: "Do your symptoms follow your cycle?",
    type: "single",
    optional: true,
    options: [
      "Yes, they get worse before my period",
      "Yes, they get worse during my period",
      "No, they are constant",
      "I have not noticed a pattern",
    ],
  },
  {
    id: "hair_growth",
    title: "Do you have excess hair growth on any of these areas?",
    type: "multi",
    optional: true,
    options: [
      "Upper lip or chin",
      "Chest",
      "Upper back",
      "Lower back",
      "Lower abdomen",
      "Arms",
      "Legs",
      "None of these",
    ],
  },
  {
    id: "hair_loss",
    title: "Are you losing hair on your scalp?",
    type: "single",
    optional: true,
    options: ["No", "Thinning at the temples", "Thinning at the crown", "Widespread thinning"],
  },
  {
    id: "conditions",
    title: "Have you ever been diagnosed with any of these?",
    type: "multi",
    optional: true,
    options: [
      "PCOS",
      "Endometriosis",
      "Fibroids",
      "Thyroid condition",
      "Diabetes",
      "High blood pressure",
      "None of these",
      "I am not sure",
    ],
  },
  {
    id: "managing_condition",
    title: "Are you currently being treated for any of those conditions?",
    type: "single",
    optional: true,
    options: ["Yes, with medication", "Yes, with surgery", "No", "I am not sure"],
    showIf: (a) => picked(a, "conditions").some((c) => c !== "None of these" && c !== "I am not sure"),
  },
  {
    id: "sti_history",
    title: "Have you ever had a sexually transmitted infection?",
    help: "This can affect fertility, so it matters even if it was treated.",
    type: "single",
    optional: true,
    options: ["No, never", "Yes, treated", "Yes, not treated", "Prefer not to say"],
  },
  {
    id: "fertility_treatment",
    title: "Have you had fertility treatment before?",
    type: "single",
    options: ["No, never", "Yes, within the last year", "Yes, more than a year ago"],
  },
  {
    id: "menopause_symptoms",
    title: "Which menopause symptoms are you experiencing?",
    type: "multi",
    optional: true,
    options: [
      "Hot flushes",
      "Night sweats",
      "Sleep problems",
      "Low mood",
      "Brain fog",
      "Vaginal dryness",
      "Low sex drive",
      "Joint aches",
      "None of these",
    ],
    showIf: isMenopause,
  },
  {
    id: "hrt_use",
    title: "Are you using hormone replacement therapy?",
    type: "single",
    options: ["No", "Yes, tablets", "Yes, patches or gel", "Yes, another form"],
    showIf: isMenopause,
  },
  {
    id: "hrt_duration",
    title: "How long have you been using it?",
    type: "single",
    optional: true,
    options: ["Under 6 months", "6 to 12 months", "1 to 5 years", "More than 5 years"],
    showIf: (a) => isMenopause(a) && !has(a, "hrt_use", "no"),
  },
  {
    id: "blood_test_comfort",
    title: "How do you feel about a finger-prick blood test?",
    help: "Some people prefer a clinic appointment. There is no wrong answer.",
    type: "single",
    options: ["I am fine doing it at home", "I would rather have it done at a clinic", "I am not sure"],
  },
  {
    id: "consent",
    title: "Before we finish",
    help: "We will use your answers to prepare your report and contact you about your results.",
    type: "single",
    options: ["I agree to FertiTerra processing my health data for this assessment"],
  },
]

export const TOTAL_QUESTIONS = QUESTIONS.length
