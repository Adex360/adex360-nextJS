"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to hire someone to manage social media?",
    a: "The cost depends on experience, services, and platform coverage. Freelancers may charge £300–£2,000 monthly, while agencies or full-time managers can range from £1,500 to £5,000, covering content, engagement, ads, and analytics.",
  },
  {
    q: "Is it worth paying for a social media manager?",
    a: "A social media manager helps maintain consistency, increase engagement, and improve content strategy. They track analytics, refine campaigns, and keep up with trends, making it a valuable investment for brands looking to grow their online presence.",
  },
  {
    q: "What is a social media management service?",
    a: "It involves handling everything from content creation and post-scheduling to audience engagement and performance tracking. The goal is to create a strong brand presence, increase visibility, and drive meaningful interactions across social platforms.",
  },
  {
    q: "What is the 50/30/20 rule for social media?",
    a: "This rule suggests that 50% of content should be engaging and value-driven, 30% promotional, and 20% curated from other sources. It helps brands balance audience engagement, brand messaging, and industry relevance.",
  },
  {
    q: "Should I hire someone to manage my social media?",
    a: "If you're struggling with consistency, engagement, or growth, a social media manager can help. We at Adex360 streamline content, improve audience interaction, and develop strategies to boost your brand's presence while freeing up your time.",
  },
  {
    q: "What does a social media management package include?",
    a: "Most packages cover content creation, post-scheduling, community engagement, paid advertising, and analytics reporting. Some also include trend analysis, influencer partnerships, and strategic consulting for maximising reach and engagement.",
  },
  {
    q: "How to find a social media manager?",
    a: "Adex360 provides dedicated social media management with industry expertise, tailored strategies, and real results. Our team focuses on brand growth, audience engagement, and data-driven campaigns to help businesses strengthen their online presence.",
  },
  {
    q: "What exactly does a social media manager do?",
    a: "They handle content strategy, audience engagement, ad campaigns, and performance tracking. Their job is maintaining brand consistency, interacting with followers, and refining marketing efforts based on data insights.",
  },
  {
    q: "How do I know if I need a social media manager?",
    a: "If your engagement is low, content is inconsistent, or campaigns aren't delivering results, hiring a social media manager can improve strategy, increase brand awareness, and help grow your audience effectively",
  },
  {
    q: "How long do social media managers work?",
    a: "Most work 20–40 hours per week, depending on workload and client needs. Full-time managers handle multiple platforms daily, while part-time or freelance managers focus on specific tasks like content creation or engagement.",
  },
  {
    q: "What is a good social media manager?",
    a: "A skilled manager understands platform trends, crafts engaging content, interacts effectively with audiences, and analyses data to refine strategies. They adapt to changes, create compelling campaigns, and drive measurable brand growth.",
  },
  {
    q: "What is your biggest challenge when it comes to social media management?",
    a: "Keeping up with algorithm changes, audience behaviour, and content trends is challenging. Successful management requires ongoing strategy adjustments, creative content, and data-driven decision-making to maintain engagement and visibility.",
  },
];

export default function SocialFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Social Media Management FAQs
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Expert Answers to Your Social Media Management Questions
          </h2>
        </div>

        <div data-reveal-group="" data-stagger="0.06" className="mt-10 space-y-3 md:mt-12">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
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
                  aria-controls={`social-faq-panel-${i}`}
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
                  id={`social-faq-panel-${i}`}
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
