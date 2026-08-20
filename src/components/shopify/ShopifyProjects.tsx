import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import iconUniversalProductFeed from "../../../public/images/apps/universal-product-feed.png";
import iconPushbot from "../../../public/images/apps/pushbot.png";
import iconMailbot from "../../../public/images/apps/mailbot.png";

const apps = [
  {
    name: "Universal Product Feed",
    href: "/universal-product-feed",
    tile: "bg-gradient-to-br from-teal-400 to-emerald-500",
    image: iconUniversalProductFeed,
    fit: "contain" as const,
  },
  {
    name: "PushBot",
    href: "/pushbot",
    tile: "bg-gradient-to-br from-[#F7B45C] to-[#E38A19]",
    image: iconPushbot,
    fit: "contain" as const,
  },
  {
    name: "Mailbot",
    href: "/mailbot",
    tile: "",
    image: iconMailbot,
    fit: "cover" as const,
  },
];

export default function ShopifyProjects() {
  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Previous Projects
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Apps We Developed
          </h2>
        </div>

        <div data-reveal-group="" data-stagger="0.12" data-parallax="4" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.href}
              data-reveal="up"
              className="group block overflow-hidden rounded-3xl border border-[#E4E8F3] bg-white shadow-lg shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${app.tile} transition-transform duration-500 group-hover:scale-105`}
              >
                <Image
                  src={app.image}
                  alt={`${app.name} app icon`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className={app.fit === "contain" ? "object-contain p-10" : "object-cover"}
                />
                <span className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm font-bold text-ink">{app.name}</p>
                <p className="mt-0.5 text-xs text-muted">Shopify App Development</p>
              </div>
            </Link>
          ))}
        </div>

        <div
          data-reveal="up"
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-8 shadow-lg shadow-brand-900/5 sm:flex-row sm:p-10"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-extrabold sm:text-2xl">
              <span className="text-[#E38A19]">Shopify App Development</span>
              <span className="text-brand-blue"> &mdash; Adex Proud Apps!</span>
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Curious about real results? Dive into our project page and
              discover how we&apos;ve made brands scale using custom built
              Shopify apps.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:opacity-90"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
