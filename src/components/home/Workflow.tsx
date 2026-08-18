import { Compass, Rocket, Settings2 } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Strategy",
    description: "We audit your brand, market and competitors to build a data-backed roadmap.",
  },
  {
    icon: Rocket,
    title: "Execution",
    description: "Our team launches campaigns, content and builds tailored to your goals.",
  },
  {
    icon: Settings2,
    title: "Optimization",
    description: "We track, test and refine every touchpoint for compounding growth.",
  },
];

export default function Workflow() {
  return (
    <section className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Work Flow
        </p>
        <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
          This is How It&apos;s Done
        </h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="pointer-events-none absolute top-9 left-0 right-0 hidden border-t-2 border-dashed border-brand-blue/30 sm:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center">
              <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-white shadow-xl shadow-brand-900/10 ring-4 ring-surface">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
