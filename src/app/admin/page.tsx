import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Pencil, Plus } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PostStatus } from "@/generated/prisma/client";
import SignOutButton from "@/components/admin/SignOutButton";
import DeletePostButton from "@/components/admin/DeletePostButton";

const TABS = [
  { key: "all", label: "All" },
  { key: "draft", label: "Draft" },
  { key: "published", label: "Published" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function statusFilter(tab: TabKey): PostStatus | undefined {
  if (tab === "draft") return PostStatus.DRAFT;
  if (tab === "published") return PostStatus.PUBLISHED;
  return undefined;
}

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { status } = await searchParams;
  const activeTab: TabKey = TABS.some((t) => t.key === status) ? (status as TabKey) : "all";

  const [postCount, draftCount, publishedCount, categoryCount, posts] = await Promise.all([
    prisma.post.count(),
    prisma.post.count({ where: { status: PostStatus.DRAFT } }),
    prisma.post.count({ where: { status: PostStatus.PUBLISHED } }),
    prisma.category.count(),
    prisma.post.findMany({
      where: statusFilter(activeTab) ? { status: statusFilter(activeTab) } : undefined,
      orderBy: { createdAt: "desc" },
      include: { category: true },
    }),
  ]);

  const tabCounts: Record<TabKey, number> = {
    all: postCount,
    draft: draftCount,
    published: publishedCount,
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-ink">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">Signed in as {session.user?.email}</p>
        </div>
        <SignOutButton />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
        <div className="rounded-2xl border border-[#E4E8F3] bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Posts</p>
          <p className="mt-1 text-3xl font-extrabold text-ink">{postCount}</p>
        </div>
        <div className="rounded-2xl border border-[#E4E8F3] bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Categories</p>
          <p className="mt-1 text-3xl font-extrabold text-ink">{categoryCount}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-ink">Blog Posts</h2>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Add New Blog
        </Link>
      </div>

      <div className="mt-5 inline-flex items-center gap-1 rounded-full border border-[#E4E8F3] bg-white p-1">
        {TABS.map((tab) => (
          <Link
            key={tab.key}
            href={tab.key === "all" ? "/admin" : `/admin?status=${tab.key}`}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeTab === tab.key
                ? "bg-brand-blue text-white"
                : "text-muted hover:text-ink"
            }`}
          >
            {tab.label} ({tabCounts[tab.key]})
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-dashed border-[#E4E8F3] p-8 text-center text-sm text-muted">
          {activeTab === "all"
            ? 'No posts yet. Click "Add New Blog" to create the first one.'
            : `No ${activeTab} posts.`}
        </p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#E4E8F3] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[#E4E8F3] bg-surface text-xs font-semibold uppercase tracking-wide text-muted">
              <tr>
                <th className="px-5 py-3">Title</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Created</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-[#E4E8F3] last:border-none">
                  <td className="px-5 py-4 font-semibold text-ink">{post.title}</td>
                  <td className="px-5 py-4 text-muted">{post.category.name}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                        post.status === "PUBLISHED"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {post.status === "PUBLISHED" ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted">
                    {post.createdAt.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        aria-label={`Edit ${post.title}`}
                        className="rounded-lg p-1.5 text-muted transition-colors hover:bg-brand-blue/10 hover:text-brand-blue"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <DeletePostButton postId={post.id} postTitle={post.title} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
