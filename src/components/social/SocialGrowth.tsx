"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Heart, ShoppingBag, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const wins = [
  {
    title: "Growth in Orders",
    description:
      "Nishat USA achieved 193% growth in orders, doubling sales and customer engagement.",
  },
  {
    title: "Per Day Sales Growth",
    description:
      "Noor By Sadia experienced 57% growth in daily sales, boosting revenue significantly.",
  },
];

// Upward-trending engagement line (viewBox 0 0 320 170)
const CHART_LINE =
  "M12 142 C 44 136, 64 108, 94 114 C 124 120, 140 78, 172 78 C 204 78, 216 52, 246 46 C 270 41, 292 28, 308 20";
const CHART_AREA = `${CHART_LINE} L 308 160 L 12 160 Z`;
const CHART_POINTS: [number, number][] = [
  [12, 142],
  [94, 114],
  [172, 78],
  [246, 46],
  [308, 20],
];

export default function SocialGrowth() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const line = root.querySelector<SVGPathElement>("[data-smg-line]");
      const lineLength = line ? line.getTotalLength() : 0;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: root, start: "top 72%", toggleActions: "play none none reverse" },
      });

      if (line && lineLength) {
        gsap.set(line, {
          strokeDasharray: lineLength,
          strokeDashoffset: lineLength,
        });
        tl.to(line, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" });
      }
      tl.fromTo(
        "[data-smg-area]",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.7"
      );
      tl.fromTo(
        "[data-smg-point]",
        { scale: 0, transformOrigin: "center", opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out(2.2)" },
        "-=0.9"
      );
      tl.fromTo(
        "[data-smg-chip]",
        { y: 24, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.6)" },
        "-=0.6"
      );

      // Ambient loops
      gsap.to("[data-smg-orbit]", {
        rotate: 360,
        duration: 42,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
      // Float via yPercent so the loop composes with (never fights) the
      // scroll-gated entrance tween that owns `y`.
      gsap.utils.toArray<HTMLElement>("[data-smg-chip]").forEach((chip, i) => {
        gsap.to(chip, {
          yPercent: i % 2 === 0 ? -14 : 14,
          duration: 2.4 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.2,
        });
      });
      gsap.to("[data-smg-pulse]", {
        scale: 1.6,
        opacity: 0,
        duration: 1.6,
        repeat: -1,
        ease: "power1.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-14 lg:grid-cols-2"
      >
        <div className="text-center lg:text-left">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Mastering Social Media
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Adex360: Your Social Media Growth Catalyst
          </h2>
          <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            As of 2024, 63.8% of the world&apos;s population, equating to 5.22
            billion people, are active social media users. While the global
            social media advertising market is projected to grow, we at Adex360
            focus on expanding your brand with the updated social media
            algorithms, careful planning, and engaging ad campaigns. Trust us!
            We&apos;ve achieved fantastic results.
          </p>

          <div className="mx-auto mt-8 max-w-xl space-y-4 text-left lg:mx-0">
            {wins.map((win) => (
              <div
                key={win.title}
                data-reveal="left"
                className="flex items-start gap-4 rounded-2xl border border-[#E4E8F3] bg-white/70 p-5 shadow-lg shadow-brand-900/5 backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-600 text-white shadow-md shadow-brand-blue/30">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-base font-bold text-ink">{win.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {win.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="right" data-parallax="6" aria-hidden="true" className="relative mx-auto w-full max-w-md">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-brand-blue/15 via-transparent to-[#E38A19]/15 blur-2xl xs:-inset-8" />

          {/* Rotating dashed orbit */}
          <svg
            data-smg-orbit=""
            viewBox="0 0 400 400"
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] text-brand-blue/20 xs:-inset-10 xs:h-[calc(100%+5rem)] xs:w-[calc(100%+5rem)]"
          >
            <circle
              cx="200"
              cy="200"
              r="190"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 10"
            />
          </svg>

          {/* Dashboard card */}
          <div className="relative z-10 rounded-3xl border border-[#E4E8F3] bg-white p-6 shadow-2xl shadow-brand-900/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    data-smg-pulse=""
                    className="absolute inset-0 rounded-full bg-emerald-400"
                  />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-sm font-bold text-ink">Social Performance</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                47% CVR
              </span>
            </div>

            <div className="mt-5">
              <svg viewBox="0 0 320 170" className="w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="smgLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#E38A19" />
                    <stop offset="55%" stopColor="#8FB0FF" />
                    <stop offset="100%" stopColor="#2F6BFF" />
                  </linearGradient>
                  <linearGradient id="smgAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 80, 120].map((y) => (
                  <line
                    key={y}
                    x1="12"
                    y1={y}
                    x2="308"
                    y2={y}
                    stroke="#EEF1FB"
                    strokeWidth="1"
                  />
                ))}
                <path data-smg-area="" d={CHART_AREA} fill="url(#smgAreaGrad)" />
                <path
                  data-smg-line=""
                  d={CHART_LINE}
                  fill="none"
                  stroke="url(#smgLineGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {CHART_POINTS.map(([x, y], i) => (
                  <g key={i} data-smg-point="">
                    <circle cx={x} cy={y} r="6" fill="#fff" />
                    <circle
                      cx={x}
                      cy={y}
                      r="4"
                      fill={i === CHART_POINTS.length - 1 ? "#E38A19" : "#2F6BFF"}
                    />
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#E4E8F3] pt-5">
              <div className="rounded-2xl bg-surface p-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                  Active Users
                </p>
                <p className="mt-1 text-xl font-extrabold text-ink">5.22B</p>
              </div>
              <div className="rounded-2xl bg-surface p-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                  Of Population
                </p>
                <p className="mt-1 text-xl font-extrabold text-ink">63.8%</p>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div
            data-smg-chip=""
            className="absolute -top-5 -right-2 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-brand-900/10 ring-1 ring-black/5 xs:-right-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E38A19]/10 text-[#C26F0B]">
              <ShoppingBag className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-extrabold leading-tight text-ink">193% Orders</p>
              <p className="text-[10px] font-semibold text-muted">Nishat USA</p>
            </div>
          </div>
          <div
            data-smg-chip=""
            className="absolute -bottom-5 -left-2 z-20 flex items-center gap-2 rounded-2xl bg-brand-950 px-4 py-2.5 text-white shadow-xl shadow-brand-900/30 xs:-left-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-[#F7B45C]">
              <Heart className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-extrabold leading-tight">57% Daily Sales</p>
              <p className="text-[10px] font-semibold text-white/60">Noor By Sadia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
