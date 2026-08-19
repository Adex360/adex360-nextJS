"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";

export default function SeoScoreCta() {
  const [sent, setSent] = useState(false);

  return (
    <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal="scale"
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-700 to-brand-blue px-6 py-12 text-center text-white shadow-2xl shadow-brand-900/30 sm:px-10 md:py-16"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <Rocket
          className="pointer-events-none absolute right-6 top-6 h-12 w-12 rotate-45 text-white/25 sm:right-10 sm:h-16 sm:w-16"
          strokeWidth={1.2}
        />

        <h2 className="mx-auto max-w-xl text-2xl font-extrabold sm:text-3xl">
          Check Your Website&apos;s SEO Score{" "}
          <span className="text-[#F7B45C]">For Free!</span>
        </h2>

        {sent ? (
          <p className="mx-auto mt-8 max-w-md rounded-2xl bg-white/10 px-6 py-4 text-sm font-semibold">
            Thanks! We&apos;ll email your free SEO score report shortly.
          </p>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO (Phase 5): wire to the contact/email API route.
              setSent(true);
            }}
          >
            <input
              type="url"
              required
              placeholder="Web URL"
              aria-label="Website URL"
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-[#F7B45C]/60"
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              aria-label="Email address"
              className="w-full rounded-xl border border-white/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-[#F7B45C]/60"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-[#E38A19] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C26F0B]"
            >
              Check
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
