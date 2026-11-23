import Link from "next/link"

export default function TrackingUnavailablePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4 py-12 text-slate-900">
      <section className="w-full max-w-xl rounded-2xl border border-amber-300 bg-white p-6 shadow-sm sm:p-8" role="status">
        <p className="text-sm font-medium text-amber-800">Privacy notice</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Cycle tracking is temporarily unavailable</h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          The secure health-data service is offline. This page will not collect or save cycle, symptom, or medication
          details, and no fertility predictions are being generated.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-flex rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
        >
          Return to dashboard
        </Link>
      </section>
    </main>
  )
}
