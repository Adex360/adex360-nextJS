import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import CaseStudyHero from "@/components/casestudy/CaseStudyHero";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import BeOneShopOneArticle from "@/components/casestudy/beoneshopone/BeOneShopOneArticle";
import heroImage from "../../../public/images/casestudies/beoneshopone-hero.png";

export const metadata: Metadata = {
  title: "BeOneShopOne Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360's SEO strategy grew BeOneShopOne's first-page keyword rankings from 35% to 55%, backlinks by 36%, and SEO-driven revenue to nearly half of total sales over six months.",
};

export default function BeOneShopOnePage() {
  return (
    <>
      <ScrollFx />
      <CaseStudyHero
        eyebrow="SEO Services"
        title="BeOneShopOne – A D2C Western Clothing Brand"
        image={heroImage}
        imageAlt="BeOneShopOne SEO case study illustration"
      />
      <BeOneShopOneArticle />
      <CaseStudyCta />
    </>
  );
}
