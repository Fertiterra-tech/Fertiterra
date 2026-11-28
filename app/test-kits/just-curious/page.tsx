import type { Metadata } from "next";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { TestStagePage } from "@/components/ft/test-stage-page";

export const metadata: Metadata = {
  title: "At-Home Hormone and Fertility Tests | FertiTerra",
  description:
    "A blood test, a doctor-written report and a care plan built around your stage: curiosity about your own hormones.",
};

export default function Page() {
  return (
    <>
      <Header />
      <TestStagePage stage="just-curious" />
      <SiteFooter />
    </>
  );
}
