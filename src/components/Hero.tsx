import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP = "https://wa.me/59167423265";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* glows */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/30 rounded-full blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-0 right-0 w-[36rem] h-[36rem] bg-accent/20 rounded-full blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_85%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center w-full">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-muted-foreground mb-8">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              Software a tu medida, sin precios inflados
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Tus ideas al <span className="text-gradient">código</span>, sin pagar de más
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
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
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium bg-gradient-to-r from-primary to-accent text-background hover:shadow-[0_0_40px_-5px_var(--accent)] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Habla con un Desarrollador
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium border border-border glass hover:border-accent/50 hover:text-accent transition-all"
              >
                Ver Servicios
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
              <div>
                <span className="text-foreground font-display text-2xl font-bold">50+</span>
                <div>Proyectos entregados</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <span className="text-foreground font-display text-2xl font-bold">24/7</span>
                <div>Soporte directo</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <span className="text-foreground font-display text-2xl font-bold">100%</span>
                <div>A tu medida</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} className="relative">
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/40 via-accent/30 to-transparent blur-3xl" />
            <div className="relative glass rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 border-accent/20">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-black/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                <div className="ml-3 text-[11px] text-muted-foreground font-mono">starters.dev</div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Dashboard preview"
                className="w-full h-[420px] object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
