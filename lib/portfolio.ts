import { PortfolioItem } from "@/types";

// Add more real HANIFF Printing project photos here after placing the image
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
];

export const portfolioCategories = Array.from(
  new Set(portfolioItems.map((p) => p.category))
);
