import type { Metadata } from "next"
import { TreatmentPage } from "@/components/ft/treatment-page"

export const metadata: Metadata = {
  title: "Egg Freezing | FertiTerra",
}

export default function Page() {
  return <TreatmentPage slug="egg-freezing" />
}
