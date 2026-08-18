"use client";

import { useState } from "react";

const categories = ["All", "FMCG", "D2C", "Apparel", "Footwear", "Home Decor"];

const projects = [
  { name: "Butterfly", category: "FMCG", service: "SEO Services", gradient: "from-brand-orange to-brand-600" },
  { name: "Nishat UAE", category: "Apparel", service: "SEO Services", gradient: "from-brand-blue to-brand-900" },
  { name: "Logo Official", category: "D2C", service: "Web Development", gradient: "from-brand-600 to-brand-orange" },
  { name: "Wellew Home", category: "Home Decor", service: "Web Development", gradient: "from-brand-900 to-brand-blue" },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Latest Projects
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Our Latest and Completed Project
          </h2>
        </div>

        <div data-reveal-group="" data-stagger="0.05" className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              data-reveal="fade"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30"
                  : "bg-surface text-muted hover:bg-surface-alt hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div data-reveal-group="" data-stagger="0.1" className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <div
              key={project.name}
              data-reveal="up"
              className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className={`flex aspect-video items-center justify-center bg-gradient-to-br ${project.gradient} text-2xl font-extrabold text-white transition-transform duration-500 group-hover:scale-105`}
              >
                {project.name}
              </div>
              <div className="flex items-center justify-between px-6 py-5">
                <div>
                  <p className="text-sm font-bold text-ink">{project.name}</p>
                  <p className="text-xs text-muted">{project.service}</p>
                </div>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-brand-blue">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
