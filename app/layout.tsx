import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Diego Herrera Chaves | Software Engineer",
    template: "%s | Diego Herrera Chaves",
  },
  description:
    "Software Engineering student and Full-Stack Developer building production-ready applications with Java, Spring Boot, React, MySQL, Docker and Linux.",
  keywords: [
    "Diego Herrera Chaves",
    "Software Engineer Costa Rica",
    "Backend Developer",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
  ],
  authors: [{ name: "Diego Herrera Chaves" }],
  creator: "Diego Herrera Chaves",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Diego Herrera Chaves | Software Engineer",
    description:
      "Backend-focused Software Engineer building reliable full-stack products and business systems.",
    siteName: "Diego Herrera Chaves — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Herrera Chaves | Software Engineer",
    description:
      "Backend-focused Software Engineer building reliable full-stack products and business systems.",
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
