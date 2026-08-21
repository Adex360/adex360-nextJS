import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import BrandHero from "@/components/casestudy/brand/BrandHero";
import BrandOverview from "@/components/casestudy/brand/BrandOverview";
import StrategyQuote from "@/components/casestudy/brand/StrategyQuote";
import ChallengeSolutionResult from "@/components/casestudy/brand/ChallengeSolutionResult";
import OverallResult from "@/components/casestudy/brand/OverallResult";
import ServicesProvided from "@/components/casestudy/brand/ServicesProvided";
import KeyTeams from "@/components/casestudy/brand/KeyTeams";
import CaseStudyCta from "@/components/casestudy/CaseStudyCta";
import RelatedCaseStudies from "@/components/casestudy/brand/RelatedCaseStudies";
import productImage from "../../../public/images/casestudies/eu-product.jpg";
import relatedBeone from "../../../public/images/casestudies/related-beone.png";
import relatedSeona from "../../../public/images/casestudies/related-seona.png";

export const metadata: Metadata = {
  title: "EU Naturals Case Study | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "How Adex360 helped EU Naturals take back control of its customer journey with a high-performing, education-led Shopify store — 38% conversion rate, 900% traffic uplift, sub-1s product page loads.",
};

export default function EuPage() {
  return (
    <>
      <ScrollFx />
      <BrandHero
        eyebrow="How a Hygiene Brand"
        title="Took Back Control of Its Customer Journey"
        related={[
          {
            brand: "BeOneShop",
            category: "SEO Services",
            description: "A D2C Western Clothing Brand",
            href: "/beoneshopone",
          },
          {
            brand: "Weltew Home",
            category: "High-Performance Web Development",
            description: "A Global Furniture Brand",
            href: "/weltew-home",
          },
        ]}
      />
      <BrandOverview text="EU Cream is Pakistan's leading personal care brand, recognized as a household name with robust sales across third-party retail and online marketplace channels. Despite strong marketplace success, EU Naturals lacked ownership of its digital journey, prompting the need for a dedicated platform that would enrich customer relationships, enable strategic growth, and accurately reflect the brand's purpose and identity." />
      <StrategyQuote quote="We collaborated closely with EU Naturals to craft a high-performing, educational, and user-friendly Shopify website. Every element, from navigation to visuals, was developed to enhance trust, improve discoverability, and guide the wellness-focused buyer journey." />
      <ChallengeSolutionResult
        image={productImage}
        imageAlt="EU Naturals cream products"
        items={[
          "EU Cream's key challenge was dependency on third-party marketplaces, which resulted in limited ownership of customer journeys.",
          "We addressed this by developing a robust D2C channel that enabled direct engagement with customers and overcame the lack of direct interaction.",
          "This laid the foundation for CRM, retention, and content-driven growth while staying true to the brand's clean and credible voice, resolving the absence of long-term brand-led growth tools.",
        ]}
      />
      <OverallResult
        stats={[
          { label: "Conversion Rate", value: "38%" },
          { label: "Traffic Uplift", value: "900%" },
          { label: "Product Page Loads", value: "Sub-1s" },
        ]}
      />
      <ServicesProvided
        services={[
          {
            title: "Digital Strategy",
            description:
              "Consulted on transitioning from third-party sales to brand-owned channels with future-ready growth tactics.",
            href: "/social-media-management",
          },
          {
            title: "UI/UX Design",
            description: "Designed a trust-focused, education-led shopping experience aligned with the wellness category.",
            href: "/web-development",
          },
          {
            title: "Web Development",
            description: "Custom-developed a Shopify store optimized for speed, SEO, and easy product exploration.",
            href: "/web-development",
          },
        ]}
      />
      <KeyTeams
        teams={[
          {
            title: "Consultancy",
            description:
              "Led the strategic roadmap, from platform audit and architecture to scalable D2C frameworks and content planning.",
          },
          {
            title: "UI/UX Design",
            description:
              "Crafted an intuitive design system prioritizing clarity, conversion, and category-specific UX best practices.",
          },
          {
            title: "Web Development",
            description:
              "Built a high-speed, mobile-responsive Shopify store ready for future integrations and marketing expansion.",
          },
        ]}
      />
      <CaseStudyCta
        heading="Let's Build What's Next"
        paragraph="Ready to move your brand from presence to performance?"
        ctaLabel="Contact Us"
        ctaHref="/contact-us"
      />
      <RelatedCaseStudies
        items={[
          {
            brand: "Beone",
            quote:
              "By adopting a focused keyword approach, BeOneShopOne was able to increase organic visibility while improving rankings for search terms that mattered most to their audience.",
            image: relatedBeone,
            href: "/beoneshopone",
          },
          {
            brand: "Seona",
            quote:
              "Using a data-driven approach, Adex360 measured the revenue impact of their marketing efforts, revealing which channels to prioritize or scale back.",
            image: relatedSeona,
            href: "/seona",
          },
        ]}
      />
    </>
  );
}
