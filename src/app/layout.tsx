import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
