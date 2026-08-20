"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ChartLine,
  Check,
  ChevronRight,
  Handshake,
  Mail,
  MonitorPlay,
  Target,
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
    eyebrow: "Smart Targeting",
    label: "PPC Advertising",
    icon: Target,
    heading: "Skyrocket Sales with Precision PPC",
    description:
      "PPC delivers instant results by targeting the right keywords, capturing clicks, and converting traffic, maximizing ROI while enhancing visibility and online presence.",
    checks: ["Clicks that count", "Target, Click, Convert", "Maximize your ROI"],
    cta: "Scale With Paid Ads",
  },
  {
    eyebrow: "Performance-Driven",
    label: "Affiliate Marketing",
    icon: Handshake,
    heading: "Powerful Affiliate Marketing",
    description:
      "Turn your partners into profit. Collaborate with influencers, bloggers, and publishers. Extend your reach with minimal risk and maximum reward.",
    checks: ["Partners, Profits, Results", "Pay for performance", "Reach with no risk"],
    cta: "Unlock Affiliate Success",
  },
  {
    eyebrow: "Automated Outreach",
    label: "Email Marketing",
    icon: Mail,
    heading: "Grow with Email Marketing",
    description:
      "Email marketing drives measurable results with personalized messages, nurturing leads, increasing conversions, and turning inbox engagement into sales and customer retention.",
    checks: ["Emails that convert", "Nurture, Engage, Sell", "Direct results, every time"],
    cta: "Unlock Email Success",
  },
  {
    eyebrow: "Impactful Ads",
    label: "Display Ads",
    icon: MonitorPlay,
    heading: "Google & Meta Ads That Convert",
    description:
      "Google and Meta display ads use striking visuals, precise targeting, and conversion tracking to maximize impressions, engagement, and measurable results for your brand.",
    checks: ["Visuals that convert", "Brand visibility, real impact", "Search engines, Google, and Meta."],
    cta: "Start Advertising Now",
  },
  {
    eyebrow: "Maximize Conversions",
    label: "CR Optimization",
    icon: ChartLine,
    heading: "Turn Visitors into Customers with CRO",
    description:
      "CRO converts visitors into customers by analyzing behavior, optimizing landing pages, and improving calls-to-action to boost conversions, reduce bounce rates, and maximize ROI.",
    checks: ["Turn clicks into customers", "Optimize, Convert, Succeed", "Boost conversions now"],
    cta: "Turn Clicks Into Customers",
  },
];

// Fixed shape for SSR/first paint; every tab click morphs to a fresh random one.
const INITIAL_BLOB_SHAPE = "52% 48% 44% 56% / 46% 54% 46% 54%";

export default function PerformanceTabs() {
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
      // Morph the panel into a random shape family — never the same twice in a row.
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
                  aria-controls="performance-services-panel"
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
          id="performance-services-panel"
          data-reveal="right"
          className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
        >
          <div data-panel-illustration="" data-parallax="7" className="mx-auto w-full max-w-sm">
            <div
              data-panel-blob=""
              className="flex aspect-square items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #FAE3BE 0%, #F5D6A8 40%, #C7D6F7 100%)",
                borderRadius: INITIAL_BLOB_SHAPE,
              }}
            >
              <span data-panel-icon-wrap="" className="flex">
                <span data-panel-icon="" className="flex">
                  <TabIcon className="h-28 w-28 text-ink/70" strokeWidth={1.25} />
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
