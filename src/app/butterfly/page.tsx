import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import ButterflyArticle from "@/components/casestudy/butterfly/ButterflyArticle";
import heroImage from "../../../public/images/casestudies/butterfly-hero.png";

export const metadata: Metadata = {
  title: "Butterfly Sanitary Napkin Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's SEO strategy took Butterfly Sanitary Napkin's organic traffic from 10.3K to 24K in a year, with all 20 targeted keywords ranking on page one.",
};

export default function ButterflyPage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="SEO Services"
        title="Organic Traffic Surge for Butterfly Sanitary Napkin"
        image={heroImage}
        imageAlt="Butterfly Sanitary Napkin SEO case study illustration"
      />
      <ButterflyArticle />
      <CaseStudyCta />
    </>
  );
}
