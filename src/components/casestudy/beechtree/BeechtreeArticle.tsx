import Stat from "../Stat";
import LabeledBullets from "../LabeledBullets";
import ChallengeBlock from "../ChallengeBlock";

export default function BeechtreeArticle() {
  return (
    <article className="overflow-hidden bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div data-reveal-group="" data-stagger="0.06" className="mx-auto max-w-3xl space-y-14">
        <section data-reveal="up">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Beechtree was launched in 2010 as a modern, high-street fashion brand catering to
            young, free-spirited individuals. The brand quickly gained recognition for its chic
            yet practical designs, but as the retail landscape shifted online, Beechtree
            struggled to optimize its social media presence for sales growth. Engagement was
            inconsistent, conversion rates were lower than expected, and the brand wasn&rsquo;t
            fully leveraging social media&rsquo;s power for customer retention and acquisition.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Adex360 stepped in to develop a data-driven, creative social media strategy that
            would not only strengthen brand presence but also maximize revenue.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Challenges Identified &amp; Solutions Implemented
          </h2>
          <div data-reveal-group="" data-stagger="0.08" className="mt-6 space-y-5">
            <ChallengeBlock
              title="Inconsistent Engagement & Weak Brand Positioning"
              problem="Beechtree's social media lacked a strong narrative, making it difficult to build lasting relationships with its audience."
              solution="Adex360 introduced a storytelling approach, crafting engaging content that showcased the brand's personality through behind-the-scenes clips, seasonal lookbooks, and interactive campaigns."
            />
            <ChallengeBlock
              title="Low Conversion Rates from Social Traffic"
              problem="Despite high reach, visitors from social media were not converting into buyers due to poor content structure and weak call-to-actions."
              solution="Adex360 refined the content strategy by integrating persuasive copy, better product showcases, and shoppable posts that streamlined the buying journey."
            />
            <ChallengeBlock
              title="Underutilization of Paid Social Advertising"
              problem="Beechtree was not making the most of paid ads, leading to inefficient spending and lower ROI."
              solution="Adex360 optimized audience segmentation, implemented dynamic product ads, and focused on retargeting high-intent customers, ensuring better conversions at lower ad costs."
            />
          </div>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Social Media Growth &amp; Performance for Beechtree
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A refined approach to content, advertising, and audience engagement led to
            significant improvements in Beechtree&rsquo;s digital presence and sales performance.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Key Achievements:</h3>
          <LabeledBullets
            items={[
              {
                label: (
                  <>
                    Over <Stat>2.5</Stat> million impressions:
                  </>
                ),
                text: "Expanding brand awareness and reach.",
              },
              {
                label: (
                  <>
                    <Stat>8%</Stat> of total sales:
                  </>
                ),
                text: "Came from recovered carts, thanks to retargeting efforts.",
              },
              {
                label: (
                  <>
                    <Stat>12%</Stat> increase in conversion rates:
                  </>
                ),
                text: "Proving the effectiveness of the social media strategy.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Content Strategy &amp; Influencer Marketing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A highly targeted content plan combined with strategic influencer partnerships played
            a major role in Beechtree&rsquo;s digital success.
          </p>

          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Content Optimization</h3>
          <LabeledBullets
            items={[
              {
                label: "Instagram Reels & TikToks:",
                text: "Created engaging content showcasing the latest collections and styling tips.",
              },
              {
                label: "Interactive Engagement:",
                text: "Developed interactive stories, polls, and Q&A sessions to keep audiences engaged.",
              },
              {
                label: "High-Quality Visuals:",
                text: "Designed product visuals that aligned with the brand's modern, chic aesthetic.",
              },
            ]}
          />

          <h3 className="mt-8 text-base font-bold text-ink sm:text-lg">
            Influencer &amp; Community Marketing
          </h3>
          <LabeledBullets
            items={[
              {
                label: "Fashion Influencer Partnerships:",
                text: "Created authentic, engaging content that resonated with Beechtree's audience.",
              },
              {
                label: "UGC Campaigns:",
                text: "Encouraged customer participation through user-generated content and exclusive discount codes.",
              },
              {
                label: "Community Building:",
                text: "Built a strong community by resharing customer testimonials and outfit inspirations.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Sales Growth: Paid vs. Organic Social Media Marketing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Adex360&rsquo;s strategy combined both organic engagement and targeted paid
            campaigns, ensuring maximum visibility and increased revenue.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">
            Steps Taken for Sales Growth:
          </h3>
          <LabeledBullets
            items={[
              {
                label: "Targeted Paid Ad Campaigns:",
                text: "Focused on lookalike audiences and high-intent shoppers.",
              },
              {
                label: "Shoppable Posts:",
                text: "Integrated shoppable Instagram and Facebook posts, making it easier for users to make instant purchases.",
              },
              {
                label: "Retargeting Campaigns:",
                text: "Launched to bring back users who abandoned carts, boosting cart recovery rates.",
              },
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The results were impressive&mdash;Beechtree&rsquo;s social media channels became a
            primary driver of sales, demonstrating the power of a well-executed strategy.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Conclusion</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Through dynamic storytelling, optimized ad spend, and an engaging content strategy,
            Adex360 successfully helped Beechtree strengthen its digital presence and drive
            significant revenue growth. The brand&rsquo;s social media is now a powerful tool for
            customer acquisition and retention, proving that the right strategy can turn
            engagement into conversions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Adex360 delivers results that matter. Let&rsquo;s take your brand to the next level.
          </p>
        </section>
      </div>
    </article>
  );
}
