import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "Cache: Why Every Marketer Should Care About Site Speed", date: "Jan 24, 2026", slug: "cache-site-speed" },
  { title: "Cache: The Hidden Cost of a Slow Website", date: "Jan 24, 2026", slug: "cache-hidden-cost" },
  {
    title: "Landing Pages, Paid Ads, and Funnels: How They Work Together",
    date: "Jul 24, 2026",
    slug: "landing-pages-paid-ads-funnels",
    featured: true,
  },
];

export default function Blog() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Recent Blog
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Our Latest Media
          </h2>
        </div>

        <div data-reveal-group="" data-stagger="0.12" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              data-reveal="up"
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`flex aspect-[4/3] items-center justify-center text-white transition-transform duration-500 group-hover:scale-105 ${
                  post.featured
                    ? "bg-gradient-to-br from-brand-orange to-brand-blue"
                    : "bg-gradient-to-br from-brand-900 to-brand-700"
                }`}
              >
                <span className="text-sm font-semibold opacity-80">Marketing Insights</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="flex items-center gap-1.5 text-xs text-muted">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <h3 className="mt-3 flex-1 text-sm font-bold leading-snug text-ink">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
