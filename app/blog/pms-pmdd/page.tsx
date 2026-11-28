import type { Metadata } from "next"
import { SectionsPage } from "@/components/ft/sections-page"
import { SYMPTOMS } from "@/components/ft/symptom-data"

export const metadata: Metadata = {
  title: "PMS and PMDD | FertiTerra",
}

export default function Page() {
  return <SectionsPage entry={SYMPTOMS["pms-pmdd"]} />
}
