"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Coins, Megaphone, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    title: "Lead Response Time",
    description: "Yadea experienced a 75% faster lead response time.",
  },
  {
    title: "Customer Engagement",
    description: "Universal Apps gained a 47% increase in customer engagement.",
  },
];

export default function CrmGrowth() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 72%", toggleActions: "play none none reverse" },
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.fromTo("[data-cg-eyebrow]", { y: 18, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          "[data-cg-line]",
          { yPercent: 115 },
          { yPercent: 0, duration: 0.85, stagger: 0.14, ease: "power4.out" },
          "-=0.35"
        )
        .fromTo("[data-cg-para]", { y: 22, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4")
        .fromTo(
          "[data-cg-point]",
          { x: -32, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.16 },
          "-=0.3"
        )
        .fromTo(
          "[data-cg-badge]",
          { scale: 0 },
          { scale: 1, stagger: 0.16, duration: 0.5, ease: "back.out(2.2)" },
          "<+0.1"
        );

      gsap.timeline({
        scrollTrigger: { trigger: "[data-cg-visual]", start: "top 75%", toggleActions: "play none none reverse" },
        defaults: { ease: "power3.out" },
      })
        .fromTo(
          "[data-cg-blob]",
          { x: 70, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
        )
        .fromTo(
          "[data-cg-chip]",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.15, duration: 0.55, ease: "back.out(2)" },
          "-=0.4"
        );

      gsap.to("[data-cg-icon]", { y: -8, duration: 2.6, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to("[data-cg-chip-a]", { yPercent: -55, duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.2 });
      gsap.to("[data-cg-chip-b]", { yPercent: 45, duration: 2.6, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.2 });
      gsap.to("[data-cg-orbit]", { rotate: 360, duration: 30, ease: "none", repeat: -1 });
      gsap.to("[data-cg-dot]", { rotate: 360, duration: 6, ease: "none", repeat: -1 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-surface-alt px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div
        className="pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(107,78,230,0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at 0% 0%, #000 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 0% 0%, #000 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#6B4EE6]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div
        ref={rootRef}
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2"
      >
        <div>
          <span
            data-cg-eyebrow=""
            className="inline-flex items-center gap-2 rounded-full bg-[#6B4EE6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#6B4EE6]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#6B4EE6]" />
            Elevate Your CRM Game
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            <span className="block overflow-hidden pb-1">
              <span data-cg-line="" className="block">
                Adex360: Powering
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-cg-line="" className="block">
                Smarter{" "}
                <span className="bg-gradient-to-r from-[#6B4EE6] to-brand-blue bg-clip-text text-transparent">
                  CRM Solutions
                </span>
              </span>
            </span>
          </h2>

          <p data-cg-para="" className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            CRM integration boosts efficiency by 75%, increases retention by
            47%, and enhances sales productivity by 34%. Adex360 optimizes
            GoHighLevel CRM, automating workflows, centralizing data, and
            streamlining operations. Our expertise ensures seamless
            integration, maximizing growth and ROI for your business.
          </p>

          <div className="mt-8 space-y-5">
            {points.map((point) => (
              <div
                key={point.title}
                data-cg-point=""
                className="flex items-start gap-4 rounded-2xl bg-white/70 p-4 shadow-sm shadow-brand-900/5 backdrop-blur"
              >
                <span
                  data-cg-badge=""
                  className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-light to-brand-blue text-white shadow-lg shadow-brand-blue/40"
                >
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-base font-bold text-ink">{point.title}</p>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-cg-visual="" aria-hidden="true" className="relative mx-auto w-full max-w-md">
          <svg
            data-cg-orbit=""
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 m-auto h-[110%] w-[110%] opacity-30"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="url(#cgOrbitGrad)"
              strokeWidth="0.35"
              strokeDasharray="1.5 3.5"
            />
            <defs>
              <linearGradient id="cgOrbitGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E38A19" />
                <stop offset="100%" stopColor="#6B4EE6" />
              </linearGradient>
            </defs>
          </svg>

          <div
            data-cg-blob=""
            className="relative z-10 flex aspect-square items-center justify-center rounded-[3rem]"
            style={{
              background: "linear-gradient(135deg, #F7B45C 0%, #E38A19 35%, #6B4EE6 100%)",
            }}
          >
            <div data-cg-dot="" className="pointer-events-none absolute inset-0">
              <span className="absolute left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow shadow-white/50" />
            </div>
            <span data-cg-icon="" className="flex">
              <Megaphone className="h-28 w-28 text-white/80" strokeWidth={1.2} />
            </span>
          </div>

          <div
            data-cg-chip=""
            data-cg-chip-a=""
            className="absolute -left-2 top-8 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6B4EE6]/10 text-[#6B4EE6]">
              <TrendingUp className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-sm font-extrabold text-ink">75%</span>
              <span className="block text-[11px] font-medium text-muted">Faster Response</span>
            </span>
          </div>

          <div
            data-cg-chip=""
            data-cg-chip-b=""
            className="absolute -right-2 bottom-10 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:right-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E38A19]/10 text-[#C26F0B]">
              <Coins className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-sm font-extrabold text-ink">34%</span>
              <span className="block text-[11px] font-medium text-muted">Sales Productivity</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
