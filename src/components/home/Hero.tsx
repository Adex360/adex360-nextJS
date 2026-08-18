import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import heroIllustration from "../../../public/images/hero-section.png";

const CLUTCH_URL =
  "https://clutch.co/profile/adex360?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo";

export default function Hero() {
  return (
    <section className="hero-gradient relative -mt-20 overflow-hidden text-white">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-36 pb-20 sm:px-6 sm:pt-40 lg:grid-cols-2 lg:pt-44 lg:pb-28 lg:px-8">
        <div>
          <a
            href={CLUTCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-60 flex-col gap-2.5 rounded-2xl bg-white px-5 py-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wide text-muted">
                Reviewed On
              </span>
              <span className="flex items-center gap-0.5 text-brand-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 32 32" className="h-5 w-5">
                  <path fill="#17313b" d="M14.5 3h4v11h-4z" />
                  <path fill="#ef4335" d="M3 14.5h11v4H3z" />
                  <path
                    fill="#ef4335"
                    d="M23 14a5 5 0 1 1-4.9 6h4a1.5 1.5 0 1 0 0-2h-4.4A5 5 0 0 1 23 14"
                  />
                  <path
                    fill="#17313b"
                    d="M9 20.5A5.5 5.5 0 1 1 9 11a5.47 5.47 0 0 1 4.33 2.12l-2.9 2.2A2 2 0 1 0 9 18.5a2 2 0 0 0 1.43-.6l2.9 2.2A5.47 5.47 0 0 1 9 20.5"
                  />
                </svg>
                <span className="text-xl font-extrabold leading-none tracking-tight text-ink">
                  Clutch
                </span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wide text-muted">
                12 Reviews
              </span>
            </div>
          </a>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-white/80">
            Your Trusted Digital Marketing Wingman
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
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

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Image
            src={heroIllustration}
            alt="Adex360 launching your brand's digital growth"
            priority
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
