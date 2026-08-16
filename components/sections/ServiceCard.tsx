import * as Icons from "lucide-react";
import { Service } from "@/types";
import { ButtonLink } from "../ui/Button";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.Printer;

  return (
    <div className="card-surface group relative rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 via-purple/20 to-magenta/20">
        <Icon className="h-5 w-5 text-cyan" />
      </div>
      <h3 className="mt-4 font-semibold text-white text-base">{service.name}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{service.description}</p>
      <ButtonLink
        href={`/contact?service=${encodeURIComponent(service.name)}#quote`}
        variant="outline"
        className="mt-5 !px-4 !py-2 text-xs w-full"
      >
        Request Quote
      </ButtonLink>
    </div>
  );
}
