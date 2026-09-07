import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProjectForm from "@/components/admin/ProjectForm";
import { createProject } from "../actions";

export const metadata = {
  title: "New Project | Adex360 Admin",
};

export default async function NewProjectPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const industries = await prisma.industry.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/admin?tab=projects"
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-brand-blue"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      <h1 className="mt-4 text-2xl font-extrabold text-ink">Add New Project</h1>
      <p className="mt-1 text-sm text-muted">
        Published projects appear in &ldquo;Our Latest and Completed Project&rdquo; on the home page.
      </p>

      <ProjectForm action={createProject} industries={industries} submitLabel="Save Project" />
    </div>
  );
}
