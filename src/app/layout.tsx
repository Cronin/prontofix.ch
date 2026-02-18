import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProntoFix - Find Local Professionals in Switzerland",
  description:
    "Find verified plumbers, electricians, locksmiths and more across Switzerland. Available 24/7 in your area.",
  metadataBase: new URL("https://prontofix.ch"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
