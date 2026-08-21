import type { ReactNode } from "react";
import Stat from "../Stat";

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted sm:text-base">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SolutionBlock({ title, solution }: { title: string; solution: string }) {
  return (
    <div className="rounded-2xl border border-[#E4E8F3] bg-surface p-6 sm:p-7">
      <h4 className="text-sm font-bold text-ink sm:text-base">{title}</h4>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        <span className="font-bold text-ink">Solution:</span> {solution}
      </p>
    </div>
  );
}

export default function NishatUaeArticle() {
  return (
    <article className="overflow-hidden bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div data-reveal-group="" data-stagger="0.06" className="mx-auto max-w-3xl space-y-14">
        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Introduction</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Nishat UAE is a fashion retail brand specializing in Pakistani clothing for the
            diverse and multicultural audience of the UAE. With the increasing demand for ethnic
            and contemporary fashion, the brand sought to enhance its digital presence and
            expand its market share through a robust SEO strategy. In February 2024, Adex360
            launched a comprehensive SEO campaign focused on semantic optimization, keyword
            refinement, and high-quality content creation to improve Nishat UAE&rsquo;s search
            rankings, domain authority, and organic traffic performance.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            This case study highlights the strategic execution of SEO efforts and their impact
            on Nishat UAE&rsquo;s visibility, traffic, and sales from February 2024 to December
            2024.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">SEO Strategy &amp; Keyword Targeting</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            When Nishat UAE onboarded in February 2024, its initial SEO approach involved broad
            keyword targeting to capture general search traffic. However, to maximize
            conversions and reach high-intent shoppers, the SEO team at Adex360 refined its
            approach by shifting focus to semantic search optimization. The revised SEO strategy
            included:
          </p>
          <Bullets
            items={[
              "Refining keyword targeting to include long-tail, intent-based search terms that aligned with user behavior.",
              "Implementing semantic SEO to structure content in a way that resonated with search engines and users alike.",
              "Incorporating collection notes to enrich product category descriptions, improving both SEO rankings and user engagement.",
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            By aligning SEO efforts with search intent, Nishat UAE significantly improved its
            relevance in organic search, making it easier for potential customers to discover
            the brand.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            SEO Performance Growth (February 2024 &ndash; December 2024)
          </h2>

          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">February 2024: Initial SEO Performance</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Upon the initial SEO implementation, Nishat UAE achieved moderate rankings, laying
            the foundation for future growth:
          </p>
          <Bullets
            items={[
              <>
                <Stat>17%</Stat> of targeted keywords ranked on Google&rsquo;s first page.
              </>,
              <>
                <Stat>3%</Stat> of keywords appeared on the second page.
              </>,
              <>
                <Stat>10%</Stat> ranked on the third page, indicating potential but requiring
                further optimization.
              </>,
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            These early figures highlighted initial traction, but refining content and
            link-building efforts was essential to achieve stronger results.
          </p>

          <h3 className="mt-8 text-base font-bold text-ink sm:text-lg">December 2024: Remarkable SEO Growth</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            By December 2024, Nishat UAE experienced a major surge in keyword rankings,
            demonstrating the effectiveness of its refined SEO approach:
          </p>
          <Bullets
            items={[
              <>
                <Stat>76%</Stat> of targeted keywords ranked on Google&rsquo;s first page&mdash;a{" "}
                <Stat>347%</Stat> increase from February.
              </>,
              <>
                <Stat>7%</Stat> of keywords ranked on Google&rsquo;s second page, reflecting
                gradual improvement.
              </>,
              <>
                <Stat>10%</Stat> continued ranking on the third page, showcasing overall
                progress.
              </>,
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Additionally, Nishat UAE saw a rise in non-targeted keyword rankings, proving the
            long-term effectiveness of the semantic SEO strategy.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Domain Authority &amp; Site Credibility Growth</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Alongside improved rankings, the SEO strategy had a strong impact on Nishat
            UAE&rsquo;s domain authority and credibility metrics:
          </p>
          <Bullets
            items={[
              <>
                Domain authority increased by <Stat>36%</Stat>, growing from <Stat>11</Stat> in
                February to <Stat>15</Stat> in December.
              </>,
              <>
                Page authority improved from <Stat>30</Stat> to <Stat>32</Stat>, enhancing the
                strength of individual site pages.
              </>,
              <>
                Linking domains more than doubled, increasing from <Stat>160</Stat> to{" "}
                <Stat>351</Stat>, reinforcing Nishat UAE&rsquo;s online reputation.
              </>,
              <>
                Total backlinks grew by <Stat>40%</Stat>, increasing from <Stat>1.5K</Stat> to{" "}
                <Stat>2.1K</Stat>, further boosting search rankings.
              </>,
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            This consistent domain authority growth highlighted the success of Nishat
            UAE&rsquo;s content strategy, technical SEO improvements, and link-building efforts.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Traffic Growth &amp; SEO&rsquo;s Impact on Sales</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The SEO enhancements resulted in a substantial increase in website traffic and
            keyword expansion:
          </p>
          <Bullets
            items={[
              <>
                Organic keyword rankings increased by <Stat>1.3K</Stat>, showcasing a stronger
                search presence.
              </>,
            ]}
          />

          <h4 className="mt-6 text-sm font-bold text-ink sm:text-base">SEO-Driven Sales Growth</h4>
          <Bullets
            items={[
              "Organic search revenue grew significantly, contributing to a notable percentage of total sales from February to December 2024.",
              "SEO-driven sales accounted for a major portion of overall revenue, highlighting the effectiveness of Nishat UAE's content and keyword strategy.",
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The SEO-driven revenue growth demonstrated that strategic keyword targeting and
            high-quality content optimization could drive substantial business results, reducing
            the brand&rsquo;s dependence on paid advertising.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Challenges &amp; Solutions</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Despite the success of the campaign, the SEO team at Adex360 had to navigate several
            challenges to achieve sustained growth:
          </p>
          <div data-reveal-group="" data-stagger="0.08" className="mt-6 space-y-5">
            <SolutionBlock
              title="Low Initial Rankings & Competition in the UAE Market"
              solution="A targeted, intent-based SEO strategy allowed the brand to rank for more relevant, less competitive search terms, gaining traction over time."
            />
            <SolutionBlock
              title="Strengthening Domain Authority & Link Profile"
              solution="A comprehensive link-building plan focused on securing high-authority backlinks, improving Nishat UAE's trustworthiness in search rankings."
            />
            <SolutionBlock
              title="Ensuring Long-Term SEO Growth"
              solution="Ongoing SEO monitoring and optimizations were implemented, allowing the team to continuously refine strategies based on search trends and user behavior."
            />
          </div>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Conclusion</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The SEO transformation of Nishat UAE is a testament to how strategic digital
            marketing efforts can drive organic growth, enhance brand visibility, and boost
            sales performance.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            From February to December 2024:
          </p>
          <Bullets
            items={[
              <>
                First-page keyword rankings increased by <Stat>347%</Stat> (from{" "}
                <Stat>17%</Stat> to <Stat>76%</Stat>).
              </>,
              <>
                Domain authority grew by <Stat>36%</Stat>, reinforcing brand credibility.
              </>,
              <>
                Backlinks increased by <Stat>40%</Stat>, strengthening SEO rankings.
              </>,
              "SEO-driven sales contributed a major portion of total revenue.",
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Through intent-driven keyword optimization, content refinement, and domain authority
            growth, Nishat UAE successfully secured its position as a leading fashion retailer
            in the UAE&rsquo;s digital market.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            With continued focus on SEO best practices, technical optimization, and content
            development, Nishat UAE is well-positioned to achieve even greater organic growth
            and long-term success in the fashion e-commerce space.
          </p>
        </section>
      </div>
    </article>
  );
}
