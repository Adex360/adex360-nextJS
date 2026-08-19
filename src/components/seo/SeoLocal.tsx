"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ChartLine,
  Check,
  ChevronRight,
  FileText,
  KeyRound,
  Lightbulb,
  MapPin,
  Network,
  type LucideIcon,
} from "lucide-react";

type ServiceTab = {
  eyebrow: string;
  label: string;
  icon: LucideIcon;
  heading: string;
  description: string;
  checks: string[];
  cta: string;
  href: string;
};

const tabs: ServiceTab[] = [
  {
    eyebrow: "Local Visibilty",
    label: "Local SEO",
    icon: MapPin,
    heading: "Boost Your Business with Local SEO",
    description:
      "Local SEO boosts visibility, connecting you with nearby customers through Google Business optimization and location-based strategies to beat competitors.",
    checks: [
      "Enhanced Local Visibility",
      "Google Business Optimization",
      "Competitive Edge",
    ],
    cta: "Dominate Locally",
    href: "/contact-us",
  },
  {
    eyebrow: "Technical Excellence",
    label: "Technical SEO",
    icon: Network,
    heading: "Enhance Performance with Technical SEO",
    description:
      "Technical SEO optimizes your site's backend, enhancing speed, mobile-friendliness, crawlability, and structured data for better search rankings and performance.",
    checks: [
      "Improved Site Speed",
      "Mobile Optimization",
      "Optimized Crawlability",
    ],
    cta: "Fix & Rank",
    href: "/contact-us",
  },
  {
    eyebrow: "Enterprise Growth",
    label: "On-Page SEO",
    icon: FileText,
    heading: "Maximize Visibility with On-Page SEO",
    description:
      "On-page SEO optimizes content, keywords, and meta tags to attract search engines, engage visitors, and improve rankings for better site performance.",
    checks: [
      "Optimized SEO content strategy.",
      "Strategic keyword placement.",
      "Enhanced meta tags and structure.",
    ],
    cta: "Perfect My Pages",
    href: "/contact-us",
  },
  {
    eyebrow: "SEO Advantage",
    label: "SEO Strategy",
    icon: Lightbulb,
    heading: "Stay Ahead with Advanced SEO",
    description:
      "Stay ahead with a powerful SEO strategy. From competitor analysis to a unique optimization framework, we ensure your website outperforms rivals effectively.",
    checks: [
      "Comprehensive competitor analysis",
      "Unique SEO optimization frameworks",
      "Ongoing strategic enhancements",
    ],
    cta: "Get Your Free Consultation",
    href: "https://api.leadconnectorhq.com/widget/bookings/adex360-consultation",
  },
  {
    eyebrow: "Keyword Mastery",
    label: "Keyword Analysis",
    icon: KeyRound,
    heading: "Master Keywords with Precision",
    description:
      "We simplify keyword research with premium tools, finding low-competition, high-volume keywords to boost rankings and enhance search visibility.",
    checks: [
      "Advanced keyword research.",
      "Focus on low-saturation keywords.",
      "Higher search volume targeting.",
    ],
    cta: "Get Your Free Consultation",
    href: "https://api.leadconnectorhq.com/widget/bookings/adex360-consultation",
  },
  {
    eyebrow: "Deep Analysis",
    label: "SEO Audit",
    icon: ChartLine,
    heading: "Uncover Success with SEO Audits",
    description:
      "Struggling with results? Our SEO audit identifies missed details, providing a detailed report to optimize efforts and improve rankings.",
    checks: [
      "Detailed SEO performance analysis.",
      "Comprehensive audit report.",
      "Identify and fix missed opportunities",
    ],
    cta: "Get Your Free Consultation",
    href: "https://api.leadconnectorhq.com/widget/bookings/adex360-consultation",
  },
];

// Fixed shape for SSR/first paint; every tab click morphs to a fresh random one.
const INITIAL_BLOB_SHAPE = "56% 44% 48% 52% / 46% 56% 44% 54%";

type PanelShape = {
  radius: string;
  rotate: number;
  skewX: number;
  scale: number;
};

const rand = (min: number, max: number) =>
  Math.round(min + Math.random() * (max - min));

// All radii use the full 8-value form (TL TR BR BL / TL TR BR BL) so GSAP can
// interpolate smoothly between any two shapes.
const full = (...v: number[]) =>
  `${v[0]}% ${v[1]}% ${v[2]}% ${v[3]}% / ${v[4]}% ${v[5]}% ${v[6]}% ${v[7]}%`;

const SHAPE_MAKERS: (() => PanelShape)[] = [
  // Organic blob — complementary pairs keep it balanced
  () => {
    const a = rand(35, 65);
    const b = rand(35, 65);
    const c = rand(35, 65);
    const d = rand(35, 65);
    return {
      radius: full(a, 100 - a, b, 100 - b, c, 100 - c, d, 100 - d),
      rotate: 0,
      skewX: 0,
      scale: 1,
    };
  },
  // Arch / dome — rounded top, flat feet
  () => ({
    radius: full(50, 50, rand(6, 14), rand(6, 14), rand(55, 64), rand(55, 64), rand(6, 12), rand(6, 12)),
    rotate: 0,
    skewX: 0,
    scale: 1,
  }),
  // Diamond — softly-rounded square rotated 45°
  () => {
    const c = rand(14, 24);
    return { radius: full(c, c, c, c, c, c, c, c), rotate: 45, skewX: 0, scale: 0.82 };
  },
  // Parallelogram — skewed rounded square
  () => {
    const c = rand(10, 18);
    const skew = rand(9, 15) * (Math.random() < 0.5 ? -1 : 1);
    return { radius: full(c, c, c, c, c, c, c, c), rotate: 0, skewX: skew, scale: 0.92 };
  },
  // Egg — circle with a heavier bottom
  () => {
    const top = rand(55, 64);
    return {
      radius: full(50, 50, 50, 50, top, top, 100 - top, 100 - top),
      rotate: rand(-8, 8),
      skewX: 0,
      scale: 1,
    };
  },
  // Leaf — opposite corners pinched
  () => {
    const big = rand(55, 70);
    const small = rand(4, 12);
    return {
      radius: full(big, small, big, small, big, small, big, small),
      rotate: rand(-12, 12),
      skewX: 0,
      scale: 0.96,
    };
  },
  // Squircle — evenly-rounded soft square
  () => {
    const c = rand(28, 38);
    return { radius: full(c, c, c, c, c, c, c, c), rotate: rand(-8, 8), skewX: 0, scale: 0.95 };
  },
];

export default function SeoLocal() {
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
      let idx = Math.floor(Math.random() * SHAPE_MAKERS.length);
      if (idx === lastShapeIdx.current) idx = (idx + 1) % SHAPE_MAKERS.length;
      lastShapeIdx.current = idx;
      const shape = SHAPE_MAKERS[idx]();

      gsap.to("[data-panel-blob]", {
        borderRadius: shape.radius,
        rotate: shape.rotate,
        skewX: shape.skewX,
        scale: shape.scale,
        duration: 0.9,
        ease: "elastic.out(1, 0.65)",
      });
      // Counter-transform so the icon stays upright inside rotated/skewed shapes.
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
                  aria-pressed={isActive}
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
                href={tab.href}
                {...(tab.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
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
