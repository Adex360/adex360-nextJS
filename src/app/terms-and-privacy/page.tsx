import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import LegalHero from "@/components/legal/LegalHero";
import LegalNav from "@/components/legal/LegalNav";
import LegalContent from "@/components/legal/LegalContent";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";

export const metadata: Metadata = {
  title: "Terms & Privacy Policy | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Read Adex360's Terms of Service and Privacy Policy — how we operate, and how we collect, use, and protect your information.",
};

export default function TermsAndPrivacyPage() {
  return (
    <>
      <ScrollFx />
      <LegalHero />
      <div className="bg-white px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <LegalNav />
        </div>
      </div>
      <LegalContent />
      <CaseStudyCta
        heading="Questions about your data or our terms?"
        paragraph="Our team is happy to walk you through anything on this page — reach out anytime."
        ctaLabel="Contact Us"
        ctaHref="/contact-us"
      />
    </>
  );
}
