# Adex360 Migration – Progress Tracker

This file tracks progress through the phases defined in [migration-plan.md](./migration-plan.md). It is updated after every work session/prompt.

**Last updated:** August 19, 2026 (Home page polish: real assets, section redesigns, responsive footer)

## Status Legend
- **Done** — phase fully complete
- **In Process** — actively being worked on right now
- Plain description — not yet started

## Current State (TL;DR)

The Home page is functionally complete: real brand assets (logos, hero illustration, team photos, brand-logo carousel, favicon), all sections rebuilt from the WordPress originals with premium redesigns, a site-wide GSAP animation system, and a fully responsive Header/Footer. The repo is on GitHub (`Munib47/adex360-nextJS`, branch `main`) — connect it to Vercel for auto-deploy on push.

**Next phase: Phase 3 continuation — build the inner static pages** (service pages, About Us, FAQ's, Case Studies, and especially Contact Us, which the Home page CTAs all link to). The remaining Phase 1 asset items (service-tab illustrations, project thumbnails, blog images) can be dropped in as they're exported.

## Phases

### Phase 1 — Discovery & Setup
Discovery, content/asset export, final tech decisions.
**Status: In Process**
- [x] Migration plan written and documented
- [x] Next.js project scaffolded (TypeScript, Tailwind, ESLint, App Router, src/ dir)
- [x] Repo pushed to GitHub (`Munib47/adex360-nextJS`, branch `main`); Vercel connection pending (user-side, gives auto-build/deploy on every push)
- [x] Core brand assets exported and integrated: color/dark logos, white logo, hero illustration, "Who we are" illustration, 16 brand logos (`public/brands/`), 4 team photos (`public/images/team/`), favicon (`src/app/icon.jpeg`)
- [ ] Remaining asset export: per-service tab illustrations (SeoStrategies tabs), project thumbnails (Projects grid), blog cover images, Clutch badge/logo asset
- [ ] Finalize tech stack decisions (DB choice, CMS vs custom admin) for the blog backend
- [ ] Clutch widget embed code (needs `data-clutchcompany-id` from the Clutch vendor dashboard → Marketing Collateral → Widgets)

### Phase 2 — Design System Setup
Tailwind theme, shared components such as header, footer, buttons, cards.
**Status: In Process (near done)**
- [x] Tailwind theme (`src/app/globals.css`) — brand color tokens, Poppins font, hero gradient/grid, custom `xs` (480px) breakpoint. Accent orange in use across the site: `#E38A19`
- [x] Header (`src/components/layout/Header.tsx`) — fixed; transparent-over-hero with white logo, solid white + dark logo after 32px scroll; mega-menu dropdowns (orange `#E38A19` hover), mobile accordion menu, Contact Us CTA
- [x] Footer (`src/components/layout/Footer.tsx`) — real content (company description, 6 services, USA/Pakistan addresses/emails/phones, social links to real FB/IG/LinkedIn profiles). Responsive: 4 equal columns desktop, 2 columns tablet (480–768px), mobile (<480px) collapsible accordion rows with static logo/description
- [x] GSAP animation system (`src/components/fx/`): `ScrollFx.tsx` (data-attribute reveal engine + count-up counters; suspends CSS transitions during tweens — hard-learned fix, see Engineering Notes), `ScrollProgress.tsx` (gradient top progress bar), `BackToTop.tsx`
- [x] Libraries installed: `gsap` 3.15, `swiper` 14, `lucide-react` 1.31
- [ ] Extract shared UI primitives (buttons, section headers, cards) into `src/components/ui/` — still styled ad hoc per section

### Phase 3 — Static Pages Build
Home, service pages, About, FAQ, Case Studies, Contact.
**Status: In Process** ← **CURRENT PHASE**
- [x] **Home page — complete** (`src/app/page.tsx` + `src/components/home/*`):
  - **Hero** — real illustration, GSAP entrance timeline, 3D mouse tilt, particles/scan-line/orbs, Clutch review badge (custom-built, links to Clutch profile)
  - **Features** ("Our Magic Mantra") — 3 cards, scroll reveals, hover polish
  - **AboutStats** — `StatsShowcase.tsx`: animated 75% donut chart + 2000+ bar chart, count-up counters, floating 4.9/5 chip
  - **BrandsMarquee** — Swiper carousel of 16 real brand logos (4 visible desktop, autoplay, 1-slide steps, original colors)
  - **SeoStrategies** — interactive 6-tab services component (SEO/Web Dev/Performance/Social/CRM/Shopify) with real WP copy, per-tab client results and CTAs, GSAP tab-switch animation. Illustrations are icon-blob placeholders pending assets
  - **DrivingGrowth** ("Who We Are") — real illustration, WP copy (Orient Textiles/Hemani results), animated 350% ring card, floating stat chips, scroll parallax, line-mask heading reveal
  - **Workflow** — curved dashed path (orange→blue gradient, draws on scroll), steps pop in sync with the draw, self-drawing icons, paper plane + pulsing start dot, staggered card heights (matches WP design; a dark glass-card variant was built and reverted by request)
  - **Testimonials** — Swiper carousel with the 4 real WP testimonials (Faheem Ansari/ALMIRAH, Basit Ashrafi/SAYA, Sara Kahlo/Magna Resources, Maroof H Sabriel/MAROOF HS CPA), custom prev/next arrows, autoplay with hover-pause, 3/2/1 slides responsive
  - **Team** — real photos, corrected names/roles (Zain Hameed CEO, Umer Shoukat, Ali Lakhani, Sheharyar Ahmed), curved gradient card headers, LinkedIn hover overlay linking to real profiles, 3D flip-up entrance
  - **Blog** — 3 placeholder post cards (will become dynamic in Phase 4)
  - **ClutchStrip** — placeholder "As Featured On" badges (pending real Clutch widget)
  - Site title set: "Adex360: E-Commerce Digital Marketing Agency"; favicon live via `src/app/icon.jpeg`
- [ ] Growth Marketing pages (`/social-media-management`, `/performance-marketing`)
- [x] **SEO Services page (`/seo-services`) — done (2026-08-19)** (`src/app/seo-services/page.tsx` + `src/components/seo/*`): hero ("Elevate rankings with Adex360 SEO", 75% donut + rank chips), Not-The-Only-SEO-Company section (70% count-up, conversion/traffic placeholder charts), 6-service list + Local SEO block ("Dominate Locally"), Brands carousel (reused), Drive-Traffic/Leads/Growth (Engine 6.81x, Chief Apparel 200X), free SEO score CTA band (form UI, API pending Phase 5), Typical-Agency-vs-Adex360 comparison (gradient-outlined Top Rated card), 3-step gradient-path process (Strategizing/Implementation/Refinement), 3 featured project cards + View All Projects banner, 2 SEO testimonials, 15-question FAQ accordion, Clutch strip. Own metadata. Mobile-first; scroll reveals via ScrollFx. Pending: real illustrations (blob+icon placeholders), project thumbnails, FAQPage JSON-LD (Phase 5).
- [ ] Web & App Development pages (`/web-development`, `/shopify-app-development`)
- [ ] Custom Solutions page (`/crm-integration`)
- [ ] Company pages (`/about-us`, `/faqs`, `/case-studies`)
- [x] Contact Us page (`/contact-us`) — form UI complete (`src/app/contact-us/page.tsx` + `src/components/contact/ContactForm.tsx`): React Hook Form with validation (Full Name*, Email*, Phone, 6 service checkboxes, Website/Social URL*, message), honeypot spam field, success state, contact info column (hotline/location/email), Clutch strip, scroll reveals, mobile-first. **API route + email delivery still pending (Phase 5)** — submissions currently show the thank-you state without sending.

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
- [ ] Wire Home page Blog section to real posts

### Phase 5 — SEO & Contact Form Integration
Metadata, schema, sitemap, and contact form integration.
**Status:** Not started
- [ ] Next.js Metadata API on every page (root title/description done; per-page pending)
- [ ] JSON-LD schema: Organization/LocalBusiness, Service, BreadcrumbList, FAQPage, Article/BlogPosting, Review
- [ ] sitemap.xml and robots.txt
- [ ] Contact form API route + email delivery (Resend/Nodemailer)
- [ ] Spam protection (honeypot or reCAPTCHA v3)
- [ ] next/image optimization pass, alt text audit
- [ ] Official Clutch review widget embed (replaces custom hero badge + ClutchStrip once embed code is provided)

### Phase 6 — QA & Redirects
QA, performance tuning, and redirect mapping.
**Status:** Not started
- [ ] Full URL redirect map (old WordPress URLs → new Next.js URLs) + 301s
- [ ] Cross-browser and mobile responsiveness testing
- [ ] Form submission testing
- [ ] Broken-link checks
- [ ] Schema validation (Google Rich Results Test)
- [ ] Lighthouse performance/SEO audit (compress team PNGs ~300-900KB each while at it)

### Phase 7 — Launch & Monitoring
Launch and post-launch monitoring.
**Status:** Not started
- [ ] DNS cutover after final sign-off
- [ ] Submit updated sitemap to Google Search Console
- [ ] Monitor GSC and analytics for 2–4 weeks post-launch

## What's Next (recommended order)
1. **Contact Us page** — form UI (Full Name, Email, Phone, service checkboxes, Website/Social URL, message) per the WP original; API route + email delivery can follow in Phase 5. Unblocks every CTA on the Home page.
2. **Service pages** — the 6 pages already linked from the header mega-menu, footer, and SeoStrategies tabs. Reuse the Home page's design language (hero band, feature grids, results, CTA).
3. **Company pages** — About Us, FAQ's, Case Studies.
4. **Remaining assets** — service-tab illustrations, project thumbnails, blog covers; drop into `public/images/` and swap in.
5. **Phase 4 blog backend** — after static pages are done; needs the DB/CMS decision from Phase 1.

## Engineering Notes (read before touching animations)
- **Never put CSS `transition-all` (or any transition covering `opacity`/`transform`) on an element GSAP animates** — the transition fights GSAP's per-frame writes and elements get stuck invisible. `ScrollFx.tsx` suspends transitions during tweens and restores them via `clearProps`; custom-animated sections (Workflow, Team, DrivingGrowth) follow the same suspend/clearProps pattern manually.
- `ScrollFx` API: `data-reveal="up|left|right|scale|fade"`, `data-reveal-group` (+ `data-stagger`), `data-reveal-delay`, `data-counter` + `data-counter-suffix`. Sections with bespoke GSAP timelines (Hero, DrivingGrowth, Workflow, Team, SeoStrategies tab-switches, StatsShowcase charts) manage their own animation and mostly bypass `data-reveal`.
- All animation respects `prefers-reduced-motion`; SSR markup always renders the finished state for SEO.
- Custom breakpoints: `xs` = 480px (defined in `globals.css` `@theme`); Tailwind defaults otherwise (md 768px = tablet/desktop boundary per client).
- Dev: `npm run dev` (hot reload). Prod check: `npm run build` + `npm run start` — never both on port 3000 at once.

## Change Log
- **2026-08-18:** Project scaffolded as "Adex360 - NextJS"; migration-plan.md and progress.md created inside /docs.
- **2026-08-18:** Built Home page from Elementor design screenshots — brand Tailwind theme, sticky Header (mega-menu + mobile), Footer, and all Home sections. Verified with `tsc --noEmit`, `eslint`, and `next build` (static, no errors).
- **2026-08-18:** Real logos added; Header rebuilt (transparent-over-hero → solid on scroll, white/dark logo swap); repo pushed to GitHub (`Munib47/adex360-nextJS`). Brands section rebuilt as Swiper carousel with 16 real brand logos.
- **2026-08-18:** Hero got real illustration + Clutch review badge; GSAP installed; futuristic Hero animation (entrance timeline, 3D mouse tilt, particles, scan-line, animated grid).
- **2026-08-18:** Site-wide GSAP animation system — `ScrollFx.tsx` data-attribute ScrollTrigger engine (staggered reveals + count-up counters across all sections), scroll progress bar, back-to-top button. Fixed the CSS-transition-vs-GSAP conflict that left sections invisible (see Engineering Notes).
- **2026-08-18:** SeoStrategies rebuilt as interactive 6-tab services component with real WP copy/results and GSAP tab-switch animations. AboutStats rebuilt as `StatsShowcase` (animated donut + bar charts).
- **2026-08-19:** DrivingGrowth rebuilt with real illustration, WP copy, animated 350% ring, floating chips, parallax. Workflow rebuilt with gradient curved-path draw animation, synced step pops, self-drawing icons, paper plane (dark variant built then reverted by request). Testimonials rebuilt as Swiper carousel with the 4 real WP testimonials. Team rebuilt with real photos, corrected names, LinkedIn hover overlays, 3D entrance.
- **2026-08-19:** Footer: real content (description, services, USA/Pakistan contacts, social URLs) + responsive rework (4 equal cols desktop / 2 cols tablet / mobile accordion, custom 480px breakpoint). Favicon set from `adex360_favicon.jpeg` via `src/app/icon.jpeg`. Site title set to "Adex360: E-Commerce Digital Marketing Agency". Header/nav hover + footer hovers standardized on `#E38A19`.
