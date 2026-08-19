"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-4 right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-blue-light sm:bottom-6 sm:right-6 sm:h-11 sm:w-11 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
