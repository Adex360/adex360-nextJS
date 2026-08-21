import type { ReactNode } from "react";

export default function Stat({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-[#C26F0B]">{children}</strong>;
}
