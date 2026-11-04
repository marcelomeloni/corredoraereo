import { Trees, Phone, Mail, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-hairline bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Trees className="h-6 w-6 text-brand-green" />
              <span className="text-lg font-bold text-cream">
                Corredor Aéreo <span className="text-brand-green">{"{ Bosques }"}</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              Associação dos Amigos do Bosque dos Italianos (Praça Samuel Wainer)
            </p>
            <p className="mt-2 text-xs text-muted">
              Organização da Sociedade Civil (OSC) — CNPJ 04.359.187/0001-75
            </p>
          </div>

          {/* Col 2: Address */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
              Endereço
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              Rua Paulo Justi, nº 53 — Bairro Jardim Guanabara / Chapadão
              <br />
              Campinas/SP — CEP 13070-133
            </p>
            <p className="mt-4 text-xs text-muted">
              Parceria institucional: Departamento de Parques e Jardins (DPJ) — Secretaria de
              Serviços Públicos de Campinas
            </p>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5519981625010"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
              >
                <Phone className="h-4 w-4" />
                (19) 98162-5010 / (19) 98200-6904
              </a>
              <a
                href="mailto:amigos.bosque.italianos@gmail.com"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
              >
                <Mail className="h-4 w-4" />
                amigos.bosque.italianos@gmail.com
              </a>
              <a
                href="mailto:mudas.bosque@gmail.com"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
              >
                <Mail className="h-4 w-4" />
                mudas.bosque@gmail.com
              </a>
              <a
                href="https://instagram.com/amigos_bosque_italianos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
              >
                <Instagram className="h-4 w-4" />
                @amigos_bosque_italianos
              </a>
              <a
                href="https://www.bosquedositalianos.org.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-cream"
              >
                <Globe className="h-4 w-4" />
                www.bosquedositalianos.org.br
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-hairline pt-6 text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Associação dos Amigos do Bosque dos Italianos.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
