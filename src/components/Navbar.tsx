"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/59167423265";
const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass bg-black/80" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 py-4 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 group shrink-0">
          <img src="/logo.png" alt="Starters Logo" className="h-10 w-auto object-contain" />
          <div className="leading-tight">
            <div className="font-bold text-xl text-foreground uppercase tracking-[0.35em]">
              STARTERS
            </div>
            <div className="text-[11px] font-light uppercase tracking-[0.22em] text-muted-foreground">
              SOFTWARE DEVELOPMENT
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Cotizar por WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="sm:hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Cotizar por WhatsApp
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
