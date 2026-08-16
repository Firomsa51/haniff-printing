import { CheckCircle2, Palette, Layers, Users, MessageCircle, ThumbsUp } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const points = [
  { icon: CheckCircle2, title: "Quality-Focused Printing", desc: "Careful attention to detail on every print job, big or small." },
  { icon: Palette, title: "Creative Design", desc: "Custom, original design work tailored to your brand and message." },
  { icon: Layers, title: "Wide Service Range", desc: "From business cards to billboards, all under one roof." },
  { icon: ThumbsUp, title: "Professional Presentation", desc: "Work that represents your business the right way." },
  { icon: Users, title: "Customer-Focused Service", desc: "We listen to your requirements and guide you to the right solution." },
  { icon: MessageCircle, title: "Convenient WhatsApp Communication", desc: "Easy ordering and follow-up directly through WhatsApp." },
];

export default function WhyHaniff() {
  return (
    <section className="py-16 sm:py-24 bg-navy-900/60">
      <Container>
        <SectionHeading eyebrow="Why HANIFF" title="Why Choose HANIFF Printing" center />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="card-surface rounded-2xl p-6">
              <p.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
