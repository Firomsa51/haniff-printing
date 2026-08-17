import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hanif Printing",
    short_name: "Hanif Printing",
    description: "Professional Printing & Creative Design Services in Harar, Ethiopia.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#05070f",
    theme_color: "#0b5c3c",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    // @ts-expect-error - "serviceworker" is a valid Web App Manifest member
    // (see W3C spec) but is not yet included in Next.js's MetadataRoute.Manifest type.
    serviceworker: {
      src: "/sw.js",
      scope: "/",
      update_via_cache: "none",
    },
  } as MetadataRoute.Manifest;
}
