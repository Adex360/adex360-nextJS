import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Explore Adex360's portfolio of SEO, performance marketing, social media, web development, and Shopify app projects delivered for real e-commerce and B2C brands.",
};

export default function PortfolioPage() {
  return (
    <>
      <ScrollFx />
      <PortfolioHero />
      <PortfolioGrid />
    </>
  );
}
