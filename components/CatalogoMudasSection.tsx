"use client";

import { motion } from "framer-motion";
import { TreePine, Ruler, Zap, Footprints, Bug, CircleDot } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const species = [
  {
    name: "Ipê-Amarelo-do-Cerrado / Ipê-Branco",
    scientificName: "Handroanthus sp.",
    porte: "Médio (6 a 10m)",
    fiacao: "Compatível com fiação convencional ou compacta",
    calcada: "Calçadas a partir de 1,80m",
    fauna: "Flores melíferas para abelhas e beija-flores",
    raizes: "Pivotantes, não estufam calçadas se respeitado o berço de plantio",
  },
  {
    name: "Pitangueira",
    scientificName: "Eugenia uniflora",
    porte: "Pequeno a Médio (3 a 6m)",
    fiacao: "100% compatível sob redes elétricas",
    calcada: "Calçadas estreitas ou médias (1,50m)",
    fauna: "Frutos carnosos apreciados por sabiás, sanhaços e saguis",
    raizes: "Sistema radicular não agressivo",
  },
  {
    name: "Quaresmeira",
    scientificName: "Tibouchina granulosa",
    porte: "Médio (8 a 12m)",
    fiacao: "Adequada para calçadas opostas à fiação pesada",
    calcada: "Calçadas a partir de 2,00m",
    fauna: "Intensa floração púrpura de grande valor paisagístico",
    raizes: "Comportamento radicular disciplinado",
  },
  {
    name: "Cereja-do-Rio-Grande",
    scientificName: "Eugenia involucrata",
    porte: "Pequeno (4 a 7m)",
    fiacao: "Compatível sob fiação aérea",
    calcada: "Calçadas de 1,50m a 2,00m",
    fauna: "Alimento imediato para pássaros e insetos polinizadores",
    raizes: "Segura para tubulações de água e esgoto",
  },
];

export default function CatalogoMudasSection() {
  return (
    <section id="catalogo-mudas" className="relative border-t border-hairline px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
 

        {/* Title */}
        <motion.h2
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-cream md:text-6xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Árvores planejadas para calçadas vivas e sem transtornos.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 max-w-3xl text-base text-muted"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Seleção 100% em conformidade com a Lei de Arborização Municipal nº 11.571/2003 e com o Guia de Arborização Urbana de Campinas (GAUC).
        </motion.p>

        {/* Species Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {species.map((sp, i) => (
            <motion.div
              key={sp.name}
              className="rounded-lg border border-hairline bg-panel p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-cream">{sp.name}</h3>
                <p className="mt-1 text-sm italic text-brand-green-light">{sp.scientificName}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                  <div>
                    <p className="text-xs font-medium uppercase text-muted">Porte</p>
                    <p className="text-sm text-cream/80">{sp.porte}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                  <div>
                    <p className="text-xs font-medium uppercase text-muted">Fiação</p>
                    <p className="text-sm text-cream/80">{sp.fiacao}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Footprints className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                  <div>
                    <p className="text-xs font-medium uppercase text-muted">Calçada Mínima</p>
                    <p className="text-sm text-cream/80">{sp.calcada}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bug className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                  <div>
                    <p className="text-xs font-medium uppercase text-muted">Atrativo Fauna</p>
                    <p className="text-sm text-cream/80">{sp.fauna}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                  <div>
                    <p className="text-xs font-medium uppercase text-muted">Raízes</p>
                    <p className="text-sm text-cream/80">{sp.raizes}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
