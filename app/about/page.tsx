import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us | HANIFF Printing",
  description:
    "HANIFF Printing is a printing, graphic design and branding business based in Harar, Ethiopia, focused on quality, creativity, and customer-focused service.",
};

const focusPoints = [
  "Quality-driven printing on every job",
  "Creative, original graphic design",
  "A wide range of printing and branding services",
  "Reliable, customer-focused communication",
  "Convenient ordering via WhatsApp",
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="About Us" title={`About ${business.name}`} center />
        <div className="mx-auto max-w-3xl space-y-6 text-slate-300 leading-relaxed">
          <p>
            HANIFF Printing is a printing, graphic design, and branding business based in{" "}
            {business.city}, {business.country}, located near {business.landmark}. We work with
            businesses, organizations, event organizers, and individuals who need reliable,
            professional print and design solutions.
          </p>
          <p>
            Our focus is on producing clean, professional design work paired with dependable
            printing — from everyday items like business cards and flyers to larger projects such
            as banners, billboards, and branded merchandise.
          </p>
          <p>
            We work closely with each customer to understand their requirements before designing
            or printing, so the final result matches what the business or event actually needs.
          </p>

          <div className="card-surface rounded-2xl p-6 sm:p-8 mt-8">
            <h2 className="text-white font-semibold mb-4">What We Focus On</h2>
            <ul className="space-y-3">
              {focusPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
