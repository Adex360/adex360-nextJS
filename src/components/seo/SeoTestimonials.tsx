import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    service: "Website Performance",
    name: "Fashion Mi",
    role: "Developer",
    quote:
      "The results speak for themselves! From fixing our technical SEO to creating killer content, they've completely transformed how our business shows up online.",
    gradient: "from-brand-blue to-brand-600",
  },
  {
    service: "SEO Performance",
    name: "Jude P",
    role: "Business Owner",
    quote:
      "I've worked with a few SEO companies before, but this one stands out. They were transparent about what they were doing and kept me updated every step of the way. The results? Amazing!",
    gradient: "from-[#F7B45C] to-[#C26F0B]",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export default function SeoTestimonials() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" className="mx-auto max-w-7xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Testimonials
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            What Our Clients Say About Us
          </h2>
          <div data-reveal="up" className="mt-3 flex items-center justify-center gap-2 text-sm text-muted">
            <span className="flex items-center gap-0.5 text-[#E38A19]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            (4.9/5) &middot; Based on 1000+ reviews
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:mt-12 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-reveal={i === 0 ? "left" : "right"}
              className="h-full rounded-3xl bg-gradient-to-br from-[#F7B45C] via-brand-blue-light/60 to-brand-blue p-[1.5px] shadow-lg shadow-brand-900/5 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <article className="flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-white p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                    {t.service}
                  </span>
                  <Quote className="h-7 w-7 shrink-0 text-[#E38A19]/30" />
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-5">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white`}
                  >
                    {initials(t.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-ink">{t.name}</p>
                    <p className="truncate text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
