import Stat from "../Stat";
import LabeledBullets from "../LabeledBullets";
import ChallengeBlock from "../ChallengeBlock";

export default function OneArticle() {
  return (
    <article className="overflow-hidden bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div data-reveal-group="" data-stagger="0.06" className="mx-auto max-w-3xl space-y-14">
        <section data-reveal="up">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            ONE, one of Pakistan&rsquo;s leading fashion retail brands, has been redefining
            high-end fashion since its inception in 2016. ONE has become a household name with{" "}
            <Stat>42</Stat> stores nationwide and a strong commitment to delivering contemporary
            designs. However, despite a growing presence in physical stores, the brand struggled
            to capitalize on its online potential. Organic sales stagnated, site traffic was
            inconsistent, and paid advertising efforts weren&rsquo;t delivering strong returns.
            ONE needed a strategy to seamlessly bridge the gap between digital marketing and
            sales growth.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Adex360 stepped in with a performance marketing strategy designed to amplify online
            visibility, drive high-intent traffic, and convert browsers into loyal customers.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Challenges Identified &amp; Solutions Implemented
          </h2>
          <div data-reveal-group="" data-stagger="0.08" className="mt-6 space-y-5">
            <ChallengeBlock
              title="Stagnant Organic Sales Growth"
              problem="ONE had a strong retail presence but wasn't leveraging its online store to its full potential. The website lacked optimized funnels that converted visitors into buyers."
              solution="Adex360 revamped the customer journey, refining product recommendations, improving call-to-action placements, and introducing AI-driven personalization to boost conversion rates."
            />
            <ChallengeBlock
              title="Underperforming Paid Campaigns"
              problem="The brand's paid ads were driving traffic but weren't translating into sustainable sales growth. The cost-per-click was high, and the return on ad spend (ROAS) was low."
              solution="Adex360 implemented hyper-targeted campaigns using behavior-based segmentation, dynamic retargeting, and real-time ad optimization to ensure every dollar spent yielded maximum ROI."
            />
            <ChallengeBlock
              title="Low Website Traffic & Engagement"
              problem="The brand had a solid product lineup, but its digital reach was limited, reducing opportunities for new customer acquisition."
              solution="Combining SEO enhancements, high-quality content, and strategic influencer partnerships drove significant site traffic and brand awareness increases."
            />
          </div>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Performance Marketing Impact on ONE</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A comprehensive digital strategy helped ONE grow its e-commerce and establish a
            strong online presence.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Key Achievements:</h3>
          <LabeledBullets
            items={[
              {
                label: (
                  <>
                    <Stat>55.8%</Stat> Increase in Site Traffic:
                  </>
                ),
                text: "Enhanced visibility and optimized digital campaigns attracted more potential customers.",
              },
              {
                label: (
                  <>
                    <Stat>40%</Stat> Boost in Organic Sales:
                  </>
                ),
                text: "A more potent content strategy and refined shopping experience turned traffic into revenue.",
              },
              {
                label: (
                  <>
                    <Stat>30%</Stat> Improvement in Customer Retention:
                  </>
                ),
                text: "Targeted email marketing and loyalty campaigns helped convert one-time buyers into repeat customers.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Content Optimization &amp; Audience Engagement
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A compelling content strategy and precision-driven marketing played a critical role
            in transforming ONE&rsquo;s digital performance.
          </p>

          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Content Strategy Enhancements</h3>
          <LabeledBullets
            items={[
              {
                label: "Personalized Shopping Experiences:",
                text: "AI-driven product recommendations provide customers with relevant selections based on their browsing behaviour.",
              },
              {
                label: "High-Quality Fashion Campaigns:",
                text: "Visually striking ad creatives and lifestyle photography made digital ads more engaging and clickable.",
              },
              {
                label: "Shoppable Content on Social Media:",
                text: "Direct purchase links in ads, stories, and influencer content reduced the gap between interest and action.",
              },
            ]}
          />

          <h3 className="mt-8 text-base font-bold text-ink sm:text-lg">Influencer Collaborations &amp; Brand Storytelling</h3>
          <LabeledBullets
            items={[
              {
                label: "Micro-Influencer Partnerships:",
                text: "Leveraged niche fashion influencers to create authentic brand endorsements.",
              },
              {
                label: "User-Generated Content:",
                text: "Encouraged customers to share their ONE looks with branded hashtags, increasing organic reach.",
              },
              {
                label: "Behind-the-Scenes Content:",
                text: "Provided an inside look at collections, sustainability efforts, and styling tips to deepen brand trust.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Sales Growth: Paid vs. Organic Social Media Marketing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Paid marketing and organic traffic optimization scaled ONE&rsquo;s e-commerce
            revenue.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Steps Taken for Sales Growth:</h3>
          <LabeledBullets
            items={[
              {
                label: "High-Precision Retargeting Ads:",
                text: "Engaged cart abandoners and past visitors with exclusive discounts and limited-time offers.",
              },
              {
                label: "SEO & Organic Traffic Enhancement:",
                text: "Improved category page rankings, optimized product descriptions, and created fashion guides to increase discoverability.",
              },
              {
                label: "Conversion Rate Optimization:",
                text: "Streamlined the checkout process, reduced friction points, and introduced urgency-driven promotions.",
              },
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The synergy between paid performance marketing and organic sales strategies led to
            sustainable and measurable growth, positioning ONE as a digital-first fashion
            powerhouse.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Conclusion</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Through targeted performance marketing, innovative content strategies, and real-time
            ad optimizations, Adex360 successfully turned ONE&rsquo;s digital potential into
            real revenue growth. Increased site traffic, stronger engagement, and higher
            conversion rates proved that the right strategy could redefine how a fashion brand
            thrives online.
          </p>
        </section>
      </div>
    </article>
  );
}
