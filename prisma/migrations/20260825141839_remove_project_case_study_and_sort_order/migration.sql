/*
  Warnings:

  - You are about to drop the column `caseStudyUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `sortOrder` on the `Project` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Project_status_featured_sortOrder_idx";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "caseStudyUrl",
DROP COLUMN "sortOrder";

-- CreateIndex
CREATE INDEX "Project_status_featured_idx" ON "Project"("status", "featured");
