import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FileText, FolderKanban, Layers, PenLine, Star, Tags } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PostStatus, ProjectStatus } from "@/generated/prisma/client";
import SignOutButton from "@/components/admin/SignOutButton";
import AdminTabs, { type SectionKey } from "@/components/admin/AdminTabs";
import StatCard from "@/components/admin/StatCard";
import PostsPanel from "@/components/admin/PostsPanel";
import ProjectsPanel from "@/components/admin/ProjectsPanel";
import { STATUS_TABS, type StatusKey } from "@/components/admin/StatusFilterTabs";
import { HOME_PROJECTS_COUNT } from "@/lib/projects";

export const metadata = {
  title: "Dashboard | Adex360 Admin",
};

function readSection(value?: string): SectionKey {
  return value === "projects" ? "projects" : "posts";
}

function readStatus(value?: string): StatusKey {
  return STATUS_TABS.some((t) => t.key === value) ? (value as StatusKey) : "all";
}

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string; status?: string }>;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { tab, status } = await searchParams;
  const section = readSection(tab);
  const activeStatus = readStatus(status);

  // Both tab badges are always visible, so both totals are always needed —
  // but only the open tab's rows and stats get fetched.
  const [postTotal, projectTotal] = await Promise.all([
    prisma.post.count(),
    prisma.project.count(),
  ]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-ink">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">Signed in as {session.user?.email}</p>
        </div>
        <SignOutButton />
      </div>

      <AdminTabs active={section} counts={{ posts: postTotal, projects: projectTotal }} />

      {section === "posts" ? (
        <PostsSection total={postTotal} activeStatus={activeStatus} />
      ) : (
        <ProjectsSection total={projectTotal} activeStatus={activeStatus} />
      )}
    </div>
  );
}

async function PostsSection({
  total,
  activeStatus,
}: {
  total: number;
  activeStatus: StatusKey;
}) {
  const [draftCount, publishedCount, categoryCount, authorCount, posts] = await Promise.all([
    prisma.post.count({ where: { status: PostStatus.DRAFT } }),
    prisma.post.count({ where: { status: PostStatus.PUBLISHED } }),
    prisma.category.count(),
    prisma.author.count(),
    prisma.post.findMany({
      where:
        activeStatus === "all"
          ? undefined
          : {
              status:
                activeStatus === "draft" ? PostStatus.DRAFT : PostStatus.PUBLISHED,
            },
      orderBy: { createdAt: "desc" },
      include: { category: true, author: true },
    }),
  ]);

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Posts" value={total} icon={FileText} />
        <StatCard label="Published" value={publishedCount} icon={Layers} hint="Live on the site" />
        <StatCard label="Drafts" value={draftCount} icon={PenLine} hint="Not yet visible" />
        <StatCard label="Categories" value={categoryCount} icon={Tags} hint={`${authorCount} authors`} />
      </div>

      <PostsPanel
        activeStatus={activeStatus}
        counts={{ all: total, draft: draftCount, published: publishedCount }}
        posts={posts.map((post) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          categoryName: post.category.name,
          authorName: post.author.name,
          status: post.status,
          createdAt: post.createdAt,
        }))}
      />
    </>
  );
}

async function ProjectsSection({
  total,
  activeStatus,
}: {
  total: number;
  activeStatus: StatusKey;
}) {
  const [draftCount, publishedCount, industryCount, homeProjects, projects] = await Promise.all([
    prisma.project.count({ where: { status: ProjectStatus.DRAFT } }),
    prisma.project.count({ where: { status: ProjectStatus.PUBLISHED } }),
    prisma.industry.count(),
    prisma.project.findMany({
      where: { status: ProjectStatus.PUBLISHED },
      orderBy: { createdAt: "desc" },
      take: HOME_PROJECTS_COUNT,
      select: { id: true },
    }),
    prisma.project.findMany({
      where:
        activeStatus === "all"
          ? undefined
          : {
              status:
                activeStatus === "draft" ? ProjectStatus.DRAFT : ProjectStatus.PUBLISHED,
            },
      orderBy: { createdAt: "desc" },
      include: { industry: true },
    }),
  ]);

  const homeProjectIds = new Set(homeProjects.map((p) => p.id));

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Projects" value={total} icon={FolderKanban} />
        <StatCard label="Published" value={publishedCount} icon={Layers} hint="Live on the site" />
        <StatCard
          label="On Home Page"
          value={homeProjectIds.size}
          icon={Star}
          hint={`Automatically the ${HOME_PROJECTS_COUNT} most recently published`}
        />
        <StatCard
          label="Industries"
          value={industryCount}
          icon={Tags}
          hint="Home page filter tabs"
        />
      </div>

      <ProjectsPanel
        activeStatus={activeStatus}
        counts={{ all: total, draft: draftCount, published: publishedCount }}
        projects={projects.map((project) => ({
          id: project.id,
          name: project.name,
          slug: project.slug,
          service: project.service,
          industryName: project.industry.name,
          image: project.image,
          status: project.status,
          createdAt: project.createdAt,
          onHomePage: homeProjectIds.has(project.id),
        }))}
      />
    </>
  );
}
