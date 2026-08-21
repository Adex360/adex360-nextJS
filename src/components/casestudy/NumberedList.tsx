import type { ReactNode } from "react";

export type NumberedItem = { title?: string; text: ReactNode };

export default function NumberedList({ items }: { items: NumberedItem[] }) {
  return (
    <ol className="mt-5 space-y-5">
      {items.map((item, i) => (
        <li key={item.title ?? i} className="flex gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
            {i + 1}
          </span>
          <div>
            {item.title && <p className="text-sm font-bold text-ink sm:text-base">{item.title}</p>}
            <p className={`text-sm leading-relaxed text-muted sm:text-base ${item.title ? "mt-1.5" : ""}`}>
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
