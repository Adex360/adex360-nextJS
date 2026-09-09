import type { MetadataRoute } from "next";
import { prisma, withDbFallback } from "@/lib/prisma";
import { SITE_URL } from "@/lib/site";

// Generated at request time, not at build time: prerendering it during
// `next build` would need a live database connection at build time, which
// this project's local/production setup doesn't guarantee. If the database
// is unreachable the sitemap still serves every static page.
export const dynamic = "force-dynamic";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

// One entry per route in docs/progress.md's "28 pages" list plus /resources.
// Case-study/app pages sit deeper in the nav than the pages linking to them,
// hence the lower priority.
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/seo-services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/social-media-management", priority: 0.9, changeFrequency: "monthly" },
  { path: "/performance-marketing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/web-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/shopify-app-development", priority: 0.9, changeFrequency: "monthly" },
  { path: "/crm-integration", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.8, changeFrequency: "daily" },
  { path: "/terms-and-privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/universal-product-feed", priority: 0.6, changeFrequency: "monthly" },
  { path: "/pushbot", priority: 0.6, changeFrequency: "monthly" },
  { path: "/mailbot", priority: 0.6, changeFrequency: "monthly" },
  { path: "/beoneshopone", priority: 0.6, changeFrequency: "yearly" },
  { path: "/eu", priority: 0.6, changeFrequency: "yearly" },
  { path: "/ak-galleria", priority: 0.6, changeFrequency: "yearly" },
  { path: "/butterfly", priority: 0.6, changeFrequency: "yearly" },
  { path: "/logo-official", priority: 0.6, changeFrequency: "yearly" },
  { path: "/weltew-home", priority: 0.6, changeFrequency: "yearly" },
  { path: "/ecs", priority: 0.6, changeFrequency: "yearly" },
  { path: "/nishat-usa", priority: 0.6, changeFrequency: "yearly" },
  { path: "/nishat-uae", priority: 0.6, changeFrequency: "yearly" },
  { path: "/one", priority: 0.6, changeFrequency: "yearly" },
  { path: "/beechtree", priority: 0.6, changeFrequency: "yearly" },
  { path: "/seona", priority: 0.6, changeFrequency: "yearly" },
  { path: "/kiko-milano", priority: 0.6, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await withDbFallback(
    "sitemap posts",
    () =>
      prisma.post.findMany({
        where: { status: "PUBLISHED" },
        select: { slug: true, updatedAt: true },
        orderBy: { publishedAt: "desc" },
      }),
    []
  );

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/resources/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries];
}
