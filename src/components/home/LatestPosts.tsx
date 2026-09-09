import { prisma, withDbFallback } from "@/lib/prisma";
import BlogPosts from "./BlogPosts";

// Server wrapper around the client-side slider so the query lives inside its
// own Suspense boundary on the home page: the static sections stream first,
// and if the database is down this section simply doesn't render.
export default async function LatestPosts() {
  const posts = await withDbFallback(
    "home latest posts",
    () =>
      prisma.post.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { publishedAt: "desc" },
        take: 6,
        include: { category: true, author: true },
      }),
    []
  );

  if (posts.length === 0) return null;

  return (
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
  );
}
