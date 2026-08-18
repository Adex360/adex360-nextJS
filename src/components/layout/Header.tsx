"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/lib/nav";
import logoDark from "../../../public/images/adex-360-Logo.png";
import logoWhite from "../../../public/images/adex-360-white-Logo.png";

const menuItems = navItems.filter((item) => item.children);

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

  return (
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
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-black/5 bg-white px-4 pb-6 shadow-lg lg:hidden">
          <nav className="flex flex-col divide-y divide-black/5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="py-1">
                  <button
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wide text-ink"
                    onClick={() =>
                      setMobileSubmenu((v) => (v === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSubmenu === item.label && (
                    <div className="flex flex-col gap-1 pb-3 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-ink"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="py-3 text-sm font-semibold text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <Link
            href="/contact-us"
            className="mt-4 flex items-center justify-center rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
