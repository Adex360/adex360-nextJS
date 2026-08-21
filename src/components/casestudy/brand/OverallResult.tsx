export default function OverallResult({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <section className="overflow-hidden bg-[#EAF1FF] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div data-reveal-group="" className="mx-auto max-w-4xl text-center">
        <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Overall Result
        </p>
        <div data-reveal="up" data-reveal-delay="0.1" className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-sm font-semibold text-muted">{stat.label}</p>
              <p className="mt-2 text-4xl font-extrabold text-ink sm:text-5xl">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
