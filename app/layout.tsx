import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const socialImage = {
  url: `${siteUrl}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Diego Herrera Chaves - Software Engineer",
  type: "image/png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Diego Herrera Chaves Portfolio",
  title: {
    default: "Diego Herrera Chaves | Software Engineer",
    template: "%s | Diego Herrera Chaves",
  },
  description:
    "Software Engineering student graduating in April 2027 and Full-Stack Developer building business applications and AI-assisted platforms with Java, Spring Boot, React, TypeScript, MySQL and Docker.",
  keywords: [
    "Diego Herrera Chaves",
    "Software Engineer Costa Rica",
    "Backend Developer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "MySQL",
  ],
  authors: [{ name: "Diego Herrera Chaves" }],
  creator: "Diego Herrera Chaves",
  publisher: "Diego Herrera Chaves",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Diego Herrera Chaves | Software Engineer",
    description:
      "Backend-focused Software Engineer building reliable full-stack products and business systems.",
    siteName: "Diego Herrera Chaves | Portfolio",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Herrera Chaves | Software Engineer",
    description:
      "Backend-focused Software Engineer building reliable full-stack products and business systems.",
    images: [socialImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
