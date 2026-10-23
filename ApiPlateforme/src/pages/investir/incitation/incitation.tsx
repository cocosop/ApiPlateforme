import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Award,
  BadgePercent,
  Building2,
  CalendarRange,
  Check,
  Coins,
  Cpu,
  Info,
  Layers,
  Receipt,
  Ship,
  Sparkles,
  Sprout,
  TrendingUp,
  Zap,
} from "lucide-react";

import HeroImg from "../../../assets/img/y10.png";
import AgroImg from "../../../assets/img/agroindustrie.jpg";
import EnergieImg from "../../../assets/img/solaire1.webp";
import TechImg from "../../../assets/img/numerique.jpg";

const BASE = "pages_investir.incitation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* Couleurs de chaque phase : vert pour l'installation, violet pour l'exploitation */
const PHASE_STYLES = {
  installation: {
    solid: "bg-[#16A34A]",
    text: "text-[#16A34A]",
    soft: "bg-[#EAFBF1]",
    border: "border-[#16A34A]",
    ring: "ring-[#16A34A]/15",
  },
  exploitation: {
    solid: "bg-[#4F2BDF]",
    text: "text-[#4F2BDF]",
    soft: "bg-[#F1EEFE]",
    border: "border-[#4F2BDF]",
    ring: "ring-[#4F2BDF]/15",
  },
} as const;

type PhaseKey = keyof typeof PHASE_STYLES;

type BenefitGroup = { title: string; icon: React.ReactNode; items: string[] };

type Phase = {
  key: PhaseKey;
  index: string;
  title: string;
  period: string;
  description: string;
  highlight: string;
  icon: React.ReactNode;
  groups: BenefitGroup[];
};

/* Retire les parenthèses de « (0-5 ans) » pour un affichage plus propre */
const cleanPeriod = (period: string) => period.replace(/[()]/g, "").trim();

const SectionHeading: React.FC<{ eyebrow: string; title: string; subtitle?: string }> = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#16A34A]">{eyebrow}</span>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A0840] sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-base leading-relaxed text-gray-500">{subtitle}</p>}
  </div>
);

const Incitation: React.FC = () => {
  const { t } = useTranslation();
  const [activePhase, setActivePhase] = useState<PhaseKey>("installation");
  const [activeSection, setActiveSection] = useState("apercu");

  const navItems = [
    { id: "apercu", label: t(`${BASE}.nav.apercu`), icon: <Sparkles className="h-3.5 w-3.5" /> },
    { id: "phases", label: t(`${BASE}.nav.phases`), icon: <Layers className="h-3.5 w-3.5" /> },
    { id: "secteurs", label: t(`${BASE}.nav.secteurs`), icon: <Award className="h-3.5 w-3.5" /> },
  ];

  const keyFigures = [
    { value: "75%", label: t(`${BASE}.key_figures.f1_label`), icon: <BadgePercent className="h-5 w-5" />, color: "text-[#16A34A]", soft: "bg-[#EAFBF1]" },
    { value: t(`${BASE}.key_figures.f2_value`), label: t(`${BASE}.key_figures.f2_label`), icon: <CalendarRange className="h-5 w-5" />, color: "text-[#4F2BDF]", soft: "bg-[#F1EEFE]" },
    { value: "0%", label: t(`${BASE}.key_figures.f3_label`), icon: <Ship className="h-5 w-5" />, color: "text-[#16A34A]", soft: "bg-[#EAFBF1]" },
    { value: "5%", label: t(`${BASE}.key_figures.f4_label`), icon: <Receipt className="h-5 w-5" />, color: "text-[#4F2BDF]", soft: "bg-[#F1EEFE]" },
  ];

  const phases: Phase[] = [
    {
      key: "installation",
      index: "01",
      title: t(`${BASE}.installation.title`),
      period: cleanPeriod(t(`${BASE}.installation.period`)),
      description: t(`${BASE}.installation.desc`),
      highlight: t(`${BASE}.installation.badge`),
      icon: <Building2 className="h-5 w-5" />,
      groups: [
        {
          title: t(`${BASE}.installation.exo_title`),
          icon: <Receipt className="h-4 w-4" />,
          items: [1, 2, 3, 4].map((n) => t(`${BASE}.installation.exo${n}`)),
        },
        {
          title: t(`${BASE}.installation.douane_title`),
          icon: <Ship className="h-4 w-4" />,
          items: [1, 2, 3].map((n) => t(`${BASE}.installation.douane${n}`)),
        },
      ],
    },
    {
      key: "exploitation",
      index: "02",
      title: t(`${BASE}.exploitation.title`),
      period: cleanPeriod(t(`${BASE}.exploitation.period`)),
      description: t(`${BASE}.exploitation.desc`),
      highlight: t(`${BASE}.exploitation.badge`),
      icon: <TrendingUp className="h-5 w-5" />,
      groups: [
        {
          title: t(`${BASE}.exploitation.reduc_title`),
          icon: <BadgePercent className="h-4 w-4" />,
          items: [1, 2, 3].map((n) => t(`${BASE}.exploitation.reduc${n}`)),
        },
        {
          title: t(`${BASE}.exploitation.autres_title`),
          icon: <Coins className="h-4 w-4" />,
          items: [1, 2, 3].map((n) => t(`${BASE}.exploitation.autres${n}`)),
        },
      ],
    },
  ];

  const sectors = [
    { key: "agro", image: AgroImg, icon: <Sprout className="h-4 w-4" /> },
    { key: "energie", image: EnergieImg, icon: <Zap className="h-4 w-4" /> },
    { key: "tech", image: TechImg, icon: <Cpu className="h-4 w-4" /> },
  ].map((s) => ({
    ...s,
    name: t(`${BASE}.secteurs.${s.key}.name`),
    benefits: [1, 2, 3].map((n) => t(`${BASE}.secteurs.${s.key}.b${n}`)),
  }));

  // Met en surbrillance la pastille de la section visible à l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    ["apercu", "phases", "secteurs"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const phase = phases.find((p) => p.key === activePhase) ?? phases[0];
  const style = PHASE_STYLES[phase.key];
  const benefitCount = phase.groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ HÉRO ═══════════════ */}
      <header className="relative overflow-hidden bg-[#0B0A1F]">
        <img src={HeroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A1F]/70 via-[#0B0A1F]/75 to-[#0B0A1F]/95" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 mx-auto flex min-h-[460px] max-w-4xl flex-col items-center justify-center px-4 pb-12 pt-20 text-center sm:min-h-[520px]"
        >
          <span className="mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
            {t(`${BASE}.hero.badge`)}
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {t(`${BASE}.hero.title`)} {t(`${BASE}.hero.title_highlight`)}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            {t(`${BASE}.hero.subtitle`)}
          </p>
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("apercu")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5B300] px-8 py-3.5 text-sm font-bold text-[#0A0840] shadow-lg shadow-black/30 transition-colors hover:bg-[#FFC21A]"
          >
            {t(`${BASE}.hero.button`)}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </motion.button>
        </motion.div>

        {/* Pastilles de navigation en bas du héro */}
        <nav className="relative z-10 border-t border-white/10 bg-[#0B0A1F]/80 backdrop-blur" aria-label={t(`${BASE}.nav.aria`)}>
          <ul className="mx-auto flex max-w-5xl items-center justify-center gap-2 overflow-x-auto px-4 py-4">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    aria-current={active ? "true" : undefined}
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                      active ? "bg-[#F5B300] text-[#0A0840]" : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* ═══════════════ APERÇU : CHIFFRES CLÉS ═══════════════ */}
      <section id="apercu" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow={t(`${BASE}.nav.apercu`)}
            title={t(`${BASE}.key_figures.title`)}
            subtitle={t(`${BASE}.key_figures.subtitle`)}
          />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {keyFigures.map((fig, i) => (
              <motion.div
                key={fig.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { duration: 0.5, delay: i * 0.08 } } }}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_18px_rgba(16,24,40,0.05)] sm:p-6"
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${fig.soft} ${fig.color}`}>{fig.icon}</span>
                <span className={`mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl ${fig.color}`}>{fig.value}</span>
                <span className="mt-1.5 text-sm leading-snug text-gray-500">{fig.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PHASES CLÉS ═══════════════ */}
      <section id="phases" className="scroll-mt-24 bg-[#F7F8FB] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow={t(`${BASE}.phases.eyebrow`)}
            title={t(`${BASE}.phases.title`)}
            subtitle={t(`${BASE}.phases.subtitle`)}
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_10px_40px_rgba(16,24,40,0.06)]"
          >
            {/* Frise des 10 ans : un onglet par phase, posé sur sa portion de la frise */}
            <div className="border-b border-gray-100 px-4 pb-6 pt-6 sm:px-8 sm:pt-8">
              <div className="mb-5 flex items-center gap-2 text-xs font-medium text-gray-500">
                <CalendarRange className="h-4 w-4" />
                {t(`${BASE}.phases.horizon`)}
              </div>

              <div role="tablist" aria-label={t(`${BASE}.phases.title`)} className="grid grid-cols-2 gap-3 sm:gap-4">
                {phases.map((p) => {
                  const s = PHASE_STYLES[p.key];
                  const active = p.key === activePhase;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      role="tab"
                      id={`tab-${p.key}`}
                      aria-selected={active}
                      aria-controls="phase-panel"
                      onClick={() => setActivePhase(p.key)}
                      className={`group rounded-2xl border p-3 text-start transition-all sm:p-4 ${
                        active ? `${s.border} bg-white shadow-sm ring-4 ${s.ring}` : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors sm:flex ${
                            active ? `${s.solid} text-white` : "bg-white text-gray-400 group-hover:text-gray-600"
                          }`}
                        >
                          {p.icon}
                        </span>
                        <div className="min-w-0">
                          <div className={`text-[11px] font-semibold uppercase tracking-wider ${active ? s.text : "text-gray-400"}`}>
                            {t(`${BASE}.phases.phase`)} {p.index} · {p.period}
                          </div>
                          <div className={`text-sm font-bold leading-snug sm:text-base ${active ? "text-[#0A0840]" : "text-gray-600"}`}>{p.title}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Barre de temps 0 → 5 → 10 ans */}
              <div className="relative mt-6">
                <div className="flex h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className={`w-1/2 transition-opacity ${PHASE_STYLES.installation.solid} ${activePhase === "installation" ? "opacity-100" : "opacity-25"}`} />
                  <div className={`w-1/2 transition-opacity ${PHASE_STYLES.exploitation.solid} ${activePhase === "exploitation" ? "opacity-100" : "opacity-25"}`} />
                </div>
                <div className="mt-2 flex justify-between text-[11px] font-medium text-gray-400">
                  {[0, 5, 10].map((year) => (
                    <span key={year}>{t(`${BASE}.phases.year`, { n: year })}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Détail de la phase sélectionnée */}
            <div id="phase-panel" role="tabpanel" aria-labelledby={`tab-${phase.key}`} className="p-4 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-6 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-5">
                    <span className={`text-6xl font-extrabold leading-none ${style.text} opacity-15`}>{phase.index}</span>
                    <h3 className="mt-2 text-2xl font-extrabold text-[#0A0840] sm:text-3xl">{phase.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-gray-400">{phase.period}</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-gray-600">{phase.description}</p>

                    <div className={`mt-6 rounded-2xl ${style.soft} p-5`}>
                      <div className={`text-xs font-semibold uppercase tracking-wider ${style.text}`}>{t(`${BASE}.phases.key_benefit`)}</div>
                      <div className="mt-1 text-lg font-extrabold text-[#0A0840]">{phase.highlight}</div>
                      <div className="mt-1 text-sm text-gray-500">{t(`${BASE}.phases.benefits_count`, { count: benefitCount })}</div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                    {phase.groups.map((group) => (
                      <div key={group.title} className="rounded-2xl border border-gray-100 p-5">
                        <div className="mb-4 flex items-center gap-2.5">
                          <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${style.soft} ${style.text}`}>{group.icon}</span>
                          <h4 className="text-sm font-bold text-[#0A0840]">{group.title}</h4>
                        </div>
                        <ul className="space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${style.solid} text-white`}>
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-start gap-2.5 border-t border-gray-100 bg-gray-50 px-4 py-4 text-xs leading-relaxed text-gray-500 sm:px-8">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              {t(`${BASE}.phases.note`)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SECTEURS PRIORITAIRES ═══════════════ */}
      <section id="secteurs" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow={t(`${BASE}.nav.secteurs`)}
            title={t(`${BASE}.secteurs.title`)}
            subtitle={t(`${BASE}.secteurs.subtitle`)}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {sectors.map((sector, i) => (
              <motion.article
                key={sector.key}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_18px_rgba(16,24,40,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(16,24,40,0.10)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A1F]/80 via-[#0B0A1F]/10 to-transparent" />
                  <div className="absolute bottom-4 start-4 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/95 text-[#16A34A]">{sector.icon}</span>
                    <h3 className="text-lg font-bold text-white">{sector.name}</h3>
                  </div>
                </div>
                <ul className="flex-1 space-y-3 p-5">
                  {sector.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16A34A]" strokeWidth={3} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ APPEL À L'ACTION ═══════════════ */}
      <section className="px-4 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0A0840] px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{t(`${BASE}.cta.title`)}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">{t(`${BASE}.cta.subtitle`)}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/creation-dentreprise"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5B300] px-7 py-3 text-sm font-bold text-[#0A0840] transition-colors hover:bg-[#FFC21A]"
            >
              {t(`${BASE}.cta.btn1`)}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/facteurs-de-production"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t(`${BASE}.cta.btn2`)}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Incitation;
