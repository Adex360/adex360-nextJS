import Link from "next/link";
import PerformanceUniqueStats from "@/components/performance/PerformanceUniqueStats";

export default function PerformanceUnique() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2"
      >
        <PerformanceUniqueStats />

        <div className="text-center lg:text-left">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            What Makes Us Unique
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Maximise ROI With Performance Marketing
          </h2>
          <p data-reveal="up" className="mt-5 text-4xl font-extrabold text-ink sm:text-5xl tabular-nums">
            6.81x
          </p>
          <p data-reveal="up" className="mt-1 text-sm font-semibold text-muted">
            Record Sales in One Season
          </p>
          <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            Adex360&apos;s performance marketing services focus on real
            results, not empty impressions. From targeted PPC campaigns to
            affiliate strategies and smart retargeting, we turn clicks into
            customers. Forget wasted ad spend &mdash; we optimize every
            campaign to convert, so your budget works as hard as we do.
          </p>
          <div data-reveal="up" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Maximize Your ROI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
