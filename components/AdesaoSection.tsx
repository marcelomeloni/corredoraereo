"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { TreePine, CheckCircle2, AlertCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const formSchema = z.object({
  nome_completo: z.string().min(3, "Nome completo é obrigatório"),
  email: z.string().email("E-mail de contato inválido"),
  telefone_whatsapp: z.string().min(10, "WhatsApp / Telefone é obrigatório (mínimo 10 dígitos)"),
  endereco_imovel: z.string().min(5, "Endereço completo do imóvel é obrigatório"),
  tipo_ocupacao: z.string().min(1, "Selecione o tipo de ocupação"),
  situacao_calcada: z.string().min(1, "Selecione a condição atual da sua calçada"),
  concordancia: z.literal(true, {
    errorMap: () => ({ message: "É obrigatório concordar em zelar pela irrigação inicial da muda" }),
  }),
});

type FormData = z.infer<typeof formSchema>;

const ocupacaoOptions = [
  "Proprietário(a)",
  "Inquilino(a)",
  "Comerciante / Responsável pelo estabelecimento",
];

const calcadaOptions = [
  "Já existe espaço/berço aberto",
  "Calçada totalmente pavimentada (necessita corte pelo DPJ)",
  "Existe toco de árvore morta (necessita destoca)",
];

export default function AdesaoSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome_completo: "",
      email: "",
      telefone_whatsapp: "",
      endereco_imovel: "",
      tipo_ocupacao: "",
      situacao_calcada: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simula o envio institucional para o DPJ / Associação
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Adesão submetida:", data);
    setSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-lg border border-hairline bg-canvas px-4 py-3 text-sm text-cream placeholder-muted outline-none transition-colors focus:border-brand-green";
  const labelClasses = "mb-1.5 block text-sm font-medium text-cream";
  const errorClasses = "mt-1 flex items-center gap-1.5 text-xs text-red-400";

  return (
    <section id="adesao" className="relative border-t border-hairline px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        

        {/* Title */}
        <motion.h2
          className="mt-8 text-center font-display text-4xl font-bold leading-tight tracking-tight text-cream md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Traga mais sombra, vida e valorização para a sua calçada.
        </motion.h2>

        {/* Explanation */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Você mora no Jardim Chapadão ou Guanabara (especialmente no perímetro do projeto)?
          A Prefeitura abre o berço na calçada e realiza o plantio da muda nativa adequada, sem custos.
          Você só precisa autorizar e regar nos primeiros meses.
        </motion.p>

        {/* Form container */}
        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {submitted ? (
            <div className="rounded-lg border border-brand-green/30 bg-panel p-10 text-center">
              <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-brand-green" />
              <h3 className="mb-2 text-2xl font-bold text-cream">Solicitação Enviada com Sucesso!</h3>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-muted">
                Sua adesão foi registrada na Associação dos Amigos do Bosque dos Italianos e encaminhada ao DPJ (Prefeitura de Campinas). Entraremos em contato para vistoria técnica da calçada e agendamento do plantio gratuito.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  reset();
                }}
                className="ghost-pill mt-8"
                aria-label="Fazer outra solicitação"
              >
                Nova Solicitação
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-6 rounded-lg border border-hairline bg-panel p-6 sm:p-10"
            >
              {/* Nome */}
              <div>
                <label htmlFor="nome_completo" className={labelClasses}>
                  Nome Completo <span className="text-brand-green">*</span>
                </label>
                <input
                  id="nome_completo"
                  type="text"
                  placeholder="Seu nome completo"
                  {...register("nome_completo")}
                  className={inputClasses}
                  aria-label="Nome Completo"
                />
                {errors.nome_completo && (
                  <p className={errorClasses}>
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.nome_completo.message}
                  </p>
                )}
              </div>

              {/* Email + Telefone */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    E-mail de Contato <span className="text-brand-green">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    {...register("email")}
                    className={inputClasses}
                    aria-label="E-mail de Contato"
                  />
                  {errors.email && (
                    <p className={errorClasses}>
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefone_whatsapp" className={labelClasses}>
                    WhatsApp / Telefone <span className="text-brand-green">*</span>
                  </label>
                  <input
                    id="telefone_whatsapp"
                    type="tel"
                    placeholder="(19) 9____-____"
                    {...register("telefone_whatsapp")}
                    className={inputClasses}
                    aria-label="WhatsApp ou Telefone"
                  />
                  {errors.telefone_whatsapp && (
                    <p className={errorClasses}>
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      {errors.telefone_whatsapp.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Endereço */}
              <div>
                <label htmlFor="endereco_imovel" className={labelClasses}>
                  Endereço do Imóvel (Rua, Número, Bairro) <span className="text-brand-green">*</span>
                </label>
                <input
                  id="endereco_imovel"
                  type="text"
                  placeholder="Ex: Rua Albano de Almeida Lima, 120, Jardim Guanabara"
                  {...register("endereco_imovel")}
                  className={inputClasses}
                  aria-label="Endereço do Imóvel"
                />
                {errors.endereco_imovel && (
                  <p className={errorClasses}>
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.endereco_imovel.message}
                  </p>
                )}
              </div>

              {/* Tipo Ocupação */}
              <div>
                <label htmlFor="tipo_ocupacao" className={labelClasses}>
                  Você é: <span className="text-brand-green">*</span>
                </label>
                <select
                  id="tipo_ocupacao"
                  {...register("tipo_ocupacao")}
                  className={inputClasses}
                  aria-label="Tipo de ocupação"
                >
                  <option value="">Selecione sua relação com o imóvel...</option>
                  {ocupacaoOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-panel text-cream">
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.tipo_ocupacao && (
                  <p className={errorClasses}>
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.tipo_ocupacao.message}
                  </p>
                )}
              </div>

              {/* Situação Calçada */}
              <div>
                <fieldset>
                  <legend className={labelClasses}>
                    Condição da Calçada <span className="text-brand-green">*</span>
                  </legend>
                  <div className="mt-3 space-y-2.5">
                    {calcadaOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex cursor-pointer items-start gap-3 rounded-md border border-transparent p-2 text-sm text-cream/90 transition-colors hover:border-hairline hover:bg-canvas/40"
                      >
                        <input
                          type="radio"
                          value={opt}
                          {...register("situacao_calcada")}
                          className="mt-0.5 accent-brand-green"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                {errors.situacao_calcada && (
                  <p className={errorClasses}>
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.situacao_calcada.message}
                  </p>
                )}
              </div>

              {/* Concordância */}
              <div className="pt-2">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-cream/90">
                  <input
                    type="checkbox"
                    {...register("concordancia")}
                    className="mt-1 accent-brand-green"
                  />
                  <span>
                    Concordo em zelar pela irrigação inicial da muda nos primeiros meses de adaptação{" "}
                    <span className="text-brand-green">*</span>
                  </span>
                </label>
                {errors.concordancia && (
                  <p className={errorClasses}>
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.concordancia.message}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-pill flex w-full items-center justify-center gap-2 py-3.5 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Enviar Solicitação de Adesão"
                >
                  <TreePine className="h-5 w-5 text-brand-green" />
                  {isSubmitting ? "Enviando solicitação..." : "Enviar Solicitação de Adesão"}
                </button>
                <p className="mt-3 text-center text-xs text-muted">
                  Plantio 100% gratuito executado pelo DPJ / Prefeitura Municipal de Campinas.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
