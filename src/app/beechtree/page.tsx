import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import BeechtreeArticle from "@/components/casestudy/beechtree/BeechtreeArticle";
import heroImage from "../../../public/images/casestudies/beechtree-hero.png";

export const metadata: Metadata = {
  title: "Beechtree Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's social media strategy drove 2.5M+ impressions, 8% of sales from recovered carts, and a 12% increase in conversion rates for Beechtree.",
};

export default function BeechtreePage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="Social Media Management"
        title="Beechtree – Social Media Growth with Adex360"
        image={heroImage}
        imageAlt="Beechtree social media growth case study illustration"
      />
      <BeechtreeArticle />
      <CaseStudyCta />
    </>
  );
}
