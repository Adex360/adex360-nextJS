import Link from "next/link";
import { LifeBuoy } from "lucide-react";

export default function FaqHelp() {
  return (
    <section className="overflow-hidden bg-white px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div
        data-reveal="scale"
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-14 text-center shadow-2xl shadow-brand-900/20 sm:px-10 md:py-16"
        style={{
          background: "linear-gradient(135deg, #4f3ecb 0%, #2f6bff 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
          <LifeBuoy className="h-7 w-7" />
        </span>
        <h2 className="relative mt-5 text-2xl font-extrabold text-white sm:text-3xl">
          Still need help?
        </h2>
        <p className="relative mt-2 text-sm font-semibold text-white/90 sm:text-base">
          Reach out to support 24/7 to get help
        </p>
        <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75">
          Can&rsquo;t find the answer you&rsquo;re looking for? Our team is on hand to walk you
          through anything from strategy to setup, whenever you need us.
        </p>
        <Link
          href="/contact-us"
          className="relative mt-8 inline-flex items-center justify-center rounded-full bg-brand-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
