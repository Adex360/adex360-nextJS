import Link from "next/link";
import Image from "next/image";
import { ImageOff, Pencil, Plus, Star } from "lucide-react";
import DeleteProjectButton from "./DeleteProjectButton";
import StatusFilterTabs, { type StatusKey } from "./StatusFilterTabs";
import { formatAdminDate, StatusBadge, TH, TD } from "./tableUi";

export type ProjectRow = {
  id: string;
  name: string;
  slug: string;
  service: string;
  industryName: string;
  image: string | null;
  status: "DRAFT" | "PUBLISHED";
  createdAt: Date;
  /** Computed, not stored: true for the 4 most recently published projects
   *  — the exact set the home page is currently showing. */
  onHomePage: boolean;
};

function hrefFor(status: StatusKey) {
  return status === "all" ? "/admin?tab=projects" : `/admin?tab=projects&status=${status}`;
}

export default function ProjectsPanel({
  projects,
  counts,
  activeStatus,
}: {
  projects: ProjectRow[];
  counts: Record<StatusKey, number>;
  activeStatus: StatusKey;
}) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-ink">Projects</h2>
          <p className="mt-0.5 text-sm text-muted">
            The home page&rsquo;s &ldquo;Our Latest and Completed Project&rdquo; section always
            shows the 4 most recently published projects.
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Add New Project
        </Link>
      </div>

      <div className="mt-5">
        <StatusFilterTabs active={activeStatus} counts={counts} hrefFor={hrefFor} />
      </div>

      {projects.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-dashed border-[#E4E8F3] p-8 text-center text-sm text-muted">
          {activeStatus === "all"
            ? 'No projects yet. Click "Add New Project" to add the first one.'
            : `No ${activeStatus} projects.`}
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E4E8F3] bg-white">
          <table className="w-full min-w-[48rem] text-left text-sm">
            <thead className="border-b border-[#E4E8F3] bg-surface text-xs font-semibold uppercase tracking-wide text-muted">
              <tr>
                <TH>Project</TH>
                <TH>Industry</TH>
                <TH>Service</TH>
                <TH>On Home</TH>
                <TH>Status</TH>
                <TH>Created</TH>
                <TH className="text-right">Actions</TH>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-[#E4E8F3] last:border-none">
                  <TD>
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-11 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface text-muted">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt=""
                            fill
                            sizes="64px"
                            className="object-cover object-top"
                          />
                        ) : (
                          <ImageOff className="h-4 w-4" />
                        )}
                      </span>
                      <span className="font-semibold text-ink">{project.name}</span>
                    </div>
                  </TD>
                  <TD className="text-muted">{project.industryName}</TD>
                  <TD className="text-muted">{project.service}</TD>
                  <TD>
                    {project.onHomePage ? (
                      <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-brand-blue/10 px-2.5 py-1 text-xs font-semibold text-brand-blue">
                        <Star className="h-3 w-3 fill-current" />
                        On Home
                      </span>
                    ) : (
                      <span className="text-xs text-muted">&mdash;</span>
                    )}
                  </TD>
                  <TD>
                    <StatusBadge status={project.status} />
                  </TD>
                  <TD className="whitespace-nowrap text-muted">
                    {formatAdminDate(project.createdAt)}
                  </TD>
                  <TD>
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/admin/projects/${project.id}/edit`}
                        aria-label={`Edit ${project.name}`}
                        className="rounded-lg p-1.5 text-muted transition-colors hover:bg-brand-blue/10 hover:text-brand-blue"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <DeleteProjectButton projectId={project.id} projectName={project.name} />
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
