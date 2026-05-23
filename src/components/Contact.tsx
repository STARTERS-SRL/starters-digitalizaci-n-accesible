"use client";

import { Mail, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Contact() {
  return (
    <section id="contacto" className="relative py-32 px-6 lg:px-10 bg-black">
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-[#3B82F6] mb-4">Contacto</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Hablemos de tu <span className="text-[#3B82F6]">próximo proyecto</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          <Reveal delay={150}>
            <div className="space-y-5">
              <ContactCard icon={Mail} title="Email" lines={["starters.devsoft@gmail.com"]} />
              <ContactCard
                icon={WhatsAppIcon}
                title="Teléfonos / WhatsApp"
                lines={["+591 67423265", "+591 74129764"]}
              />
              <ContactCard
                icon={Clock}
                title="Atención 24/7"
                lines={["Respondemos al instante, cualquier día, a cualquier hora."]}
              />
              <a
                href="https://wa.me/59167423265"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-black p-6 text-center hover:border-blue-600/50 transition-colors group"
              >
                <div className="text-sm text-gray-400">¿Prefieres lo rápido?</div>
                <div className="mt-2 inline-flex items-center justify-center gap-2 font-display font-bold text-xl text-[#3B82F6]">
                  <WhatsAppIcon className="h-6 w-6" />
                  Escríbenos por WhatsApp →
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-6 flex flex-col sm:flex-row sm:items-center gap-5 hover:border-blue-600/50 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#3B82F6]" />
      </div>
      <div>
        <div className="font-display font-semibold mb-1 text-white">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-gray-400">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
