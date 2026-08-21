"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import logoWhite from "../../../public/images/adex-360-white-Logo.png";

const socialIcons = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/360.adex/",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adex.360/#",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76.5-.5 1.1-.9 1.76-1.15.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2m0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.34 4.27 8.66 4.27 12c0 3.34.01 3.66.06 4.71.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.71s-.01-3.66-.06-4.71c-.04-.87-.18-1.34-.3-1.65a2.74 2.74 0 0 0-.66-1.02 2.74 2.74 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8m0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3m0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7m5.35-2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0",
  },
  {
    name: "LinkedIn",
    href: "https://pk.linkedin.com/company/adex360",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V10H5.67v8.34zM7 8.75a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1M18.34 18.34v-4.6c0-2.46-1.31-3.61-3.06-3.61a2.64 2.64 0 0 0-2.39 1.31V10H10.2s.04.9 0 8.34h2.68v-4.66c0-.25.02-.5.1-.68.2-.5.66-1.02 1.44-1.02 1.02 0 1.43.78 1.43 1.92v4.44z",
  },
];

const services = [
  { label: "SEO Services", href: "/seo-services" },
  { label: "Social Media Management", href: "/social-media-management" },
  { label: "Web Development", href: "/web-development" },
  { label: "Performance Marketing", href: "/performance-marketing" },
  { label: "CRM Integration", href: "/crm-integration" },
  { label: "Shopify App Development", href: "/shopify-app-development" },
];

/**
 * Static heading on tablet/desktop (>=480px); collapsible accordion row on
 * mobile (<480px).
 */
function FooterSection({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div data-reveal="up" className="border-b border-white/10 pb-4 xs:border-none xs:pb-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-2 text-left xs:pointer-events-none xs:py-0"
      >
        <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
          {title}
        </h4>
        <ChevronDown
          className={`h-4 w-4 text-white/60 transition-transform duration-200 xs:hidden ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`${open ? "mt-3 block" : "hidden"} xs:mt-5 xs:block`}>
        {children}
      </div>
    </div>
  );
}

function ContactBlock({
  address,
  phone,
  phoneHref,
}: {
  address: ReactNode;
  phone: string;
  phoneHref: string;
}) {
  return (
    <div className="space-y-4 text-sm text-white/60">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-white">Address:</p>
        <p className="mt-1 leading-relaxed">{address}</p>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-white">Email:</p>
        <a
          href="mailto:info@adex360.com"
          className="mt-1 inline-block transition-colors hover:text-[#E38A19]"
        >
          info@adex360.com
        </a>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-white">Phone:</p>
        <a
          href={`tel:${phoneHref}`}
          className="mt-1 inline-block transition-colors hover:text-[#E38A19]"
        >
          {phone}
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white/80">
      <div
        data-reveal-group=""
        data-stagger="0.12"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-14 xs:grid-cols-2 xs:gap-10 sm:px-6 md:grid-cols-4 md:py-16 lg:px-8"
      >
        <div data-reveal="up" className="xs:col-span-2 md:col-span-1">
          <Link href="/" className="relative flex h-10 w-40 items-center">
            <Image
              src={logoWhite}
              alt="Adex360"
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Adex360 is a leading growth marketing and technology company,
            empowering businesses with innovative solutions and data-driven
            strategies. We blend creativity with technology to drive growth,
            enhance digital presence, and maximize success in the ever-evolving
            digital landscape.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-[#E38A19]"
                aria-label={icon.name}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <FooterSection title="Our Services">
          <ul className="space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-white/60 transition-colors hover:text-[#E38A19]"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterSection>

        <FooterSection title="USA">
          <ContactBlock
            address={
              <>
                70-34 69th street Floor 1,
                <br />
                Glendale, NY, 11385
              </>
            }
            phone="+447405127633"
            phoneHref="+447405127633"
          />
        </FooterSection>

        <FooterSection title="Pakistan">
          <ContactBlock
            address={
              <>
                The Vertical - 8th floor, 94-B
                <br />
                Block, Khayaban-E-Amin,
                <br />
                Pine Avenue, Lahore
              </>
            }
            phone="+92 301 8220878"
            phoneHref="+923018220878"
          />
        </FooterSection>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 pt-6 pb-16 text-xs text-white/50 sm:flex-row sm:px-6 sm:py-6 lg:px-8">
          <p>© {new Date().getFullYear()} Adex360. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about-us" className="hover:text-white">
              About Us
            </Link>
            <Link href="/portfolio" className="hover:text-white">
              Case Studies
            </Link>
            <Link href="/terms-and-privacy" className="hover:text-white">
              Terms &amp; Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
