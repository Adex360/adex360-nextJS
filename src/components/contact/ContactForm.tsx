"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GHL_FORM_ID = "wuyDI5OOWhvTnhQVrc2H";
const GHL_FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`;

// The GHL form iframe is cross-origin, so its internal CSS
// (`#_builder-form { margin: 20px }` + `.fields-container { padding: 30px 0 }`,
// pulled from GHL's own stylesheet) can't be overridden from this page — same-
// origin policy blocks it outright, regardless of selector/!important. This
// crops the resulting ~50px of top whitespace visually: overflow-hidden on the
// wrapper + a matching negative margin-top on the iframe. Because the wrapper
// has no fixed height, its auto height shrinks by the same amount as the
// iframe is pulled up, so this stays correct as GHL's script live-resizes the
// iframe — nothing at the bottom gets clipped. If GHL changes that spacing in
// a future stylesheet revision, re-measure and update this constant (or fix it
// at the source via the form's Custom CSS panel in the GHL dashboard, which is
// the one place that CAN reach inside the iframe's own document).
const GHL_TOP_CROP_PX = 50;

export default function ContactForm() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Fade/scale the card in as it scrolls into view (per-field stagger isn't
  // possible once the fields live inside the GHL iframe's own document).
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transition = "none";
    gsap.set(el, { y: 24, opacity: 0 });
    const tween = gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      paused: true,
      onComplete: () => gsap.set(el, { clearProps: "opacity,transform,transition" }),
    });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => tween.play(),
      onLeaveBack: () => {
        el.style.transition = "none";
        tween.reverse();
      },
    });

    return () => {
      st.kill();
      tween.kill();
    };
  }, []);

  return (
    <>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      <div
        ref={cardRef}
        className="overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-xl shadow-brand-900/5 sm:p-3"
      >
        <div className="overflow-hidden">
          <iframe
            src={GHL_FORM_SRC}
            style={{
              width: "100%",
              height: 915,
              border: "none",
              borderRadius: "3px",
              marginTop: -GHL_TOP_CROP_PX,
              display: "block",
            }}
            id={`inline-${GHL_FORM_ID}`}
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Website Submission Form"
            data-height="576"
            data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
            data-form-id={GHL_FORM_ID}
            title="Website Submission Form"
          />
        </div>
      </div>
    </>
  );
}
