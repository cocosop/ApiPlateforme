import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export type Accent = "purple" | "green";

export const ACCENTS: Record<Accent, { text: string; bg: string; soft: string; border: string; button: string }> = {
  purple: {
    text: "text-[#4F2BDF]",
    bg: "bg-[#4F2BDF]",
    soft: "bg-[#F1EEFE]",
    border: "border-[#DCD4FB]",
    button: "bg-[#4F2BDF] hover:bg-[#3F1FC4]",
  },
  green: {
    text: "text-[#16A34A]",
    bg: "bg-[#16A34A]",
    soft: "bg-[#EAFBF1]",
    border: "border-[#C6F0D6]",
    button: "bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D]",
  },
};

interface ModalShellProps {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: React.ReactNode;
  accent?: Accent;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * Cadre commun des modals de la page « Facteurs de production » :
 * bandeau image + titre, fermeture par la croix, le fond ou la touche Échap,
 * défilement interne et blocage du scroll de la page.
 */
const ModalShell: React.FC<ModalShellProps> = ({ title, subtitle, image, icon, accent = "purple", onClose, children }) => {
  // Référence stable : le parent recrée souvent onClose à chaque rendu
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onCloseRef.current();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const a = ACCENTS[accent];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0B0A1F]/70 backdrop-blur-sm p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", damping: 24, stiffness: 260 }}
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête */}
        {image ? (
          <div className="relative h-40 sm:h-48 shrink-0">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A1F]/90 via-[#0B0A1F]/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex items-end gap-3">
              {icon && (
                <span className={`hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${a.bg} text-white text-xl shadow-lg`}>
                  {icon}
                </span>
              )}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{title}</h2>
                {subtitle && <p className="mt-1 text-sm text-white/75 max-w-2xl line-clamp-2">{subtitle}</p>}
              </div>
            </div>
          </div>
        ) : (
          <div className="shrink-0 flex items-center gap-3 border-b border-gray-100 px-5 sm:px-7 py-5">
            {icon && (
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${a.soft} ${a.text} text-xl`}>
                {icon}
              </span>
            )}
            <div className="pr-10">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1A0C4F] leading-tight">{title}</h2>
              {subtitle && <p className="mt-0.5 text-sm text-gray-500">{subtitle}</p>}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            image ? "bg-white/15 text-white hover:bg-white/30 backdrop-blur" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Contenu */}
        <div className="flex-1 overflow-y-auto bg-[#F7F8FB] px-4 py-5 sm:px-7 sm:py-7">{children}</div>
      </motion.div>
    </motion.div>
  );
};

/** Carte blanche standard utilisée dans les modals. */
export const ModalCard: React.FC<{ title?: React.ReactNode; icon?: React.ReactNode; accent?: Accent; className?: string; children: React.ReactNode }> = ({
  title, icon, accent = "purple", className = "", children,
}) => {
  const a = ACCENTS[accent];
  return (
    <div className={`rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_2px_12px_rgba(16,24,40,0.04)] ${className}`}>
      {title && (
        <div className="mb-4 flex items-center gap-2.5">
          {icon && <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${a.soft} ${a.text}`}>{icon}</span>}
          <h3 className="text-base font-bold text-[#1A0C4F]">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

/** Chiffre clé (valeur colorée + libellé), même style que les cartes de la page. */
export const StatTile: React.FC<{ value: React.ReactNode; label: React.ReactNode; accent?: Accent; className?: string }> = ({
  value, label, accent = "purple", className = "",
}) => (
  <div className={`rounded-2xl border border-gray-100 bg-white px-4 py-4 text-center shadow-[0_2px_12px_rgba(16,24,40,0.04)] ${className}`}>
    <div className={`text-xl sm:text-2xl font-extrabold ${ACCENTS[accent].text}`}>{value}</div>
    <div className="mt-1 text-xs text-gray-500 leading-snug">{label}</div>
  </div>
);

export default ModalShell;
