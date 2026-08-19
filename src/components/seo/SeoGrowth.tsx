import { Check, LineChart } from "lucide-react";

const wins = [
  {
    title: "Record Highest Sales",
    description:
      "Engine partnered up with us and our expertise helped them achieve 6.81x the sales this year.",
  },
  {
    title: "200X Traffic Growth",
    description:
      "Chief Apparel broke a record of 200X traffic with Adex360's SEO services.",
  },
];

export default function SeoGrowth() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2"
      >
        <div className="text-center lg:text-left">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Empowering SEO Success
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Adex360: Drive Traffic, Leads, and Growth
          </h2>
          <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            Organic search traffic converts at an impressive 12.5% conversion
            rate, outperforming traditional advertising. With Adex360&apos;s SEO
            services, brands enjoy sustainable growth, higher visibility, and
            improved customer acquisition costs (CAC).
          </p>

          <div className="mx-auto mt-8 max-w-xl space-y-5 text-left lg:mx-0">
            {wins.map((win) => (
              <div key={win.title} data-reveal="left" className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white shadow-md shadow-brand-blue/30">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-base font-bold text-ink">{win.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {win.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="right" className="mx-auto w-full max-w-md">
          <div
            className="flex aspect-square items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #C7D6F7 0%, #DCE5FA 45%, #FAE3BE 100%)",
              borderRadius: "48% 52% 56% 44% / 54% 46% 54% 46%",
            }}
          >
            <LineChart className="h-28 w-28 text-ink/70" strokeWidth={1.2} />
          </div>
        </div>
      </div>
    </section>
  );
}
