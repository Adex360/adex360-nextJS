import { HelpCircle } from "lucide-react";

export default function FaqHero() {
  return (
    <section className="relative overflow-hidden bg-surface px-4 pb-10 pt-14 text-center sm:px-6 md:pt-20 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div data-reveal-group="" className="relative mx-auto max-w-2xl">
        <span
          data-reveal="scale"
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue"
        >
          <HelpCircle className="h-7 w-7" />
        </span>
        <p data-reveal="up" className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Frequently Asked Questions
        </p>
        <h1 data-reveal="up" className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          FAQ&rsquo;s
        </h1>
        <p data-reveal="up" className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Answers to what people ask us most about digital marketing, SEO, performance
          marketing, social media management, and web development.
        </p>
      </div>
    </section>
  );
}
