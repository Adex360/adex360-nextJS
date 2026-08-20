"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    title: "Custom Web Development & Design",
    name: "Kevin W.",
    role: "Entrepreneur",
    quote:
      "Adex360 turned my vision into reality with a stunning, functional website. Their team was easy to work with, highly professional, and delivered exceptional results. I couldn't be happier with their work!",
    gradient: "from-brand-blue to-brand-600",
  },
  {
    title: "Website Redesign & User Experience Improvement",
    name: "Taylor P.",
    role: "E-Commerce Store Owner",
    quote:
      "Adex360 transformed my website flawlessly! They understood my needs, made the process seamless, and delivered an outstanding final product. Highly professional and reliable. They are the best.",
    gradient: "from-brand-600 to-brand-900",
  },
  {
    title: "Website Redesign & User Experience Enhancement",
    name: "Smith O.",
    role: "Startup Founder",
    quote:
      "Adex360 completely transformed my website, making it 100x better and more user-friendly. Their team is skilled, approachable, and easy to work with—a fantastic experience from start to finish!",
    gradient: "from-[#F7B45C] to-[#E38A19]",
  },
  {
    title: "Custom Web Development & User-Friendly Design",
    name: "Morgan K.",
    role: "Small Business Owner",
    quote:
      "Adex360 made website development effortless! They built a stunning, highly functional site and patiently answered all my questions. Super professional, easy to work with, and I'm thrilled with the results!",
    gradient: "from-brand-blue-light to-brand-blue",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export default function CrmTestimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Testimonials
            </p>
            <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
              Take Their Word Over Us
            </h2>
            <div data-reveal="up" className="mt-3 flex items-center gap-2 text-sm text-muted">
              <span className="flex items-center gap-0.5 text-[#E38A19]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              (4.8/5) &middot; Based on 1000+ reviews
            </div>
          </div>

          <div data-reveal="fade" className="hidden items-center gap-3 sm:flex">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6BEDB] bg-white text-ink transition-colors duration-200 hover:border-transparent hover:bg-brand-blue hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6BEDB] bg-white text-ink transition-colors duration-200 hover:border-transparent hover:bg-brand-blue hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          data-reveal="up"
          data-reveal-delay="0.15"
          className="relative mt-8 px-11 sm:px-0 md:mt-12"
          onFocusCapture={() => swiperRef.current?.autoplay?.stop()}
        >
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#B6BEDB] bg-white text-ink shadow-lg shadow-brand-900/10 sm:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#B6BEDB] bg-white text-ink shadow-lg shadow-brand-900/10 sm:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                swiper.autoplay?.stop();
              }
            }}
            loop
            speed={700}
            spaceBetween={24}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="!h-auto">
                <div className="h-full rounded-3xl bg-gradient-to-br from-[#F7B45C] via-brand-blue-light/60 to-brand-blue p-[1.5px] shadow-lg shadow-brand-900/5 transition-transform duration-300 hover:-translate-y-1.5">
                  <article className="flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-white p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-0.5 text-[#E38A19]">
                        <span className="sr-only">Rated 5 out of 5</span>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <Quote className="h-7 w-7 shrink-0 text-[#E38A19]/30" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold leading-snug text-ink">
                      {t.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
