import type { Metadata } from "next"
import { AppointmentPage } from "@/components/ft/appointment-page"

export const metadata: Metadata = {
  title: "Nutrition Consultation | FertiTerra",
}

export default function Page() {
  return <AppointmentPage slug="nutrition" />
}
