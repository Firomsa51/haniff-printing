import { MessageCircle, FileText } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import Container from "../ui/Container";
import { business } from "@/lib/business";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 border border-white/10 p-10 sm:p-14 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-electric/20 via-purple/20 to-magenta/20 blur-3xl"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-white relative">
            Ready to bring your project to life?
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto relative">
            Send us your requirements and get a fast, professional response from HANIFF Printing in {business.city}.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <ButtonLink href="/contact#quote" variant="primary" icon={<FileText className="h-4 w-4" />}>
              Get a Quote
            </ButtonLink>
            <ButtonLink href={business.whatsappLink} target="_blank" variant="whatsapp" icon={<MessageCircle className="h-4 w-4" />}>
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
