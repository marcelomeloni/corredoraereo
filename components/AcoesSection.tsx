"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, RotateCcw, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const phases = [
  {
    phase: "Etapa 01",
    status: "Concluída",
    title: "Inventário Quali-Quantitativo",
    desc: "Mapeamento botânico das árvores existentes, faltantes ou mortas nas calçadas do polígono.",
    icon: CheckCircle2,
    statusColor: "#0ae448",
  },
  {
    phase: "Etapa 02",
    status: "Ativa",
    title: "Sensibilização e Adesão de Moradores",
    desc: "Diálogo porta a porta e online para autorização do plantio pelos donos de imóveis.",
    icon: Clock,
    statusColor: "#00bae2",
  },
  {
    phase: "Etapa 03",
    status: "Programada",
    title: "Plantio Técnico e Recomposição",
    desc: "Corte de calçada, destoca se necessário, adubação, estaqueamento e plantio pela equipe do DPJ.",
    icon: Circle,
    statusColor: "#7c7c6f",
  },
  {
    phase: "Etapa 04",
    status: "Contínua",
    title: "Monitoramento e Tutoria",
    desc: "Acompanhamento até a copa superar 2 metros de altura e atingir autossuficiência.",
    icon: RotateCcw,
    statusColor: "#9d95ff",
  },
];

export default function AcoesSection() {
  return (
    <section id="acoes" className="relative border-t border-hairline px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">


        {/* Title */}
        <motion.h2
          className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-cream md:text-6xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          A meta: 150 árvores restaurando a rota verde.
        </motion.h2>

        {/* Progress Widget */}
        <motion.div
          className="mt-12 rounded-lg border border-hairline bg-panel p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-accent-clima" />
              <div>
                <p className="text-sm text-muted">Meta de Plantio</p>
                <p className="text-3xl font-bold text-cream">
                  150 <span className="text-lg font-normal text-muted">árvores</span>
                </p>
              </div>
            </div>
            <div className="rounded-full border border-accent-clima/30 bg-accent-clima/10 px-4 py-1.5 text-sm font-medium text-accent-clima">
              Em andamento — Adesão e Sensibilização
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-canvas">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #0ae448, #abff84)" }}
              initial={{ width: "0%" }}
              whileInView={{ width: "35%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            />
          </div>
          <p className="text-xs text-muted">
            Mudas, abertura de berço, preparo do solo e destoca fornecidos pelo DPJ (Prefeitura de Campinas)
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 space-y-0">
          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              className="relative flex gap-6 pb-12 last:pb-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                  style={{ borderColor: p.statusColor }}
                >
                  <p.icon className="h-5 w-5" style={{ color: p.statusColor }} />
                </div>
                {i < phases.length - 1 && (
                  <div className="mt-2 h-full w-px bg-hairline" />
                )}
              </div>

              {/* Content */}
              <div className="pt-1">
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {p.phase}
                  </span>
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: p.statusColor + "15",
                      color: p.statusColor,
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-cream">{p.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
