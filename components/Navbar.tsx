"use client";

import { useState } from "react";
import { Menu, X, Trees } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { label: "O Projeto", href: "#projeto" },
  { label: "Histórico & Conexão", href: "#historico" },
  { label: "Fauna & Flora", href: "#biodiversidade" },
  { label: "Espécies de Mudas", href: "#catalogo-mudas" },
  { label: "Registro de Ações", href: "#acoes" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <Trees className="h-6 w-6 text-brand-green" />
          <div>
            <span className="text-lg font-bold tracking-tight text-cream">
              Corredor Aéreo{" "}
              <span className="text-brand-green">{"{ Bosques }"}</span>
            </span>
           
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a href="#adesao" className="gradient-pill" aria-label="Solicitar Plantio Gratuito">
            Solicitar Plantio Gratuito
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-cream lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-hairline bg-canvas/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-muted transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#adesao"
                onClick={() => setIsOpen(false)}
                className="gradient-pill mt-2 text-center"
                aria-label="Solicitar Plantio Gratuito"
              >
                Solicitar Plantio Gratuito
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
