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
import { WhatsAppIcon } from "./WhatsAppIcon";

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
    <section id="servicios" className="relative overflow-hidden px-6 py-28 lg:px-10 bg-black">
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#3B82F6]">
              SERVICIOS
            </div>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Nuestros <span className="text-[#3B82F6]">Servicios</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
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
                <article className="group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black p-6 transition-colors duration-300 hover:border-blue-600/50 lg:p-7">
                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-[#3B82F6]">
                      <Icon className="h-8 w-8" strokeWidth={1.8} />
                    </div>

                    <h3 className="font-display text-2xl font-bold leading-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-gray-400">
                      {service.desc}
                    </p>

                    <div className="mt-7 inline-flex items-center text-[#3B82F6] transition-colors duration-300 group-hover:text-[#3B82F6]">
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
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.34em] text-[#3B82F6] md:text-base">
              ¿Por qué elegir STARTERS?
            </h3>
          </Reveal>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal key={benefit.title} delay={index * 90} className="h-full">
                  <article className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-black p-5 transition-colors duration-300 hover:border-blue-600/50">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-[#3B82F6]">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">
                        {benefit.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
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
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-white/10 bg-black p-7 text-center md:p-9">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
              ¿Tienes una idea para tu negocio?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
              Cuéntanos qué necesitas y te orientamos con una solución clara, accesible y a medida.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Cotizar mi proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
