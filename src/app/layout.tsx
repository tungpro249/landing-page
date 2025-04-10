import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";
import Script from "next/script";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Điện lạnh Anh Vũ",
  description:
    "Sửa chữa điện lạnh, Sửa chữa điện lạnh 24h, sua chua dien lanh, sua chua dien lanh 24h, sua chua dien lanh gia re, sua chua dien lanh gia re tai ha noi",
  openGraph: {
    title: "Dịch vụ sửa điều hoà tại Hà Nội | Uy tín - Nhanh chóng",
    description:
      "Chuyên sửa chữa, bảo dưỡng điều hoà tại nhà Hà Nội. Thợ lành nghề, giá cả hợp lý.",
    images: ["https://codegiare.com/public/banner.jpg"],
    url: "https://codegiare.com",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        <Header />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Điện lạnh Anh Vũ",
              image:
                "https://res.cloudinary.com/df0psnigh/image/upload/v1744127872/baner_ygunn1.png",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
