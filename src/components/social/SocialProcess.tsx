"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Megaphone, NotebookPen, Send, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: NotebookPen,
    title: "Strategize",
    description:
      "We study your brand, audience and competitors to craft a platform-perfect social strategy.",
    offset: "lg:mt-0",
    badge: "01",
    badgePos: "-right-1 bottom-1",
  },
  {
    icon: Megaphone,
    title: "Execute",
    description:
      "Content, campaigns and community management roll out across all your channels.",
    offset: "lg:mt-24",
    badge: "02",
    badgePos: "-right-1 top-1",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description:
      "We track engagement, double down on what works and scale your social presence.",
    offset: "lg:mt-6",
    badge: "03",
    badgePos: "-right-1 bottom-1",
  },
];

const PATH_D =
  "M 30 260 C 140 240 160 150 260 150 C 360 150 380 250 600 255 C 760 258 780 170 900 160 C 1000 152 1060 110 1150 55";

export default function SocialProcess() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const maskPath = root.querySelector<SVGPathElement>("[data-smp-mask-path]");
      if (maskPath) {
        const len = maskPath.getTotalLength();
        maskPath.style.strokeDasharray = String(len);
        maskPath.style.strokeDashoffset = String(len);
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 70%", toggleActions: "play none none reverse" },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo("[data-smp-eyebrow]", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(
          "[data-smp-heading]",
          { yPercent: 115 },
          { yPercent: 0, duration: 0.8, ease: "power4.out" },
          "-=0.25"
        );

      if (maskPath) {
        tl.to(maskPath, { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" }, "path");
      } else {
        tl.addLabel("path");
      }

      gsap.utils.toArray<HTMLElement>("[data-smp-step]", root).forEach((el, i) => {
        const at = `path+=${0.15 + i * 0.6}`;
        tl.fromTo(el, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, at).fromTo(
          el.querySelector("[data-smp-badge]"),
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: "back.out(2.4)" },
          `${at}+=0.25`
        );
      });

      tl.fromTo(
        "[data-smp-plane]",
        { scale: 0, opacity: 0, rotate: -30 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: "back.out(2)" },
        "path+=1.8"
      );

      gsap.to("[data-smp-plane]", {
        y: -10,
        x: 6,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.5,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div ref={rootRef} className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p data-smp-eyebrow="" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Work Flow
          </p>
          <h2 className="mt-3 overflow-hidden pb-1 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            <span data-smp-heading="" className="block">
              Our Social Media Operation
            </span>
          </h2>
        </div>

        <div className="relative mt-16 lg:mt-10">
          <svg
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[320px] w-full lg:block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="smpPathGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1200" y2="0">
                <stop offset="0%" stopColor="#E38A19" />
                <stop offset="30%" stopColor="#F7B45C" />
                <stop offset="55%" stopColor="#8FB0FF" />
                <stop offset="78%" stopColor="#5B8BFF" />
                <stop offset="100%" stopColor="#2F6BFF" />
              </linearGradient>
            </defs>
            <mask id="smpPathMask" maskUnits="userSpaceOnUse">
              <path
                data-smp-mask-path=""
                d={PATH_D}
                fill="none"
                stroke="#ffffff"
                strokeWidth="14"
                strokeLinecap="round"
              />
            </mask>
            <path
              d={PATH_D}
              fill="none"
              stroke="url(#smpPathGrad)"
              strokeWidth="2.5"
              strokeDasharray="7 9"
              strokeLinecap="round"
              mask="url(#smpPathMask)"
            />
          </svg>

          <span
            data-smp-plane=""
            className="absolute -top-4 right-0 hidden text-sky-400 lg:block"
            aria-hidden="true"
          >
            <Send className="h-9 w-9 -rotate-12" strokeWidth={1.5} />
          </span>

          <div className="relative z-10 grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8">
            {steps.map((step) => (
              <div
                key={step.title}
                data-smp-step=""
                className={`flex flex-col items-center text-center ${step.offset}`}
              >
                <div className="relative">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-[0_10px_20px_rgba(20,15,69,0.10),0_24px_55px_rgba(20,15,69,0.18)] ring-1 ring-black/[0.07]">
                    <step.icon className="h-12 w-12 text-[#E38A19]" strokeWidth={1.4} />
                  </div>
                  <span
                    data-smp-badge=""
                    className={`absolute ${step.badgePos} flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-xs font-extrabold text-white shadow-lg shadow-brand-blue/40 ring-4 ring-white`}
                  >
                    {step.badge}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
