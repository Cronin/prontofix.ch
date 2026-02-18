import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ProntoFix - Find Local Professionals in Switzerland",
    template: "%s | ProntoFix",
  },
  description:
    "Find verified plumbers, electricians, locksmiths and more across Switzerland. Available 24/7 in your area.",
  metadataBase: new URL("https://prontofix.ch"),
  openGraph: {
    type: "website",
    siteName: "ProntoFix",
    title: "ProntoFix - Local Professionals in Switzerland",
    description:
      "2400+ verified tradespeople across 24 Swiss cities. Plumbers, electricians, locksmiths and more. Available 24/7.",
  },
  icons: {
    icon: "/favicon.svg",
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
    <html lang="de" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
