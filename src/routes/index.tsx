import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Starters — Software a tu medida sin pagar de más" },
      {
        name: "description",
        content:
          "Agencia boliviana de desarrollo de software. Apps, sitios web y mantenimiento de alta calidad a precios accesibles.",
      },
      { property: "og:title", content: "Starters — Software a tu medida" },
      {
        property: "og:description",
        content: "Apps, sitios web y mantenimiento profesional a precios accesibles.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}
