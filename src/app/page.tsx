import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { ClipboardList, Code2, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-black text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <section id="proceso" className="relative py-32 px-6 lg:px-10 bg-black">
          <div className="max-w-7xl mx-auto relative">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="text-xs uppercase tracking-[0.25em] text-[#3B82F6] mb-4">Proceso</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Nuestro <span className="text-[#3B82F6]">Proceso</span>
                </h2>
                <p className="mt-5 text-gray-400">
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
                      className={`group relative ${step.h} rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 cursor-pointer`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/90">
                        <Icon className="w-20 h-20 text-[#3B82F6]" strokeWidth={1.5} />
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-70 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#3B82F6] mb-1">
                          {step.tag}
                        </div>
                        <div className="font-display font-semibold text-lg text-white">{step.title}</div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}