import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ravit Ashrit",
    role: "Social Media Management",
    quote:
      "E-Commerce Head. It's clear these guys demonstrate professionalism at every step, and a deep understanding of your brand voice.",
  },
  {
    name: "Sara Fatima",
    role: "SEO Performance",
    quote:
      "Talent Relations Manager, Shopie Home UAE. Our experience with Adex360 has been overwhelmingly positive. They improved website traffic and gave us higher search engine rankings.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Testimonials
        </p>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
          What Our Clients Say About Us
        </h2>
        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted">
          <span className="flex items-center gap-0.5 text-brand-orange">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </span>
          (4.9/5) &middot; Based on 1000+ reviews
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-3xl bg-white p-8 text-left shadow-xl shadow-brand-900/5"
            >
              <Quote className="h-8 w-8 text-brand-orange/40" />
              <p className="mt-4 text-sm leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
