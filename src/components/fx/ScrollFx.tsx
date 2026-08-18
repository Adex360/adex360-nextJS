"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Data-attribute driven scroll animations. Annotate any server component with:
 *
 * - data-reveal="up|left|right|scale|fade"  (bare data-reveal = "up")
 *     Element fades/slides in when it enters the viewport.
 * - data-reveal-group  (on an ancestor container)
 *     All [data-reveal] descendants play as one staggered sequence when the
 *     container enters the viewport. Optional data-stagger="0.08" on the group.
 * - data-reveal-delay="0.15"  extra delay (seconds) for one element.
 * - data-counter="2000" data-counter-suffix="+"
 *     Text counts up from 0 to the value on scroll; existing text is the SSR
 *     fallback and gets overwritten while animating.
 */
function hiddenVars(el: HTMLElement): gsap.TweenVars {
  switch (el.dataset.reveal) {
    case "left":
      return { x: -56, opacity: 0 };
    case "right":
      return { x: 56, opacity: 0 };
    case "scale":
      return { scale: 0.86, opacity: 0 };
    case "fade":
      return { opacity: 0 };
    default:
      return { y: 48, opacity: 0 };
  }
}

const VISIBLE: gsap.TweenVars = { x: 0, y: 0, scale: 1, opacity: 1 };

// CSS transitions (e.g. Tailwind's hover transition-all) fight GSAP's
// per-frame style writes and can leave elements stuck invisible, so suspend
// them while GSAP owns the element and restore them once the reveal is done.
function captureElement(el: HTMLElement) {
  el.style.transition = "none";
  gsap.set(el, hiddenVars(el));
}

function releaseElement(el: HTMLElement) {
  gsap.set(el, { clearProps: "opacity,transform,transition" });
}

export default function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = Array.from(
          group.querySelectorAll<HTMLElement>("[data-reveal]")
        ).filter((el) => el.closest("[data-reveal-group]") === group);
        if (!items.length) return;

        const stagger = parseFloat(group.dataset.stagger ?? "0.12");
        const tl = gsap.timeline({
          paused: true,
          defaults: { duration: 0.8, ease: "power3.out" },
        });
        items.forEach((el, i) => {
          captureElement(el);
          tl.fromTo(
            el,
            hiddenVars(el),
            {
              ...VISIBLE,
              immediateRender: false,
              onComplete: () => releaseElement(el),
            },
            i * stagger + parseFloat(el.dataset.revealDelay ?? "0")
          );
        });
        ScrollTrigger.create({
          trigger: group,
          start: "top 85%",
          once: true,
          onEnter: () => tl.play(),
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.closest("[data-reveal-group]")) return;
        captureElement(el);
        const tween = gsap.fromTo(el, hiddenVars(el), {
          ...VISIBLE,
          duration: 0.9,
          ease: "power3.out",
          paused: true,
          immediateRender: false,
          delay: parseFloat(el.dataset.revealDelay ?? "0"),
          onComplete: () => releaseElement(el),
        });
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => tween.play(),
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseFloat(el.dataset.counter ?? "0");
        const suffix = el.dataset.counterSuffix ?? "";
        const state = { value: 0 };
        gsap.to(state, {
          value: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = `${Math.round(state.value)}${suffix}`;
          },
        });
      });
    });

    // Late layout shifts (web fonts, Swiper init, images) invalidate the
    // trigger positions measured at mount — refresh once things settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const settleTimer = window.setTimeout(refresh, 800);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(settleTimer);
      ctx.revert();
    };
  }, []);

  return null;
}
