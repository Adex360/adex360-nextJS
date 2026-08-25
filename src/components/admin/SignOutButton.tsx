"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="rounded-full border border-[#E4E8F3] px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
    >
      Sign Out
    </button>
  );
}
