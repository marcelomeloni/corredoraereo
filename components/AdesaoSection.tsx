"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { TreePine, CheckCircle2, AlertCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "1f54c64a-aa20-412e-9ed8-322bcd95651a";

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
  botcheck: z.string().optional(),
  concordancia: z.literal(true, {
    errorMap: () => ({ message: "É obrigatório concordar em zelar pela irrigação inicial da muda" }),
  }),
  privacidade: z.literal(true, {
    errorMap: () => ({ message: "É obrigatório concordar com o uso dos dados para o plantio" }),
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
  const [submitError, setSubmitError] = useState<string | null>(null);

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
      botcheck: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Nova adesão ao plantio - Corredor Aéreo entre Bosques",
      from_name: "Site Corredor Aéreo entre Bosques",
      replyto: data.email,
      botcheck: data.botcheck ?? "",
      "Nome completo": data.nome_completo,
      "E-mail de contato": data.email,
      "WhatsApp/Telefone": data.telefone_whatsapp,
      "Endereço do imóvel": data.endereco_imovel,
      "Relação com o imóvel": data.tipo_ocupacao,
      "Condição da calçada": data.situacao_calcada,
      "Irrigação inicial": "Concordo",
      "Privacidade/LGPD": "Concordo com o uso dos dados para o plantio",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message ?? "Não foi possível enviar sua solicitação. Tente novamente.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua solicitação. Tente novamente."
      );
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder-ink-soft outline-none transition-colors focus:border-green";
  const labelClasses = "mb-1.5 block text-sm font-medium text-ink";
  const errorClasses = "mt-1 flex items-center gap-1.5 text-xs text-red-600";

  return (
    <section id="adesao" className="relative border-t border-line px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        

        {/* Title */}
        <motion.h2
          className="mt-8 text-center font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Traga mais sombra, vida e valorização para a sua calçada.
        </motion.h2>

        {/* Explanation */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink-soft"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Você mora no Jardim Chapadão ou no Jardim Guanabara (especialmente no perímetro do projeto)?
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
            <div role="status" className="rounded-lg border border-green/30 bg-panel p-10 text-center">
              <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green" />
              <h3 className="mb-2 text-2xl font-bold text-ink">Solicitação Enviada com Sucesso!</h3>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-ink-soft">
                Sua adesão foi registrada pelos Amigos do Bosque dos Italianos e encaminhada ao DPJ (Prefeitura de Campinas). Entraremos em contato para vistoria técnica da calçada e agendamento do plantio gratuito.
              </p>
              <button
                type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
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
              className="space-y-6 rounded-lg border border-line bg-panel p-6 sm:p-10"
            >
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                {...register("botcheck")}
              />

              {/* Nome */}
              <div>
                <label htmlFor="nome_completo" className={labelClasses}>
                  Nome Completo <span className="text-green">*</span>
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
                    E-mail de Contato <span className="text-green">*</span>
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
                    WhatsApp / Telefone <span className="text-green">*</span>
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
                  Endereço do Imóvel (Rua, Número, Bairro) <span className="text-green">*</span>
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
                  Você é: <span className="text-green">*</span>
                </label>
                <select
                  id="tipo_ocupacao"
                  {...register("tipo_ocupacao")}
                  className={inputClasses}
                  aria-label="Tipo de ocupação"
                >
                  <option value="">Selecione sua relação com o imóvel...</option>
                  {ocupacaoOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-panel text-ink">
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
                    Condição da Calçada <span className="text-green">*</span>
                  </legend>
                  <div className="mt-3 space-y-2.5">
                    {calcadaOptions.map((opt) => (
                      <label
                        key={opt}
                        className="flex cursor-pointer items-start gap-3 rounded-md border border-transparent p-2 text-sm text-ink/90 transition-colors hover:border-line hover:bg-canvas/40"
                      >
                        <input
                          type="radio"
                          value={opt}
                          {...register("situacao_calcada")}
                          className="mt-0.5 accent-green"
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
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/90">
                  <input
                    type="checkbox"
                    {...register("concordancia")}
                    className="mt-1 accent-green"
                  />
                  <span>
                    Concordo em zelar pela irrigação inicial da muda nos primeiros meses de adaptação{" "}
                    <span className="text-green">*</span>
                  </span>
                </label>
                {errors.concordancia && (
                  <p className={errorClasses}>
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.concordancia.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/90">
                  <input
                    type="checkbox"
                    {...register("privacidade")}
                    className="mt-1 accent-green"
                  />
                  <span>
                    Concordo que meus dados sejam usados apenas para vistoria, contato e agendamento
                    do plantio gratuito, não sendo compartilhados para outras finalidades.{" "}
                    <span className="text-green">*</span>
                  </span>
                </label>
                {errors.privacidade && (
                  <p className={errorClasses}>
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    {errors.privacidade.message}
                  </p>
                )}
              </div>

              {submitError && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gradient-pill flex w-full items-center justify-center gap-2 py-3.5 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Enviar Solicitação de Adesão"
                >
                  <TreePine className="h-5 w-5 text-green" />
                  {isSubmitting ? "Enviando solicitação..." : "Enviar Solicitação de Adesão"}
                </button>
                <p className="mt-3 text-center text-xs text-ink-soft">
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
