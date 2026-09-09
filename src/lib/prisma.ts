import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Hard cap on how long any public page waits for the database. The driver's
// default pool acquireTimeout is 10s, which is exactly how long the live site
// hung before 500ing when production couldn't reach MySQL.
export const DB_TIMEOUT_MS = 5000;

function createAdapter() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is required");
  }

  const url = new URL(connectionString);
  if (url.protocol !== "mysql:") {
    throw new Error("DATABASE_URL must use the mysql:// protocol");
  }

  const database = url.pathname.replace(/^\//, "");
  if (!database) {
    throw new Error("DATABASE_URL must include a database name");
  }

  return new PrismaMariaDb({
    host: url.hostname,
    port: url.port ? Number(url.port) : 3306,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: decodeURIComponent(database),
    connectionLimit: 5,
    acquireTimeout: DB_TIMEOUT_MS,
    connectTimeout: DB_TIMEOUT_MS,
  });
}

const adapter = createAdapter();

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

/**
 * Runs a read-only query for a public page and returns `fallback` instead of
 * throwing if the database is unreachable, slow, or errors. Public pages must
 * never 500 because of the database — the static content still has value
 * without the blog/projects sections. Admin code should NOT use this: there a
 * loud failure is the right behaviour.
 */
export async function withDbFallback<T>(
  label: string,
  query: () => Promise<T>,
  fallback: T
): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(
      () => reject(new Error(`timed out after ${DB_TIMEOUT_MS}ms`)),
      DB_TIMEOUT_MS
    );
  });

  try {
    return await Promise.race([query(), timeout]);
  } catch (error) {
    console.error(`[db] ${label} failed — rendering without it.`, error);
    return fallback;
  } finally {
    clearTimeout(timer);
  }
}
