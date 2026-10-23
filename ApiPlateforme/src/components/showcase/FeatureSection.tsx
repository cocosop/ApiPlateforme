import React from "react";
import { motion } from "framer-motion";

export type Accent = "purple" | "green";

export interface FeatureStat {
  value: string;
  label: string;
  accent: Accent;
}

interface FeatureSectionProps {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  buttonLabel: string;
  buttonAccent: Accent;
  buttonIcon?: React.ReactNode;
  buttonIconPosition?: "start" | "end";
  background: string;
  stats: FeatureStat[];
  onOpen: () => void;
}

const VALUE_COLORS: Record<Accent, string> = {
  purple: "text-[#4F2BDF]",
  green: "text-[#16A34A]",
};

const BUTTON_STYLES: Record<Accent, string> = {
  purple: "bg-[#4F2BDF] hover:bg-[#3F1FC4] shadow-[#4F2BDF]/30",
  green: "bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] shadow-[#16A34A]/30",
};

/**
 * Bloc « image pleine largeur + titre/texte + bouton + chiffres clés ».
 * Utilisé par les pages Facteurs de production et Droits des investisseurs.
 */
const FeatureSection: React.FC<FeatureSectionProps> = ({
  id, image, imageAlt, title, description, buttonLabel, buttonAccent, buttonIcon,
  buttonIconPosition = "start", background, stats, onOpen,
}) => (
  <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${background}`}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-5xl px-4"
    >
      <button
        type="button"
        onClick={onOpen}
        className="group block w-full overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(16,24,40,0.12)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4F2BDF]/40"
        aria-label={`${buttonLabel} – ${title}`}
      >
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-72 md:h-80"
        />
      </button>

      <div className="mt-7 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-[#111827] sm:text-[28px]">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-[15px]">{description}</p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className={`inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 md:self-center ${BUTTON_STYLES[buttonAccent]}`}
        >
          {buttonIconPosition === "start" && buttonIcon}
          {buttonLabel}
          {buttonIconPosition === "end" && buttonIcon}
        </button>
      </div>

      <div className={`mt-7 grid gap-4 ${stats.length === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}>
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col justify-center rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-[0_4px_18px_rgba(16,24,40,0.05)]"
          >
            <div
              className={`font-extrabold break-words ${stats.length === 4 ? "text-base sm:text-lg" : "text-xl sm:text-2xl"} ${VALUE_COLORS[s.accent]}`}
            >
              {s.value}
            </div>
            <div className="mt-1 text-xs leading-snug text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default FeatureSection;
