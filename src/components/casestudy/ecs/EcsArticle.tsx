import Stat from "../Stat";
import LabeledBullets from "../LabeledBullets";

function ChallengeBlock({ title, problem, solution }: { title: string; problem: string; solution: string }) {
  return (
    <div className="rounded-2xl border border-[#E4E8F3] bg-surface p-6 sm:p-7">
      <h3 className="text-sm font-bold text-ink sm:text-base">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
        <span className="font-bold text-ink">Problem:</span> {problem}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
        <span className="font-bold text-ink">Solution:</span> {solution}
      </p>
    </div>
  );
}

export default function EcsArticle() {
  return (
    <article className="overflow-hidden bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div data-reveal-group="" data-stagger="0.06" className="mx-auto max-w-3xl space-y-14">
        <section data-reveal="up">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Ehsan Chappal Store (ECS), established in 1954 in Lahore, Pakistan, began as a modest
            venture specializing in comfortable and stylish sandals. Over the decades, ECS
            expanded into a prominent retail chain, offering a diverse range of ladies&rsquo;
            footwear and accessories across multiple stores nationwide. Despite its growth, ECS
            faced challenges in the evolving digital marketplace, particularly in optimizing its
            online sales and customer engagement. To address these issues, ECS partnered with
            Adex360 to implement a comprehensive performance marketing strategy to enhance online
            visibility, increase sales, and improve overall customer satisfaction.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Challenges Identified &amp; Solutions Implemented
          </h2>
          <div data-reveal-group="" data-stagger="0.08" className="mt-6 space-y-5">
            <ChallengeBlock
              title="Fragmented Online Presence & Inefficient Inventory Management"
              problem="ECS's online and offline sales channels operated in silos, leading to inconsistent customer experiences and difficulties in managing inventory effectively."
              solution="Adex360 introduced an omnichannel solution that integrated all sales platforms, providing a unified view of inventory and customer data. This integration ensured real-time inventory updates, reducing the risk of stockouts or overstock situations."
            />
            <ChallengeBlock
              title="Manual Order Processing Leading to Delays"
              problem="The manual handling of orders resulted in processing delays, increased errors, and a suboptimal customer experience."
              solution="Adex360 implemented an automated order management system (OMS) that streamlined the order fulfilment process. This automation reduced processing time, minimized errors, and enhanced customer satisfaction by ensuring timely deliveries."
            />
            <ChallengeBlock
              title="Underutilization of Digital Marketing Channels"
              problem="ECS had a limited digital marketing strategy, relying heavily on traditional advertising methods, which restricted its reach to a broader online audience."
              solution="Adex360 developed a targeted digital marketing campaign that encompassed search engine marketing (SEM), social media advertising, and email marketing. By leveraging data analytics, the campaigns were tailored to effectively reach potential customers, resulting in higher engagement and conversion rates."
            />
          </div>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Performance Marketing Impact on ECS</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            The collaboration between ECS and Adex360 significantly improved operational
            efficiency and sales performance.
          </p>
          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Key Achievements:</h3>
          <LabeledBullets
            items={[
              {
                label: (
                  <>
                    <Stat>53%</Stat> Increase in Sales:
                  </>
                ),
                text: "The integration of automated inventory management and a robust OMS led to a substantial boost in sales, as products were consistently available, and order fulfilment became more efficient.",
              },
              {
                label: (
                  <>
                    <Stat>40%</Stat> Reduction in Order Processing Time:
                  </>
                ),
                text: "Automation streamlined the order journey from placement to delivery, enhancing customer satisfaction through prompt service.",
              },
              {
                label: (
                  <>
                    <Stat>95%</Stat> Accuracy in Data Reporting:
                  </>
                ),
                text: "Real-time data collection and analysis provided reliable insights, enabling informed decision-making and strategic planning.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Content Strategy &amp; Digital Engagement</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A revitalized content strategy and strategic digital engagement played a pivotal role
            in ECS&rsquo;s online resurgence.
          </p>

          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Content Optimization</h3>
          <LabeledBullets
            items={[
              {
                label: "Engaging Visuals:",
                text: "High-quality images and videos showcasing ECS's latest footwear collections were regularly posted on social media platforms, capturing the attention of potential customers.",
              },
              {
                label: "Interactive Content:",
                text: "Polls, quizzes, and customer testimonials were utilized to foster a sense of community and encourage active participation from the audience.",
              },
            ]}
          />

          <h3 className="mt-8 text-base font-bold text-ink sm:text-lg">Influencer Collaborations</h3>
          <LabeledBullets
            items={[
              {
                label: "Brand Ambassadors:",
                text: "Partnering with local fashion influencers helped ECS reach a wider audience, as these collaborations lent authenticity and trust to the brand.",
              },
              {
                label: "User-Generated Content:",
                text: "Encouraging satisfied customers to share their experiences and feature ECS products on their personal profiles created organic promotion and enhanced brand credibility.",
              },
            ]}
          />
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
            Sales Growth: Paid vs. Organic Social Media Marketing
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Adex360&rsquo;s strategy effectively balanced paid advertising with organic marketing
            efforts to maximize ECS&rsquo;s reach and revenue.
          </p>

          <h3 className="mt-6 text-base font-bold text-ink sm:text-lg">Steps Taken for Sales Growth:</h3>
          <LabeledBullets
            items={[
              {
                label: "Targeted Paid Advertising:",
                text: "Utilizing data-driven insights, paid ads were directed towards demographics most likely to convert, ensuring efficient use of the marketing budget.",
              },
              {
                label: "Search Engine Optimization (SEO):",
                text: "Enhancing website content and structure, improving organic search rankings, and driving more unpaid traffic to ECS's online store.",
              },
              {
                label: "Email Marketing Campaigns:",
                text: "Personalized emails inform customers about new arrivals, promotions, and exclusive offers, fostering repeat business and customer loyalty.",
              },
            ]}
          />
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            This comprehensive approach ensured that ECS&rsquo;s marketing efforts reached a
            broad audience while maintaining cost-effectiveness.
          </p>
        </section>

        <section data-reveal="up">
          <h2 className="text-xl font-extrabold text-ink sm:text-2xl">Conclusion</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Through the strategic implementation of performance marketing solutions, Adex360
            successfully transformed ECS&rsquo;s digital operations. Integrating automated
            systems, targeted digital marketing, and engaging content strategies enhanced
            ECS&rsquo;s online presence and drove significant sales growth and improved customer
            satisfaction. This case exemplifies how embracing modern performance marketing
            techniques can revitalize a traditional retail brand in the digital age.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Adex360 specializes in converting digital challenges into opportunities for growth.
            Ready to elevate your brand&rsquo;s performance?
          </p>
        </section>
      </div>
    </article>
  );
}
