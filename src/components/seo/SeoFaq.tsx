"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is SEO and why is it important?",
    a: "SEO (Search Engine Optimization) is the process of optimizing your website to improve its ranking on search engines like Google. It increases visibility, drives organic traffic, and helps businesses attract potential customers without relying solely on paid ads.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term investment. Most websites start seeing meaningful movement within 3–6 months, with compounding results over time depending on competition, site health, and content quality.",
  },
  {
    q: "What are the key elements of SEO?",
    a: "The core pillars are on-page SEO (content and keyword optimization), off-page SEO (backlinks and authority building), technical SEO (site speed, crawlability, structure), and user experience.",
  },
  {
    q: "What is the difference between On-Page and Off-Page SEO?",
    a: "On-page SEO covers everything on your website — content, keywords, meta tags, and internal links. Off-page SEO covers signals from outside your site, primarily backlinks, brand mentions, and social proof.",
  },
  {
    q: "Why is keyword research important in SEO?",
    a: "Keyword research reveals what your potential customers actually search for, so your content targets real demand. It aligns your pages with search intent and uncovers opportunities competitors miss.",
  },
  {
    q: "How does technical SEO impact rankings?",
    a: "Search engines must crawl, render, and index your site efficiently. Technical SEO — site speed, mobile-friendliness, clean architecture, structured data — removes barriers that can suppress rankings no matter how good your content is.",
  },
  {
    q: "How do backlinks improve SEO?",
    a: "Backlinks from reputable sites act as votes of confidence. They build your domain authority, helping search engines trust your site and rank it higher for competitive keywords.",
  },
  {
    q: "Can SEO help local businesses?",
    a: "Absolutely. Local SEO — Google Business Profile optimization, local citations, reviews, and location-based keywords — connects you with nearby customers exactly when they're searching for your services.",
  },
  {
    q: "What is the role of content in SEO?",
    a: "Content is how you answer searchers' questions. High-quality, well-structured content targeting the right keywords earns rankings, backlinks, and conversions — it's the fuel of every successful SEO strategy.",
  },
  {
    q: "Do I need to update my website regularly for SEO?",
    a: "Yes. Fresh, updated content signals relevance to search engines, keeps information accurate for users, and gives you ongoing opportunities to target new keywords and maintain rankings.",
  },
  {
    q: "What are Core Web Vitals, and why do they matter?",
    a: "Core Web Vitals are Google's user-experience metrics — loading speed (LCP), interactivity (INP), and visual stability (CLS). They're a ranking factor, and poor scores can hold back otherwise strong pages.",
  },
  {
    q: "Is SEO better than paid ads?",
    a: "They serve different goals. Paid ads deliver instant but rented visibility; SEO builds a durable asset that keeps driving traffic without per-click costs. The strongest strategies combine both.",
  },
  {
    q: "Can I do SEO myself, or do I need an expert?",
    a: "Basic SEO is learnable, but competitive niches demand expertise, tooling, and constant algorithm awareness. An experienced team like Adex360 delivers results faster and avoids costly mistakes.",
  },
  {
    q: "How do I measure SEO success?",
    a: "Track organic traffic, keyword rankings, conversions and leads from organic search, and revenue impact — not just positions. We report all of these so you always see the ROI of your investment.",
  },
  {
    q: "Why choose Adex360 for SEO services?",
    a: "A dedicated in-house team, transparent reporting, strategies built from your business objectives, and a track record of results — 200X traffic growth for Chief Apparel and 6.81x sales for Engine. We deliver as committed.",
  },
];

export default function SeoFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            SEO FAQs
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Expert Answers to Your SEO Questions
          </h2>
        </div>

        <div data-reveal="up" className="mt-10 space-y-3 md:mt-12">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border bg-white transition-colors duration-200 ${
                  isOpen ? "border-brand-blue/30 shadow-lg shadow-brand-900/5" : "border-[#E4E8F3]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className={`text-sm font-bold sm:text-base ${isOpen ? "text-brand-blue" : "text-ink"}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-brand-blue text-white" : "bg-surface text-ink"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
