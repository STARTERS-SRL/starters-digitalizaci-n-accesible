import { CheckCircle, ClipboardList, Code2, Headphones, Layers, Rocket, Search } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  "Soluciones adaptadas a tu negocio",
  "Tecnología moderna y escalable",
  "Comunicación directa durante el proceso",
  "Calidad profesional sin costos inflados",
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Analizamos tus ideas, objetivos y necesidades.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planificación",
    desc: "Definimos el alcance, tecnologías y tiempos.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    desc: "Creamos tu solución con código limpio y seguro.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    desc: "Probamos, optimizamos y ponemos en producción.",
  },
  {
    number: "05",
    icon: Headphones,
    title: "Soporte",
    desc: "Te acompañamos con soporte y mejora continua.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden px-6 py-28 lg:px-10">
      <style>{`
        section#nosotros + section#proceso {
          display: none;
        }
      `}</style>

      <div className="absolute top-10 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[130px]" />
      <div className="absolute right-0 top-1/3 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border glass p-4 shadow-2xl shadow-primary/20">
                <div className="overflow-hidden rounded-2xl border border-border bg-background/80">
                  <div className="flex items-center justify-between border-b border-border bg-black/20 px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                    </div>
                    <div className="font-mono text-[11px] text-muted-foreground">starters.dev</div>
                  </div>

                  <div className="grid min-h-[25rem] gap-4 p-5 sm:min-h-[31rem] sm:p-7">
                    <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
                      <div className="rounded-2xl border border-border bg-white/[0.04] p-5">
                        <div className="mb-5 flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
                            <Code2 className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.24em] text-accent">
                              Software
                            </p>
                            <p className="font-display text-xl font-bold text-foreground">
                              a medida
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3 font-mono text-xs text-muted-foreground">
                          <div className="rounded-lg bg-white/[0.055] p-3">
                            <span className="text-accent">const</span> proyecto ={" "}
                            <span className="text-foreground">"STARTERS"</span>;
                          </div>
                          <div className="rounded-lg bg-white/[0.055] p-3">
                            <span className="text-accent">build</span>
                            {"("}web, sistemas, soporte{")"}
                          </div>
                          <div className="rounded-lg bg-white/[0.055] p-3">
                            deploy.status = <span className="text-foreground">"ready"</span>;
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        <div className="rounded-2xl border border-border bg-white/[0.045] p-5">
                          <Layers className="h-7 w-7 text-accent" />
                          <p className="mt-4 text-sm text-muted-foreground">
                            Soluciones escalables
                          </p>
                          <div className="mt-4 h-2 rounded-full bg-white/10">
                            <div className="h-full w-4/5 rounded-full bg-accent" />
                          </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-white/[0.045] p-5">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-14 rounded-lg bg-accent/20" />
                            <div className="h-14 rounded-lg bg-white/10" />
                            <div className="h-14 rounded-lg bg-primary/20" />
                          </div>
                          <div className="mt-4 space-y-2">
                            <div className="h-2 rounded-full bg-white/20" />
                            <div className="h-2 w-2/3 rounded-full bg-accent/50" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl border border-border bg-white/[0.04] p-4">
                        <p className="text-2xl font-bold text-foreground">UI</p>
                        <p className="mt-1 text-xs text-muted-foreground">Diseño profesional</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-white/[0.04] p-4">
                        <p className="text-2xl font-bold text-foreground">API</p>
                        <p className="mt-1 text-xs text-muted-foreground">Integraciones</p>
                      </div>
                      <div className="rounded-2xl border border-border bg-white/[0.04] p-4">
                        <p className="text-2xl font-bold text-foreground">SEO</p>
                        <p className="mt-1 text-xs text-muted-foreground">Crecimiento</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-4 max-w-[14rem] rounded-2xl border border-border glass p-5 shadow-[0_0_46px_-18px_var(--accent)] sm:left-8">
                <div className="font-display text-4xl font-bold text-accent">+5</div>
                <div className="mt-1 text-sm leading-relaxed text-foreground/90">
                  años impulsando ideas digitales
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-accent">
                SOBRE NOSOTROS
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Sobre <span className="text-gradient">STARTERS</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Somos un equipo de desarrolladores apasionados por la tecnología y comprometidos con
                el éxito de nuestros clientes.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Creamos soluciones digitales que permiten crecer, organizar procesos y destacar en
                un mundo cada vez más competitivo.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      strokeWidth={2.3}
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <section id="proceso" className="pt-28">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-accent">
                PROCESO
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Nuestro <span className="text-gradient">Proceso</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Trabajamos con una metodología clara para convertir tus ideas en soluciones
                digitales funcionales, modernas y listas para crecer.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent xl:block" />

            <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 90} className="h-full">
                    <article className="group relative flex h-full min-h-[15rem] flex-col rounded-2xl border border-border glass p-5 text-center shadow-2xl shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-accent/10">
                      <div className="absolute -top-4 left-5 rounded-full border border-border bg-background px-3 py-1 font-mono text-sm font-bold text-accent">
                        {step.number}
                      </div>
                      <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
                        <Icon className="h-8 w-8" strokeWidth={1.8} />
                      </div>
                      <h3 className="font-display mt-6 text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
