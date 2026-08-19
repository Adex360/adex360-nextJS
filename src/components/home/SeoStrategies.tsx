"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  Share2,
  Smartphone,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type ServiceTab = {
  eyebrow: string;
  label: string;
  icon: LucideIcon;
  heading: string;
  description: string;
  results: { name: string; detail: string }[];
  cta: string;
  href: string;
};

const tabs: ServiceTab[] = [
  {
    eyebrow: "Organic Success",
    label: "SEO Services",
    icon: BarChart3,
    heading: "Grow with Proven SEO Strategies",
    description:
      "We grow with you! Our SEO services cover on-page, off-page, backlinking, technical SEO, and keyword analysis for steady, competitive organic growth.",
    results: [
      { name: "Chief Apparel", detail: "200x Growth in Traffic Rate" },
      { name: "Engine", detail: "6.81x Record Sales in One Season" },
    ],
    cta: "Rank Higher",
    href: "/seo-services",
  },
  {
    eyebrow: "User-Centric Design",
    label: "Web Development",
    icon: Code2,
    heading: "Optimized Web Development for Maximum Visibility",
    description:
      "Our web development and UI/UX ensure a user-friendly, optimized site, integrating SEO strategies for higher rankings on search engines.",
    results: [
      { name: "Nishat USA", detail: "53% Website Sessions Increase" },
      { name: "Beechtree", detail: "2.5 million+ Impressions" },
    ],
    cta: "Craft Brilliance",
    href: "/web-development",
  },
  {
    eyebrow: "Sales Growth",
    label: "Performance Marketing",
    icon: Target,
    heading: "Performance Marketing That Drives Real Results",
    description:
      "Our performance marketing experts focus on sales, leads, and brand growth—maximizing your budget for real, measurable results with Adex360.",
    results: [
      { name: "SEONA", detail: "47% Increase in Conversions" },
      { name: "Noor By Sadia", detail: "57% Increase in Per Day Sales" },
    ],
    cta: "Ads That Convert",
    href: "/performance-marketing",
  },
  {
    eyebrow: "Brand Engagement",
    label: "Social Media",
    icon: Share2,
    heading: "Strategic Social Media for Maximum Growth",
    description:
      "Social media boosts growth beyond websites. From content to ads and support, we craft strategies for a strong, tangible presence.",
    results: [
      { name: "Saya", detail: "Record Sales in One Day" },
      { name: "Be One Shop", detail: "40% Increase in Monthly Sales" },
    ],
    cta: "Trend & Thrive",
    href: "/social-media-management",
  },
  {
    eyebrow: "Seamless Integration",
    label: "CRM Integration",
    icon: UsersRound,
    heading: "Boost Efficiency with GoHighLevel CRM",
    description:
      "We streamline operations with GoHighLevel CRM integration—automating lead nurturing, multi-channel marketing, AI chatbots, and sales pipeline management for effortless scaling.",
    results: [
      { name: "Yadea", detail: "Optimized Customer Management" },
      { name: "Universal Apps", detail: "Fully Automated Sales & Marketing" },
    ],
    cta: "Automate Growth",
    href: "/crm-integration",
  },
  {
    eyebrow: "Custom Solutions",
    label: "Shopify App Development",
    icon: Smartphone,
    heading: "Drive Growth with Custom Shopify App Development",
    description:
      "We develop custom Shopify apps to enhance functionality, streamline operations, and boost efficiency—seamlessly integrating for optimized processes and long-term growth.",
    results: [
      { name: "Universal Product Feed", detail: "700+ Users" },
      { name: "PushBot", detail: "2000+ Users" },
      { name: "Mailbot", detail: "200+ Users" },
    ],
    cta: "Build The Future",
    href: "/shopify-app-development",
  },
];

export default function SeoStrategies() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  const tab = tabs[active];
  const TabIcon = tab.icon;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!panelRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-panel-illustration]",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.6)" }
      );
      gsap.fromTo(
        "[data-panel-item]",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" }
      );
    }, panelRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <section className="overflow-hidden bg-surface px-4 py-14 md:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-16">
        <div data-reveal="left" className="relative rounded-3xl bg-white p-3 shadow-xl shadow-brand-900/5">
          {tabs.map((t, i) => {
            const Icon = t.icon;
            const isActive = i === active;
            return (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`relative flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-200 ${
                  isActive ? "bg-surface" : "hover:bg-surface/60"
                } ${i < tabs.length - 1 ? "mb-1" : ""}`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                    isActive
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "bg-surface text-ink"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted">
                    {t.eyebrow}
                  </span>
                  <span
                    className={`block truncate text-sm font-bold ${
                      isActive ? "text-brand-blue" : "text-ink"
                    }`}
                  >
                    {t.label}
                  </span>
                </span>
                {isActive && (
                  <ChevronRight className="pointer-events-none absolute -right-9 hidden h-10 w-10 text-ink/10 lg:block" />
                )}
              </button>
            );
          })}
        </div>

        <div
          ref={panelRef}
          data-reveal="right"
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
        >
          <div data-panel-illustration="" className="mx-auto w-full max-w-sm">
            <div className="flex aspect-square items-center justify-center rounded-[42%_58%_55%_45%/50%_44%_56%_50%] bg-[#f3ede2]">
              <TabIcon className="h-28 w-28 text-ink/70" strokeWidth={1.25} />
            </div>
          </div>

          <div>
            <h2 data-panel-item="" className="text-2xl font-extrabold text-ink sm:text-3xl">
              {tab.heading}
            </h2>
            <p data-panel-item="" className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
              {tab.description}
            </p>

            <ul data-panel-item="" className="mt-6 space-y-3">
              {tab.results.map((result) => (
                <li key={result.name} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-black/15 bg-white">
                    <Check className="h-3.5 w-3.5 text-ink" />
                  </span>
                  <span className="text-muted">
                    <span className="font-bold text-ink">{result.name}</span>
                    {" – "}
                    {result.detail}
                  </span>
                </li>
              ))}
            </ul>

            <div data-panel-item="" className="mt-8">
              <Link
                href={tab.href}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:opacity-90"
              >
                {tab.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
