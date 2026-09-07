/*
  Warnings:

  - You are about to drop the column `featured` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `Project` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Project_status_featured_idx";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "featured",
DROP COLUMN "summary";

-- CreateIndex
CREATE INDEX "Project_status_createdAt_idx" ON "Project"("status", "createdAt");
