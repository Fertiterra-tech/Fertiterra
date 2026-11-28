import type { Metadata } from "next"
import { TreatmentPage } from "@/components/ft/treatment-page"

export const metadata: Metadata = {
  title: "Starting an LGBTQIA+ Family | FertiTerra",
}

export default function Page() {
  return <TreatmentPage slug="lgbtqia-family" />
}
