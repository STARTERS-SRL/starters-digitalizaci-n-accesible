"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    toast.success("¡Mensaje enviado!", {
      description: "Te responderemos muy pronto. Gracias por escribirnos.",
    });
    setForm({ nombre: "", email: "", mensaje: "" });
  }

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

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-black p-8 space-y-5">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Nombre</label>
                <input
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-white/10 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 transition text-white placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-white/10 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 transition text-white placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Mensaje</label>
                <textarea
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-white/10 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 transition resize-none text-white placeholder:text-gray-600"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4" /> Enviar Mensaje
              </button>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-5">
              <ContactCard icon={Mail} title="Email" lines={["starters.devsoft@gmail.com"]} />
              <ContactCard
                icon={Phone}
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
                <div className="mt-2 font-display font-bold text-xl text-[#3B82F6]">
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
    <div className="rounded-2xl border border-white/10 bg-black p-6 flex gap-5 hover:border-blue-600/50 transition-colors">
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