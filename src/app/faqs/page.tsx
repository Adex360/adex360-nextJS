import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import FaqHero from "@/components/faqs/FaqHero";
import FaqAccordion from "@/components/faqs/FaqAccordion";
import FaqHelp from "@/components/faqs/FaqHelp";

export const metadata: Metadata = {
  title: "FAQ's | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Answers to the most common questions about digital marketing, SEO, performance marketing, social media management, and web development from Adex360.",
};

export default function FaqsPage() {
  return (
    <>
      <ScrollFx />
      <FaqHero />
      <FaqAccordion />
      <FaqHelp />
    </>
  );
}
