"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ComponentType } from "react";
import {
  Briefcase,
  Building2,
  ChevronDown,
  ChevronRight,
  Code2,
  Globe,
  Headphones,
  HelpCircle,
  Home as HomeIcon,
  Mail,
  Megaphone,
  Menu,
  Newspaper,
  Phone,
  Search,
  ShoppingBag,
  Sparkles,
  ThumbsUp,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { navItems } from "@/lib/nav";
import logoDark from "../../../public/images/adex-360-Logo.png";
import logoWhite from "../../../public/images/adex-360-white-Logo.png";

const menuItems = navItems.filter((item) => item.children);

type IconType = ComponentType<{ className?: string }>;

const categoryIcons: Record<string, IconType> = {
  "Growth Marketing": TrendingUp,
  "Web & App Development": Code2,
  "Custom Solutions": Sparkles,
  Company: Building2,
};

const categoryCaptions: Record<string, string> = {
  "Growth Marketing": "Grow your brand faster",
  "Web & App Development": "Build fast, scalable products",
  "Custom Solutions": "Tailored to your workflow",
  Company: "Get to know Adex360",
};

const childIcons: Record<string, IconType> = {
  "SEO Services": Search,
  "Social Media Management": ThumbsUp,
  "Performance Marketing": Megaphone,
  "Web Development": Globe,
  "Shopify App Development": ShoppingBag,
  "CRM Integration": Users,
  "About Us": Building2,
  "FAQ's": HelpCircle,
  "Case Studies": Briefcase,
  "Marketing Insights": Newspaper,
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "border-b border-black/5 bg-white/95 shadow-sm backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative flex h-10 w-36 shrink-0 items-center">
          <Image
            src={transparent ? logoWhite : logoDark}
            alt="Adex360"
            fill
            sizes="144px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                  transparent
                    ? "text-white/90 hover:text-[#E38A19]"
                    : "text-ink hover:text-[#E38A19]"
                }`}
                aria-expanded={openMenu === item.label}
              >
                {item.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openMenu === item.label && (
                <div className="absolute left-0 top-full w-72 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-xl shadow-brand-900/10">
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group block rounded-xl px-4 py-3 transition-colors hover:bg-surface"
                      >
                        <span className="block text-sm font-semibold text-ink transition-colors group-hover:text-[#E38A19]">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="mt-0.5 block text-xs text-muted">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
          >
            Contact Us
          </Link>
        </div>

        <button
          className={`inline-flex items-center justify-center rounded-full p-2 lg:hidden ${
            transparent ? "text-white" : "text-ink"
          }`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-brand-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right-to-left drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm transform flex-col bg-white shadow-[0_0_60px_rgba(15,23,64,0.25)] transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-between overflow-hidden px-5 pb-4 pt-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand-blue/10 to-[#F7B45C]/10 blur-2xl"
          />
          <Link href="/" className="relative flex h-9 w-32 shrink-0 items-center" onClick={() => setMobileOpen(false)}>
            <Image src={logoDark} alt="Adex360" fill sizes="128px" className="object-contain object-left" />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink shadow-sm transition-all duration-200 hover:rotate-90 hover:bg-brand-blue hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5">
          <div className="flex items-center gap-2 rounded-xl border border-[#E4E8F3] bg-surface px-4 py-2.5 transition-colors duration-200 focus-within:border-brand-blue/40 focus-within:bg-white focus-within:shadow-sm focus-within:shadow-brand-blue/10">
            <Search className="h-4 w-4 shrink-0 text-muted" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-3 h-px shrink-0 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <nav className="mt-1 flex-1 overflow-y-auto px-5 pb-6 [mask-image:linear-gradient(to_bottom,black_92%,transparent)]">
          <div className="flex flex-col gap-1 py-2">
            {navItems.map((item) => {
              if (!item.children) {
                const ItemIcon = item.label === "Home" ? HomeIcon : item.label === "Contact Us" ? Headphones : HomeIcon;
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-3 rounded-2xl px-2 py-3 transition-colors duration-200 hover:bg-brand-blue/5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 text-brand-blue ring-1 ring-brand-blue/10 transition-transform duration-200 group-hover:scale-105">
                      <ItemIcon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="flex-1 text-sm font-bold text-ink">{item.label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-blue" />
                  </Link>
                );
              }

              const CategoryIcon = categoryIcons[item.label] ?? Sparkles;
              const isOpen = mobileSubmenu === item.label;

              return (
                <div key={item.label} className={`rounded-2xl transition-colors duration-200 ${isOpen ? "bg-brand-blue/[0.04]" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setMobileSubmenu((v) => (v === item.label ? null : item.label))}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-3 rounded-2xl px-2 py-3 text-left transition-colors duration-200 hover:bg-brand-blue/5"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-brand-blue to-brand-600 text-white shadow-md shadow-brand-blue/30"
                          : "bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 text-brand-blue ring-1 ring-brand-blue/10 group-hover:scale-105"
                      }`}
                    >
                      <CategoryIcon className="h-[18px] w-[18px]" />
                    </span>
                    <span className={`flex-1 text-sm font-bold transition-colors ${isOpen ? "text-brand-blue" : "text-ink"}`}>
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-brand-blue" : "text-muted"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-2 ml-1 mr-1 rounded-2xl border border-black/[0.04] bg-surface/70 p-2.5 shadow-inner">
                        <div className="flex flex-col gap-0.5">
                          {item.children.map((child) => {
                            const ChildIcon = childIcons[child.label] ?? Sparkles;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="group/child flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors duration-200 hover:bg-white"
                              >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-blue shadow-sm ring-1 ring-black/[0.04] transition-transform duration-200 group-hover/child:scale-105">
                                  <ChildIcon className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-semibold text-ink transition-colors group-hover/child:text-brand-blue">
                                  {child.label}
                                </span>
                                <ChevronRight className="ml-auto h-3.5 w-3.5 text-muted opacity-0 transition-opacity duration-200 group-hover/child:opacity-100" />
                              </Link>
                            );
                          })}
                        </div>

                        <div className="relative mt-2 flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-br from-brand-950 via-brand-900 to-brand-blue p-4 shadow-lg shadow-brand-900/20">
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-[#F7B45C]/20 blur-2xl"
                          />
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-8 -left-4 h-20 w-20 rounded-full bg-brand-blue-light/20 blur-2xl"
                          />
                          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#F7B45C] ring-1 ring-white/10">
                            <CategoryIcon className="h-5 w-5" />
                          </span>
                          <p className="relative text-xs font-semibold text-white/90">
                            {categoryCaptions[item.label] ?? "Discover more"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        <div className="relative border-t border-black/5 px-5 pb-5 pt-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-t from-white to-transparent"
          />
          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-brand-blue to-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/40"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative">Start a Project</span>
            <ChevronRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-muted">
            <a
              href="tel:+447405127633"
              className="flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-surface px-3 py-1.5 transition-colors hover:border-brand-blue/20 hover:bg-brand-blue/5 hover:text-brand-blue"
            >
              <Phone className="h-3.5 w-3.5" />
              +44 7405 127633
            </a>
            <a
              href="mailto:info@adex360.com"
              className="flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-surface px-3 py-1.5 transition-colors hover:border-brand-blue/20 hover:bg-brand-blue/5 hover:text-brand-blue"
            >
              <Mail className="h-3.5 w-3.5" />
              info@adex360.com
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            Let&apos;s build <span className="font-semibold text-brand-blue">something great</span>
          </p>
        </div>
      </div>
    </>
  );
}
