import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import AppCaseStudy from "@/components/apps/AppCaseStudy";
import { akGalleriaContent } from "@/components/casestudy/akGalleria.content";

export const metadata: Metadata = {
  title: "AK Galleria Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360 built AK Galleria a custom, high-performance Shopify store — mobile-optimized, SEO-tuned, and built to scale for one of Pakistan's leading fashion retailers.",
};

export default function AkGalleriaPage() {
  return (
    <>
      <ScrollFx />
      <AppCaseStudy content={akGalleriaContent} />
    </>
  );
}
