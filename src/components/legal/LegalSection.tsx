import type { ReactNode } from "react";

export default function LegalSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div data-reveal="up" className="flex gap-4 sm:gap-5">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
        {number}
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-bold text-ink sm:text-lg">{title}</h3>
        <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}
