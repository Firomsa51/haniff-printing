import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";
import { serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | HANIF Printing",
  description:
    "Explore HANIF Printing's full range of services: graphics design, banners, business cards, T-shirts, mugs, ID cards, large format printing and more in Harar.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="All Printing & Design Services"
          subtitle="Everything HANIF Printing offers, organized by category. Tap any service to request a quote."
          center
        />
        <div className="space-y-16">
          {serviceCategories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-xl font-bold text-white mb-6">{cat.name}</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {cat.services.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
