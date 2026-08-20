"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Layers, ShoppingBag, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    title: "Diverse Range of Apps",
    description: "Universal Product Feed, Pushbot, and Mailbot—powerful Shopify apps built for growth. Need custom? We create it!",
  },
  {
    title: "100% Seamless User Experience",
    description: "Our apps are custom-built, integrating third-party APIs, seamless UI/UX, and technical optimizations for a smooth, uninterrupted experience.",
  },
];

export default function ShopifyGrowth() {
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

      tl.fromTo("[data-sg-eyebrow]", { y: 18, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          "[data-sg-line]",
          { yPercent: 115 },
          { yPercent: 0, duration: 0.85, stagger: 0.14, ease: "power4.out" },
          "-=0.35"
        )
        .fromTo("[data-sg-para]", { y: 22, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4")
        .fromTo(
          "[data-sg-point]",
          { x: -32, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.16 },
          "-=0.3"
        )
        .fromTo(
          "[data-sg-badge]",
          { scale: 0 },
          { scale: 1, stagger: 0.16, duration: 0.5, ease: "back.out(2.2)" },
          "<+0.1"
        );

      gsap.timeline({
        scrollTrigger: { trigger: "[data-sg-visual]", start: "top 75%", toggleActions: "play none none reverse" },
        defaults: { ease: "power3.out" },
      })
        .fromTo(
          "[data-sg-blob]",
          { x: 70, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
        )
        .fromTo(
          "[data-sg-chip]",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.15, duration: 0.55, ease: "back.out(2)" },
          "-=0.4"
        );

      gsap.to("[data-sg-icon]", { y: -8, duration: 2.6, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to("[data-sg-chip-a]", { yPercent: -55, duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.2 });
      gsap.to("[data-sg-chip-b]", { yPercent: 45, duration: 2.6, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.2 });
      gsap.to("[data-sg-orbit]", { rotate: 360, duration: 30, ease: "none", repeat: -1 });
      gsap.to("[data-sg-dot]", { rotate: 360, duration: 6, ease: "none", repeat: -1 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-surface-alt px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div
        className="pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(47,107,255,0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at 0% 0%, #000 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 0% 0%, #000 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#6B4EE6]/10 blur-3xl" />

      <div
        ref={rootRef}
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2"
      >
        <div>
          <span
            data-sg-eyebrow=""
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-blue" />
            Why Our Shopify Apps Stand Out
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            <span className="block overflow-hidden pb-1">
              <span data-sg-line="" className="block">
                Apps That Work Smarter,
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-sg-line="" className="block">
                So You{" "}
                <span className="bg-gradient-to-r from-brand-blue to-[#6B4EE6] bg-clip-text text-transparent">
                  Don&apos;t Have To
                </span>
              </span>
            </span>
          </h2>

          <p data-sg-para="" className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Adex&apos;s expert developers craft high-functionality Shopify
            apps tailored to your business needs. Through research and
            innovation, we enhance user experience, efficiency, and
            conversions, ensuring seamless integration of your unique brand
            values into every development.
          </p>

          <div className="mt-8 space-y-5">
            {points.map((point) => (
              <div
                key={point.title}
                data-sg-point=""
                className="flex items-start gap-4 rounded-2xl bg-white/70 p-4 shadow-sm shadow-brand-900/5 backdrop-blur"
              >
                <span
                  data-sg-badge=""
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

        <div data-sg-visual="" aria-hidden="true" className="relative mx-auto w-full max-w-md">
          <svg
            data-sg-orbit=""
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 m-auto h-[110%] w-[110%] opacity-30"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="url(#sgOrbitGrad)"
              strokeWidth="0.35"
              strokeDasharray="1.5 3.5"
            />
            <defs>
              <linearGradient id="sgOrbitGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6B4EE6" />
                <stop offset="100%" stopColor="#2f6bff" />
              </linearGradient>
            </defs>
          </svg>

          <div
            data-sg-blob=""
            className="relative z-10 flex aspect-square items-center justify-center rounded-[3rem]"
            style={{
              background: "linear-gradient(135deg, #C7D6F7 0%, #A8B6F0 45%, #6B4EE6 100%)",
            }}
          >
            <div data-sg-dot="" className="pointer-events-none absolute inset-0">
              <span className="absolute left-1/2 top-3 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow shadow-white/50" />
            </div>
            <span data-sg-icon="" className="flex">
              <Layers className="h-28 w-28 text-white/80" strokeWidth={1.2} />
            </span>
          </div>

          <div
            data-sg-chip=""
            data-sg-chip-a=""
            className="absolute -left-2 top-8 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <ShoppingBag className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-sm font-extrabold text-ink">3+</span>
              <span className="block text-[11px] font-medium text-muted">Apps Built</span>
            </span>
          </div>

          <div
            data-sg-chip=""
            data-sg-chip-b=""
            className="absolute -right-2 bottom-10 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:right-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6B4EE6]/10 text-[#6B4EE6]">
              <Sparkles className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-sm font-extrabold text-ink">100%</span>
              <span className="block text-[11px] font-medium text-muted">Seamless UX</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
