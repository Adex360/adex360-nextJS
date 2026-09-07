import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ReadMoreButtonProps = {
  href: string;
  children?: ReactNode;
  className?: string;
  /** CSS var --btn-bg: the button's default background. */
  bgColor?: string;
  /** CSS var --btn-hover-bg: the sweeping overlay's color on hover/focus. */
  hoverBgColor?: string;
  /** CSS var --btn-text: the label color, unchanged across states. */
  textColor?: string;
};

/**
 * Pill button with a skewed dark overlay that sweeps in from behind on
 * hover/focus (via a ::after pseudo-element with a negative z-index, so it
 * paints above the button's own background but stays behind the label text).
 * Colors are CSS custom properties so the same component can be re-themed
 * without touching the Tailwind classes.
 */
export default function ReadMoreButton({
  href,
  children = "Read More",
  className = "",
  bgColor = "#0c5adb",
  hoverBgColor = "#03112d",
  textColor = "#ffffff",
}: ReadMoreButtonProps) {
  return (
    <Link
      href={href}
      style={
        {
          "--btn-bg": bgColor,
          "--btn-hover-bg": hoverBgColor,
          "--btn-text": textColor,
        } as CSSProperties
      }
      className={`relative isolate inline-block overflow-hidden rounded-[30px] bg-[var(--btn-bg)] px-[52px] py-4 text-[17px] font-medium text-[var(--btn-text)] transition-all duration-[350ms] ease-in-out after:absolute after:left-[-5%] after:top-1/2 after:z-[-1] after:h-[150px] after:w-[115%] after:origin-center after:-translate-y-[45%] after:skew-x-[25deg] after:scale-0 after:bg-[var(--btn-hover-bg)] after:transition-transform after:duration-[250ms] after:ease-in-out after:will-change-transform after:content-[''] hover:after:scale-[1.2] focus-visible:after:scale-[1.2] ${className}`}
    >
      {children}
    </Link>
  );
}
