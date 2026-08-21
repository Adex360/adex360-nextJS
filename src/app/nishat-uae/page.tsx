import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import NishatUaeArticle from "@/components/casestudy/nishatUae/NishatUaeArticle";
import heroImage from "../../../public/images/casestudies/nishat-uae-hero.png";

export const metadata: Metadata = {
  title: "Nishat UAE Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's SEO strategy grew Nishat UAE's first-page keyword rankings by 347% (17% to 76%), domain authority by 36%, and backlinks by 40% in a year.",
};

export default function NishatUaePage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="SEO Services"
        title="Nishat UAE – A Leading Fashion Retail Brand in the UAE"
        image={heroImage}
        imageAlt="Nishat UAE SEO case study illustration"
      />
      <NishatUaeArticle />
      <CaseStudyCta />
    </>
  );
}
