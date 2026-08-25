import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Eye, Newspaper, User } from "lucide-react";
import UnderConstruction from "@/components/layout/UnderConstruction";
import ScrollFx from "@/components/fx/ScrollFx";
import Pagination from "@/components/resources/Pagination";
import ReadMoreButton from "@/components/resources/ReadMoreButton";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Marketing Insights | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Guides, strategies, and insights on SEO, performance marketing, social media, and web development from the Adex360 team.",
};

const PAGE_SIZE = 10;

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const totalPublished = await prisma.post.count({ where: { status: "PUBLISHED" } });

  if (totalPublished === 0) {
    return <UnderConstruction />;
  }

  const { page } = await searchParams;
  const totalPages = Math.max(1, Math.ceil(totalPublished / PAGE_SIZE));
  const currentPage = Math.min(totalPages, Math.max(1, Number(page) || 1));

  const posts = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { publishedAt: "desc" },
    include: { category: true, author: true },
    skip: (currentPage - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

  return (
    <>
      <ScrollFx />
      <section className="relative overflow-hidden bg-surface px-4 pb-10 pt-14 text-center sm:px-6 md:pt-20 lg:px-8">
        <div data-reveal-group="" className="relative mx-auto max-w-2xl">
          <span
            data-reveal="scale"
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue"
          >
            <Newspaper className="h-7 w-7" />
          </span>
          <p data-reveal="up" className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Marketing Insights
          </p>
          <h1 data-reveal="up" className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Our Blog
          </h1>
          <p data-reveal="up" className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Guides, strategies, and insights from the Adex360 team.
          </p>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div
          data-reveal-group=""
          data-stagger="0.06"
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              data-reveal="up"
              className="flex flex-col overflow-hidden rounded-2xl border border-[#E4E8F3] bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <Link href={`/resources/${post.slug}`} className="group flex flex-1 flex-col">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                  {post.featuredImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-blue/10 to-[#E38A19]/10 text-xs font-semibold text-muted">
                      Adex360
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-6 pt-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.publishedAt?.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      {post.author.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5" />
                      {post.views} {post.views === 1 ? "View" : "Views"}
                    </span>
                  </div>
                  <h2 className="mt-3 flex-1 text-lg font-bold text-ink group-hover:text-brand-blue">
                    {post.title}
                  </h2>
                </div>
              </Link>
              <div className="px-6 pb-6 pt-5">
                <ReadMoreButton
                  href={`/resources/${post.slug}`}
                  className="!px-6 !py-2.5 !text-sm"
                />
              </div>
            </div>
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </section>
    </>
  );
}
