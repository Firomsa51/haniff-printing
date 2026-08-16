"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { X, ImageOff } from "lucide-react";
import { portfolioItems, portfolioCategories } from "@/lib/portfolio";
import { PortfolioItem } from "@/types";

export default function PortfolioGallery() {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const categories = ["All", ...portfolioCategories];
  const filtered = useMemo(
    () => (active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active)),
    [active]
  );

  if (portfolioItems.length === 0) {
    return (
      <div className="card-surface rounded-2xl p-12 text-center">
        <ImageOff className="mx-auto h-10 w-10 text-slate-500" />
        <h3 className="mt-4 text-white font-semibold">Portfolio Coming Soon</h3>
        <p className="mt-2 text-slate-400 text-sm max-w-md mx-auto">
          Real HANIFF Printing project photos will appear here once uploaded. Contact us on WhatsApp to see samples in the meantime.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 no-scrollbar overflow-x-auto">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium border transition-colors focus-ring ${
              active === c
                ? "bg-gradient-to-r from-electric to-purple text-white border-transparent"
                : "border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 text-left focus-ring"
          >
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
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Close preview"
            className="absolute top-5 right-5 text-white p-2 focus-ring rounded-full"
            onClick={() => setLightbox(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full aspect-[4/3]">
              <Image src={lightbox.image} alt={lightbox.title} fill className="object-contain" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-semibold">{lightbox.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
