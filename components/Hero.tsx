"use client";

import { motion } from "framer-motion";
import { ArrowDown, TreePine } from "lucide-react";

const metrics = [
  { value: "500m", label: "Distância entre os fragmentos" },
  { value: "150", label: "Novas árvores nativas nas calçadas" },
  { value: "152+", label: "Espécies de flora nativa preservadas" },
  { value: "100% Gratuito", label: "Plantio executado pela Prefeitura (DPJ)" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Decorative blobs */}
      <div className="blob left-[-10%] top-[20%] h-[500px] w-[500px] bg-green" />
      <div className="blob right-[-5%] bottom-[10%] h-[400px] w-[400px] bg-green-soft" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Eyebrow */}
        <motion.p
          className="eyebrow mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

        </motion.p>

        {/* Headline */}
        <div className="mb-8">
          {["CORREDOR", "AÉREO ENTRE", "BOSQUES."].map((line, i) => (
            <motion.h1
              key={line}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-[clamp(3rem,10vw,11.25rem)] font-black leading-[0.9] tracking-[-0.02em] text-ink"
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* Lead */}
        <motion.p
          className="mb-12 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Uma ponte vegetal de 500 metros unindo o Bosque dos Italianos e o Bosque dos
          Alemães em Campinas. Resgatando o fluxo gênico, a avifauna e a qualidade de vida
          nos bairros Jardim Guanabara e Jardim Chapadão.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mb-16 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <a href="#adesao" className="gradient-pill flex items-center gap-2" aria-label="Quero uma Árvore na Minha Calçada">
            <TreePine className="h-4 w-4" />
            Quero uma Árvore na Minha Calçada
          </a>
          <a href="#projeto" className="ghost-pill flex items-center gap-2" aria-label="Conhecer o Projeto Técnico">
            Conhecer o Projeto Técnico
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Quick Metrics */}
        <motion.div
          className="grid grid-cols-2 gap-6 border-t border-line pt-10 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-3xl font-bold text-green md:text-4xl">{m.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
