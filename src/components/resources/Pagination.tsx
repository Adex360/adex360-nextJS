import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getPageNumbers(current: number, total: number): (number | "...")[] {
  const pages: (number | "...")[] = [];
  const add = (p: number | "...") => pages.push(p);

  add(1);
  if (current > 3) add("...");
  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    add(p);
  }
  if (current < total - 2) add("...");
  if (total > 1) add(total);

  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const href = (page: number) => (page === 1 ? "/resources" : `/resources?page=${page}`);

  return (
    <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
      <Link
        href={href(Math.max(1, currentPage - 1))}
        aria-label="Previous page"
        aria-disabled={currentPage === 1}
        className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E8F3] text-ink transition-colors ${
          currentPage === 1
            ? "pointer-events-none opacity-40"
            : "hover:border-transparent hover:bg-brand-blue hover:text-white"
        }`}
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>

      {getPageNumbers(currentPage, totalPages).map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="px-1 text-sm text-muted">
            &hellip;
          </span>
        ) : (
          <Link
            key={page}
            href={href(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
              page === currentPage
                ? "bg-brand-blue text-white"
                : "text-ink hover:bg-surface"
            }`}
          >
            {page}
          </Link>
        )
      )}

      <Link
        href={href(Math.min(totalPages, currentPage + 1))}
        aria-label="Next page"
        aria-disabled={currentPage === totalPages}
        className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E8F3] text-ink transition-colors ${
          currentPage === totalPages
            ? "pointer-events-none opacity-40"
            : "hover:border-transparent hover:bg-brand-blue hover:text-white"
        }`}
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}
