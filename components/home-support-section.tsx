"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { CSSProperties } from "react"

const journeySteps = [
  {
    id: "testing",
    title: "Testing",
    description: "Your at-home fertility test kit is delivered to your door, with support from our team if you need it.",
    hasKit: true,
  },
  {
    id: "understanding-results",
    title: "Understanding your results",
    description: "A clear, plain explanation of what your results mean, with no jargon.",
    hasKit: false,
  },
  {
    id: "speak-to-an-expert",
    title: "Speak to an expert",
    description: "Talk to one of our fertility specialists about what comes next.",
    hasKit: false,
  },
  {
    id: "care-plan",
    title: "Your care plan",
    description: "A plan built around your results, your goals and your budget.",
    hasKit: false,
  },
  {
    id: "ongoing-support",
    title: "Ongoing support",
    description: "Follow-ups and check-ins, so you are never left to work it out alone.",
    hasKit: false,
  },
]

const crossedOutLines = ["I feel dismissed", "I am just a number", "I don't feel heard"]

export function HomeSupportSection() {
  const [openStep, setOpenStep] = useState<string | null>("testing")
  const [hasEntered, setHasEntered] = useState(false)
  const strikesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = strikesRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="support-section" aria-labelledby="support-section-title">
      <div className="support-section__inner">
        <div
          className={`support-section__strikes${hasEntered ? " is-visible" : ""}`}
          ref={strikesRef}
          aria-label="I feel dismissed. I am just a number. I don't feel heard."
        >
          {crossedOutLines.map((line, index) => (
            <p className="support-strike" key={line}>
              <span className="support-strike__text">{line}</span>
              <span className="support-strike__line" aria-hidden="true" style={{ "--strike-order": index } as CSSProperties} />
            </p>
          ))}
        </div>

        <header className="support-section__header">
          <h2 id="support-section-title">
            We&apos;re here to support <em>you</em>
          </h2>
          <p>From your first test to long-term care, one team stays with you.</p>
        </header>

        <div className="support-section__journey">
          <div className="support-section__label">
            <span>Your journey at FertiTerra</span>
            <span className="support-section__label-rule" aria-hidden="true" />
          </div>

          <div className="support-accordion">
            {journeySteps.map((step) => {
              const isOpen = openStep === step.id
              const panelId = `journey-panel-${step.id}`
              const triggerId = `journey-trigger-${step.id}`

              return (
                <div className={`support-accordion__item${isOpen ? " is-open" : ""}`} key={step.id}>
                  <h3 className="support-accordion__heading">
                    <button
                      className="support-accordion__trigger"
                      type="button"
                      id={triggerId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenStep(isOpen ? null : step.id)}
                    >
                      <span className="support-accordion__dot" aria-hidden="true" />
                      <span className="support-accordion__title">{step.title}</span>
                      <span className="support-accordion__icon" aria-hidden="true">
                        <Plus className="support-accordion__plus" />
                        <Minus className="support-accordion__minus" />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="support-accordion__panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!isOpen}
                  >
                    <div className="support-accordion__panel-inner">
                      <div className="support-accordion__detail">
                        <p>{step.description}</p>
                        {step.hasKit ? (
                          <div className="support-accordion__kit">
                            <Image
                              src="/images/fertiterra-kit-transparent.webp"
                              alt="FertiTerra fertility test kit with the app, reader and test strips"
                              width={1207}
                              height={1098}
                              sizes="(max-width: 767px) 200px, 260px"
                            />
                          </div>
                        ) : (
                          <span className="support-accordion__empty" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <Link className="support-section__cta" href="/screening">
            Start my free assessment
          </Link>
        </div>
      </div>
    </section>
  )
}
