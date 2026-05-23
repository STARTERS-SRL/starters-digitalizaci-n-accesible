import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/59167423265"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40"
    >
      <span className="flex items-center justify-center w-14 h-14 transition-transform hover:scale-105">
        <WhatsAppIcon className="w-14 h-14 drop-shadow-[0_0_18px_rgba(37,211,102,0.45)]" />
      </span>
    </a>
  );
}
