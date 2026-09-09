import { SITE_URL } from "@/lib/site";

// Organization + LocalBusiness JSON-LD, embedded once in the root layout so
// it's present on every page. Addresses and phones match the real ones in
// Footer.tsx/ContactForm.tsx — keep both in sync if either changes.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Adex360",
  url: SITE_URL,
  logo: `${SITE_URL}/images/adex-360-Logo.png`,
  description:
    "Adex360 is a growth marketing and technology company offering SEO, performance marketing, social media management, web development, Shopify app development, and CRM integration.",
  email: "info@adex360.com",
  sameAs: [
    "https://www.facebook.com/360.adex/",
    "https://www.instagram.com/adex.360/",
    "https://pk.linkedin.com/company/adex360",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-7405-127633",
      contactType: "customer service",
      areaServed: "GB",
    },
    {
      "@type": "ContactPoint",
      telephone: "+92-301-8220878",
      contactType: "customer service",
      areaServed: "PK",
    },
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Luton",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Glendale, NY",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  ],
};
