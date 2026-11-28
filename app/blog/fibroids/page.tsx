import type { Metadata } from "next"
import { SectionsPage } from "@/components/ft/sections-page"
import { SYMPTOMS } from "@/components/ft/symptom-data"

export const metadata: Metadata = {
  title: "Fibroids | FertiTerra",
}

export default function Page() {
  return <SectionsPage entry={SYMPTOMS["fibroids"]} />
}
