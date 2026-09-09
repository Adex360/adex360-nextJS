import { prisma, withDbFallback } from "@/lib/prisma";
import { HOME_PROJECTS_COUNT } from "@/lib/projects";
import ProjectsFilter, { type ProjectCard } from "./ProjectsFilter";

/**
 * "Our Latest and Completed Project" — always the most recently published
 * projects from the admin dashboard's Projects tab; there's no manual
 * per-project toggle, so publishing is what puts a project here. The filter
 * tabs are the industries those specific projects belong to, so there's
 * never a tab that filters to nothing.
 *
 * Fetches its own data rather than taking props: the query belongs next to the
 * markup that needs it, and the home page is already dynamic for the blog.
 */
export default async function Projects() {
  const projects = await withDbFallback(
    "home latest projects",
    () =>
      prisma.project.findMany({
        where: { status: "PUBLISHED" },
        orderBy: { createdAt: "desc" },
        take: HOME_PROJECTS_COUNT,
        include: { industry: true },
      }),
    []
  );

  if (projects.length === 0) return null;

  const cards: ProjectCard[] = projects.map((project) => ({
    id: project.id,
    name: project.name,
    service: project.service,
    image: project.image,
    industryName: project.industry.name,
  }));

  // Tab order follows when each industry was created, which keeps the
  // long-standing FMCG → D2C → Apparel → Home Decor order stable no matter
  // how the projects themselves get sorted.
  const industries = [
    ...new Map(
      projects
        .slice()
        .sort((a, b) => a.industry.createdAt.getTime() - b.industry.createdAt.getTime())
        .map((project) => [project.industry.id, project.industry.name])
    ).values(),
  ];

  return (
    <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p
            data-reveal="up"
            className="text-xs font-semibold uppercase tracking-widest text-brand-blue"
          >
            Latest Projects
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Our Latest and Completed Project
          </h2>
        </div>

        <ProjectsFilter projects={cards} industries={industries} />
      </div>
    </section>
  );
}
