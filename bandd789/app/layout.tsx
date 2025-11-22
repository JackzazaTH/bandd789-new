import React from "react";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import AppClientLayout from "./AppClientLayout";


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
  title: "DDHOUSE ศูนย์รับสร้างบ้าน บ้านดีดีวิศวกรรม | Modern Home Design",
  description: "ศูนย์รับสร้างบ้าน บ้านดีดีวิศวกรรม รับสร้างบ้านคุณภาพ การออกแบบทันสมัย ทั่วประเทศ พร้อมให้คำปรึกษาจากผู้เชี่ยวชาญ (DDHOUSE - Professional Home Builder & Design Services)",
  keywords: ["รับสร้างบ้าน", "แบบบ้าน", "บ้านดีดีวิศวกรรม", "DDHOUSE", "Home Builder Thailand", "Modern Home Design"],
  openGraph: {
    title: "DDHOUSE ศูนย์รับสร้างบ้าน บ้านดีดีวิศวกรรม | Modern Home Design",
    description: "ศูนย์รับสร้างบ้าน บ้านดีดีวิศวกรรม รับสร้างบ้านคุณภาพ การออกแบบทันสมัย ทั่วประเทศ พร้อมให้คำปรึกษาจากผู้เชี่ยวชาญ",
    images: ["https://i.ibb.co/wFCmP663/logo.jpg"],
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
      <body className={`${inter.variable} ${notoSansThai.variable} font-sans bg-gray-50 text-gray-800`}>
        <AppProvider>
          <AppClientLayout>{children}</AppClientLayout>
        </AppProvider>
      </body>
    </html>
  );
}