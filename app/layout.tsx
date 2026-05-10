import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IDM Utility Toolkit",
  description: "The ultimate utility for managing Internet Download Manager — freeze trials, activate, reset, and protect your setup.",
  keywords: ["IDM", "Internet Download Manager", "toolkit", "utility", "activation", "freeze trial"],
  openGraph: {
    title: "IDM Utility Toolkit",
    description: "The ultimate IDM utility — freeze, activate, reset, and protect.",
    url: "https://idm.karims.dev",
    siteName: "IDM Utility Toolkit",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
