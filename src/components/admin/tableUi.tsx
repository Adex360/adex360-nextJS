import type { ReactNode } from "react";

/** Shared cell padding + the status pill, so the posts and projects tables
 *  stay visually identical without either one owning the styling. */

export function TH({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <th className={`px-5 py-3 ${className}`}>{children}</th>;
}

export function TD({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`px-5 py-4 align-top ${className}`}>{children}</td>;
}

export function StatusBadge({ status }: { status: "DRAFT" | "PUBLISHED" }) {
  const published = status === "PUBLISHED";
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${
        published ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}

export function formatAdminDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
