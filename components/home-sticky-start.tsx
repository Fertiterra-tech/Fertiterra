"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import s from "./home-hero.module.css"

// Pinned "Start my free assessment" bar for phones, like Hertility's.
// It stays hidden while the card's own button is on screen (so there are never two buttons
// at once), appears after that button scrolls away, and hides again past the hero.
export function HomeStickyStart() {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const hero = document.querySelector('section[aria-labelledby="home-hero-title"]')
    const own = hero?.querySelector("article a")
    if (!hero || !own) return

    const update = () => {
      const ownBox = own.getBoundingClientRect()
      const heroBox = hero.getBoundingClientRect()
      // show only when the card's own button has scrolled away but the hero is still on screen
      const ownGone = ownBox.bottom < 0
      const heroOnScreen = heroBox.bottom > 0
      setHidden(!(ownGone && heroOnScreen))
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div className={s.stickyStart} data-hidden={hidden ? "true" : "false"}>
      <Link href="/screening">Start my free assessment</Link>
    </div>
  )
}
