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
    a: "SEO is a long-term strategy, and results can take anywhere from 3 to 6 months depending on competition, industry, and website optimization. The more consistent your SEO efforts, the better and more sustainable the results.",
  },
  {
    q: "What are the key elements of SEO?",
    a: "SEO consists of three main elements:\n\nOn-Page SEO: Optimizing content, keywords, and meta tags.\nOff-Page SEO: Link-building and social signals.\nTechnical SEO: Site speed, mobile optimization, and crawlability.",
  },
  {
    q: "What is the difference between On-Page and Off-Page SEO?",
    a: "On-Page SEO refers to optimizing content, keywords, meta descriptions, and site structure.\nOff-Page SEO includes strategies like backlinking, social media marketing, and influencer outreach to boost website authority.",
  },
  {
    q: "Why is keyword research important in SEO?",
    a: "Keyword research helps identify what users are searching for and allows businesses to target high-search-volume, low-competition keywords. This increases the chances of ranking higher and attracting relevant traffic.",
  },
  {
    q: "How does technical SEO impact rankings?",
    a: "Technical SEO ensures that search engines can crawl, index, and understand your site effectively. Factors like site speed, mobile-friendliness, structured data, and security (HTTPS) play a crucial role in ranking.",
  },
  {
    q: "How do backlinks improve SEO?",
    a: "Backlinks from authoritative websites signal trust and credibility to search engines. The more quality backlinks your site earns, the higher it ranks in search results.",
  },
  {
    q: "Can SEO help local businesses?",
    a: "Yes! Local SEO optimizes your business for location-based searches, helping you appear in Google Maps, Google My Business, and local search results, ensuring more foot traffic and online inquiries.",
  },
  {
    q: "What is the role of content in SEO?",
    a: "Content is the foundation of SEO. High-quality, engaging, and optimized content helps search engines understand your website while keeping users engaged, reducing bounce rates, and improving rankings.",
  },
  {
    q: "Do I need to update my website regularly for SEO?",
    a: "Yes, search engines favor fresh and updated content. Regularly publishing blogs, updating existing pages, and optimizing content helps maintain and improve rankings.",
  },
  {
    q: "What are Core Web Vitals, and why do they matter?",
    a: "Core Web Vitals are a set of metrics related to page speed, user interaction, and visual stability. Google considers them as ranking factors, so improving load time, responsiveness, and stability enhances SEO performance.",
  },
  {
    q: "Is SEO better than paid ads?",
    a: "SEO offers long-term, sustainable growth, whereas paid ads provide immediate but temporary results. A balanced strategy combining both yields the best ROI.",
  },
  {
    q: "Can I do SEO myself, or do I need an expert?",
    a: "While basic SEO can be done by learning best practices, SEO experts use advanced strategies, tools, and insights to maximize results, fix technical issues, and implement data-driven optimization.",
  },
  {
    q: "How do I measure SEO success?",
    a: "SEO success is measured by organic traffic, search rankings, conversion rates, backlinks, domain authority, and engagement metrics. Tools like Google Analytics, Google Search Console, and Ahrefs help track performance.",
  },
  {
    q: "Why choose Adex360 for SEO services?",
    a: "Adex360 offers customized SEO solutions, expert keyword research, technical SEO audits, content optimization, and backlink strategies that increase rankings, drive traffic, and boost conversions.",
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
                    <p className="whitespace-pre-line px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
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
