import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Projeto Corredor Aéreo entre Bosques | Campinas SP",
  description:
    "Iniciativa socioambiental para conectar o Bosque dos Italianos e Bosque dos Alemães através do plantio de 150 árvores nativas em calçadas.",
  keywords: [
    "corredor aéreo",
    "bosques",
    "Campinas",
    "arborização urbana",
    "Bosque dos Italianos",
    "Bosque dos Alemães",
    "plantio de árvores",
    "Jardim Chapadão",
    "Jardim Guanabara",
  ],
  openGraph: {
    title: "Projeto Corredor Aéreo entre Bosques | Campinas SP",
    description:
      "Uma ponte vegetal de 500 metros unindo o Bosque dos Italianos e o Bosque dos Alemães em Campinas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} font-sans`}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
