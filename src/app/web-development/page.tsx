import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import WebDevHero from "@/components/webdev/WebDevHero";
import WebDevUnique from "@/components/webdev/WebDevUnique";
import WebDevTabs from "@/components/webdev/WebDevTabs";
import WebDevGrowth from "@/components/webdev/WebDevGrowth";
import WebDevAdvantage from "@/components/webdev/WebDevAdvantage";
import WebDevProcess from "@/components/webdev/WebDevProcess";
import WebDevProjects from "@/components/webdev/WebDevProjects";
import WebDevTestimonials from "@/components/webdev/WebDevTestimonials";
import WebDevFaq from "@/components/webdev/WebDevFaq";

export const metadata: Metadata = {
  title: "Web Development | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Crafting code, building futures — Adex360 designs and develops fast, scalable, SEO-friendly websites and e-commerce stores, from front-end to back-end to ongoing maintenance.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <ScrollFx />
      <WebDevHero />
      <WebDevUnique />
      <WebDevTabs />
      <BrandsMarquee />
      <WebDevGrowth />
      <WebDevAdvantage />
      <WebDevProcess />
      <WebDevProjects />
      <WebDevTestimonials />
      <WebDevFaq />
    </>
  );
}
