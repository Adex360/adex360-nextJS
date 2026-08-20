import Link from "next/link";
import CrmUniqueStats from "@/components/crm/CrmUniqueStats";

export default function CrmUnique() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2"
      >
        <CrmUniqueStats />

        <div className="text-center lg:text-left">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            What Makes Us Unique
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Streamline, Automate, And Scale Effortlessly
          </h2>
          <p data-reveal="up" className="mt-5 text-4xl font-extrabold text-ink sm:text-5xl tabular-nums">
            3M+
          </p>
          <p data-reveal="up" className="mt-1 text-sm font-semibold text-muted">
            Automated Interactions
          </p>
          <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            &ldquo;Integrating a CRM is like streamlining your entire business
            workflow. Whether you need to automate sales, enhance customer
            engagement, or optimize marketing, we help you integrate
            seamlessly. Adex360 specializes in GoHighLevel CRM, ensuring
            smooth operations and maximized efficiency. You need it, we
            integrate it.&rdquo;
          </p>
          <div data-reveal="up" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Optimize Workflows Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
