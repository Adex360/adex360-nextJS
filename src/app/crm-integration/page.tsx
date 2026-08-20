import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import CrmHero from "@/components/crm/CrmHero";
import CrmUnique from "@/components/crm/CrmUnique";
import CrmTabs from "@/components/crm/CrmTabs";
import CrmGrowth from "@/components/crm/CrmGrowth";
import CrmAdvantage from "@/components/crm/CrmAdvantage";
import CrmProcess from "@/components/crm/CrmProcess";
import CrmTestimonials from "@/components/crm/CrmTestimonials";
import CrmFaq from "@/components/crm/CrmFaq";

export const metadata: Metadata = {
  title: "CRM Integration | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Adex360 seamlessly integrates GoHighLevel CRM to automate workflows, enhance engagement, and drive scalable growth — lead nurturing, pipeline management, marketing automation, appointment scheduling, and reputation management.",
};

export default function CrmIntegrationPage() {
  return (
    <>
      <ScrollFx />
      <CrmHero />
      <CrmUnique />
      <CrmTabs />
      <BrandsMarquee />
      <CrmGrowth />
      <CrmAdvantage />
      <CrmProcess />
      <CrmTestimonials />
      <CrmFaq />
    </>
  );
}
