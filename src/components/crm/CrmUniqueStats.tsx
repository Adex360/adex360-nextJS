"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, TrendingUp, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const RADIUS = 64;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DONUT_TARGET = CIRCUMFERENCE * 0.4; // 60% filled

export default function CrmUniqueStats() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const arc = root.querySelector<SVGCircleElement>("[data-donut-arc]");

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
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} data-reveal="left" className="relative mx-auto w-full max-w-md">
      <div data-parallax="14" className="pointer-events-none absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-brand-blue/15 via-transparent to-[#6B4EE6]/15 blur-2xl xs:-inset-6" />

      <div className="absolute -top-4 right-2 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-brand-900/10">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
          <Zap className="h-4 w-4" />
        </span>
        <span className="text-xs font-bold text-ink">
          Lead Conversions
          <br />
          <span className="text-base">150x</span>
        </span>
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
                stroke="url(#crmDonutGrad)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={DONUT_TARGET}
              />
              <defs>
                <linearGradient id="crmDonutGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8FB0FF" />
                  <stop offset="100%" stopColor="#2F6BFF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                data-counter="60"
                data-counter-suffix="%"
                className="text-3xl font-extrabold text-ink"
              >
                60%
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold leading-snug text-ink">
              Increase In Lead Conversions
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
              <TrendingUp className="h-3.5 w-3.5" />
              Consistent growth
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 left-6 z-20 flex items-center gap-1.5 rounded-full bg-white px-4 py-2 shadow-lg shadow-brand-900/10">
        <Star className="h-4 w-4 fill-[#E38A19] text-[#E38A19]" />
        <span className="text-xs font-bold text-ink">4.8/5 Rated</span>
      </div>
    </div>
  );
}
