import type { ReactNode } from "react";

export type LabeledBullet = { label: ReactNode; text: ReactNode };

export default function LabeledBullets({ items }: { items: LabeledBullet[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted sm:text-base">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
          <span>
            <span className="font-bold text-ink">{item.label}</span> {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
