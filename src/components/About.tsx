import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  "Precios accesibles, sin sacrificar calidad",
  "Tecnología moderna y código mantenible",
  "Comunicación directa con el equipo que construye",
];

export function About() {
  return (
    <section id="nosotros" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-accent/30 blur-3xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden glass">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
                alt="Equipo de desarrollo"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-xl p-5 max-w-[200px] hidden md:block">
              <div className="text-3xl font-display font-bold text-accent">5+</div>
              <div className="text-xs text-muted-foreground mt-1">
                Años democratizando la tecnología
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Sobre nosotros</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-gradient">Starters</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-5">
            Nacimos con una misión clara: democratizar la tecnología. Creemos que cualquier
            emprendedor, sin importar su presupuesto, merece tener software profesional que potencie
            su negocio.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Cada proyecto que entregamos es la prueba viva de nuestra propuesta: calidad de agencia,
            precios al alcance de cualquiera, y la cercanía de un equipo que se involucra como si
            fuera tu socio.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-background" strokeWidth={3} />
                </div>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
