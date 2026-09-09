"use client";

import Link from "next/link";

// Last-resort boundary: replaces the root layout when even that fails to
// render, so it must supply its own <html>/<body> and can't rely on
// globals.css being loaded — hence inline styles only.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, sans-serif",
          background: "#F5F7FC",
          color: "#0F172A",
          textAlign: "center",
          padding: "2rem 1rem",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#0C5ADB",
            }}
          >
            Something went wrong
          </p>
          <h1 style={{ margin: "0.75rem 0 0", fontSize: 32, fontWeight: 800, lineHeight: 1.2 }}>
            Adex360 hit a temporary error
          </h1>
          <p style={{ margin: "1.25rem 0 0", fontSize: 15, lineHeight: 1.6, color: "#5B6785" }}>
            Please try again in a moment. If this keeps happening, email us at{" "}
            <a href="mailto:info@adex360.com" style={{ color: "#0C5ADB", fontWeight: 600 }}>
              info@adex360.com
            </a>
            .
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                border: 0,
                borderRadius: 999,
                padding: "0.9rem 1.75rem",
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(90deg, #0C5ADB, #2E6FE8)",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                borderRadius: 999,
                padding: "0.9rem 1.75rem",
                fontSize: 14,
                fontWeight: 600,
                color: "#0F172A",
                background: "#fff",
                border: "1px solid #B6BEDB",
                textDecoration: "none",
              }}
            >
              Back to Home
            </Link>
          </div>
          {error.digest && (
            <p style={{ marginTop: "2rem", fontSize: 12, color: "#5B6785" }}>
              Reference: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
