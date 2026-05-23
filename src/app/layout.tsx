import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-family",
});

export const metadata: Metadata = {
  title: "Starters — Software a tu medida sin pagar de más",
  description:
    "Agencia boliviana de desarrollo de software. Apps, sitios web y mantenimiento de alta calidad a precios accesibles.",
  openGraph: {
    title: "Starters — Software a tu medida",
    description: "Apps, sitios web y mantenimiento profesional a precios accesibles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable}`}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
