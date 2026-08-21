import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import SeonaArticle from "@/components/casestudy/seona/SeonaArticle";
import heroImage from "../../../public/images/casestudies/seona-hero.png";

export const metadata: Metadata = {
  title: "Seona Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's social media strategy drove a 30% increase in sales, 47% improvement in conversion rate, and 56% increase in average order value for Seona.",
};

export default function SeonaPage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="Social Media Management"
        title="Seona – Social Media Growth with Adex360"
        image={heroImage}
        imageAlt="Seona social media growth case study illustration"
      />
      <SeonaArticle />
      <CaseStudyCta />
    </>
  );
}
