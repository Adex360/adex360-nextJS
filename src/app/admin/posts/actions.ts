"use server";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { createImageStore } from "@/lib/imageStore";
import { PostStatus } from "@/generated/prisma/client";

const featuredImages = createImageStore("/images/blog/");

async function requireSession() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  return session;
}

function readPostFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const seoTitle = String(formData.get("seoTitle") ?? "").trim();
  const seoDescription = String(formData.get("seoDescription") ?? "").trim();
  const categoryId = String(formData.get("categoryId") ?? "");
  const authorId = String(formData.get("authorId") ?? "");
  const tagsInput = String(formData.get("tags") ?? "");
  const status: PostStatus =
    formData.get("status") === "PUBLISHED" ? PostStatus.PUBLISHED : PostStatus.DRAFT;

  if (!title || !excerpt || !content || !categoryId || !authorId) {
    throw new Error("Title, excerpt, content, category, and author are required.");
  }

  const tags = tagsInput
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return { title, slugInput, excerpt, content, seoTitle, seoDescription, categoryId, authorId, tags, status };
}

export async function createPost(formData: FormData) {
  await requireSession();

  const f = readPostFields(formData);
  const slug = slugify(f.slugInput || f.title);
  const featuredImage = await featuredImages.save(formData, "featuredImage", null);

  await prisma.post.create({
    data: {
      title: f.title,
      slug,
      excerpt: f.excerpt,
      content: f.content,
      featuredImage,
      seoTitle: f.seoTitle || null,
      seoDescription: f.seoDescription || null,
      status: f.status,
      publishedAt: f.status === "PUBLISHED" ? new Date() : null,
      tags: f.tags,
      authorId: f.authorId,
      categoryId: f.categoryId,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/resources");
  redirect("/admin");
}

export async function updatePost(postId: string, formData: FormData) {
  await requireSession();

  const f = readPostFields(formData);
  const slug = slugify(f.slugInput || f.title);

  const existing = await prisma.post.findUnique({ where: { id: postId } });
  if (!existing) throw new Error("Post not found.");

  const featuredImage = await featuredImages.save(
    formData,
    "featuredImage",
    existing.featuredImage
  );

  await prisma.post.update({
    where: { id: postId },
    data: {
      title: f.title,
      slug,
      excerpt: f.excerpt,
      content: f.content,
      featuredImage,
      seoTitle: f.seoTitle || null,
      seoDescription: f.seoDescription || null,
      status: f.status,
      publishedAt:
        f.status === "PUBLISHED" ? existing.publishedAt ?? new Date() : null,
      tags: f.tags,
      authorId: f.authorId,
      categoryId: f.categoryId,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/resources");
  redirect("/admin");
}

export async function deletePost(formData: FormData) {
  await requireSession();

  const postId = String(formData.get("postId") ?? "");
  if (!postId) throw new Error("Missing post id.");

  const existing = await prisma.post.findUnique({ where: { id: postId } });
  await prisma.post.delete({ where: { id: postId } });
  await featuredImages.remove(existing?.featuredImage ?? null);

  revalidatePath("/admin");
  revalidatePath("/resources");
  redirect("/admin");
}

export async function createCategory(name: string): Promise<{ id: string; name: string }> {
  await requireSession();

  const trimmed = name.trim();
  if (!trimmed) throw new Error("Category name is required.");

  const slug = slugify(trimmed);
  const existing = await prisma.category.findUnique({ where: { slug } });
  if (existing) throw new Error("A category with that name already exists.");

  const category = await prisma.category.create({ data: { name: trimmed, slug } });
  revalidatePath("/admin/posts/new");
  return { id: category.id, name: category.name };
}

export async function createAuthor(name: string): Promise<{ id: string; name: string }> {
  await requireSession();

  const trimmed = name.trim();
  if (!trimmed) throw new Error("Author name is required.");

  const author = await prisma.author.create({ data: { name: trimmed } });
  revalidatePath("/admin/posts/new");
  return { id: author.id, name: author.name };
}
