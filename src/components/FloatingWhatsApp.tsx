import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/59167423265"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40"
    >
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </span>
    </a>
  );
}
