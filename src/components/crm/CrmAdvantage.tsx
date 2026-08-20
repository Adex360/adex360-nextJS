import Link from "next/link";
import { AlertTriangle, Check, Crown, X } from "lucide-react";

const typicalAgency = [
  "Complicated setup that needs constant fixing and endless troubleshooting.",
  "Automations so clunky, doing everything manually feels much faster.",
  "One-size-fits-all solutions that somehow never fit anyone properly.",
  "CRM that frustrates your team more than it helps them sell.",
];

const adex360 = [
  "Seamless integration that connects systems smoothly, not creates new technical nightmares.",
  "Automations that actually save time instead of adding manual work.",
  "Custom solutions built for your needs, not some generic template.",
  "CRM that improves efficiency and sales, not just sits there unused.",
];

export default function CrmAdvantage() {
  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Adex360 Advantage
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Experience Growth With Experts
          </h2>
        </div>

        <div data-reveal-group="" className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <div data-reveal="left" data-parallax="5" className="flex flex-col rounded-3xl border border-[#E4E8F3] bg-white p-7 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-ink">Typical Agency</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  Where CRM Becomes a Mess
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                <AlertTriangle className="h-5 w-5" />
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-4">
              {typicalAgency.map((item) => (
                <li key={item} data-reveal="up" className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex w-full items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-transparent hover:bg-surface sm:w-auto"
              >
                Avoid The Pitfalls
              </Link>
            </div>
          </div>

          <div data-reveal="right" data-parallax="9" className="relative rounded-3xl bg-gradient-to-br from-[#F7B45C] via-brand-blue-light to-brand-blue p-[1.5px] shadow-2xl shadow-brand-900/15">
            <span className="absolute -top-3.5 left-7 z-10 rounded-full bg-[#E38A19] px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
              Top Rated
            </span>
            <div className="flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-white p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-ink">Adex360</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    CRM Integration That Actually Works
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E38A19]/10 text-[#C26F0B]">
                  <Crown className="h-5 w-5" />
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-4">
                {adex360.map((item) => (
                  <li key={item} data-reveal="up" className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:opacity-90 sm:w-auto"
                >
                  Upgrade To Adex360
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
