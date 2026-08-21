import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import AppCaseStudy from "@/components/apps/AppCaseStudy";
import { weltewHomeContent } from "@/components/casestudy/weltewHome.content";

export const metadata: Metadata = {
  title: "Weltew Home Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360 built Weltew Home a high-performance ASP.NET website — multi-language, mobile-optimized, and SEO-tuned for a global furniture brand with 150+ stores in Turkey and 80+ locations worldwide.",
};

export default function WeltewHomePage() {
  return (
    <>
      <ScrollFx />
      <AppCaseStudy content={weltewHomeContent} />
    </>
  );
}
