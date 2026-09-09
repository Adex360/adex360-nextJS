import { Suspense } from "react";
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
import LatestPosts from "@/components/home/LatestPosts";

// The Projects and blog sections read live data from MySQL, so this page
// re-renders per request to stay in sync with the admin panel. Both sections
// sit in their own Suspense boundary and swallow database failures, so the
// static content above them always streams out even if the database is
// unreachable. Revisit once ISR is wired up for the blog (see
// docs/progress.md Phase 4/5).
export const dynamic = "force-dynamic";

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
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Team />
      <Suspense fallback={null}>
        <LatestPosts />
      </Suspense>
    </>
  );
}
