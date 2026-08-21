import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import EcsArticle from "@/components/casestudy/ecs/EcsArticle";
import heroImage from "../../../public/images/casestudies/ecs-hero.png";

export const metadata: Metadata = {
  title: "ECS Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's performance marketing strategy drove a 53% increase in sales, 40% faster order processing, and 95% data-reporting accuracy for Ehsan Chappal Store.",
};

export default function EcsPage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="Performance Marketing"
        title="ECS – Performance Marketing Transformation with Adex360"
        image={heroImage}
        imageAlt="ECS performance marketing case study illustration"
      />
      <EcsArticle />
      <CaseStudyCta />
    </>
  );
}
