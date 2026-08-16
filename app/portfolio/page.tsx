import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PortfolioGallery from "@/components/sections/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio | HANIF Printing",
  description:
    "See real printing and design work by HANIF Printing — banners, business cards, T-shirts, branding and more from Harar, Ethiopia.",
};

export default function PortfolioPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          subtitle="A collection of real projects completed by HANIF Printing."
          center
        />
        <PortfolioGallery />
      </Container>
    </div>
  );
}
