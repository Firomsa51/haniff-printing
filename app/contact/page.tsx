import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import QuoteForm from "@/components/sections/QuoteForm";
import { business, getMapsUrl } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact & Get a Quote | HANIFF Printing",
  description:
    "Contact HANIFF Printing in Harar, Ethiopia. Call, WhatsApp, or send a quotation request for printing, design, and branding services.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Contact" title="Get In Touch" center />

        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-2 card-surface rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <h3 className="text-white font-semibold">{business.name}</h3>
              <p className="text-sm text-slate-400 flex items-center gap-1.5 mt-1">
                <MapPin className="h-4 w-4 text-cyan" /> {business.addressLine}
              </p>
            </div>

            <div className="space-y-3">
              {business.phones.map((p) => (
                <ButtonLink
                  key={p.value}
                  href={`tel:${p.value}`}
                  variant="secondary"
                  icon={<Phone className="h-4 w-4" />}
                  className="w-full"
                >
                  {p.value}
                </ButtonLink>
              ))}
              <ButtonLink
                href={business.whatsappLink}
                target="_blank"
                variant="whatsapp"
                icon={<MessageCircle className="h-4 w-4" />}
                className="w-full"
              >
                Chat on WhatsApp
              </ButtonLink>
              <ButtonLink
                href={getMapsUrl()}
                target="_blank"
                variant="outline"
                icon={<MapPin className="h-4 w-4" />}
                className="w-full"
              >
                View on Google Maps
              </ButtonLink>
            </div>
          </div>

          <div id="quote" className="lg:col-span-3 scroll-mt-24">
            <h2 className="text-lg font-semibold text-white mb-4">Request a Quotation</h2>
            <Suspense fallback={<div className="text-slate-500 text-sm">Loading form…</div>}>
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  );
}
