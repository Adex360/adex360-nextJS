import { ScrollText } from "lucide-react";

export default function LegalHero() {
  return (
    <section className="relative overflow-hidden bg-surface px-4 pb-10 pt-14 text-center sm:px-6 md:pt-20 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div data-reveal-group="" className="relative mx-auto max-w-2xl">
        <span
          data-reveal="scale"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue"
        >
          <ScrollText className="h-7 w-7" />
        </span>
        <p data-reveal="up" className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Legal
        </p>
        <h1 data-reveal="up" className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          Terms &amp; Privacy Policy
        </h1>
        <p data-reveal="up" className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The terms that govern your use of adex360.com and our services, and how we collect,
          use, and protect your information when you work with us.
        </p>
        <p data-reveal="up" className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-muted shadow-sm">
          Last updated: August 21, 2026
        </p>
      </div>
    </section>
  );
}
