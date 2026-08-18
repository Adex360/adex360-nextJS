import { Star } from "lucide-react";

export default function ClutchStrip() {
  return (
    <section className="border-t border-black/5 bg-surface px-4 py-10 sm:px-6 lg:px-8">
      <div
        data-reveal-group=""
        data-stagger="0.08"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8"
      >
        <span data-reveal="up" className="text-sm font-semibold text-muted">As Featured On</span>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            data-reveal="up"
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm shadow-brand-900/5 transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="text-sm font-extrabold text-[#e2401f]">Clutch</span>
            <span className="flex items-center gap-0.5 text-brand-orange">
              {Array.from({ length: 5 }).map((__, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
