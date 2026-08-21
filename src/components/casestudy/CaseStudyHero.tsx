import Image, { type StaticImageData } from "next/image";
import BackToPortfolio from "./BackToPortfolio";

export default function CaseStudyHero({
  eyebrow,
  title,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  image: StaticImageData;
  imageAlt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface px-4 pb-10 pt-10 sm:px-6 md:pt-14 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div data-reveal-group="" className="relative mx-auto max-w-4xl text-center">
        <div className="flex justify-center">
          <BackToPortfolio variant="light" />
        </div>

        <p data-reveal="up" className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          {eyebrow} &middot; Case Study
        </p>
        <h1 data-reveal="up" className="mt-3 text-2xl font-extrabold leading-tight text-ink sm:text-3xl lg:text-4xl">
          {title}
        </h1>

        <div
          data-reveal="scale"
          data-reveal-delay="0.1"
          className="relative mx-auto mt-10 aspect-[1900/944] w-full overflow-hidden rounded-3xl shadow-2xl shadow-brand-900/10"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
