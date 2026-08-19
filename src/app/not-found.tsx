import type { Metadata } from "next";
import UnderConstruction from "@/components/layout/UnderConstruction";

export const metadata: Metadata = {
  title: "Under Construction | Adex360: E-Commerce Digital Marketing Agency",
  description:
    "This page is under construction. Explore what's already live or get in touch with the Adex360 team.",
};

export default function NotFound() {
  return <UnderConstruction />;
}
