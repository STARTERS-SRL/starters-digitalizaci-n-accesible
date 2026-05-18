import { Reveal } from "./Reveal";

const projects = [
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", title: "Dashboard SaaS", tag: "Web App", h: "h-80" },
  { img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80", title: "E-commerce Boutique", tag: "Tienda online", h: "h-64" },
  { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80", title: "Portafolio Creativo", tag: "Sitio web", h: "h-72" },
  { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80", title: "App de Productividad", tag: "Mobile", h: "h-80" },
  { img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80", title: "Landing Startup", tag: "Marketing", h: "h-64" },
  { img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&q=80", title: "Sistema de Gestión", tag: "Workflow", h: "h-72" },
];

export function Portfolio() {
  return (
    <section id="portafolio" className="relative py-32 px-6 lg:px-10">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">Portafolio</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Proyectos que <span className="text-gradient">hablan por sí solos</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Una muestra del trabajo que entregamos para emprendedores y
              negocios como el tuyo.
            </p>
          </div>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100} className="break-inside-avoid">
              <div className={`group relative ${p.h} rounded-2xl overflow-hidden glass cursor-pointer`}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1">{p.tag}</div>
                  <div className="font-display font-semibold text-lg">{p.title}</div>
                  <div className="mt-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver Proyecto →
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
