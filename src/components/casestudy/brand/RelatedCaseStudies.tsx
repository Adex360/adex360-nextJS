import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type RelatedCaseStudy = {
  brand: string;
  quote: string;
  image: StaticImageData;
  href: string;
};

export default function RelatedCaseStudies({ items }: { items: RelatedCaseStudy[] }) {
  return (
    <section className="overflow-hidden bg-white px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div data-reveal-group="" data-stagger="0.1" className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.brand}
            href={item.href}
            data-reveal="up"
            className="group relative aspect-[1024/682] overflow-hidden rounded-3xl shadow-lg shadow-brand-900/10"
          >
            <Image
              src={item.image}
              alt={item.brand}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <p className="absolute bottom-16 left-6 right-6 text-sm leading-relaxed text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.quote}
            </p>
            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">Case Study</p>
              <p className="mt-1 text-lg font-extrabold text-white">{item.brand}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
