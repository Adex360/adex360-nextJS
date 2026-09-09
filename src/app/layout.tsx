import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/fx/ScrollProgress";
import BackToTop from "@/components/fx/BackToTop";
import { SITE_URL } from "@/lib/site";
import { organizationSchema } from "@/lib/organizationSchema";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Set once here so every page can declare `alternates: { canonical: "/some-path" }`
// with a site-relative path instead of repeating the full domain everywhere.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Adex360 is your growth marketing wingman, driving brands to their full potential with performance marketing, SEO, web development and more.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "EnvkZ8vZWv8j0nD0QP7JD0W8q3Y_0oc0ZO4BmmCelNo",
  },
};

// Set NEXT_PUBLIC_GA_MEASUREMENT_ID (a real "G-XXXXXXXXXX" ID from Google
// Analytics) in the environment to turn analytics on. Left unset, no gtag
// script is rendered at all — no broken/placeholder tracking ships.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans text-ink">
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <ScrollProgress />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
