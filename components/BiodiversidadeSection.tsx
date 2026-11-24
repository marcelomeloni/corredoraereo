"use client";

import { useState } from "react";
import Image from "next/image";
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
    badgeColor: "#c2680a",
    image: "https://caesegatos.com.br/wp-content/uploads/2020/11/sagui-1555343356.jpg",
    alt: "Sagui-da-serra-escuro",
    desc: "Utilizam a continuidade das copas para se deslocar sem risco de atropelamentos no asfalto.",
  },
  {
    name: "Avifauna Urbana (Sabiás, Sanhaços, Periquitos)",
    role: "Polinizadores e dispersores",
    tag: "Aves",
    badgeColor: "#237a3b",
    image: "https://cultura.jundiai.sp.gov.br/wp-content/uploads/2019/10/Sabia-laranjeira.jpg",
    alt: "Sabiá-laranjeira",
    desc: "Espécies fundamentais para o transporte de sementes entre as praças Samuel Wainer e João Lech Júnior.",
  },
  {
    name: "Morcegos Frugívoros e Insetívoros",
    role: "Polinização noturna e equilíbrio biológico",
    tag: "Quirópteros",
    badgeColor: "#6c5ad0",
    image: "https://meusanimais.com.br/wp-content/uploads/2021/03/tres-morcegos-voando.jpg?auto=format%2Ccompress&quality=75&width=3840&height=2160&fit=cover&gravity=center&sharp=true&progressive=true",
    alt: "Morcegos voando",
    desc: "Polinizam árvores nativas de floração noturna e controlam pragas urbanas.",
  },
  {
    name: "Abelhas Nativas Sem Ferrão e Borboletas",
    role: "Polinização cruzada de flores",
    tag: "Insetos",
    badgeColor: "#a64fa4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3O_0OXf6iycHuEZB5HK2PSiqlnTGIV8tnw-Nrb4dgWR86vU7KomgNAgpa&s=10",
    alt: "Abelhas nativas",
    desc: "Garantem a fecundação das flores das espécies remanescentes dos dois bosques.",
  },
];

const floraItems = [
  {
    name: "Remanescentes da Mata Atlântica e Floresta Estacional",
    speciesCount: "152 espécies somadas",
    tag: "Flora",
    badgeColor: "#a64fa4",
    image: "https://apremavi.org.br/wp-content/uploads/2025/05/araucaria1-wigold-b-schaffer.jpg.webp",
    alt: "Araucária em remanescente de Mata Atlântica",
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
    <section id="biodiversidade" className="relative border-t border-line px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
      

        {/* Title */}
        <motion.h2
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl"
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
                  ? "border-ink bg-ink/10 text-ink"
                  : "border-line text-ink-soft hover:border-ink/50 hover:text-ink"
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
                <div key={item.name} className="overflow-hidden rounded-lg border border-line bg-panel">
                  <div className="relative aspect-[4/3] w-full bg-canvas">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                        style={{ borderColor: item.badgeColor, color: item.badgeColor }}
                      >
                        {item.tag}
                      </span>
                      <span className="text-xs text-ink-soft">{item.role}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-ink">{item.name}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                  </div>
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
                <div key={item.name} className="overflow-hidden rounded-lg border border-line bg-panel">
                  <div className="relative aspect-[16/9] w-full bg-canvas">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span
                        className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                        style={{ borderColor: item.badgeColor, color: item.badgeColor }}
                      >
                        {item.tag}
                      </span>
                      <span className="text-sm font-semibold text-green">
                        {item.speciesCount}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-ink">{item.name}</h3>
                    <p className="max-w-2xl text-base leading-relaxed text-ink-soft">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
