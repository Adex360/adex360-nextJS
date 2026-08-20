import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import SocialHero from "@/components/social/SocialHero";
import SocialUnique from "@/components/social/SocialUnique";
import SocialTabs from "@/components/social/SocialTabs";
import SocialGrowth from "@/components/social/SocialGrowth";
import SocialAdvantage from "@/components/social/SocialAdvantage";
import SocialProcess from "@/components/social/SocialProcess";
import SocialProjects from "@/components/social/SocialProjects";
import SocialTestimonials from "@/components/social/SocialTestimonials";
import SocialFaq from "@/components/social/SocialFaq";

export const metadata: Metadata = {
  title: "Social Media Management | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Adex360 provides expert, meta-savvy social media management — content creation, community management, influencer marketing, analytics and strategy that amplify voices, spark engagement, and turn clicks into connections.",
};

export default function SocialMediaManagementPage() {
  return (
    <>
      <ScrollFx />
      <SocialHero />
      <SocialUnique />
      <SocialTabs />
      <BrandsMarquee />
      <SocialGrowth />
      <SocialAdvantage />
      <SocialProcess />
      <SocialProjects />
      <SocialTestimonials />
      <SocialFaq />
    </>
  );
}
