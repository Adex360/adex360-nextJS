"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Coins, Rocket, Target, TrendingUp } from "lucide-react";
import { pickShape } from "@/lib/blobShapes";

const ARC_R = 24;
const ARC_CIRC = 2 * Math.PI * ARC_R;
const ARC_TARGET = ARC_CIRC * 0.08; // 92% filled

export default function PerformanceHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-ph-copy]",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }
      );
      tl.fromTo(
        "[data-ph-blob]",
        { scale: 0.7, opacity: 0, rotate: -8 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" },
        0.25
      );
      tl.fromTo(
        "[data-ph-arc]",
        { strokeDashoffset: ARC_CIRC },
        { strokeDashoffset: ARC_TARGET, duration: 1.4, ease: "power2.out" },
        0.7
      );
      tl.fromTo(
        "[data-ph-chip]",
        { y: 28, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
        0.9
      );
      tl.fromTo(
        "[data-ph-rocket]",
        { scale: 0, rotate: -45, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" },
        1.1
      );

      // Cycle the blob through a fresh random CSS shape family every 3s.
      // (Standing site convention — see src/lib/blobShapes.ts.)
      let lastShapeIdx = -1;
      const morph = () => {
        const picked = pickShape(lastShapeIdx);
        lastShapeIdx = picked.idx;
        gsap.to("[data-ph-blob]", {
          borderRadius: picked.shape.radius,
          rotate: picked.shape.rotate,
          skewX: picked.shape.skewX,
          scale: picked.shape.scale,
          duration: 1.1,
          ease: "elastic.out(1, 0.7)",
        });
        gsap.to("[data-ph-icon-wrap]", {
          rotate: -picked.shape.rotate,
          skewX: -picked.shape.skewX,
          duration: 1.1,
          ease: "elastic.out(1, 0.7)",
        });
        gsap.delayedCall(3, morph);
      };
      gsap.delayedCall(3, morph);

      // Ambient loops
      gsap.to("[data-ph-icon]", {
        y: -9,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.utils.toArray<HTMLElement>("[data-ph-chip]").forEach((chip, i) => {
        gsap.to(chip, {
          yPercent: i % 2 === 0 ? -12 : 12,
          duration: 2.4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.4,
        });
      });
      gsap.to("[data-ph-rocket]", {
        y: -7,
        rotate: 8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
      gsap.to("[data-ph-orbit]", {
        rotate: 360,
        duration: 44,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
      gsap.to("[data-ph-square]", {
        rotate: 90,
        y: 14,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-ph-plus]", {
        y: -12,
        rotate: 180,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-ph-glow]", {
        x: -34,
        y: 22,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-surface px-4 pt-10 pb-14 sm:px-6 md:pt-16 md:pb-20 lg:px-8"
    >
      <div
        data-ph-glow=""
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div
        data-ph-square=""
        className="pointer-events-none absolute left-8 top-24 hidden h-6 w-6 rotate-12 border-2 border-[#E38A19]/40 lg:block"
      />
      <div
        data-ph-plus=""
        className="pointer-events-none absolute bottom-16 left-16 hidden text-2xl font-bold text-emerald-400/60 lg:block"
      >
        +
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1
            data-ph-copy=""
            className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Maximize ROI,{" "}
            <span className="text-[#E38A19] underline decoration-[#E38A19]/40 decoration-4 underline-offset-8">
              Amplify
            </span>{" "}
            Growth
          </h1>
          <p
            data-ph-copy=""
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0"
          >
            Drive targeted traffic, optimize conversions, and maximize ROI with
            data-driven performance marketing strategies designed for scalable
            growth.
          </p>
          <div data-ph-copy="" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Power Up Your Ads
            </Link>
          </div>
        </div>

        <div data-parallax="6" aria-hidden="true" className="relative mx-auto w-full max-w-md">
          {/* Rotating dashed orbit */}
          <svg
            data-ph-orbit=""
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-brand-blue/20 xs:-inset-8 xs:h-[calc(100%+4rem)] xs:w-[calc(100%+4rem)]"
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

          <div
            data-ph-blob=""
            className="flex aspect-square items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #FAE3BE 0%, #F5D6A8 45%, #C7D6F7 100%)",
              borderRadius: "44% 56% 52% 48% / 52% 46% 54% 48%",
            }}
          >
            <span data-ph-icon-wrap="" className="flex">
              <span data-ph-icon="" className="flex">
                <TrendingUp className="h-28 w-28 text-ink/70" strokeWidth={1.2} />
              </span>
            </span>
          </div>

          <div
            data-ph-chip=""
            className="absolute -left-2 top-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <div className="relative h-14 w-14">
              <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
                <circle cx="30" cy="30" r={ARC_R} fill="none" stroke="#eef1fb" strokeWidth="7" />
                <circle
                  data-ph-arc=""
                  cx="30"
                  cy="30"
                  r={ARC_R}
                  fill="none"
                  stroke="#E38A19"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={ARC_CIRC}
                  strokeDashoffset={ARC_TARGET}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-ink">
                92%
              </span>
            </div>
            <span className="text-xs font-semibold text-muted">
              Client
              <br />
              Retention
            </span>
          </div>

          <div
            data-ph-chip=""
            className="absolute -right-2 bottom-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:right-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <Coins className="h-4.5 w-4.5" />
            </span>
            <span className="text-xs font-bold text-ink">
              Optimized
              <br />
              <span className="font-medium text-muted">Ad Spend</span>
            </span>
          </div>

          <span
            data-ph-rocket=""
            className="absolute -top-3 right-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40"
          >
            <Rocket className="h-5 w-5" />
          </span>

          <span className="absolute left-4 bottom-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#C26F0B] shadow-lg shadow-brand-900/10">
            <Target className="h-4.5 w-4.5" />
          </span>
        </div>
      </div>
    </section>
  );
}
