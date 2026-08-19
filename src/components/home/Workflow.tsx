"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardCheck, NotebookPen, Send, Settings2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: NotebookPen,
    title: "Strategy",
    description: "We audit your brand, market and competitors to build a data-backed roadmap.",
    offset: "lg:mt-0",
    badge: "01",
    badgePos: "-right-1 bottom-1",
  },
  {
    icon: ClipboardCheck,
    title: "Execution",
    description: "Our team launches campaigns, content and builds tailored to your goals.",
    offset: "lg:mt-24",
    badge: "02",
    badgePos: "-right-1 top-1",
  },
  {
    icon: Settings2,
    title: "Optimization",
    description: "We track, test and refine every touchpoint for compounding growth.",
    offset: "lg:mt-6",
    badge: "03",
    badgePos: "-right-1 bottom-1",
  },
];

const PATH_D =
  "M 30 260 C 140 240 160 150 260 150 C 360 150 380 250 600 255 C 760 258 780 170 900 160 C 1000 152 1060 110 1150 55";

export default function Workflow() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Prepare the dashed path draw: a solid path inside an SVG mask is
      // drawn via dashoffset, progressively unveiling the dashed line.
      const maskPath = root.querySelector<SVGPathElement>("[data-wf-mask-path]");
      if (maskPath) {
        const len = maskPath.getTotalLength();
        maskPath.style.strokeDasharray = String(len);
        maskPath.style.strokeDashoffset = String(len);
      }

      // Prepare icon strokes so they can draw themselves in.
      const iconShapes: SVGGeometryElement[] = [];
      root.querySelectorAll<SVGElement>("[data-wf-icon] svg *").forEach((el) => {
        if (el instanceof SVGGeometryElement) {
          const len = el.getTotalLength();
          el.style.strokeDasharray = String(len);
          el.style.strokeDashoffset = String(len);
          iconShapes.push(el);
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 70%", toggleActions: "play none none reverse" },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo("[data-wf-eyebrow]", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(
          "[data-wf-heading-line]",
          { yPercent: 115 },
          { yPercent: 0, duration: 0.8, ease: "power4.out" },
          "-=0.25"
        )
        .fromTo(
          "[data-wf-underline]",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );

      if (maskPath) {
        tl.to(maskPath, { strokeDashoffset: 0, duration: 2, ease: "power1.inOut" }, "path");
      } else {
        tl.addLabel("path");
      }

      const stepEls = gsap.utils.toArray<HTMLElement>("[data-wf-step]", root);
      stepEls.forEach((el, i) => {
        const at = `path+=${0.15 + i * 0.6}`;
        tl.fromTo(
          el,
          { y: 44, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          at
        ).fromTo(
          el.querySelector("[data-wf-badge]"),
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: "back.out(2.4)" },
          `${at}+=0.25`
        );
        const shapes = iconShapes.filter((s) => el.contains(s));
        if (shapes.length) {
          tl.to(
            shapes,
            { strokeDashoffset: 0, duration: 0.9, ease: "power2.out", stagger: 0.06 },
            `${at}+=0.1`
          );
        }
      });

      tl.fromTo(
        "[data-wf-plane]",
        { scale: 0, opacity: 0, rotate: -30 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.6, ease: "back.out(2)" },
        "path+=1.8"
      );

      // Ambient loops
      gsap.to("[data-wf-plane]", {
        y: -10,
        x: 6,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.5,
      });
      gsap.to("[data-wf-circle]", {
        y: -8,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        delay: 3,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#E38A19]/5 blur-3xl" />

      <div ref={rootRef} className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p
            data-wf-eyebrow=""
            className="text-xs font-semibold uppercase tracking-widest text-brand-blue"
          >
            Work Flow
          </p>
          <h2 className="mt-3 overflow-hidden pb-1 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            <span data-wf-heading-line="" className="block">
              This is How It&apos;s Done
            </span>
          </h2>
          <span
            data-wf-underline=""
            className="mx-auto mt-3 block h-1 w-16 origin-left rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-light"
          />
        </div>

        <div className="relative mt-16 lg:mt-10">
          <svg
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[320px] w-full lg:block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="wfPathGrad"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="1200"
                y2="0"
              >
                <stop offset="0%" stopColor="#E38A19" />
                <stop offset="30%" stopColor="#F7B45C" />
                <stop offset="55%" stopColor="#8FB0FF" />
                <stop offset="78%" stopColor="#5B8BFF" />
                <stop offset="100%" stopColor="#2F6BFF" />
              </linearGradient>
            </defs>
            <mask id="wfPathMask" maskUnits="userSpaceOnUse">
              <path
                data-wf-mask-path=""
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
              stroke="url(#wfPathGrad)"
              strokeWidth="2.5"
              strokeDasharray="7 9"
              strokeLinecap="round"
              mask="url(#wfPathMask)"
            />
          </svg>

          <span className="absolute -left-1 bottom-8 hidden lg:block" aria-hidden="true">
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue-light opacity-60" />
              <span className="relative inline-flex h-4 w-4 rounded-full border-[3px] border-brand-blue-light bg-white" />
            </span>
          </span>

          <span
            data-wf-plane=""
            className="absolute -top-4 right-0 hidden text-sky-400 lg:block"
            aria-hidden="true"
          >
            <Send className="h-9 w-9 -rotate-12" strokeWidth={1.5} />
          </span>

          <div className="relative z-10 grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8">
            {steps.map((step) => (
              <div
                key={step.title}
                data-wf-step=""
                className={`flex flex-col items-center text-center ${step.offset}`}
              >
                <div data-wf-circle="" className="relative">
                  <div className="group flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-[0_10px_20px_rgba(20,15,69,0.10),0_24px_55px_rgba(20,15,69,0.18)] ring-1 ring-black/[0.07]">
                    <span data-wf-icon="" className="text-[#E38A19]">
                      <step.icon className="h-12 w-12" strokeWidth={1.4} />
                    </span>
                  </div>
                  <span
                    data-wf-badge=""
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
