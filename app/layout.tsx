import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "IDM Utility Toolkit — Freeze, Activate & Protect IDM",
  description:
    "The ultimate utility for Internet Download Manager. Freeze trials, activate, reset, protect, and manage your IDM setup from one beautiful interface.",
  keywords: ["IDM", "Internet Download Manager", "toolkit", "freeze trial", "activate", "registry"],
  authors: [{ name: "Karim Antar" }],
  openGraph: {
    title: "IDM Utility Toolkit",
    description: "Freeze, activate, reset and protect IDM — all from one interface.",
    url: "https://idm.karims.dev",
    siteName: "IDM Utility Toolkit",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IDM Utility Toolkit",
    description: "Freeze, activate, reset and protect IDM — all from one interface.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
