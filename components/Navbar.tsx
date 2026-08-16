"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "./ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-950/90 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link href="/" className="flex items-center gap-2 focus-ring rounded-md">
          <Image
            src="/images/haniff-logo.png"
            alt="HANIFF Printing logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-bold text-white tracking-wide">
            HANIFF <span className="gradient-text">PRINTING</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors focus-ring rounded-md ${
                  pathname === l.href ? "text-cyan" : "text-slate-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="/contact#quote" variant="primary" className="!px-5 !py-2.5 text-sm">
            Get a Quote
          </ButtonLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ButtonLink href="/contact#quote" variant="primary" className="!px-4 !py-2 text-xs">
            Get Quote
          </ButtonLink>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-white focus-ring rounded-md"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-950/95 backdrop-blur px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block rounded-lg px-3 py-3 text-base font-medium focus-ring ${
                    pathname === l.href
                      ? "bg-white/5 text-cyan"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
