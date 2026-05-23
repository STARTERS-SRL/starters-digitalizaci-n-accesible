import { ArrowRight, BarChart3, Monitor, ShoppingBag, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    icon: ShoppingBag,
    category: "E-COMMERCE",
    title: "Tienda Online Moda",
    desc: "E-commerce completo con pasarela de pagos, inventario y panel administrativo.",
    mockup: "store",
  },
  {
    icon: BarChart3,
    category: "SISTEMA WEB",
    title: "Sistema de Ventas",
    desc: "Sistema de gestión de ventas, clientes, productos e informes en tiempo real.",
    mockup: "dashboard",
  },
  {
    icon: Smartphone,
    category: "APLICACIÓN MÓVIL",
    title: "App Fitness Pro",
    desc: "Aplicación móvil para rutinas, seguimiento y entrenamientos.",
    mockup: "mobile",
  },
];

function StoreMockup() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-3">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500/70" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
            <div className="h-2 w-2 rounded-full bg-green-500/70" />
          </div>
          <div className="h-2 w-28 rounded-full bg-white/20" />
          <ShoppingBag className="h-4 w-4 text-[#3B82F6]" />
        </div>
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-3 w-24 rounded-full bg-blue-500/70" />
            <div className="flex gap-2">
              <div className="h-2 w-10 rounded-full bg-white/20" />
              <div className="h-2 w-10 rounded-full bg-white/20" />
              <div className="h-2 w-10 rounded-full bg-white/20" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-zinc-800 p-3">
                <div className="h-20 rounded-lg bg-blue-600/25" />
                <div className="mt-3 h-2 rounded-full bg-white/20" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-blue-500/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-3">
      <div className="grid min-h-[12rem] grid-cols-[4rem_1fr] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
        <div className="border-r border-white/10 bg-zinc-900 p-3">
          <Monitor className="mb-5 h-5 w-5 text-[#3B82F6]" />
          <div className="space-y-3">
            <div className="h-2 rounded-full bg-blue-500/70" />
            <div className="h-2 rounded-full bg-white/20" />
            <div className="h-2 rounded-full bg-white/20" />
            <div className="h-2 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="p-4">
          <div className="mb-4 grid grid-cols-3 gap-3">
            {[72, 48, 88].map((value) => (
              <div key={value} className="rounded-lg border border-white/10 bg-zinc-800 p-3">
                <div className="h-2 w-10 rounded-full bg-white/20" />
                <div className="mt-3 h-3 rounded-full bg-blue-500/70" style={{ width: `${value}%` }} />
              </div>
            ))}
          </div>
          <div className="flex h-24 items-end gap-2 rounded-xl border border-white/10 bg-zinc-950 p-3">
            {[38, 62, 45, 76, 54, 90, 68].map((height) => (
              <div
                key={height}
                className="flex-1 rounded-t-md bg-blue-600"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="relative flex min-h-[13.5rem] items-end justify-center gap-3 rounded-2xl border border-white/10 bg-zinc-950 p-4">
      {[0, 1, 2].map((phone) => (
        <div
          key={phone}
          className={`w-24 rounded-[1.4rem] border border-white/10 bg-zinc-900 p-2 ${
            phone === 1 ? "mb-5" : "opacity-85"
          }`}
        >
          <div className="rounded-[1rem] border border-white/10 bg-zinc-800 p-3">
            <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/30" />
            <div className="h-16 rounded-xl bg-zinc-900" />
            <div className="mt-3 space-y-2">
              <div className="h-1.5 rounded-full bg-white/30" />
              <div className="h-1.5 w-2/3 rounded-full bg-blue-500/70" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectMockup({ type }: { type: string }) {
  if (type === "store") return <StoreMockup />;
  if (type === "dashboard") return <DashboardMockup />;
  return <MobileMockup />;
}

export function Portfolio() {
  return (
    <section id="portafolio" className="relative overflow-hidden px-6 py-28 lg:px-10 bg-black">
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#3B82F6]">
              PORTAFOLIO
            </div>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Proyectos <span className="text-[#3B82F6]">destacados</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-400 md:text-lg">
              Algunos de los proyectos que podemos crear para llevar tu idea al siguiente nivel.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={project.title} delay={index * 110} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black transition-colors duration-300 hover:border-blue-600/50">
                  <div className="relative p-4 pb-0">
                    <div className="relative">
                      <ProjectMockup type={project.mockup} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#3B82F6]">
                      <Icon className="h-4 w-4" />
                      {project.category}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-gray-400">
                      {project.desc}
                    </p>
                    <button
                      type="button"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-600/50 px-5 py-2.5 font-semibold text-[#3B82F6] transition-colors hover:border-blue-600 hover:bg-blue-600/10"
                    >
                      Ver proyecto
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}