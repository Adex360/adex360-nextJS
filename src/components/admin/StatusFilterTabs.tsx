import Link from "next/link";

export type StatusKey = "all" | "draft" | "published";

export const STATUS_TABS: { key: StatusKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "draft", label: "Draft" },
  { key: "published", label: "Published" },
];

/**
 * All / Draft / Published pills. Filtering is a URL param rather than client
 * state so a filtered view can be linked, bookmarked, and survives the
 * redirect back from a save.
 */
export default function StatusFilterTabs({
  active,
  counts,
  hrefFor,
}: {
  active: StatusKey;
  counts: Record<StatusKey, number>;
  hrefFor: (status: StatusKey) => string;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[#E4E8F3] bg-white p-1">
      {STATUS_TABS.map((tab) => (
        <Link
          key={tab.key}
          href={hrefFor(tab.key)}
          aria-current={active === tab.key ? "page" : undefined}
          className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === tab.key ? "bg-brand-blue text-white" : "text-muted hover:text-ink"
          }`}
        >
          {tab.label} ({counts[tab.key]})
        </Link>
      ))}
    </div>
  );
}
