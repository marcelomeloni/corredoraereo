"use client";

import { motion } from "framer-motion";
import { Leaf, Thermometer, Droplets, Wind } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Fluxo Gênico",
    desc: "Interligação das copas viabiliza a dispersão de sementes e pólen por polinizadores.",
  },
  {
    icon: Thermometer,
    title: "Conforto Térmico",
    desc: "Redução drástica das ilhas de calor e retenção de umidade nas calçadas.",
  },
  {
    icon: Droplets,
    title: "Drenagem Urbana",
    desc: "Maior absorção das águas pluviais pelo solo e recarga do lençol freático.",
  },
  {
    icon: Wind,
    title: "Retenção de CO₂ & Som",
    desc: "Atenuação de ruídos urbanos e filtragem natural da poluição atmosférica.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ProjetoSection() {
  return (
    <section id="projeto" className="relative border-t border-line px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
 

        {/* Title */}
        <motion.h2
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-6xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Revertendo o isolamento genético dos nossos fragmentos florestais.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Com o avanço da urbanização e a perda contínua da arborização nas calçadas pelo
          comércio e impermeabilização, os bosques tornaram-se ilhas isoladas. As trocas
          genéticas ficaram restritas ao cruzamento entre &ldquo;plantas irmãs&rdquo;, gerando
          empobrecimento biológico e efeito de borda.
        </motion.p>

        {/* Scientific Quote */}
        <motion.blockquote
          className="mt-10 max-w-3xl border-l-2 border-green pl-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-base italic leading-relaxed text-ink/80">
            &ldquo;O isolamento reprodutivo induz à autopolinização e bloqueia a troca de
            diásporas. A polinização passa a depender exclusivamente de uma fauna restrita de
            aves, morcegos e vento.&rdquo;
          </p>
          <cite className="mt-3 block text-sm not-italic text-ink-soft">
            — Dr. Santin (1999) — Unicamp
          </cite>
        </motion.blockquote>

        {/* Benefits Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="rounded-lg border border-line bg-panel p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <b.icon className="mb-4 h-8 w-8 text-green" />
              <h3 className="mb-2 text-lg font-semibold text-ink">{b.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
