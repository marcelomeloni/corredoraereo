"use client";

import { motion } from "framer-motion";
import { MapPin, TreePine, BookOpen, Landmark } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const streets = [
  "Rua Tenente Haraldo Egídio de Souza Santos",
  "Rua Dr. Albano de Almeida Lima",
  "Rua Dr. Barros Monteiro",
  "Rua Pereira Tangerino",
  "Rua Alferes João José",
  "Rua Dr. Miguel Penteado",
  "Rua Paulo Justi",
];

export default function HistoricoSection() {
  return (
    <section id="historico" className="relative border-t border-hairline px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">


        {/* Title */}
        <motion.h2
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-cream md:text-6xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Dois santuários verdes separados por apenas cinco quadras.
        </motion.h2>

        {/* Bosque cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Bosque dos Italianos */}
          <motion.div
            className="rounded-lg border border-hairline bg-panel p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-3">
              <TreePine className="h-6 w-6 text-accent-historico" />
              <h3 className="text-xl font-bold text-cream">Bosque dos Italianos</h3>
            </div>
            <p className="mb-1 text-sm text-muted">Praça Samuel Wainer — Jardim Chapadão</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2">
                <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                <p className="text-sm leading-relaxed text-cream/80">
                  Biblioteca Infantil Monteiro Lobato, trilhas de caminhada, espaço de Tai Chi Chuan, academia ao ar livre e galpão comunitário.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                <p className="text-sm leading-relaxed text-cream/80">
                  <span className="font-semibold text-accent-flora">82 espécies nativas</span> catalogadas (Santin, 1999).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bosque dos Alemães */}
          <motion.div
            className="rounded-lg border border-hairline bg-panel p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-3">
              <TreePine className="h-6 w-6 text-accent-historico" />
              <h3 className="text-xl font-bold text-cream">Bosque dos Alemães</h3>
            </div>
            <p className="mb-1 text-sm text-muted">Praça João Lech Júnior — Jardim Guanabara</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2">
                <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                <p className="text-sm leading-relaxed text-cream/80">
                  Trilhas sombreadas, playground, área de meditação e bem-estar, polo gastronômico e educacional no entorno.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                <p className="text-sm leading-relaxed text-cream/80">
                  <span className="font-semibold text-accent-flora">70 espécies nativas</span> catalogadas (Santin, 1999).
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Polygon Perimeter */}
        <motion.div
          className="mt-12 rounded-lg border border-hairline bg-panel p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-accent-historico" />
            <h3 className="text-xl font-bold text-cream">Área de Intervenção Oficial (Polígono Delimitado)</h3>
          </div>
          <p className="mb-6 text-sm text-muted">
            Perímetro urbano onde ocorre o plantio contínuo e prioritário de mudas nas calçadas:
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {streets.map((street) => (
              <div key={street} className="flex items-center gap-2 text-sm text-cream/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-historico" />
                {street}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">
            Polígono 23K: Vértices 1 a 4 cobrindo extensão linear de mais de 800m.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
