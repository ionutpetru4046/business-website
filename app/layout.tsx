import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Correct and robust metadata for SEO, social, and verification
export const metadata: Metadata = {
  metadataBase: new URL("https://business-website-lime-sigma.vercel.app"),
  title: {
    default: "Coste.Dev | Full-Stack Web Developer",
    template: "%s | Coste.Dev",
  },
  description:
    "Custom business websites, full-stack web applications, CRM systems, booking solutions, and robust API integrations built with React, Next.js, Node.js, and TypeScript. Modern, responsive, accessible web development and consulting.",
  applicationName: "Coste.Dev",
  keywords: [
    "Full-Stack Web Developer",
    "Business Websites",
    "CRM Systems",
    "API Integrations",
    "Booking Solutions",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Coste.Dev",
    "Professional Web Development",
  ],
  authors: [{ name: "Ionut Coste", url: "https://business-website-lime-sigma.vercel.app" }],
  creator: "Ionut Coste",
  publisher: "Coste.Dev",
  openGraph: {
    title: "Coste.Dev | Full-Stack Web Developer",
    description:
      "Building modern, accessible, and high-performing business websites and web applications with a focus on custom solutions.",
    url: "https://business-website-lime-sigma.vercel.app/",
    siteName: "Coste.Dev",
    images: [
      {
        url: "https://business-website-lime-sigma.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coste.Dev – Full-Stack Web Developer",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coste.Dev | Full-Stack Web Developer",
    description:
      "Modern websites, custom full-stack applications, and advanced API solutions for businesses.",
    site: "@CosteDev", // Replace with real handle if available
    images: ["https://business-website-lime-sigma.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "9qzttCp1J1WN3kZ6o3YQi4Q8Nn73ezf_JX_GNYB2xhE",
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
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
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
