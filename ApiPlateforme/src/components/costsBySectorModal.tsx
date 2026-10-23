import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChartOutlined } from '@ant-design/icons';
import ModalShell from './showcase/ModalShell';
import O4 from '../assets/img/o4.png';

interface CostsBySectorModalProps {
  onClose: () => void;
}

const CostsBySectorModal: React.FC<CostsBySectorModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const s = (key: string) => t(`pages_secteurs.facteurs_production.costs_sector.${key}`);

  const productionCosts = [
    { id: 1, sector: s("sectors.agro.name"), image: "https://images.pexels.com/photos/4790263/pexels-photo-4790263.jpeg", factors: [{ name: s("sectors.agro.f1"), cost: "50 000 XAF/mois" }, { name: s("sectors.agro.f2"), cost: "300 000 XAF/ha" }, { name: s("sectors.agro.f3"), cost: "10M XAF/an" }], totalCost: "1 000 000 XAF/ha", source: "INS, 2023" },
    { id: 2, sector: s("sectors.energie.name"), image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg", factors: [{ name: s("sectors.energie.f1"), cost: "100 000 XAF/mois" }, { name: s("sectors.energie.f2"), cost: "50M XAF/an" }, { name: s("sectors.energie.f3"), cost: "200 XAF/kWh" }], totalCost: "150 XAF/kWh", source: "MINEE, 2023" },
    { id: 3, sector: s("sectors.numerique.name"), image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", factors: [{ name: s("sectors.numerique.f1"), cost: "150 000 XAF/mois" }, { name: s("sectors.numerique.f2"), cost: "100M XAF" }, { name: s("sectors.numerique.f3"), cost: "10M XAF/an" }], totalCost: "20M XAF/projet", source: "MinPostel, 2023" },
    { id: 4, sector: s("sectors.bois.name"), image: "https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg", factors: [{ name: s("sectors.bois.f1"), cost: "500 000 XAF/ha" }, { name: s("sectors.bois.f2"), cost: "200 000 XAF/m³" }, { name: s("sectors.bois.f3"), cost: "300 000 XAF/m³" }], totalCost: "1 000 000 XAF/m³", source: "MINFOF, 2023" },
    { id: 5, sector: s("sectors.textile.name"), image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg", factors: [{ name: s("sectors.textile.f1"), cost: "200 XAF/mètre" }, { name: s("sectors.textile.f2"), cost: "50M XAF" }, { name: s("sectors.textile.f3"), cost: "100 XAF/kWh" }], totalCost: "10 000 XAF/unité", source: "MINPMEESA, 2023" },
    { id: 6, sector: s("sectors.hydro.name"), image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg", factors: [{ name: s("sectors.hydro.f1"), cost: "10 Milliards XAF" }, { name: s("sectors.hydro.f2"), cost: "500 XAF/litre" }, { name: s("sectors.hydro.f3"), cost: "100 XAF/litre" }], totalCost: "1 000 XAF/litre", source: "SNH, 2023" },
    { id: 7, sector: s("sectors.pharma.name"), image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg", factors: [{ name: s("sectors.pharma.f1"), cost: "500 XAF/kg" }, { name: s("sectors.pharma.f2"), cost: "200M XAF" }, { name: s("sectors.pharma.f3"), cost: "50M XAF/an" }], totalCost: "10 000 XAF/kg", source: "MINSANTE, 2023" },
    { id: 8, sector: s("sectors.mines.name"), image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg", factors: [{ name: s("sectors.mines.f1"), cost: "1 000 XAF/tonne" }, { name: s("sectors.mines.f2"), cost: "500 XAF/tonne" }, { name: s("sectors.mines.f3"), cost: "200 XAF/tonne" }], totalCost: "2 000 XAF/tonne", source: "MINMIDT, 2023" },
  ];

  return (
    <ModalShell title={s("title")} subtitle={s("subtitle")} image={O4} icon={<BarChartOutlined />} accent="green" onClose={onClose}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {productionCosts.map((item, index) => {
          const green = index % 2 === 0;
          return (
            <div key={item.id} className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_2px_12px_rgba(16,24,40,0.04)] transition-shadow hover:shadow-lg">
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-[#1A0C4F] to-[#4F2BDF]">
                <img alt={item.sector} src={item.image} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-2 left-3 right-3 text-sm font-bold text-white">{item.sector}</h3>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex-1 space-y-2">
                  {item.factors.map((factor) => (
                    <div key={factor.name} className="flex items-baseline justify-between gap-2 text-[11px]">
                      <span className="truncate text-gray-500">{factor.name}</span>
                      <span className="shrink-0 whitespace-nowrap text-right font-semibold text-[#1A0C4F]">{factor.cost}</span>
                    </div>
                  ))}
                </div>
                <div className={`mt-4 rounded-xl px-3 py-2.5 text-center ${green ? 'bg-[#EAFBF1]' : 'bg-[#F1EEFE]'}`}>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">{s("total_cost")}</div>
                  <div className={`text-sm font-extrabold ${green ? 'text-[#16A34A]' : 'text-[#4F2BDF]'}`}>{item.totalCost}</div>
                </div>
                <div className="mt-2 text-center text-[10px] text-gray-400">{s("source")} : {item.source}</div>
              </div>
            </div>
          );
        })}
      </div>
    </ModalShell>
  );
};

export default CostsBySectorModal;
