import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/fx/ScrollProgress";
import BackToTop from "@/components/fx/BackToTop";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Adex360: E-Commerce Digital Marketing Agency",
  description:
    "Adex360 is your growth marketing wingman, driving brands to their full potential with performance marketing, SEO, web development and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden font-sans text-ink">
        <ScrollProgress />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
