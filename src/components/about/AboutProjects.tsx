import Link from "next/link";
import { ArrowRight, Bell, Code2, Monitor } from "lucide-react";

const projects = [
  {
    name: "D2C Western Clothing",
    category: "SEO Services",
    icon: Monitor,
    gradient: "from-brand-blue to-brand-600",
  },
  {
    name: "Fashion Retail",
    category: "Web Development",
    icon: Code2,
    gradient: "from-[#F7B45C] to-[#E38A19]",
  },
  {
    name: "Retention Marketing",
    category: "Shopify App Development",
    icon: Bell,
    gradient: "from-[#6B4EE6] to-brand-blue",
  },
];

export default function AboutProjects() {
  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" className="mx-auto max-w-7xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Previous Projects
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Our Featured Projects
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.name}
                data-reveal="up"
                className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand-900/5 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div
                  className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <Icon className="h-16 w-16 text-white/90" strokeWidth={1.2} />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-ink">{project.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div
          data-reveal="up"
          data-reveal-delay="0.15"
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand-900 p-8 text-center sm:flex-row sm:text-left md:mt-12 md:p-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue-light">
              Our success stories
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              Adex Proud Projects!
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/70">
              Curious about real results? Dive into our project page and discover how we&rsquo;ve
              transformed brands with expert marketing and tech strategies.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-900 shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
