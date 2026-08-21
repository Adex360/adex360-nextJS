import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import imgEu from "../../../public/images/portfolio/eu.png";
import imgOne from "../../../public/images/portfolio/one.png";
import imgAkGalleria from "../../../public/images/portfolio/ak-galleria.png";
import imgButterfly from "../../../public/images/portfolio/butterfly.png";
import imgLogoShoes from "../../../public/images/portfolio/logo-shoes.png";
import imgWeltew from "../../../public/images/portfolio/weltew.png";
import imgEcs from "../../../public/images/portfolio/ecs.png";
import imgNishat from "../../../public/images/portfolio/nishat.png";
import imgUniversalProductFeed from "../../../public/images/portfolio/universal-product-feed.jpg";
import imgMailbot from "../../../public/images/portfolio/mailbot.jpg";
import imgBeechtree from "../../../public/images/portfolio/beechtree.png";
import imgPushbot from "../../../public/images/portfolio/pushbot.png";
import imgSeona from "../../../public/images/portfolio/seona.png";
import imgKiko from "../../../public/images/portfolio/kiko.png";

type Project = {
  name: string;
  category: string;
  href: string;
  image: StaticImageData;
};

const projects: Project[] = [
  { name: "EU Naturals", category: "SEO Services", href: "/eu", image: imgEu },
  { name: "D2C Western Clothing", category: "SEO Services", href: "/beoneshopone", image: imgOne },
  { name: "Fashion Retail", category: "Web Development", href: "/ak-galleria", image: imgAkGalleria },
  { name: "Health & Personal Care", category: "SEO Services", href: "/butterfly", image: imgButterfly },
  { name: "Premium Footwear", category: "Web Development", href: "/logo-official", image: imgLogoShoes },
  { name: "B2B Home Décor", category: "Web Development", href: "/weltew-home", image: imgWeltew },
  { name: "Footwear Retail", category: "Performance Marketing", href: "/ecs", image: imgEcs },
  { name: "Luxury Pret Wear", category: "Social Media Management", href: "/nishat-usa", image: imgNishat },
  { name: "D2C Fashion", category: "SEO Services", href: "/nishat-uae", image: imgNishat },
  {
    name: "Universal Product Feed",
    category: "Shopify App Development",
    href: "/universal-product-feed",
    image: imgUniversalProductFeed,
  },
  { name: "Mailbot", category: "Shopify App Development", href: "/mailbot", image: imgMailbot },
  { name: "Urban Fashion & Lifestyle Retail", category: "Performance Marketing", href: "/one", image: imgOne },
  { name: "Fashion & Apparel", category: "Social Media Management", href: "/beechtree", image: imgBeechtree },
  { name: "PushBot", category: "Shopify App Development", href: "/pushbot", image: imgPushbot },
  { name: "Heritage Fashion E-commerce", category: "Social Media Management", href: "/seona", image: imgSeona },
  { name: "Skin Care & Makeup", category: "Performance Marketing", href: "/kiko-milano", image: imgKiko },
];

export default function PortfolioGrid() {
  return (
    <section className="overflow-hidden bg-white px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
      <div data-reveal-group="" data-stagger="0.05" className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.href}
            data-reveal="up"
            className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand-900/5 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <span className="group/arrow absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/arrow:rotate-[45deg]" />
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                {project.category}
              </p>
              <h3 className="mt-1 text-base font-bold text-ink">{project.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
