import Link from "next/link"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import {
  Linkedin,
  Instagram,
} from "lucide-react"
import { Header } from "@/components/header"
import { HomeHero } from "@/components/home-hero"
import { HomePartnershipStrips } from "@/components/home-partnership-strips"
import { HomeSupportSection } from "@/components/home-support-section"
import { HomeMoreThanTest } from "@/components/home-more-than-test"
import { HomeClinicalTeam } from "@/components/home-clinical-team"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FertiTerra - Personalized Fertility Tests & Support",
  description:
    "Take control of your fertility journey with FertiTerra. Get at-home testing, expert consultations, and a supportive community. Serving Africa and beyond.",
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <HomePartnershipStrips />

        {/* Journey Cards Section */}
        <section className="journey-section" aria-labelledby="journey-section-title">
          <div className="journey-section__inner">
            <div className="journey-section__intro">
              <h2 id="journey-section-title">
                We&apos;re all at different stages of our <em>journey</em>
              </h2>
              <p>What&apos;s most important to you?</p>
            </div>

            <div className="journey-section__cards">
              <Link href="/appointments/menopause-specialist" className="journey-card group">
                <Image
                  src="/images/couple-fertility-journey-2.png"
                  alt="Happy couple at home - woman in red headwrap and man in gray cardigan smiling together"
                  fill
                  className="journey-card__image"
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 54vw, 700px"
                />
                <span className="journey-card__gradient" aria-hidden="true" />
                <span className="journey-card__plus" aria-hidden="true">+</span>
                <span className="journey-card__copy">
                  <span className="journey-card__title">Managing symptoms</span>
                  <span className="journey-card__description">Fatigue, irritability, anxiety, feeling cold, low mood, acne...</span>
                </span>
              </Link>

              <Link href="/plans/ttc" className="journey-card group">
                <Image
                  src="/images/couple-fertility-journey-1.png"
                  alt="Loving couple in kitchen - man embracing woman from behind, both smiling warmly"
                  fill
                  className="journey-card__image"
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 54vw, 700px"
                />
                <span className="journey-card__gradient" aria-hidden="true" />
                <span className="journey-card__plus" aria-hidden="true">+</span>
                <span className="journey-card__copy">
                  <span className="journey-card__title">Fertility</span>
                  <span className="journey-card__description">Planning for the future or actively trying to conceive</span>
                </span>
              </Link>

              <Link href="/learn/experiencing-symptoms" className="journey-card group">
                <Image
                  src="/images/couple-fertility-journey-3.png"
                  alt="Joyful couple outdoors at sunset - man giving woman piggyback ride, both laughing"
                  fill
                  className="journey-card__image"
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 54vw, 700px"
                />
                <span className="journey-card__gradient" aria-hidden="true" />
                <span className="journey-card__plus" aria-hidden="true">+</span>
                <span className="journey-card__copy">
                  <span className="journey-card__title">Perimenopause or Menopause</span>
                  <span className="journey-card__description">Menopausal or experiencing symptoms and looking for support</span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <HomeSupportSection />

        <HomeMoreThanTest />

        <HomeClinicalTeam />
      </main>

      <SiteFooter />
    </div>
  )
}
