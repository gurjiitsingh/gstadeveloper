import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/SiteContext/SiteProvider";
import { BargerMenu } from "@/components/Bargermenu/BargerMenu"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

import { Roboto } from 'next/font/google';
import "@/css/style.css"
import HeroSection from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400', '700'], // You can choose weights
//   display: 'swap',
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Master WordPress with IT10x ",
  description: "Step-by-step tutorials, code snippets, and best practices for customizing WordPress like a pro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Fonts in head */}
        <link
          href="https://fonts.googleapis.com/css2?family=Days+One&family=Dosis&family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body >
        <SiteProvider>
        <BargerMenu />
         <div className="w-full mx-auto bg-gray-100 text-gray-900">
              {/* Header */}
           <Header />
        <HeroSection />
        {children}
           <Footer />
        </div>
        </SiteProvider>
        
      </body>
    </html>
  );
}
