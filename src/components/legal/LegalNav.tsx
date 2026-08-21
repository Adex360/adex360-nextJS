"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "terms", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy" },
];

export default function LegalNav() {
  const [active, setActive] = useState("terms");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-10 -mx-4 mb-10 overflow-x-auto border-b border-[#E4E8F3] bg-white/90 px-4 backdrop-blur-sm sm:mx-0 sm:rounded-full sm:border sm:px-2 sm:py-2 sm:shadow-sm">
      <div className="mx-auto flex max-w-3xl gap-1 sm:justify-center">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`shrink-0 rounded-full px-4 py-3 text-sm font-semibold transition-colors sm:py-2 ${
              active === s.id ? "bg-brand-blue text-white" : "text-muted hover:text-ink"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
