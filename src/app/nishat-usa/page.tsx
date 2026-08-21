import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import NishatUsaArticle from "@/components/casestudy/nishatUsa/NishatUsaArticle";
import heroImage from "../../../public/images/casestudies/nishat-usa-hero.png";

export const metadata: Metadata = {
  title: "Nishat USA Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's social media strategy drove a 76% increase in sales, 53% rise in website sessions, and 100% growth in orders for Nishat USA.",
};

export default function NishatUsaPage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="Social Media Management"
        title="Nishat USA – Social Media Growth with Adex360"
        image={heroImage}
        imageAlt="Nishat USA social media growth case study illustration"
      />
      <NishatUsaArticle />
      <CaseStudyCta />
    </>
  );
}
