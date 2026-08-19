import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import ClutchStrip from "@/components/home/ClutchStrip";
import SeoHero from "@/components/seo/SeoHero";
import SeoUnique from "@/components/seo/SeoUnique";
import SeoLocal from "@/components/seo/SeoLocal";
import SeoGrowth from "@/components/seo/SeoGrowth";
import SeoScoreCta from "@/components/seo/SeoScoreCta";
import SeoAdvantage from "@/components/seo/SeoAdvantage";
import SeoProcess from "@/components/seo/SeoProcess";
import SeoProjects from "@/components/seo/SeoProjects";
import SeoTestimonials from "@/components/seo/SeoTestimonials";
import SeoFaq from "@/components/seo/SeoFaq";

export const metadata: Metadata = {
  title: "SEO Services | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Elevate rankings with Adex360's expert SEO services — On-Page, Off-Page, Technical and Local SEO that drive organic traffic, leads and growth. Get your free SEO score today.",
};

export default function SeoServicesPage() {
  return (
    <>
      <ScrollFx />
      <SeoHero />
      <SeoUnique />
      <SeoLocal />
      <BrandsMarquee />
      <SeoGrowth />
      <SeoScoreCta />
      <SeoAdvantage />
      <SeoProcess />
      <SeoProjects />
      <SeoTestimonials />
      <SeoFaq />
      <ClutchStrip />
    </>
  );
}
