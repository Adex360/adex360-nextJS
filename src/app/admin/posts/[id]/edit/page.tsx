import { getServerSession } from "next-auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import PostForm from "@/components/admin/PostForm";
import { updatePost } from "../../actions";

export const metadata = {
  title: "Edit Post | Adex360 Admin",
};

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { id } = await params;

  const [post, categories, authors] = await Promise.all([
    prisma.post.findUnique({ where: { id }, include: { tags: true } }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.author.findMany({ orderBy: { name: "asc" } }),
  ]);

  if (!post) notFound();

  const updatePostWithId = updatePost.bind(null, post.id);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <h1 className="mt-4 text-2xl font-extrabold text-ink">Edit Blog Post</h1>

      <PostForm
        action={updatePostWithId}
        categories={categories}
        authors={authors}
        submitLabel="Update Post"
        defaultValues={{
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          featuredImage: post.featuredImage ?? "",
          categoryId: post.categoryId,
          authorId: post.authorId,
          tags: post.tags.map((tag) => tag.name).join(", "),
          status: post.status,
          seoTitle: post.seoTitle ?? "",
          seoDescription: post.seoDescription ?? "",
        }}
      />
    </div>
  );
}
