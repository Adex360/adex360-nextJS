"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PieChart, Rocket, Sparkles } from "lucide-react";
import { pickShape } from "@/lib/blobShapes";

export default function CrmHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-ch-copy]",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }
      );
      tl.fromTo(
        "[data-ch-blob]",
        { scale: 0.7, opacity: 0, rotate: -8 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" },
        0.25
      );
      tl.fromTo(
        "[data-ch-chip]",
        { y: 28, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
        0.7
      );
      tl.fromTo(
        "[data-ch-rocket]",
        { scale: 0, rotate: -45, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" },
        0.9
      );

      // Cycle the blob through a fresh random CSS shape family every 3s.
      // (Standing site convention — see src/lib/blobShapes.ts.)
      let lastShapeIdx = -1;
      const morph = () => {
        const picked = pickShape(lastShapeIdx);
        lastShapeIdx = picked.idx;
        gsap.to("[data-ch-blob]", {
          borderRadius: picked.shape.radius,
          rotate: picked.shape.rotate,
          skewX: picked.shape.skewX,
          scale: picked.shape.scale,
          duration: 1.1,
          ease: "elastic.out(1, 0.7)",
        });
        gsap.to("[data-ch-icon-wrap]", {
          rotate: -picked.shape.rotate,
          skewX: -picked.shape.skewX,
          duration: 1.1,
          ease: "elastic.out(1, 0.7)",
        });
        gsap.delayedCall(3, morph);
      };
      gsap.delayedCall(3, morph);

      gsap.to("[data-ch-icon]", {
        y: -9,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-ch-chip]", {
        yPercent: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });
      gsap.to("[data-ch-rocket]", {
        y: -7,
        rotate: 8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
      gsap.to("[data-ch-orbit]", {
        rotate: 360,
        duration: 44,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });
      gsap.to("[data-ch-triangle]", {
        y: 14,
        rotate: 12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-ch-plus]", {
        y: -12,
        rotate: 180,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to("[data-ch-glow]", {
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
        data-ch-glow=""
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div
        data-ch-triangle=""
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-24 hidden lg:block"
      >
        <svg width="52" height="46" viewBox="0 0 52 46" className="text-[#E38A19]/25">
          <path d="M26 0 52 46 0 46Z" fill="currentColor" />
        </svg>
      </div>
      <div
        data-ch-plus=""
        className="pointer-events-none absolute bottom-16 left-16 hidden text-2xl font-bold text-emerald-400/60 lg:block"
      >
        +
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1
            data-ch-copy=""
            className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Effortless{" "}
            <span className="text-[#E38A19] underline decoration-[#E38A19]/40 decoration-4 underline-offset-8">
              CRM
            </span>
            , Limitless Growth
          </h1>
          <p
            data-ch-copy=""
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0"
          >
            Adex360 seamlessly integrates GoHighLevel CRM to automate
            workflows, enhance engagement, and drive scalable growth. Power up
            your business with smart CRM solutions.
          </p>
          <div data-ch-copy="" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Power Up Your CRM
            </Link>
          </div>
        </div>

        <div data-parallax="6" aria-hidden="true" className="relative mx-auto w-full max-w-md">
          <svg
            data-ch-orbit=""
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
            data-ch-blob=""
            className="flex aspect-square items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #C7D6F7 0%, #A8B6F0 45%, #6B4EE6 100%)",
              borderRadius: "44% 56% 52% 48% / 52% 46% 54% 48%",
            }}
          >
            <span data-ch-icon-wrap="" className="flex">
              <span data-ch-icon="" className="flex">
                <Rocket className="h-28 w-28 text-white/80" strokeWidth={1.2} />
              </span>
            </span>
          </div>

          <div
            data-ch-chip=""
            className="absolute -left-2 top-10 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-brand-900/10 sm:left-0"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <PieChart className="h-5 w-5" />
            </span>
            <span className="text-xs font-bold text-ink">
              CRM
              <br />
              <span className="font-medium text-muted">Automated</span>
            </span>
          </div>

          <span
            data-ch-rocket=""
            className="absolute -top-3 right-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40"
          >
            <Sparkles className="h-5 w-5" />
          </span>
        </div>
      </div>
    </section>
  );
}
