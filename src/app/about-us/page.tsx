import type { Metadata } from "next";
import ScrollFx from "@/components/fx/ScrollFx";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import Team from "@/components/home/Team";
import AboutHero from "@/components/about/AboutHero";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutPerfectFit from "@/components/about/AboutPerfectFit";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutProjects from "@/components/about/AboutProjects";

export const metadata: Metadata = {
  title: "About Us | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Meet Adex360, a leading growth marketing and technology company. 2000+ happy clients, 150+ active brands, and a creative-performance team dedicated to your digital success.",
};

export default function AboutUsPage() {
  return (
    <>
      <ScrollFx />
      <AboutHero />
      <AboutWhatWeDo />
      <BrandsMarquee />
      <AboutPerfectFit />
      <Team />
      <AboutTestimonials />
      <AboutProjects />
    </>
  );
}
