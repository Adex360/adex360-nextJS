"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Bell,
  Heart,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const ARC_R = 18;
const ARC_CIRC = 2 * Math.PI * ARC_R;
const ARC_TARGET = ARC_CIRC * 0.4; // 60% filled

export default function SocialHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-smh-copy]",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }
      );
      tl.fromTo(
        "[data-smh-phone]",
        { y: 64, opacity: 0, rotate: 5 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.9, ease: "back.out(1.3)" },
        0.3
      );
      tl.fromTo(
        "[data-smh-chip]",
        { y: 28, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.14, ease: "back.out(1.7)" },
        0.75
      );
      tl.fromTo(
        "[data-smh-arc]",
        { strokeDashoffset: ARC_CIRC },
        { strokeDashoffset: ARC_TARGET, duration: 1.3, ease: "power2.out" },
        0.9
      );

      // Ambient loops
      gsap.to("[data-smh-phone]", {
        y: -9,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
      gsap.utils.toArray<HTMLElement>("[data-smh-chip]").forEach((chip, i) => {
        gsap.to(chip, {
          yPercent: i % 2 === 0 ? -12 : 12,
          duration: 2.3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.6,
        });
      });
      gsap.to("[data-smh-orbit]", {
        rotate: 360,
        duration: 46,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
      // Hearts float up out of the phone like live reactions.
      gsap.utils.toArray<HTMLElement>("[data-smh-heart]").forEach((heart, i) => {
        gsap
          .timeline({ repeat: -1, delay: 1.6 + i * 0.9, repeatDelay: 0.6 + i * 0.3 })
          .fromTo(
            heart,
            { y: 14, opacity: 0, scale: 0.5, x: 0 },
            { y: -28, opacity: 1, scale: 1, duration: 0.7, ease: "power1.out" }
          )
          .to(heart, {
            y: -86,
            x: i % 2 === 0 ? 14 : -12,
            opacity: 0,
            duration: 1.2,
            ease: "power1.in",
          });
      });
      gsap.to("[data-smh-glow]", {
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
      className="relative overflow-hidden bg-surface px-4 pt-10 pb-16 sm:px-6 md:pt-16 md:pb-20 lg:px-8"
    >
      <div
        data-smh-glow=""
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span
            data-smh-copy=""
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Social Media Management
          </span>
          <h1
            data-smh-copy=""
            className="mt-5 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Mastering{" "}
            <span className="bg-gradient-to-r from-[#B45309] via-[#C26F0B] to-brand-blue bg-clip-text text-transparent">
              Meta-Focused
            </span>{" "}
            Social Media Success
          </h1>
          <p
            data-smh-copy=""
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0"
          >
            Adex360 provides expert, meta-savvy social media strategies that
            amplify voices, spark engagement, and turn clicks into connections.
          </p>
          <div data-smh-copy="" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5"
            >
              Boost My Socials
            </Link>
          </div>
        </div>

        <div data-parallax="6" aria-hidden="true" className="relative mx-auto w-full max-w-md">
          {/* Rotating dashed orbit */}
          <svg
            data-smh-orbit=""
            viewBox="0 0 400 400"
            aria-hidden="true"
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

          {/* Phone mockup */}
          <div data-smh-phone="" className="relative z-10 mx-auto w-60 sm:w-64">
            <div className="rounded-[2.6rem] border border-[#E4E8F3] bg-white p-2.5 shadow-2xl shadow-brand-900/15">
              <div className="overflow-hidden rounded-[2rem] bg-surface p-3">
                <div className="mx-auto h-1.5 w-16 rounded-full bg-ink/10" />

                <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-gradient-to-br from-[#F7B45C] to-[#E38A19]" />
                    <span className="space-y-1">
                      <span className="block h-1.5 w-16 rounded-full bg-ink/15" />
                      <span className="block h-1.5 w-10 rounded-full bg-ink/10" />
                    </span>
                  </div>
                  <div className="mt-3 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-blue-light to-[#F7B45C]">
                    <Sparkles className="h-9 w-9 text-white/90" />
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-ink/70">
                    <Heart className="h-4 w-4 fill-red-400 text-red-400" />
                    <MessageCircle className="h-4 w-4" />
                    <Send className="h-4 w-4" />
                    <span className="ml-auto text-[10px] font-bold text-ink">12.4K</span>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-600" />
                    <span className="space-y-1">
                      <span className="block h-1.5 w-20 rounded-full bg-ink/15" />
                      <span className="block h-1.5 w-12 rounded-full bg-ink/10" />
                    </span>
                  </div>
                  <div className="mt-3 h-10 rounded-xl bg-gradient-to-r from-surface to-brand-blue/10" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating reaction hearts */}
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              data-smh-heart=""
              aria-hidden="true"
              className={`pointer-events-none absolute z-20 opacity-0 ${
                ["right-10 top-1/2", "right-16 top-[58%]", "right-6 top-[46%]"][i]
              }`}
            >
              <Heart
                className={`fill-current ${
                  ["h-5 w-5 text-red-400", "h-4 w-4 text-[#E38A19]", "h-3.5 w-3.5 text-brand-blue"][i]
                }`}
              />
            </span>
          ))}

          {/* 60% engagement donut chip */}
          <div
            data-smh-chip=""
            className="absolute -left-2 top-8 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <div className="relative h-12 w-12">
              <svg viewBox="0 0 48 48" className="h-full w-full -rotate-90">
                <circle cx="24" cy="24" r={ARC_R} fill="none" stroke="#eef1fb" strokeWidth="6" />
                <circle
                  data-smh-arc=""
                  cx="24"
                  cy="24"
                  r={ARC_R}
                  fill="none"
                  stroke="#E38A19"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={ARC_CIRC}
                  strokeDashoffset={ARC_TARGET}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-ink">
                60%
              </span>
            </div>
            <span className="text-xs font-semibold leading-tight text-muted">
              Engagement
              <br />
              <span className="font-bold text-ink">Increased</span>
            </span>
          </div>

          {/* Followers chip */}
          <div
            data-smh-chip=""
            className="absolute -right-2 bottom-20 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-900/10 sm:right-0"
          >
            <span className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#F7B45C] to-[#E38A19] ring-2 ring-white" />
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-600 ring-2 ring-white" />
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-brand-600 to-brand-900 ring-2 ring-white" />
            </span>
            <span className="text-xs font-bold text-ink">
              +2.4K
              <br />
              <span className="font-medium text-muted">Followers</span>
            </span>
          </div>

          {/* Mentions chip */}
          <div
            data-smh-chip=""
            className="absolute -left-3 bottom-4 z-20 flex items-center gap-2 rounded-2xl bg-brand-950 px-4 py-2.5 text-white shadow-xl shadow-brand-900/30 sm:left-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-[#F7B45C]">
              <Bell className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold leading-tight">
              48 New
              <br />
              <span className="font-medium text-white/60">Mentions</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
