import type { Metadata } from "next"
import { SectionsPage } from "@/components/ft/sections-page"
import { WORKPLACE } from "@/components/ft/workplace-data"

export const metadata: Metadata = {
  title: "What We Do | FertiTerra",
  description: "How FertiTerra works with employers, insurers and brokers to give teams real fertility and hormone care.",
}

export default function Page() {
  return <SectionsPage entry={WORKPLACE["workplace"]} />
}
