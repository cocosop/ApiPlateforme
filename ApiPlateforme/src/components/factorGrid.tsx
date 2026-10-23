import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart,
  Truck,
  MapPin,
  Zap,
  Wifi,
  Users,
  Shield,
  CreditCard,
  ArrowUpRight,
  ChevronRight,
  DollarSign,
  type LucideIcon,
} from 'lucide-react';
import { Factor } from '../types';
import FactorModal from './factorModal';

const ICONS: Record<string, LucideIcon> = { ShoppingCart, Truck, MapPin, Zap, Wifi, Users, Shield, CreditCard };

// 1re rangée : tons pêche + valeur verte ; 2e rangée : tons lavande + valeur violette (comme la maquette)
const THEMES = {
  warm: {
    iconTile: 'bg-[#FFF1E8] text-[#F97316]',
    box: 'bg-[#FFF4EC] border-[#FFE3D1]',
    value: 'text-[#16A34A]',
    arrow: 'text-[#16A34A]',
    button: 'text-[#16A34A] hover:bg-[#EAFBF1]',
  },
  cool: {
    iconTile: 'bg-[#EFEBFF] text-[#4F2BDF]',
    box: 'bg-[#F1EEFE] border-[#E0D9FC]',
    value: 'text-[#4F2BDF]',
    arrow: 'text-[#4F2BDF]',
    button: 'text-[#4F2BDF] hover:bg-[#F1EEFE]',
  },
};

const FactorsGrid: React.FC = () => {
  const { t } = useTranslation();
  const [selectedFactor, setSelectedFactor] = useState<Factor | null>(null);
  const f = (key: string) => t(`pages_secteurs.facteurs_production.grid.factors.${key}`);
  const g = (key: string) => t(`pages_secteurs.facteurs_production.grid.${key}`);

  const factor = (id: string, icon: string, highlight: string, color: string): Factor => ({
    name: f(`${id}.name`),
    description: f(`${id}.desc`),
    icon,
    color,
    preview: {
      highlight,
      label: f(`${id}.label`),
      stats: [f(`${id}.stat1`), f(`${id}.stat2`), f(`${id}.stat3`)],
    },
  });

  const factors: Factor[] = [
    factor('intrants', 'ShoppingCart', '0% à 81%', 'from-blue-500 to-blue-600'),
    factor('transport', 'Truck', '40-2600 FCFA', 'from-green-500 to-green-600'),
    factor('terrain', 'MapPin', '300-3000 FCFA', 'from-yellow-500 to-yellow-600'),
    factor('energie', 'Zap', '50-99 FCFA', 'from-orange-500 to-orange-600'),
    factor('telecom', 'Wifi', '20-90 FCFA', 'from-purple-500 to-purple-600'),
    factor('personnel', 'Users', '36 270 FCFA', 'from-red-500 to-red-600'),
    factor('assurance', 'Shield', '0.70‰', 'from-indigo-500 to-indigo-600'),
    factor('banque', 'CreditCard', '7-17%', 'from-pink-500 to-pink-600'),
  ];

  const quickStats = [
    { icon: DollarSign, value: '36k FCFA', label: g('salary') },
    { icon: Truck, value: '40-90 FCFA', label: g('transport') },
    { icon: Zap, value: '50-99 FCFA', label: g('elec') },
    { icon: MapPin, value: '300-3k FCFA', label: g('land') },
  ];

  return (
    <>
      {/* ── Grille des 8 facteurs ── */}
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold text-[#2D1B8F] sm:text-4xl">{g('title')}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:text-base">{g('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map((item, index) => {
            const Icon = ICONS[item.icon] ?? ShoppingCart;
            const theme = index < 4 ? THEMES.warm : THEMES.cool;
            return (
              <motion.button
                type="button"
                key={item.icon}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedFactor(item)}
                className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-[0_4px_20px_rgba(16,24,40,0.05)] transition-shadow hover:shadow-[0_12px_32px_rgba(16,24,40,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F2BDF]"
              >
                <span className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${theme.iconTile}`}>
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="text-base font-bold text-[#1A0C4F]">{item.name}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-gray-500">{item.description}</p>

                <div className={`mt-4 flex items-center justify-between rounded-xl border px-3.5 py-3 ${theme.box}`}>
                  <div className="min-w-0">
                    <div className={`truncate text-lg font-extrabold ${theme.value}`}>{item.preview.highlight}</div>
                    <div className="truncate text-[11px] text-gray-500">{item.preview.label}</div>
                  </div>
                  <ArrowUpRight className={`h-4 w-4 shrink-0 ${theme.arrow}`} />
                </div>

                <span className={`mt-3 inline-flex w-full items-center justify-center gap-1 rounded-full border border-gray-200 bg-white py-2 text-xs font-semibold transition-colors ${theme.button}`}>
                  {g('see_details')}
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Bandeau vert à vagues : aperçu rapide ── */}
      <div className="relative mt-20">
        <svg className="block h-16 w-full text-[#2BD67B] sm:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path
            fill="currentColor"
            d="M0,64 C120,96 240,32 360,48 C480,64 600,112 720,96 C840,80 960,24 1080,32 C1200,40 1320,96 1440,72 L1440,120 L0,120 Z"
          />
        </svg>
        <div className="bg-gradient-to-b from-[#2BD67B] to-[#16A34A] pb-16 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl px-4"
          >
            <div className="mb-10 text-center text-white">
              <h3 className="text-2xl font-extrabold sm:text-3xl">{g('quick_summary')}</h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80">{g('quick_desc')}</p>
            </div>

            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
              {quickStats.map(({ icon: Icon, value, label }, i) => (
                <div key={label} className={`flex flex-col items-center text-center text-white ${i === 2 ? 'md:border-l md:border-white/40' : ''}`}>
                  <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 bg-white/15 ring-8 ring-white/10">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="text-2xl font-extrabold sm:text-3xl">{value}</div>
                  <div className="mt-1 max-w-[12rem] text-xs text-white/85">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedFactor && <FactorModal factor={selectedFactor} onClose={() => setSelectedFactor(null)} />}
      </AnimatePresence>
    </>
  );
};

export default FactorsGrid;
