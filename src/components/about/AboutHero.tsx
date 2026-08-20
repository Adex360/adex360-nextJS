import Link from "next/link";
import { Building2, Mail, Phone, Sparkles, Users } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 px-4 pb-24 pt-14 sm:px-6 md:pt-20 lg:px-8">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#E38A19]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-8">
        <div
          data-reveal="left"
          className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl lg:col-span-3"
          style={{
            background:
              "linear-gradient(135deg, #1c1560 0%, #241d80 45%, #2f6bff 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative flex items-center gap-6 text-white/90">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Building2 className="h-10 w-10" strokeWidth={1.4} />
            </span>
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Users className="h-8 w-8" strokeWidth={1.4} />
            </span>
          </div>

          <div className="absolute bottom-0 left-0 flex overflow-hidden rounded-tr-2xl">
            <div data-reveal="up" className="bg-brand-blue px-6 py-4 text-white">
              <p data-counter="2000" data-counter-suffix="+" className="text-2xl font-extrabold">
                0
              </p>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-white/80">
                Happy Clients
              </p>
            </div>
            <div data-reveal="up" data-reveal-delay="0.1" className="bg-white px-6 py-4">
              <p data-counter="150" data-counter-suffix="+" className="text-2xl font-extrabold text-ink">
                0
              </p>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
                Active Brands
              </p>
            </div>
          </div>
        </div>

        <div
          data-reveal="right"
          className="flex flex-col justify-center rounded-3xl bg-brand-800/80 p-8 shadow-2xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-sm lg:col-span-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E38A19]/15 text-[#E38A19]">
            <Sparkles className="h-5 w-5" />
          </span>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-blue-light">
            Adex Story
          </p>
          <h1 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Your Marketing Route to Digital Success
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Meet Adex360, a leading growth company, and your marketing route to digital success.
            We&rsquo;re the creative powerhouse that delivers promising results. At Adex, our
            creative and performance marketing teams work in collaboration to devise marketing
            strategies tailored to your brand. We make sure your online presence speaks volumes!
          </p>

          <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
            <Link
              href="mailto:info@adex360.com"
              className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Mail className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-wide text-white/50">Email</span>
                info@adex360.com
              </span>
            </Link>
            <Link
              href="tel:+447405127633"
              className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Phone className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-wide text-white/50">Helpline</span>
                +44 7405 127633
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
