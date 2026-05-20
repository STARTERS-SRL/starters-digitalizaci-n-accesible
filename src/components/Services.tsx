import { Smartphone, Globe, Wrench, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Smartphone,
    title: "Desarrollo de Aplicaciones",
    desc: "Apps móviles y web a medida, rápidas y escalables, listas para crecer con tu negocio sin presupuestos imposibles.",
  },
  {
    icon: Globe,
    title: "Desarrollo de Páginas Web",
    desc: "Sitios modernos, optimizados y que convierten. Landing pages, e-commerce y portafolios profesionales.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Soporte",
    desc: "Cuidamos tu producto después del lanzamiento: actualizaciones, mejoras y respuesta inmediata.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32 px-6 lg:px-10">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Servicios</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Nuestros <span className="text-gradient">Servicios</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Soluciones digitales completas, diseñadas para impulsar tu marca sin sacrificar
              calidad ni romper el banco.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 120} className="h-full">
                <div className="group relative h-full flex flex-col glass rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-transparent" />
                    <div className="absolute inset-px rounded-2xl bg-background/90" />
                  </div>
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col flex-1 min-h-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-accent" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Conocer más <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
