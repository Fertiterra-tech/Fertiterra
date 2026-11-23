import Link from "next/link"
import Header from "@/components/header"

export default function BasicFertilityCheckupPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto flex max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <section className="w-full rounded-2xl border border-amber-200 bg-white p-6 shadow-sm sm:p-10" aria-labelledby="intake-title">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-amber-800">Privacy notice</p>
          <h1 id="intake-title" className="text-3xl font-semibold tracking-tight text-slate-900">
            Secure checkup intake is temporarily unavailable
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700">
            The secure storage needed for health questionnaire answers is currently unavailable. No answers will be collected, saved, or sent from this page.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Please return when the service is available. If you already submitted information, it was not stored by this form.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-rose-700 px-5 text-sm font-semibold text-white hover:bg-rose-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-700 focus-visible:ring-offset-2">
              Return to homepage
            </Link>
            <Link href="/login" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 px-5 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-700 focus-visible:ring-offset-2">
              Sign in
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
