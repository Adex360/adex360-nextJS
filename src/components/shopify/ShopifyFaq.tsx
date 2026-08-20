"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Shopify app development?",
    a: "Shopify app development is the process of creating custom applications that enhance the functionality of Shopify stores, improving store management, user experience, and automation.",
  },
  {
    q: "Why do I need a Shopify app for my store?",
    a: "A Shopify app can help automate tasks, improve customer experience, boost sales, and integrate third-party services to optimize your store's performance.",
  },
  {
    q: "How much does it cost to develop a Shopify app?",
    a: "Costs vary depending on features, complexity, and custom requirements. A basic app may cost a few thousand dollars, while advanced apps with integrations can cost significantly more. Look through our packages to see what suits you the best.",
  },
  {
    q: "How long does it take to develop a Shopify app?",
    a: "The development time depends on the app's complexity. A simple app may take 4–6 weeks, while feature-rich apps could take several months. However, at Adex we deliver promising development and a realistic time frame.",
  },
  {
    q: "Do I need coding knowledge to create a Shopify app?",
    a: "No, but hiring experienced Shopify developers like Adex ensures a high-quality, bug-free app tailored to your business needs.",
  },
  {
    q: "Can a Shopify app increase my sales?",
    a: "Yes! Apps can improve conversion rates, streamline processes, and enhance user experience, leading to higher sales. Apps by Adex ensure to enhance user experience and generate high sales.",
  },
  {
    q: "What programming languages are used in Shopify app development?",
    a: "Common languages include Ruby on Rails, Node.js, Python, PHP, and JavaScript, along with Shopify's API and Liquid template language. Web and app developers like Adex are highly experts in programming languages.",
  },
  {
    q: "Is my Shopify app scalable?",
    a: "Yes, with proper development and infrastructure, your app can grow alongside your business without performance issues. We at Adex, make sure your apps are developed for the best user experience.",
  },
  {
    q: "What are public and private Shopify apps?",
    a: "Public apps are listed on the Shopify App Store and can be used by any Shopify merchant. Private apps are custom-built for a specific store or business.",
  },
  {
    q: "Can I sell my Shopify app on the Shopify App Store?",
    a: "Yes, if your app meets Shopify's requirements and guidelines, you can list it on the App Store for merchants to download.",
  },
  {
    q: "Will my app be mobile-friendly?",
    a: "Yes! Shopify apps are built to be responsive and optimized for both desktop and mobile devices. Our developers integrate high technical optimization and interface to ensure the complete mobile-friendliness of your application.",
  },
  {
    q: "How do I integrate third-party services with my Shopify app?",
    a: "You can integrate services like payment gateways, CRM tools, and marketing automation platforms using Shopify's API.",
  },
  {
    q: "What security measures are taken for Shopify apps?",
    a: "Apps must follow Shopify's security guidelines, including encrypted data, OAuth authentication, and secure API usage to protect user information.",
  },
  {
    q: "Can I customize my Shopify app after it's built?",
    a: "Yes! Most apps can be updated and customized over time to add new features and improve performance. Developers at Adex ensure to integrate seamless user interface and customization options.",
  },
  {
    q: "How do I get started with Shopify app development?",
    a: "You can either learn Shopify development yourself or hire an expert Shopify app development agency like Adex360 to build a powerful, customized solution for your business.",
  },
];

export default function ShopifyFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Shopify App Development FAQs
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Knowledge Kit
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
                    aria-controls={`shopify-faq-panel-${i}`}
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
                  id={`shopify-faq-panel-${i}`}
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
