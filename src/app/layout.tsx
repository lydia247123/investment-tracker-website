import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Investment Tracker Free - Free Personal Investment Tracking Software",
  description: "Track stocks, funds, bonds, time deposits, and precious metals with our free, open-source desktop application. Privacy-first, offline-capable, and packed with interactive charts.",
  keywords: ["investment tracker", "portfolio management", "stock tracking", "precious metals", "free investment software"],
  authors: [{ name: "Lydia", url: "mailto:lydia247@163.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
