import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import StructuredData from "@/components/StructuredData";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import InstallPrompt from "@/components/InstallPrompt";

export const viewport: Viewport = {
  themeColor: "#0b5c3c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://haniffprinting.com"),
  title: "Hanif Printing | Professional Printing & Graphic Design in Harar",
  description:
    "Hanif Printing provides professional printing, graphic design, branding, banners, business cards, T-shirts, large format printing and more in Harar, Ethiopia.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hanif Printing",
  },
  openGraph: {
    title: "Hanif Printing | Professional Printing & Graphic Design in Harar",
    description:
      "Hanif Printing provides professional printing, graphic design, branding, banners, business cards, T-shirts, large format printing and more in Harar, Ethiopia.",
    url: "https://haniffprinting.com",
    siteName: "Hanif Printing",
    images: [{ url: "/images/haniff-logo.png", width: 1200, height: 1200, alt: "Hanif Printing" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanif Printing | Professional Printing & Graphic Design in Harar",
    description: "Professional printing, graphic design, and branding services in Harar, Ethiopia.",
    images: ["/images/haniff-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased pb-16 lg:pb-0">
        <StructuredData />
        <ServiceWorkerRegister />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
        <InstallPrompt />
      </body>
    </html>
  );
}
