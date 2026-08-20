import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import ShopifyHero from "@/components/shopify/ShopifyHero";
import ShopifyUnique from "@/components/shopify/ShopifyUnique";
import ShopifyTabs from "@/components/shopify/ShopifyTabs";
import ShopifyGrowth from "@/components/shopify/ShopifyGrowth";
import ShopifyAdvantage from "@/components/shopify/ShopifyAdvantage";
import ShopifyProcess from "@/components/shopify/ShopifyProcess";
import ShopifyProjects from "@/components/shopify/ShopifyProjects";
import ShopifyTestimonials from "@/components/shopify/ShopifyTestimonials";
import ShopifyFaq from "@/components/shopify/ShopifyFaq";

export const metadata: Metadata = {
  title: "Shopify App Development | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Build your Shopify app with Adex360 — custom app development, UI/UX design, seamless integrations, advanced features, performance optimization, and full app audits.",
};

export default function ShopifyAppDevelopmentPage() {
  return (
    <>
      <ScrollFx />
      <ShopifyHero />
      <ShopifyUnique />
      <ShopifyTabs />
      <BrandsMarquee />
      <ShopifyGrowth />
      <ShopifyAdvantage />
      <ShopifyProcess />
      <ShopifyProjects />
      <ShopifyTestimonials />
      <ShopifyFaq />
    </>
  );
}
