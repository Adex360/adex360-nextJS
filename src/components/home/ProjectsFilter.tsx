"use client";

import { useState } from "react";
import Image from "next/image";

export type ProjectCard = {
  id: string;
  name: string;
  service: string;
  image: string | null;
  industryName: string;
};

const ALL = "All";

export default function ProjectsFilter({
  projects,
  industries,
}: {
  projects: ProjectCard[];
  industries: string[];
}) {
  const [active, setActive] = useState(ALL);
  const filtered = active === ALL ? projects : projects.filter((p) => p.industryName === active);

  return (
    <>
      <div
        data-reveal-group=""
        data-stagger="0.05"
        className="-mx-4 mt-8 flex items-center gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0"
      >
        {[ALL, ...industries].map((industry) => (
          <button
            key={industry}
            data-reveal="fade"
            onClick={() => setActive(industry)}
            aria-pressed={active === industry}
            className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === industry
                ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                : "bg-surface text-muted hover:bg-surface-alt hover:text-ink"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      <div
        data-reveal-group=""
        data-stagger="0.1"
        data-parallax="4"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {filtered.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

function ProjectTile({ project }: { project: ProjectCard }) {
  return (
    <div
      data-reveal="up"
      className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative aspect-video overflow-hidden bg-surface">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.name} — ${project.service} project screenshot`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div>
          <p className="text-sm font-bold text-ink">{project.name}</p>
          <p className="text-xs text-muted">{project.service}</p>
        </div>
        <span className="shrink-0 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-brand-blue">
          {project.industryName}
        </span>
      </div>
    </div>
  );
}
