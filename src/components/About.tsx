import { CheckCircle, ClipboardList, Code2, Headphones, Rocket, Search } from "lucide-react";
import Image from "next/image"; // INGENIERO: Import añadido para imágenes optimizadas
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
    <section id="nosotros" className="relative overflow-hidden px-6 py-28 lg:px-10 bg-black">
      {/* INGENIERO: Se eliminó el bloque <style> que ocultaba la sección #proceso. Mala práctica corregida. */}

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            {/* INICIO MODIFICACIÓN: Reemplazo de mockup CSS por imagen real + animate-float */}
            <div className="relative animate-float">
              <Image
                src="/proyecto-real.jpg"
                alt="Proyecto real de Starters"
                width={600}
                height={500}
                className="w-full h-[500px] w-auto object-cover"
                priority
              />
              
            </div>
            {/* FIN MODIFICACIÓN */}
          </Reveal>

          <Reveal delay={150}>
            <div>
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#3B82F6]">
                SOBRE NOSOTROS
              </div>
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Sobre <span className="text-[#3B82F6]">STARTERS</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Somos un equipo de desarrolladores apasionados por la tecnología y comprometidos con
                el éxito de nuestros clientes.
              </p>
              <p className="mt-5 leading-relaxed text-gray-400">
                Creamos soluciones digitales que permiten crecer, organizar procesos y destacar en
                un mundo cada vez más competitivo.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-white/90">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#3B82F6]"
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
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.36em] text-[#3B82F6]">
                PROCESO
              </div>
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Nuestro <span className="text-[#3B82F6]">Proceso</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
                Trabajamos con una metodología clara para convertir tus ideas en soluciones
                digitales funcionales, modernas y listas para crecer.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-blue-600/30 xl:block" />

            <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 90} className="h-full">
                    <article className="group relative flex h-full min-h-[15rem] flex-col rounded-2xl border border-white/10 bg-black p-5 text-center transition-colors duration-300 hover:border-blue-600/50">
                      <div className="absolute -top-4 left-5 rounded-full border border-white/10 bg-black px-3 py-1 font-mono text-sm font-bold text-[#3B82F6]">
                        {step.number}
                      </div>
                      <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-[#3B82F6]">
                        <Icon className="h-8 w-8" strokeWidth={1.8} />
                      </div>
                      <h3 className="font-display mt-6 text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-400">
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