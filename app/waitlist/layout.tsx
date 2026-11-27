import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join the FertiTerra app waitlist | FertiTerra",
  description:
    "The FertiTerra app is coming. Join the waitlist and we will email you the link the day it launches.",
  openGraph: {
    title: "Join the FertiTerra app waitlist",
    description: "The FertiTerra app is coming. Join the waitlist and be first to know.",
    url: "https://fertiterratechnologies.com/waitlist",
    siteName: "FertiTerra",
    type: "website",
  },
  alternates: { canonical: "https://fertiterratechnologies.com/waitlist" },
}

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return children
}
