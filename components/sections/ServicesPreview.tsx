import { services } from "@/lib/services";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { ButtonLink } from "../ui/Button";
import ServiceCard from "./ServiceCard";

export default function ServicesPreview() {
  const featured = services.slice(0, 8);
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Printing & Design Services"
          subtitle="From business branding to large-scale advertising, HANIF Printing covers a wide range of professional printing needs."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/services" variant="outline">
            View All Services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
