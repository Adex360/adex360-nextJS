"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { pickShape } from "@/lib/blobShapes";
import {
  BarChart3,
  ChartLine,
  Check,
  ChevronRight,
  Megaphone,
  PenTool,
  UsersRound,
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
    eyebrow: "Content Strategy",
    label: "Content Creation",
    icon: PenTool,
    heading: "Engaging Content That Captivates & Converts",
    description:
      "We create engaging posts, graphics, and captions to capture attention, spark conversations, boost engagement, and drive conversions for your brand.",
    checks: [
      "Tailored, brand-specific content",
      "Engaging and trending posts",
      "High-quality visuals and videos",
    ],
    cta: "Create Now",
    href: "/contact-us",
  },
  {
    eyebrow: "Community Growth",
    label: "Community Management",
    icon: UsersRound,
    heading: "Strong Connections with Engagement",
    description:
      "We engage audiences by replying to comments, posting in groups, and fostering meaningful interactions to build a loyal, trusted community.",
    checks: [
      "Active follower interaction",
      "Prompt response to queries",
      "Building brand loyalty",
    ],
    cta: "Engage Now",
    href: "/contact-us",
  },
  {
    eyebrow: "Influencer Power",
    label: "Influencer Marketing",
    icon: Megaphone,
    heading: "Boost Your Brand with Influencers",
    description:
      "We connect you with top influencers, leveraging their audience to boost brand visibility, engagement, conversions, and revenue growth effectively.",
    checks: [
      "Collaboration with influencers",
      "Expanding reach and brand trust",
      "Driving conversions through promotions",
    ],
    cta: "Collaborate Now",
    href: "/contact-us",
  },
  {
    eyebrow: "Data-Driven Growth",
    label: "Analytics and Reporting",
    icon: ChartLine,
    heading: "Track & Optimize with Real Insights",
    description:
      "Track performance with Adex360's real-time analytics, gaining insights to optimize strategies, boost engagement, and maximize your social media ROI.",
    checks: [
      "In-depth performance tracking",
      "Regular reports with actionable insights",
      "Continuous optimization based on data",
    ],
    cta: "View Insights",
    href: "/contact-us",
  },
  {
    eyebrow: "Social Growth",
    label: "Social Media Strategies",
    icon: BarChart3,
    heading: "Maximize Impact with Smart Strategies",
    description:
      "Boost your brand with data-driven strategies, optimizing content and campaigns to enhance reach, engagement, visibility, and convert followers into customers.",
    checks: [
      "Goal-focused strategy for your brand",
      "Choosing the right platforms",
      "Ongoing monitoring and optimization",
    ],
    cta: "Get Your Free Consultation",
    href: "https://api.leadconnectorhq.com/widget/bookings/adex360-consultation",
  },
];

// Fixed shape for SSR/first paint; every tab click morphs to a fresh random one.
const INITIAL_BLOB_SHAPE = "48% 52% 56% 44% / 54% 46% 54% 46%";

export default function SocialTabs() {
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
                  aria-current={isActive ? "true" : undefined}
                  aria-controls="social-services-panel"
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
          id="social-services-panel"
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
