import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import OneArticle from "@/components/casestudy/one/OneArticle";
import heroImage from "../../../public/images/casestudies/one-hero.png";

export const metadata: Metadata = {
  title: "ONE Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's performance marketing strategy drove a 55.8% increase in site traffic, 40% boost in organic sales, and 30% improvement in customer retention for ONE.",
};

export default function OnePage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="Performance Marketing"
        title="ONE – Performance Marketing Transformation with Adex360"
        image={heroImage}
        imageAlt="ONE performance marketing case study illustration"
      />
      <OneArticle />
      <CaseStudyCta />
    </>
  );
}
