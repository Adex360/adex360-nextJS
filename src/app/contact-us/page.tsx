import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollFx from "@/components/fx/ScrollFx";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Get in touch with Adex360 for performance marketing, SEO, web development and more. Call our hotline, email us, or send us a message — your growth partner is one step away.",
};

function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={className} aria-hidden="true">
      <rect width="60" height="36" fill="#012169" />
      <path d="M0 0 60 36M60 0 0 36" stroke="#fff" strokeWidth="7.2" />
      <path d="M0 0 60 36M60 0 0 36" stroke="#C8102E" strokeWidth="2.4" />
      <path d="M30 0V36M0 18H60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0V36M0 18H60" stroke="#C8102E" strokeWidth="7.2" />
    </svg>
  );
}

function FlagUS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={className} aria-hidden="true">
      <rect width="60" height="36" fill="#B22234" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} y={(i * 2 + 1) * (36 / 13)} width="60" height={36 / 13} fill="#fff" />
      ))}
      <rect width="26" height="19.4" fill="#3C3B6E" />
    </svg>
  );
}

function FlagPK({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={className} aria-hidden="true">
      <rect width="60" height="36" fill="#01411C" />
      <rect width="15" height="36" fill="#fff" />
      <circle cx="38" cy="18" r="9" fill="#fff" />
      <circle cx="41" cy="18" r="7.3" fill="#01411C" />
      <path d="M46 10.5 47.3 14.5 51.5 14.5 48.1 17 49.4 21 46 18.5 42.6 21 43.9 17 40.5 14.5 44.7 14.5Z" fill="#fff" />
    </svg>
  );
}

const hotlines = [
  {
    Flag: FlagGB,
    country: "UK",
    value: "+44 7405 127633",
    href: "tel:+447405127633",
  },
  {
    Flag: FlagPK,
    country: "PK",
    value: "+92 301 8220878",
    href: "tel:+923018220878",
  },
];

const offices = [
  {
    Flag: FlagGB,
    country: "United Kingdom",
    address: "41 Bretts Mead, Luton, Bedfordshire, England LU1 5NQ",
  },
  {
    Flag: FlagUS,
    country: "United States",
    address: "70-34 69th street Floor 1, Glendale, NY, 11385",
  },
  {
    Flag: FlagPK,
    country: "Pakistan",
    address: "The Vertical - 8th floor, 94-B Block, Khayaban-E-Amin, Pine Avenue, Lahore",
  },
];

export default function ContactUsPage() {
  return (
    <>
      <ScrollFx />
      <section className="overflow-hidden px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          <div data-reveal-group="" className="text-center sm:text-left">
            <h1 data-reveal="up" className="text-3xl font-extrabold text-ink sm:text-4xl">
              Contact Information
            </h1>
            <p data-reveal="up" className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted sm:mx-0 sm:text-base">
              Let&apos;s connect and turn your ideas into reality with expert
              solutions, tailored support, and a partnership built for
              success&mdash;because your vision deserves nothing less!
            </p>

            <div className="mt-10">
              <p data-reveal="up" className="text-xs font-bold uppercase tracking-widest text-muted">
                Talk To Us
              </p>

              <div data-reveal="up" className="mt-3 grid grid-cols-1 gap-3">
                {hotlines.map((hotline) => (
                  <a
                    key={hotline.country}
                    href={hotline.href}
                    className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 text-left shadow-sm shadow-brand-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-violet-500/5 text-violet-600 transition-transform duration-200 group-hover:scale-105">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">
                        <hotline.Flag className="h-3 w-4 shrink-0 rounded-[2px]" />
                        Hotline &middot; {hotline.country}
                      </p>
                      <p className="mt-0.5 break-words text-sm font-bold text-ink">{hotline.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                data-reveal="up"
                href="mailto:info@adex360.com"
                className="group mt-3 flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 text-left shadow-sm shadow-brand-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 text-emerald-600 transition-transform duration-200 group-hover:scale-105">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Email</p>
                  <p className="mt-0.5 text-sm font-bold text-ink">info@adex360.com</p>
                </div>
              </a>
            </div>

            <div data-reveal="up" className="mt-8 flex items-center gap-3">
              <span className="h-px flex-1 bg-black/10 sm:hidden" />
              <p className="shrink-0 text-xs font-bold uppercase tracking-widest text-muted">
                Our Offices
              </p>
              <span className="h-px flex-1 bg-black/10" />
            </div>

            <div className="mt-4 space-y-3">
              {offices.map((office) => (
                <div
                  key={office.country}
                  data-reveal="up"
                  className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-4 text-left shadow-sm shadow-brand-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/15 to-orange-500/5 text-orange-500 transition-transform duration-200 group-hover:scale-105">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-ink">
                      <office.Flag className="h-3.5 w-5 shrink-0 rounded-[2px]" />
                      {office.country}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-parallax="4">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
