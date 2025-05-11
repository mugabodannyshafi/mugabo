import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shafi Danny MUGABO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/shafiLogo.png" type="image/png" />
        <title>Shafi Danny MUGABO</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-Poppins antialiased overflow-x-hidden`}
      >
        <GradientBackground>{children}</GradientBackground>
      </body>
    </html>
  );
}
