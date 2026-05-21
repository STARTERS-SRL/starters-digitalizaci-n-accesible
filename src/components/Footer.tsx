import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";

const navigationLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  "Desarrollo Web",
  "Aplicaciones y Sistemas",
  "Mantenimiento y Soporte",
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-14 lg:px-10">
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-primary/15 blur-[110px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.25fr_0.8fr]">
        <div>
          <a href="#top" className="inline-flex items-center">
            <img src="/logo.png" alt="STARTERS" className="h-11 w-auto object-contain" />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Software profesional al alcance de todos. Conectamos tus ideas en soluciones digitales
            que transforman.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-muted-foreground transition hover:border-accent/50 hover:text-accent hover:shadow-[0_0_28px_-16px_var(--accent)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
            Navegación
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
            Servicios
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
            Contacto
          </h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href="mailto:starters.devsoft@gmail.com"
                className="inline-flex items-center gap-3 transition hover:text-accent"
              >
                <Mail className="h-4 w-4 text-accent" />
                starters.devsoft@gmail.com
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              Teléfonos / WhatsApp
            </li>
            <li>
              <a
                href="https://wa.me/59167423265"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 transition hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                +591 67423265
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/59174129764"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 transition hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" />
                +591 74129764
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" />
              Bolivia
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
            Síguenos
          </h2>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-muted-foreground transition hover:border-accent/50 hover:text-accent hover:shadow-[0_0_28px_-16px_var(--accent)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl pt-2 text-xs text-muted-foreground">
        © 2025 Starters. Todos los derechos reservados.
      </div>
    </footer>
  );
}
