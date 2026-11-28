import type { Metadata } from "next"
import { AppointmentPage } from "@/components/ft/appointment-page"

export const metadata: Metadata = {
  title: "Pelvic Ultrasound Scan | FertiTerra",
}

export default function Page() {
  return <AppointmentPage slug="ultrasound" />
}
