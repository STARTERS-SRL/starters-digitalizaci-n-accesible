import { Code2, Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14 px-6 lg:px-10 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 className="w-5 h-5 text-background" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display font-bold text-lg">Starters</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Software Development</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm">
            Software profesional al alcance de todos. Convertimos tus ideas en
            productos digitales de alta calidad.
          </p>
        </div>

        <div>
          <div className="font-display font-semibold mb-4 text-sm">Navegación</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicios" className="hover:text-accent transition">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-accent transition">Nosotros</a></li>
            <li><a href="#portafolio" className="hover:text-accent transition">Portafolio</a></li>
            <li><a href="#contacto" className="hover:text-accent transition">Contacto</a></li>
          </ul>
        </div>

        <div>
          <div className="font-display font-semibold mb-4 text-sm">Contacto</div>
          <a href="mailto:starters.devsoft@gmail.com" className="text-sm text-muted-foreground hover:text-accent inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> starters.devsoft@gmail.com
          </a>
          <div className="flex items-center gap-3 mt-5">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:border-accent/50 hover:text-accent transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
        <div>© {new Date().getFullYear()} Starters. Todos los derechos reservados.</div>
        <div>Hecho con cariño en Bolivia.</div>
      </div>
    </footer>
  );
}
