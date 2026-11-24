import Image from "next/image"
import Link from "next/link"

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
          <p className="home-hero__subtitle">
            Expert fertility testing and compassionate support, shaped around you.
          </p>
          <div className="home-hero__actions">
            <Link href="/screening" className="home-hero__button home-hero__button--primary">
              Start your journey
            </Link>
            <Link href="/consultation" className="home-hero__button home-hero__button--secondary">
              Speak to an expert
            </Link>
          </div>
          <p className="home-hero__promise">
            No more waiting months for appointments. No more feeling dismissed. Get the answers and care you deserve,
            when you need them.
          </p>
        </div>
      </div>
    </section>
  )
}
