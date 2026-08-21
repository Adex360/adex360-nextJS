import type { AppCaseStudyContent } from "../apps/AppCaseStudy";
import Stat from "./Stat";

export const weltewHomeContent: AppCaseStudyContent = {
  eyebrow: "Web Development",
  title: "Weltew Home – High-Performance Web Development for a Global Furniture Brand",
  overview: (
    <>
      Weltew Home is a leading international furniture brand known for its high-quality
      craftsmanship and innovative home décor solutions. With over <Stat>150</Stat> stores in
      Turkey and <Stat>80+</Stat> locations worldwide, Weltew Home needed a robust and scalable
      online platform to showcase its extensive product catalog while delivering a seamless
      browsing experience to its global audience. Adex360 developed a feature-rich,
      high-performance website using ASP.NET and Microsoft-IIS, ensuring fast loading speeds,
      intuitive navigation, and a responsive design to enhance customer engagement and drive
      conversions.
    </>
  ),
  icon: "Sofa",
  gradient: "from-[#B08968] to-[#6B4EE6]",
  goals: {
    heading: "Development Goals & Objectives",
    intro:
      "The primary objective was to build a scalable and visually appealing online presence that reflects Weltew Home's brand identity and premium product offerings. The key development goals included:",
    items: [
      "Custom Website Development – Building a tailored web platform using ASP.NET and Microsoft-IIS for optimized performance and security.",
      "Seamless UI/UX Design – Creating an intuitive and visually engaging layout that enhances browsing and product discovery.",
      "Mobile Optimization – Ensuring a fully responsive design for smooth access across desktop, tablet, and mobile devices.",
      "Advanced Product Showcase – Implementing a well-structured product catalog for easy navigation and filtering of furniture collections.",
      "Multi-Language & Global Accessibility – Supporting multiple languages and regions to cater to Weltew Home's global audience.",
      "SEO & Performance Optimization – Enhancing website speed, search engine visibility, and structured metadata for better rankings and discoverability.",
    ],
  },
  features: {
    heading: "Technologies & Features Implemented",
    intro:
      "To ensure scalability, security, and high performance, we utilized a modern tech stack with powerful features:",
    items: [
      "ASP.NET & Microsoft-IIS Framework – A robust backend architecture ensuring scalability, speed, and security.",
      "Custom UI/UX Design – Developed an elegant and intuitive interface for seamless navigation and product exploration.",
      "Mobile-Responsive Design – Fully optimized for fast and smooth experiences on all screen sizes.",
      "Advanced Product Filtering & Categories – Structured product pages with smart filtering options for enhanced user experience.",
      "Global Reach with Multi-Language Support – Implemented multi-language functionality to serve a diverse international audience.",
      "SEO & Technical Optimization – Integrated structured data, compressed images, and caching mechanisms to improve search engine performance.",
    ],
  },
  challenges: {
    heading: "Challenges & Solutions",
    items: [
      {
        title: "Large Product Catalog & Efficient Navigation",
        problem: "With an extensive range of furniture collections, the website required optimized product categorization and filtering.",
        solution: "Developed custom product sorting, search filters, and interactive category pages to make navigation smooth and efficient.",
      },
      {
        title: "Ensuring High Performance for Global Users",
        problem: "The website needed to maintain fast loading speeds despite a heavy product catalog and high-resolution images.",
        solution: "Implemented content delivery networks (CDN), image compression, and lazy loading to enhance speed and user experience.",
      },
      {
        title: "Maintaining Brand Aesthetics & Functionality",
        problem: "The site needed to balance visual appeal with seamless functionality.",
        solution: "Designed a clean and modern interface while ensuring fast responsiveness and smooth animations for a premium user experience.",
      },
    ],
  },
  results: {
    heading: "Results & Impact",
    items: [
      "Enhanced Online Presence – The modern UI/UX design and optimized product showcase significantly improved user engagement.",
      "Improved Customer Experience – Faster load times and intuitive navigation increased time spent on site and reduced bounce rates.",
      "Stronger Search Engine Rankings – SEO enhancements led to higher discoverability in search results, driving more organic traffic.",
      "Future-Ready Infrastructure – The website is scalable and adaptable, allowing for future expansions and feature updates.",
    ],
  },
  finalThoughts: {
    heading: "Final Thoughts",
    paragraphs: [
      "Building Weltew Home's online platform was a strategic project aimed at delivering a high-performance, visually engaging, and conversion-driven website. By leveraging ASP.NET's flexibility, Microsoft-IIS's scalability, and optimized UI/UX design, Adex360 created a seamless digital storefront that enhances customer interactions and global brand presence.",
      "With a future-proof web architecture, Weltew Home is now well-positioned to expand its digital footprint, strengthen its eCommerce capabilities, and provide a superior online experience to furniture buyers worldwide.",
    ],
  },
  cta: { label: "Talk to Us About Your Store", href: "/contact-us" },
};
