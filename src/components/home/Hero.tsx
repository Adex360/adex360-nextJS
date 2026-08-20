"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroIllustration from "../../../public/images/hero-section.png";

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: 2 + (i % 3),
  delay: (i % 6) * 0.3,
}));

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-orb", { scale: 0, opacity: 0, duration: 1, stagger: 0.15 })
        .from(".hero-particle", { opacity: 0, duration: 0.6, stagger: 0.02 }, "-=0.6")
        .from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.5 }, "-=0.25")
        .from(
          ".hero-heading-line",
          { yPercent: 120, duration: 0.8, stagger: 0.12, ease: "power4.out" },
          "-=0.2"
        )
        .from(".hero-paragraph", { y: 20, opacity: 0, duration: 0.6 }, "-=0.35")
        .from(".hero-cta", { y: 20, opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.3")
        .from(
          ".hero-illustration",
          { x: 60, opacity: 0, scale: 0.92, duration: 1, ease: "power4.out" },
          "-=0.7"
        )
        .from(".hero-ring", { scale: 0.7, opacity: 0, duration: 1 }, "-=0.8");

      gsap.to(".hero-illustration", {
        y: -14,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".hero-ring", {
        rotate: 360,
        duration: 26,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".hero-glow", {
        scale: 1.15,
        opacity: 0.9,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".hero-orb-1", {
        x: 24,
        y: 34,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-orb-2", {
        x: -28,
        y: -18,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-particle", {
        opacity: () => gsap.utils.random(0.15, 0.9),
        duration: () => gsap.utils.random(1.5, 3.2),
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.15, from: "random" },
      });

      gsap.to(".hero-scan", {
        yPercent: 420,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        repeatDelay: 1.5,
      });

      gsap.to(".hero-cta", {
        boxShadow: "0 0 42px rgba(47,107,255,0.65)",
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      const xTo = gsap.quickTo(illustrationRef.current, "rotateY", {
        duration: 0.7,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(illustrationRef.current, "rotateX", {
        duration: 0.7,
        ease: "power3.out",
      });

      const handleMove = (e: MouseEvent) => {
        const rect = stageRef.current?.getBoundingClientRect();
        if (!rect) return;
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        xTo(relX * 14);
        yTo(relY * -14);
      };

      stageRef.current?.addEventListener("mousemove", handleMove);
      return () => stageRef.current?.removeEventListener("mousemove", handleMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-gradient relative -mt-20 overflow-hidden text-white"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-scan pointer-events-none absolute inset-x-0 top-[-40%] h-1/4 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="hero-orb hero-orb-1 pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="hero-orb hero-orb-2 pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-orange/20 blur-3xl" />

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hero-particle pointer-events-none absolute rounded-full bg-white/70"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 sm:pb-20 lg:grid-cols-2 lg:gap-12 lg:pt-44 lg:pb-28 lg:px-8">
        <div>
          <p className="hero-eyebrow text-xs font-semibold uppercase tracking-widest text-white/80">
            Your Trusted Digital Marketing Wingman
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="block overflow-hidden">
              <span className="hero-heading-line block">
                Best Digital Marketing Agency in
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-heading-line block text-brand-orange [text-shadow:0_0_30px_rgba(247,148,30,0.55)]">
                Pakistan
              </span>
            </span>
          </h1>

          <p className="hero-paragraph mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Welcome to Adex360, your 360-degree solution for all your marketing and
            web development needs. Here, we have transformed into helpful growth
            partners with a data-driven approach, tailored digital marketing, and
            performance marketing strategies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact-us"
              className="hero-cta inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold shadow-lg shadow-brand-blue/40 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Lead The Digital Game
            </Link>
          </div>
        </div>

        <div
          ref={stageRef}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          style={{ perspective: "1200px" }}
        >
          <div className="hero-glow pointer-events-none absolute inset-8 rounded-full bg-gradient-to-br from-brand-orange/40 via-brand-blue/30 to-transparent blur-3xl" />
          <svg
            viewBox="0 0 100 100"
            className="hero-ring pointer-events-none absolute inset-0 h-full w-full opacity-40"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#hero-ring-gradient)"
              strokeWidth="0.4"
              strokeDasharray="2 4"
            />
            <defs>
              <linearGradient id="hero-ring-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f7941e" />
                <stop offset="100%" stopColor="#5b8bff" />
              </linearGradient>
            </defs>
          </svg>
          <div ref={illustrationRef} className="hero-illustration relative">
            <Image
              src={heroIllustration}
              alt="Adex360 launching your brand's digital growth"
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="h-auto w-full drop-shadow-[0_30px_60px_rgba(20,15,69,0.55)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
