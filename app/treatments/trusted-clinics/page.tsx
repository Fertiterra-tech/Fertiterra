import type { Metadata } from "next"
import { TreatmentPage } from "@/components/ft/treatment-page"

export const metadata: Metadata = {
  title: "Choosing a Fertility Clinic | FertiTerra",
}

export default function Page() {
  return <TreatmentPage slug="trusted-clinics" />
}
