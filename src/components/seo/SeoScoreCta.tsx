"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Check, Gauge, Rocket, ShieldCheck, Zap } from "lucide-react";

const SCORE_RADIUS = 15;
const SCORE_CIRC = 2 * Math.PI * SCORE_RADIUS;

export default function SeoScoreCta() {
  const [sent, setSent] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Ambient loops — glows drift, rocket bobs, ring pulses, score chip floats.
      gsap.to("[data-sc-glow-a]", {
        x: 40,
        y: 24,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-sc-glow-b]", {
        x: -32,
        y: -20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-sc-rocket]", {
        y: -7,
        rotate: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-sc-ring]", {
        scale: 1.35,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: "power1.out",
      });
      gsap.to("[data-sc-score]", {
        y: 9,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.utils.toArray<HTMLElement>("[data-sc-spark]").forEach((s, i) => {
        gsap.to(s, {
          opacity: 0.15,
          scale: 0.6,
          duration: 1.2 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!sent || !rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      "[data-sc-success]",
      { scale: 0.85, opacity: 0, y: 12 },
      { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: "back.out(1.7)" }
    );
  }, [sent]);

  return (
    <section ref={rootRef} className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal="scale"
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-900 via-brand-700 to-brand-blue px-6 py-14 text-center text-white shadow-2xl shadow-brand-900/40 sm:px-10 md:py-16"
      >
        {/* Aurora glows */}
        <div
          data-sc-glow-a=""
          className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl"
        />
        <div
          data-sc-glow-b=""
          className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-[#E38A19]/35 blur-3xl"
        />
        {/* Dot grid texture — kept to the edges, faded away from the copy */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 45%, transparent 30%, black 85%)",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 45%, transparent 30%, black 85%)",
          }}
        />
        {/* Sparkles */}
        {[
          "left-[8%] top-[18%]",
          "left-[16%] bottom-[12%]",
          "right-[22%] top-[12%]",
          "right-[7%] bottom-[38%]",
        ].map((pos, i) => (
          <span
            key={i}
            data-sc-spark=""
            aria-hidden="true"
            className={`pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#F7B45C] ${pos}`}
          />
        ))}

        {/* Rocket badge */}
        <div aria-hidden="true" className="pointer-events-none absolute right-6 top-6 hidden sm:block md:right-10 md:top-8">
          <span
            data-sc-ring=""
            className="absolute inset-0 rounded-2xl border border-[#F7B45C]/60"
          />
          <span
            data-sc-rocket=""
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F7B45C] backdrop-blur-sm md:h-16 md:w-16"
          >
            <Rocket className="h-7 w-7 rotate-45 md:h-8 md:w-8" strokeWidth={1.4} />
          </span>
        </div>

        {/* Floating score chip */}
        <div
          data-sc-score=""
          aria-hidden="true"
          className="pointer-events-none absolute left-6 bottom-6 hidden items-center gap-3 rounded-2xl bg-white px-4 py-2.5 text-left shadow-xl shadow-black/30 md:flex lg:left-10"
        >
          <svg viewBox="0 0 40 40" className="h-10 w-10 -rotate-90" aria-hidden="true">
            <circle cx="20" cy="20" r={SCORE_RADIUS} fill="none" stroke="#EEF1FB" strokeWidth="5" />
            <circle
              cx="20"
              cy="20"
              r={SCORE_RADIUS}
              fill="none"
              stroke="#E38A19"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={SCORE_CIRC}
              strokeDashoffset={SCORE_CIRC * 0.08}
            />
          </svg>
          <div>
            <p className="text-sm font-extrabold leading-tight text-ink">92/100</p>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
              SEO Score
            </p>
          </div>
        </div>

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#F7B45C] ring-1 ring-white/15">
            <Gauge className="h-3.5 w-3.5" />
            Free SEO Audit
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Check Your Website&apos;s SEO Score{" "}
            <span className="bg-gradient-to-r from-[#F7B45C] to-[#E38A19] bg-clip-text text-transparent">
              For Free!
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60">
            Drop your URL below and our experts will send a detailed report on
            what&apos;s holding your rankings back — and how to fix it.
          </p>

          {sent ? (
            <div
              data-sc-success=""
              className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-white/10 px-6 py-5 ring-1 ring-white/15 backdrop-blur-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Check className="h-5 w-5" strokeWidth={3} />
              </span>
              <p className="text-left text-sm font-semibold">
                Thanks! We&apos;ll email your free SEO score report shortly.
              </p>
            </div>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-center"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO (Phase 5): wire to the contact/email API route.
                setSent(true);
              }}
            >
              <input
                type="url"
                required
                placeholder="Web URL"
                aria-label="Website URL"
                className="w-full rounded-xl bg-white px-4 py-3.5 text-sm text-ink shadow-lg shadow-black/15 placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-[#F7B45C]/70"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                aria-label="Email address"
                className="w-full rounded-xl bg-white px-4 py-3.5 text-sm text-ink shadow-lg shadow-black/15 placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-[#F7B45C]/70"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F7B45C] to-[#E38A19] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E38A19]/30 transition-transform hover:-translate-y-0.5"
              >
                <Zap className="h-4 w-4" />
                Check
              </button>
            </form>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs font-medium text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              100% free — no credit card
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[#F7B45C]" />
              Report within 24 hours
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              Actionable fixes included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
