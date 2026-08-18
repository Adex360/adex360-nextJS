"use client";

import Image, { type StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import bata from "../../../public/brands/Bata.png";
import breakout from "../../../public/brands/Breakout.png";
import butterfly from "../../../public/brands/Butterfly.png";
import diesel from "../../../public/brands/Diesel.png";
import generation from "../../../public/brands/Generation.png";
import infinityLeathers from "../../../public/brands/Infinity leathers.png";
import kayseria from "../../../public/brands/Kayseria.png";
import kiko from "../../../public/brands/Kiko.png";
import minnieMinors from "../../../public/brands/Minnie Minors.png";
import rangJa from "../../../public/brands/Rang-Ja.png";
import sapphire from "../../../public/brands/Sapphire.png";
import saya from "../../../public/brands/Saya.png";
import upperClass from "../../../public/brands/Upper class.png";
import xaomi from "../../../public/brands/Xaomi.png";
import mango from "../../../public/brands/mango.png";
import yadea from "../../../public/brands/yadea.png";

const brands: { name: string; logo: StaticImageData }[] = [
  { name: "Generation", logo: generation },
  { name: "Diesel", logo: diesel },
  { name: "Breakout", logo: breakout },
  { name: "Butterfly", logo: butterfly },
  { name: "Bata", logo: bata },
  { name: "Kayseria", logo: kayseria },
  { name: "Kiko", logo: kiko },
  { name: "Minnie Minors", logo: minnieMinors },
  { name: "Rang Ja", logo: rangJa },
  { name: "Sapphire", logo: sapphire },
  { name: "Saya", logo: saya },
  { name: "Upper Class", logo: upperClass },
  { name: "Xaomi", logo: xaomi },
  { name: "Mango", logo: mango },
  { name: "Yadea", logo: yadea },
  { name: "Infinity Leathers", logo: infinityLeathers },
];

export default function BrandsMarquee() {
  return (
    <section className="border-y border-black/5 bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Brands Impacted
        </p>
        <p className="mt-2 text-center text-lg font-semibold text-ink">
          2000+ Satisfied Worldwide Clients
        </p>

        <div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            loop
            speed={1500}
            slidesPerGroup={1}
            spaceBetween={32}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.name}>
                <div className="flex h-20 items-center justify-center px-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
