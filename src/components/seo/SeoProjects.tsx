import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import imgD2cWesternClothing from "../../../public/images/portfolio/one.png";
import imgHealthPersonalCare from "../../../public/images/portfolio/butterfly.png";
import imgD2cFashion from "../../../public/images/portfolio/nishat.png";

const projects = [
  { name: "D2C Western Clothing", service: "SEO Services", href: "/beoneshopone", image: imgD2cWesternClothing },
  { name: "Health & Personal Care", service: "SEO Services", href: "/butterfly", image: imgHealthPersonalCare },
  { name: "D2C Fashion", service: "SEO Services", href: "/nishat-uae", image: imgD2cFashion },
];

export default function SeoProjects() {
  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Previous Projects
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Our Featured Projects
          </h2>
        </div>

        <div data-reveal-group="" data-stagger="0.12" data-parallax="4" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              data-reveal="up"
              className="group overflow-hidden rounded-3xl border border-[#E4E8F3] bg-white shadow-lg shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <span className="group/arrow absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/arrow:rotate-[45deg]" />
                </span>
              </div>
              <div className="px-6 py-5">
                <p className="text-sm font-bold text-ink">{project.name}</p>
                <p className="mt-0.5 text-xs text-muted">{project.service}</p>
              </div>
            </Link>
          ))}
        </div>

        <div
          data-reveal="up"
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-8 shadow-lg shadow-brand-900/5 sm:flex-row sm:p-10"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-extrabold sm:text-2xl">
              <span className="text-[#E38A19]">SEO success stories</span>
              <span className="text-brand-blue"> &mdash; Adex Proud Projects!</span>
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Curious about real results? Dive into our project page and discover
              how we&apos;ve transformed brands with expert SEO strategies!
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 hover:opacity-90"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
