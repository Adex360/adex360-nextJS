"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, Star, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BARS = [38, 52, 44, 63, 58, 78, 92];
const RADIUS = 64;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DONUT_TARGET = CIRCUMFERENCE * 0.55; // 45% filled

export default function SeoUniqueStats() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const arc = root.querySelector<SVGCircleElement>("[data-donut-arc]");
      const bars = gsap.utils.toArray<HTMLElement>("[data-bar]", root);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      if (arc) {
        gsap.fromTo(
          arc,
          { strokeDashoffset: CIRCUMFERENCE },
          {
            strokeDashoffset: DONUT_TARGET,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: root, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
      }

      gsap.fromTo(
        bars,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.7,
          ease: "back.out(1.4)",
          stagger: 0.08,
          scrollTrigger: { trigger: root, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} data-reveal="left" className="relative mx-auto w-full max-w-md">
      <div data-parallax="14" className="pointer-events-none absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-[#E38A19]/15 via-transparent to-brand-blue/15 blur-2xl xs:-inset-6" />

      <div className="absolute -top-4 right-2 z-20 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 shadow-lg shadow-brand-900/10">
        <Star className="h-4 w-4 fill-[#E38A19] text-[#E38A19]" />
        <span className="text-xs font-bold text-ink">4.9/5 Rated</span>
      </div>

      <div className="relative z-10 rounded-3xl border border-black/5 bg-white p-6 shadow-2xl shadow-brand-900/10">
        <div className="flex flex-col items-center gap-5 text-center xs:flex-row xs:gap-6 xs:text-left">
          <div className="relative h-40 w-40 shrink-0">
            <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
              <circle
                cx="80"
                cy="80"
                r={RADIUS}
                fill="none"
                stroke="#eef1fb"
                strokeWidth="16"
              />
              <circle
                data-donut-arc=""
                cx="80"
                cy="80"
                r={RADIUS}
                fill="none"
                stroke="url(#seoDonutGrad)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={DONUT_TARGET}
              />
              <defs>
                <linearGradient id="seoDonutGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F7B45C" />
                  <stop offset="100%" stopColor="#E38A19" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                data-counter="45"
                data-counter-suffix="%"
                className="text-3xl font-extrabold text-ink"
              >
                45%
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold leading-snug text-ink">
              Conversion Rate Achieved With Optimized SEO Funnels
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#E38A19]/10 px-3 py-1 text-xs font-semibold text-[#995607]">
              <TrendingUp className="h-3.5 w-3.5" />
              Consistent growth
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-4 rounded-3xl bg-brand-950 p-6 text-white shadow-2xl shadow-brand-900/30 xs:-mt-5 xs:ml-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#F7B45C]">
              <BarChart3 className="h-5 w-5" />
            </span>
            <p className="mt-3 text-2xl font-extrabold uppercase tracking-wide">
              New Traffic
            </p>
            <p className="text-sm text-white/60">Month over month</p>
          </div>

          <div className="flex h-24 items-end gap-1.5" aria-hidden="true">
            {BARS.map((height, i) => (
              <span
                key={i}
                data-bar=""
                className={`w-4 origin-bottom rounded-t-md ${
                  i === BARS.length - 1
                    ? "bg-gradient-to-t from-[#E38A19] to-[#F7B45C]"
                    : "bg-white/15"
                }`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
