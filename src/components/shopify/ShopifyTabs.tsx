"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  Check,
  ChevronRight,
  Paintbrush,
  Plug,
  Rocket,
  Settings,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { pickShape } from "@/lib/blobShapes";

type ServiceTab = {
  eyebrow: string;
  label: string;
  icon: LucideIcon;
  heading: string;
  description: string;
  checks: string[];
  cta: string;
};

const tabs: ServiceTab[] = [
  {
    eyebrow: "Custom Apps",
    label: "Custom App Development",
    icon: Settings,
    heading: "Your Store, Your Custom App",
    description:
      "We develop custom Shopify apps tailored to your business, ensuring unique functionality, seamless integration, and high-performance solutions designed for success.",
    checks: ["Tailored to Your Needs", "Scalable & Future-Ready", "Seamless Shopify Integration"],
    cta: "Customize Now",
  },
  {
    eyebrow: "Visual Impact",
    label: "UI UX Design",
    icon: Paintbrush,
    heading: "Designs That Drive Sales",
    description:
      "We create fast, reliable, and user-friendly apps with optimized UI/UX, ensuring seamless functionality, creative design, and high performance to attract customers.",
    checks: ["Intuitive & User-Friendly", "Designed for Conversions", "Mobile-First & Lightning Fast"],
    cta: "Let's Design Success",
  },
  {
    eyebrow: "Seamless Integration",
    label: "App Integration",
    icon: Plug,
    heading: "Connect & Integrate Your App",
    description:
      "We fix bugs, integrate third-party apps, APIs, and custom solutions, ensuring seamless automation, secure payments, inventory management, and glitch-free functionality for your business.",
    checks: ["Effortless Automation", "Third-Party Compatibility", "Zero Downtime, Maximum Efficiency"],
    cta: "Start Integrating",
  },
  {
    eyebrow: "Powerful Features",
    label: "Advanced Features",
    icon: Wrench,
    heading: "Features That Elevate Your App",
    description:
      "We develop AI-driven upsells, personalized shopping, dynamic pricing, and custom shipping, creating an interactive, high-converting eCommerce experience for your store.",
    checks: ["AI-Powered Personalization", "Upsells & Cross-Sells", "Chat Support & Interactive Features"],
    cta: "Supercharge Your App",
  },
  {
    eyebrow: "App Performance",
    label: "App Optimization",
    icon: Rocket,
    heading: "Refine, Speed Up, Dominate",
    description:
      "Adex optimizes Shopify apps for SEO, keywords, images, speed, and usability, ensuring higher rankings, better performance, and increased conversions efficiently.",
    checks: ["Keyword Research & Optimization", "Technical SEO & conversion rate optimization", "Bug-Free Performance"],
    cta: "Optimize Now",
  },
  {
    eyebrow: "Bug Detection",
    label: "App Audit",
    icon: ShieldCheck,
    heading: "Fix Issues, Perfect Your App",
    description:
      "Adex conducts a full 360° app audit, optimizing performance, security, UI/UX, backend, frontend, and functionality to ensure seamless operation.",
    checks: ["Full Performance Analysis.", "Security & Compliance Checks", "Actionable Fixes & Insights"],
    cta: "Audit Your App",
  },
];

// Fixed shape for SSR/first paint; every tab click morphs to a fresh random one.
const INITIAL_BLOB_SHAPE = "52% 48% 44% 56% / 46% 54% 46% 54%";

export default function ShopifyTabs() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const lastShapeIdx = useRef(-1);

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
      const { shape, idx } = pickShape(lastShapeIdx.current);
      lastShapeIdx.current = idx;

      gsap.to("[data-panel-blob]", {
        borderRadius: shape.radius,
        rotate: shape.rotate,
        skewX: shape.skewX,
        scale: shape.scale,
        duration: 0.9,
        ease: "elastic.out(1, 0.65)",
      });
      gsap.to("[data-panel-icon-wrap]", {
        rotate: -shape.rotate,
        skewX: -shape.skewX,
        duration: 0.9,
        ease: "elastic.out(1, 0.65)",
      });
      gsap.fromTo(
        "[data-panel-icon]",
        { scale: 0, rotate: -35, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.6, ease: "back.out(1.8)" }
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
              <div key={t.label}>
                <button
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  aria-controls="shopify-services-panel"
                  className={`relative flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 ${
                    isActive ? "bg-surface" : "hover:bg-surface/60"
                  }`}
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
                    <ChevronRight className="pointer-events-none absolute -right-9 hidden h-10 w-10 text-brand-blue lg:block" />
                  )}
                </button>
                {i < tabs.length - 1 && (
                  <div
                    className={`mx-5 my-1.5 h-px transition-colors duration-300 ${
                      isActive ? "bg-brand-blue" : "bg-[#E3E8F5]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div
          ref={panelRef}
          id="shopify-services-panel"
          data-reveal="right"
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
        >
          <div data-panel-illustration="" data-parallax="7" className="mx-auto w-full max-w-sm">
            <div
              data-panel-blob=""
              className="flex aspect-square items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #C7D6F7 0%, #A8B6F0 40%, #6B4EE6 100%)",
                borderRadius: INITIAL_BLOB_SHAPE,
              }}
            >
              <span data-panel-icon-wrap="" className="flex">
                <span data-panel-icon="" className="flex">
                  <TabIcon className="h-28 w-28 text-white/80" strokeWidth={1.25} />
                </span>
              </span>
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
              {tab.checks.map((check) => (
                <li key={check} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-black/15 bg-white">
                    <Check className="h-3.5 w-3.5 text-ink" />
                  </span>
                  <span className="font-semibold text-ink">{check}</span>
                </li>
              ))}
            </ul>

            <div data-panel-item="" className="mt-8">
              <Link
                href="/contact-us"
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
