import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RestauracaoSection from "@/components/RestauracaoSection";
import ProjetoSection from "@/components/ProjetoSection";
import HistoricoSection from "@/components/HistoricoSection";
import BiodiversidadeSection from "@/components/BiodiversidadeSection";
import CatalogoMudasSection from "@/components/CatalogoMudasSection";
import AcoesSection from "@/components/AcoesSection";
import AdesaoSection from "@/components/AdesaoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RestauracaoSection />
        <ProjetoSection />
        <HistoricoSection />
        <BiodiversidadeSection />
        <CatalogoMudasSection />
        <AcoesSection />
        <AdesaoSection />
      </main>
      <Footer />
    </>
  );
}
