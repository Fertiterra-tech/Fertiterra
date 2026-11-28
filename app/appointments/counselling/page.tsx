import type { Metadata } from "next"
import { AppointmentPage } from "@/components/ft/appointment-page"

export const metadata: Metadata = {
  title: "Counselling | FertiTerra",
}

export default function Page() {
  return <AppointmentPage slug="counselling" />
}
