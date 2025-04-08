import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";
import Head from "next/head";

const geistSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Điện lạnh Anh Vũ",
  description:
    "Sửa chữa điện lạnh, Sửa chữa điện lạnh 24h, sua chua dien lanh, sua chua dien lanh 24h, sua chua dien lanh gia re, sua chua dien lanh gia re tai ha noi",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Dịch vụ sửa điện lạnh tại Hà Nội | Uy tín - 0972227282</title>
        <meta
          name="description"
          content="Chuyên sửa chữa, bảo dưỡng điều hoà tại nhà Đông Dư Hà Nội. Sua dien lanh gia re, sua dien lanh tai dong du ha noi."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Điện lạnh Anh Vũ",
              name: "Điện lạnh Anh Vũ",
              image: "https://domain.com/logo.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "26 Hồng Hà - Đông Dư hạ - Gia Lâm",
                addressLocality: "Hà Nội",
                addressCountry: "VN",
              },
              telephone: "+84 972227282",
            }),
          }}
        />

        <meta
          property="og:title"
          content="Dịch vụ sửa điều hoà tại Hà Nội | Uy tín - Nhanh chóng"
        />
        <meta
          property="og:description"
          content="Chuyên sửa chữa, bảo dưỡng điều hoà tại nhà Hà Nội. Thợ lành nghề, giá cả hợp lý."
        />
        <meta
          property="og:image"
          content="https://codegiare.com/images/banner.jpg"
        />
        <meta property="og:url" content="https://codegiare.com" />
        <meta property="og:type" content="website" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
