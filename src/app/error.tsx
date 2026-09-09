"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";

// Route-level error boundary: renders inside the root layout, so the header
// and footer stay up and visitors can still navigate. Reached only if
// something other than a guarded database call throws — the public pages
// already degrade gracefully when MySQL is unreachable (see withDbFallback).
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#E38A19]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E38A19]/10 text-[#C26F0B]">
          <AlertTriangle className="h-7 w-7" />
        </span>
        <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          Something went wrong
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
          This page hit a <span className="text-[#C26F0B]">temporary error</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Our team has been notified. You can try again, or head back to the
          home page — the rest of the site is working normally.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 xs:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:-translate-y-0.5"
          >
            <RotateCcw className="h-4 w-4" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B6BEDB] bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-transparent hover:bg-brand-blue hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs text-muted">Reference: {error.digest}</p>
        )}
      </div>
    </section>
  );
}
