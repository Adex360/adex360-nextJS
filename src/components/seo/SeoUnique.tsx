import Link from "next/link";
import SeoUniqueStats from "@/components/seo/SeoUniqueStats";

export default function SeoUnique() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2"
      >
        <SeoUniqueStats />

        <div className="text-center lg:text-left">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            What Makes Us Unique
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Not The Only SEO Company, Just The Best!
          </h2>
          <p data-reveal="up" className="mt-5 text-4xl font-extrabold text-ink sm:text-5xl">
            <span data-counter="70" data-counter-suffix="%">70%</span>{" "}
            <span className="align-middle text-2xl text-emerald-500">&uarr;</span>
          </p>
          <p data-reveal="up" className="mt-1 text-sm font-semibold text-muted">
            Monthly Organic Traffic
          </p>
          <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            Websites thrive with consistency, and we don&apos;t believe in giving
            up. Our SEO experts develop a comprehensive SEO strategy by analyzing
            trends, reports, and audiences. There is a reason why Adex360 stands
            among the best SEO companies: we serve hundreds of SEO clients and
            provide optimization solutions to ensure a growing return on
            investment (ROI).
          </p>
          <div data-reveal="up" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
