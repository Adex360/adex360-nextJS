# Adex360 Migration – Progress Tracker

This file tracks progress through the phases defined in [migration-plan.md](./migration-plan.md). It is updated after every work session/prompt.

**Last updated:** August 19, 2026 (Social Media Management page complete + adversarial review fixes; branded under-construction 404 page)

## Status Legend
- **Done** — phase fully complete
- **In Process** — actively being worked on right now
- Plain description — not yet started

## Current State (TL;DR)

**Four pages are complete and shipping static:** Home (`/`), Contact Us (`/contact-us`), SEO Services (`/seo-services`), and Social Media Management (`/social-media-management`). All use real brand assets, real WordPress content, and the site-wide GSAP animation system — scroll-scrubbed parallax (`data-parallax`) and reversible reveals (sections animate in scrolling down and reverse out scrolling up, replaying on re-entry). GSAP is the officially recorded animation library (migration plan updated; Framer Motion dropped). Every not-yet-built route (remaining service/company pages, `/portfolio`, or any bad URL) now shows a branded, animated "under construction" page (`src/app/not-found.tsx`) instead of the default 404 — it returns a proper 404 status and hands off automatically as each real page ships. The repo is on GitHub (`Munib47/adex360-nextJS`, branch `main`) — connect it to Vercel for auto-deploy on push. **A large batch of work is uncommitted locally** (contact page, SEO page, social page, animation system upgrades, 404 page) — commit + push recommended.

**In process / next: Phase 3 continuation — remaining inner pages.** Remaining: 4 service pages (`/performance-marketing`, `/web-development`, `/shopify-app-development`, `/crm-integration` — awaiting WP screenshots + tab/FAQ/testimonial HTML from the user, same recipe as the SEO/Social pages), the Portfolio page (`/portfolio`, awaiting user content), and company pages (`/about-us`, `/faqs`). Remaining Phase 1 asset items (service-tab illustrations, project thumbnails, blog images, Clutch embed code) can be dropped in as they're exported.

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
- [x] GSAP animation system (`src/components/fx/`): `ScrollFx.tsx` (data-attribute engine — staggered reveals, count-up counters, scroll-scrubbed `data-parallax` drift; reveals reverse on scroll-up and replay on re-entry; suspends CSS transitions during tweens — hard-learned fix, see Engineering Notes), `ScrollProgress.tsx` (gradient top progress bar), `BackToTop.tsx`. GSAP + ScrollTrigger is the recorded animation stack (migration plan §3 updated; no Framer Motion). Footer columns have a staggered reveal on every page
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
- [x] **Social Media Management page (`/social-media-management`) — done (2026-08-19)** (`src/app/social-media-management/page.tsx` + `src/components/social/*`), built from WP screenshots + provided tab/testimonial/FAQ HTML:
  - **SocialHero** — futuristic phone-mockup composition: CSS phone with mini feed, floating 60% engagement donut / +2.4K followers / 48 mentions chips, reaction hearts that float up in a loop, rotating orbit, entrance timeline, gradient "Meta-Focused" headline (WCAG-safe stops), CTA "Boost My Socials"
  - **SocialUnique** — "Unmatched Meta and Social Media Excellence", 47% count-up, WP paragraph, stats showcase (60% donut "Increase In Per Day Sales" + dark "Record Sales In One Season" bar card), CTA "Start Your Social Success"
  - **SocialTabs** — 5-tab component (Content Creation / Community Management / Influencer Marketing / Analytics and Reporting / Social Media Strategies) with exact WP per-tab content; "Get Your Free Consultation" → LeadConnector booking widget (new tab), other CTAs → contact
  - **SocialGrowth** — "Your Social Media Growth Catalyst" (2024/63.8%/5.22B copy), animated Social Performance dashboard, chips 193% Orders (Nishat USA) / 57% Daily Sales (Noor By Sadia)
  - **SocialAdvantage** — "The Art of Doing the Bare Minimum" vs "Take Your Social Media Seriously" lists (exact WP copy)
  - **SocialProcess** — Strategize/Execute/Grow gradient-path draw; **SocialProjects** — Luxury Pret Wear / Fashion & Apparel / Heritage Fashion Ecommerce → `/portfolio`
  - **SocialTestimonials** — Swiper with the 4 WP quotes (Flora B., Carlos S., Mike T., Jason G.), titles + 4.8/5; **SocialFaq** — 12 exact WP Q&As
  - Verified via tsc/eslint/build (static) + rendered-HTML content checks + a 15-agent adversarial review workflow; all 10 confirmed findings fixed (see 2026-08-19 changelog)
- [x] **Branded under-construction 404 (2026-08-19)** — `src/app/not-found.tsx` + `src/components/layout/UnderConstruction.tsx`: covers every not-yet-built route with a "This page is under construction" screen (animated 75% progress bar, morphing blob with spinning cog + tapping hammer, Work-in-progress/Launching-soon chips, Back to Home + Contact Us CTAs). Returns real 404 status; replaced automatically as each page ships.
- [ ] Performance Marketing page (`/performance-marketing`) — **next up; awaiting WP screenshots + tab/FAQ/testimonial HTML from user**
- [x] **SEO Services page (`/seo-services`) — done (2026-08-19)** (`src/app/seo-services/page.tsx` + `src/components/seo/*`), built from WP screenshots then refined section-by-section:
  - **SeoHero** — "Elevate rankings with Adex360 SEO", GSAP entrance timeline (blob morph loop, 75% donut draw, floating Rank-#1/Organic-Growth chips, rocket badge)
  - **SeoUnique** ("Not The Only SEO Company, Just The Best!") — 70% count-up + `SeoUniqueStats` (clone of the home stats showcase: 45% orange donut, dark NEW TRAFFIC bar-chart card, 4.9/5 badge)
  - **SeoLocal** — interactive 6-tab section (Local/Technical/On-Page SEO, SEO Strategy, Keyword Analysis, SEO Audit) matching the home SeoStrategies design: per-tab WP content + CTAs, random shape-morph blob, blue active chevron. "Get Your Free Consultation" CTAs open the LeadConnector booking widget (new tab)
  - **SeoGrowth** — premium animated dashboard (self-drawing gradient growth chart, 12.5% CVR pill, 200X/6.81x stat footer, bobbing Engine/Chief Apparel chips, rotating orbit)
  - **SeoScoreCta** — dark gradient band with drifting aurora glows, masked dot grid, pulsing rocket badge, floating 92/100 score chip, split URL/email inputs + gold Check button, trust microcopy, animated success state (API pending Phase 5)
  - **SeoAdvantage** — Typical Agency vs Adex360 comparison, gradient-outlined Top Rated card, list rows cascade in
  - **SeoProcess** — 3-step gradient-path draw (Strategizing/Implementation/Refinement)
  - **SeoProjects** — 3 featured cards + banner linking to **`/portfolio`** (page pending — user will provide details)
  - **SeoTestimonials** — Swiper carousel identical to home (3/2/1 slides, gradient outlines, gutter arrows on mobile) with the 4 real WP quotes: Sara Kahlo, Maroof H Sabriel, Faulkner W., Jade P.
  - **SeoFaq** — 15-question accordion with the exact WP answers (multi-line answers preserved), staggered item reveals
  - Own metadata; mobile-first; Brands carousel + Clutch strip reused. Pending: real illustrations (blob+icon placeholders), project thumbnails, FAQPage JSON-LD (Phase 5)
- [ ] Web & App Development pages (`/web-development`, `/shopify-app-development`)
- [ ] Custom Solutions page (`/crm-integration`)
- [ ] Company pages (`/about-us`, `/faqs`, `/case-studies`)
- [x] Contact Us page (`/contact-us`) — form UI complete (`src/app/contact-us/page.tsx` + `src/components/contact/ContactForm.tsx`): React Hook Form with validation (Full Name*, Email*, Phone, 6 service checkboxes, Website/Social URL*, message), honeypot spam field, contact info column (hotline/location/email), Clutch strip, mobile-first. GSAP: field groups stagger in on scroll, success card springs in on submit, form card parallax. **API route + email delivery still pending (Phase 5)** — submissions currently show the thank-you state without sending.
- [ ] **Portfolio page (`/portfolio`) — pending user content.** The SEO page's "View All Projects" banner already points here; nav/footer still link to `/case-studies` until the user confirms the portfolio page replaces it.

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
0. **Commit + push the uncommitted batch** (contact page, SEO page, social page, animation upgrades, 404 page).
1. **Remaining service pages** — `/performance-marketing`, `/web-development`, `/shopify-app-development`, `/crm-integration`. Reuse the SEO/Social Media pages as the template (hero, tabs/feature sections, process path, testimonials, FAQ). Blocked on user input per page: WP screenshots + inspector HTML for tabs/testimonials/FAQ + CTA link targets.
2. **Portfolio page (`/portfolio`)** — waiting on content/details from the user; then decide whether it replaces `/case-studies` in nav + footer.
3. **Company pages** — About Us, FAQ's.
4. **Remaining assets** — service-tab illustrations, project thumbnails, blog covers, Clutch embed code; drop into `public/images/` and swap in.
5. **Phase 4 blog backend** — after static pages are done; needs the DB/CMS decision from Phase 1.
6. **Phase 5 wiring** — contact form + SEO-score API routes with email delivery, per-page JSON-LD, sitemap/robots.

## Engineering Notes (read before touching animations)
- **Never put CSS `transition-all` (or any transition covering `opacity`/`transform`) on an element GSAP animates** — the transition fights GSAP's per-frame writes and elements get stuck invisible. `ScrollFx.tsx` suspends transitions during tweens and restores them via `clearProps`; custom-animated sections (Workflow, Team, DrivingGrowth) follow the same suspend/clearProps pattern manually.
- `ScrollFx` API: `data-reveal="up|left|right|scale|fade"`, `data-reveal-group` (+ `data-stagger`), `data-reveal-delay`, `data-counter` + `data-counter-suffix`, `data-parallax="N"` (scroll-scrubbed ±N% yPercent drift; avoid on elements with CSS hover transforms). Sections with bespoke GSAP timelines (Hero, DrivingGrowth, Workflow, Team, SeoStrategies tab-switches, StatsShowcase charts, SeoHero, SeoGrowth, SeoScoreCta) manage their own animation and mostly bypass `data-reveal`.
- **Hero blob shape cycling (standard for all service pages):** hero gradient blobs auto-morph to a fresh random CSS shape family (blob/arch/diamond/parallelogram/egg/leaf/squircle) every 3s — shared makers live in `src/lib/blobShapes.ts` (`pickShape`), pattern reference `SeoHero.tsx` (recursive `gsap.delayedCall(3, …)`, elastic ease, icon counter-transform). The tab components use the same lib for on-click morphs.
- **Reveals are reversible:** ScrollFx reveals and the bespoke section timelines use play-on-enter / reverse-on-leave-back (`toggleActions: "play none none reverse"` or explicit `onLeaveBack`), so sections replay when scrolled back into view. CSS transitions are re-suspended before reversing. Counters intentionally stay one-shot; parallax is inherently bidirectional.
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
- **2026-08-19:** Contact Us page built (form UI + info column). SEO Services page built from WP screenshots (12 sections, own metadata, static prerender).
- **2026-08-19:** SEO Services refinement pass: services block rebuilt as interactive 6-tab component (WP per-tab content, shape-morph blob, booking-widget CTAs); Unique stats rebuilt to match the home stats showcase (45% donut + NEW TRAFFIC dark card); Growth section rebuilt as animated dashboard (self-drawing gradient chart, floating client chips); Score CTA band redesigned (aurora glows, masked dot grid, score chip, split inputs); testimonials rebuilt as the home Swiper carousel with the 4 real WP quotes (names corrected: Faulkner W., Jade P.); FAQ answers replaced with exact WP content; projects banner slug changed to `/portfolio`. Carousel arrow borders fixed site-wide (`border-black/10` → visible `#B6BEDB`).
- **2026-08-20:** SEO hero blob upgraded from radius-yoyo to 3s random shape cycling (blob/arch/diamond/parallelogram/egg/leaf/squircle, elastic morph + icon counter-transform). Shape makers extracted to shared `src/lib/blobShapes.ts`; SeoStrategies/SeoLocal/SocialTabs deduplicated to use it. Saved as the standard for all future service-page heroes (memory + Engineering Notes).
- **2026-08-19:** Branded under-construction 404 page added (`not-found.tsx` + `UnderConstruction.tsx`) — all unbuilt routes now show an animated "under construction" screen with proper 404 status.
- **2026-08-19:** Social Media Management page built (12 sections, static prerender). Adversarial multi-agent review ran over the new page; 10 confirmed findings fixed across the codebase: chip float loops switched to yPercent so they can't fight scroll-gated entrance tweens (Social/SeoGrowth — real visual bug — plus Social/SeoHero hardening); FAQ accordions got h3 question headings + aria-hidden collapsed panels + aria-controls (Social+Seo); testimonial star rows got sr-only rating text and carousels now stop autoplay under prefers-reduced-motion and on keyboard focus (all 3 + BrandsMarquee); decorative hero/dashboard visuals aria-hidden (Social/Seo heroes + growth, ScoreCta chips); service-tab buttons use aria-current + aria-controls instead of aria-pressed (all 3 pages); contrast fixes ("Consistent growth" pill text → #995607 in 3 stats showcases; social hero gradient darkened).
- **2026-08-19:** Site-wide GSAP pass. Migration plan §3 updated: GSAP + ScrollTrigger is the official animation stack (Framer Motion dropped). Gaps filled: contact-form field stagger + success spring, FAQ item stagger, SeoHero entrance timeline, SeoAdvantage list cascades, footer column reveals. New `data-parallax` scrub attribute in ScrollFx, applied across all 3 pages (glows, illustrations, card grids, comparison cards at different depths). All scroll reveals + bespoke timelines made reversible: play on scroll-down, reverse on scroll-up, replay on re-entry (counters stay one-shot).
