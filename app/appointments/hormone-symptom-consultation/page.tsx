import type { Metadata } from "next"
import { AppointmentPage } from "@/components/ft/appointment-page"

export const metadata: Metadata = {
  title: "Hormone and Symptom Consultation | FertiTerra",
}

export default function Page() {
  return <AppointmentPage slug="hormone-symptom" />
}
