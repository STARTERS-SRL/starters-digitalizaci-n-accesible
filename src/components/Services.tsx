import {
  ArrowRight,
  DollarSign,
  Headphones,
  Layers,
  Monitor,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP = "https://wa.me/59167423265";

const services = [
  {
    icon: Monitor,
    title: "Desarrollo Web",
    desc: "Páginas web modernas, rápidas y optimizadas para SEO que convierten visitantes en clientes.",
  },
  {
    icon: Layers,
    title: "Aplicaciones y Sistemas",
    desc: "Sistemas a medida para gestionar tu negocio de forma eficiente y escalable.",
  },
  {
    icon: Headphones,
    title: "Mantenimiento y Soporte",
    desc: "Soporte técnico, actualizaciones y mejoras para que tu sistema siempre funcione correctamente.",
  },
];

const benefits = [
  {
    icon: Target,
    title: "Soluciones a medida",
    desc: "Desarrollamos exactamente lo que tu negocio necesita, sin plantillas limitadas.",
  },
  {
    icon: DollarSign,
    title: "Precios accesibles",
    desc: "Calidad profesional con precios justos y sin costos ocultos.",
  },
  {
    icon: Sparkles,
    title: "Tecnología moderna",
    desc: "Usamos tecnologías actuales, pensadas para el futuro.",
  },
  {
    icon: Users,
    title: "Acompañamiento real",
    desc: "Te acompañamos en cada paso, con comunicación clara y siempre constante.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden px-6 py-28 lg:px-10">
      <div className="absolute top-10 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
      <div className="absolute top-1/3 -left-32 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[130px]" />
      <div className="absolute right-0 bottom-10 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
              SERVICIOS
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Desarrollamos soluciones digitales completas, diseñadas para impulsar tu marca,
              mejorar tu presencia digital y generar resultados reales.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 100} className="h-full">
                <article className="group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-border glass p-6 shadow-2xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-accent/10 lg:p-7">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent shadow-[0_0_30px_-18px_var(--accent)]">
                      <Icon className="h-8 w-8" strokeWidth={1.8} />
                    </div>

                    <h3 className="font-display text-2xl font-bold leading-tight text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                      {service.desc}
                    </p>

                    <div className="mt-7 inline-flex items-center text-accent transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-7 w-7" strokeWidth={1.7} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.34em] text-accent md:text-base">
              ¿Por qué elegir STARTERS?
            </h3>
          </Reveal>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal key={benefit.title} delay={index * 90} className="h-full">
                  <article className="group flex h-full items-start gap-4 rounded-2xl border border-border glass p-5 shadow-2xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-foreground">
                        {benefit.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {benefit.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border glass p-7 text-center shadow-2xl shadow-primary/10 md:p-9">
            <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              ¿Tienes una idea para tu negocio?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Cuéntanos qué necesitas y te orientamos con una solución clara, accesible y a medida.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 font-semibold text-background shadow-[0_0_42px_-14px_var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_54px_-12px_var(--accent)]"
            >
              Cotizar mi proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
