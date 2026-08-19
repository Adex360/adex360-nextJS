import Link from "next/link";
import StatsShowcase from "./StatsShowcase";

export default function AboutStats() {
  return (
    <section className="overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2"
      >
        <StatsShowcase />

        <div data-reveal="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            A Look Into Adex360
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Top Leading Growth Marketing Agency for All Niches
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Adex360 is your one-stop growth marketing agency, driving brands to
            their full potential. That is us at the forefront of the digital world –
            developing strategies with curated research and tailored campaigns for
            each business. With a client-first approach, we understand your business
            and boost online presence with the fluff-less results.
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
          >
            Let&apos;s Make It Happen
          </Link>
        </div>
      </div>
    </section>
  );
}
