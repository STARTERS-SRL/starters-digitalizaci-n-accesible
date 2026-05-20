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
    <section id="contacto" className="relative py-32 px-6 lg:px-10">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Contacto</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Hablemos de tu <span className="text-gradient">próximo proyecto</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <form onSubmit={onSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Nombre</label>
                <input
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-background/40 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-background/40 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Mensaje</label>
                <textarea
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-lg bg-background/40 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-medium bg-gradient-to-r from-primary to-accent text-background hover:shadow-[0_0_40px_-5px_var(--accent)] transition-all"
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
                className="block glass rounded-2xl p-6 text-center hover:border-accent/50 transition-all group"
              >
                <div className="text-sm text-muted-foreground">¿Prefieres lo rápido?</div>
                <div className="mt-2 font-display font-bold text-xl text-gradient">
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
    <div className="glass rounded-2xl p-6 flex gap-5 hover:border-accent/40 transition-all">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div>
        <div className="font-display font-semibold mb-1">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-muted-foreground">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
