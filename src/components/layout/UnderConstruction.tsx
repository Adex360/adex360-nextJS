"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowLeft,
  Cog,
  Construction,
  HardHat,
  Hammer,
  Wrench,
} from "lucide-react";

export default function UnderConstruction() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-uc-copy]",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }
      );
      tl.fromTo(
        "[data-uc-blob]",
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "back.out(1.4)" },
        0.25
      );
      tl.fromTo(
        "[data-uc-chip]",
        { y: 26, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.6)" },
        0.6
      );
      tl.fromTo(
        "[data-uc-bar]",
        { scaleX: 0 },
        { scaleX: 0.75, duration: 1.4, ease: "power2.out", transformOrigin: "left center" },
        0.9
      );

      // Ambient loops
      gsap.to("[data-uc-blob]", {
        borderRadius: "52% 48% 44% 56% / 46% 54% 46% 54%",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
      gsap.to("[data-uc-cog]", {
        rotate: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
      gsap.to("[data-uc-hammer]", {
        rotate: -22,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "bottom right",
        delay: 1.2,
      });
      gsap.utils.toArray<HTMLElement>("[data-uc-chip]").forEach((chip, i) => {
        gsap.to(chip, {
          yPercent: i % 2 === 0 ? -12 : 12,
          duration: 2.4 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.4,
        });
      });
      gsap.to("[data-uc-orbit]", {
        rotate: 360,
        duration: 44,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span
            data-uc-copy=""
            className="inline-flex items-center gap-1.5 rounded-full bg-[#E38A19]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#995607]"
          >
            <Construction className="h-3.5 w-3.5" />
            Coming Soon
          </span>
          <h1
            data-uc-copy=""
            className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            This page is{" "}
            <span className="text-[#C26F0B]">under construction</span>
          </h1>
          <p
            data-uc-copy=""
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0"
          >
            We&apos;re crafting something great here as part of our brand-new
            website. Check back soon — or explore what&apos;s already live.
          </p>

          <div data-uc-copy="" className="mx-auto mt-7 max-w-md lg:mx-0">
            <div className="flex items-center justify-between text-xs font-semibold text-muted">
              <span>Building this page&hellip;</span>
              <span>75%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white shadow-inner ring-1 ring-black/5">
              <div
                data-uc-bar=""
                className="h-full w-full rounded-full bg-gradient-to-r from-[#E38A19] via-[#F7B45C] to-brand-blue"
                style={{ transform: "scaleX(0.75)", transformOrigin: "left center" }}
              />
            </div>
          </div>

          <div data-uc-copy="" className="mt-8 flex flex-col items-center gap-3 xs:flex-row xs:justify-center lg:justify-start">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-[#B6BEDB] bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
          <svg
            data-uc-orbit=""
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
            data-uc-blob=""
            className="relative flex aspect-square items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #FAE3BE 0%, #F5D6A8 40%, #C7D6F7 100%)",
              borderRadius: "44% 56% 52% 48% / 52% 46% 54% 48%",
            }}
          >
            <span data-uc-cog="" className="absolute left-[22%] top-[24%] text-ink/30">
              <Cog className="h-12 w-12" strokeWidth={1.4} />
            </span>
            <Wrench className="h-24 w-24 text-ink/70" strokeWidth={1.25} />
            <span data-uc-hammer="" className="absolute right-[22%] bottom-[26%] text-ink/50">
              <Hammer className="h-12 w-12" strokeWidth={1.4} />
            </span>
          </div>

          <div
            data-uc-chip=""
            className="absolute -left-2 top-8 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E38A19]/10 text-[#C26F0B]">
              <HardHat className="h-4.5 w-4.5" />
            </span>
            <span className="text-xs font-bold text-ink">
              Work in
              <br />
              <span className="font-medium text-muted">progress</span>
            </span>
          </div>

          <div
            data-uc-chip=""
            className="absolute -right-2 bottom-10 flex items-center gap-2 rounded-2xl bg-brand-950 px-4 py-2.5 text-white shadow-xl shadow-brand-900/30 sm:right-0"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-bold">Launching soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
