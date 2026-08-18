import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Conversions",
    description: "250% average increase in conversions for clients in 3 months",
  },
  {
    title: "Organic Clicks",
    description: "3x increase in organic clicks for clients in 6 months",
  },
];

export default function DrivingGrowth() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div data-reveal-group="" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Who We Are
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Driving Digital Growth with Proven Expertise
          </h2>
          <p data-reveal="up" className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            The answer is simple, a digital marketing agency putting in prolonged
            work that isn&apos;t just cool and unpredictable results. Through
            transparent processes, industry expertise and consistency, we
            fulfil every commitment we give to our clients.
          </p>

          <div className="mt-8 space-y-5">
            {points.map((point) => (
              <div key={point.title} data-reveal="left" className="flex items-start gap-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-orange" />
                <div>
                  <p className="text-sm font-bold text-ink">{point.title}</p>
                  <p className="mt-1 text-sm text-muted">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="scale" className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[2.5rem] bg-surface-alt">
          <div className="flex h-4/5 w-4/5 flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-br from-brand-orange to-brand-blue text-center text-white shadow-2xl">
            <p data-counter="350" data-counter-suffix="%" className="text-5xl font-extrabold">350%</p>
            <p className="text-sm text-white/85">Increase in Conversions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
