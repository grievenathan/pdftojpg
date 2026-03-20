import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDF to JPG Converter - Free, Fast, Private | PDF To JPG",
  description:
    "Convert PDF documents to JPG images instantly in your browser. Free, fast, and private - your files never leave your device. Convert all pages at once.",
  keywords: ["pdf to jpg", "convert pdf to jpg", "pdf to image converter", "free pdf converter", "pdf to jpeg"],
  openGraph: {
    title: "PDF to JPG Converter - Free, Fast, Private | PDF To JPG",
    description:
      "Convert PDF documents to JPG images instantly in your browser. Free, fast, and private.",
    url: "https://pdftojpg.co.uk",
    siteName: "PDF To JPG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to JPG Converter - Free, Fast, Private",
    description:
      "Convert PDF documents to JPG images instantly in your browser. Free, fast, and private.",
  },
  metadataBase: new URL("https://pdftojpg.co.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
