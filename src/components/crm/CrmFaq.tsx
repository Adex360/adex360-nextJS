"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is CRM integration, and how does it work?",
    a: "CRM integration connects your Customer Relationship Management (CRM) system with other business tools like email, payment gateways, and automation platforms. It ensures seamless data flow, automates tasks, and enhances efficiency across marketing, sales, and customer support.",
  },
  {
    q: "Why is CRM integration important for business growth?",
    a: "A well-integrated CRM centralizes customer data, streamlines operations, and automates workflows. It helps businesses improve lead nurturing, sales tracking, customer engagement, and retention, ultimately boosting revenue and operational efficiency.",
  },
  {
    q: "Which CRM platforms does Adex360 integrate?",
    a: "We specialize in GoHighLevel CRM, a powerful platform for marketing automation, sales management, and customer engagement. We also ensure seamless integrations with third-party tools to create a fully connected business ecosystem.",
  },
  {
    q: "How does CRM integration enhance sales performance?",
    a: "By automating lead capture, follow-ups, and pipeline tracking, CRM integration enables sales teams to focus on closing deals. It provides real-time insights into customer interactions, helping businesses make data-driven decisions for better conversions.",
  },
  {
    q: "Can CRM integration improve customer relationships?",
    a: "Yes! A well-integrated CRM personalizes customer interactions by storing detailed information about past engagements. Automated responses, reminders, and targeted messaging ensure better communication and stronger customer relationships.",
  },
  {
    q: "Does CRM integration include marketing automation?",
    a: "Absolutely! CRM integration allows you to automate email campaigns, SMS marketing, and social media outreach. It helps businesses nurture leads, re-engage inactive customers, and drive sales through targeted and personalized marketing strategies.",
  },
  {
    q: "Can CRM integration connect with third-party tools?",
    a: "Yes, we integrate GoHighLevel CRM with various third-party applications like payment gateways, email platforms, analytics tools, and scheduling systems, ensuring seamless business operations and data synchronization.",
  },
  {
    q: "How long does it take to integrate a CRM?",
    a: "The integration timeline depends on the complexity and customization required. A basic integration can take a few days, while full automation, data migration, and custom workflows may take a few weeks.",
  },
  {
    q: "Will my business data be secure during CRM integration?",
    a: "Yes, data security is a priority in our CRM integration process. We use encrypted connections, secure APIs, and industry-standard best practices to ensure your customer data remains protected at all times.",
  },
  {
    q: "How does CRM integration reduce manual tasks?",
    a: "CRM integration automates lead tracking, sales updates, appointment scheduling, and customer follow-ups, eliminating repetitive manual tasks. This saves time, reduces errors, and increases overall team productivity.",
  },
  {
    q: "What industries benefit the most from CRM integration?",
    a: "Businesses across various industries, including e-commerce, real estate, healthcare, SaaS, and service-based companies, benefit from CRM integration. Any business that requires customer tracking, automation, and marketing optimization can see significant improvements.",
  },
];

export default function CrmFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            CRM Integration FAQs
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Expert Answers to Your CRM Integration Questions
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
                    aria-controls={`crm-faq-panel-${i}`}
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
                  id={`crm-faq-panel-${i}`}
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
