import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-X4KYLM090D";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SaaSPedia — AI-Era SaaS Comparison & Reviews",
    template: "%s | SaaSPedia",
  },
  description:
    "Honest comparisons and reviews of SaaS tools for the AI era. Written by engineers, for engineers.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://saaspedia.dev"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SaaSPedia",
  },
  verification: {
    google: "B2HQXwxEozQlbt6WStrsYsd9E5n_QageFoagcxT4pEA",
    other: {
      "impact-site-verification": ["a665fd3e-4a3f-4de6-8353-ccbad7e5914a"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-surface-container-lowest"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
