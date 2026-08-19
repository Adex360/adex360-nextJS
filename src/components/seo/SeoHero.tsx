"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Rocket, Search, TrendingUp } from "lucide-react";

const DONUT_R = 24;
const DONUT_CIRC = 2 * Math.PI * DONUT_R;

export default function SeoHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-sh-copy]",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }
      );
      tl.fromTo(
        "[data-sh-blob]",
        { scale: 0.7, opacity: 0, rotate: -8 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" },
        0.25
      );
      tl.fromTo(
        "[data-sh-arc]",
        { strokeDashoffset: DONUT_CIRC },
        { strokeDashoffset: DONUT_CIRC * 0.25, duration: 1.4, ease: "power2.out" },
        0.7
      );
      tl.fromTo(
        "[data-sh-chip]",
        { y: 26, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.6)" },
        0.65
      );
      tl.fromTo(
        "[data-sh-rocket]",
        { scale: 0, rotate: -45, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" },
        0.9
      );

      // Ambient loops
      gsap.to("[data-sh-blob]", {
        borderRadius: "52% 48% 44% 56% / 46% 54% 46% 54%",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
      gsap.to("[data-sh-icon]", {
        y: -10,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.utils.toArray<HTMLElement>("[data-sh-chip]").forEach((chip, i) => {
        gsap.to(chip, {
          y: i % 2 === 0 ? -8 : 8,
          duration: 2.4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.4,
        });
      });
      gsap.to("[data-sh-rocket]", {
        y: -7,
        rotate: 8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
      gsap.to("[data-sh-square]", {
        rotate: 90,
        y: 14,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-sh-plus]", {
        y: -12,
        rotate: 180,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-sh-glow]", {
        x: -30,
        y: 26,
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
        data-sh-glow=""
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div
        data-sh-square=""
        className="pointer-events-none absolute left-8 top-24 hidden h-6 w-6 rotate-12 border-2 border-[#E38A19]/40 lg:block"
      />
      <div
        data-sh-plus=""
        className="pointer-events-none absolute bottom-16 left-16 hidden text-2xl font-bold text-emerald-400/60 lg:block"
      >
        +
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1
            data-sh-copy=""
            className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Elevate rankings with{" "}
            <span className="text-[#E38A19] underline decoration-[#E38A19]/40 decoration-4 underline-offset-8">
              Adex360
            </span>{" "}
            SEO
          </h1>
          <p
            data-sh-copy=""
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0"
          >
            We ensure higher search rankings with expert SEO services, including
            On-Page and Off-Page optimization.
          </p>
          <div data-sh-copy="" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Rank #1 Today
            </Link>
          </div>
        </div>

        <div data-parallax="6" className="relative mx-auto w-full max-w-md">
          <div
            data-sh-blob=""
            className="flex aspect-square items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #FAE3BE 0%, #F5D6A8 45%, #C7D6F7 100%)",
              borderRadius: "44% 56% 52% 48% / 52% 46% 54% 48%",
            }}
          >
            <span data-sh-icon="" className="flex">
              <Search className="h-28 w-28 text-ink/70" strokeWidth={1.2} />
            </span>
          </div>

          <div
            data-sh-chip=""
            className="absolute -left-2 top-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <div className="relative h-14 w-14">
              <svg viewBox="0 0 60 60" className="h-full w-full -rotate-90">
                <circle cx="30" cy="30" r={DONUT_R} fill="none" stroke="#eef1fb" strokeWidth="7" />
                <circle
                  data-sh-arc=""
                  cx="30"
                  cy="30"
                  r={DONUT_R}
                  fill="none"
                  stroke="#E38A19"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={DONUT_CIRC}
                  strokeDashoffset={DONUT_CIRC * 0.25}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-ink">
                75%
              </span>
            </div>
            <span className="text-xs font-semibold text-muted">
              Organic
              <br />
              Growth
            </span>
          </div>

          <div
            data-sh-chip=""
            className="absolute -right-2 bottom-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:right-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <TrendingUp className="h-4.5 w-4.5" />
            </span>
            <span className="text-xs font-bold text-ink">
              Rank #1
              <br />
              <span className="font-medium text-muted">on Google</span>
            </span>
          </div>

          <span
            data-sh-rocket=""
            className="absolute -top-3 right-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40"
          >
            <Rocket className="h-5 w-5" />
          </span>
        </div>
      </div>
    </section>
  );
}
