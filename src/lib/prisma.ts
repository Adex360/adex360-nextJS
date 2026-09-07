import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

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
  });
}

const adapter = createAdapter();

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
