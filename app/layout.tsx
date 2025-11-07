import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gaurav H. Chaulagain - Product Manager & AI Specialist",
  description: "Product Manager specializing in AI products, with expertise in technical product management, cross-functional collaboration, and data-driven decision making.",
  keywords: ["Product Manager", "Technical PM", "AI Products", "Machine Learning", "Product Strategy"],
  authors: [{ name: "Gaurav H. Chaulagain" }],
  openGraph: {
    title: "Gaurav H. Chaulagain - Product Manager",
    description: "Product Manager specializing in AI products and technical product management",
    url: "https://gauravhchaulagain.com",
    siteName: "Gaurav H. Chaulagain Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav H. Chaulagain - Product Manager",
    description: "Product Manager specializing in AI products and technical product management",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable}`}>
      <body className={manrope.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
