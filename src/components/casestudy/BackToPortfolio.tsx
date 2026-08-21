import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToPortfolio({ variant = "dark" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <Link
      data-reveal="fade"
      href="/portfolio"
      className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur-sm transition-all duration-200 hover:-translate-x-0.5 ${
        isDark
          ? "border-white/15 bg-white/10 text-white/80 hover:border-white/25 hover:bg-white/15 hover:text-white"
          : "border-[#E4E8F3] bg-white text-ink shadow-sm hover:border-brand-blue/30 hover:text-brand-blue hover:shadow-md"
      }`}
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
      Back to Portfolio
    </Link>
  );
}
