import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"
import { HeroLineStage } from "@/components/hero-line-stage"
import { HomeStickyStart } from "@/components/home-sticky-start"
import s from "./home-hero.module.css"

export function HomeHero() {
  return (
    <section className={s.hero} aria-labelledby="home-hero-title">
      <div className={s.art} aria-hidden="true">
        <HeroLineStage />
      </div>

      <div className={s.inner}>
        <div className={s.copy}>
          <h1 id="home-hero-title" className={s.title}>
            <span className={s.line}>You deserve better</span>
            <span className={s.line}>fertility care. <em>Full stop.</em></span>
          </h1>

          <div className={s.choices}>
            <p className={s.choicesLabel}>Choose where to start</p>
            <div className={s.cards}>
              <article className={`${s.card} ${s.cardTest}`}>
                <div className={s.badges}>
                  <span className={s.popular}>Most popular</span>
                  <span className={s.duration}>
                    <Clock aria-hidden="true" />8 min
                  </span>
                </div>
                <h2 className={s.cardTitle}>Advanced Hormone and Fertility Test</h2>
                <div className={s.cardPhoto}>
                  <Image
                    src="/images/fertiterra-kit-transparent.webp"
                    alt="FertiTerra at-home hormone and fertility test kit"
                    width={1207}
                    height={1098}
                    sizes="170px"
                  />
                </div>
                <Link href="/screening" className={s.primary}>
                  Start my free assessment
                </Link>
              </article>

              {/* ft-cards-v3 */}
              <Link href="/consultation" className={`${s.card} ${s.cardAdvice}`} aria-label="Need some advice? Speak to an expert">
                <h2 className={s.cardTitle} style={{ maxWidth: "none", marginTop: 0, fontSize: 18 }}>
                  Need some advice?
                </h2>
                <span className={s.adviceCta}>
                  Speak to an expert
                  <span className={s.adviceArrow} aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </span>
                <div className={s.photoWide}>
                  <Image
                    src="/images/hero-advice-call.webp"
                    alt="Video consultation with a FertiTerra fertility expert"
                    width={654}
                    height={256}
                    sizes="327px"
                  />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <HomeStickyStart />
    </section>
  )
}
