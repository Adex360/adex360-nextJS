import Link from "next/link";
import { Pencil, Plus } from "lucide-react";
import DeletePostButton from "./DeletePostButton";
import StatusFilterTabs, { type StatusKey } from "./StatusFilterTabs";
import { formatAdminDate, StatusBadge, TH, TD } from "./tableUi";

export type PostRow = {
  id: string;
  title: string;
  slug: string;
  categoryName: string;
  authorName: string;
  status: "DRAFT" | "PUBLISHED";
  createdAt: Date;
};

export default function PostsPanel({
  posts,
  counts,
  activeStatus,
}: {
  posts: PostRow[];
  counts: Record<StatusKey, number>;
  activeStatus: StatusKey;
}) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-ink">Blog Posts</h2>
          <p className="mt-0.5 text-sm text-muted">
            Published posts appear on the Marketing Insights page and in the home page slider.
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Add New Blog
        </Link>
      </div>

      <div className="mt-5">
        <StatusFilterTabs
          active={activeStatus}
          counts={counts}
          hrefFor={(status) => (status === "all" ? "/admin" : `/admin?status=${status}`)}
        />
      </div>

      {posts.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-dashed border-[#E4E8F3] p-8 text-center text-sm text-muted">
          {activeStatus === "all"
            ? 'No posts yet. Click "Add New Blog" to write the first one.'
            : `No ${activeStatus} posts.`}
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E4E8F3] bg-white">
          <table className="w-full min-w-[42rem] text-left text-sm">
            <thead className="border-b border-[#E4E8F3] bg-surface text-xs font-semibold uppercase tracking-wide text-muted">
              <tr>
                <TH>Title</TH>
                <TH>Category</TH>
                <TH>Author</TH>
                <TH>Status</TH>
                <TH>Created</TH>
                <TH className="text-right">Actions</TH>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-[#E4E8F3] last:border-none">
                  <TD>
                    <span className="font-semibold text-ink">{post.title}</span>
                    <span className="mt-0.5 block text-xs text-muted">/{post.slug}</span>
                  </TD>
                  <TD className="text-muted">{post.categoryName}</TD>
                  <TD className="text-muted">{post.authorName}</TD>
                  <TD>
                    <StatusBadge status={post.status} />
                  </TD>
                  <TD className="whitespace-nowrap text-muted">
                    {formatAdminDate(post.createdAt)}
                  </TD>
                  <TD>
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
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
