import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import AppClientLayout from "./AppClientLayout";
// FIX: Import ReactNode to resolve type errors.
import type { ReactNode } from "react";


const inter = Inter({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "DDHOUSE - ศูนย์รับสร้างบ้าน บ้านดีดีวิศวกรรม",
  description: "รับสร้างบ้านอุบล รับสร้างบ้านศรีสะเกษ รับสร้างบ้านยโสธร รับสร้างบ้านทั่วไทย",
  openGraph: {
    title: "DDHOUSE - ศูนย์รับสร้างบ้าน บ้านดีดีวิศวกรรม",
    description: "รับสร้างบ้านอุบล รับสร้างบ้านศรีสะเกษ รับสร้างบ้านยโสธร รับสร้างบ้านทั่วไทย",
    images: ["https://i.ibb.co/wFCmP663/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  // FIX: Use the imported ReactNode type.
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSansThai.variable} font-sans bg-gray-50 text-gray-800`}>
        <AppProvider>
          <AppClientLayout>{children}</AppClientLayout>
        </AppProvider>
      </body>
    </html>
  );
}