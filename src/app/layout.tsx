"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";
import { NextSeo  } from "next-seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Điện lạnh Anh Vũ</title>
        <meta name="description" content="Sửa chữa điện lạnh, Sửa chữa điện lạnh 24h, sua chua dien lanh, sua chua dien lanh 24h, sua chua dien lanh gia re, sua chua dien lanh gia re tai ha noi" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextSeo  
          title="Sửa chữa điện lạnh"
          description="Landing page tốt nhất giúp bạn tối ưu doanh số."
          openGraph={{
            type: "website",
            locale: "vi_VN",
            url: "https://yourwebsite.com",
            title: "Sửa chữa điện lạnh",
            description: "Landing page tốt nhất giúp bạn tối ưu doanh số.",
            images: [
              {
                url: "https://yourwebsite.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Landing Page",
              },
            ],
            siteName: "My Landing Page",
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
