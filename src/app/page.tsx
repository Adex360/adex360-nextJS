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
import BlogPosts from "@/components/home/BlogPosts";
import { prisma } from "@/lib/prisma";

// The blog widget below reads live, published posts from Postgres, so this
// page can no longer be fully static — it needs to re-render per request to
// stay in sync with the admin panel. Revisit once ISR is wired up for the
// blog (see docs/progress.md Phase 4/5).
export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    take: 6,
    include: { category: true, author: true },
  });

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
      {posts.length > 0 && (
        <BlogPosts
          posts={posts.map((post) => ({
            id: post.id,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            featuredImage: post.featuredImage,
            categoryName: post.category.name,
            authorName: post.author.name,
            publishedAt:
              post.publishedAt?.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }) ?? "",
          }))}
        />
      )}
    </>
  );
}
