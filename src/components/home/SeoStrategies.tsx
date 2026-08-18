import Link from "next/link";
import { Search, Code2, TrendingUp, ShoppingBag, Share2, Workflow } from "lucide-react";

const items = [
  { icon: Search, label: "SEO Services" },
  { icon: Code2, label: "Web Development" },
  { icon: TrendingUp, label: "Performance Marketing" },
  { icon: Share2, label: "Social Media" },
  { icon: Workflow, label: "CRM Integration" },
  { icon: ShoppingBag, label: "Shopify App Development" },
];

export default function SeoStrategies() {
  return (
    <section className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm shadow-brand-900/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-ink">{item.label}</span>
            </li>
          ))}
        </ul>

        <div>
          <div className="mx-auto mb-10 flex aspect-[4/3] w-full max-w-md items-center justify-center rounded-[2rem] bg-gradient-to-br from-brand-900 via-brand-700 to-brand-blue text-white shadow-2xl shadow-brand-900/20">
            <div className="text-center">
              <p className="text-5xl font-extrabold">350%</p>
              <p className="mt-2 text-sm text-white/70">Increase in Organic Traffic</p>
            </div>
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Chief Apparel &middot; 250% Growth in Traffic Score
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted">
            Engine &middot; 3.5x Record Sales in One Season
          </p>
          <h2 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">
            Grow with Proven SEO Strategies
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            We grab hold of your SEO services and drive strategic, page-level
            marketing, technical SEO and keyword research to steady, competitive
            organic growth.
          </p>
          <Link
            href="/seo-services"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
          >
            Rank Higher
          </Link>
        </div>
      </div>
    </section>
  );
}
