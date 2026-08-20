import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollFx from "@/components/fx/ScrollFx";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Get in touch with Adex360 for performance marketing, SEO, web development and more. Call our hotline, email us, or send us a message — your growth partner is one step away.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Hotline",
    value: "+447405127633",
    href: "tel:+447405127633",
    tile: "bg-gradient-to-br from-violet-500/15 to-violet-500/5 text-violet-600",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "41 Bretts Mead, Luton, Bedfordshire, England LU1 5NQ",
    tile: "bg-gradient-to-br from-orange-500/15 to-orange-500/5 text-orange-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@adex360.com",
    href: "mailto:info@adex360.com",
    tile: "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 text-emerald-600",
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

            <div className="mt-10 space-y-8 sm:space-y-6">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  data-reveal="up"
                  className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4"
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${method.tile}`}
                  >
                    <method.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{method.title}</h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="mt-1 inline-block text-sm text-muted transition-colors hover:text-[#E38A19]"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {method.value}
                      </p>
                    )}
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
