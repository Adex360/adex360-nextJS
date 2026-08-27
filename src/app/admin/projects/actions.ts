"use server";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { createImageStore } from "@/lib/imageStore";
import { SERVICE_LABELS } from "@/lib/services";
import { ProjectStatus } from "@/generated/prisma/client";

// Uploads get their own folder rather than sitting alongside the screenshots
// committed to public/images/projects. Deletes are scoped to the store's own
// prefix, so removing a seeded project can never unlink an asset that's in git.
const projectImages = createImageStore("/images/projects/uploads/");

async function requireSession() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  return session;
}

function readProjectFields(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const industryId = String(formData.get("industryId") ?? "");
  const status: ProjectStatus =
    formData.get("status") === "DRAFT" ? ProjectStatus.DRAFT : ProjectStatus.PUBLISHED;

  if (!name || !service || !industryId) {
    throw new Error("Name, service, and industry are required.");
  }
  // The service list is a closed set from the site's own nav, so anything
  // else means a tampered or stale form rather than a typo worth keeping.
  if (!SERVICE_LABELS.includes(service)) {
    throw new Error(`"${service}" is not one of the site's services.`);
  }

  return { name, service, industryId, status };
}

/** Slug collisions are a real hazard here — two "Nishat" projects a year
 *  apart is plausible — so suffix rather than fail the save. */
async function uniqueSlug(base: string, ignoreId?: string): Promise<string> {
  const root = slugify(base) || "project";
  let candidate = root;
  for (let n = 2; ; n++) {
    const clash = await prisma.project.findUnique({ where: { slug: candidate } });
    if (!clash || clash.id === ignoreId) return candidate;
    candidate = `${root}-${n}`;
  }
}

function revalidateProjectSurfaces() {
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function createProject(formData: FormData) {
  await requireSession();

  const f = readProjectFields(formData);
  const slug = await uniqueSlug(f.name);
  const image = await projectImages.save(formData, "image", null);

  await prisma.project.create({
    data: {
      name: f.name,
      slug,
      service: f.service,
      image,
      status: f.status,
      industryId: f.industryId,
    },
  });

  revalidateProjectSurfaces();
  redirect("/admin?tab=projects");
}

export async function updateProject(projectId: string, formData: FormData) {
  await requireSession();

  const f = readProjectFields(formData);

  const existing = await prisma.project.findUnique({ where: { id: projectId } });
  if (!existing) throw new Error("Project not found.");

  const slug = await uniqueSlug(f.name, projectId);
  const image = await projectImages.save(formData, "image", existing.image);

  await prisma.project.update({
    where: { id: projectId },
    data: {
      name: f.name,
      slug,
      service: f.service,
      image,
      status: f.status,
      industryId: f.industryId,
    },
  });

  revalidateProjectSurfaces();
  redirect("/admin?tab=projects");
}

export async function deleteProject(formData: FormData) {
  await requireSession();

  const projectId = String(formData.get("projectId") ?? "");
  if (!projectId) throw new Error("Missing project id.");

  const existing = await prisma.project.findUnique({ where: { id: projectId } });
  await prisma.project.delete({ where: { id: projectId } });
  await projectImages.remove(existing?.image ?? null);

  revalidateProjectSurfaces();
  redirect("/admin?tab=projects");
}

export async function createIndustry(name: string): Promise<{ id: string; name: string }> {
  await requireSession();

  const trimmed = name.trim();
  if (!trimmed) throw new Error("Industry name is required.");

  const slug = slugify(trimmed);
  const existing = await prisma.industry.findUnique({ where: { slug } });
  if (existing) throw new Error("An industry with that name already exists.");

  const industry = await prisma.industry.create({ data: { name: trimmed, slug } });
  revalidatePath("/admin/projects/new");
  return { id: industry.id, name: industry.name };
}
