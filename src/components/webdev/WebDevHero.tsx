"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Code2, Layers, Sparkles } from "lucide-react";
import { pickShape } from "@/lib/blobShapes";

const ARC_R = 24;
const ARC_CIRC = 2 * Math.PI * ARC_R;
const ARC_TARGET = ARC_CIRC * 0.3; // 70% filled

export default function WebDevHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-wh-copy]",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }
      );
      tl.fromTo(
        "[data-wh-blob]",
        { scale: 0.7, opacity: 0, rotate: -8 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" },
        0.25
      );
      tl.fromTo(
        "[data-wh-arc]",
        { strokeDashoffset: ARC_CIRC },
        { strokeDashoffset: ARC_TARGET, duration: 1.4, ease: "power2.out" },
        0.7
      );
      tl.fromTo(
        "[data-wh-chip]",
        { y: 28, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
        0.9
      );

      // Cycle the blob through a fresh random CSS shape family every 3s.
      // (Standing site convention — see src/lib/blobShapes.ts.)
      let lastShapeIdx = -1;
      const morph = () => {
        const picked = pickShape(lastShapeIdx);
        lastShapeIdx = picked.idx;
        gsap.to("[data-wh-blob]", {
          borderRadius: picked.shape.radius,
          rotate: picked.shape.rotate,
          skewX: picked.shape.skewX,
          scale: picked.shape.scale,
          duration: 1.1,
          ease: "elastic.out(1, 0.7)",
        });
        gsap.to("[data-wh-icon-wrap]", {
          rotate: -picked.shape.rotate,
          skewX: -picked.shape.skewX,
          duration: 1.1,
          ease: "elastic.out(1, 0.7)",
        });
        gsap.delayedCall(3, morph);
      };
      gsap.delayedCall(3, morph);

      gsap.to("[data-wh-icon]", {
        y: -9,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.utils.toArray<HTMLElement>("[data-wh-chip]").forEach((chip, i) => {
        gsap.to(chip, {
          yPercent: i % 2 === 0 ? -12 : 12,
          duration: 2.4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.4,
        });
      });
      gsap.to("[data-wh-orbit]", {
        rotate: 360,
        duration: 44,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
      gsap.to("[data-wh-triangle]", {
        y: 14,
        rotate: 12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-wh-plus]", {
        y: -12,
        rotate: 180,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-wh-glow]", {
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
        data-wh-glow=""
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div
        data-wh-triangle=""
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-24 hidden lg:block"
      >
        <svg width="52" height="46" viewBox="0 0 52 46" className="text-[#E38A19]/25">
          <path d="M26 0 52 46 0 46Z" fill="currentColor" />
        </svg>
      </div>
      <div
        data-wh-plus=""
        className="pointer-events-none absolute bottom-16 left-16 hidden text-2xl font-bold text-emerald-400/60 lg:block"
      >
        +
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1
            data-wh-copy=""
            className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Crafting Code,{" "}
            <span className="text-[#E38A19] underline decoration-[#E38A19]/40 decoration-4 underline-offset-8">
              Building
            </span>{" "}
            Futures
          </h1>
          <p
            data-wh-copy=""
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0"
          >
            Adex360 develops websites that are as powerful as creative &mdash;
            because your business deserves the best.
          </p>
          <div data-wh-copy="" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Let&apos;s Build It
            </Link>
          </div>
        </div>

        <div data-parallax="6" aria-hidden="true" className="relative mx-auto w-full max-w-md">
          <svg
            data-wh-orbit=""
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
            data-wh-blob=""
            className="flex aspect-square items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #FAE3BE 0%, #F5D6A8 45%, #C7D6F7 100%)",
              borderRadius: "44% 56% 52% 48% / 52% 46% 54% 48%",
            }}
          >
            <span data-wh-icon-wrap="" className="flex">
              <span data-wh-icon="" className="flex">
                <Code2 className="h-28 w-28 text-ink/70" strokeWidth={1.2} />
              </span>
            </span>
          </div>

          <div
            data-wh-chip=""
            className="absolute -left-2 top-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <div className="relative h-14 w-14">
              <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
                <circle cx="30" cy="30" r={ARC_R} fill="none" stroke="#eef1fb" strokeWidth="7" />
                <circle
                  data-wh-arc=""
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
                70%
              </span>
            </div>
            <span className="text-xs font-semibold text-muted">
              Website Impressions
              <br />
              Increased
            </span>
          </div>

          <div
            data-wh-chip=""
            className="absolute -right-2 bottom-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:right-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <Layers className="h-4.5 w-4.5" />
            </span>
            <span className="text-xs font-bold text-ink">
              Built To
              <br />
              <span className="font-medium text-muted">Scale</span>
            </span>
          </div>

          <span className="absolute left-4 bottom-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#C26F0B] shadow-lg shadow-brand-900/10">
            <Sparkles className="h-4.5 w-4.5" />
          </span>
        </div>
      </div>
    </section>
  );
}
