"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zainHameed from "../../../public/images/team/Zain-hameed.jpeg";
import umerShoukat from "../../../public/images/team/umer-shoukat.png";
import aliLakhani from "../../../public/images/team/Ali-lakhani.png";
import sheharyarAhmed from "../../../public/images/team/Shehryar-ahmed.png";

gsap.registerPlugin(ScrollTrigger);

const LINKEDIN_PATH =
  "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V10H5.67v8.34zM7 8.75a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1M18.34 18.34v-4.6c0-2.46-1.31-3.61-3.06-3.61a2.64 2.64 0 0 0-2.39 1.31V10H10.2s.04.9 0 8.34h2.68v-4.66c0-.25.02-.5.1-.68.2-.5.66-1.02 1.44-1.02 1.02 0 1.43.78 1.43 1.92v4.44z";

type Member = {
  name: string;
  role: string;
  photo: StaticImageData;
  linkedin: string;
};

const team: Member[] = [
  {
    name: "Zain Hameed",
    role: "CEO",
    photo: zainHameed,
    linkedin: "https://www.linkedin.com/in/zainhameed1986/",
  },
  {
    name: "Umer Shoukat",
    role: "Director Marketing & Tech",
    photo: umerShoukat,
    linkedin: "https://www.linkedin.com/in/umer-shoukat/",
  },
  {
    name: "Ali Lakhani",
    role: "Director Growth",
    photo: aliLakhani,
    linkedin: "https://www.linkedin.com/in/alilaakhani/",
  },
  {
    name: "Sheharyar Ahmed",
    role: "Finance Manager",
    photo: sheharyarAhmed,
    linkedin: "https://www.linkedin.com/in/sheharyar-ahmed-butt-90711758/",
  },
];

export default function Team() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      tl.fromTo("[data-team-eyebrow]", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(
          "[data-team-heading-line]",
          { yPercent: 115 },
          { yPercent: 0, duration: 0.8, ease: "power4.out" },
          "-=0.25"
        );

      gsap.utils.toArray<HTMLElement>("[data-team-card]", root).forEach((card, i) => {
        card.style.transition = "none";
        tl.fromTo(
          card,
          { y: 64, opacity: 0, rotationX: -12, transformPerspective: 900 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.75,
            onComplete: () =>
              gsap.set(card, { clearProps: "transform,opacity,transition" }),
          },
          i === 0 ? "-=0.35" : "-=0.55"
        ).fromTo(
          card.querySelector("[data-team-photo]"),
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.8)" },
          "<+0.15"
        );
      });

      ScrollTrigger.create({
        trigger: root,
        start: "top 72%",
        onEnter: () => tl.play(),
        // Reverse the entrance when scrolling back above the section; CSS
        // transitions go back to "none" so GSAP owns the cards while reversing.
        onLeaveBack: () => {
          gsap.utils.toArray<HTMLElement>("[data-team-card]", root).forEach((card) => {
            card.style.transition = "none";
          });
          tl.reverse();
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-64 w-64 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div ref={rootRef} className="relative mx-auto max-w-7xl text-center">
        <p
          data-team-eyebrow=""
          className="text-xs font-semibold uppercase tracking-widest text-brand-blue"
        >
          Team Members
        </p>
        <h2 className="mt-3 overflow-hidden pb-1 text-2xl font-extrabold text-ink sm:text-3xl">
          <span data-team-heading-line="" className="block">
            Expert Team Members
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              data-team-card=""
              className="group relative overflow-hidden rounded-3xl bg-white pb-8 shadow-lg shadow-brand-900/5 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-24 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-blue">
                <svg
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                  className="absolute -bottom-px -left-px h-10 w-[calc(100%+2px)]"
                  aria-hidden="true"
                >
                  <path d="M-4 60 C 90 8 250 64 404 14 L 404 64 L -4 64 Z" fill="#ffffff" />
                </svg>
              </div>

              <div data-team-photo="" className="relative mx-auto -mt-14 h-36 w-36">
                <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-white shadow-xl shadow-brand-900/15">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="absolute inset-0 flex items-center justify-center rounded-full bg-brand-950/55 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a66c2] text-white shadow-lg">
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path d={LINKEDIN_PATH} />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              <h3 className="mt-5 text-lg font-bold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
