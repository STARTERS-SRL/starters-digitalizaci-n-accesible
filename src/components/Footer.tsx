import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590138460840",
    className:
      "border-[#1877F2] bg-[#1877F2] text-white hover:shadow-[0_0_18px_rgba(24,119,242,0.45)]",
  },
  {
    icon: TiktokIcon,
    label: "TikTok",
    href: "https://www.tiktok.com/@starters76?_r=1&_t=ZN-96cARjJkgdS",
    className:
      "border-white/15 bg-black text-white hover:border-[#25F4EE]/70 hover:shadow-[0_0_18px_rgba(37,244,238,0.28)]",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/starters.devsoft/",
    className:
      "border-transparent bg-[linear-gradient(135deg,#feda75_0%,#fa7e1e_25%,#d62976_50%,#962fbf_75%,#4f5bd5_100%)] text-white hover:shadow-[0_0_18px_rgba(214,41,118,0.45)]",
  },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M14.25 8.5h2.25V5.2C16.1 5.15 14.75 5 13.45 5c-2.8 0-4.7 1.7-4.7 4.8v2.7H5.6v3.7h3.15V24h3.85v-7.8h3l.55-3.7H12.6v-2.35c0-1.05.3-1.65 1.65-1.65Z" />
    </svg>
  );
}

function TiktokIcon({ className }: { className?: string }) {
  const note =
    "M16.55 5.05c-1.08-.7-1.82-1.82-2.02-3.05h-3.16v12.1a2.7 2.7 0 1 1-2-2.6V8.4a5.9 5.9 0 1 0 5.16 5.85V8.2a7.05 7.05 0 0 0 4.07 1.25V6.38c-.73 0-1.42-.16-2.05-.47Z";

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d={note} fill="#25F4EE" transform="translate(-1.1 .35)" />
      <path d={note} fill="#FE2C55" transform="translate(1.05 1)" />
      <path d={note} fill="white" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.35" cy="7.65" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 py-14 lg:px-10 bg-black border-t border-white/10">
      <div className="relative mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.25fr_0.8fr]">
        <div>
          <a href="#top" className="inline-flex items-center" aria-label="Ir al inicio">
            <BrandLogo
              markClassName="h-16 w-56"
            />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
            Software profesional al alcance de todos. Conectamos tus ideas en soluciones digitales
            que transforman.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${className}`}
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
                <WhatsAppIcon className="h-5 w-5" />
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
                <WhatsAppIcon className="h-5 w-5" />
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
            {socialLinks.map(({ icon: Icon, label, href, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${className}`}
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
