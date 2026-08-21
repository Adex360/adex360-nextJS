import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CaseStudyCta({
  heading = "Want results like this for your brand?",
  paragraph = "Adex360 builds data-driven strategies tailored to your market. Let's talk about what growth looks like for you.",
  ctaLabel = "Start Your Growth Story",
  ctaHref = "/contact-us",
}: {
  heading?: string;
  paragraph?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="overflow-hidden bg-white px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div
        data-reveal="scale"
        className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl px-6 py-12 text-center shadow-2xl shadow-brand-900/20 sm:px-10"
        style={{ background: "linear-gradient(135deg, #140f45 0%, #2f6bff 100%)" }}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-[#E38A19]">
          <Sparkles className="h-6 w-6" />
        </span>
        <h2 className="relative mt-5 text-xl font-extrabold text-white sm:text-2xl">{heading}</h2>
        <p className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70">
          {paragraph}
        </p>
        <Link
          href={ctaHref}
          className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-900 shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
