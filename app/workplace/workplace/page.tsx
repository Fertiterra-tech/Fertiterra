import type { Metadata } from "next"
import { SectionsPage } from "@/components/ft/sections-page"
import { WORKPLACE } from "@/components/ft/workplace-data"

export const metadata: Metadata = {
  title: "What We Do | FertiTerra",
}

export default function Page() {
  return <SectionsPage entry={WORKPLACE["workplace"]} />
}
