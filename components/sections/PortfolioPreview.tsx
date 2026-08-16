import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { ButtonLink } from "../ui/Button";
import { ImageOff } from "lucide-react";

export default function PortfolioPreview() {
  const items = portfolioItems.slice(0, 6);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Our Work" title="Recent Projects" subtitle="A look at real work produced by HANIFF Printing." />

        {items.length === 0 ? (
          <div className="card-surface rounded-2xl p-10 text-center">
            <ImageOff className="mx-auto h-8 w-8 text-slate-500" />
            <p className="mt-4 text-slate-400">
              Portfolio photos are being added soon. Check back shortly to see real HANIFF Printing projects.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 bg-navy-900/80">
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/portfolio" variant="outline">
            View Full Portfolio
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
