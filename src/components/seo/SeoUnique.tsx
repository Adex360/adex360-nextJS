import Link from "next/link";
import { BarChart3, Gauge } from "lucide-react";

export default function SeoUnique() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2"
      >
        <div data-reveal="left" className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-surface p-8">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-brand-900/10">
              <div className="relative h-20 w-20 shrink-0">
                <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="#eef1fb" strokeWidth="9" />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    fill="none"
                    stroke="#2f6bff"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 32}
                    strokeDashoffset={2 * Math.PI * 32 * 0.55}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center">
                  <Gauge className="h-7 w-7 text-brand-blue" />
                </span>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-ink">45%</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Conversion
                </p>
              </div>
            </div>

            <div className="mt-5 ml-8 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-brand-900/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E38A19]/10 text-[#C26F0B]">
                <BarChart3 className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-extrabold uppercase tracking-wide text-ink">
                  New Traffic
                </p>
                <div className="mt-2 flex h-10 items-end gap-1" aria-hidden="true">
                  {[40, 55, 45, 70, 62, 85, 100].map((h, i) => (
                    <span
                      key={i}
                      className={`w-3 rounded-t ${i === 6 ? "bg-[#E38A19]" : "bg-brand-blue/20"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

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
