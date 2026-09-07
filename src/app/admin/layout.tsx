import type { ReactNode } from "react";
import SessionProviderClient from "@/components/admin/SessionProviderClient";

export const metadata = {
  title: "Admin | Adex360",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface font-sans text-ink">
      <SessionProviderClient>{children}</SessionProviderClient>
    </div>
  );
}
