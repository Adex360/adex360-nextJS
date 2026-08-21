import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";
import LegalSection from "./LegalSection";

const link = (href: string, label: string) => (
  <Link
    href={href}
    className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue"
  >
    {label}
  </Link>
);

const mail = (
  <a
    href="mailto:info@adex360.com"
    className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue"
  >
    info@adex360.com
  </a>
);

function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
  intro,
}: {
  icon: typeof FileText;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div data-reveal="up" className="mb-8">
      <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
        <Icon className="h-3.5 w-3.5" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{intro}</p>
    </div>
  );
}

export default function LegalContent() {
  return (
    <article className="overflow-hidden bg-white px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <section id="terms" className="scroll-mt-40">
          <SectionHeader
            icon={FileText}
            eyebrow="Terms of Service"
            title="Terms of Service"
            intro="These Terms of Service ('Terms') govern your use of adex360.com (the 'Site') and any services provided by Adex360 ('Adex360', 'we', 'us', or 'our'). By visiting the Site, submitting an inquiry, or engaging us for services, you agree to these Terms."
          />

          <div data-reveal-group="" data-stagger="0.06" className="space-y-8">
            <LegalSection number={1} title="Acceptance of Terms">
              <p>
                By accessing or using the Site, or by signing a proposal, statement of work, or
                service agreement with Adex360, you confirm that you have read, understood, and
                agree to be bound by these Terms. If you do not agree, please do not use the Site
                or engage our services.
              </p>
            </LegalSection>

            <LegalSection number={2} title="Who We Are">
              <p>
                Adex360 is a digital growth marketing and technology company offering{" "}
                {link("/seo-services", "SEO")}, {link("/social-media-management", "social media management")},{" "}
                {link("/performance-marketing", "performance marketing")},{" "}
                {link("/web-development", "web development")}, {link("/crm-integration", "CRM integration")}, and{" "}
                {link("/shopify-app-development", "Shopify app development")} services. We operate
                from offices in Glendale, New York (USA) and Lahore (Pakistan), serving clients
                worldwide.
              </p>
            </LegalSection>

            <LegalSection number={3} title="Use of Our Website">
              <p>
                You agree to use the Site only for lawful purposes. You may not attempt to gain
                unauthorized access to any part of the Site, interfere with its normal operation,
                scrape or copy content for commercial redistribution, or use the Site to
                transmit any harmful or unlawful material.
              </p>
              <p>
                All content on the Site — including text, graphics, logos, case study results,
                illustrations, and the Adex360 name and logo — is the property of Adex360 or its
                licensors and is protected by copyright and trademark law. You may not reproduce,
                distribute, or create derivative works from this content without our written
                permission.
              </p>
            </LegalSection>

            <LegalSection number={4} title="Our Services &amp; Engagements">
              <p>
                Submitting an inquiry through our {link("/contact-us", "contact form")}, booking
                widget, or the {link("/seo-services", "free SEO score tool")} does not, on its
                own, create a service agreement. The specific scope, deliverables, timeline, and
                fees for any engagement are defined in a separate proposal, statement of work, or
                signed agreement between you and Adex360, which takes precedence over these
                general Terms for that engagement.
              </p>
              <p>
                Case study results, statistics, and client outcomes shown on the Site (such as
                traffic, ranking, or revenue figures) reflect the specific results achieved for
                that client and are provided for illustrative purposes. Individual results vary
                based on industry, market, budget, and many factors outside our control, and past
                performance is not a guarantee of future results.
              </p>
            </LegalSection>

            <LegalSection number={5} title="Client Responsibilities">
              <p>
                To deliver our services effectively, we may need timely access to your website,
                advertising accounts, social media profiles, analytics, or other platforms, along
                with accurate information and prompt feedback. Delays in providing access or
                approvals may affect project timelines and results.
              </p>
            </LegalSection>

            <LegalSection number={6} title="Payment Terms">
              <p>
                Fees, billing frequency, and payment terms for any engagement are set out in the
                relevant proposal or agreement. Unless otherwise agreed in writing, invoices are
                due upon receipt, and we reserve the right to pause work on overdue accounts.
              </p>
            </LegalSection>

            <LegalSection number={7} title="Third-Party Platforms">
              <p>
                Our services may involve managing accounts on third-party platforms such as
                Google, Meta, Shopify, and GoHighLevel. We are not responsible for outages, policy
                changes, account suspensions, or algorithm updates made by these platforms, though
                we will work in good faith to help you navigate them.
              </p>
            </LegalSection>

            <LegalSection number={8} title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Adex360 shall not be liable for any
                indirect, incidental, or consequential damages arising from your use of the Site
                or our services, including loss of revenue, data, or business opportunities. Our
                total liability for any claim relating to a specific engagement is limited to the
                fees paid to us for that engagement in the preceding three months.
              </p>
            </LegalSection>

            <LegalSection number={9} title="Termination">
              <p>
                Either party may terminate an ongoing engagement in accordance with the notice
                period set out in the relevant agreement. Fees for work completed up to the
                termination date remain payable.
              </p>
            </LegalSection>

            <LegalSection number={10} title="Governing Law">
              <p>
                These Terms are governed by the laws of Pakistan, without regard to conflict-of-law
                principles, and without prejudice to any mandatory consumer-protection laws that
                apply in your jurisdiction.
              </p>
            </LegalSection>

            <LegalSection number={11} title="Changes to These Terms">
              <p>
                We may update these Terms from time to time to reflect changes in our services or
                legal requirements. The &ldquo;Last updated&rdquo; date at the top of this page
                shows when the Terms were last revised. Continuing to use the Site after changes
                are posted constitutes acceptance of the revised Terms.
              </p>
            </LegalSection>
          </div>
        </section>

        <div className="my-14 border-t border-[#E4E8F3]" />

        <section id="privacy" className="scroll-mt-40">
          <SectionHeader
            icon={ShieldCheck}
            eyebrow="Privacy Policy"
            title="Privacy Policy"
            intro="This Privacy Policy explains what information Adex360 collects when you visit adex360.com or engage with us, how we use it, and the choices you have. We collect only what we need to respond to you and deliver our services."
          />

          <div data-reveal-group="" data-stagger="0.06" className="space-y-8">
            <LegalSection number={1} title="Information We Collect">
              <p>
                <strong className="font-bold text-ink">Information you provide:</strong> when you
                submit our {link("/contact-us", "contact form")}, book a consultation, or use the{" "}
                {link("/seo-services", "free SEO score tool")}, we collect details such as your
                name, email address, phone number, company/website, and the message you send.
              </p>
              <p>
                <strong className="font-bold text-ink">Information collected automatically:</strong>{" "}
                like most websites, we may use cookies and similar technologies to understand how
                visitors use the Site — for example, which pages are viewed and how you arrived
                at the Site — so we can keep it fast, secure, and useful.
              </p>
            </LegalSection>

            <LegalSection number={2} title="How We Use Your Information">
              <ul className="list-disc space-y-1.5 pl-5">
                <li>To respond to your inquiries and follow up on consultation requests.</li>
                <li>To prepare proposals and deliver the services you engage us for.</li>
                <li>To send updates about your project, campaigns, or account.</li>
                <li>To improve the Site and understand how visitors find and use it.</li>
                <li>To meet legal, accounting, and security obligations.</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </LegalSection>

            <LegalSection number={3} title="Cookies &amp; Tracking Technologies">
              <p>
                We may use cookies and analytics tools to measure site performance and understand
                visitor behavior in aggregate. You can control or disable cookies through your
                browser settings; doing so may affect some functionality of the Site.
              </p>
            </LegalSection>

            <LegalSection number={4} title="Third-Party Services We Use">
              <p>
                Our contact form and consultation booking widget are powered by GoHighLevel
                (LeadConnector), a third-party platform that processes form submissions on our
                behalf so our team can respond to you. When you submit these forms, your
                information is handled in accordance with this Policy and GoHighLevel&rsquo;s own
                privacy practices. We may also use trusted third-party tools for email, scheduling,
                and analytics in the course of delivering our services.
              </p>
            </LegalSection>

            <LegalSection number={5} title="How We Share Information">
              <p>
                We share your information only with service providers who help us operate the
                Site and deliver our services (such as the form/booking platform above), or when
                required by law. We do not share your information with third parties for their own
                marketing purposes.
              </p>
            </LegalSection>

            <LegalSection number={6} title="Data Retention">
              <p>
                We retain your information for as long as needed to respond to your inquiry,
                deliver an active engagement, and meet our legal and accounting obligations, after
                which it is deleted or anonymized.
              </p>
            </LegalSection>

            <LegalSection number={7} title="Data Security">
              <p>
                We take reasonable technical and organizational measures to protect your
                information from unauthorized access, loss, or misuse. However, no method of
                transmission over the internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </LegalSection>

            <LegalSection number={8} title="Your Rights">
              <p>
                Depending on where you are located, you may have the right to access, correct, or
                request deletion of your personal information, or to object to or restrict how we
                use it. To exercise any of these rights, contact us at {mail} and we will respond
                as required by applicable law.
              </p>
            </LegalSection>

            <LegalSection number={9} title="Children's Privacy">
              <p>
                The Site and our services are intended for businesses and individuals aged 18 and
                over. We do not knowingly collect personal information from children.
              </p>
            </LegalSection>

            <LegalSection number={10} title="International Data Transfers">
              <p>
                As we operate from offices in the United States and Pakistan and work with clients
                worldwide, your information may be processed in a country other than the one you
                live in. Wherever your information is processed, we handle it in line with this
                Policy.
              </p>
            </LegalSection>

            <LegalSection number={11} title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo;
                date at the top of this page reflects the most recent revision. We encourage you to
                review this page periodically.
              </p>
            </LegalSection>

            <LegalSection number={12} title="Contact Us">
              <p>
                If you have any questions about these Terms or this Privacy Policy, or want to
                exercise your data rights, reach us at {mail}, or through our{" "}
                {link("/contact-us", "Contact Us")} page. Our offices are located in Glendale, New
                York (USA) and Lahore (Pakistan).
              </p>
            </LegalSection>
          </div>
        </section>
      </div>
    </article>
  );
}
