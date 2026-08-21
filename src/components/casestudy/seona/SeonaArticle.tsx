import Stat from "../Stat";
import LabeledBullets from "../LabeledBullets";
import ChallengeBlock from "../ChallengeBlock";

export default function SeonaArticle() {
  return (
    <article className="overflow-hidden bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div data-reveal-group="" data-stagger="0.06" className="mx-auto max-w-3xl space-y-14">
        <section data-reveal="up">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Seona is a brand deeply rooted in artisanal craftsmanship, blending tradition with
            contemporary aesthetics. Founded by Samia, Seona showcases handmade creations that
            tell stories of heritage and elegance. While the brand&rsquo;s products carried a
            unique identity, its presence on social media failed to reach the right audience at
            scale. Engagement was inconsistent, conversions were low, and the brand struggled to
            build a community of loyal customers.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Seona needed a social media strategy that resonated with its audience and drove
            measurable growth. That&rsquo;s where Adex360 stepped in.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Challenges Identified &amp; Solutions Implemented
          </h2>
          <div data-reveal-group="" data-stagger="0.08" className="mt-6 space-y-5">
            <ChallengeBlock
              title="Low Engagement & Brand Awareness"
              problem="Seona's social media presence lacked consistency, failing to capture attention and engage followers effectively."
              solution="A curated content calendar introduced a mix of storytelling, behind-the-scenes footage, influencer collaborations, and product showcases, ensuring Seona remained top-of-mind for its audience."
            />
            <ChallengeBlock
              title="Inconsistent Conversions from Social Channels"
              problem="Despite having an aesthetically pleasing Instagram and Facebook presence, social media wasn't driving enough conversions."
              solution="Optimized call-to-actions (CTAs), interactive Instagram stories, and strategic ad placements turned passive scrollers into active buyers."
            />
            <ChallengeBlock
              title="Underutilized Influencer & Community Marketing"
              problem="Seona wasn't leveraging user-generated content (UGC) or influencer partnerships to build brand credibility."
              solution="A micro-influencer collaboration program was launched, featuring real people styling Seona's pieces, leading to authentic engagement and organic reach expansion."
            />
          </div>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Social Media Growth &amp; Performance for Seona
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A well-structured social media strategy transformed Seona&rsquo;s engagement, sales,
            and customer interactions.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Key Achievements:</h3>
          <LabeledBullets
            items={[
              {
                label: (
                  <>
                    <Stat>30%</Stat> increase in sales:
                  </>
                ),
                text: "Proving the impact of targeted social media campaigns.",
              },
              {
                label: (
                  <>
                    <Stat>25%</Stat> rise in number of orders:
                  </>
                ),
                text: "As a result of optimized social funnels.",
              },
              {
                label: (
                  <>
                    <Stat>47%</Stat> improvement in conversion rate:
                  </>
                ),
                text: "Driven by better content and strategic ad placements.",
              },
              {
                label: (
                  <>
                    <Stat>56%</Stat> increase in average order value:
                  </>
                ),
                text: "Showing that social media campaigns were attracting high-value customers.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Content Strategy &amp; Influencer Marketing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A compelling content strategy and a strong influencer marketing approach played a
            pivotal role in Seona&rsquo;s digital growth.
          </p>

          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Content Optimization</h3>
          <LabeledBullets
            items={[
              {
                label: "Curated Instagram Grids:",
                text: "Story highlights reflected the brand's aesthetics and craftsmanship.",
              },
              {
                label: "Reels & TikToks:",
                text: "Created engaging content showcasing the making of Seona's products, drawing in an audience interested in artisanal fashion.",
              },
              {
                label: "Interactive Engagement:",
                text: "Polls, Q&A sessions, and behind-the-scenes stories built a stronger emotional connection with followers.",
              },
            ]}
          />

          <h3 className="mt-8 text-base font-bold text-ink sm:text-lg">
            Influencer &amp; Community Marketing
          </h3>
          <LabeledBullets
            items={[
              {
                label: "Micro-Influencer Partnerships:",
                text: "Partnered with micro-influencers and fashion content creators to showcase Seona in real-life settings, boosting brand trust.",
              },
              {
                label: "UGC Campaigns:",
                text: "Encouraged user-generated content, resharing customer photos and testimonials to build social proof.",
              },
              {
                label: "Community Building:",
                text: "Engaged with followers through giveaways, collaborations, and live sessions to foster a loyal brand community.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Sales Growth: Paid vs. Organic Social Media Marketing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A balanced approach between organic content and paid social campaigns ensured
            consistent growth.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">
            Steps Taken for Sales Growth:
          </h3>
          <LabeledBullets
            items={[
              {
                label: "High-Intent Retargeting:",
                text: "Social media ads targeted high-intent shoppers through dynamic retargeting and interest-based targeting.",
              },
              {
                label: "Organic Brand Credibility:",
                text: "Engaging organic content built brand credibility, reducing the need for aggressive paid promotions.",
              },
              {
                label: "Social Commerce:",
                text: "Features like Instagram Shopping and Facebook Marketplace made the buying process seamless.",
              },
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Sales figures proved the effectiveness of this strategy&mdash;social media-driven
            purchases skyrocketed, and the combination of paid and organic efforts ensured a
            sustainable growth model.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Conclusion</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Seona&rsquo;s journey with Adex360 redefined its online presence. Through high-impact
            content, community-driven engagement, and data-driven paid campaigns, the brand grew
            its following and converted it into loyal customers. Today, Seona is more than just a
            brand&mdash;it&rsquo;s an experience that thrives on storytelling and social commerce.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Adex360 delivers results that matter. Let&rsquo;s take your brand to the next level.
          </p>
        </section>
      </div>
    </article>
  );
}
