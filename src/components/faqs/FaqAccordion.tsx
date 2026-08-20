"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const link = (href: string, children: ReactNode) => (
  <Link href={href} className="font-bold text-brand-blue underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue">
    {children}
  </Link>
);

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What is Digital Marketing?",
    a: (
      <>
        Digital marketing uses online channels, including search engines, social media, email,
        and paid advertising to promote a business, attract customers, and drive sales. It covers
        SEO, performance marketing, meta ads and social media management. Adex360 is a
        full-service {link("/", "Digital Marketing Agency in Pakistan")} combining all of these
        channels into one data-driven strategy, for e-commerce and B2C brands to grow their
        digital growth.
      </>
    ),
  },
  {
    q: "Why is Digital Marketing Important for Businesses in Pakistan?",
    a: (
      <>
        Digital marketing allows ecommerce businesses to reach a much larger audience than
        traditional advertising at a fraction of the cost. With over 5 billion active social media
        users globally and e-commerce growing rapidly in Pakistan, it gains a competitive edge in
        visibility, customer acquisition, and sales. {link("/", "Adex360")} helps businesses of
        all sizes build a strong digital presence that generates measurable, sustainable growth.
      </>
    ),
  },
  {
    q: "What Does a Digital Marketing Agency Do?",
    a: (
      <>
        A digital marketing company plans and executes online marketing strategies including SEO
        to improve search rankings, social media management to grow brand presence, performance
        marketing to drive paid traffic and conversions, web development to build high-converting
        websites, and analytics to measure everything. Adex360 provides all of these services
        under one roof, acting as a 360-degree {link("/", "Growth Marketing Agency")}.
      </>
    ),
  },
  {
    q: "What is Performance Marketing?",
    a: (
      <>
        Performance marketing is a results-driven digital advertising approach where businesses
        only pay for specific, measurable outcomes, such as clicks, leads, or sales. Unlike
        traditional advertising, every rupee spent is tied to a real action. At Adex360, our{" "}
        {link("/performance-marketing", "Performance Marketing Services")} use PPC, affiliate
        marketing, display ads, email marketing, and conversion rate optimization to ensure your
        budget delivers a transparent ROI you can actually see.
      </>
    ),
  },
  {
    q: "How Does Performance Marketing Work?",
    a: (
      <>
        Performance marketing works by running targeted campaigns across platforms like Google,
        Meta, and affiliate networks, then tracking every action a user takes, from clicking an ad
        to completing a purchase. You only pay when that action happens. Adex360 builds a custom
        performance map for your brand, continuously optimizing targeting, creatives, and bidding
        strategies to reduce your cost per acquisition and maximize return on ad spend (ROAS).
      </>
    ),
  },
  {
    q: "How Long Does SEO Take to Show Results?",
    a: (
      <>
        SEO typically takes 3 to 6 months to show meaningful results, depending on your industry,
        website age, and competition. It is a long-term investment. Adex360 has helped clients
        like Chief Apparel achieve 200x growth in organic traffic and Engine reach 6.81x record
        sales through consistent, strategic {link("/seo-services", "SEO Services")}.
      </>
    ),
  },
  {
    q: "What is SEO and Why is it Important for My Business?",
    a: (
      <>
        SEO (Search Engine Optimization) is the process of improving your website so it ranks
        higher on search engines like Google, bringing organic traffic. It matters because 53% of
        all website traffic comes from organic search, making it the single largest source of
        online visitors. Adex360 {link("/seo-services", "SEO Agency")} helps e-commerce and
        service-based businesses in Pakistan rank for high-intent keywords, reduce customer
        acquisition costs, and generate consistent long-term growth.
      </>
    ),
  },
  {
    q: "Why Should I Hire a Social Media Management Agency?",
    a: (
      <>
        Managing social media effectively requires daily creativity, strategic planning, data
        analysis, and platform expertise. Most business owners don&rsquo;t have the time or
        resources to do it well. {link("/", "Adex360")} brings a dedicated team of content
        creators, strategists, and ad specialists who manage your platforms professionally,
        helping you grow followers, boost engagement, and convert your audience into paying
        customers, like achieving 47% more conversions for SEONA.
      </>
    ),
  },
  {
    q: "What Does a Social Media Management Package Include?",
    a: (
      <>
        A comprehensive {link("/social-media-management", "Social Media Management")} package
        from Adex360 includes content strategy, graphic design, copywriting, post scheduling,
        community management (replying to comments and messages), paid ad campaigns, influencer
        outreach, performance analytics, and monthly reporting. Every package is tailored to your
        brand&rsquo;s goals, whether that&rsquo;s growing followers, driving website traffic, or
        increasing online sales.
      </>
    ),
  },
  {
    q: "What is Website Development and What Does it Include?",
    a: (
      <>
        Website development is the process of designing, building, and maintaining a website,
        covering everything from the visual layout (front-end) to the server-side logic and
        database management (back-end). Adex360&rsquo;s{" "}
        {link("/web-development", "Web Development Services")} include UI/UX design, front-end
        and back-end development, e-commerce store creation, CMS development (WordPress,
        Shopify), performance optimization, and ongoing site maintenance, building websites that
        are fast, secure, and built to convert.
      </>
    ),
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="overflow-hidden bg-white px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div data-reveal-group="" data-stagger="0.05" className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                data-reveal="up"
                className={`rounded-2xl border bg-surface transition-colors duration-200 ${
                  isOpen ? "border-brand-blue/30 shadow-lg shadow-brand-900/5" : "border-[#E4E8F3]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className={`text-sm font-bold sm:text-base ${isOpen ? "text-brand-blue" : "text-ink"}`}>
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-brand-blue text-white" : "bg-white text-ink"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">{faq.a}</p>
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
