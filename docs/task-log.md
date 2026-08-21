# Task Log

A running, chronological record of individual tasks completed on this project — updated
immediately after finishing each one. This is a lower-level companion to
[progress.md](./progress.md): progress.md tracks phase/feature status, this file tracks the
raw sequence of "what was asked → what was done" so nothing is lost even if a chat session or
Claude account is switched. Newest entries at the bottom.

---

### 2026-08-20 — Mobile menu rebuilt as a right-to-left drawer
Replaced the old top-accordion mobile panel (`Header.tsx`) with a right-to-left slide-in drawer
based on a reference screenshot: search bar, icon-tile nav rows, expandable categories with an
inline caption card, "Start a Project" CTA, phone/email chips. Fixed a real bug where the drawer
was rendering inside the header's `backdrop-blur` containing block (CSS `backdrop-filter`
creates a containing block for `position: fixed` descendants), collapsing it to the header's
~80px height — moved the drawer/backdrop to be siblings of `<header>` instead of children.

### 2026-08-20 — Mobile drawer premium polish pass
Reworked icon tiles to soft blue-gradient badges with hover scale/glow, added a shine-sweep to
the CTA button, glow orbs on the category caption card, pill-shaped contact chips, focus ring on
the search bar, and a bottom fade mask on the scrollable nav list.

### 2026-08-20 — Removed placeholder Clutch and Blog content
Deleted the Hero's custom "Reviewed On Clutch" badge, the "As Featured On" `ClutchStrip`
component (removed from all 5 live pages), and the Home page's placeholder "Our Latest Media"
blog section (`Blog.tsx`). All were fake/placeholder content the user asked to take down rather
than leave live; they return once real backing content exists (Clutch embed code, Phase 4 blog
backend).

### 2026-08-20 — Contact Us info column redesigned
Rebuilt the left column of `/contact-us` to match a reference layout: "Talk To Us" (UK + PK
hotline cards) → Email card → "Our Offices" (UK/US/Pakistan, previously only UK was listed).
Replaced flag emoji (render as raw "GB"/"US"/"PK" text on Windows) with hand-built inline SVG
flags. Fixed phone numbers being cut off with an ellipsis (moved the 2-up breakpoint from `xs`
to `sm`, swapped `truncate` for `break-words`).

### 2026-08-20 — SEO-score form email delivery: options presented, not yet built
User asked for the "Free SEO Audit" form to email `munib.ahmad@adex360.com` on submit. No
backend existed (form only toggled a local UI state). Presented three real paths — Resend, SMTP
via the existing mailbox, GoHighLevel webhook — with tradeoffs. **Awaiting the user's choice**
before writing the API route.

### 2026-08-20 — docs/progress.md updated
Synced progress.md's TL;DR, Phase 2/3/5 entries, "What's Next", and Change Log with everything
above.

### 2026-08-20 — This file created
User asked for a standing memory/log file updated after every completed task, as a durable
record independent of any single chat session or Claude account. See the `task-log-file`
memory entry for the standing instruction to keep updating this file going forward.

### 2026-08-20 — Contact Us info column layout fixes
Stacked the UK/PK hotline cards + email card into a single vertical column (was a 2-up grid on
`sm:` and up). Left-aligned the "Our Offices" divider heading on desktop by hiding its leading
line at `sm:` and up, while keeping the centered flanked-line look on mobile.

### 2026-08-20 — "Wellew Home" typo fixed + projects asset folder created
Corrected the Home page's project card name from "Wellew Home" to "Weltew Home"
(`src/components/home/Projects.tsx`). Created `public/images/projects/` for the user to drop
real project thumbnails into — Home/SEO/Social/Performance project grids all still use solid
gradient-with-name-text placeholders pending real screenshots.

### 2026-08-20 — Real project screenshots wired into the Home page project cards
User dropped 4 screenshots into `public/images/projects/` (renamed to kebab-case for URL
safety: `butterfly.png`, `nishat-uae.png`, `logo-official.png`, `weltew-home.png`, all
1920x911). `src/components/home/Projects.tsx` now renders them via `next/image` (`fill`,
`object-cover object-top`) instead of the solid-gradient-with-name-text placeholder; the
gradient/text overlay was removed as requested, the info footer (name/service/category pill)
below each image stays. **Only the Home page grid was updated** — SEO/Social/Performance project
grids still use the placeholder pattern pending their own screenshots.

### 2026-08-20 — Web Development page built (`/web-development`)
Built the 4th service page from full-page screenshots (mobile+desktop), 6 zoomed tab-panel
screenshots, testimonial swiper HTML (4 unique quotes after dedup), and FAQ accordion HTML (13
Q&As) — same recipe as SEO/Social/Performance. New `src/components/webdev/*` (10 components:
Hero, Unique + UniqueStats, Tabs, Growth, Advantage, Process, Projects, Testimonials, Faq) +
`src/app/web-development/page.tsx`. Notable calls: kept the site's established dark-gradient
hero-blob-cycling design (not the WP source's literal light hero) for cross-page consistency,
per the same "design freedom, stay consistent with what's already shipped" precedent as the
Performance page; "Why Our Code Wins" section (`WebDevGrowth.tsx`) uses an icon composition
instead of a raster illustration since no image asset was provided, in a teal accent (matching
the source screenshot's color) rather than the usual brand orange/blue; all service-tab and
section CTAs point to `/contact-us` (no explicit CTA targets were given, so defaulted to the
established sitewide pattern); "Our Web Success Stories" banner → `/portfolio`. Verified via
tsc/eslint/`next build` (new static route alongside the other 4) + a rendered-HTML content
smoke test covering all 6 tab labels, every section heading, and both the first and last FAQ
question.

### 2026-08-20 — Shopify App Development page built (`/shopify-app-development`)
Built the 5th service page from full-page screenshots (mobile+desktop), 6 zoomed tab-panel
screenshots, testimonial swiper HTML (6 unique quotes after dedup), and FAQ accordion HTML (15
Q&As). New `src/components/shopify/*` (10 components: Hero, Unique + UniqueStats, Tabs, Growth,
Advantage, Process, Projects, Testimonials, Faq) + `src/app/shopify-app-development/page.tsx`.
Notable: the user gave explicit slugs for the "Apps We Developed" project cards — Universal
Product Feed → `/universal-product-feed`, PushBot → `/pushbot`, Mailbot → `/mailbot` — so those
3 cards are real `Link`s to those routes even though the pages don't exist yet; visiting them
now resolves to the site's branded under-construction page automatically until they're built.
Testimonial source HTML had no separate "role" field this time (just a company/person name), so
the card layout was simplified — name as the heading, no avatar/role footer, unlike the other
4 testimonial components. Growth section ("Why Our Shopify Apps Stand Out") reused the
WebDevGrowth icon-composition pattern but in blue/violet instead of teal, matching this page's
source color scheme. All tab/section CTAs default to `/contact-us` (no explicit targets given).
Verified via tsc/eslint/`next build` (6th static route) + a rendered-HTML smoke test covering
all 6 tab labels, all 3 app names + their slugs, and first/last FAQ questions.

### 2026-08-20 — Real app icons wired into the Shopify Projects cards
User dropped 3 icon images into `public/images/apps/` (renamed from Canva export names to
`universal-product-feed.png`, `pushbot.png`, `mailbot.png`, all 800x600). `ShopifyProjects.tsx`
now renders them via `next/image` instead of the lucide-icon/letter placeholders. Universal
Product Feed and PushBot are icon-on-white-background exports, so they render `object-contain`
with padding inside their existing colored gradient tile; Mailbot's export already has its own
full-bleed purple background baked in, so it renders `object-cover` with no extra tile behind
it (avoiding a double-background look).

### 2026-08-20 — CRM Integration page built (`/crm-integration`)
Built the 6th and final originally-planned service page from full-page screenshots
(mobile+desktop), 5 zoomed tab-panel screenshots, testimonial swiper HTML, and FAQ accordion
HTML (11 Q&As). New `src/components/crm/*` (9 components: Hero, Unique + UniqueStats, Tabs,
Growth, Advantage, Process, Testimonials, Faq — no Projects component this time) +
`src/app/crm-integration/page.tsx`. Notable: this source page has **5 tabs, not 6** (Lead
Nurturing / Pipeline Management / Marketing Automation / Appointment Scheduling / Reputation
Management), and **has no "Previous Projects" section at all** — confirmed by reading the full
screenshot flow start to finish before building, so no placeholder/invented project cards were
added where the source genuinely has none. Testimonial HTML was identical (same 4 quotes,
same duplicate-heavy swiper markup) to the Web Development page's testimonials, so
`CrmTestimonials.tsx` reuses that exact content. Growth section ("Adex360: Powering Smarter CRM
Solutions") uses an orange-to-violet gradient icon composition, matching this page's funnel/
coins illustration colors. Hero has no percentage-arc stat chip (unlike every other service
page hero) — the source screenshot only shows a floating "CRM / Automated" icon card, so the
hero was built to match rather than inventing a stat that wasn't there. Verified via
tsc/eslint/`next build` (7th static route) + a rendered-HTML smoke test covering all 5 tab
labels, every section heading (including both halves of the gradient-split "Smarter CRM
Solutions" heading, which straddles a nested `<span>` and had to be checked as two separate
substrings), and first/last FAQ questions.

### 2026-08-20 — Universal Product Feed page built (`/universal-product-feed`)
Built the 1st of the 3 individual Shopify app pages from a full-page screenshot + the raw WP
article HTML (Elementor text-editor widget: Overview, Development Goals & Objectives, Key
Features & Technologies Used, Challenges & Solutions with 3 problem/solution pairs, Results &
Impact, Final Thoughts). Unlike every service page built so far, the source has no hero stat
chip, tabs, testimonials, or FAQ — it's a plain content article, not a designed marketing page —
so instead of the usual 8-10-component-per-page pattern, built one reusable template:
`src/components/apps/AppCaseStudy.tsx` (dark gradient hero with an app icon + eyebrow + CTA,
bulleted Goals/Features/Results sections with check-icon list items and bold lead-in labels,
a "Challenges & Solutions" card list, closing dark CTA band), driven by a typed
`AppCaseStudyContent` object. Content lives in its own `universalProductFeed.content.ts` file so
`/pushbot` and `/mailbot` can reuse the same template with their own content files. Hit and fixed
a real Next.js constraint: the content file originally imported the lucide icon component
directly and passed it as a prop from the (Server Component) page into the ("use client")
template — Next.js rejects passing functions/components across that boundary. Fixed by passing
the icon as a string key (`"Rss"`) and resolving it to a component inside the client template via
a local icon map. Verified via tsc/eslint/`next build` (new static route, 9th total) + a rendered-
HTML content smoke test (title, first challenge heading, Final Thoughts, CTA label all confirmed
present). `/pushbot` and `/mailbot` still block on the user's content for those two apps.

### 2026-08-20 — Pushbot page built (`/pushbot`)
Built the 2nd of the 3 individual Shopify app pages from a full-page screenshot + the raw WP
article HTML — same Overview/Goals/Features/Challenges/Results/Final Thoughts shape as Universal
Product Feed. Reused the `AppCaseStudy` template as-is with a new content file
(`pushbot.content.ts`); the only template change needed was adding a `Bell` icon to
`AppCaseStudy.tsx`'s icon-key map (Universal Product Feed used `Rss`, Pushbot uses `Bell` for its
notification theme, hero gradient shifted to violet/blue to visually differentiate the two app
pages). Verified via tsc/eslint/`next build` (new static route, 10th total) + a rendered-HTML
content smoke test (title, first challenge heading, Final Thoughts, CTA label all confirmed
present). `/mailbot` is the only individual Shopify app page still pending user content.

### 2026-08-20 — Mailbot page built (`/mailbot`)
Built the 3rd and last of the individual Shopify app pages from a full-page screenshot + the raw
WP article HTML — same Overview/Goals/Features/Challenges/Results/Final Thoughts shape as
Universal Product Feed and Pushbot. Reused the `AppCaseStudy` template as-is with a new content
file (`mailbot.content.ts`); no template changes needed this time since the existing `Mail` icon
key already fit — gave it a pink-to-violet gradient to visually distinguish it from Pushbot's
violet-blue and Universal Product Feed's blue. Verified via tsc/eslint/`next build` (new static
route, 12th total) + a rendered-HTML content smoke test (title, first challenge heading, Final
Thoughts, CTA label all confirmed present). **All 3 individual Shopify app pages are now built**
— the "Apps We Developed" cards on `/shopify-app-development` all link to real, finished pages
instead of the under-construction fallback.

### 2026-08-20 — About Us page built (`/about-us`)
Built from full-page screenshots (mobile+desktop) + the raw WP Elementor HTML, with an explicit
instruction to leave out the Clutch review-widget row at the bottom of the source page (consistent
with the sitewide Clutch cleanup done earlier this phase). Recognized that two sections were
byte-for-byte identical in content to existing Home page components and reused them directly
instead of rebuilding: `Team` (same 4 real team members — Zain Hameed, Umer Shoukat, Ali Lakhani,
Sheharyar Ahmed — same photos, same LinkedIn links) and `BrandsMarquee` (same "Brands Impacted /
2000+ Satisfied Worldwide Clients" copy; the 4 logos this page's own carousel highlighted — Kiko,
Rang-Ja, Bata, Generation — are already part of the existing 16-logo `public/brands/` set used by
the shared component, so no new logo assets were needed). Built 5 new components for the
page-specific sections: `AboutHero` (dark "Adex Story" card + 2000+/150+ count-up chips —
the source's real office photo had no uploaded asset, so an icon composition was used instead,
same fallback approach as WebDevGrowth/ShopifyGrowth when no raster illustration is provided),
`AboutWhatWeDo` (75% count-up stat, "Grow With Us" CTA → `/contact-us`), `AboutPerfectFit`
(Growth Rate/Active Clients list + 90% circular progress chip), `AboutTestimonials` (same 4 WP
quotes as Web Development/CRM — identical source markup, so content was copied rather than
re-derived), `AboutProjects` (3 icon-illustration project cards + "Adex Proud Projects!" banner
→ `/portfolio`). Verified via tsc/eslint/`next build` (new static route, 13th total) + a
rendered-HTML content smoke test covering every section heading and the team member name — and
confirmed the string "Clutch" does not appear anywhere in the rendered page.

### 2026-08-20 — FAQ's page built (`/faqs`)
Built from full-page screenshots (mobile+desktop) + the raw WP page HTML — the second and last
company page. The source HTML contained two separate accordion widgets: a legacy one marked
`elementor-hidden-desktop/tablet/mobile` (hidden at every breakpoint, holding leftover
Lorem-ipsum/theme-demo Q&As like "How much does data analytics costs?") and the real visible
`n-accordion` widget with 10 genuine Adex360 Q&As matching the screenshots. Correctly identified
the hidden one as dead markup and built only from the real 10 questions — building from the
wrong accordion would have shipped nonsense placeholder content. `FaqHero` (simple centered
"FAQ's" heading, kept close to the source's minimal design), `FaqAccordion` (single-open
accordion, same interaction pattern as the service pages' FAQs; several answers link to real
internal routes the WP source referenced — `/seo-services`, `/performance-marketing`,
`/social-media-management`, `/web-development` — wired as real `next/link`s), `FaqHelp`
("Still need help?" gradient CTA band → `/contact-us`; the source's filler paragraph was
WP theme-demo boilerplate text, not real brand copy, so it was rewritten with a genuine sentence
instead of carried over verbatim). No Clutch content was present in this page's source, so
nothing needed to be excluded. Verified via tsc/eslint/`next build` (new static route, 14th
total) + a rendered-HTML content smoke test (all 10 questions, the CTA, and all 4 internal
FAQ-answer links confirmed present). **Portfolio (`/portfolio`) is now the only page left to
close out Phase 3**, blocked on the user's content.

### 2026-08-20 — "Case Studies" nav links repointed to Portfolio
User confirmed (via a screenshot of the header's "Company" dropdown, showing "Case Studies")
that `/portfolio` is meant to fully replace the never-built Case Studies page — not exist
alongside it. Updated the 2 hardcoded references: the "Company" dropdown item in `src/lib/nav.ts`
and the footer's "Case Studies" link in `Footer.tsx`, both now pointing to `/portfolio` instead
of `/case-studies`. Confirmed no `/case-studies` string remains anywhere in `src/`. Every "View
All Projects" banner across the service pages already pointed to `/portfolio`, so the site is now
fully consistent — all Case-Studies-labeled links resolve to the same future Portfolio page,
currently showing the under-construction fallback until it's built.

### 2026-08-21 — Portfolio page built (`/portfolio`)
Built from full-page screenshots (mobile+desktop) + the `digaluprojects` widget HTML listing all
16 real projects with their real WordPress slugs. Confirmed with the user beforehand that the
Clutch achievement-badges row visible at the bottom of the screenshot should be excluded, same
as every other Clutch section removed this phase — this one looked like a genuine award strip
rather than the earlier fake review widget, so it was worth double-checking rather than assuming.
`PortfolioHero` adds a small "Our Work / Portfolio" heading that the WP source doesn't actually
have (the screenshots show the project grid starting directly under the nav) — added deliberately
for on-page SEO/UX consistency with every other interior page, flagged rather than silently
introduced. `PortfolioGrid` renders all 16 cards as real `Link`s to their source slugs: 3 already
resolve to real pages built earlier this phase (`/universal-product-feed`, `/mailbot`,
`/pushbot`), the other 13 (`/eu`, `/beoneshopone`, `/ak-galleria`, `/butterfly`,
`/logo-official`, `/weltew-home`, `/ecs`, `/nishat-usa`, `/nishat-uae`, `/one`, `/beechtree`,
`/seona`, `/kiko-milano`) don't have case-study pages yet and currently resolve to the
under-construction fallback — building those out is a separate, not-yet-scoped follow-up.
Cards use category-coded icon/gradient placeholders (one style per service line) since no real
thumbnails were provided for this page specifically; the user offered to share local XAMPP
screenshot URLs so they can be fetched directly with `curl` (confirmed this works since Bash/
PowerShell run directly on the user's machine, not a remote sandbox) once sent. Verified via
tsc/eslint/`next build` (new static route, 15th total) + a rendered-HTML content smoke test (all
16 project names and their href slugs confirmed present, zero "Clutch" leakage). **This closes
out every page originally scoped for Phase 3** — remaining work is the 13 case-study pages (new
scope, not yet defined) and real image assets, not new top-level pages.

### 2026-08-21 — Real images wired into all 16 Portfolio cards
User asked to pull the actual images out of the `digaluprojects` HTML they'd already sent (real
`adex360.com/wp-content/uploads/...` URLs) rather than wait on local XAMPP screenshots. Confirmed
this session's Bash/PowerShell tools run directly on the user's machine, so `curl` could fetch the
live production URLs directly — downloaded all 14 unique files (two source URLs are reused across
2 cards each: `One.png` for both "D2C Western Clothing" and "Urban Fashion & Lifestyle Retail",
`nishat.png` for both "Luxury Pret Wear" and "D2C Fashion") into `public/images/portfolio/`,
verified none came back as tiny error-page stand-ins before wiring them in. Rewrote
`PortfolioGrid.tsx` to replace every category-coded icon/gradient placeholder with a real
`next/image` (`fill`, `object-cover`, hover scale + gradient overlay + external-link icon on
hover), same visual treatment as the Home page's project grid. Verified via tsc/eslint/
`next build` (still 15 static routes, no new route needed) + a rendered-HTML smoke test
confirming every card renders a real `next/image` srcset (not a broken/missing source) and
manually fetched one resized variant through the dev server to confirm it decodes as a valid
image, not an error page. **The Portfolio page's asset work is now fully done** — only the 13
individual case-study pages remain as unscoped follow-up work.

### 2026-08-21 — Real images + case-study links wired into 4 service pages' Projects sections
User pointed out (via a screenshot of SEO Services' "Our Featured Projects" section) that this
solid-gradient-with-name-text placeholder pattern likely also existed on other service pages,
and asked what was needed to fix it. Checked `SeoProjects.tsx`, `SocialProjects.tsx`,
`PerformanceProjects.tsx`, and `WebDevProjects.tsx` — all 4 use the same placeholder pattern, and
all 12 project names across them turned out to be exact-string matches for projects already on
the Portfolio grid built the day before (D2C Western Clothing, Health & Personal Care, D2C
Fashion, Luxury Pret Wear, Fashion & Apparel, Heritage Fashion Ecommerce, Footwear Retail, Urban
Fashion & Lifestyle Retail, Skin Care & Makeup, Premium Footwear, Fashion Retail, B2C Home Décor).
So nothing further was needed from the user — reused the same `public/images/portfolio/*.png`
files already downloaded, and additionally wrapped each card in a `Link` to its real case-study
slug (was previously a static, unlinked div) to match the Portfolio grid's interaction pattern.
Verified via tsc/eslint/`next build` (still 15 static routes, no new pages) + a rendered-HTML
smoke test on all 4 pages confirming real `next/image` srcsets and all 4 sampled case-study links
present. **Also strengthened the standing `task-log-file` memory**: the user explicitly restated
that both `progress.md` and `task-log.md` must be kept current after every task without being
asked — including small content/asset fixes like this one, not just new page builds — so this is
now written into the memory as a firm standing rule rather than something to re-confirm.

### 2026-08-21 — Hover arrow added to service pages' project cards
User asked to match the Portfolio grid's hover-arrow treatment on the 4 service pages' project
cards just updated. Added the same gradient scrim (`bg-gradient-to-t from-black/35`) and circular
`ArrowUpRight` badge (fades in on hover, bottom-right corner) from `PortfolioGrid.tsx` to
`SeoProjects.tsx`, `SocialProjects.tsx`, `PerformanceProjects.tsx`, and `WebDevProjects.tsx` —
copied verbatim for visual consistency rather than approximated. Verified via tsc/eslint/
`next build` (still 15 static routes) + a rendered-HTML smoke test confirming the arrow icon
renders on all 3 cards across all 4 pages.

### 2026-08-21 — Arrow icon rotates on its own hover, not the whole card's
User asked for a more specific interaction: the arrow badge should sit diagonal by default, but
rotate to point straight left-to-right only while the pointer is directly over the arrow button
itself — not just whenever the card is hovered — and snap back to diagonal the moment the pointer
leaves the badge, even if it's still somewhere else on the card. A plain `group-hover:` tied to
the card's existing hover group couldn't express "hover this one small element specifically,
independent of the card," so used a nested Tailwind v4 named group instead: added `group/arrow`
to the badge `<span>` and `group-hover/arrow:rotate-[-45deg]` to the `ArrowUpRight` icon inside
it — scoped separately from the outer card's plain `group` (which still owns the image zoom and
the badge's fade-in/out). `ArrowUpRight` points diagonally by default; rotating it -45° swings it
to point straight right, giving the "diagonal → horizontal" effect asked for. Applied identically
to `PortfolioGrid.tsx` and all 4 service-page project card components. Verified via tsc/eslint/
`next build`, then went a step further than a DOM/text smoke test since this is a pure-CSS hover
effect with nothing to grep in server-rendered HTML — grepped the actual compiled production CSS
chunk and confirmed the rule exists verbatim:
`.group-hover\/arrow\:rotate-\[-45deg\]:is(:where(.group\/arrow):hover *){rotate:-45deg}`.

### 2026-08-21 — Arrow hover rotation flipped from -45deg to 45deg
User asked to flip the rotation direction added moments earlier. Swapped `rotate-[-45deg]` for
`rotate-[45deg]` on the `group-hover/arrow:` class across the same 5 files
(`PortfolioGrid.tsx`, `SeoProjects.tsx`, `SocialProjects.tsx`, `PerformanceProjects.tsx`,
`WebDevProjects.tsx`). Verified via tsc/eslint/`next build`, then confirmed in the rendered HTML
that every card's icon now carries only the `45deg` class. Noted (not a real issue): a stale
`-45deg` CSS rule lingered in a Tailwind/Turbopack build-cache chunk even after a full `.next`
wipe and rebuild — harmless, since no element in the actual markup references that class anymore,
confirmed by checking the rendered class list directly rather than trusting the CSS chunk alone.

### 2026-08-21 — BeOneShopOne case-study page built (`/beoneshopone`)
Built the 1st of the 13 individual case-study pages linked from Portfolio, from a full-page
screenshot + the WP article HTML. This content shape is meaningfully different from every page
built so far — a narrative SEO results case study (Overview → SEO Performance Growth with July/
December subsections → Content Optimization & Backlink Growth → Sales Impact → Key Takeaways →
Final Thoughts), with nested h2/h3/h4 headings and inline orange-highlighted stat callouts
(`color:#f08821` in the source) rather than the tabs/testimonials/FAQ shape of the service pages
or the fixed 5-section shape of the Shopify app pages. Rather than force this into
`AppCaseStudy`'s rigid schema, built a lighter reusable shell instead: `CaseStudyHero.tsx`
(back-to-Portfolio link, eyebrow + title, hero illustration), `CaseStudyCta.tsx` (closing "Want
results like this?" gradient CTA band — not present in the WP source, added for consistency
with every other page's closing CTA), and `Stat.tsx` (a small bold-orange inline wrapper for the
highlighted numbers). The actual article body (`BeOneShopOneArticle.tsx`) is hand-authored JSX
per page rather than a generic data-driven renderer — case-study content structures vary too
much page-to-page (this one has July/December sub-splits; others will likely differ) to force
into one fixed schema; the hero/CTA/Stat pieces are what's actually shared and reused. The hero
image was fetched directly from the user's local XAMPP URL (`http://localhost/adex360/...`) via
`curl` — confirmed this works exactly like the earlier `adex360.com` production fetches, since
Bash runs directly on the user's machine either way. Skipped the source's `elementor-hidden-*`
"Project Info" sidebar widget (permanently hidden in the markup — same pattern as the FAQ page's
hidden legacy accordion, correctly identified as dead content rather than built). Verified via
tsc/eslint/`next build` (new static route, 16th total) + a rendered-HTML content smoke test
(title, "Backlink Growth" subheading, "55%" stat, "Final Thoughts", and the closing CTA all
confirmed present). **12 individual case-study pages remain**, to be sent one at a time.

### 2026-08-21 — EU Naturals case-study page built (`/eu`) — 2nd template introduced
Built the 2nd of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. This one is a fundamentally different content shape than BeOneShopOne's narrative-article
template — a richer "brand story" layout: a dark hero that cross-links to sibling case studies
(BeOneShop/SEO, Weltew Home/Web Dev) plus a "View All Case Studies" button, a right-aligned
overview paragraph, a centered strategy quote on a dark band, a challenge/solution/result trio
next to a real product photo, an "Overall Result" stats band (38% Conversion Rate / 900% Traffic
Uplift / Sub-1s Product Page Loads), a "Services Provided" card, a "Key Teams & Expertise" dark
band, a closing CTA, and a "Related Case Studies" 2-card grid with hover-reveal quotes. Rather
than force this into the BeOneShopOne template, built a second reusable set of components under
`src/components/casestudy/brand/*` — `BrandHero`, `BrandOverview`, `StrategyQuote`,
`ChallengeSolutionResult`, `OverallResult`, `ServicesProvided`, `KeyTeams`,
`RelatedCaseStudies`. Generalized the existing `CaseStudyCta` (built for BeOneShopOne) to accept
optional heading/paragraph/CTA-label/CTA-href props instead of duplicating it, so this page
reuses it with "Let's Build What's Next" copy instead of BeOneShopOne's "Want results like this?"
default. The WP source's hero background photo had no image URL available in the provided markup
(likely an Elementor-generated CSS background not included in the pasted HTML snippet), so used a
premium gradient in its place — same honest fallback approach as every other missing-raster-asset
case this phase, flagged rather than silently invented. All 3 real images that *were* available
(the EU product tube photo, and 2 related-case-study preview images) were fetched from the user's
local XAMPP URLs via `curl`. Caught and corrected one content issue while transcribing: the WP
source's quote for the "Seona" related-case-study card actually referenced an unrelated brand
name, "AAFMAA" — a leftover copy-paste artifact from a different WP theme template, not
Adex360/Seona content — corrected to "Adex360" to match the case study the card actually links
to. Verified via tsc/eslint/`next build` (new static route, 17th total, BeOneShopOne re-verified
unaffected by the `CaseStudyCta` prop change) + a rendered-HTML content smoke test (all section
headings, all 3 stats, all 3 cross-links to `/beoneshopone`/`/seona`/`/weltew-home`, and 6 real
image srcsets confirmed present). **The site now has 2 distinct case-study templates** — future
case-study pages should be checked against both before deciding whether to reuse one or extend
further; 11 individual case-study pages remain.

### 2026-08-21 — AK Galleria case-study page built (`/ak-galleria`) — reused the AppCaseStudy template
Built the 3rd of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Unlike the previous two (which each needed a new template), this one's content shape was
an exact structural match for `AppCaseStudy.tsx` — the same template already built for the 3
Shopify app pages (Overview → Development Goals & Objectives → Technologies & Features
Implemented → Challenges & Solutions → Results & Impact → Final Thoughts) — so it was reused
directly instead of building a 3rd template. Added a `ShoppingBag` icon key to the template's
icon map (teal-to-blue gradient) and a new opt-in `showBackToPortfolio` prop, defaulted to
`false` so the 3 existing app pages render unchanged — set to `true` only here, since this page
is reached from the Portfolio grid and benefits from a way back there, unlike the app pages which
are reached from the Shopify service page. Verified the prop's default behavior by smoke-testing
both this page (link present) and Universal Product Feed (link absent) side by side. Caught and
fixed a real bug in the WP source while transcribing: a stray `<br>` had split one bullet's
text across two separate `<li>` elements ("Boosted Conversions – ...higher purchase
rate.<br>Improved Search" as one bullet, "Visibility – The SEO-friendly structure..." as the
next) — merged them back into the single intended bullet, "Improved Search Visibility – The
SEO-friendly structure helped increase organic traffic and discoverability," rather than
reproducing the broken split. Verified via tsc/eslint/`next build` (new static route, 18th
total) + a rendered-HTML content smoke test (title, the corrected merged bullet, Final Thoughts,
and the conditional back-link present here / absent on Universal Product Feed, all confirmed).
**10 individual case-study pages remain**, to be sent one at a time; the site now has 3 distinct
case-study shapes to check new ones against before building anything new.
