import Link from "next/link";
import ShopifyUniqueStats from "@/components/shopify/ShopifyUniqueStats";

export default function ShopifyUnique() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2"
      >
        <ShopifyUniqueStats />

        <div className="text-center lg:text-left">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Why Build With Adex
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Your Partner in Shopify App Development
          </h2>
          <p data-reveal="up" className="mt-5 text-4xl font-extrabold text-ink sm:text-5xl tabular-nums">
            10x
          </p>
          <p data-reveal="up" className="mt-1 text-sm font-semibold text-muted">
            Increase in Sales
          </p>
          <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            &ldquo;Adex360 specializes in crafting tailored Shopify apps to
            enhance your store&apos;s performance. Our expert developers
            design intuitive interfaces and integrate advanced features to
            boost conversions and customer loyalty. We handle everything from
            data migration to seamless integrations, ensuring a smooth
            transition of products, customer data, and order histories.
            Partner with us to elevate your e-commerce experience.&rdquo;
          </p>
          <div data-reveal="up" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Elevate Your Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
