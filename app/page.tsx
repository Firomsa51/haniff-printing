import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyHaniff from "@/components/sections/WhyHaniff";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Promotions from "@/components/sections/Promotions";
import CTA from "@/components/sections/CTA";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyHaniff />
      <PortfolioPreview />
      <Promotions />
      <CTA />
      <ContactSection />
    </>
  );
}
