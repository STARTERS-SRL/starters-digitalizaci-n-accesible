import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { ClipboardList, Code2, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <section id="portafolio" className="relative py-32 px-6 lg:px-10">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
          <div className="max-w-7xl mx-auto relative">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Proceso</div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Nuestro <span className="text-gradient">Proceso</span>
                </h2>
                <p className="mt-5 text-muted-foreground">
                  Un camino claro de principio a fin: entendemos tu negocio, construimos la
                  solución y te acompañamos hasta el lanzamiento.
                </p>
              </div>
            </Reveal>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
              {[
                {
                  icon: ClipboardList,
                  title: "Diagnóstico",
                  tag: "Analizamos tu negocio",
                  h: "h-80",
                },
                {
                  icon: Code2,
                  title: "Desarrollo",
                  tag: "Creamos tu solución",
                  h: "h-64",
                },
                {
                  icon: Rocket,
                  title: "Lanzamiento",
                  tag: "Te acompañamos a salir al mercado",
                  h: "h-72",
                },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} delay={(i % 3) * 100} className="break-inside-avoid">
                    <div
                      className={`group relative ${step.h} rounded-2xl overflow-hidden glass cursor-pointer`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/25 via-accent/15 to-background/80">
                        <Icon className="w-20 h-20 text-accent/90 transition-transform duration-700 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />
                      <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                          {step.tag}
                        </div>
                        <div className="font-display font-semibold text-lg">{step.title}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
