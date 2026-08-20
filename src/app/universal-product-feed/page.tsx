import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import AppCaseStudy from "@/components/apps/AppCaseStudy";
import { universalProductFeedContent } from "@/components/apps/universalProductFeed.content";

export const metadata: Metadata = {
  title: "Universal Product Feed | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Universal Product Feed is a Shopify app by Adex360 that automates multi-channel product syncing across Google Shopping, Facebook, Instagram, TikTok, Pinterest, and more.",
};

export default function UniversalProductFeedPage() {
  return (
    <>
      <ScrollFx />
      <AppCaseStudy content={universalProductFeedContent} />
    </>
  );
}
