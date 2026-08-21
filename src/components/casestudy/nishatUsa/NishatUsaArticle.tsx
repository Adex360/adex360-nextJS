import Stat from "../Stat";
import LabeledBullets from "../LabeledBullets";
import ChallengeBlock from "../ChallengeBlock";

export default function NishatUsaArticle() {
  return (
    <article className="overflow-hidden bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div data-reveal-group="" data-stagger="0.06" className="mx-auto max-w-3xl space-y-14">
        <section data-reveal="up">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Nishat USA is a powerhouse in the textile and fashion industry, known for its
            premium fabric quality and elegant designs. Despite a strong product lineup, the
            brand struggled to establish a compelling presence on social media. Engagement was
            low, and potential customers were slipping away due to unoptimized content and lack
            of strategic paid advertising. Nishat needed a digital marketing approach that not
            only increased awareness but also drove conversions. That&rsquo;s where Adex360
            stepped in.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Challenges Identified &amp; Solutions Implemented
          </h2>
          <div data-reveal-group="" data-stagger="0.08" className="mt-6 space-y-5">
            <ChallengeBlock
              title="Low Engagement & Brand Awareness"
              problem="Nishat's social media presence lacked consistent storytelling and engagement strategies, leading to low interaction rates."
              solution="Adex360 introduced an interactive content calendar, focusing on behind-the-scenes footage, product styling tips, and trend-driven posts that encourage audience participation."
            />
            <ChallengeBlock
              title="Poor Conversion Rates from Social Channels"
              problem="The brand struggled to turn social media traffic into actual buyers due to weak call-to-actions and lack of social proof."
              solution="A data-driven content strategy optimized CTAs across posts and stories while leveraging influencer collaborations and customer testimonials to boost credibility and trust."
            />
            <ChallengeBlock
              title="Ineffective Paid Social Strategy"
              problem="Nishat's ad spend was not optimized, leading to high costs per acquisition and low ROI on social media campaigns."
              solution="Adex360 restructured ad targeting to focus on high-intent buyers, implemented retargeting strategies, and leveraged dynamic product ads for better conversion rates."
            />
          </div>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Social Media Growth &amp; Performance for Nishat
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A strategic approach to content, paid advertising, and community engagement resulted
            in remarkable growth across all metrics.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Key Achievements:</h3>
          <LabeledBullets
            items={[
              {
                label: <Stat>76%</Stat>,
                text: "increase in sales, proving that optimized social strategies drive real revenue growth.",
              },
              {
                label: <Stat>53%</Stat>,
                text: "rise in website sessions, fueled by engaging content and strategic ad placements.",
              },
              {
                label: <Stat>100%</Stat>,
                text: "growth in the number of orders, showing the direct impact of social media in converting followers into buyers.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Content Strategy &amp; Influencer Marketing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A well-curated content plan and a strong influencer network played a key role in
            Nishat&rsquo;s online success.
          </p>

          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Content Optimization</h3>
          <ul className="mt-4 space-y-2">
            {[
              "Developed visually appealing Instagram and Facebook feeds to maintain a premium brand aesthetic.",
              "Created high-engagement Reels and TikToks showcasing product details, fabric quality, and styling tips.",
              "Leveraged interactive features like Instagram polls, Q&A sessions, and user-generated content to build a stronger connection with followers.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-base font-bold text-ink sm:text-lg">Influencer &amp; Community Marketing</h3>
          <ul className="mt-4 space-y-2">
            {[
              "Partnered with fashion influencers and bloggers to create authentic content featuring Nishat's products.",
              "Encouraged user-generated content by launching style challenges and giveaways.",
              "Engaged customers through personalized responses, re-sharing testimonials, and exclusive VIP offers.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Sales Growth: Paid vs. Organic Social Media Marketing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A strategic mix of organic content and paid campaigns ensured long-term brand growth
            and immediate revenue generation.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Steps Taken for Sales Growth:</h3>
          <ul className="mt-4 space-y-2">
            {[
              "Implemented highly targeted social media ad campaigns based on audience insights and shopping behavior.",
              "Optimized product tagging on Instagram and Facebook, making the shopping experience seamless.",
              "Used remarketing ads to convert abandoned carts into completed sales, significantly improving cart recovery rates.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The results speak for themselves&mdash;social media-driven purchases skyrocketed, and
            Nishat achieved a scalable, cost-effective marketing strategy.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Conclusion</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Nishat&rsquo;s partnership with Adex360 resulted in a complete digital
            transformation. Through high-quality content, effective influencer collaborations,
            and well-optimized paid strategies, the brand not only gained traction but also drove
            significant revenue growth. Today, Nishat stands as a prime example of how a
            well-executed social media marketing strategy can elevate a brand&rsquo;s digital
            presence and sales performance.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Adex360 delivers results that matter. Let&rsquo;s take your brand to the next level.
          </p>
        </section>
      </div>
    </article>
  );
}
