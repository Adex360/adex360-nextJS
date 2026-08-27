import Link from "next/link";
import { FileText, FolderKanban } from "lucide-react";

export type SectionKey = "posts" | "projects";

const SECTIONS: { key: SectionKey; label: string; icon: typeof FileText }[] = [
  { key: "posts", label: "Blog Posts", icon: FileText },
  { key: "projects", label: "Projects", icon: FolderKanban },
];

/**
 * Top-level dashboard sections. Like the status pills, the active section
 * lives in the URL (`?tab=projects`) so server actions can redirect straight
 * back to the section the editor was working in.
 */
export default function AdminTabs({
  active,
  counts,
}: {
  active: SectionKey;
  counts: Record<SectionKey, number>;
}) {
  return (
    <nav className="mt-8 flex items-center gap-6 border-b border-[#E4E8F3]">
      {SECTIONS.map((section) => {
        const isActive = active === section.key;
        return (
          <Link
            key={section.key}
            href={section.key === "posts" ? "/admin" : `/admin?tab=${section.key}`}
            aria-current={isActive ? "page" : undefined}
            className={`-mb-px inline-flex items-center gap-2 border-b-2 px-1 pb-3 text-sm font-bold transition-colors ${
              isActive
                ? "border-brand-blue text-brand-blue"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            <section.icon className="h-4 w-4" />
            {section.label}
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                isActive ? "bg-brand-blue/10 text-brand-blue" : "bg-surface text-muted"
              }`}
            >
              {counts[section.key]}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
