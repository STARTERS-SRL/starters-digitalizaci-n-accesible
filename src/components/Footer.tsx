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
    <footer className="relative overflow-hidden px-6 py-14 lg:px-10 bg-black border-t border-white/10">
      <div className="relative mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.25fr_0.8fr]">
        <div>
          <a href="#top" className="inline-flex items-center">
            <img src="/logo.png" alt="STARTERS" className="h-11 w-auto object-contain" />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
            Software profesional al alcance de todos. Conectamos tus ideas en soluciones digitales
            que transforman.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-gray-400 transition-colors hover:border-blue-600/50 hover:text-blue-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">
            Navegación
          </h2>
          <ul className="space-y-3 text-sm text-gray-400">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-blue-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">
            Servicios
          </h2>
          <ul className="space-y-3 text-sm text-gray-400">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">
            Contacto
          </h2>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="mailto:starters.devsoft@gmail.com"
                className="inline-flex items-center gap-3 transition-colors hover:text-blue-600"
              >
                <Mail className="h-4 w-4 text-[#3B82F6]" />
                starters.devsoft@gmail.com
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#3B82F6]" />
              Teléfonos / WhatsApp
            </li>
            <li>
              <a
                href="https://wa.me/59167423265"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-blue-600"
              >
                <MessageCircle className="h-4 w-4 text-[#3B82F6]" />
                +591 67423265
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/59174129764"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 transition-colors hover:text-blue-600"
              >
                <MessageCircle className="h-4 w-4 text-[#3B82F6]" />
                +591 74129764
              </a>
            </li>
            <li className="inline-flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#3B82F6]" />
              Bolivia
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">
            Síguenos
          </h2>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-gray-400 transition-colors hover:border-blue-600/50 hover:text-blue-600"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl pt-2 text-xs text-gray-400">
        © 2025 Starters. Todos los derechos reservados.
      </div>
    </footer>
  );
}