"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

const offerings = [
  {
    title: "Advanced Hormone and Fertility Test",
    description:
      "A diagnostic test with clinical grade results, including a comprehensive clinically recommended Care Plan and Clinical Result Review Call.",
    href: "/test-kits/hormone-fertility",
    image: "/images/card-fertility-test.webp",
    fit: "contain",
    badge: "Most popular",
  },
  {
    title: "Fertility Advisor Call",
    description:
      "In-depth consultation with an expert Fertility Advisor, offering personalised guidance on navigating fertility services and treatment options.",
    href: "/appointments/advisor-call",
    image: "/images/card-advisor.webp",
  },
  {
    title: "Pelvic Ultrasound Scan",
    description:
      "Pelvic ultrasound scan referral at one of our partner clinics to investigate symptoms and obtain an accurate Antral Follicle Count.",
    href: "/appointments/ultrasound",
    image: "/images/card-ultrasound.webp",
  },
  {
    title: "Private Gynaecologist Consultation",
    description:
      "In-depth consultation with a Private Gynaecologist for comprehensive symptom management advice, specialist referrals, and care plans for reproductive health conditions.",
    href: "/appointments/gynaecologist",
    image: "/images/card-gynaecologist.webp",
  },
  {
    title: "Nutrition Consultation",
    description:
      "Comprehensive consultation with a Registered Nutritionist or Dietician, trained in pre-conception and pregnancy nutrition, intuitive eating, and PCOS-specific nutrition.",
    href: "/appointments/nutrition",
    image: "/images/card-nutrition.webp",
  },
  {
    title: "Menopause Specialist",
    description:
      "In-depth, personalised advice and expert guidance from menopause specialists, including detailed next steps, such as HRT prescriptions.",
    href: "/appointments/menopause-specialist",
    image: "/images/card-menopause.webp",
  },
  {
    title: "Counselling",
    description:
      "Tailored emotional support with our Counselling Service. Our trained Counsellor can help with a wide range of reproductive health-related issues, including infertility and recurrent miscarriage.",
    href: "/appointments/counselling",
    image: "/images/card-counselling.webp",
  },
  {
    title: "Egg Freezing",
    description:
      "Start your egg freezing journey with our comprehensive packages, including immediate specialist referrals to leading clinics.",
    href: "/appointments/egg-freezing",
    image: "/images/card-egg-freezing.webp",
  },
]

export function HomeMoreThanTest() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    update()
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [update])

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>(".more-card")
    const step = card ? card.offsetWidth + 14 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * step, behavior: "smooth" })
  }

  return (
    <section className="more-section" aria-labelledby="more-section-title">
      <div className="more-section__inner">
        <div className="more-section__head">
          <h2 id="more-section-title">
            We&apos;re <em>more</em> than just a test
          </h2>
          <div className="more-section__controls">
            <button type="button" aria-label="Previous" onClick={() => scrollByCard(-1)} disabled={!canPrev}>
              <ArrowLeft aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next" onClick={() => scrollByCard(1)} disabled={!canNext}>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <ul className="more-section__track" ref={trackRef}>
          {offerings.map((item) => (
            <li className="more-card" key={item.title}>
              <Link className="more-card__link" href={item.href}>
                <div className={`more-card__media${item.fit === "contain" ? " more-card__media--contain" : ""}`}>
                  <Image
                    src={item.image}
                    alt=""
                    width={640}
                    height={432}
                    sizes="(max-width: 767px) 82vw, (max-width: 1100px) 33vw, 320px"
                  />
                  {item.badge ? <span className="more-card__badge">{item.badge}</span> : null}
                </div>
                <h3 className="more-card__title">{item.title}</h3>
                <p className="more-card__text">{item.description}</p>
                <span className="more-card__more">
                  Learn more
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
