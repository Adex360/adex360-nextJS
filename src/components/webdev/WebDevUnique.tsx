import Link from "next/link";
import WebDevUniqueStats from "@/components/webdev/WebDevUniqueStats";

export default function WebDevUnique() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div
        data-reveal-group=""
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2"
      >
        <WebDevUniqueStats />

        <div className="text-center lg:text-left">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            What Makes Us Unique
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">
            Smart, Scalable &amp; Stunning Websites
          </h2>
          <p data-reveal="up" className="mt-5 text-4xl font-extrabold text-ink sm:text-5xl tabular-nums">
            2.5M+
          </p>
          <p data-reveal="up" className="mt-1 text-sm font-semibold text-muted">
            Website Impressions Served
          </p>
          <p data-reveal="up" className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0">
            &ldquo;Starting a website is like establishing a base for your
            brand. Whether you&apos;re planning to run an e-commerce store,
            sell services, build a portfolio, or manage a blog, we help you
            develop your dream website. Adex360 specializes in crafting all
            types of websites, from WordPress and Shopify to Wix and React.
            You name it, and we make it.&rdquo;
          </p>
          <div data-reveal="up" className="mt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Your Vision, Our Code
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
