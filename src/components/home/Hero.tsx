import Link from "next/link";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-gradient relative -mt-20 overflow-hidden text-white">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-36 pb-20 sm:px-6 sm:pt-40 lg:grid-cols-2 lg:pt-44 lg:pb-28 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="flex items-center gap-0.5 text-brand-orange">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            Your Trusted Digital Marketing Wingman
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Best Digital Marketing Agency in{" "}
            <span className="text-brand-orange">Pakistan</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Welcome to Adex360, your 360-degree solution for all your marketing and
            web development needs. Here, we have transformed into helpful growth
            partners with a data-driven approach, tailored digital marketing, and
            performance marketing strategies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold shadow-lg shadow-brand-blue/40 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Lead The Digital Game
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square w-full rounded-[2.5rem] bg-white/5 p-6 backdrop-blur-sm">
            <div className="absolute left-6 top-10 h-16 w-16 animate-bounce rounded-2xl bg-brand-orange/90 shadow-xl" style={{ animationDuration: "3s" }} />
            <div className="absolute right-8 top-6 h-10 w-10 rounded-full bg-emerald-400 shadow-lg" />
            <div className="absolute bottom-16 left-2 h-12 w-12 rounded-full bg-brand-blue-light shadow-lg" />

            <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-orange to-brand-blue text-4xl font-extrabold shadow-2xl">
                🚀
              </div>
              <p className="text-sm font-semibold text-white/80">
                Launching Your Brand to New Heights
              </p>
              <div className="grid w-full grid-cols-2 gap-3 text-left">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-extrabold">2000+</p>
                  <p className="text-xs text-white/60">Happy Clients</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-2xl font-extrabold">75%</p>
                  <p className="text-xs text-white/60">Highest Sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
