import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents iOS inputs from zooming the page on focus
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#f9f6ee",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Orlando Arnosa | Senior Full Stack Developer",
  description:
    "Orlando Arnosa is a senior full stack developer who wires frontends to the systems that actually run businesses. ERPs, marketplaces, warehouses, and the data pipelines between them. TypeScript/Node.js, C#/.NET, and Python.",
  keywords: [
    "senior full stack developer",
    "full stack developer",
    "software engineer",
    "systems integration",
    "ERP integration",
    "ecommerce",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "c#",
    ".net",
    "python",
    "azure",
    "data engineering",
    "ELT",
    "shopify",
    "magento",
    "woocommerce",
    "drupal",
    "headless cms",
    "marketplace apis",
    "accessibility",
    "portfolio",
  ],
  authors: [{ name: "Orlando Arnosa" }],
  creator: "Orlando Arnosa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orlandoarnosa.com",
    title: "Orlando Arnosa | Senior Full Stack Developer",
    description:
      "Senior full stack developer wiring frontends to the systems that actually run businesses. ERPs, marketplaces, and data pipelines across TypeScript/Node.js, C#/.NET, and Python.",
    siteName: "Orlando Arnosa Portfolio",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
