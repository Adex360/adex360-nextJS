import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import PostForm from "@/components/admin/PostForm";
import { createPost } from "../actions";

export const metadata = {
  title: "New Post | Adex360 Admin",
};

export default async function NewPostPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const [categories, authors] = await Promise.all([
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.author.findMany({ orderBy: { name: "asc" } }),
  ]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <h1 className="mt-4 text-2xl font-extrabold text-ink">Add New Blog Post</h1>

      <PostForm action={createPost} categories={categories} authors={authors} submitLabel="Save Post" />
    </div>
  );
}
