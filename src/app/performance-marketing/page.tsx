import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import PerformanceHero from "@/components/performance/PerformanceHero";
import PerformanceUnique from "@/components/performance/PerformanceUnique";
import PerformanceTabs from "@/components/performance/PerformanceTabs";
import PerformanceGrowth from "@/components/performance/PerformanceGrowth";
import PerformanceAdvantage from "@/components/performance/PerformanceAdvantage";
import PerformanceProcess from "@/components/performance/PerformanceProcess";
import PerformanceProjects from "@/components/performance/PerformanceProjects";
import PerformanceTestimonials from "@/components/performance/PerformanceTestimonials";
import PerformanceFaq from "@/components/performance/PerformanceFaq";

export const metadata: Metadata = {
  title: "Performance Marketing | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Maximize ROI and amplify growth with Adex360's performance marketing services — PPC advertising, affiliate marketing, email marketing, display ads, and conversion rate optimization designed for scalable growth.",
};

export default function PerformanceMarketingPage() {
  return (
    <>
      <ScrollFx />
      <PerformanceHero />
      <PerformanceUnique />
      <PerformanceTabs />
      <BrandsMarquee />
      <PerformanceGrowth />
      <PerformanceAdvantage />
      <PerformanceProcess />
      <PerformanceProjects />
      <PerformanceTestimonials />
      <PerformanceFaq />
    </>
  );
}
