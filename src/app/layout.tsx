import type { Metadata } from "next";
import { Roboto , Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";

const geistSans = Roboto ({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Điện lạnh Anh Vũ",
  description: "Sửa chữa điện lạnh, Sửa chữa điện lạnh 24h, sua chua dien lanh, sua chua dien lanh 24h, sua chua dien lanh gia re, sua chua dien lanh gia re tai ha noi",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
