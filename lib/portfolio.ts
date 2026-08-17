import { PortfolioItem } from "@/types";

// Add more real HANIF Printing project photos/videos here after placing the
// files inside /public/images/portfolio/. Nothing else needs to change.

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Fish Shop Promotional Banner",
    category: "Banners",
    image: "/images/portfolio/fish-shop-banner.jpg",
    description: "Custom promotional banner design and print for a local fish shop.",
  },
  {
    id: "2",
    title: "Safety Vest Branding",
    category: "Custom Merchandise",
    image: "/images/portfolio/safety-vest-branding.jpg",
    description: "Custom branded safety vest printing for workplace and event use.",
  },
  {
    id: "3",
    title: "Custom Text Banner Print",
    category: "Banners",
    image: "/images/portfolio/custom-banner-print-thumb.jpg",
    video: "/images/portfolio/custom-banner-print.mp4",
    description: "Custom Afaan Oromo text banner designed and printed by HANIF Printing.",
  },
  {
    id: "4",
    title: "Custom Cap Printing",
    category: "Custom Merchandise",
    image: "/images/portfolio/cap-print.jpg",
    video: "/images/portfolio/cap-print.mp4",
    description: "Custom printed caps produced by HANIF Printing.",
  },
];

export const portfolioCategories = Array.from(
  new Set(portfolioItems.map((p) => p.category))
);
