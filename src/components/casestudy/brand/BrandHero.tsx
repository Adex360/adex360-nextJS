import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BackToPortfolio from "../BackToPortfolio";

export type RelatedLink = {
  brand: string;
  category: string;
  description: string;
  href: string;
};

export default function BrandHero({
  eyebrow,
  title,
  related,
}: {
  eyebrow: string;
  title: string;
  related: [RelatedLink, RelatedLink];
}) {
  return (
    <section
      className="relative overflow-hidden px-4 pb-8 pt-16 sm:px-6 md:pt-24 lg:px-8"
      style={{ background: "linear-gradient(135deg, #140f45 0%, #1c1560 45%, #241d80 100%)" }}
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#E38A19]/15 blur-3xl" />

      <div data-reveal-group="" className="relative mx-auto max-w-5xl">
        <BackToPortfolio variant="dark" />

        <p data-reveal="up" className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-blue-light">
          {eyebrow}
        </p>
        <h1 data-reveal="up" className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {title}
        </h1>

        <div
          data-reveal="up"
          data-reveal-delay="0.15"
          className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
            {related.map((r) => (
              <Link
                key={r.brand}
                href={r.href}
                className="group border-l-2 border-white/15 pl-4 transition-colors hover:border-brand-blue-light"
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Case Study</p>
                <p className="mt-1 text-sm font-bold text-white group-hover:text-brand-blue-light">{r.brand}</p>
                <p className="mt-0.5 text-xs text-white/50">{r.category}</p>
                <p className="mt-0.5 text-xs text-white/50">{r.description}</p>
              </Link>
            ))}
          </div>

          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light sm:text-sm"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
