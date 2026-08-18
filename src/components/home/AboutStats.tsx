import Link from "next/link";
import { PieChart, Users } from "lucide-react";

export default function AboutStats() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2"
      >
        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
          <div
            data-reveal="left"
            className="col-span-2 flex items-center gap-4 rounded-3xl bg-white p-6 shadow-2xl shadow-brand-900/10 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
              <PieChart className="h-8 w-8" />
            </div>
            <div>
              <p
                data-counter="75"
                data-counter-suffix="%"
                className="text-3xl font-extrabold text-ink"
              >
                75%
              </p>
              <p className="text-sm text-muted">
                Of Brands Experienced Highest Monthly Sales
              </p>
            </div>
          </div>
          <div
            data-reveal="left"
            data-reveal-delay="0.1"
            className="col-span-2 flex items-center gap-4 rounded-3xl bg-brand-900 p-6 text-white shadow-2xl shadow-brand-900/20 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-orange">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <p
                data-counter="2000"
                data-counter-suffix="+"
                className="text-3xl font-extrabold"
              >
                2000+
              </p>
              <p className="text-sm text-white/70">Happy Clients</p>
            </div>
          </div>
        </div>

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
