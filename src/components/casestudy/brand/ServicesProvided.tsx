import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type Service = { title: string; description: string; href: string };

export default function ServicesProvided({ services }: { services: Service[] }) {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8" style={{ background: "linear-gradient(135deg, #eef1fb 0%, #dbe4fb 100%)" }}>
      <div data-reveal="up" className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-2xl shadow-brand-900/10 sm:p-10">
        <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Services Provided</h2>
        <div className="mt-6 divide-y divide-[#E4E8F3]">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-start justify-between gap-4 py-5 first:pt-0 last:pb-0"
            >
              <div>
                <p className="text-sm font-bold text-ink">{service.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-colors duration-200 group-hover:bg-brand-blue group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
