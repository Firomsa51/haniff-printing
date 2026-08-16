import { Phone, MessageCircle, MapPin, FileText } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { ButtonLink } from "../ui/Button";
import { business, getMapsUrl } from "@/lib/business";

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-24 bg-navy-900/60">
      <Container>
        <SectionHeading eyebrow="Get In Touch" title="Visit or Contact HANIFF Printing" center />
        <div className="mx-auto max-w-2xl card-surface rounded-2xl p-8 text-center">
          <p className="text-white font-semibold">{business.name}</p>
          <p className="text-slate-400 text-sm mt-1 flex items-center justify-center gap-1">
            <MapPin className="h-4 w-4 text-cyan" /> {business.addressLine}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`tel:${business.phones[0].value}`} variant="secondary" icon={<Phone className="h-4 w-4" />}>
              {business.phones[0].value}
            </ButtonLink>
            <ButtonLink href={`tel:${business.phones[1].value}`} variant="secondary" icon={<Phone className="h-4 w-4" />}>
              {business.phones[1].value}
            </ButtonLink>
            <ButtonLink href={business.whatsappLink} target="_blank" variant="whatsapp" icon={<MessageCircle className="h-4 w-4" />}>
              WhatsApp
            </ButtonLink>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <ButtonLink href={getMapsUrl()} target="_blank" variant="outline" icon={<MapPin className="h-4 w-4" />}>
              View on Google Maps
            </ButtonLink>
            <ButtonLink href="/contact#quote" variant="primary" icon={<FileText className="h-4 w-4" />}>
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
