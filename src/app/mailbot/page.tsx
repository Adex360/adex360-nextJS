import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import AppCaseStudy from "@/components/apps/AppCaseStudy";
import { mailbotContent } from "@/components/apps/mailbot.content";

export const metadata: Metadata = {
  title: "Mailbot | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Mailbot is a Shopify email marketing automation app by Adex360 that helps merchants recover abandoned carts, boost engagement, and drive repeat sales with personalized, automated campaigns.",
};

export default function MailbotPage() {
  return (
    <>
      <ScrollFx />
      <AppCaseStudy content={mailbotContent} />
    </>
  );
}
