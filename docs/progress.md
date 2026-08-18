# Adex360 Migration – Progress Tracker

This file tracks progress through the phases defined in [migration-plan.md](./migration-plan.md). It is updated after every work session/prompt.

**Last updated:** August 18, 2026 (Home page build)

## Status Legend
- **Done** — phase fully complete
- **In Process** — actively being worked on right now
- Plain description — not yet started

## Phases

### Phase 1 — Discovery & Setup
Discovery, content/asset export, final tech decisions.
**Status: In Process**
- [x] Migration plan written and documented
- [x] Next.js project scaffolded (TypeScript, Tailwind, ESLint, App Router, src/ dir)
- [ ] Export existing content and media assets from WordPress
- [ ] Finalize tech stack decisions (DB choice, CMS vs custom admin)

### Phase 2 — Design System Setup
Tailwind theme, shared components such as header, footer, buttons, cards.
**Status: In Process**
- [x] Define Tailwind theme (`src/app/globals.css` — brand color tokens, Poppins font, hero gradient, marquee animation)
- [x] Build shared layout components (`src/components/layout/Header.tsx` with mega-menu + mobile menu, `Footer.tsx`)
- [ ] Extract shared UI primitives (buttons, cards) into a reusable `src/components/ui/` kit — currently styled ad hoc per section

### Phase 3 — Static Pages Build
Home, service pages, About, FAQ, Case Studies, Contact.
**Status: In Process**
- [x] Home page — `src/app/page.tsx` composing `src/components/home/*` (Hero, Features, AboutStats, BrandsMarquee, SeoStrategies, DrivingGrowth, Workflow, Testimonials, Projects, Team, Blog, ClutchStrip). Content/images are placeholders (gradients, initials, inline SVG icons) since WordPress media hasn't been exported yet — swap in real photography/logos once Phase 1 asset export is done.
- [ ] Growth Marketing pages (SEO Services, Social Media Management, Performance Marketing)
- [ ] Web & App Development pages (Web Development, Shopify App Development)
- [ ] Custom Solutions page (CRM Integration)
- [ ] Company pages (About Us, FAQ's, Case Studies)
- [ ] Contact Us page (form UI)

### Phase 4 — Blog Backend & Admin
Blog backend, admin dashboard, and blog frontend pages.
**Status:** Not started
- [ ] Database setup (Supabase/Neon or MongoDB Atlas)
- [ ] NextAuth.js authentication (staff-only)
- [ ] Admin dashboard (/admin) — CRUD for posts
- [ ] Rich text editor integration (TipTap or Lexical)
- [ ] Image upload (Cloudinary or Vercel Blob)
- [ ] Blog listing page (/resources) with ISR
- [ ] Blog post page (/resources/[slug]) with ISR

### Phase 5 — SEO & Contact Form Integration
Metadata, schema, sitemap, and contact form integration.
**Status:** Not started
- [ ] Next.js Metadata API on every page
- [ ] JSON-LD schema: Organization/LocalBusiness, Service, BreadcrumbList, FAQPage, Article/BlogPosting, Review
- [ ] sitemap.xml and robots.txt
- [ ] Contact form API route + email delivery (Resend/Nodemailer)
- [ ] Spam protection (honeypot or reCAPTCHA v3)
- [ ] next/image optimization pass, alt text audit

### Phase 6 — QA & Redirects
QA, performance tuning, and redirect mapping.
**Status:** Not started
- [ ] Full URL redirect map (old WordPress URLs → new Next.js URLs) + 301s
- [ ] Cross-browser and mobile responsiveness testing
- [ ] Form submission testing
- [ ] Broken-link checks
- [ ] Schema validation (Google Rich Results Test)
- [ ] Lighthouse performance/SEO audit

### Phase 7 — Launch & Monitoring
Launch and post-launch monitoring.
**Status:** Not started
- [ ] DNS cutover after final sign-off
- [ ] Submit updated sitemap to Google Search Console
- [ ] Monitor GSC and analytics for 2–4 weeks post-launch

## Change Log
- **2026-08-18:** Project scaffolded as "Adex360 - NextJS"; migration-plan.md and progress.md created inside /docs.
- **2026-08-18:** Built Home page from Elementor design screenshots — brand Tailwind theme, sticky Header (mega-menu + mobile), Footer, and all Home sections. Verified with `tsc --noEmit`, `eslint`, and `next build` (static, no errors). Real WordPress images/logos/team photos still need to replace the placeholder gradients/initials once exported (Phase 1).
- **2026-08-18:** Added GSAP site-wide animation system — futuristic Hero (entrance timeline, floating illustration, 3D mouse tilt, particles, scan-line, animated grid), plus a data-attribute ScrollTrigger engine (`src/components/fx/ScrollFx.tsx`) driving staggered reveals and count-up counters across all home sections, a scroll progress bar, and a back-to-top button. Respects `prefers-reduced-motion`.
