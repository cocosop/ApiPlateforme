import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LeftOutlined,
  RightOutlined,
  UnorderedListOutlined,
  CloseOutlined,
} from "@ant-design/icons";

// Réutilise la même palette que le reste de la page
const COLORS = {
  primary: "#0A0840",
  primaryDark: "#0A0840",
  primarySoft: "#EEEDF9",
  accent: "#F5BA3A",
  textMuted: "#5B5F73",
};

type NavSection = { id: string; title: string; icon: React.ComponentType };

type SectionNavProps = {
  sections: NavSection[];
  isSticky: boolean;
  onNavigate: (id: string) => void;
};

const SectionNav: React.FC<SectionNavProps> = ({
  sections,
  isSticky,
  onNavigate,
}) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [menuOpen, setMenuOpen] = useState(false);

  // Suit la section actuellement visible à l'écran pour mettre à jour l'indicateur
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const activeIndex = sections.findIndex((s) => s.id === activeId);
  const active = sections[activeIndex] ?? sections[0];

  const goTo = (index: number) => {
    const target = sections[(index + sections.length) % sections.length];
    onNavigate(target.id);
    setMenuOpen(false);
  };

  return (
    <div
      className={`z-40 w-full shadow-lg transition-all duration-300 ${isSticky ? "fixed top-0 left-0" : "relative"}`}
      style={{ backgroundColor: COLORS.primaryDark }}
    >
      {/* Fine barre de progression */}
      <div className="h-0.5 w-full bg-white/10">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${((activeIndex + 1) / sections.length) * 100}%`,
            backgroundColor: COLORS.accent,
          }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => goTo(activeIndex - 1)}
          className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Section précédente"
        >
          <LeftOutlined />
        </button>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-1 items-center justify-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          <span className="text-xs" style={{ color: COLORS.accent }}>
            {String(activeIndex + 1).padStart(2, "0")}/
            {String(sections.length).padStart(2, "0")}
          </span>
          <active.icon />
          <span className="truncate">{active.title}</span>
          <UnorderedListOutlined className="ml-1 text-white/50" />
        </button>

        <button
          onClick={() => goTo(activeIndex + 1)}
          className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Section suivante"
        >
          <RightOutlined />
        </button>
      </div>

      {/* Panneau listant toutes les sections */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-30"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="relative z-40 border-t border-white/10 bg-white shadow-xl"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: COLORS.primaryDark }}
                  >
                    Aller à une section
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    aria-label="Fermer"
                    style={{ color: COLORS.textMuted }}
                  >
                    <CloseOutlined />
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => goTo(index)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors"
                      style={{
                        backgroundColor:
                          section.id === activeId
                            ? COLORS.primarySoft
                            : "transparent",
                        color:
                          section.id === activeId
                            ? COLORS.primary
                            : COLORS.primaryDark,
                      }}
                    >
                      <section.icon />
                      <span className="truncate">{section.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionNav;
