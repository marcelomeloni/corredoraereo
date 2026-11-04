"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bird, Flower2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const faunaItems = [
  {
    name: "Sagui-da-serra-escuro e Sagui-de-tufo-branco",
    role: "Dispersores de frutos",
    tag: "Mamíferos",
    badgeColor: "#ff8709",
    desc: "Utilizam a continuidade das copas para se deslocar sem risco de atropelamentos no asfalto.",
  },
  {
    name: "Avifauna Urbana (Sabiás, Sanhaços, Periquitos)",
    role: "Polinizadores e dispersores",
    tag: "Aves",
    badgeColor: "#0ae448",
    desc: "Espécies fundamentais para o transporte de sementes entre as praças Samuel Wainer e João Lech Júnior.",
  },
  {
    name: "Morcegos Frugívoros e Insetívoros",
    role: "Polinização noturna e equilíbrio biológico",
    tag: "Quirópteros",
    badgeColor: "#9d95ff",
    desc: "Polinizam árvores nativas de floração noturna e controlam pragas urbanas.",
  },
  {
    name: "Abelhas Nativas Sem Ferrão e Borboletas",
    role: "Polinização cruzada de flores",
    tag: "Insetos",
    badgeColor: "#fec5fb",
    desc: "Garantem a fecundação das flores das espécies remanescentes dos dois bosques.",
  },
];

const floraItems = [
  {
    name: "Remanescentes da Mata Atlântica e Floresta Estacional",
    speciesCount: "152 espécies somadas",
    tag: "Flora",
    badgeColor: "#fec5fb",
    desc: "Verdadeiros testemunhos vivos da cobertura vegetal primitiva de Campinas protegidos pelas duas praças.",
  },
];

const tabs = [
  { id: "fauna", label: "Fauna Silvestre", icon: Bird },
  { id: "flora", label: "Flora Nativa Testemunho", icon: Flower2 },
];

export default function BiodiversidadeSection() {
  const [activeTab, setActiveTab] = useState("fauna");

  return (
    <section id="biodiversidade" className="relative border-t border-hairline px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
      

        {/* Title */}
        <motion.h2
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-cream md:text-6xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Quem habita e transita pelo corredor.
        </motion.h2>

        {/* Tabs */}
        <motion.div
          className="mt-12 flex gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-cream bg-cream/10 text-cream"
                  : "border-hairline text-muted hover:border-cream/50 hover:text-cream"
              }`}
              aria-label={tab.label}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "fauna" && (
            <motion.div
              key="fauna"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-8 grid gap-6 sm:grid-cols-2"
            >
              {faunaItems.map((item) => (
                <div key={item.name} className="rounded-lg border border-hairline bg-panel p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                      style={{ borderColor: item.badgeColor, color: item.badgeColor }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-xs text-muted">{item.role}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-cream">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "flora" && (
            <motion.div
              key="flora"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              {floraItems.map((item) => (
                <div key={item.name} className="rounded-lg border border-hairline bg-panel p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                      style={{ borderColor: item.badgeColor, color: item.badgeColor }}
                    >
                      {item.tag}
                    </span>
                    <span className="text-sm font-semibold text-brand-green-light">
                      {item.speciesCount}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-cream">{item.name}</h3>
                  <p className="max-w-2xl text-base leading-relaxed text-muted">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
