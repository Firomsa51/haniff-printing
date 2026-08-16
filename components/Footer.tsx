import Link from "next/link";
import { Phone, MessageCircle, Facebook, Send, Music2, Printer } from "lucide-react";
import { business } from "@/lib/business";
import { socials } from "@/lib/socials";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric via-purple to-magenta">
              <Printer className="h-5 w-5 text-white" />
            </span>
            <span className="font-bold text-white">HANIFF PRINTING</span>
          </div>
          <p className="text-sm text-slate-400">{business.tagline}</p>
          <p className="text-sm text-slate-500 mt-2">{business.addressLine}</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {business.phones.map((p) => (
              <li key={p.value}>
                <a href={`tel:${p.value}`} className="flex items-center gap-2 hover:text-cyan focus-ring rounded-md">
                  <Phone className="h-4 w-4" /> {p.value}
                </a>
              </li>
            ))}
            <li>
              
                href={business.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan focus-ring rounded-md"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-cyan focus-ring rounded-md">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            
              href={business.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-cyan focus-ring"
            >
              <MessageCircle className="h-4 w-4 text-white" />
            </a>
            {socials.facebookUrl ? (
              <a href={socials.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-cyan focus-ring">
                <Facebook className="h-4 w-4 text-white" />
              </a>
            ) : (
              <span title="Facebook link coming soon" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 opacity-40">
                <Facebook className="h-4 w-4 text-white" />
              </span>
            )}
            {socials.tiktokUrl ? (
              <a href={socials.tiktokUrl} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-cyan focus-ring">
                <Music2 className="h-4 w-4 text-white" />
              </a>
            ) : (
              <span title="TikTok link coming soon" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 opacity-40">
                <Music2 className="h-4 w-4 text-white" />
              </span>
            )}
            {socials.telegramUrl ? (
              <a href={socials.telegramUrl} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-cyan focus-ring">
                <Send className="h-4 w-4 text-white" />
              </a>
            ) : (
              <span title="Telegram link coming soon" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 opacity-40">
                <Send className="h-4 w-4 text-white" />
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {year} HANIFF PRINTING. All rights reserved.
      </div>
    </footer>
  );
}
