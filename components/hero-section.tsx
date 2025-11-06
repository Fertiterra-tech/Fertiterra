import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50 py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your Fertility Journey <span className="text-rose-500">Starts Here</span>
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              Comprehensive fertility testing, personalized treatment plans, and expert care—all from the comfort of
              your home.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700"
              >
                <Link href="/test-kits">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/consultation">Book Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <Image
              src="/images/woman-with-test-kit.png"
              alt="Woman with FertiTerra test kit"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#f9a8d4_1px,transparent_1px)] opacity-25 [background-size:16px_16px]"></div>
    </section>
  )
}
