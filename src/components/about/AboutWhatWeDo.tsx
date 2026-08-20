import Link from "next/link";
import { ArrowUpRight, Megaphone, TrendingUp } from "lucide-react";

export default function AboutWhatWeDo() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          data-reveal="left"
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #eef1fb 0%, #dbe4fb 100%)",
            borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%",
          }}
        >
          <Megaphone className="h-28 w-28 text-brand-blue" strokeWidth={1.1} />
          <span className="absolute right-6 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-brand-900/10">
            <TrendingUp className="h-6 w-6 text-[#E38A19]" />
          </span>
        </div>

        <div data-reveal="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            The Adex Way &middot; What We Do
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
            Market your Brand to Latest Trends and Updates
          </h2>

          <div className="mt-6 flex items-center gap-2">
            <span className="flex items-center gap-1 text-3xl font-extrabold text-ink">
              <span data-counter="75" data-counter-suffix="%">0</span>
              <ArrowUpRight className="h-6 w-6 text-emerald-500" />
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-muted">Increased Monthly Sales</p>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            &ldquo;As your performance marketing agency, our focus is your growth and results.
            The Adex way is to help brands unlock their potential through a full funnel rapid
            experimentation and data-driven approach. With the latest social trends, algorithms,
            and marketing strategies, we bring result-oriented performance marketing, targeted
            SEO services, successful social media campaigns, and user-friendly web development.
            For a team that is as dedicated as you, we are your marketing friend!&rdquo;
          </p>

          <Link
            href="/contact-us"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
          >
            Grow With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
