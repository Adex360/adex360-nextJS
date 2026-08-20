import type { AppCaseStudyContent } from "./AppCaseStudy";

export const pushbotContent: AppCaseStudyContent = {
  eyebrow: "Shopify App",
  title: "Pushbot – Automated Web Push Notifications for Shopify Stores",
  overview:
    "Pushbot is an advanced web push notification app designed to help Shopify merchants engage customers, recover abandoned carts, and drive repeat sales through real-time notifications. Developed by Adex360, Pushbot enables automated and personalized messaging, allowing store owners to reach their audience instantly, even when they are not on the website.",
  icon: "Bell",
  gradient: "from-[#6B4EE6] to-brand-blue",
  goals: {
    heading: "Development Goals & Objectives",
    intro:
      "The primary goal of Pushbot was to create a seamless, automated notification system that helps Shopify merchants retain customers and boost conversions. Key objectives included:",
    items: [
      "Automated Push Notifications – Enable merchants to send real-time notifications for promotions, abandoned carts, and restocks.",
      "Personalized Customer Engagement – Implement audience segmentation for targeted notifications based on user behavior.",
      "One-Click Subscription – Simplify the opt-in process to maximize subscriber acquisition without requiring email or phone numbers.",
      "Multi-Device Compatibility – Ensure seamless push notifications across desktop and mobile browsers.",
      "Performance Tracking & Analytics – Provide real-time insights into campaign performance, click-through rates, and conversion impact.",
    ],
  },
  features: {
    heading: "Key Features & Technologies Used",
    intro:
      "To make Pushbot a powerful marketing automation tool, Adex360 integrated cutting-edge web push notification technology with a user-friendly Shopify interface:",
    items: [
      "Automated Abandoned Cart Recovery – Sends timely notifications to recover lost sales and boost revenue.",
      "Instant Promotional Alerts – Notifies customers about flash sales, exclusive discounts, and limited-time offers.",
      "Behavior-Based Retargeting – Tracks customer activity to send relevant push notifications based on browsing and purchase history.",
      "Multi-Browser & Device Support – Works on Chrome, Firefox, Edge, and other major browsers for seamless user engagement.",
      "Advanced Scheduling & Segmentation – Allows merchants to schedule campaigns and segment audiences for personalized outreach.",
      "Real-Time Analytics & Reporting – Provides detailed metrics on notification performance, click rates, and conversions.",
    ],
  },
  challenges: {
    heading: "Challenges & Solutions",
    items: [
      {
        title: "Increasing Subscriber Opt-Ins",
        problem: "Many customers hesitate to enable push notifications, reducing the potential subscriber base.",
        solution: "Implemented one-click opt-ins and incentive-based subscription pop-ups to increase opt-in rates.",
      },
      {
        title: "Preventing Notification Fatigue",
        problem: "Frequent or irrelevant notifications can lead to customer disengagement.",
        solution:
          "Developed intelligent frequency control and segmented targeting to ensure relevant and well-timed notifications.",
      },
      {
        title: "Ensuring Cross-Browser & Device Compatibility",
        problem: "Push notifications needed to function across multiple browsers and devices.",
        solution:
          "Integrated service worker technology to enable seamless notification delivery across all supported browsers and platforms.",
      },
    ],
  },
  results: {
    heading: "Results & Impact",
    items: [
      "Higher Customer Retention – Push notifications helped merchants re-engage previous visitors and increase repeat purchases.",
      "Boosted Abandoned Cart Recovery – Timely reminders resulted in a higher recovery rate for lost sales.",
      "Increased Click-Through Rates – Personalized push campaigns saw significantly higher engagement and conversions.",
      "Seamless Automation – Merchants saved time with fully automated campaigns that run in the background.",
    ],
  },
  finalThoughts: {
    heading: "Final Thoughts",
    paragraphs: [
      "Pushbot is a powerful automation tool that helps Shopify merchants engage customers, recover lost sales, and drive conversions through personalized, real-time web push notifications. By integrating advanced automation, segmentation, and analytics, the app enables store owners to maximize customer retention and increase sales effortlessly.",
    ],
  },
  cta: { label: "Talk to Us About This App", href: "/contact-us" },
};
