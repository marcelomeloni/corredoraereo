"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Ruler, Zap, Footprints, Bug, CircleDot } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const species = [
  {
    name: "Babosa Branca",
    scientificName: "Cordia superba Cham.",
    porte: "Médio (7 a 10m)",
    fiacao: "Indicada para ruas estreitas e sob fiação convencional",
    calcada: "Calçadas a partir de 1,80m, com berço adequado",
    fauna: "Flores brancas melíferas e frutos para aves e morcegos",
    raizes: "Comportamento radicular adequado ao berço; conduzir tronco único",
    image: "https://cdn.awsli.com.br/2772/2772039/produto/371891732/babosa-branca-2-mfj4keoy6l.jpg",
    alt: "Babosa Branca",
  },
  {
    name: "Pitangueira",
    scientificName: "Eugenia uniflora",
    porte: "Pequeno a Médio (3 a 6m)",
    fiacao: "100% compatível sob redes elétricas",
    calcada: "Calçadas estreitas ou médias (1,50m)",
    fauna: "Frutos carnosos apreciados por sabiás, sanhaços e saguis",
    raizes: "Sistema radicular não agressivo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYq22YuHEgH_KiW6V3on1GsUpWz2A9_b8SJnuQDBLVYe87aNkrNUWyaU&s=10",
    alt: "Pitangueira",
  },
  {
    name: "Jacarandá de Minas",
    scientificName: "Jacaranda cuspidifolia",
    porte: "Médio (5 a 10m)",
    fiacao: "Adequado sob fiação isolada ou protegida; observar distanciamento da rede",
    calcada: "Calçadas a partir de 2,00m",
    fauna: "Floração violeta atrativa para abelhas e aves",
    raizes: "Raízes profundas e não agressivas, respeitando o berço de plantio",
    image: "https://images.squarespace-cdn.com/content/v1/6209d19e16b84b5090ced6bb/595759be-fc8f-4e2e-8a54-643967e23e46/jacaranda-minas-1.jpg",
    alt: "Jacarandá de Minas",
  },
  {
    name: "Cereja-do-Rio-Grande",
    scientificName: "Eugenia involucrata",
    porte: "Pequeno (4 a 7m)",
    fiacao: "Compatível sob fiação aérea",
    calcada: "Calçadas de 1,50m a 2,00m",
    fauna: "Alimento imediato para pássaros e insetos polinizadores",
    raizes: "Segura para tubulações de água e esgoto",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY06CESJ9bot__3W_U9yMb-Lfy4teKS1B96tJDM5QKEQ&s=10",
    alt: "Cereja-do-Rio-Grande",
  },
];

export default function CatalogoMudasSection() {
  return (
    <section id="catalogo-mudas" className="relative border-t border-line px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
 

        {/* Title */}
        <motion.h2
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Árvores planejadas para calçadas vivas e sem transtornos.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="mt-4 max-w-3xl text-base text-ink-soft"
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
              className="overflow-hidden rounded-lg border border-line bg-panel"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative aspect-[16/9] w-full bg-canvas">
                <Image
                  src={sp.image}
                  alt={sp.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-ink">{sp.name}</h3>
                  <p className="mt-1 text-sm italic text-green">{sp.scientificName}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                    <div>
                      <p className="text-xs font-medium uppercase text-ink-soft">Porte</p>
                      <p className="text-sm text-ink/80">{sp.porte}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Zap className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                    <div>
                      <p className="text-xs font-medium uppercase text-ink-soft">Fiação</p>
                      <p className="text-sm text-ink/80">{sp.fiacao}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Footprints className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                    <div>
                      <p className="text-xs font-medium uppercase text-ink-soft">Calçada Mínima</p>
                      <p className="text-sm text-ink/80">{sp.calcada}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Bug className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                    <div>
                      <p className="text-xs font-medium uppercase text-ink-soft">Atrativo Fauna</p>
                      <p className="text-sm text-ink/80">{sp.fauna}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-accent-arvores" />
                    <div>
                      <p className="text-xs font-medium uppercase text-ink-soft">Raízes</p>
                      <p className="text-sm text-ink/80">{sp.raizes}</p>
                    </div>
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
