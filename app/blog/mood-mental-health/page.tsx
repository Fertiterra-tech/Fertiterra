import type { Metadata } from "next"
import { SectionsPage } from "@/components/ft/sections-page"
import { SYMPTOMS } from "@/components/ft/symptom-data"

export const metadata: Metadata = {
  title: "Mood and Mental Health | FertiTerra",
}

export default function Page() {
  return <SectionsPage entry={SYMPTOMS["mood-mental-health"]} />
}
