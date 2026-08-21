import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import AppCaseStudy from "@/components/apps/AppCaseStudy";
import { logoOfficialContent } from "@/components/casestudy/logoOfficial.content";

export const metadata: Metadata = {
  title: "Logo Official Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360 built Logo Official a premium, conversion-optimized Shopify store — custom theme, mobile-first design, and SEO-tuned performance for a leading footwear and accessories brand.",
};

export default function LogoOfficialPage() {
  return (
    <>
      <ScrollFx />
      <AppCaseStudy content={logoOfficialContent} />
    </>
  );
}
