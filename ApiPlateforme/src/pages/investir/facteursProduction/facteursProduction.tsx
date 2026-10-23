import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRightOutlined, EyeOutlined } from "@ant-design/icons";

import HeroImg from "../../../assets/img/production.jpg";
import O1 from "../../../assets/img/o1.png";
import O2 from "../../../assets/img/o2.png";
import O3 from "../../../assets/img/o3.png";
import O4 from "../../../assets/img/o4.png";

import FactorsGrid from "../../../components/factorGrid";
import FoncierModal from "../../../components/foncierModal";
import MainOeuvreModal from "../../../components/mainOeuvreModal";
import CostsBySectorModal from "../../../components/costsBySectorModal";
import FiscaliteModal from "../../../components/fiscaliteModal";
import FeatureSection, { FeatureStat } from "../../../components/showcase/FeatureSection";

type ModalId = "main_oeuvre" | "foncier" | "fiscalite" | "couts_secteur";

const FacteursProduction: React.FC = () => {
  const { t } = useTranslation();
  const k = (key: string) => t(`pages_secteurs.facteurs_production.${key}`);
  const [openModal, setOpenModal] = useState<ModalId | null>(null);

  /* Ouverture directe d'une section via l'ancre (#foncier, #fiscalite...) */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { id: "facteurs", label: k("nav.facteurs") },
    { id: "main_oeuvre", label: k("nav.main_oeuvre") },
    { id: "foncier", label: k("nav.foncier") },
    { id: "fiscalite", label: k("nav.fiscalite") },
    { id: "couts_secteur", label: k("nav.couts_secteur") },
  ];

  const sectorCards: FeatureStat[] = [
    { value: k("costs_sector.sectors.agro.name"), label: "1 000 000 XAF/ha", accent: "green" },
    { value: k("costs_sector.sectors.energie.name"), label: "150 XAF/kWh", accent: "purple" },
    { value: k("costs_sector.sectors.numerique.name"), label: "20M XAF/projet", accent: "purple" },
    { value: k("costs_sector.sectors.mines.name"), label: "2 000 XAF/tonne", accent: "green" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ 1. HÉRO ═══════════════ */}
      <header className="relative overflow-hidden bg-[#111229]">
        <img src={HeroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B3C5C]/90 via-[#1C1D3D]/90 to-[#0D0E24]/95" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-4xl flex-col items-center justify-center px-6 pb-12 pt-20 text-center sm:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              {k("hero.badge")}
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              {k("hero.title")} {k("hero.title_highlight")}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              {k("hero.subtitle")}
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("facteurs")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] px-9 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/40"
            >
              {k("hero.button")}
              <ArrowRightOutlined />
            </motion.button>
          </motion.div>
        </div>

        {/* Menu des sections, en bas du héro */}
        <nav className="relative z-10 border-t border-white/10 bg-[#0D0E24]/70 backdrop-blur" aria-label="Sections de la page">
          <ul className="mx-auto flex max-w-5xl items-center justify-start gap-1 overflow-x-auto px-4 py-3 sm:justify-center">
            {navItems.map((item, i) => (
              <li key={item.id} className="flex items-center">
                {i > 0 && <span className="mx-2 hidden h-1 w-1 rounded-full bg-white/30 sm:block" aria-hidden="true" />}
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:text-sm"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ═══════════════ 2. COÛTS DE BASE + APERÇU ═══════════════ */}
      <section id="facteurs" className="scroll-mt-24 bg-white pt-16 sm:pt-20">
        <FactorsGrid />
      </section>

      {/* ═══════════════ 3. SECTIONS DÉTAILLÉES ═══════════════ */}
      <FeatureSection
        id="main_oeuvre"
        image={O1}
        imageAlt={k("nav.main_oeuvre")}
        title={k("main_oeuvre.title")}
        description={k("main_oeuvre.subtitle")}
        buttonLabel={k("main_oeuvre.button")}
        buttonAccent="purple"
        buttonIcon={<EyeOutlined />}
        background="bg-white"
        stats={[
          { value: k("main_oeuvre.stat3_value"), label: k("main_oeuvre.stat3_label"), accent: "purple" },
          { value: k("main_oeuvre.stat2_value"), label: k("main_oeuvre.stat2_label"), accent: "green" },
          { value: k("main_oeuvre.stat1_value"), label: k("main_oeuvre.stat1_label"), accent: "purple" },
        ]}
        onOpen={() => setOpenModal("main_oeuvre")}
      />

      <FeatureSection
        id="foncier"
        image={O2}
        imageAlt={k("nav.foncier")}
        title={k("foncier.title")}
        description={k("foncier.subtitle")}
        buttonLabel={k("foncier.button")}
        buttonAccent="green"
        buttonIcon={<EyeOutlined />}
        background="bg-[#E3F9EE]"
        stats={[
          { value: k("foncier.stat1_value"), label: k("foncier.stat1_label"), accent: "green" },
          { value: k("foncier.stat2_value"), label: k("foncier.stat2_label"), accent: "purple" },
          { value: k("foncier.stat3_value"), label: k("foncier.stat3_label"), accent: "green" },
        ]}
        onOpen={() => setOpenModal("foncier")}
      />

      <FeatureSection
        id="fiscalite"
        image={O3}
        imageAlt={k("nav.fiscalite")}
        title={k("fiscalite.title")}
        description={k("fiscalite.subtitle")}
        buttonLabel={k("fiscalite.button")}
        buttonAccent="purple"
        buttonIcon={<EyeOutlined />}
        background="bg-white"
        stats={[
          { value: k("fiscalite.stat1_value"), label: k("fiscalite.stat1_label"), accent: "purple" },
          { value: k("fiscalite.stat2_value"), label: k("fiscalite.stat2_label"), accent: "green" },
          { value: k("fiscalite.stat3_value"), label: k("fiscalite.stat3_label"), accent: "purple" },
        ]}
        onOpen={() => setOpenModal("fiscalite")}
      />

      <FeatureSection
        id="couts_secteur"
        image={O4}
        imageAlt={k("nav.couts_secteur")}
        title={k("couts_secteur.title")}
        description={k("couts_secteur.subtitle")}
        buttonLabel={k("couts_secteur.button")}
        buttonAccent="green"
        buttonIcon={<EyeOutlined />}
        background="bg-[#F1F2F6]"
        stats={sectorCards}
        onOpen={() => setOpenModal("couts_secteur")}
      />

      {/* ═══════════════ MODALS ═══════════════ */}
      <AnimatePresence>
        {openModal === "main_oeuvre" && <MainOeuvreModal key="main_oeuvre" onClose={() => setOpenModal(null)} />}
        {openModal === "foncier" && <FoncierModal key="foncier" onClose={() => setOpenModal(null)} />}
        {openModal === "fiscalite" && <FiscaliteModal key="fiscalite" onClose={() => setOpenModal(null)} />}
        {openModal === "couts_secteur" && <CostsBySectorModal key="couts_secteur" onClose={() => setOpenModal(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default FacteursProduction;
