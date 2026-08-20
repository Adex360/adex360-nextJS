# Adex360 – WordPress to Next.js Migration Plan

**Prepared for:** Adex360 Agency Owner
**Prepared by:** Web/Development Team
**Date:** August 18, 2026

## 1. Project Objective

Rebuild the current Adex360 WordPress (Elementor-based) website in Next.js while preserving the exact same visual design, content, and page structure. The new site will be primarily static for maximum speed and SEO performance, with a custom backend built only for the blog ("Marketing Insights") section so the team can publish new articles in the future without needing a developer.

## 2. Current Site Audit (Summary)

- **Platform:** WordPress, built with the Elementor page builder.
- **Main navigation and pages identified:** Home; Growth Marketing (SEO Services, Social Media Management, Performance Marketing); Web & App Development (Web Development, Shopify App Development); Custom Solutions (CRM Integration); Company (About Us, FAQ's, Case Studies, Marketing Insights/Blog); Contact Us.
- **Design language:** purple-to-blue gradient hero banners with isometric illustrations, rounded white service cards in a 3-column grid, stats/counter blocks (e.g. "2000+ Happy Clients"), icon-based feature lists, orange and blue accent colors, a sticky header with multi-level dropdown menus, and a footer with contact details and quick links.
- **Contact page:** a lead-generation form (Full Name, Email, Phone, service checkboxes, Website/Social URL, message) alongside a contact-info block (hotline, office address, email).
- **Blog ("Resources"):** a card-grid listing page showing featured image, date, author, view count and excerpt, plus individual post pages with a sidebar (search box and recent posts list).
- **Current SEO status:** basic meta title, meta description, canonical tag, and Open Graph/Twitter card tags are present. No structured data (JSON-LD schema) exists anywhere on the site today — this is a key improvement opportunity for the rebuild.

## 3. Proposed Tech Stack

- **Framework:** Next.js 14+ (App Router) with React and TypeScript.
- **Styling:** Tailwind CSS, to efficiently match and maintain the existing design system.
- **Animations:** GSAP + ScrollTrigger (decision updated during Phase 3 — originally Framer Motion). GSAP powers the shared ScrollFx reveal engine, hero timelines, SVG path drawing, counters, and shape morphs; a second animation library is unnecessary.
- **Forms:** React Hook Form paired with a Next.js API route for the contact form.
- **Blog backend:** a custom admin panel and database, or a headless CMS (both options detailed in Section 5).
- **Hosting:** Vercel, which offers native Next.js support, a fast global CDN, and automatic image optimization.
- **Version control:** GitHub, with a CI/CD pipeline that auto-deploys to Vercel.

## 4. Site Architecture (Static Pages)

All pages below will be rebuilt as fully static pages using Static Site Generation (SSG), mapped 1:1 to the current URLs so existing search rankings and backlinks are protected:

- Home ( `/` )
- Growth Marketing: `/seo-services`, `/social-media-management`, `/performance-marketing`
- Web & App Development: `/web-development`, `/shopify-app-development`
- Custom Solutions: `/crm-integration`
- Company: `/about-us`, `/faqs`, `/case-studies`
- Contact: `/contact-us`
- Blog / Marketing Insights: `/resources` (listing page) and `/resources/[slug]` (individual posts) — these two are the only dynamic, database-driven pages.

**Added during Phase 3 (not in the original WP sitemap above):** three individual Shopify app landing pages, linked from `/shopify-app-development`'s "Apps We Developed" project cards per the client's explicit slugs — `/universal-product-feed`, `/pushbot`, `/mailbot`. These are net-new pages (no equivalent existed on the old WordPress site), not part of the original 1:1 URL migration; content/screenshots for each are still pending from the client. See `docs/progress.md` for live status.

Wherever a slug must change for technical reasons, a 301 redirect will be put in place (see Section 8) so no SEO value is lost.

## 5. Blog Backend Plan (the only dynamic part)

Since the team needs to publish new blog posts in the future, this section requires a lightweight backend and an admin dashboard.

**Recommended approach — Custom Admin Panel + Database, built inside the same Next.js project:**

- **Database:** PostgreSQL (hosted on Supabase or Neon) or MongoDB Atlas, storing posts, categories and author data.
- **Authentication:** NextAuth.js with email/password or Google login restricted to agency staff only — no public sign-ups.
- **Admin dashboard** (private route, e.g. `/admin`): login screen; create, edit and delete blog posts; a rich text editor (TipTap or Lexical) for formatting; image upload via Cloudinary or Vercel Blob storage; per-post fields for Title, Slug, Featured Image, Category/Tags, Author, Excerpt, Content, SEO Title, SEO Meta Description, Publish/Draft status and Publish Date; and a post list view with search, filter, edit and delete actions.
- **Frontend rendering:** the blog listing and single-post pages will use Incremental Static Regeneration (ISR), keeping pages fast and static while automatically refreshing shortly after a new post is published — no manual redeploy required.

**Alternative option — Headless CMS:** tools such as Sanity or Strapi (or keeping WordPress purely as a headless content source just for blog posts) can be used instead of a custom admin panel. This trades some flexibility for a faster setup and a more polished, ready-made editing experience. We can decide together which route best fits the agency's budget and timeline.

## 6. SEO & Structured Data (Schema) Strategy

- Use the Next.js Metadata API to set a unique title, meta description, canonical URL, and Open Graph/Twitter card tags for every page, matching or improving on the current tags.
- Add JSON-LD structured data site-wide, since none exists today:
  - Organization / LocalBusiness schema on every page (name, logo, address, phone, email, social profiles).
  - Service schema on each individual service page (SEO Services, Performance Marketing, Web Development, etc.).
  - BreadcrumbList schema for clearer search-result navigation.
  - FAQPage schema on the FAQ's page.
  - Article/BlogPosting schema on every blog post (headline, author, datePublished, image).
  - Review/AggregateRating schema if the existing Clutch review data can be legitimately marked up.
- Auto-generate `sitemap.xml` and `robots.txt` using Next.js's built-in support.
- Preserve current URL slugs wherever possible, and set up 301 redirects for any that must change.
- Optimize every image with `next/image` for automatic resizing, lazy loading, and modern formats (WebP/AVIF).
- Target strong Core Web Vitals (LCP, CLS, INP) through static generation and optimized assets.
- Add descriptive alt text to all images for accessibility and image SEO.
- Re-submit the updated sitemap to Google Search Console after launch and monitor indexing closely.

## 7. Design & Content Migration Approach

- Rebuild the existing visual design closely using Tailwind CSS components: gradient hero sections, isometric illustration placement, rounded stat cards, icon-based feature grids, the sticky mega-menu navigation, and the footer — matching the current brand colors (purple, blue, orange).
- Export and reuse existing images, icons and illustrations from the WordPress media library.
- Recreate the multi-level dropdown navigation (Growth Marketing, Web & App Development, Custom Solutions, Company) as an accessible, mobile-responsive React component.
- Rebuild the contact form exactly as-is (Full Name, Email, Phone, service checkboxes, Website/Social URL, message) and connect it to a Next.js API route that emails submissions (via Resend or Nodemailer) and optionally logs them to the database.
- Add basic spam protection (a honeypot field or Google reCAPTCHA v3) to the contact form.

## 8. Migration & Launch Safeguards

- Build a full URL redirect map (old WordPress URL to new Next.js URL) and implement 301 redirects for any changed paths, protecting existing search rankings.
- Keep the current WordPress site untouched and live until the Next.js site is fully tested and approved.
- Run a full QA pass before go-live: cross-browser testing, mobile responsiveness, form submission testing, broken-link checks, schema validation (Google Rich Results Test), and a Lighthouse performance/SEO audit.
- Point DNS to the new site only after final sign-off, and monitor Google Search Console and analytics closely for the first 2–4 weeks post-launch.

## 9. Suggested Timeline (Phased)

| Phase | Description | Estimate |
|---|---|---|
| Phase 1 | Discovery, content/asset export, final tech decisions | ~1 week |
| Phase 2 | Design system setup (Tailwind theme, shared components such as header, footer, buttons, cards) | ~1 week |
| Phase 3 | Build all static pages (Home, service pages, About, FAQ, Case Studies, Contact) | ~2–3 weeks |
| Phase 4 | Build the blog backend, admin dashboard, and blog frontend pages | ~2 weeks |
| Phase 5 | SEO implementation (metadata, schema, sitemap) and contact form integration | ~1 week |
| Phase 6 | QA, performance tuning, and redirect mapping | ~1 week |
| Phase 7 | Launch and post-launch monitoring | ongoing |

**Total estimated build time:** roughly 8–10 weeks, depending on content readiness and feedback cycles.

## 10. Tools & Services Summary

- Next.js, TypeScript, Tailwind CSS, Framer Motion
- Database: Supabase/Neon (Postgres) or MongoDB Atlas
- Authentication: NextAuth.js
- Rich text editor: TipTap or Lexical
- Image storage: Cloudinary or Vercel Blob
- Email delivery: Resend or Nodemailer
- Hosting: Vercel
- Version control: GitHub
- SEO testing & monitoring: Google Search Console, Google Rich Results Test, Lighthouse
