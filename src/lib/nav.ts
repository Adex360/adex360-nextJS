export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Growth Marketing",
    children: [
      {
        label: "SEO Services",
        href: "/seo-services",
        description: "Rank higher and drive organic traffic",
      },
      {
        label: "Social Media Management",
        href: "/social-media-management",
        description: "Grow and engage your audience",
      },
      {
        label: "Performance Marketing",
        href: "/performance-marketing",
        description: "Paid campaigns that convert",
      },
    ],
  },
  {
    label: "Web & App Development",
    children: [
      {
        label: "Web Development",
        href: "/web-development",
        description: "Fast, modern, conversion-ready websites",
      },
      {
        label: "Shopify App Development",
        href: "/shopify-app-development",
        description: "Custom apps for your Shopify store",
      },
    ],
  },
  {
    label: "Custom Solutions",
    children: [
      {
        label: "CRM Integration",
        href: "/crm-integration",
        description: "Connect your tools and automate workflows",
      },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ's", href: "/faqs" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Marketing Insights", href: "/resources" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];
