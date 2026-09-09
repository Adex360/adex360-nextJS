import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Eye, User } from "lucide-react";
import ScrollFx from "@/components/fx/ScrollFx";
import { prisma, withDbFallback } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// A database outage resolves to "no such post" → the branded 404, not a 500.
function getPost(slug: string) {
  return withDbFallback(
    `post ${slug}`,
    () =>
      prisma.post.findFirst({
        where: { slug, status: "PUBLISHED" },
        include: { category: true, author: true },
      }),
    null
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.seoTitle || `${post.title} | Adex360 Marketing Insights`,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/resources/${slug}` },
  };
}

export default async function ResourcePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const updated = await withDbFallback(
    `post ${slug} view count`,
    () =>
      prisma.post.update({
        where: { id: post.id },
        data: { views: { increment: 1 } },
        select: { views: true },
      }),
    null
  );
  if (updated) post.views = updated.views;

  return (
    <>
      <ScrollFx />
      <article className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-blue"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <span className="mt-6 inline-flex w-fit rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-blue">
            {post.category.name}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">{post.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.publishedAt?.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author.name}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              {post.views} {post.views === 1 ? "View" : "Views"}
            </span>
          </div>

          {post.featuredImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.featuredImage}
              alt={post.title}
              className="mt-8 w-full rounded-2xl object-cover"
            />
          )}

          <div
            className="mt-8 space-y-4 text-sm leading-relaxed text-muted sm:text-base [&_a]:font-semibold [&_a]:text-brand-blue [&_a]:underline [&_a]:decoration-brand-blue/30 [&_a]:underline-offset-2 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:text-ink [&_h2]:sm:text-2xl [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-ink [&_h3]:sm:text-lg [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-bold [&_strong]:text-ink [&_ul]:space-y-1.5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
