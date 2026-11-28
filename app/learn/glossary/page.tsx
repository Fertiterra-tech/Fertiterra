import type { Metadata } from "next"
import { SectionsPage } from "@/components/ft/sections-page"
import { LEARN } from "@/components/ft/learn-data"

export const metadata: Metadata = {
  title: "Fertility Glossary | FertiTerra",
}

export default function Page() {
  return <SectionsPage entry={LEARN["glossary"]} />
}
