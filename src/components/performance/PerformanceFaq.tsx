"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the job of performance marketing?",
    a: "Performance marketing focuses on driving measurable results through targeted advertising, such as leads, conversions, or sales. It involves using strategies like PPC, affiliate marketing, and retargeting to optimize campaigns and only pay for actual outcomes.",
  },
  {
    q: "What is the meaning of marketing performance?",
    a: "Marketing performance refers to the effectiveness of marketing strategies in achieving specific goals, such as sales, leads, or brand awareness. It is measured through key metrics like ROI, conversion rates, and customer acquisition, helping businesses track success.",
  },
  {
    q: "Is performance marketing an SEO?",
    a: "Performance marketing is not SEO, but they can complement each other. While SEO focuses on organic search rankings, performance marketing involves paid strategies like PPC and affiliate marketing that drive measurable results like sales and leads.",
  },
  {
    q: "Is performance marketing a PPC?",
    a: "Performance marketing often includes PPC (Pay-Per-Click) as a key strategy. It focuses on driving immediate, measurable results, such as clicks or conversions, where businesses only pay for actions like clicks rather than impressions or ad placement.",
  },
  {
    q: "What is the scope of performance marketing?",
    a: "The scope of performance marketing is vast, including PPC campaigns, affiliate marketing, display ads, and retargeting. It helps businesses grow by targeting specific audiences, improving conversion rates, and delivering a high ROI through data-driven strategies and measurable results.",
  },
  {
    q: "How to start performance marketing?",
    a: "To start performance marketing, identify your goals (sales, leads), choose platforms (Google Ads, Facebook Ads), create targeted campaigns, and track performance using tools like Google Analytics. Optimize campaigns based on data to ensure cost-effective results and increased ROI.",
  },
  {
    q: "What is the salary of a performance marketing consultant?",
    a: "The salary of a performance marketing consultant in the UK typically ranges from £30,000 to £70,000 annually, depending on experience, skills, and industry. Consultants with advanced expertise in PPC, SEO, and data analytics often earn more in senior roles.",
  },
  {
    q: "Who uses performance marketing?",
    a: "Businesses of all sizes, from eCommerce to SaaS, use performance marketing to drive measurable results. Industries like retail, finance, education, and travel leverage performance marketing for customer acquisition, lead generation, and improving ROI through cost-effective strategies.",
  },
  {
    q: "What is ROAS?",
    a: "ROAS (Return on Ad Spend) is a metric used to measure the effectiveness of paid advertising campaigns. It calculates the revenue generated for every pound spent on ads, helping businesses assess whether their campaigns are profitable and optimise for better results.",
  },
  {
    q: "What is the difference between paid ads and performance marketing?",
    a: "Paid ads refer to any paid advertising method, including display ads, search ads, or social media promotions. Performance marketing is more focused, paying only for specific outcomes such as leads, clicks, or sales, ensuring that advertising budgets are spent efficiently.",
  },
  {
    q: "What is ACOS?",
    a: "ACOS (Advertising Cost of Sale) is a metric used to measure the efficiency of paid advertising campaigns, especially in e-commerce. It calculates the percentage of revenue spent on advertising, helping businesses understand their profitability and optimise their ad spend.",
  },
  {
    q: "How to calculate CPA?",
    a: "CPA (Cost Per Acquisition) is calculated by dividing total advertising costs by the number of acquisitions (sales, leads) generated. For example, if you spent £500 on ads and gained 50 customers, the CPA would be £10 per customer acquisition.",
  },
  {
    q: "How does performance marketing work?",
    a: "Performance marketing uses targeted campaigns across various digital platforms (PPC, affiliate marketing, display ads) to drive specific actions like leads, sales, or clicks. You only pay when achieving the desired result, ensuring efficient budget allocation.",
  },
  {
    q: "What is the scope of performance marketing?",
    a: "Performance marketing covers a range of digital channels, including paid search, affiliate marketing, social media ads, and retargeting. It helps businesses achieve measurable growth by focusing on campaigns that drive sales, leads, and conversions with clear ROI.",
  },
  {
    q: "What can performance marketing help a business do?",
    a: "Performance marketing helps businesses increase customer acquisition, improve brand visibility, and drive sales by using cost-effective, data-driven strategies. It enables companies to focus on actions that lead to measurable outcomes, improving ROI and maximizing marketing budgets.",
  },
];

export default function PerformanceFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Performance Marketing FAQs
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Answers to Your Performance Marketing Questions
          </h2>
        </div>

        <div data-reveal-group="" data-stagger="0.06" className="mt-10 space-y-3 md:mt-12">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={`${faq.q}-${i}`}
                data-reveal="up"
                className={`rounded-2xl border bg-white transition-colors duration-200 ${
                  isOpen ? "border-brand-blue/30 shadow-lg shadow-brand-900/5" : "border-[#E4E8F3]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`performance-faq-panel-${i}`}
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
                </h3>
                <div
                  id={`performance-faq-panel-${i}`}
                  aria-hidden={!isOpen}
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
