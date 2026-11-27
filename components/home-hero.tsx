import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__art" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="home-hero__inner">
        <div className="home-hero__content">
          <h1 id="home-hero-title" className="home-hero__title">
            You deserve better fertility care. <span>Full stop.</span>
          </h1>
          <div className="home-hero__choices">
            <p className="home-hero__choices-label">Choose where to start</p>
            <div className="home-hero__cards">
              <article className="home-hero__card home-hero__card--assessment">
                <div className="home-hero__card-content">
                  <div className="home-hero__badges">
                    <span className="home-hero__popular">Most popular</span>
                    <span className="home-hero__duration"><Clock aria-hidden="true" />8 min</span>
                  </div>
                  <h2 className="home-hero__card-title">Advanced Hormone and Fertility Test</h2>
                  <Link href="/screening" className="home-hero__assessment-link">
                    Start my free assessment
                  </Link>
                </div>
                <div className="home-hero__card-image">
                  <Image
                    src="/images/hero-test-card.png"
                    alt="FertiTerra fertility test kit held in a hand"
                    width={1024}
                    height={1024}
                    sizes="(max-width: 600px) 100vw, 327px"
                    className="home-hero__card-photo"
                  />
                </div>
              </article>
              <article className="home-hero__card home-hero__card--expert">
                <div className="home-hero__card-content">
                  <h2 className="home-hero__card-title">Need some advice?</h2>
                  <Link href="/consultation" className="home-hero__expert-link">
                    Speak to an expert <span aria-hidden="true"><ArrowUpRight /></span>
                  </Link>
                </div>
                <div className="home-hero__card-image">
                  <Image
                    src="/images/hero-expert-card.png"
                    alt="FertiTerra consultation with a fertility expert"
                    width={1024}
                    height={1024}
                    sizes="(max-width: 600px) 100vw, 327px"
                    className="home-hero__card-photo"
                  />
                </div>
              </article>
            </div>
          </div>
          <div className="home-hero__mobile-art" aria-hidden="true">
            <div className="home-hero__mobile-main-art" />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}
