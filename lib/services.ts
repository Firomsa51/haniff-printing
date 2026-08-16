import { Service, ServiceCategory } from "@/types";

export const services: Service[] = [
  { slug: "graphics-design", name: "Graphics Design", category: "Design", icon: "PenTool", description: "Custom graphic design for logos, adverts, and branded visuals." },
  { slug: "branding-design-print", name: "Branding Design & Print", category: "Design", icon: "Sparkles", description: "Complete brand identity design and printed brand materials." },
  { slug: "book-cover-design-print", name: "Book Cover Design & Print", category: "Design", icon: "BookOpen", description: "Professional book cover design and printing." },

  { slug: "banner-design-print", name: "Banner Design & Print", category: "Banners & Signage", icon: "Flag", description: "Eye-catching banners designed and printed for any occasion." },
  { slug: "roll-up-banner", name: "Roll-Up Banner", category: "Banners & Signage", icon: "PanelBottom", description: "Portable roll-up banners for events, expos, and shops." },
  { slug: "billboard", name: "Billboard Design, Print & Advertising", category: "Banners & Signage", icon: "Building2", description: "Large-scale billboard design, printing, and advertising support." },
  { slug: "large-format-print", name: "Large Format Print", category: "Banners & Signage", icon: "Maximize", description: "High-quality large format printing for big visual impact." },

  { slug: "flyer-design-print", name: "Flyer Design & Print", category: "Marketing Print", icon: "FileText", description: "Attractive flyers designed and printed for promotions." },
  { slug: "poster-design-print", name: "Poster Design & Print", category: "Marketing Print", icon: "Image", description: "Bold poster design and printing for events and campaigns." },
  { slug: "brochure-design-print", name: "Brochure Design & Print", category: "Marketing Print", icon: "BookText", description: "Professional brochures that present your business clearly." },
  { slug: "business-card-design-print", name: "Business Card Design & Print", category: "Marketing Print", icon: "IdCard", description: "Elegant business cards designed and printed to impress." },
  { slug: "ticket-design-print", name: "Ticket Design & Print", category: "Marketing Print", icon: "Ticket", description: "Custom event and entry ticket design and printing." },

  { slug: "id-card-print", name: "ID Card Print", category: "Cards & IDs", icon: "BadgeCheck", description: "Durable ID card printing for staff, students, and members." },
  { slug: "stamp-print", name: "Stamp Print", category: "Cards & IDs", icon: "Stamp", description: "Custom office and business stamp printing." },

  { slug: "mug-print", name: "Mug Print", category: "Custom Merchandise", icon: "Coffee", description: "Personalized mug printing for gifts and branding." },
  { slug: "cap-print", name: "Cap Print", category: "Custom Merchandise", icon: "Crown", description: "Custom cap printing for teams, events, and businesses." },
  { slug: "t-shirt-print", name: "T-Shirt Print", category: "Custom Merchandise", icon: "Shirt", description: "Custom T-shirt printing for events, teams, and brands." },
  { slug: "key-chain-print", name: "Key Chain Print", category: "Custom Merchandise", icon: "KeyRound", description: "Personalized keychain printing for gifts and promotions." },
  { slug: "print-on-pen", name: "Print on Pen", category: "Custom Merchandise", icon: "PenLine", description: "Branded pen printing for corporate giveaways." },
  { slug: "print-on-everything", name: "Print on Everything", category: "Custom Merchandise", icon: "PackageSearch", description: "Custom printing on a wide range of items — ask us what's possible." },
];

export const serviceCategories: ServiceCategory[] = Array.from(
  new Set(services.map((s) => s.category))
).map((category) => ({
  name: category,
  services: services.filter((s) => s.category === category),
}));

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
