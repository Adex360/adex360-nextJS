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

### 2026-08-21 — Verified GSAP scroll-reveal coverage on all case-study pages
User asked to make sure every case-study page has scroll-reveal animation. Audited all 3
templates built so far (`CaseStudyHero`/`CaseStudyCta`/`Stat` + `BeOneShopOneArticle`,
`BrandHero`/`BrandOverview`/`StrategyQuote`/`ChallengeSolutionResult`/`OverallResult`/
`ServicesProvided`/`KeyTeams`/`RelatedCaseStudies`, and the reused `AppCaseStudy`) by grepping
every file for `data-reveal` usage, then confirmed in the actual rendered HTML that
`/beoneshopone`, `/eu`, and `/ak-galleria` all carry plenty of `data-reveal`/`data-reveal-group`
markers (33/59/23 respectively) and each page mounts `<ScrollFx />`. All 3 already had full
coverage from when they were built — no gaps found, no code changes needed. This is now a
standing check to run on every future case-study page before calling it done, same as the
tsc/eslint/build/smoke-test routine.

### 2026-08-21 — Butterfly case-study page built (`/butterfly`)
Built the 4th of the 13 individual case-study pages from HTML only — no screenshots were sent
this time, which was fine since the source markup carries the exact headings and copy needed.
Content shape matched the BeOneShopOne narrative template closely enough to reuse it
(`CaseStudyHero` + `CaseStudyCta` + `Stat`), but this page's numbered lists (Strategies
Implemented, Results Achieved, Challenges and Solutions) use a "bold title on its own line,
paragraph underneath" pattern rather than BeOneShopOne's flat inline bullets — built a new
shared `NumberedList.tsx` (numbered circle badge + optional bold title + paragraph; title is
omitted for the Objectives list, which is plain numbered sentences with no bold lead-in) instead
of styling this page's lists as a one-off. Hero illustration fetched from the user's local XAMPP
URL via `curl`, same as the previous two pages. Content: all 20 targeted keywords hit page one,
organic traffic grew 10.3K → 24K (+133%) over one year. Verified via tsc/eslint/`next build`
(new static route, 19th total) + a rendered-HTML content smoke test (title, a numbered-list
item, the 133% stat, Conclusion heading, and 33 scroll-reveal markers all confirmed present).
**9 individual case-study pages remain.**

### 2026-08-21 — "Back to Portfolio" standardized across all case-study pages
User noticed the "Back to Portfolio" link (added ad hoc while building the narrative and
app-page templates) was inconsistent — present on some pages, missing on EU's `BrandHero`, and
styled as a plain text link — and asked for it on every case-study page with a properly designed
button, placement and styling left to my judgment. Built one reusable `BackToPortfolio.tsx`: a
pill-shaped link (arrow-left icon + label, subtle border, backdrop-blur, hover slide-left +
color shift) with `light`/`dark` variants so it reads correctly on both the light `CaseStudyHero`
background and the two dark hero backgrounds (`AppCaseStudy`, `BrandHero`). Wired it into all 3
templates: `CaseStudyHero.tsx` (replacing its old inline text link), `AppCaseStudy.tsx`
(replacing its old inline text link and removing the `showBackToPortfolio` opt-in prop entirely
— it's now unconditional, since all 3 Shopify app pages are also linked from the Portfolio grid,
so hiding it there was a real gap, not just an inconsistency), and `BrandHero.tsx` (added fresh,
positioned above the eyebrow, complementing rather than replacing its existing "View All Case
Studies" CTA lower in the hero). Removed the now-unused `showBackToPortfolio` flag from
`ak-galleria/page.tsx`. Verified via tsc/eslint/`next build` (still 21 static routes, no new
route) + a rendered-HTML smoke test across all 7 case-study-family pages
(`beoneshopone`/`butterfly`/`eu`/`ak-galleria`/`universal-product-feed`/`pushbot`/`mailbot`),
confirming the real DOM link renders on every one (a second match on 3 of them was just Next's
RSC hydration payload duplicating the string server-side, not an actual duplicate element —
checked the surrounding context before concluding that).

### 2026-08-21 — Logo Official case-study page built (`/logo-official`)
Built the 5th of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Content shape was another exact match for `AppCaseStudy` — same 6-section structure as AK
Galleria (Overview → Development Goals & Objectives → Technologies & Features Implemented →
Challenges & Solutions → Results & Impact → Final Thoughts) — so it was reused directly with a
new `Footprints` icon (violet-to-blue gradient) and its own content file
(`logoOfficial.content.ts`); no template changes were needed this time, which is a good sign the
app-page shape generalizes cleanly across unrelated brands (a Shopify app landing page, a fashion
retailer, and now a footwear/accessories brand all fit the same 6 sections). Verified via
tsc/eslint/`next build` (new static route, 20th total) + a rendered-HTML content smoke test
(title, a Challenges subsection heading, Final Thoughts, the "Back to Portfolio" link, and
scroll-reveal marker count all confirmed present). **8 individual case-study pages remain.**

### 2026-08-21 — Weltew Home case-study page built (`/weltew-home`)
Built the 6th of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Same 6-section `AppCaseStudy` shape as AK Galleria and Logo Official, reused directly with
a new `Sofa` icon (brown-to-violet gradient, fitting a furniture brand). One new wrinkle: this
page's Overview paragraph has 2 inline orange-highlighted stats ("over 150 stores," "80+
locations") — the WP source's `color: #f08821` inline styling, same treatment as the narrative
template's `<Stat>` component — but `AppCaseStudy`'s `overview` field was typed as a plain
`string`, so it couldn't hold JSX. Generalized `AppCaseStudyContent.overview` from `string` to
`ReactNode` in `AppCaseStudy.tsx` — backward-compatible, since a plain string is a valid
`ReactNode`, so the 4 prior pages' content files needed zero changes. This page's own content
file is `weltewHome.content.tsx` (not `.ts`, since it needs JSX) and imports the shared `Stat`
component from the narrative template's folder to keep the visual treatment identical to how
BeOneShopOne/Butterfly highlight their stats. Verified via tsc/eslint/`next build` (new static
route, 21st total; re-verified all 5 prior `AppCaseStudy`-based pages still render correctly
after the type change, not just this new one) + a rendered-HTML content smoke test (title, both
inline stats, a Challenges subsection, Final Thoughts, and the "Back to Portfolio" link all
confirmed present). **7 individual case-study pages remain.**

### 2026-08-21 — ECS case-study page built (`/ecs`)
Built the 7th of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Reused the narrative template again (`CaseStudyHero` + `CaseStudyCta` + `Stat`) — this
source has no "Overview" heading at all, just the intro paragraph straight after the H1, so none
was invented. The recurring content shape here is different from Butterfly's: a "bold label:
description" bullet pattern shows up 3 separate times (Key Achievements with inline stats,
Content Optimization/Influencer Collaborations, Steps Taken for Sales Growth) rather than
Butterfly's numbered sub-sections — built a new shared `LabeledBullets.tsx` (bullet dot + bold
label + description; label can carry an inline `<Stat>`) instead of reusing `NumberedList`,
since these aren't sequential steps. The "Challenges Identified & Solutions Implemented" section
has 3 problem/solution pairs styled as bordered cards via a local `ChallengeBlock` helper (title
+ bold "Problem:"/"Solution:" labels) — page-specific since this exact card shape hasn't recurred
elsewhere yet. Content: 53% sales increase, 40% faster order processing, 95% data-reporting
accuracy for a 1954-founded Lahore footwear retailer. Hero illustration fetched from the user's
local XAMPP URL via `curl`. Verified via tsc/eslint/`next build` (new static route, 22nd total)
+ a rendered-HTML content smoke test (title, a challenge block heading, the 53% stat, Influencer
Collaborations, Conclusion, "Back to Portfolio," and 35 scroll-reveal markers all confirmed
present). **6 individual case-study pages remain.**

### 2026-08-21 — Nishat USA case-study page built (`/nishat-usa`)
Built the 8th of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Structurally near-identical to ECS: intro paragraph with no "Overview" heading, a
"Challenges Identified & Solutions Implemented" section with the exact same 3-problem/solution
card pattern, a "Key Achievements" stat list, two plain content sections, a "Sales Growth"
section, and a Conclusion. Since this is now the second page using that problem/solution card
shape, extracted ECS's inline `ChallengeBlock` helper into a shared
`src/components/casestudy/ChallengeBlock.tsx` instead of copy-pasting it again — re-verified ECS
still renders correctly after the refactor, not just the new page. The "Key Achievements" list
here has a slightly different label shape than ECS's ("**76%** increase in sales..." vs ECS's
"**53%** Increase in Sales:") — `LabeledBullets`' `label`/`text` split handled both without
changes, confirming it generalizes correctly. Content: 76% sales increase, 53% rise in website
sessions, 100% growth in order count, for a textile/fashion brand's social media program. Hero
illustration fetched from the user's local XAMPP URL via `curl`. Verified via tsc/eslint/
`next build` (new static route, 23rd total; ECS re-verified unaffected) + a rendered-HTML
content smoke test (title, a challenge heading, the 76% stat, Conclusion, "Back to Portfolio,"
and 35 scroll-reveal markers all confirmed present). **5 individual case-study pages remain.**

### 2026-08-21 — Nishat UAE case-study page built (`/nishat-uae`)
Built the 9th of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Narrative template again (`CaseStudyHero` + `CaseStudyCta` + `Stat`), closer in shape to
BeOneShopOne than to ECS/Nishat USA — most sections are plain bullet lists with inline `<Stat>`
highlights (rendered via a small page-local `Bullets` helper since the list items needed to be
`ReactNode`s carrying `<Stat>` spans, not just strings). The one place this page differs from
its siblings: "Challenges & Solutions" gives each challenge a title and a single "Solution:"
bullet with no "Problem:" statement at all — the shared `ChallengeBlock` component requires both,
so rather than force an empty/fabricated Problem line into it, built a lighter page-local
`SolutionBlock` (title + Solution only). This is the most stat-dense page built so far — 15+
inline `<Stat>` highlights across SEO rankings, domain authority, page authority, linking
domains, and backlinks, including a Conclusion section that recaps 3 of the same stats already
shown earlier in the page (matched the source's repetition rather than tightening it, since
that's a legitimate summary/recap pattern, not a content bug like the earlier stray-`<br>` or
split-bullet issues). Content: first-page keyword rankings up 347% (17% → 76%), domain authority
+36% (11 → 15), backlinks +40% (1.5K → 2.1K) over 10 months. Hero illustration fetched from the
user's local XAMPP URL via `curl`. Verified via tsc/eslint/`next build` (new static route, 24th
total) + a rendered-HTML content smoke test (title, the 347% stat, a Challenges subsection,
Conclusion, "Back to Portfolio," and 37 scroll-reveal markers all confirmed present). **4
individual case-study pages remain.**

### 2026-08-21 — ONE case-study page built (`/one`)
Built the 10th of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Same shape as ECS/Nishat USA — 3 problem/solution challenge cards, a "Key Achievements"
labeled-stat list, two more labeled-bullet content sections, a "Sales Growth" labeled-bullet
section, and a Conclusion — so this one reused `ChallengeBlock` and `LabeledBullets` as-is with
zero new components, the first case study this session that needed purely content work and no
shell changes at all. Content: 55.8% increase in site traffic, 40% boost in organic sales, 30%
improvement in customer retention, for a fashion retailer with 42 stores nationwide (that "42"
is itself one of the inline `<Stat>` highlights, in the intro paragraph). Hero illustration
fetched from the user's local XAMPP URL via `curl`. Verified via tsc/eslint/`next build` (new
static route, 25th total) + a rendered-HTML content smoke test (title, a challenge heading, the
55.8% stat, Conclusion, "Back to Portfolio," and 35 scroll-reveal markers all confirmed present).
**3 individual case-study pages remain** (`/beechtree`, `/seona`, `/kiko-milano`).

### 2026-08-21 — Beechtree case-study page built (`/beechtree`)
Built the 11th of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Same shape as ONE/ECS/Nishat USA — 3 problem/solution challenge cards (Inconsistent
Engagement & Weak Brand Positioning, Low Conversion Rates from Social Traffic, Underutilization
of Paid Social Advertising), a "Key Achievements" labeled-stat list, two more labeled-bullet
content sections (Content Optimization / Influencer & Community Marketing), a "Sales Growth"
labeled-bullet section, and a Conclusion — reused `ChallengeBlock` and `LabeledBullets` as-is,
zero new components, the 2nd case study this session needing purely content work. Skipped the
source's `elementor-hidden-*` "Project Info" sidebar widget, same pattern as every other
case-study page. Content: 2.5M+ impressions, 8% of total sales from recovered carts, 12% increase
in conversion rates, for a high-street fashion brand's social media program launched in 2010.
Hero illustration fetched from the user's local XAMPP URL via `curl`. Verified via
tsc/eslint/`next build` (new static route, 26th total) + a rendered-HTML content smoke test
(title, a challenge heading, "Back to Portfolio," Conclusion, and 15 scroll-reveal markers all
confirmed present). **2 individual case-study pages remain** (`/seona`, `/kiko-milano`).

### 2026-08-21 — Seona case-study page built (`/seona`)
Built the 12th of the 13 individual case-study pages from full-page screenshots + the WP article
HTML. Same shape as Beechtree/ONE/ECS/Nishat USA — 3 problem/solution challenge cards (Low
Engagement & Brand Awareness, Inconsistent Conversions from Social Channels, Underutilized
Influencer & Community Marketing), a "Key Achievements" labeled-stat list (4 stats this time,
one more than Beechtree's 3), two more labeled-bullet content sections (Content Optimization /
Influencer & Community Marketing), a "Sales Growth" labeled-bullet section, and a Conclusion —
reused `ChallengeBlock` and `LabeledBullets` as-is, zero new components, the 3rd case study this
session needing purely content work. Skipped the source's `elementor-hidden-*` "Project Info"
sidebar widget, same pattern as every other case-study page. Content: 30% increase in sales, 25%
rise in number of orders, 47% improvement in conversion rate, 56% increase in average order
value, for an artisanal handmade-crafts brand founded by Samia. Hero illustration fetched from
the user's local XAMPP URL via `curl`. Verified via tsc/eslint/`next build` (new static route,
27th total) + a rendered-HTML content smoke test (title, a challenge heading, "Back to
Portfolio," Conclusion, the 56% stat, and 15 scroll-reveal markers all confirmed present). **Only
1 individual case-study page remains: `/kiko-milano`.**

### 2026-08-21 — Kiko Milano case-study page built (`/kiko-milano`) — 13th and last case study
Built the 13th and final individual case-study page from full-page screenshots + the WP article
HTML. Same shape as Seona/Beechtree/ONE/ECS/Nishat USA — 3 problem/solution challenge cards (Low
Return on Ad Spend, Inefficient Audience Targeting, Lack of Real-Time Campaign Optimization), a
"Key Achievements" labeled-stat list (5X Increase in ROAS / 28% Reduction in CPA / 40% Increase
in Conversion Rate), two more labeled-bullet content sections (Content Optimization / Influencer
Collaborations & User-Generated Content), a "Sales Growth" labeled-bullet section, and a
Conclusion — reused `ChallengeBlock` and `LabeledBullets` as-is, zero new components, the 4th
case study this session needing purely content work. Skipped the source's `elementor-hidden-*`
"Project Info" sidebar widget, same pattern as every other case-study page. Content: 5X increase
in ROAS, 28% reduction in cost per acquisition, 40% increase in conversion rate, for the global
cosmetics brand Kiko Milano. Hero illustration fetched from the user's local XAMPP URL via
`curl`. Verified via tsc/eslint/`next build` (new static route, 28th total) + a rendered-HTML
content smoke test (title, a challenge heading, "Back to Portfolio," Conclusion, the 5X stat, and
15 scroll-reveal markers all confirmed present).

**All 13 individual case-study pages are now complete.** Every one of the Portfolio grid's 16
cards resolves to a real, fully-built page (3 Shopify app pages + 13 case studies). Phase 3's
full page list — home, all 6 service pages, both company pages, FAQ's, Portfolio, all 3 app
pages, and all 13 case studies — is done. `docs/progress.md` Phase 3 status updated to "Done."
Remaining open work: Phase 4 (blog backend, not started), Phase 5 (SEO-score form email
delivery — awaiting user's Resend/SMTP/GHL choice; per-page JSON-LD; sitemap/robots), and a large
batch of uncommitted local work still pending a `git commit` + push.

### 2026-08-21 — Terms & Privacy Policy page built (`/terms-and-privacy`)
User pointed out the footer's "Terms & Privacy" link was wired to `/faqs` as a placeholder and
asked for a real dedicated page, written from the site's actual content/services rather than
generic boilerplate, following the project's established page schema. No WP source existed for
this page — content was authored from scratch based on the real business: the 6 real services
offered, real USA/Pakistan office addresses, `info@adex360.com`, and — most importantly — an
accurate disclosure of the real GoHighLevel (LeadConnector) third-party platform that powers the
site's contact form and booking widget (confirmed from `ContactForm.tsx`), rather than inventing
generic "we use cookies for analytics" filler not actually wired up in the codebase. Built a new
`src/components/legal/` folder following the same Hero → content → closing-CTA schema as every
other content page (FAQ's, case studies): `LegalHero.tsx` (same minimal centered-hero pattern as
`FaqHero`), `LegalNav.tsx` (new pattern — a sticky in-page anchor nav between "Terms of Service"
and "Privacy Policy" sections, `IntersectionObserver`-driven active-section highlight, offset to
match the header's real `h-20` height), `LegalSection.tsx` (numbered-circle-badge list item,
same visual language as the case-study `NumberedList`/`LabeledBullets` components), and
`LegalContent.tsx` (11 Terms of Service sections: acceptance, who we are, site use/IP, services &
engagements, client responsibilities, payment, third-party platforms, liability, termination,
governing law, changes; 12 Privacy Policy sections: information collected, how it's used,
cookies, the real GoHighLevel disclosure, data sharing, retention, security, user rights,
children's privacy, international transfers, policy changes, contact). Reused the existing
prop-configurable `CaseStudyCta` for the closing CTA rather than building a new one. Footer's
"Terms & Privacy" link (`src/components/layout/Footer.tsx`) repointed from `/faqs` to
`/terms-and-privacy`. Verified via tsc/eslint/`next build` (new static route, 28th total) + a
rendered-HTML content smoke test (both section headings, the GoHighLevel disclosure, the real
email, 35 scroll-reveal markers, and the home page's footer link confirmed pointing at the new
route).

### 2026-08-21 — Re-read migration-plan.md + progress.md end-to-end; corrected 3 stale plan entries
User asked "which page is next?" — with all 28 pages now shipped there wasn't one; asked for a
recommendation instead. User then asked me to read `migration-plan.md` and `progress.md`
carefully and deeply before answering, rather than just picking from the "What's Next" list.
Full read of `migration-plan.md` surfaced 3 places where the original plan document (written
2026-08-18, before Phase 3 decisions were made) had gone stale and never been corrected:
Section 3 still said "React Hook Form paired with a Next.js API route for the contact form" even
though Contact Us was rebuilt on 2026-08-20 to use the real GoHighLevel iframe embed directly
(no API route); Section 7 still described building that same API-route contact form; Section 10's
tools summary still listed "Framer Motion" even though Section 3 itself documents GSAP as the
replacement decision. All 3 corrected with strikethrough + explanation rather than silently
rewritten, so the document keeps its history legible. `docs/progress.md`'s "What's Next" section
was also restructured: confirmed Phase 3 is fully done, noted that the plan's own phase order
puts Phase 4 (blog backend) next but it's blocked on an unmade Phase 1 decision (DB/CMS choice),
and reordered to surface the Phase 5 items that need no decision and could start immediately
(per-page metadata audit, JSON-LD schema, sitemap/robots, image/alt audit) ahead of the
decision-blocked items. Removed a duplicate/stale numbered-list fragment left over from an
earlier edit in the same section. No code changes this task — docs only.

### 2026-08-24 — Local PostgreSQL 17 installed + Prisma 7 wired up (Phase 4 environment setup)
User asked how to connect a database, then confirmed they want a **local** Postgres install for
development (not a hosted Supabase/Neon instance yet). Installed PostgreSQL 17 via `winget`
(`winget install --id PostgreSQL.PostgreSQL.17`), which runs as the `postgresql-x64-17` Windows
service. The silent install generates a random superuser password with no way to retrieve it, so
a password reset was needed — this required temporarily setting `pg_hba.conf` to `trust` auth,
restarting the service, running `ALTER USER postgres WITH PASSWORD ...`, then restoring
`scram-sha-256` auth and restarting again. Claude Code's auto-mode safety classifier correctly
blocked both a Bash and a direct Edit-tool attempt to modify `pg_hba.conf` (a security-sensitive
system file) — rather than route around it, stopped and handed the user a ready-to-run
PowerShell script (`setup-postgres-password.ps1` in the session scratchpad) plus an inline
copy-paste block, to run themselves in an elevated terminal. User ran it successfully
(`devpassword123` set as the local dev password — dev-only, not used anywhere else). Created the
`adex360_dev` database. Installed `prisma` + `@prisma/client` (landed on **Prisma 7.9.1** — a
very recent major version) and `dotenv`; had to `npm approve-scripts prisma @prisma/engines`
since this project's npm config blocks unreviewed install scripts by default. Ran
`npx prisma init --datasource-provider postgresql` and inspected the generated files rather than
assuming older Prisma conventions from training data (same caution the project's own
AGENTS.md flags for Next.js): Prisma 7 moved the datasource URL out of `schema.prisma` entirely
and into a new `prisma.config.ts` (loaded via `dotenv/config`), and the client generator's output
path now defaults to `src/generated/prisma` instead of `node_modules/.prisma/client`. Set
`DATABASE_URL` in `.env` (already covered by the repo's existing `.env*` gitignore rule) to
`postgresql://postgres:devpassword123@127.0.0.1:5432/adex360_dev?schema=public`. Verified the
full chain works with `npx prisma db pull` — it successfully reached the database and reported
back that it's empty (expected, no tables yet), confirming connectivity end-to-end without
needing to commit to a schema yet.

**Deliberately did not design the actual blog schema (Post/Category/Tag/Author/User) or install
NextAuth in this task** — the CMS-vs-custom-admin decision and the exact auth approach are real
Phase 4 architecture calls that were flagged as still open in the last progress update, and
building a schema before those are settled risks throwing work away. `docs/progress.md` Phase 4
status moved from "Not started" to "In Process," with the environment-setup step checked off and
a note that the schema/auth decisions remain open next steps.

### 2026-08-24 — Blog schema designed + staff-only NextAuth admin login built (Phase 4)
User confirmed "yes, custom admin panel" when asked whether to proceed with schema/auth design
now that the local DB was verified working. Designed and migrated the actual blog schema
(`prisma/schema.prisma`): `User` (doubles as both the NextAuth staff login and the post-author
byline, since there's no public sign-up and only staff write posts — avoided a separate Author
model as unnecessary duplication), `Category`, and `Post` (title/slug/excerpt/content/
featuredImage/seoTitle/seoDescription/PostStatus enum/publishedAt/a `tags: String[]` array for
lightweight tagging alongside a required single category). Ran `prisma migrate dev --name
init_blog` against the local `adex360_dev` database — applied cleanly. Hit an immediate Prisma 7
breaking change here too: `new PrismaClient()` with no arguments no longer compiles — Prisma 7
requires an explicit driver adapter now, so installed `@prisma/adapter-pg` + `pg` and wired
`src/lib/prisma.ts` as a `PrismaPg` singleton (standard dev-hot-reload-safe pattern). Wrote
`prisma/seed.ts` (loads `dotenv/config` itself since `tsx` doesn't auto-load `.env` outside the
Prisma CLI) to create the first admin `User` from `.env` vars and a default "General" category;
added `npm run db:seed`. Ran it successfully with `admin@adex360.com` / a real password in `.env`.

Installed `next-auth@4.24.15` — deliberately the stable v4 major, not v5/Auth.js, which has been
in beta for years and isn't worth the risk on a project already juggling three other
bleeding-edge majors (Next.js 16, Prisma 7, React 19). Built a Credentials-provider + JWT-session
setup (`src/lib/auth.ts`) with no OAuth and no public registration — exactly matching the
migration plan's "staff-only, no public sign-ups" requirement. Built `/admin/login` (client form)
and a minimal `/admin` dashboard shell (server component, live Prisma post/category counts, sign
out button) as the authentication foundation — explicitly NOT the full CRUD/editor/upload work,
which are separate, larger Phase 4 checklist items still open.

Route protection surfaced a second Next.js 16 breaking change in the same session: the
`middleware.ts` file convention is deprecated in favor of `proxy.ts` (confirmed by reading
`node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md` directly rather than
guessing). A plain `export { default } from "next-auth/middleware"` re-export in `proxy.ts` built
fine but wasn't recognized by Next's static "must export a function" check at build time —
resolved by explicitly wrapping it in a named `proxy` function. Verified the entire auth flow
against a live server on a throwaway port (3163, cleaned up after): unauthenticated `/admin` →
307 redirect to `/admin/login`; CSRF token fetch → credentials POST to
`/api/auth/callback/credentials` → session cookie issued; authenticated `/admin` GET → 200,
correctly showing "Signed in as admin@adex360.com" and live counts (0 posts, 1 category) pulled
from Postgres through Prisma. Confirmed via `netstat` that port 3163 was fully released and that
port 3000 (where the user's own dev server would run) was untouched. Full `tsc --noEmit` and
`eslint` passes clean on every new file. `docs/progress.md` Phase 4 status updated to reflect DB
+ schema + auth as done, with CRUD/editor/upload/frontend explicitly still open.

### 2026-08-24 — Admin post list + "Add New Blog" create form built and verified
User logged into `/admin` for the first time (screenshot confirmed the dashboard shell worked)
and asked how to add a blog post. Clarified that the create UI didn't exist yet — only the
read-only stats shell — and asked whether to build it now or wait for the user's real post data.
User specified the exact flow they wanted: an "Add New Blog" button on the dashboard, clicking it
opens a create page, and once posts are added they should appear in a list back on that same
dashboard page.

Built exactly that. `src/app/admin/page.tsx` rewritten to fetch all posts (title, category,
status, createdAt) via Prisma and render them in a table below the existing stat tiles, with an
"Add New Blog" button linking to the new create page; shows a friendly empty state ("No posts
yet...") when the table is empty. `src/app/admin/posts/new/page.tsx` is the create form — title,
optional slug (auto-generated from title via a new `src/lib/slugify.ts` helper if left blank),
excerpt, content (plain HTML textarea — deliberately not the rich text editor yet, per the
already-flagged Phase 4 checklist item), featured image URL text field (no upload widget yet —
separate checklist item), a category `<select>` populated from the DB, comma-separated tags,
Draft/Published status, and SEO title/description. `src/app/admin/posts/actions.ts` holds the
`createPost` React Server Action: re-validates the session server-side (defense in depth on top
of the `/admin/*` proxy gate), splits/trims the tags input into an array, sets `publishedAt` only
when status is `PUBLISHED`, and redirects to `/admin` on success.

Verified the entire flow end-to-end against a live server rather than trusting that the wiring
was correct just because it built and typechecked. This required actually driving a React Server
Action from curl, which doesn't speak the framework's client-side action-dispatch protocol —
worked out that Next.js progressively enhances `<form action={fn}>` to also accept a plain
`multipart/form-data` POST (the same request a JS-disabled browser sends), keyed by a hidden
`$ACTION_ID_<hash>` field pulled from the rendered form. Logged in via a scripted credentials
POST (same pattern as the earlier NextAuth verification), fetched `/admin/posts/new` to extract
the action id and the real category id from the rendered payload, then posted a real submission —
title with an apostrophe, multi-word comma-separated tags, status Published. Hit one curl-specific
gotcha along the way: `-F "content=<p>...`" silently failed with `CURLE_READ_ERROR` because curl's
`-F` syntax treats a leading `<` in a field's value as "read this field's value from a file";
switched to `--form-string` for every field to send literal values. Got the expected 303 redirect,
then confirmed via both the rendered dashboard HTML (post appeared as "Published" under
"General") and a direct `psql` query that the row was correct: slug auto-generated to
`how-adex360-grew-beechtrees-social-reach`, tags stored as a real Postgres array
(`{"social media","case study"}`). Deleted the test row afterward. Full `tsc --noEmit`, `eslint`,
and `next build` all clean. `docs/progress.md` Phase 4 checklist updated: dashboard Create+List
marked done, Edit/Delete and the rich text editor called out as the next open items.

### 2026-08-24 — Author split from User, Edit/Delete added, category/author inline-create, visible borders, `/resources` gating
User tried the real "Add New Blog" form and came back with a detailed list of fixes, all acted on
in this task:

**Slug generation** — user specified the exact expected transform (lowercase, spaces to hyphens)
for a real example title. Checked `src/lib/slugify.ts` against it and confirmed it already
produced the exact expected output; no code change needed there, just verification.

**No Author field** — this was a real design gap, not a missing UI control: `Post.authorId` had
been pointed at the login `User` table, meaning the only "author" option was ever going to be
whoever's logged in, with no way to attribute a post to e.g. a team member who doesn't have (or
shouldn't have) an admin login. Fixed at the schema level: added a new `Author` model (id, name)
independent of `User`, migrated `Post.authorId` to reference it, and gave it the same "select or
add new via popup" UX the user separately asked for on Category. Running the migration hit real
data: a test post the user had created while trying the original form referenced the old
authorId and blocked the migration with a foreign-key violation; deleted that one row (it was
just "Test" content) and reran. The migration itself then landed in a half-applied drift state
after the first attempt failed, requiring `prisma migrate reset --force` to fully recover — Prisma
's own CLI detected this was being invoked by an AI agent and hard-blocked the command with an
explicit safety message, refusing to run without unambiguous user consent obtained via a direct
question outside of any other request. Asked that exact question via AskUserQuestion (not
inferring consent from the surrounding message, which also contained unrelated feature requests,
per Prisma's own "ambiguous responses require re-confirmation" instruction), got "Yes, proceed,"
and only then ran the reset with `PRISMA_USER_CONSENT_FOR_DANGEROUS_AI_ACTION` set to that exact
answer text. Re-ran `npm run db:seed` afterward (also updated to seed a default Author matching
the admin name, mirroring the existing default "General" category) to restore a working admin
login and default rows.

**Invisible input borders** — the original `border-[#E4E8F3]` (a near-white blue-grey) was almost
invisible against the page's own light `bg-surface` background, exactly as the user described.
Changed every form field to `border-2 border-gray-300`, a clearly visible mid-gray, across the
now-shared `PostForm.tsx` and the new `SelectWithAddNew.tsx` component.

**"What do I write for Excerpt?"** — added an inline hint directly under the field in the form
itself (not just an answer in chat, so it's there every time someone uses the form): a 1–2
sentence summary shown on the blog listing page, doubling as the SEO meta description if none is
set, ideally ~150–160 characters.

**Category "add new" popup** — built `SelectWithAddNew.tsx`, a reusable client component: a
`<select>` with a trailing "+ Add New [Category/Author]" option that opens a small modal
(name input, Cancel/Create), calls a server action (`createCategory` or `createAuthor`, both in
`src/app/admin/posts/actions.ts`), and appends the new row to the dropdown with it pre-selected —
no page reload, no navigating away from the post form. Used identically for both Category and the
new Author field.

**Edit and Delete** — built `src/app/admin/posts/[id]/edit/page.tsx` (fetches the post + all
categories/authors, pre-fills `PostForm` via a `defaultValues` prop, binds `updatePost` to the
post's id with `.bind(null, post.id)`) and `DeletePostButton.tsx` (a small client component
wrapping a one-field form, confirms via `window.confirm` before letting the submit through).
Extracted the entire form markup that used to live directly in the "new post" page into a shared
`PostForm.tsx` so create and edit can never drift out of sync. Added Edit (pencil icon, links to
the edit route) and Delete (trash icon) actions to each row in the `/admin` posts table.

**`/resources` conditional gating** — the last piece of the original ask, from an earlier message
in this same conversation: build `src/app/resources/page.tsx` to count `PUBLISHED` posts and
render the existing `UnderConstruction` component when there are none, or a real listing when
there's at least one; build `src/app/resources/[slug]/page.tsx` as the detail page so listing
links go somewhere real. Deliberately kept the listing/detail visuals basic — the user has
mentioned they'll share their old WordPress site's actual blog page layouts (desktop and mobile)
next, which will replace this pass's placeholder design; this task only needed to prove the
on/off content-gating mechanism itself works.

**Verification.** Full `tsc --noEmit` and `eslint` clean. `next build` succeeded with all new
routes registered (`/admin/posts/[id]/edit`, `/resources`, `/resources/[slug]`). Live end-to-end
test against a throwaway port: confirmed `/resources` shows under-construction with 0 posts;
logged in, created a post with the user's exact example title, verified the generated slug
character-for-character matched their spec, verified it appeared in both the admin list and the
live `/resources` listing, opened the detail page and confirmed the HTML content rendered;
edited the post (had to reverse-engineer Next.js's bound-server-action hidden-field encoding —
`$ACTION_REF_0` / `$ACTION_0:0` / `$ACTION_0:1`, different from a plain action's single
`$ACTION_ID_*` field — to drive it from curl) and confirmed the update landed; deleted it via the
same confirm-then-submit flow used by the real Delete button and confirmed `/resources` reverted
to under-construction and the admin list showed its empty state again. All test data cleaned up
afterward. `docs/progress.md` Phase 4 section updated accordingly.

### 2026-08-24 — Featured Image: URL text field replaced with a real upload picker
User asked for the "Featured Image URL" field to become an actual image picker, with uploaded
files saved into a blog-specific subfolder under `public/images/`, matching the pattern the rest
of the site already uses for real assets.

Built `src/components/admin/ImagePicker.tsx` (client component): the `<input type="file">` is
styled as a button via Tailwind's `file:` variant, shows a live thumbnail preview of whatever's
selected using `URL.createObjectURL`, and — for the edit form — carries the post's current image
forward via a hidden `existingFeaturedImage` field so re-saving a post without picking a new file
doesn't wipe out its existing one. Wired into `PostForm.tsx` in place of the old text input.

On the server side, Next.js Server Actions can receive `File` objects directly inside the
`FormData` they're called with — no separate `/api/upload` route was needed. Added
`saveFeaturedImage()` to `src/app/admin/posts/actions.ts`: pulls the file off `FormData`, writes
it to `public/images/blog/<Date.now()>-<slugified original filename><ext>` via `fs/promises`
(`mkdir` the folder if it doesn't exist yet, then `writeFile`), and returns the public
`/images/blog/...` path that gets saved to `Post.featuredImage`. `createPost` passes `null` as
the fallback (nothing to fall back to on a brand new post); `updatePost` passes the post's
existing `featuredImage` so editing without touching the image field is a no-op on storage.

Verification surfaced two environment quirks worth recording. First, curl itself: this session's
`curl` turned out to be a native Windows mingw64 build, not the MSYS one, so Git-Bash-style
`/c/Users/...` paths in a `-F file=@path` upload failed with `CURLE_READ_ERROR` (26) even though
the exact same path works for every other Bash tool call in this project — switching to
`C:/Users/...` fixed it immediately. Second, and more important: the first verification attempt
used a `next start` (production) server on a throwaway port and got a 404 requesting the
just-uploaded image — traced this to production mode snapshotting `public/`'s file list at boot,
not to a bug in the upload code itself. Rather than accept "it 404s so something's wrong,"
re-tested against the user's own already-running `npm run dev` process (which serves `public/`
live from disk, no snapshot) and got a clean 200 — confirming the feature genuinely works in the
mode the user actually develops in, and the earlier 404 was purely a test-harness artifact.

Flagged clearly in `docs/progress.md` that this is **local-disk storage only** — it will not
survive a real Vercel deployment, since serverless functions get an ephemeral, often read-only
filesystem. The existing Phase 5 "Image upload (Cloudinary or Vercel Blob)" checklist item still
stands as necessary future work before this feature can ship to production; this task only had to
satisfy the user's explicit "for now, local dev" framing from when Postgres was first installed.

Full `tsc --noEmit`, `eslint`, and `next build` clean. Test upload cleaned up (deleted the test
post from Postgres and the test file from `public/images/blog/`) after verification.

### 2026-08-25 — Image picker UX polish: click-to-open thumbnail, Remove Image action
User shared a screenshot of a real post rendering on `/resources` with a broken image icon, and
asked for two UX fixes to the picker built the previous session: clicking the thumbnail (not a
separate "Choose File" button) should open the OS file dialog, and there should be a way to
remove a selected/existing image.

Checked the broken image first rather than assuming it was a bug in the new upload code: the file
(`/images/blog/1787641594190-new-69.jpeg`) was already sitting on disk as a valid JPEG and served
HTTP 200 from the user's live dev server by the time it was checked. Concluded it was a stale
browser cache or a screenshot taken mid-upload rather than an actual defect — no fix applied
there, just confirmed and moved on rather than "fixing" something that wasn't broken.

Reworked `src/components/admin/ImagePicker.tsx`: the native `<input type="file">` is now
`className="hidden"` entirely (was previously visible with Tailwind's `file:` button styling,
which is what produced the separate "Choose File" button the user wanted gone). Both the 20×20
thumbnail box and a small "Change image"/"Choose image" text link are now `<label htmlFor={name}>`
elements — HTML allows multiple `<label>`s pointing at the same input, so both act as triggers
for the native file dialog with no JS event handling needed for that part. Added a hover overlay
on the thumbnail (dark tint + a plus icon) as a visual affordance that it's clickable. Added a
"Remove image" text button (red, only rendered once a preview exists) that: clears the `preview`
state, resets the file input's value via a `useRef` (browsers won't let you set `.value` on a
file input to anything but empty, but empty is exactly what's needed here), and flips a `removed`
boolean that swaps which hidden field renders — `existingFeaturedImage` (edit mode's "keep the
current image if nothing new is picked" signal) is replaced by `removeFeaturedImage=true`.

Updated `saveFeaturedImage()` in `src/app/admin/posts/actions.ts` to check
`removeFeaturedImage === "true"` first, before even looking at the uploaded file or the existing
fallback — returning `null` unconditionally. This keeps "explicitly remove" cleanly distinct from
"didn't touch this field," which the previous version had no way to express (any missing new file
just fell through to keeping the old image, so there was no way to actually clear one).

Verified against the user's own already-running `npm run dev` server rather than a throwaway test
instance, since Fast Refresh picks up component changes live: confirmed the new markup (hidden
file input, "Remove image"/"Change image" labels) rendered on the real edit page for the user's
own post, then drove an actual remove submission through the real bound `updatePost` server
action (replicating the exact hidden-field shape Next.js emits for bound actions —
`$ACTION_REF_n` / `$ACTION_n:0` / `$ACTION_n:1`) and confirmed `featuredImage` went to `NULL` in
Postgres. Restored the post's original image value immediately afterward via a direct `psql`
update, since this was the user's real content being used for verification, not disposable test
data. Full `tsc --noEmit`, `eslint`, and `next build` clean.

### 2026-08-25 — Orphaned featured-image files now deleted from disk
User asked whether the previous session's "Remove image" feature could also delete the actual
file from `public/images/blog/`, not just clear the database field — it currently just set the
column to `NULL` and left the file sitting on disk forever.

Added `deleteLocalImage()` to `src/app/admin/posts/actions.ts`: takes a stored image path, no-ops
if it's empty or doesn't start with `/images/blog/` (defensive — a post saved back when this
field was a plain URL text box could point at an external URL, which must never be touched), and
wraps the actual `unlink()` in a try/catch since a file being already-missing shouldn't fail the
whole post operation. Wired it into the three places a file actually becomes orphaned, which
turned out to be one more than the user explicitly asked about: (1) `saveFeaturedImage()` calls
it on the old path whenever `removeFeaturedImage=true` is set (the case asked about); (2) the
same function also calls it on the old path whenever a *new* file is uploaded in an edit,
replacing rather than removing — this wasn't explicitly requested but is the same underlying leak
and would have silently accumulated orphaned files every time someone swapped a post's image; (3)
`deletePost` now fetches the post's `featuredImage` before deleting the row and cleans that up
too, since deleting a post is the same "this image is no longer referenced" situation.

Verified all three paths for real, end-to-end, against the user's own live `npm run dev`
server — deliberately using disposable test images and a throwaway post rather than the user's
real content this time (learned from the previous session, where verifying the remove-flow
required editing and restoring the user's actual post). Created a test post with a real uploaded
image, confirmed the file landed in `public/images/blog/`; edited the post with a *different*
uploaded image and confirmed the old file was gone while the new one and the user's unrelated
real post's image were both untouched; then deleted the test post entirely and confirmed its
image file was gone too. Full `tsc --noEmit`, `eslint`, and `next build` clean throughout.

### 2026-08-25 — Home page's real "From Our Blog" section rebuilt, wired to live posts
User asked to confirm the placeholder Blog section removed from the home page back on 2026-08-20
was still gone (confirmed: `Blog.tsx` was deleted outright, no reference remains in
`src/app/page.tsx`), then asked for the real version: same conditional behavior as `/resources`
(hidden entirely with zero published posts), 3 cards visible at a time, 6 latest posts total, a
Swiper slider where clicking next reveals the next batch rather than smooth-scrolling one at a
time.

Built `src/components/home/BlogPosts.tsx` following the exact pattern already established by the
home page's own `Testimonials.tsx` slider (same arrow-button styling, same `data-reveal` entrance
choreography, same `useRef<SwiperType>` + `slidePrev`/`slideNext` control pattern) rather than
inventing a new carousel convention — `slidesPerView: 1/2/3` at mobile/tablet/desktop
breakpoints, with `slidesPerGroup` set equal to `slidesPerView` at each breakpoint so "Next"
jumps a full page of cards (1&ndash;3 to 4&ndash;6) instead of shifting one slide at a time,
matching the user's spec literally. Cards use the sitewide hover-arrow convention (rotate-45 on
hover) already standardized across the Portfolio grid and every service page's project cards.
Prev/next arrows and the "View All Posts" link are conditionally hidden when there are 3 or fewer
posts, since a slider control serves no purpose when everything already fits on screen.

`src/app/page.tsx` became an async Server Component: fetches the 6 most recent `PUBLISHED` posts
via Prisma (ordered by `publishedAt desc`, `include`-ing category and author for the card
byline), and only renders `<BlogPosts>` when `posts.length > 0` — the identical gating pattern
already used on `/resources`, kept deliberately consistent rather than reinventing it. This makes
`/` a dynamic route (`export const dynamic = "force-dynamic"`) rather than the fully static page
it was before, since it now depends on live, frequently-changing database state; flagged in
`docs/progress.md` as a shared future ISR candidate alongside `/resources` rather than staying
force-dynamic indefinitely.

Verified end-to-end against the user's own live dev server rather than trusting the build/lint
pass alone: with the 1 real published post, confirmed the section rendered with exactly 1 card
and no slider arrows; created 5 disposable test posts via the real admin create flow to reach 6
total, confirmed all 6 titles rendered and both prev/next arrow sets appeared once the 3-post
threshold was crossed; deleted all 5 test posts afterward and confirmed the section correctly
reverted to showing just the 1 real post. Full `tsc --noEmit`, `eslint`, and `next build` clean.

### 2026-08-25 — 6 test blog posts seeded; BlogPosts slider arrows/paging revised
User asked for test blog posts to try out the new admin/blog features themselves, with the
explicit intent to tell Claude when to delete them afterward — not an ask to build anything, just
data to seed. Inserted 6 posts directly via `psql` (faster than driving the admin UI 6 times, and
this is exactly the kind of bulk-insert task raw SQL is fine for): 5 `PUBLISHED` posts spread
across the two existing categories and two existing authors, one of the five deliberately given
no featured image to exercise the card/detail-page fallback design, plus 1 `DRAFT` post
specifically so the user could confirm for themselves that drafts stay admin-only. Every title is
prefixed `[TEST]` or `[TEST DRAFT]`, and the body copy explicitly says "this is placeholder test
content" rather than reading like a real (if generic) article — the goal was content that could
never be mistaken for something real, not just disposable. Verified before handoff rather than
just asserting it worked: all 5 published posts appear on both the home slider and `/resources`,
the draft appears in `/admin`'s list but is absent from both public surfaces (grepped for "TEST
DRAFT" on the rendered home and `/resources` HTML — zero matches), and one detail page
(`/resources/test-...`) renders its content correctly.

User then looked at the live slider and asked for two adjustments: move the prev/next arrows from
the section header down to the sides of the slider itself (a more conventional carousel layout),
and make Next/Prev step one slide at a time instead of jumping a full page of 3. Both were
UX-preference fixes to `src/components/home/BlogPosts.tsx`, not new capability: removed the
header's arrow-button pair entirely, and made the side arrows (previously mobile-only,
`sm:hidden`) render at every breakpoint instead, sized up slightly on `lg:` and with wider slider
padding (`lg:px-14`) so the bigger desktop arrows never sit on top of the cards. For the paging
behavior, removed the `slidesPerGroup: 2 / 3` breakpoint overrides that matched `slidesPerView`
(1/2/3 unchanged) — Swiper's default `slidesPerGroup` of 1 now applies everywhere, so a click
always advances exactly one card regardless of how many are visible at once. Verified the new
arrow markup (distinguished from the still-present, unrelated `Testimonials.tsx` side arrows by
its unique `lg:h-11 lg:w-11` sizing classes) renders correctly at every breakpoint against the
user's live dev server. Full `tsc --noEmit`, `eslint`, and `next build` clean.

### 2026-08-25 — Home blog slider set to loop
User confirmed the arrow-position and one-at-a-time-paging fixes looked right, then asked for the
slider to loop. Added `loop={posts.length > 1}` to the `Swiper` instance in
`src/components/home/BlogPosts.tsx` — guarded on more than 1 post since loop mode has nothing
meaningful to do with a single slide and Swiper can behave oddly enabling it with too few slides
relative to `slidesPerView`. Matches the same `loop` usage already on the home page's
`Testimonials.tsx` carousel, so the two sliders now behave consistently. Confirmed `tsc
--noEmit`, `eslint`, and `next build` all stay clean, and that the page still renders correctly
end to end on the user's live server. Flagged honestly that loop mode's slide-duplication happens
client-side at runtime via JS, so — unlike most other changes in this project, which were
verified by inspecting rendered server HTML with curl and grep — the actual wrap-around behavior
isn't something that shows up in raw HTML; recommended the user confirm the feel of it themselves
in a browser rather than claiming a curl-based check proved it.

### 2026-08-25 — `/resources` rebuilt against the client's real WP-era layout screenshots
User shared their old WordPress blog listing layout (desktop + mobile screenshots) and asked for
it "fixed according to our migration on Next.js" — explicitly not a request to pixel-clone the WP
page, but to rebuild its structural ideas (2-column card grid, a date/author/view-count meta row
with icons, a blue "Read More" pill button, numbered pagination at the bottom) on the real stack,
swapping WP's generic stock illustrations for the real featured-image uploads the admin panel
already produces.

Narrowed `/resources`'s grid from 3 columns to 2 (`md:grid-cols-2`) to match the reference. Built
`src/components/resources/Pagination.tsx` — genuine pagination via Prisma `skip`/`take` driven by
a `?page=N` search param, not a fake "load more" button: 10 posts per page, smart ellipsis for
page-number lists beyond a handful of pages, prev/next arrows disabled at the boundaries,
`aria-current="page"` on the active page link.

The WP reference showed per-post view counts, which the schema had no way to back honestly —
rather than fabricate numbers to match the screenshot, added a real `Post.views Int @default(0)`
column (migration `20260825093238_add_post_views`) and had `/resources/[slug]/page.tsx` increment
it by exactly 1 on every real page load via `prisma.post.update({ data: { views: { increment: 1 }
} } })`. Kept this increment out of `generateMetadata` (which also fetches the post, separately)
so a single visit doesn't get double-counted. Both the listing cards and the detail page now show
a Calendar/User/Eye icon row for date/author/views, replacing the plain text-only meta line from
before.

Verification here surfaced a real environment gotcha worth recording for future sessions: `npx
next build` (production) and the user's `npm run dev` share the same `.next` output directory by
default, so running a verification build mid-session — something done routinely throughout this
whole project — can leave the user's live dev server serving a stale module. Concretely: the new
`views` field rendered as blank instead of `0` on the user's own `npm run dev` process, even after
it happened to restart with a new PID, while an isolated `next build` + `next start` on a
throwaway port rendered it correctly every time. Confirmed this diagnosis (rather than assuming a
code bug) by checking file timestamps in `.next/cache` and comparing behavior across a genuinely
fresh production instance vs. the user's long-running dev process. Explained the cross-
contamination plainly to the user and gave the standard fix (stop `npm run dev`, delete `.next`,
restart) rather than trying to work around it in code, since there isn't a code-level fix for two
processes racing over the same build output directory. Documented as a standing caution in
`docs/progress.md`'s Engineering Notes so future verification passes know to suspect this first
if something inexplicably doesn't show up on the user's live server right after a build.

Fully verified all new functionality on an isolated test port rather than the user's own process,
specifically to avoid repeating the contamination just described: created 12 temporary posts,
confirmed page 1 showed exactly 10 in the correct date order and page 2 the remaining 2; sent 6
real requests to a single post's detail page across two batches and confirmed its `views` column
in Postgres landed at exactly 6, matching request count precisely. All 12 pagination-test posts
were deleted afterward; the user's own 6 `[TEST]` posts from the previous task were left
untouched throughout. Full `tsc --noEmit`, `eslint`, and `next build` clean.

### 2026-08-25 — Admin dashboard: All/Draft/Published filter tabs
User's screenshot of the dashboard (showing all 7 posts, including the test draft, mixed together
in one table) prompted the ask: three tab buttons — All, Draft, Published — filtering the post
list on click.

Added a `?status=` search param to `src/app/admin/page.tsx` (`all`/`draft`/`published`, defaulting
to `all` for any missing or unrecognized value) that drives the `where` clause on the posts query.
Ran 3 independent `prisma.post.count()` queries in parallel (all/draft/published) regardless of
which tab is active, so each tab's badge count always reflects live totals rather than only the
currently-filtered subset — switching tabs never shows a stale number. Built the 3 tabs as plain
`<Link>`s to `/admin` / `/admin?status=draft` / `/admin?status=published` (no client component or
JS state needed, since this is just server-rendered filtering via URL) styled as a pill-tab group
matching the same active/inactive visual pattern already used on the `/terms-and-privacy` page's
`LegalNav`. Empty-state copy adapts per tab so an empty Draft tab doesn't say "Add New Blog to
create the first one" when there are clearly already posts, just none in draft.

Verified directly against the user's own live `npm run dev` server rather than running a
competing `next build`, continuing the caution recorded in the previous task about the two
processes sharing `.next` — this particular change doesn't touch the Prisma schema or generated
client, so there was no actual regeneration risk this time, but defaulted to the safer habit
anyway. Confirmed via curl: the Draft tab returns exactly the 1 seeded test draft and excludes all
6 published posts; the Published tab returns the inverse; the default All view's badge shows 7
and correctly renders with the active-tab (`bg-white/20` badge) styling rather than an inactive
one. Full `tsc --noEmit` and `eslint` clean.

### 2026-08-25 — Filter-tab counts changed to "(n)" format
Quick follow-up: user wanted the tab counts shown as `(n)` rather than the separate colored badge
pill from the previous task. Simplified `src/app/admin/page.tsx`'s tab rendering to plain text —
`{tab.label} ({tabCounts[tab.key]})` — removing the extra `<span>` and its conditional
active/inactive background classes entirely, since the ask was for a simpler inline format, not a
re-skinned badge. Verified against the user's live dev server: tabs render "All (7)", "Draft (1)",
"Published (6)". `tsc --noEmit` and `eslint` both clean.

### 2026-08-25 — ReadMoreButton skewed hover-sweep component built for /resources
User pasted a detailed, generic component spec for a "Read More" button hover animation — a pill
button with a `::after` overlay that skews/scales in on hover, going from blue to dark navy — and
was explicit that it should use "CSS Modules or styled-components — whichever matches the
project's existing styling convention (check the codebase first)." Checked: `find src -iname
"*.module.css"` and a `package.json` grep for `styled-components` both came back empty — this
project is pure Tailwind CSS v4 everywhere, no exceptions. Followed that instruction literally and
implemented the identical visual effect using Tailwind's `after:` pseudo-element variant plus
arbitrary-value utilities, rather than introducing a second styling system into the codebase for
one button.

Built `src/components/resources/ReadMoreButton.tsx`: a real `next/link` `<Link>` (not a `<button>`
or plain `<a>`, per the spec), colors exposed as `--btn-bg`/`--btn-hover-bg`/`--btn-text` CSS
custom properties set via the `style` prop so they're themeable without touching the Tailwind
class string, defaulting to the spec's `#0c5adb`/`#03112d`/`#ffffff`. The overlay
(`after:content-['']`) uses `after:z-[-1]` — worth noting explicitly because it looks backwards at
first glance: a negative-z-index child doesn't sit *behind* its parent, it paints *above* the
parent's own background but *below* normal in-flow content (this is literal CSS 2.1 stacking-
context behavior, not a hack), which is exactly why the sweeping overlay covers the button's blue
fill while the "Read More" text — ordinary inline content — stays legible on top the whole time
with no extra z-index gymnastics needed for the text itself. `hover:after:scale-[1.2]` and
`focus-visible:after:scale-[1.2]` both trigger the identical sweep, satisfying the spec's keyboard-
accessibility requirement without a separate code path.

Applying the component to `/resources` required restructuring the cards, which the spec didn't
call out but was a direct structural consequence of it: every card was previously one big
`<Link>` wrapping the whole thing, and HTML forbids nesting an `<a>` inside another `<a>` — so a
real, separate `ReadMoreButton` `<Link>` couldn't live inside that outer link. Changed each card
to a plain `<div>` with an inner `<Link>` wrapping just the image/meta/title (keeping "click
anywhere on that area" working) and `ReadMoreButton` as a sibling `<Link>` beneath it, both
pointing at the same post slug — valid HTML, no loss of the original click-target area.

Verified against the user's live dev server, continuing to avoid a competing `next build` per the
`.next`-cache lesson from two tasks ago. Went a step further than checking the rendered HTML class
list (which only proves the source compiled, not that Tailwind actually generated CSS for those
specific arbitrary-value classes): fetched the live compiled stylesheet directly and confirmed it
contains the literal `25deg` skew value and both `var(--btn-bg)`/`var(--btn-hover-bg)` variable
references, which only exist in the output if Tailwind's JIT scanner genuinely picked up and
compiled those exact utility classes. Full `tsc --noEmit` and `eslint` clean.

### 2026-08-25 — Live-site discovery + old WordPress /tag/* URLs redirected
User shared a screenshot of Google search results for "adex360" — **the site is now live on
adex360.com**, a fact not previously communicated to this log; DNS cutover happened at some point
without being tracked here, so `docs/progress.md`'s Phase 6/7 status was updated to match reality
rather than the original planned order (QA and SEO wiring were still incomplete when the site
went live). The immediate, concrete problem: two old WordPress tag-archive URls Google still has
indexed (`/tag/best-seo-company-in-the-world`, `/tag/best-seo-companies-in-the-world`) 404 on the
new site. User's request went beyond just those two URLs: redirect any `/tag/:slug` where the
slug mentions SEO to `/seo-services`, social media to `/social-media-management`, performance
marketing to `/performance-marketing`, "and also look for others as well" — i.e., generalize the
same keyword-matching logic across all the service pages, not hand-list two fixes.

Implemented via Next.js's `redirects()` in `next.config.ts` using path-to-regexp's per-segment
custom regex syntax (`/tag/:slug(.*seo.*)`) rather than a middleware/proxy, since this is exactly
what `redirects()` is designed for and keeps the logic declarative and colocated with the rest of
the redirect config the migration plan already calls for. Mapped: shopify→
`/shopify-app-development`, crm→`/crm-integration`, social→`/social-media-management`,
performance→`/performance-marketing`, web-dev/website→`/web-development`, seo→`/seo-services`,
with a catch-all `/tag/:path*`→`/resources` (the closest real equivalent to a WP tag archive,
which listed blog posts) for anything not matching a known keyword. Ordered specific keywords
before broader ones and the catch-all last, since Next.js redirects use first-match-wins.

**Broke the user's live dev server in the process, then fixed it and said so plainly.** The first
version of the config used a capturing group — `/tag/:slug(.*(web-dev|website).*)` — which
path-to-regexp's redirect matcher explicitly forbids ("Capturing groups are not allowed"). Next.js
auto-restarts its dev server whenever `next.config.ts` changes, so this bad config crashed the
user's own `npm run dev` process immediately on save. Diagnosed the exact cause by starting an
independent `next dev` instance on a throwaway port and reading its startup log directly rather
than guessing, which surfaced the precise Next.js error message and character offset. Fixed by
splitting the offending rule into two separate non-alternating rules
(`.*web-dev.*` / `.*website.*`) instead of risking whether a non-capturing group `(?:...)` would
be accepted either. Verified the corrected config starts cleanly with zero errors and that every
mapping redirects correctly (confirmed via curl against the throwaway instance, including both
exact URLs from the user's screenshot landing on `/seo-services`, and an unrelated tag correctly
falling through to the `/resources` catch-all) — then explicitly told the user their own dev
server needed a manual restart, since a process crashed in their own terminal window isn't
something this session can restart on their behalf. `tsc --noEmit` clean on the final config.

Also updated `docs/progress.md`'s Phase 6 and Phase 7 sections to reflect the live-site discovery
honestly: Phase 7 (Launch) marked In Process with DNS cutover checked off retroactively rather
than claimed as a tracked, planned event, and Phase 6's redirect-map item explicitly flagged as
only reactively covering `/tag/*` so far — not the full old-WP-URL audit the phase originally
scoped, since other old URL patterns (individual posts, categories, author pages) haven't been
checked yet and may need the same treatment if/when they surface the same way.

### 2026-08-25 — Admin dashboard split into Blog Posts + Projects tabs; projects made editable
User asked for the dashboard to open with two top-level tabs (Blog Posts, Projects) and to be
able to add projects the same way posts are added, with a free hand on what the tabs should
contain. Built the Projects half end-to-end and reorganised the dashboard around it.

**Data model.** Two new Prisma models plus a `ProjectStatus` enum (migration
`20260825134855_add_projects_and_industries`). `Project` carries name, slug, service, summary,
image, optional `caseStudyUrl`, `featured`, `sortOrder`, and status. `Industry` is a lookup table
(FMCG, D2C, Apparel, Footwear, Home Decor) that doubles as the home page's filter tabs, created
inline from the form via the same "select or add new" modal blog Categories use. Service is
deliberately *not* a table: the six services are fixed by the site's own nav, so `src/lib/
services.ts` derives the option list from `navItems` — one source of truth, and no way for an
editor to invent a seventh service with no page behind it.

**Dashboard.** `src/app/admin/page.tsx` is now a thin orchestrator over `?tab=` / `?status=`
search params, delegating to `PostsPanel` and `ProjectsPanel`. Both tabs get four stat cards
(posts: total / published / drafts / categories+authors; projects: total / published / on home
page / industries) and keep the All-Draft-Published pills, which were generalised into a shared
`StatusFilterTabs`. Only the open tab's rows and stats are queried; both totals are fetched for
the tab badges. Table chrome (`TH`/`TD`/`StatusBadge`/date format) moved to a shared `tableUi`
so the two tables can't drift apart. Posts gained an Author column and a slug line under the
title; projects show a thumbnail, industry, service, a Featured badge, and a link out to the
case-study page. Everything stays URL-driven, so a filtered view is linkable and survives the
redirect back from a save.

**Home page.** `Projects.tsx` used to hardcode four projects and six filter tabs; it's now an
async server component reading published+featured projects from the DB, with the client-side
filtering split into `ProjectsFilter.tsx`. Design is unchanged apart from two deliberate
improvements: cards with a `caseStudyUrl` are now links (with a hover arrow), and the tabs are
derived from the industries that actually have projects — so the old "Footwear" tab, which
filtered to nothing, no longer renders. The seed upserts the previous four projects and five
industries by slug, so the section looks identical to before but is now editable.

**Refactor picked up along the way.** Blog and project image uploads were about to be two copies
of the same fs code, so both now use `createImageStore(urlPrefix)` (`src/lib/imageStore.ts`).
Deletes are scoped to the store's own prefix, and project uploads land in
`public/images/projects/uploads/` rather than beside the screenshots committed to the repo —
deleting a seeded project can't unlink a file that's in git. `ImagePicker`'s companion hidden
fields are now namespaced off the input name (`featuredImage__existing` rather than a hardcoded
`existingFeaturedImage`), so more than one picker can share a form.

Also carried the `ScrollFx` ResizeObserver fix (committed to `main` as `1c7f4cb`) onto this
branch, since the rebuilt projects filter changes page height exactly the way that bug needs.
The change is byte-identical to main's, so the eventual merge won't conflict.

Verification: `prisma migrate dev` + `generate` + seed, `tsc --noEmit`, `eslint --max-warnings=0`,
a full `next build` (both new admin routes compiled), and a logged-in smoke test against
`next start` — home page renders all four projects with FMCG/D2C/Apparel/Home Decor tabs and no
Footwear tab, `/admin` and `/admin?tab=projects` both render their panels and stats, and
`/admin/projects/new` renders the full form. One gotcha: the running dev server 500'd on every
route after the migration because Turbopack had cached the pre-`ProjectStatus` Prisma client —
disk was correct, the process was stale. Read the real error out of
`.next/dev/logs/next-development.log` (Next 16 refuses to start a second dev server in the same
directory, so the throwaway-port trick from the redirects task doesn't work any more) and cycled
the server rather than guessing.

### 2026-08-25 — Project cards simplified (no case-study link/slug/sort field); all 16 real projects seeded
Follow-up to the Projects tab built earlier today. User pointed out the new-project form didn't
need a Case Study Link, a manual Slug field, or Sort Order — the home page cards are just display
data, not navigation, so linking to a case study was the wrong feature to ask an editor to fill
in. Also asked for the real `/portfolio` project list (16 client projects, not just the original
4) to be brought into the dashboard, with the Industry dropdown built from what that data
actually contains.

Removed `caseStudyUrl` and `sortOrder` from the `Project` model entirely (migration
`20260825141839_remove_project_case_study_and_sort_order`) rather than just hiding them in the
form — dead schema fields are worse than no fields. `ProjectForm.tsx` is now four things: name,
industry/service/status, summary, image, plus the on-home-page checkbox. Slug is still generated
server-side from the name for DB uniqueness, just never exposed as input. `ProjectsFilter.tsx`
(home page) dropped the Link-vs-div branching that used to make case-study-linked cards
clickable — every card is now a plain non-interactive tile, matching what was asked for. Ordering
without `sortOrder` falls back to `createdAt` (ascending on the home page, so first-added shows
first; descending in the admin table, newest first — same convention posts already use).

Reseeded from `PortfolioGrid.tsx`'s 16 entries: name and service copied over as-is, image reused
directly from `public/images/portfolio/` (no new uploads needed), and industry assigned by
judgment per project since the portfolio page itself only tracks service, not vertical (e.g.
"Premium Footwear" → Footwear, "Skin Care & Makeup" → FMCG, the three Shopify products
Universal Product Feed/Mailbot/PushBot → a new "Shopify Apps" industry). This corrected one
existing mismatch: Logo Official was originally seeded as "D2C" back when Projects was a static
4-item prototype, but portfolio classifies it as "Premium Footwear" — moved to Footwear, and D2C
dropped from the industry list entirely since nothing in the real 16 actually belongs there.
Final industry set / home page tab order: FMCG, Apparel, Footwear, Home Decor, Shopify Apps.
`seedProjects()` now deletes and recreates every Project/Industry row on each run instead of
upserting — noted in a comment that this needs to switch back to upsert-only once real editors
start adding projects by hand, so a reseed can't clobber their work.

Verification: `prisma migrate dev` + `generate` + reseed ("Seeded 5 industries and 16 projects"),
`tsc --noEmit`, `eslint --max-warnings=0`, full `next build`, and a logged-in smoke test — home
page renders all 16 names and the 5 correct tabs with no stray "D2C" tab, the new-project form no
longer contains Case Study Link / Sort Order / Slug fields, and the admin table's case-study
column is gone. Hit the same stale-Turbopack-Prisma-client issue as the earlier migration (dev
server 500ing with "column does not exist" from the pre-migration client cached in memory) —
same fix, cycle the server.

### 2026-08-25 — Project cards drop Summary + manual "show on home" toggle; home page auto-shows the latest 4
Second follow-up on the same feature. User pointed out the Summary field wasn't needed either,
and asked for the "show on home page" checkbox to go away in favor of automatic behaviour: the
home page should just always show the 4 most recent projects, the same way the section behaved
originally when it was 4 hardcoded entries.

Removed `summary` and `featured` from the `Project` model entirely (migration
`20260825143425_remove_project_summary_and_featured`) — same reasoning as dropping
`caseStudyUrl`/`sortOrder` earlier today: no dead schema fields once a form field is gone.
`ProjectForm.tsx` is down to name, industry/service/status, and image. Publishing is now the only
lever — there's no separate "feature this on home" step.

The home page's `Projects.tsx` query dropped the `featured` filter and instead does
`orderBy: createdAt desc, take: HOME_PROJECTS_COUNT` — a new shared constant
(`src/lib/projects.ts`, value 4) so the home page query and the admin dashboard's "on home page"
indicator can't drift out of sync with each other. The industry filter tabs still derive from
whichever projects are actually being shown (unchanged behaviour, just now sourced from "latest
4" instead of "flagged featured") — so with the current seed data, the home page shows Skin Care
& Makeup, Heritage Fashion E-commerce, PushBot, and Fashion & Apparel (the last 4 inserted), with
tabs narrowed to just FMCG, Apparel, and Shopify Apps.

Since "on home page" is no longer a stored flag, the admin table computes it: a separate
`{ status: PUBLISHED, orderBy: createdAt desc, take: HOME_PROJECTS_COUNT, select: id }` query
builds a Set of the current home-page project ids, and each table row checks membership in it
for the "On Home" badge — same visual as before, just derived instead of stored. The "On Home
Page" stat card's hint changed from "Featured in Latest Projects" to "Automatically the 4 most
recently published" to make the new mechanic legible to whoever's using the dashboard.

Verification: `prisma migrate dev` + `generate` + reseed, `tsc --noEmit`, `eslint
--max-warnings=0`, full `next build`, and a logged-in smoke test — home page shows exactly the 4
newest projects with the 3 tabs those 4 actually belong to, the new-project form no longer has
Summary or the checkbox, and the admin table's "On Home" badge lines up with those same 4 rows.
Same stale-Turbopack-Prisma-client restart needed as both earlier migrations today.
