import { Trees, Phone, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Trees className="h-6 w-6 text-green" />
              <span className="text-lg font-bold text-ink">
                Corredor Aéreo <span className="text-green">{"{ Bosques }"}</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              Amigos do Bosque dos Italianos (Praça Samuel Wainer)
            </p>
          </div>

          {/* Col 2: Address */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
              Endereço
            </h4>
            <p className="text-sm leading-relaxed text-ink-soft">
              Rua Paulo Justi, nº 53 — Jardim Guanabara / Jardim Chapadão
              <br />
              Campinas/SP — CEP 13070-133
            </p>
            <p className="mt-4 text-xs text-ink-soft">
              Parceria institucional: Departamento de Parques e Jardins (DPJ) — Secretaria de
              Serviços Públicos de Campinas
            </p>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5519981625010"
                className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <Phone className="h-4 w-4" />
                (19) 98162-5010 / (19) 98200-6904
              </a>
              <a
                href="https://instagram.com/amigos_bosque_italianos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <Instagram className="h-4 w-4" />
                @amigos_bosque_italianos
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-line pt-6 text-center">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} Amigos do Bosque dos Italianos.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
