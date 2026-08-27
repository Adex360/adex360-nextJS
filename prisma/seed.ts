import "dotenv/config";
import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma";

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME ?? "Adex360 Admin";

  if (!email || !password) {
    throw new Error(
      "Set ADMIN_EMAIL and ADMIN_PASSWORD in .env before running the seed script."
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: { name, passwordHash },
    create: { name, email, passwordHash },
  });

  await prisma.category.upsert({
    where: { slug: "general" },
    update: {},
    create: { name: "General", slug: "general" },
  });

  const defaultAuthor = await prisma.author.findFirst({ where: { name } });
  if (!defaultAuthor) {
    await prisma.author.create({ data: { name } });
  }

  await seedProjects();

  console.log(`Seeded admin user: ${user.email}`);
}

/**
 * Mirrors the 16 real client projects shown on `/portfolio`
 * (`PortfolioGrid.tsx`) as dashboard-manageable Project cards for the home
 * page's "Latest Projects" section. Card data only — no case-study link,
 * since these cards aren't meant to navigate anywhere; `/portfolio` already
 * owns that job with its own hardcoded grid. The home page always shows the
 * most recently published projects (see HOME_PROJECTS_COUNT), so which of
 * these 16 end up on the home page is purely a function of insertion order.
 * Industry is a vertical inferred from each project (not present on the
 * portfolio page itself, which only tracks service), and drives the home
 * page's filter tabs.
 *
 * Re-seeded from scratch on every run — deleted and recreated rather than
 * upserted — so a correction to the industry/service mapping here always
 * takes effect. Safe as long as these stay bootstrap/demo rows; once real
 * projects are being added by hand in the dashboard, switch this back to an
 * upsert-only approach so it stops clobbering manual edits.
 */
async function seedProjects() {
  await prisma.project.deleteMany();
  await prisma.industry.deleteMany();

  // Creation order fixes the home page tab order (FMCG → Apparel → Footwear
  // → Home Decor → Shopify Apps), matching each industry's first appearance
  // in the portfolio list below.
  const industryNames = ["FMCG", "Apparel", "Footwear", "Home Decor", "Shopify Apps"];
  const industryIds = new Map<string, string>();

  for (const industryName of industryNames) {
    const slug = industryName.toLowerCase().replace(/\s+/g, "-");
    const industry = await prisma.industry.create({ data: { name: industryName, slug } });
    industryIds.set(industryName, industry.id);
  }

  const projects = [
    { name: "EU Naturals", slug: "eu", industry: "FMCG", service: "SEO Services", image: "/images/portfolio/eu.png" },
    { name: "D2C Western Clothing", slug: "beoneshopone", industry: "Apparel", service: "SEO Services", image: "/images/portfolio/one.png" },
    { name: "Fashion Retail", slug: "ak-galleria", industry: "Apparel", service: "Web Development", image: "/images/portfolio/ak-galleria.png" },
    { name: "Butterfly", slug: "butterfly", industry: "FMCG", service: "SEO Services", image: "/images/portfolio/butterfly.png" },
    { name: "Logo Official", slug: "logo-official", industry: "Footwear", service: "Web Development", image: "/images/portfolio/logo-shoes.png" },
    { name: "Weltew Home", slug: "weltew-home", industry: "Home Decor", service: "Web Development", image: "/images/portfolio/weltew.png" },
    { name: "Footwear Retail", slug: "ecs", industry: "Footwear", service: "Performance Marketing", image: "/images/portfolio/ecs.png" },
    { name: "Nishat USA", slug: "nishat-usa", industry: "Apparel", service: "Social Media Management", image: "/images/portfolio/nishat.png" },
    { name: "Nishat UAE", slug: "nishat-uae", industry: "Apparel", service: "SEO Services", image: "/images/portfolio/nishat.png" },
    { name: "Universal Product Feed", slug: "universal-product-feed", industry: "Shopify Apps", service: "Shopify App Development", image: "/images/portfolio/universal-product-feed.jpg" },
    { name: "Mailbot", slug: "mailbot", industry: "Shopify Apps", service: "Shopify App Development", image: "/images/portfolio/mailbot.jpg" },
    { name: "Urban Fashion & Lifestyle Retail", slug: "one", industry: "Apparel", service: "Performance Marketing", image: "/images/portfolio/one.png" },
    { name: "Fashion & Apparel", slug: "beechtree", industry: "Apparel", service: "Social Media Management", image: "/images/portfolio/beechtree.png" },
    { name: "PushBot", slug: "pushbot", industry: "Shopify Apps", service: "Shopify App Development", image: "/images/portfolio/pushbot.png" },
    { name: "Heritage Fashion E-commerce", slug: "seona", industry: "Apparel", service: "Social Media Management", image: "/images/portfolio/seona.png" },
    { name: "Skin Care & Makeup", slug: "kiko-milano", industry: "FMCG", service: "Performance Marketing", image: "/images/portfolio/kiko.png" },
  ];

  for (const project of projects) {
    const industryId = industryIds.get(project.industry);
    if (!industryId) continue;

    await prisma.project.create({
      data: {
        name: project.name,
        slug: project.slug,
        service: project.service,
        image: project.image,
        status: "PUBLISHED",
        industryId,
      },
    });
  }

  console.log(`Seeded ${industryNames.length} industries and ${projects.length} projects`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
