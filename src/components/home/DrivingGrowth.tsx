"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, MousePointerClick, TrendingUp } from "lucide-react";
import whoWeAre from "../../../public/images/Who-we-are.png";

gsap.registerPlugin(ScrollTrigger);

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const points = [
  {
    title: "Conversions",
    description: "250% increase for Orient Textiles in 7 months",
  },
  {
    title: "Organic Clicks",
    description: "500% increase for Hemani in 9 months",
  },
];

export default function DrivingGrowth() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // --- Entrance choreography (left column) ---
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 72%", toggleActions: "play none none reverse" },
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.fromTo("[data-gg-eyebrow]", { y: 18, opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(
          "[data-gg-line]",
          { yPercent: 115 },
          { yPercent: 0, duration: 0.85, stagger: 0.14, ease: "power4.out" },
          "-=0.35"
        )
        .fromTo("[data-gg-para]", { y: 22, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.4")
        .fromTo(
          "[data-gg-point]",
          { x: -32, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.16 },
          "-=0.3"
        )
        .fromTo(
          "[data-gg-badge]",
          { scale: 0 },
          { scale: 1, stagger: 0.16, duration: 0.5, ease: "back.out(2.2)" },
          "<+0.1"
        )
        .fromTo(
          "[data-gg-card]",
          { scale: 0.75, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.6)" },
          "-=0.35"
        )
        .fromTo(
          "[data-growth-ring]",
          { strokeDashoffset: CIRCUMFERENCE },
          { strokeDashoffset: 0, duration: 1.6, ease: "power2.out" },
          "-=0.2"
        );

      // --- Entrance (right column) ---
      gsap.timeline({
        scrollTrigger: { trigger: "[data-gg-visual]", start: "top 75%", toggleActions: "play none none reverse" },
        defaults: { ease: "power3.out" },
      })
        .fromTo(
          "[data-gg-image]",
          { x: 70, opacity: 0, scale: 0.94 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power4.out" }
        )
        .fromTo(
          "[data-gg-chip]",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.15, duration: 0.55, ease: "back.out(2)" },
          "-=0.4"
        );

      // --- Ambient loops ---
      gsap.to("[data-gg-card]", {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.6,
      });
      gsap.to("[data-gg-chip-a]", {
        y: -12,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to("[data-gg-chip-b]", {
        y: 10,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to("[data-gg-orbit]", { rotate: 360, duration: 30, ease: "none", repeat: -1 });
      gsap.to("[data-gg-dot]", { rotate: 360, duration: 6, ease: "none", repeat: -1 });

      // --- Scroll parallax (depth between layers) ---
      gsap.to("[data-gg-image]", {
        y: -36,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.to("[data-gg-chip-a]", {
        yPercent: -55,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1.4 },
      });
      gsap.to("[data-gg-chip-b]", {
        yPercent: 40,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1.8 },
      });
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
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div
        ref={rootRef}
        className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2"
      >
        <div>
          <span
            data-gg-eyebrow=""
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-blue" />
            Who We Are
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            <span className="block overflow-hidden pb-1">
              <span data-gg-line="" className="block">
                Driving Digital Growth
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-gg-line="" className="block">
                with{" "}
                <span className="bg-gradient-to-r from-[#F7B45C] to-[#E38A19] bg-clip-text text-transparent">
                  Proven Expertise
                </span>
              </span>
            </span>
          </h2>

          <p data-gg-para="" className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            The answer is simple. As a digital marketing agency, pride in
            producing exceptional results; we don&apos;t rest until we achieve
            them. Through experiments, strategizing, and consistency, we fulfill
            our commitment to you, i.e. delivering success.
          </p>

          <div className="mt-10 grid grid-cols-1 items-start gap-8 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div className="space-y-5">
              {points.map((point) => (
                <div
                  key={point.title}
                  data-gg-point=""
                  className="flex items-start gap-4 rounded-2xl bg-white/70 p-4 shadow-sm shadow-brand-900/5 backdrop-blur"
                >
                  <span
                    data-gg-badge=""
                    className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-light to-brand-blue text-white shadow-lg shadow-brand-blue/40"
                  >
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-base font-bold text-ink">{point.title}</p>
                    <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-muted">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div data-gg-card="" className="relative w-52">
              <div className="rounded-3xl bg-gradient-to-br from-[#F7B45C] via-brand-blue-light to-brand-blue p-[1.5px] shadow-2xl shadow-brand-900/15">
                <div className="rounded-[calc(1.5rem-1.5px)] bg-white/95 p-6 text-center backdrop-blur">
                  <div className="relative mx-auto h-28 w-28">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="#eef1fb" strokeWidth="5" />
                      <circle
                        data-growth-ring=""
                        cx="50"
                        cy="50"
                        r={RADIUS}
                        fill="none"
                        stroke="url(#growthRingGrad)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={0}
                      />
                      <defs>
                        <linearGradient id="growthRingGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#5b8bff" />
                          <stop offset="100%" stopColor="#2f6bff" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div data-gg-dot="" className="pointer-events-none absolute inset-0">
                      <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E38A19] shadow shadow-[#E38A19]/50" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        data-counter="350"
                        data-counter-suffix="%"
                        className="text-2xl font-extrabold text-ink"
                      >
                        350%
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-bold text-ink">Increase in Conversions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-gg-visual="" className="relative mx-auto w-full max-w-xl lg:pl-6">
          <svg
            data-gg-orbit=""
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 m-auto h-[110%] w-[110%] opacity-30"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="url(#ggOrbitGrad)"
              strokeWidth="0.35"
              strokeDasharray="1.5 3.5"
            />
            <defs>
              <linearGradient id="ggOrbitGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E38A19" />
                <stop offset="100%" stopColor="#2f6bff" />
              </linearGradient>
            </defs>
          </svg>

          <div data-gg-image="" className="relative z-10">
            <Image
              src={whoWeAre}
              alt="The Adex360 team analyzing growth data and campaign performance"
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="h-auto w-full drop-shadow-[0_24px_48px_rgba(20,15,69,0.18)]"
            />
          </div>

          <div
            data-gg-chip=""
            data-gg-chip-a=""
            className="absolute -left-2 top-8 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E38A19]/10 text-[#C26F0B]">
              <TrendingUp className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-sm font-extrabold text-ink">+250%</span>
              <span className="block text-[11px] font-medium text-muted">Conversions</span>
            </span>
          </div>

          <div
            data-gg-chip=""
            data-gg-chip-b=""
            className="absolute -right-2 bottom-10 z-20 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:right-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <MousePointerClick className="h-4.5 w-4.5" />
            </span>
            <span>
              <span className="block text-sm font-extrabold text-ink">+500%</span>
              <span className="block text-[11px] font-medium text-muted">Organic Clicks</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
