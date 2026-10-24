import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Replace this with your real deployed URL when available.
  metadataBase: new URL("https://business-website-lime-sigma.vercel.app"),

  title: {
    default: "Coste.Dev | Full-Stack Web Developer",
    template: "%s | Coste.Dev",
  },

  description:
    "Custom business websites, full-stack web applications, CRM systems, booking solutions, and API integrations built with React, Next.js, Node.js, and TypeScript.",

  applicationName: "Coste.Dev",

  openGraph: {
    title: "Coste.Dev | Full-Stack Web Developer",
    description:
      "Building modern websites and practical web applications for businesses.",
    siteName: "Coste.Dev",
    type: "website",
    locale: "en_IE",
    url: "/",
  },

  twitter: {
    card: "summary_large_image",
    title: "Coste.Dev | Full-Stack Web Developer",
    description:
      "Modern websites, full-stack applications, and business software.",
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
