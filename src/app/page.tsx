import ScrollFx from "@/components/fx/ScrollFx";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AboutStats from "@/components/home/AboutStats";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import SeoStrategies from "@/components/home/SeoStrategies";
import DrivingGrowth from "@/components/home/DrivingGrowth";
import Workflow from "@/components/home/Workflow";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/home/Projects";
import Team from "@/components/home/Team";
import Blog from "@/components/home/Blog";
import ClutchStrip from "@/components/home/ClutchStrip";

export default function Home() {
  return (
    <>
      <ScrollFx />
      <Hero />
      <Features />
      <AboutStats />
      <BrandsMarquee />
      <SeoStrategies />
      <DrivingGrowth />
      <Workflow />
      <Testimonials />
      <Projects />
      <Team />
      <Blog />
      <ClutchStrip />
    </>
  );
}
