import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://haniffprinting.com"),
  title: "HANIF Printing | Professional Printing & Graphic Design in Harar",
  description:
    "HANIF Printing provides professional printing, graphic design, branding, banners, business cards, T-shirts, large format printing and more in Harar, Ethiopia.",
  icons: { icon: "/images/haniff-logo.png" },
  openGraph: {
    title: "HANIF Printing | Professional Printing & Graphic Design in Harar",
    description:
      "HANIF Printing provides professional printing, graphic design, branding, banners, business cards, T-shirts, large format printing and more in Harar, Ethiopia.",
    url: "https://haniffprinting.com",
    siteName: "HANIF Printing",
    images: [{ url: "/images/haniff-logo.png", width: 1200, height: 1200, alt: "HANIF Printing" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HANIF Printing | Professional Printing & Graphic Design in Harar",
    description:
      "Professional printing, graphic design, and branding services in Harar, Ethiopia.",
    images: ["/images/haniff-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased pb-16 lg:pb-0">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
