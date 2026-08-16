import { PortfolioItem } from "@/types";

// Add real HANIFF Printing project photos here after placing the image
// files inside /public/images/portfolio/. Nothing else needs to change.
//
// Example:
// {
//   id: "1",
//   title: "Wedding Banner",
//   category: "Banners",
//   image: "/images/portfolio/wedding-banner.jpg",
//   description: "Custom printed wedding banner for a client event in Harar.",
// }

export const portfolioItems: PortfolioItem[] = [];

export const portfolioCategories = Array.from(
  new Set(portfolioItems.map((p) => p.category))
);
