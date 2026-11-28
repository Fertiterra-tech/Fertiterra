import type { Metadata } from "next"
import { AppointmentPage } from "@/components/ft/appointment-page"

export const metadata: Metadata = {
  title: "Skin Consultation | FertiTerra",
}

export default function Page() {
  return <AppointmentPage slug="skin" />
}
