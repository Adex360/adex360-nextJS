import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import KikoMilanoArticle from "@/components/casestudy/kikoMilano/KikoMilanoArticle";
import heroImage from "../../../public/images/casestudies/kiko-milano-hero.png";

export const metadata: Metadata = {
  title: "Kiko Milano Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's performance marketing strategy drove a 5X increase in ROAS, 28% reduction in CPA, and 40% increase in conversion rate for Kiko Milano.",
};

export default function KikoMilanoPage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="Performance Marketing"
        title="Kiko Milano – Performance Marketing Transformation with Adex360"
        image={heroImage}
        imageAlt="Kiko Milano performance marketing case study illustration"
      />
      <KikoMilanoArticle />
      <CaseStudyCta />
    </>
  );
}
