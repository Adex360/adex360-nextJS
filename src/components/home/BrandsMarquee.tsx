const brands = ["Generation", "Diesel", "Breakout", "Butterfly", "Chief Apparel", "Engine"];

export default function BrandsMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section className="border-y border-black/5 bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Brands Impacted
        </p>
        <p className="mt-2 text-center text-lg font-semibold text-ink">
          2000+ Satisfied Worldwide Clients
        </p>

        <div className="mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee gap-16">
            {loop.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="whitespace-nowrap text-2xl font-bold tracking-tight text-ink/30"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
