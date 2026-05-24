import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image"; // INGENIERO: Import corregido
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP = "https://wa.me/59167423265";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black"
    >
      {/* Fondo negro sólido */}
      <div className="absolute inset-0 bg-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center w-full">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black text-xs text-gray-400 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              Software a tu medida, sin precios inflados
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white">
              Tus ideas al <span className="text-[#3B82F6]">código</span>, sin pagar de más
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 text-lg text-gray-400 max-w-xl leading-relaxed">
              Construimos aplicaciones y sitios web a la medida de tu negocio, con la calidad de una
              agencia premium y precios pensados para emprendedores reales.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Habla con un Desarrollador
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium border border-gray-700 bg-black hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors text-white"
              >
                Ver Servicios
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12 flex items-center gap-8 text-xs text-gray-400">
              <div>
                <span className="text-white font-display text-2xl font-bold">50+</span>
                <div>Proyectos entregados</div>
              </div>
              <div className="h-10 w-px bg-gray-700" />
              <div>
                <span className="text-white font-display text-2xl font-bold">24/7</span>
                <div>Soporte directo</div>
              </div>
              <div className="h-10 w-px bg-gray-700" />
              <div>
                <span className="text-white font-display text-2xl font-bold">100%</span>
                <div>A tu medida</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} className="relative">
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black">
              {/* INGENIERO: Eteta <img> cambiada por <Image> de Next.js */}
              <Image
                src="/dashboard1.jpg"
                alt="Dashboard preview starters"
                className="w-full h-[420px] object-cover"
                width={1200}
                height={1800}
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
