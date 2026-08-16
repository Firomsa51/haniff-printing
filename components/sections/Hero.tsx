import { MessageCircle, FileText, MapPin } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import { business } from "@/lib/business";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-electric/20 via-purple/20 to-magenta/20 blur-3xl"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            <MapPin className="h-3.5 w-3.5 text-cyan" /> Harar • Ras Hotel
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            HANIF <span className="gradient-text">PRINTING</span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-200">
            Professional Printing &amp; Creative Design
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            {business.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/contact#quote" variant="primary" icon={<FileText className="h-4 w-4" />}>
              Get a Quote
            </ButtonLink>
            <ButtonLink
              href={business.whatsappLink}
              target="_blank"
              variant="whatsapp"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              WhatsApp Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
