"use server";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { mkdir, writeFile, unlink } from "fs/promises";
import path from "path";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { PostStatus } from "@/generated/prisma/client";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const BLOG_IMAGE_DIR = path.join(PUBLIC_DIR, "images", "blog");

/**
 * Deletes a previously-uploaded featured image from disk. Only ever touches
 * files under public/images/blog — a no-op for external URLs (e.g. legacy
 * posts saved back when this was a plain URL field) or missing files.
 */
async function deleteLocalImage(imagePath: string | null) {
  if (!imagePath || !imagePath.startsWith("/images/blog/")) return;
  try {
    await unlink(path.join(PUBLIC_DIR, imagePath));
  } catch {
    // File already gone (or never existed) — nothing to clean up.
  }
}

/**
 * Saves an uploaded featured image to public/images/blog and returns its
 * public URL, deleting whatever image it replaces. Falls back to the
 * existing image (edit) or null (new post + no file chosen) when no new
 * file was uploaded; deletes the existing image outright when the user
 * explicitly removed it.
 */
async function saveFeaturedImage(
  formData: FormData,
  fallback: string | null
): Promise<string | null> {
  if (formData.get("removeFeaturedImage") === "true") {
    await deleteLocalImage(fallback);
    return null;
  }

  const file = formData.get("featuredImage");

  if (file instanceof File && file.size > 0) {
    const bytes = Buffer.from(await file.arrayBuffer());
    const ext = path.extname(file.name) || ".jpg";
    const base = slugify(path.basename(file.name, ext)) || "image";
    const filename = `${Date.now()}-${base}${ext}`;

    await mkdir(BLOG_IMAGE_DIR, { recursive: true });
    await writeFile(path.join(BLOG_IMAGE_DIR, filename), bytes);
    await deleteLocalImage(fallback);

    return `/images/blog/${filename}`;
  }

  const existing = String(formData.get("existingFeaturedImage") ?? "").trim();
  return existing || fallback;
}

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
  const featuredImage = await saveFeaturedImage(formData, null);

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

  const featuredImage = await saveFeaturedImage(formData, existing.featuredImage);

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
  await deleteLocalImage(existing?.featuredImage ?? null);

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
