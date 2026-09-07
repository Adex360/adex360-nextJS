import { getServerSession } from "next-auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProjectForm from "@/components/admin/ProjectForm";
import { updateProject } from "../../actions";

export const metadata = {
  title: "Edit Project | Adex360 Admin",
};

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { id } = await params;

  const [project, industries] = await Promise.all([
    prisma.project.findUnique({ where: { id } }),
    prisma.industry.findMany({ orderBy: { name: "asc" } }),
  ]);

  if (!project) notFound();

  const updateProjectWithId = updateProject.bind(null, project.id);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/admin?tab=projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <h1 className="mt-4 text-2xl font-extrabold text-ink">Edit Project</h1>

      <ProjectForm
        action={updateProjectWithId}
        industries={industries}
        submitLabel="Update Project"
        defaultValues={{
          name: project.name,
          service: project.service,
          image: project.image ?? "",
          industryId: project.industryId,
          status: project.status,
        }}
      />
    </div>
  );
}
