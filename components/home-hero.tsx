import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Image
        src="/images/fertiterra-hero-ovary-sperm.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="150vw"
        className="home-hero__art"
      />
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
                    fill
                    sizes="(max-width: 900px) 100vw, 640px"
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
                    fill
                    sizes="(max-width: 900px) 100vw, 640px"
                    className="home-hero__card-photo"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
