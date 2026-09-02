import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONTENT } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Burhill Engineering Partners | Forensic & Technical Construction Consultancy",
    template: "%s | Burhill Engineering Partners",
  },
  description: SITE_CONTENT.hero.leadParagraph,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "Forensic Engineering Sydney",
    "Construction Engineering Consultancy",
    "Technical Advisory Infrastructure",
    "Hyperscale Data Centre Engineering",
    "Quality Governance Inspection",
    "Delay Forensics Expert Witness",
    "Burhill Engineering Partners"
  ],
  authors: [{ name: "Burhill Engineering Partners" }],
  openGraph: {
    title: "Burhill Engineering Partners | Engineering Clarity in Complex Construction",
    description: SITE_CONTENT.hero.leadParagraph,
    url: "https://www.burhillengineering.com.au",
    siteName: "Burhill Engineering Partners",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-charcoal antialiased selection:bg-navy selection:text-gold">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
