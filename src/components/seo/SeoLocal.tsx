import Link from "next/link";
import {
  BarChart3,
  Check,
  ClipboardCheck,
  FileText,
  KeyRound,
  MapPin,
  Settings2,
} from "lucide-react";

const services = [
  { icon: MapPin, eyebrow: "Local Visibility", label: "Local SEO" },
  { icon: Settings2, eyebrow: "Search Compliance", label: "Technical SEO" },
  { icon: FileText, eyebrow: "Optimized Growth", label: "On-Page SEO" },
  { icon: BarChart3, eyebrow: "ROI Boosting", label: "SEO Strategy" },
  { icon: KeyRound, eyebrow: "Targeted Reach", label: "Keyword Analysis" },
  { icon: ClipboardCheck, eyebrow: "Deep Insights", label: "SEO Audit" },
];

const benefits = [
  "Enhanced Local Visibility",
  "Google Business Optimization",
  "Competitive Edge",
];

export default function SeoLocal() {
  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16"
      >
        <div data-reveal="left" className="rounded-3xl bg-white p-3 shadow-xl shadow-brand-900/5">
          {services.map((service, i) => (
            <div key={service.label}>
              <div className="flex items-center gap-4 rounded-2xl px-5 py-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-ink">
                  <service.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted">
                    {service.eyebrow}
                  </span>
                  <span className="block truncate text-sm font-bold text-ink">
                    {service.label}
                  </span>
                </span>
              </div>
              {i < services.length - 1 && (
                <div className="mx-5 my-1.5 h-px bg-[#E3E8F5]" />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div data-reveal="up" className="mx-auto w-full max-w-sm">
            <div
              className="flex aspect-square items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #FAE3BE 0%, #F5D6A8 45%, #C7D6F7 100%)",
                borderRadius: "56% 44% 48% 52% / 46% 56% 44% 54%",
              }}
            >
              <MapPin className="h-28 w-28 text-ink/70" strokeWidth={1.2} />
            </div>
          </div>

          <div data-reveal="right" className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
              Boost Your Business with Local SEO
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted md:mx-0">
              Local SEO boosts visibility, connecting you with nearby customers
              through Google Business optimization and location-based strategies
              to beat competitors.
            </p>
            <ul className="mx-auto mt-6 max-w-xs space-y-3 md:mx-0">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-black/15 bg-white">
                    <Check className="h-3.5 w-3.5 text-ink" />
                  </span>
                  <span className="font-semibold text-ink">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:opacity-90"
              >
                Dominate Locally
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
