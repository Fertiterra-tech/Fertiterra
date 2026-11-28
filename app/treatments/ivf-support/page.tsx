import type { Metadata } from "next"
import { TreatmentPage } from "@/components/ft/treatment-page"

export const metadata: Metadata = {
  title: "Thinking about IVF | FertiTerra",
}

export default function Page() {
  return <TreatmentPage slug="ivf-support" />
}
