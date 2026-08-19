"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Search, TrendingUp, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const wins = [
  {
    title: "Record Highest Sales",
    description:
      "Engine partnered up with us and our expertise helped them achieve 6.81x the sales this year.",
  },
  {
    title: "200X Traffic Growth",
    description:
      "Chief Apparel broke a record of 200X traffic with Adex360's SEO services.",
  },
];

// Upward-trending line for the dashboard chart (viewBox 0 0 320 170)
const CHART_LINE =
  "M12 146 C 48 138, 66 112, 96 116 C 126 120, 142 84, 174 82 C 206 80, 218 56, 248 48 C 272 42, 292 30, 308 22";
const CHART_AREA = `${CHART_LINE} L 308 160 L 12 160 Z`;
const CHART_POINTS: [number, number][] = [
  [12, 146],
  [96, 116],
  [174, 82],
  [248, 48],
  [308, 22],
];

export default function SeoGrowth() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const line = root.querySelector<SVGPathElement>("[data-sg-line]");
      const lineLength = line ? line.getTotalLength() : 0;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: root, start: "top 72%", once: true },
      });

      if (line && lineLength) {
        gsap.set(line, {
          strokeDasharray: lineLength,
          strokeDashoffset: lineLength,
        });
        tl.to(line, { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" });
      }
      tl.fromTo(
        "[data-sg-area]",
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.7"
      );
      tl.fromTo(
        "[data-sg-point]",
        { scale: 0, transformOrigin: "center", opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: "back.out(2.2)" },
        "-=0.9"
      );
      tl.fromTo(
        "[data-sg-chip]",
        { y: 24, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.6)" },
        "-=0.6"
      );

      // Ambient loops
      gsap.to("[data-sg-orbit]", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
      gsap.utils.toArray<HTMLElement>("[data-sg-chip]").forEach((chip, i) => {
        gsap.to(chip, {
          y: i % 2 === 0 ? -8 : 8,
          duration: 2.4 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.2,
        });
      });
      gsap.to("[data-sg-pulse]", {
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
            Empowering SEO Success
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Adex360: Drive Traffic, Leads, and Growth
          </h2>
          <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            Organic search traffic converts at an impressive 12.5% conversion
            rate, outperforming traditional advertising. With Adex360&apos;s SEO
            services, brands enjoy sustainable growth, higher visibility, and
            improved customer acquisition costs (CAC).
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

        <div data-reveal="right" className="relative mx-auto w-full max-w-md">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-brand-blue/15 via-transparent to-[#E38A19]/15 blur-2xl xs:-inset-8" />

          {/* Rotating dashed orbit */}
          <svg
            data-sg-orbit=""
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
                    data-sg-pulse=""
                    className="absolute inset-0 rounded-full bg-emerald-400"
                  />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-sm font-bold text-ink">Organic Performance</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                12.5% CVR
              </span>
            </div>

            <div className="mt-5">
              <svg viewBox="0 0 320 170" className="w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="sgLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#E38A19" />
                    <stop offset="55%" stopColor="#8FB0FF" />
                    <stop offset="100%" stopColor="#2F6BFF" />
                  </linearGradient>
                  <linearGradient id="sgAreaGrad" x1="0" y1="0" x2="0" y2="1">
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
                <path data-sg-area="" d={CHART_AREA} fill="url(#sgAreaGrad)" />
                <path
                  data-sg-line=""
                  d={CHART_LINE}
                  fill="none"
                  stroke="url(#sgLineGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {CHART_POINTS.map(([x, y], i) => (
                  <g key={i} data-sg-point="">
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
                  Organic Traffic
                </p>
                <p className="mt-1 text-xl font-extrabold text-ink">
                  <span data-counter="200" data-counter-suffix="X">200X</span>
                </p>
              </div>
              <div className="rounded-2xl bg-surface p-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
                  Sales Growth
                </p>
                <p className="mt-1 text-xl font-extrabold text-ink">6.81x</p>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div
            data-sg-chip=""
            className="absolute -top-5 -right-2 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-brand-900/10 ring-1 ring-black/5 xs:-right-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E38A19]/10 text-[#C26F0B]">
              <Zap className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-extrabold leading-tight text-ink">6.81x Sales</p>
              <p className="text-[10px] font-semibold text-muted">Engine</p>
            </div>
          </div>
          <div
            data-sg-chip=""
            className="absolute -bottom-5 -left-2 z-20 flex items-center gap-2 rounded-2xl bg-brand-950 px-4 py-2.5 text-white shadow-xl shadow-brand-900/30 xs:-left-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-[#F7B45C]">
              <Search className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-extrabold leading-tight">200X Traffic</p>
              <p className="text-[10px] font-semibold text-white/60">Chief Apparel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
