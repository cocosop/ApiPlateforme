import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  BankOutlined,
  TeamOutlined,
  UserOutlined,
  ApartmentOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  DollarOutlined,
  InfoCircleOutlined,
  GlobalOutlined,
  ArrowUpOutlined,
  CheckCircleOutlined,
  CheckOutlined,
  RightOutlined,
  DownOutlined,
  AuditOutlined,
  ExportOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import HeroImg from "../../../assets/img/entreprise.jpg";
import ProcessBg from "../../../assets/img/o2.png";
import I1 from "../../../assets/img/i1.png";
import I2 from "../../../assets/img/i2.png";
import I3 from "../../../assets/img/i3.png";

const BASE = "pages_secteurs.creation_entreprise";

const VILLES = ["Yaoundé", "Douala", "Bafoussam", "Garoua", "Bertoua", "Ngaoundéré", "Maroua", "Bamenda", "Ebolowa", "Buéa"];

// Apparition douce au défilement
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light }) => (
  <h2 className={`mb-10 text-center text-2xl font-extrabold sm:text-3xl ${light ? "text-white" : "text-[#2D1B8F]"}`}>{children}</h2>
);

const CheckItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <li className={`flex items-start gap-2.5 text-sm leading-relaxed text-gray-600 ${className}`}>
    <CheckCircleOutlined className="mt-1 shrink-0 text-[#16A34A]" />
    <span>{children}</span>
  </li>
);

const AccordionItem: React.FC<{ title: string; open: boolean; onToggle: () => void; children: React.ReactNode }> = ({ title, open, onToggle, children }) => (
  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_2px_10px_rgba(16,24,40,0.04)]">
    <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between px-5 py-4 text-left">
      <span className="text-sm font-semibold text-[#1A0C4F]">{title}</span>
      <DownOutlined className={`text-xs text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
    </button>
    {open && <div className="border-t border-gray-100 px-5 py-4">{children}</div>}
  </div>
);

const CreationEntreprise: React.FC = () => {
  const { t } = useTranslation();
  const k = (key: string) => t(`${BASE}.${key}`);
  const [docTab, setDocTab] = useState<"ets" | "sarl">("ets");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  /* Ouverture directe d'une section via l'ancre (#couts, #documents...) */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const timer = setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" }), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const navItems = [
    { id: "cfce", icon: <BankOutlined /> },
    { id: "types", icon: <TeamOutlined /> },
    { id: "structures", icon: <ApartmentOutlined /> },
    { id: "processus", icon: <ClockCircleOutlined /> },
    { id: "documents", icon: <FileTextOutlined /> },
    { id: "couts", icon: <DollarOutlined /> },
    { id: "ressources", icon: <InfoCircleOutlined /> },
  ];

  const cfceCards = [
    { title: k("cfce.card1_title"), desc: k("cfce.card1_desc"), image: I1 },
    { title: k("cfce.card2_title"), desc: k("cfce.card2_desc"), image: I2 },
    { title: k("cfce.card3_title"), desc: k("cfce.card3_desc"), image: I3 },
  ];

  const documentsEts = [1, 2, 3, 4, 5, 6].map((n) => k(`documents.ets_item${n}`));
  const documentsSarl = [1, 2, 3, 4, 5, 6].map((n) => k(`documents.sarl_item${n}`));

  const types = [
    { id: "physique", icon: <UserOutlined />, iconBg: "bg-[#FEF9C3] text-[#CA8A04]" },
    { id: "morale", icon: <TeamOutlined />, iconBg: "bg-[#EEF2FF] text-[#4F2BDF]" },
  ];

  const structures = [
    { type: "EURL", desc: k("structures.eurl_desc"), capital: `${k("structures.minimum")} 100 000 FCFA` },
    { type: "SARL", desc: k("structures.sarl_desc"), capital: `${k("structures.minimum")} 100 000 FCFA` },
    { type: "SA", desc: k("structures.sa_desc"), capital: `${k("structures.minimum")} 10 000 000 FCFA` },
    { type: "SAS", desc: k("structures.sas_desc"), capital: k("structures.capital_free") },
  ];

  const sarlSteps = [1, 2, 3, 4].map((n) => ({
    title: k(`detail.sarl_s${n}_t`),
    desc: k(`detail.sarl_s${n}_d`),
    bg: ["bg-[#E3FBEF]", "bg-[#EEF2FF]", "bg-[#E3FBEF]", "bg-[#FCEFFE]"][n - 1],
  }));

  const delays = [
    { label: k("documents.delay_ets"), value: k("documents.one_week") },
    { label: k("documents.delay_sarl_small"), value: k("documents.one_week") },
    { label: k("documents.delay_sarl_big"), value: k("documents.variable"), note: k("documents.depends_notary") },
  ];

  const costs = [
    { label: k("couts.cnps"), value: "8 000 XAF", note: k("couts.cnps_note") },
    { label: k("couts.non_emploi"), value: "2 500 XAF", note: k("couts.non_emploi_note") },
    { label: k("couts.patente_label"), value: k("couts.patente_value"), note: k("couts.patente_note") },
    { label: k("couts.carte_label"), value: k("couts.carte_value"), note: k("couts.carte_note") },
    { label: k("couts.bail_label"), value: k("couts.bail_value"), note: k("couts.bail_note") },
    { label: k("couts.rccm_label"), value: k("couts.rccm_value"), note: k("couts.rccm_note") },
  ];

  const totals = [
    { label: k("couts.total_ets"), value: "≈ 75 000", note: k("couts.hors_impots") },
    { label: k("couts.total_sarl"), value: "≈ 85 000", note: k("couts.hors_impots") },
    { label: k("couts.total_impots"), value: "≈ 200 000", note: k("couts.selon_bail") },
  ];

  const resourceLinks = [
    { title: k("ressources.api_title"), desc: k("ressources.api_desc"), url: "https://investincameroon.net/" },
    { title: k("ressources.apme_title"), desc: k("ressources.apme_desc"), url: "https://www.apme.cm/" },
    { title: k("ressources.impots_title"), desc: k("ressources.impots_desc"), url: "https://www.impots.cm" },
  ];

  const legalTexts = ["ohada", "loi", "decret"].map((id) => ({ title: k(`ressources.${id}_title`), desc: k(`ressources.${id}_desc`) }));

  const faq = [
    {
      id: "contexte",
      title: k("faq.contexte"),
      content: (
        <>
          <p className="mb-3 text-sm text-gray-600">{k("faq.contexte_desc")}</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {legalTexts.map((text) => (
              <div key={text.title} className="flex items-start gap-2 rounded-lg bg-[#F7F8FB] p-3">
                <DownloadOutlined className="mt-0.5 text-[#4F2BDF]" />
                <div>
                  <div className="text-sm font-semibold text-[#1A0C4F]">{text.title}</div>
                  <div className="text-xs text-gray-500">{text.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "avantages",
      title: k("faq.avantages"),
      content: <ul className="space-y-2">{["av1", "av2", "av3"].map((key) => <CheckItem key={key}>{k(`faq.${key}`)}</CheckItem>)}</ul>,
    },
    {
      id: "institutions",
      title: k("faq.institutions"),
      content: (
        <div className="grid gap-2 sm:grid-cols-3">
          {resourceLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 rounded-lg border border-gray-100 p-3 transition-colors hover:border-[#4F2BDF] hover:bg-[#F1EEFE]"
            >
              <ExportOutlined className="mt-0.5 text-gray-400 group-hover:text-[#4F2BDF]" />
              <div>
                <div className="text-sm font-semibold text-[#1A0C4F]">{link.title}</div>
                <div className="text-xs text-gray-500">{link.desc}</div>
              </div>
            </a>
          ))}
        </div>
      ),
    },
    {
      id: "processus",
      title: k("faq.processus"),
      content: (
        <ol className="space-y-3">
          {[1, 2, 3, 4].map((n) => (
            <li key={n} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F1EEFE] text-xs font-bold text-[#4F2BDF]">{n}</span>
              <div>
                <div className="text-sm font-semibold text-[#1A0C4F]">{k(`processus.step${n}_title`)}</div>
                <div className="text-sm text-gray-600">{k(`processus.step${n}_desc`)}</div>
              </div>
            </li>
          ))}
        </ol>
      ),
    },
    {
      id: "couts_delais",
      title: k("faq.couts_delais"),
      content: <ul className="space-y-2">{["cd1", "cd2", "cd3", "cd4"].map((key) => <CheckItem key={key}>{k(`faq.${key}`)}</CheckItem>)}</ul>,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ HÉRO ═══════════════ */}
      <header className="relative overflow-hidden bg-[#111229]">
        <img src={HeroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B3C5C]/80 via-[#1C1D3D]/88 to-[#0D0E24]/95" />

        <div className="relative z-10 mx-auto flex min-h-[460px] max-w-4xl flex-col items-center justify-center px-6 pb-12 pt-20 text-center sm:min-h-[520px]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <span className="mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              {k("hero.badge")}
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              {k("hero.title")}
              <br />
              {k("hero.title_highlight")}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">{k("hero.subtitle")}</p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("cfce")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] px-9 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/40"
            >
              {k("hero.button")}
              <RightOutlined className="text-xs" />
            </motion.button>
          </motion.div>
        </div>

        <nav className="relative z-10 border-t border-white/10 bg-[#0D0E24]/70 backdrop-blur" aria-label="Sections de la page">
          <ul className="mx-auto flex max-w-5xl flex-nowrap items-center justify-start gap-2 overflow-x-auto px-4 py-4 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <span className="text-[13px]">{item.icon}</span>
                  {k(`nav.${item.id}`)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ═══════════════ CFCE : GUICHET UNIQUE ═══════════════ */}
      <section id="cfce" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <SectionTitle>{k("cfce.title")}</SectionTitle>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {cfceCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl bg-gradient-to-b from-[#F3F0FF] to-[#EDE9FE] p-5 transition-shadow hover:shadow-lg">
                  <h3 className="text-lg font-bold text-[#2D1B8F]">{card.title}</h3>
                  <div className="flex flex-1 items-center justify-center py-6">
                    <img src={card.image} alt="" className="h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-[0_2px_10px_rgba(16,24,40,0.05)]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2A0B5C] text-white">
                      <ArrowUpOutlined className="rotate-45 text-sm" />
                    </span>
                    <p className="text-xs leading-snug text-gray-600">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <div className="h-full rounded-2xl bg-gradient-to-br from-[#E3FBEF] to-[#C9F7DE] p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#15803D]">
                  <GlobalOutlined /> {k("cfce.presence_title")}
                </h3>
                <p className="mt-1 text-xs text-gray-600">{k("cfce.presence_desc")}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {VILLES.map((ville) => (
                    <span key={ville} className="min-w-[88px] rounded-full bg-white px-4 py-1.5 text-center text-xs font-medium text-[#1A0C4F] shadow-sm">
                      {ville}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] p-6">
                <h3 className="text-base font-bold text-[#2D1B8F]">{k("cfce.simple_title")}</h3>
                <ol className="mt-3 space-y-2.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <li key={n} className="flex items-center gap-3 text-xs text-gray-600">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#2D1B8F] shadow-sm">
                        {String(n).padStart(2, "0")}
                      </span>
                      {k(`cfce.simple_s${n}`)}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ TYPES D'ENTREPRISES ═══════════════ */}
      <section id="types" className="scroll-mt-24 bg-[#F7F7FB] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <SectionTitle>{k("types.title")}</SectionTitle>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {types.map((type, i) => (
              <Reveal key={type.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-[0_4px_20px_rgba(16,24,40,0.05)]">
                  <div className="mb-5 flex items-center gap-3">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full text-lg ${type.iconBg}`}>{type.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-[#1A0C4F]">{k(`types.${type.id}_title`)}</div>
                      <div className="text-xs text-gray-500">{k(`types.${type.id}_tag`)}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#2D1B8F]">{k("types.caracteristiques")}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600 marker:text-gray-400">
                    {[1, 2, 3, 4].map((n) => <li key={n}>{k(`types.${type.id}_c${n}`)}</li>)}
                  </ul>
                  <div className="my-5 h-px bg-gray-100" />
                  <h3 className="text-xl font-extrabold text-[#16A34A]">{k("types.avantages")}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600 marker:text-gray-400">
                    {[1, 2, 3].map((n) => <li key={n}>{k(`types.${type.id}_a${n}`)}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STRUCTURES JURIDIQUES ═══════════════ */}
      <section id="structures" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <SectionTitle>{k("structures.title")}</SectionTitle>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 divide-y divide-gray-100 rounded-2xl border border-gray-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
              {structures.map((s) => (
                <div key={s.type} className="flex flex-col items-center px-5 py-6 text-center">
                  <div className="text-base font-extrabold text-[#2D1B8F]">{s.type}</div>
                  <div className="mt-1 min-h-[2rem] text-xs text-gray-500">{s.desc}</div>
                  <span className="mt-3 rounded-full bg-[#F1EEFE] px-4 py-1.5 text-xs font-semibold text-[#2D1B8F]">{s.capital}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ PROCESSUS DÉTAILLÉ ═══════════════ */}
      <section id="processus" className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20">
        <img src={ProcessBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2B1C]/70 via-[#14532D]/45 to-[#0D2B1C]/70" />
        <div className="relative mx-auto max-w-5xl px-4">
          <Reveal>
            <SectionTitle light>{k("detail.title")}</SectionTitle>
          </Reveal>

          {/* Établissement */}
          <Reveal>
            <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#2D1B8F]">
                <UserOutlined /> {k("detail.ets_title")}
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-[#E3FBEF] p-4">
                  <div className="mb-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-[#2D1B8F] shadow-sm">
                    <span className="text-xs text-gray-400">01</span> {k("detail.step_prep")}
                  </div>
                  <ul className="space-y-2">
                    {documentsEts.map((doc) => <CheckItem key={doc} className="text-xs">{doc}</CheckItem>)}
                  </ul>
                </div>
                <div className="rounded-xl bg-[#EEF2FF] p-4">
                  <div className="mb-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-[#2D1B8F] shadow-sm">
                    <span className="text-xs text-gray-400">02</span> {k("detail.step_depot")}
                  </div>
                  <p className="text-xs leading-relaxed text-gray-600">{k("detail.depot_desc")}</p>
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#4F2BDF]">
                    <ClockCircleOutlined /> {k("detail.traitement_badge")}
                  </div>
                </div>
                <div className="rounded-xl bg-[#E3FBEF] p-4">
                  <div className="mb-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-[#2D1B8F] shadow-sm">
                    <span className="text-xs text-gray-400">03</span> {k("detail.step_recup")}
                  </div>
                  <ul className="list-disc space-y-1.5 pl-4 text-xs text-gray-600">
                    <li>{k("detail.recup_1")}</li>
                    <li>{k("detail.recup_2")}</li>
                  </ul>
                  <div className="mt-4 rounded-lg bg-white px-3 py-2 text-center text-[11px] leading-snug text-gray-500">{k("detail.recup_note")}</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* SARL */}
          <Reveal className="mt-6">
            <div className="rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#2D1B8F]">
                <TeamOutlined /> {k("detail.sarl_title")}
              </h3>
              <p className="mb-4 mt-2 text-sm font-bold text-[#DC2626]">{k("detail.sarl_capital")}</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {sarlSteps.map((step) => (
                  <div key={step.title} className={`rounded-xl p-4 ${step.bg}`}>
                    <div className="text-sm font-bold text-[#2D1B8F]">{step.title}</div>
                    <div className="mt-1 text-xs leading-snug text-gray-600">{step.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 rounded-2xl bg-gradient-to-r from-[#EEF2FF] to-[#FCEFFE] p-5 md:grid-cols-2">
                <div>
                  <span className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[#2D1B8F] shadow-sm">{k("detail.notaire_badge")}</span>
                  <div className="mt-3 text-sm font-bold text-[#1A0C4F]">{k("detail.notaire_title")}</div>
                  <ul className="mt-2 space-y-1.5">
                    {[1, 2, 3].map((n) => <CheckItem key={n} className="text-xs">{k(`detail.notaire_${n}`)}</CheckItem>)}
                  </ul>
                </div>
                <div className="self-center rounded-xl bg-[#E9E4FD] p-4">
                  <div className="text-sm font-bold text-[#2D1B8F]">{k("detail.avantage_title")}</div>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">{k("detail.avantage_desc")}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ ENREGISTREMENT AUX IMPÔTS ═══════════════ */}
      <section className="bg-white pt-16 sm:pt-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="rounded-2xl bg-[#EEF2FF] p-6 sm:p-7">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#2D1B8F]">
                <AuditOutlined /> {k("impots.title")}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-3 text-sm font-bold text-[#1A0C4F]">{k("impots.docs_title")}</div>
                  <ul className="space-y-2">
                    {[1, 2, 3, 4, 5].map((n) => <CheckItem key={n}>{k(`impots.d${n}`)}</CheckItem>)}
                  </ul>
                </div>
                <div>
                  <div className="mb-3 text-sm font-bold text-[#1A0C4F]">{k("impots.costs_title")}</div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="text-2xl font-extrabold text-[#DC2626]">{k("impots.amount")}</div>
                    <div className="mt-1 text-sm text-gray-600">{k("impots.bail")}</div>
                    <div className="mt-1 text-xs text-gray-400">{k("impots.example")}</div>
                  </div>
                  <div className="mt-3 rounded-xl bg-[#FEF9C3] px-4 py-3 text-xs text-[#854D0E]">{k("impots.note")}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ DOCUMENTS REQUIS ═══════════════ */}
      <section id="documents" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <SectionTitle>{k("documents.title")}</SectionTitle>
          </Reveal>
          <Reveal>
            <div className="grid gap-6 rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(16,24,40,0.07)] sm:p-7 md:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-[#F3F4F6] p-1" role="tablist">
                  {(["ets", "sarl"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={docTab === tab}
                      onClick={() => setDocTab(tab)}
                      className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                        docTab === tab ? "bg-[#2A0B5C] text-white shadow" : "text-gray-600 hover:text-[#2A0B5C]"
                      }`}
                    >
                      {k(`documents.tab_${tab}`)}
                    </button>
                  ))}
                </div>
                <ul className="space-y-2">
                  {(docTab === "ets" ? documentsEts : documentsSarl).map((doc) => (
                    <li key={doc} className="flex items-start gap-3 rounded-lg bg-[#F7F8FB] px-4 py-3 text-xs text-gray-700">
                      <CheckCircleOutlined className="mt-0.5 text-[#16A34A]" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-[#EEF2FF] to-[#E0E7FF] p-6">
                <h3 className="mb-5 flex items-center justify-center gap-2 text-base font-bold text-[#2D1B8F]">
                  <ClockCircleOutlined /> {k("documents.delays_title")}
                </h3>
                <div className="space-y-4">
                  {delays.map((d) => (
                    <div key={d.label} className="flex items-center gap-4 rounded-full bg-white py-3 pl-3 pr-6 shadow-[0_6px_18px_rgba(79,43,223,0.12)]">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-[#4F2BDF]">
                        <CheckOutlined />
                      </span>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-wide text-[#16A34A]">{d.label}</div>
                        <div className="text-xl font-extrabold text-[#2D1B8F]">{d.value}</div>
                        {d.note && <div className="text-[10px] text-gray-500">{d.note}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ COÛTS ═══════════════ */}
      <section id="couts" className="scroll-mt-24 bg-gradient-to-b from-white via-[#F8F7FF] to-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <SectionTitle>{k("couts.title")}</SectionTitle>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {costs.map((cost, i) => (
              <Reveal key={cost.label} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(16,24,40,0.04)]">
                  <div className="text-xs font-medium text-[#6D4AE8]">{cost.label}</div>
                  <div className="mt-1 text-lg font-extrabold leading-snug text-[#1A0C4F]">{cost.value}</div>
                  <div className="mt-1 text-[11px] text-gray-500">{cost.note}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] p-6">
              <h3 className="mb-5 text-center text-base font-bold text-[#2D1B8F]">{k("couts.total_title")}</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {totals.map((total) => (
                  <div key={total.label} className="rounded-xl bg-white px-4 py-5 text-center shadow-sm">
                    <div className="text-xs text-[#6D4AE8]">{total.label}</div>
                    <div className="mt-1 text-2xl font-extrabold text-[#1A0C4F]">{total.value}</div>
                    <div className="text-[11px] text-gray-500">{total.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ QUESTIONS / RESSOURCES ═══════════════ */}
      <section id="ressources" className="scroll-mt-24 bg-white pb-20 pt-10">
        <div className="mx-auto max-w-3xl space-y-3 px-4">
          {faq.map((item) => (
            <AccordionItem key={item.id} title={item.title} open={openFaq === item.id} onToggle={() => setOpenFaq(openFaq === item.id ? null : item.id)}>
              {item.content}
            </AccordionItem>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreationEntreprise;
