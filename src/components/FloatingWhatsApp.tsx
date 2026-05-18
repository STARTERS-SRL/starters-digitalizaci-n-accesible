import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/59167423265"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-accent/60 blur-xl animate-pulse-glow" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-background shadow-2xl shadow-accent/40 group-hover:scale-110 transition-transform">
        <MessageCircle className="w-6 h-6" />
      </span>
    </a>
  );
}
