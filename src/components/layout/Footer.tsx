import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/nav";
import logoWhite from "../../../public/images/adex-360-white-Logo.png";

const socialIcons = [
  {
    name: "Facebook",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12",
  },
  {
    name: "Instagram",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76.5-.5 1.1-.9 1.76-1.15.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2m0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.26.78-.3 1.65C4.28 8.34 4.27 8.66 4.27 12c0 3.34.01 3.66.06 4.71.04.87.18 1.34.3 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.71s-.01-3.66-.06-4.71c-.04-.87-.18-1.34-.3-1.65a2.74 2.74 0 0 0-.66-1.02 2.74 2.74 0 0 0-1.02-.66c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8m0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3m0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7m5.35-2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0",
  },
  {
    name: "LinkedIn",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V10H5.67v8.34zM7 8.75a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1M18.34 18.34v-4.6c0-2.46-1.31-3.61-3.06-3.61a2.64 2.64 0 0 0-2.39 1.31V10H10.2s.04.9 0 8.34h2.68v-4.66c0-.25.02-.5.1-.68.2-.5.66-1.02 1.44-1.02 1.02 0 1.43.78 1.43 1.92v4.44z",
  },
  {
    name: "X",
    path: "M18.9 3h3.1l-6.77 7.74L23 21h-6.24l-4.89-6.4L6.24 21H3.13l7.24-8.28L2 3h6.4l4.42 5.85zm-1.09 16.17h1.72L7.28 4.73H5.43z",
  },
];

const services = navItems
  .filter((item) => item.label === "Growth Marketing" || item.label === "Web & App Development")
  .flatMap((item) => item.children ?? []);

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
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
            Adex360 is a leading growth marketing agency delivering performance
            marketing, SEO and web development strategies. We fuel brands with
            data-driven marketing and design solutions to build a strong online
            presence.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-orange"
                aria-label={icon.name}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
            Our Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="text-white/60 transition-colors hover:text-brand-orange">
                  {service.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/crm-integration" className="text-white/60 transition-colors hover:text-brand-orange">
                CRM Integration
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">USA</h4>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            1121 W New York Ave, DeLand,
            <br />
            FL 32720, USA
          </p>
          <p className="mt-4 text-sm text-white/60">+1 (407) 715-3239</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Pakistan</h4>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Block, Allama Iqbal Town,
            <br />
            Lahore, Punjab, Pakistan
          </p>
          <p className="mt-4 text-sm text-white/60">info@adex360.com</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Adex360. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about-us" className="hover:text-white">
              About Us
            </Link>
            <Link href="/case-studies" className="hover:text-white">
              Case Studies
            </Link>
            <Link href="/faqs" className="hover:text-white">
              Terms &amp; Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
