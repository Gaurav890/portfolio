import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import FloatingGameButton from "@/components/FloatingGameButton";
import StructuredData from "@/components/StructuredData";

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
  metadataBase: new URL('https://gauravhchaulagain.com'),
  title: {
    default: "Gaurav Chaulagain - Product Manager & AI Specialist",
    template: "%s | Gaurav Chaulagain",
  },
  description: "Product Manager specializing in AI products, with expertise in technical product management, cross-functional collaboration, and data-driven decision making. Building innovative solutions at the intersection of technology and user experience.",
  keywords: [
    "Product Manager",
    "Technical PM",
    "AI Products",
    "Machine Learning",
    "Product Strategy",
    "AI Specialist",
    "Product Leadership",
    "Data-Driven Product Management",
    "Cross-functional Leadership",
    "San Francisco Bay Area",
  ],
  authors: [{ name: "Gaurav Chaulagain" }],
  creator: "Gaurav Chaulagain",
  openGraph: {
    title: "Gaurav Chaulagain - Product Manager & AI Specialist",
    description: "Product Manager specializing in AI products and technical product management. Building innovative solutions at the intersection of technology and user experience.",
    url: "https://gauravhchaulagain.com",
    siteName: "Gaurav Chaulagain Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/gaurav_profile.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Chaulagain - Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Chaulagain - Product Manager & AI Specialist",
    description: "Product Manager specializing in AI products and technical product management. Building innovative solutions.",
    images: ["/images/gaurav_profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://gauravhchaulagain.com",
  },
  verification: {
    google: 'google-site-verification=sfr-d3rwSjD8vv4xuk54oMR_qS-LMUQ0kWOA1Epv7zg', // You'll need to add this from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable}`}>
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0EA5E9" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={manrope.className} suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
        <FloatingGameButton />
      </body>
    </html>
  );
}
