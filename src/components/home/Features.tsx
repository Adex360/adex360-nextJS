import { LineChart, Globe, Search } from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Performance Marketing",
    description:
      "We speak fluent Data, so you don't have to! From paid promotion to sales-driven ads, our performance marketing experts squeeze every rupee for maximum ROI.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Because a good website is like a great salesperson, always working for you. Our web developers craft fast, functional and beautifully designed sites.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Making Google Your Best Friend. Our top SEO strategies and optimization techniques help you rank higher and amplify your visibility.",
  },
];

export default function Features() {
  return (
    <section className="relative bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Our Magic Mantra
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold text-ink sm:text-3xl">
            More Clicks, More Growth, More Sales, Less Fluff
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-black/5 bg-white p-8 shadow-xl shadow-brand-900/5 transition-transform hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-600 text-white">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
