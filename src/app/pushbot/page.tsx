import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import AppCaseStudy from "@/components/apps/AppCaseStudy";
import { pushbotContent } from "@/components/apps/pushbot.content";

export const metadata: Metadata = {
  title: "Pushbot | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Pushbot is a Shopify web push notification app by Adex360 that helps merchants recover abandoned carts, re-engage customers, and drive repeat sales with automated, real-time notifications.",
};

export default function PushbotPage() {
  return (
    <>
      <ScrollFx />
      <AppCaseStudy content={pushbotContent} />
    </>
  );
}
