import Link from "next/link";
import { Rocket, Search, TrendingUp } from "lucide-react";

export default function SeoHero() {
  return (
    <section className="relative overflow-hidden bg-surface px-4 pt-10 pb-14 sm:px-6 md:pt-16 md:pb-20 lg:px-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute left-8 top-24 hidden h-6 w-6 rotate-12 border-2 border-[#E38A19]/40 lg:block" />
      <div className="pointer-events-none absolute bottom-16 left-16 hidden text-2xl font-bold text-emerald-400/60 lg:block">+</div>

      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div className="text-center lg:text-left">
          <h1
            data-reveal="up"
            className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Elevate rankings with{" "}
            <span className="text-[#E38A19] underline decoration-[#E38A19]/40 decoration-4 underline-offset-8">
              Adex360
            </span>{" "}
            SEO
          </h1>
          <p
            data-reveal="up"
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0"
          >
            We ensure higher search rankings with expert SEO services, including
            On-Page and Off-Page optimization.
          </p>
          <div data-reveal="up" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Rank #1 Today
            </Link>
          </div>
        </div>

        <div data-reveal="right" className="relative mx-auto w-full max-w-md">
          <div
            className="flex aspect-square items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #FAE3BE 0%, #F5D6A8 45%, #C7D6F7 100%)",
              borderRadius: "44% 56% 52% 48% / 52% 46% 54% 48%",
            }}
          >
            <Search className="h-28 w-28 text-ink/70" strokeWidth={1.2} />
          </div>

          <div className="absolute -left-2 top-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-brand-900/10 sm:left-0">
            <div className="relative h-14 w-14">
              <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
                <circle cx="30" cy="30" r="24" fill="none" stroke="#eef1fb" strokeWidth="7" />
                <circle
                  cx="30"
                  cy="30"
                  r="24"
                  fill="none"
                  stroke="#E38A19"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 24}
                  strokeDashoffset={2 * Math.PI * 24 * 0.25}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-ink">
                75%
              </span>
            </div>
            <span className="text-xs font-semibold text-muted">
              Organic
              <br />
              Growth
            </span>
          </div>

          <div className="absolute -right-2 bottom-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:right-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <TrendingUp className="h-4.5 w-4.5" />
            </span>
            <span className="text-xs font-bold text-ink">
              Rank #1
              <br />
              <span className="font-medium text-muted">on Google</span>
            </span>
          </div>

          <span className="absolute -top-3 right-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40">
            <Rocket className="h-5 w-5" />
          </span>
        </div>
      </div>
    </section>
  );
}
