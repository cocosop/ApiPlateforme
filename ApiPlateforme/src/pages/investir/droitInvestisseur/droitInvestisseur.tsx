import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  BankOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  SwapOutlined,
  SolutionOutlined,
  RocketOutlined,
  GlobalOutlined,
  CheckCircleFilled,
  DownloadOutlined,
  ExportOutlined,
  BulbOutlined,
  RightOutlined,
} from "@ant-design/icons";

import HeroImg from "../../../assets/img/droit.png";
import Y1 from "../../../assets/img/y1.png";
import Y2 from "../../../assets/img/y2.png";
import Y3 from "../../../assets/img/y3.png";
import Y4 from "../../../assets/img/y4.png";
import Y5 from "../../../assets/img/y5.png";
import Y6 from "../../../assets/img/y6.png";
import Y7 from "../../../assets/img/y7.png";
import Y8 from "../../../assets/img/y8.png";
import Y9 from "../../../assets/img/y9.png";
import Y10 from "../../../assets/img/y10.png";

import FeatureSection, { Accent } from "../../../components/showcase/FeatureSection";
import ModalShell, { ModalCard, StatTile } from "../../../components/showcase/ModalShell";

const BASE = "pages_investir.droits_investisseurs";

// Convertit **texte** en <strong>
const formatBold = (text: string): React.ReactNode =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-gray-800">{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

type Resource = { url: string; type: "link" | "download" };

interface SectionConfig {
  key: string;           // clé de traduction
  id: string;            // ancre dans la page
  image: string;
  icon: React.ReactNode;
  button: Accent;
  background: string;
  statAccents: [Accent, Accent, Accent];
  orderedBlocks?: number[];   // blocs à afficher en étapes numérotées
  inHeroNav: boolean;         // pastille affichée en bas du héro (comme la maquette)
  resources: Resource[];
}

// Ordre, images, couleurs et fonds repris de la maquette
const SECTIONS: SectionConfig[] = [
  {
    key: "protection", id: "protection", image: Y1, icon: <SafetyCertificateOutlined />,
    button: "purple", background: "bg-white", statAccents: ["purple", "green", "purple"], inHeroNav: false,
    resources: [
      { url: "https://www.api.cm/index.php/fr/investir-au-cameroun/le-code-des-investissements", type: "link" },
      { url: "https://www.ohada.org/index.php/fr/droit-unifie/droit-des-affaires", type: "link" },
      { url: "/chemin/vers/la/constitution-camerounaise.pdf", type: "download" },
    ],
  },
  {
    key: "traitement", id: "traitement", image: Y2, icon: <AuditOutlined />,
    button: "green", background: "bg-[#E3F9EE]", statAccents: ["green", "purple", "green"], inHeroNav: true,
    resources: [
      { url: "https://www.api.cm/index.php/fr/investir-au-cameroun/le-code-des-investissements", type: "link" },
      { url: "https://www.wto.org/french/tratop_f/invest_f/invest_f.htm", type: "link" },
      { url: "/docs/guide-investisseur-cameroun.pdf", type: "download" },
    ],
  },
  {
    key: "cadre_legal", id: "cadre-legal", image: Y3, icon: <BankOutlined />,
    button: "purple", background: "bg-white", statAccents: ["purple", "green", "purple"], inHeroNav: true,
    resources: [
      { url: "https://www.api.cm/index.php/fr/", type: "link" },
      { url: "https://www.ohada.org/index.php/fr/", type: "link" },
      { url: "/docs/code-general-impots-cameroun.pdf", type: "download" },
      { url: "/docs/code-travail-cameroun.pdf", type: "download" },
    ],
  },
  {
    key: "droit_propriete", id: "droit-propriete", image: Y4, icon: <HomeOutlined />,
    button: "green", background: "bg-[#E3F9EE]", statAccents: ["green", "purple", "green"], inHeroNav: true,
    resources: [
      { url: "https://www.mindcaf.gov.cm/", type: "link" },
      { url: "/docs/loi-fonciere-cameroun.pdf", type: "download" },
      { url: "/docs/guide-acquisition-fonciere-investisseurs.pdf", type: "download" },
    ],
  },
  {
    key: "procedure_terrain", id: "procedure-terrain", image: Y5, icon: <EnvironmentOutlined />,
    button: "green", background: "bg-white", statAccents: ["green", "green", "green"], inHeroNav: true,
    orderedBlocks: [1],
    resources: [
      { url: "https://www.api.cm/index.php/fr/investir-au-cameroun/formalites-et-procedures", type: "link" },
      { url: "https://www.mindcaf.gov.cm/index.php/fr/informations/regime-foncier", type: "link" },
      { url: "/docs/guide-procedure-fonciere-cameroun.pdf", type: "download" },
    ],
  },
  {
    key: "fiscalite_incitations", id: "fiscalite-incitations", image: Y6, icon: <DollarOutlined />,
    button: "purple", background: "bg-white", statAccents: ["purple", "green", "purple"], inHeroNav: true,
    resources: [
      { url: "https://www.impots.cm/index.php/fr/telechargements/code-general-des-impots", type: "link" },
      { url: "https://www.api.cm/index.php/fr/investir-au-cameroun/avantages-fiscaux-et-douaniers", type: "link" },
      { url: "/docs/guide-fiscalite-entreprise-cameroun.pdf", type: "download" },
    ],
  },
  {
    key: "resolution_conflits", id: "resolution-conflits", image: Y7, icon: <SolutionOutlined />,
    button: "green", background: "bg-white", statAccents: ["green", "purple", "green"], inHeroNav: true,
    resources: [
      { url: "https://www.ohada.org/index.php/fr/arbitrage", type: "link" },
      { url: "https://icsid.worldbank.org/fr/members/member-states", type: "link" },
      { url: "/docs/guide-resolution-litiges-cameroun.pdf", type: "download" },
    ],
  },
  {
    key: "liberte_entreprise", id: "liberte-entreprise", image: Y8, icon: <RocketOutlined />,
    button: "purple", background: "bg-[#F1F2F6]", statAccents: ["purple", "green", "purple"], inHeroNav: true,
    resources: [
      { url: "https://www.api.cm/index.php/fr/", type: "link" },
      { url: "https://www.ohada.org/index.php/fr/", type: "link" },
    ],
  },
  {
    key: "rse", id: "rse", image: Y9, icon: <GlobalOutlined />,
    button: "green", background: "bg-white", statAccents: ["green", "purple", "green"], inHeroNav: true,
    resources: [
      { url: "https://www.minepded.gov.cm/", type: "link" },
      { url: "https://www.api.cm/index.php/fr/", type: "link" },
    ],
  },
  {
    key: "liberte_capitaux", id: "liberte-capitaux", image: Y10, icon: <SwapOutlined />,
    button: "green", background: "bg-[#E3F9EE]", statAccents: ["green", "purple", "green"], inHeroNav: false,
    resources: [
      { url: "https://www.beac.int/reglementation/reglementation-de-change/", type: "link" },
      { url: "https://www.api.cm/index.php/fr/investir-au-cameroun/le-code-des-investissements", type: "link" },
      { url: "/docs/guide-transferts-capitaux-cameroun.pdf", type: "download" },
    ],
  },
];

type TranslatedSection = {
  title: string;
  description: string;
  button?: string;
  facts: Record<string, string>;
  dialogIntro: string;
  blocks: Record<string, string>;
  advice?: string;
  resources: Record<string, string>;
};

/** Regroupe les clés b1_heading, b1_i1, b1_i2... en blocs ordonnés. */
const toBlocks = (blocks: Record<string, string>) => {
  const result: { index: number; heading: string; items: string[] }[] = [];
  for (let b = 1; blocks[`b${b}_heading`]; b++) {
    const items: string[] = [];
    for (let i = 1; blocks[`b${b}_i${i}`]; i++) items.push(blocks[`b${b}_i${i}`]);
    result.push({ index: b, heading: blocks[`b${b}_heading`], items });
  }
  return result;
};

const SectionModal: React.FC<{ config: SectionConfig; data: TranslatedSection; onClose: () => void }> = ({ config, data, onClose }) => {
  const { t } = useTranslation();
  const accent: Accent = config.button;

  return (
    <ModalShell title={data.title} image={config.image} icon={config.icon} accent={accent} onClose={onClose}>
      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[1, 2, 3].map((n, i) => (
          <StatTile key={n} value={data.facts[`f${n}_value`]} label={data.facts[`f${n}_label`]} accent={config.statAccents[i]} />
        ))}
      </div>

      <div className={`mb-5 rounded-2xl border p-5 text-[15px] leading-relaxed text-gray-600 ${accent === "green" ? "border-[#C6F0D6] bg-[#EAFBF1]" : "border-[#DCD4FB] bg-[#F1EEFE]"}`}>
        {formatBold(data.dialogIntro)}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {toBlocks(data.blocks).map((block) => {
          const ordered = config.orderedBlocks?.includes(block.index);
          return (
            <ModalCard key={block.index} title={block.heading} accent={accent} className={toBlocks(data.blocks).length % 2 === 1 && block.index === 1 ? "md:col-span-2" : ""}>
              <ul className="space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    {ordered ? (
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${accent === "green" ? "bg-[#EAFBF1] text-[#16A34A]" : "bg-[#F1EEFE] text-[#4F2BDF]"}`}>
                        {i + 1}
                      </span>
                    ) : (
                      <CheckCircleFilled className="mt-1 shrink-0 text-[#16A34A]" />
                    )}
                    <span>{formatBold(item)}</span>
                  </li>
                ))}
              </ul>
            </ModalCard>
          );
        })}
      </div>

      {data.advice && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-4 text-sm text-[#92400E]">
          <BulbOutlined className="mt-0.5 text-lg" />
          <span>{data.advice}</span>
        </div>
      )}

      <ModalCard title={t(`${BASE}.resources_title`)} icon={<BankOutlined />} accent="purple" className="mt-5">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {config.resources.map((resource, i) => {
            const label = data.resources[`r${i + 1}`];
            if (!label) return null;
            const download = resource.type === "download";
            return (
              <a
                key={resource.url + i}
                href={resource.url}
                target={download ? undefined : "_blank"}
                download={download || undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition-colors hover:border-[#4F2BDF] hover:bg-[#F1EEFE]"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${download ? "bg-[#EAFBF1] text-[#16A34A]" : "bg-[#F1EEFE] text-[#4F2BDF]"}`}>
                  {download ? <DownloadOutlined /> : <ExportOutlined />}
                </span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#1A0C4F]">{label}</span>
              </a>
            );
          })}
        </div>
      </ModalCard>
    </ModalShell>
  );
};

const InvestorRights: React.FC = () => {
  const { t } = useTranslation();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const section = (key: string) => t(`${BASE}.sections.${key}`, { returnObjects: true }) as TranslatedSection;

  /* Ouverture directe d'une section via l'ancre (#rse, #cadre-legal...) */
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

  const openConfig = SECTIONS.find((s) => s.key === openKey);

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ HÉRO ═══════════════ */}
      <header className="relative overflow-hidden bg-[#111229]">
        <img src={HeroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B3C5C]/85 via-[#1C1D3D]/90 to-[#0D0E24]/95" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-4xl flex-col items-center justify-center px-6 pb-12 pt-20 text-center sm:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              {t(`${BASE}.hero.badge`)}
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              {t(`${BASE}.hero.title`)}
              <br />
              {t(`${BASE}.hero.title_highlight`)}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              {t(`${BASE}.hero.subtitle`)}
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("protection")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] px-9 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/40"
            >
              {t(`${BASE}.hero.button`)}
              <RightOutlined className="text-xs" />
            </motion.button>
          </motion.div>
        </div>

        {/* Pastilles de navigation, en bas du héro */}
        <nav className="relative z-10 border-t border-white/10 bg-[#0D0E24]/70 backdrop-blur" aria-label="Sections de la page">
          <ul className="mx-auto flex max-w-5xl flex-nowrap items-center justify-start gap-2 overflow-x-auto px-4 py-4 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {SECTIONS.filter((s) => s.inHeroNav).map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(s.id)}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <span className="text-[13px]">{s.icon}</span>
                  {section(s.key).title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ═══════════════ SECTIONS ═══════════════ */}
      {SECTIONS.map((config) => {
        const data = section(config.key);
        return (
          <FeatureSection
            key={config.key}
            id={config.id}
            image={config.image}
            imageAlt={data.title}
            title={data.title}
            description={formatBold(data.description)}
            buttonLabel={data.button ?? t(`${BASE}.see_details`)}
            buttonAccent={config.button}
            buttonIcon={<RightOutlined className="text-[10px]" />}
            buttonIconPosition="end"
            background={config.background}
            stats={[1, 2, 3].map((n, i) => ({
              value: data.facts[`f${n}_value`],
              label: data.facts[`f${n}_label`],
              accent: config.statAccents[i],
            }))}
            onOpen={() => setOpenKey(config.key)}
          />
        );
      })}

      {/* ═══════════════ MODAL DE DÉTAIL ═══════════════ */}
      <AnimatePresence>
        {openConfig && (
          <SectionModal key={openConfig.key} config={openConfig} data={section(openConfig.key)} onClose={() => setOpenKey(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvestorRights;
