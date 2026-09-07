"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export type HomeBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string | null;
  categoryName: string;
  authorName: string;
  publishedAt: string;
};

export default function BlogPosts({ posts }: { posts: HomeBlogPost[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  // Swiper's slidesPerView breakpoints are 1 / 2 / 3 (mobile / tablet /
  // desktop) — with `watchOverflow`, Swiper locks itself whenever there
  // aren't more posts than the current breakpoint can show at once (e.g. 2
  // posts on desktop, which fits inside 3 slots with nothing to slide to).
  // Mirror that lock into React state to drive two things Swiper can't do
  // on its own here: hide the custom arrow buttons (not Swiper's built-in
  // nav, so its automatic button-hiding doesn't reach them), and gate
  // `loop` — loop mode needs enough real slides to duplicate, so it must
  // stay off exactly while locked and turn on once there's something to
  // actually loop through.
  const [isLocked, setIsLocked] = useState(true);

  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Marketing Insights
            </p>
            <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
              From Our Blog
            </h2>
            <p data-reveal="up" className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Guides, strategies, and insights from the Adex360 team.
            </p>
          </div>

          <Link
            data-reveal="fade"
            href="/resources"
            className="hidden items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline sm:inline-flex"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div data-reveal="up" data-reveal-delay="0.15" className="relative mt-10 px-11 md:mt-14 lg:px-14">
          {!isLocked && (
            <>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous post"
                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#B6BEDB] bg-white text-ink shadow-lg shadow-brand-900/10 transition-colors duration-200 hover:border-transparent hover:bg-brand-blue hover:text-white lg:h-11 lg:w-11"
              >
                <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next post"
                className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#B6BEDB] bg-white text-ink shadow-lg shadow-brand-900/10 transition-colors duration-200 hover:border-transparent hover:bg-brand-blue hover:text-white lg:h-11 lg:w-11"
              >
                <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
            </>
          )}

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsLocked(swiper.isLocked);
            }}
            onResize={(swiper) => setIsLocked(swiper.isLocked)}
            onBreakpoint={(swiper) => setIsLocked(swiper.isLocked)}
            watchOverflow
            loop={!isLocked}
            speed={600}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id} className="!h-auto">
                <Link
                  href={`/resources/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div className="relative aspect-video overflow-hidden bg-surface">
                    {post.featuredImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue/10 to-[#E38A19]/10 text-xs font-semibold text-muted">
                        Adex360
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex w-fit rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-blue">
                      {post.categoryName}
                    </span>
                    <h3 className="mt-3 line-clamp-2 text-base font-bold text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-xs text-muted">
                      <span className="truncate">
                        {post.authorName} &middot; {post.publishedAt}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-blue group-hover:text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Link
          href="/resources"
          className="mt-8 flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline sm:hidden"
        >
          View All Posts
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
