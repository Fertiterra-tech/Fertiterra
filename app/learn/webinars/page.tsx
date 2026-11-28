import type { Metadata } from "next"
import { SectionsPage } from "@/components/ft/sections-page"
import { LEARN } from "@/components/ft/learn-data"

export const metadata: Metadata = {
  title: "Webinars and Events | FertiTerra",
}

export default function Page() {
  return <SectionsPage entry={LEARN["webinars"]} />
}
