import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://worryfreelawns.com"),
  title: {
    default: "Worry Free Inc. | Lawn Care, Landscaping, Snow & Ice Control",
    template: "%s | Worry Free Inc.",
  },
  description:
    "Worry Free Inc. provides lawn care, landscaping, outdoor maintenance, and snow and ice control for municipal, commercial, condominium, and residential customers across Southeastern Michigan.",
  keywords: [
    "Worry Free Inc",
    "Troy Michigan landscaping",
    "Oakland County lawn care",
    "snow and ice control",
    "municipal landscape maintenance",
    "commercial outdoor maintenance",
  ],
  openGraph: {
    title: "Worry Free Inc.",
    description:
      "Outdoor maintenance, landscaping, lawn care, and snow and ice control based in Troy, Michigan.",
    url: "https://worryfreelawns.com",
    siteName: "Worry Free Inc.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-slate-950">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
