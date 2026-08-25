import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      // Old WordPress "/tag/*" archive URLs are still indexed by Google (and
      // getting real search traffic) but have no equivalent on the new site.
      // Rather than let them 404, route each by keyword in the old slug to
      // the closest real page, so that traffic — and any residual SEO value
      // Google associated with the old URL — lands somewhere useful instead
      // of a dead end. Order matters: first match wins, so more specific
      // keywords are listed before the broad "seo"/"web" ones they could
      // otherwise be swallowed by.
      { source: "/tag/:slug(.*shopify.*)", destination: "/shopify-app-development", permanent: true },
      { source: "/tag/:slug(.*crm.*)", destination: "/crm-integration", permanent: true },
      { source: "/tag/:slug(.*social.*)", destination: "/social-media-management", permanent: true },
      { source: "/tag/:slug(.*performance.*)", destination: "/performance-marketing", permanent: true },
      { source: "/tag/:slug(.*web-dev.*)", destination: "/web-development", permanent: true },
      { source: "/tag/:slug(.*website.*)", destination: "/web-development", permanent: true },
      { source: "/tag/:slug(.*seo.*)", destination: "/seo-services", permanent: true },
      // Anything else under /tag/* (including nested paths like WP's
      // /tag/:slug/page/2/ pagination) — closest real equivalent is the blog.
      { source: "/tag/:path*", destination: "/resources", permanent: true },
    ];
  },
};

export default nextConfig;
