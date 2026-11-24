"use client";

import { motion } from "framer-motion";
import { Sprout, ArrowDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function RestauracaoSection() {
  return (
    <section id="restauracao" className="relative border-t border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="rounded-2xl border border-line bg-panel p-8 md:p-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="eyebrow mb-4 flex items-center gap-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Sprout className="h-4 w-4 text-green" />
            Corredor Aéreo entre Bosques
          </motion.p>

          <motion.h2
            className="max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Restauração da Natureza no Bairro
          </motion.h2>

          <motion.p
            className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft md:text-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Que tal ruas mais arborizadas, com sombras, flores e frutas?
          </motion.p>

          <motion.p
            className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            O Projeto Corredor Aéreo entre Bosques garante isso e muito mais
          </motion.p>

          <motion.div
            className="mt-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a href="#adesao" className="gradient-pill flex w-fit items-center gap-2" aria-label="Participe do Projeto Corredor Aéreo entre Bosques">
              Participe!
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
