import styles from "./hero-sperm-field.module.css"

// A single current of sperm entering from the lower left and landing on the
// ovary rim (measured at x 262-933, y 18-446 of the 951x777 artwork).
// Motion is plain CSS transforms, so nothing depends on SMIL.
type Sperm = { i: number; cls: string; scale: number }

const SPERM: Sperm[] = [
  { i: 0, cls: "far", scale: 1.05 },
  { i: 1, cls: "mid", scale: 1.54 },
  { i: 2, cls: "near", scale: 2.04 },
  { i: 3, cls: "far", scale: 1.11 },
  { i: 4, cls: "mid", scale: 1.60 },
  { i: 5, cls: "near", scale: 2.10 },
  { i: 6, cls: "far", scale: 1.17 },
  { i: 7, cls: "mid", scale: 1.66 },
  { i: 8, cls: "near", scale: 2.15 },
  { i: 9, cls: "far", scale: 1.22 },
  { i: 10, cls: "near", scale: 1.72 },
  { i: 11, cls: "near", scale: 2.21 },
  { i: 12, cls: "far", scale: 1.28 },
  { i: 13, cls: "near", scale: 1.77 },
]

const TAIL = "M-3 0 C -8 -4.8 -12 4.8 -17 0 C -22 -4.8 -26 4.8 -31 0"

export function HeroSpermField() {
  return (
    <svg
      className={styles.field}
      viewBox="180 0 771 560"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="hero-sperm-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#01BE63" stopOpacity="0.42" />
          <stop offset="60%" stopColor="#01BE63" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#01BE63" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse className={styles.aura} cx="597" cy="232" rx="330" ry="215" fill="url(#hero-sperm-aura)" />

      {SPERM.map((s) => (
        <g key={s.i} className={styles["s" + s.i] + " " + styles[s.cls]}>
          <g transform={"scale(" + s.scale + ")"}>
            <ellipse cx="0" cy="0" rx="3.4" ry="2.5" fill="currentColor" />
            <path
              className={styles.tail}
              d={TAIL}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
            />
          </g>
        </g>
      ))}
    </svg>
  )
}
