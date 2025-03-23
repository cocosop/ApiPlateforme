import React, { useState } from "react";
import Agro from "./../../assets/img/agroindustrie.jpg"
import energies from "./../../assets/img/energies.jpg"
import infrastructure from "./../../assets/img/infrastructure.jpg"
import cuir from "./../../assets/img/cuir.jpg"
import numerique from "./../../assets/img/numerique.jpg"
import hydro from "./../../assets/img/hydro.jpg"
import chimie from "./../../assets/img/chimie.jpg"
import finance from "./../../assets/img/finance.jpg"
import bois from "./../../assets/img/bois.jpg"

interface ProductionCostsBySectorProps {
  id?: string; // La prop id est optionnelle
}
// Données des coûts de production par secteur
const productionCosts = [
  {
    id: 1,
    sector: "Agro-industrie",
    image: Agro, // Remplacez par l'URL réelle
    factors: [
      { name: "Main-d'œuvre", cost: "50 000 XAF/mois" },
      { name: "Semences/Engrais", cost: "300 000 XAF/ha" },
      { name: "Machines agricoles", cost: "10 000 000 XAF/an" },
      { name: "Irrigation", cost: "500 000 XAF/ha" },
    ],
    totalCost: "1 000 000 XAF/ha",
    source: "INS, 2023",
  },
  {
    id: 2,
    sector: "Énergie",
    image: energies,
    factors: [
      { name: "Main-d'œuvre", cost: "100 000 XAF/mois" },
      { name: "Équipements", cost: "500 000 000 XAF" },
      { name: "Maintenance", cost: "50 000 000 XAF/an" },
      { name: "Carburant", cost: "200 XAF/kWh" },
    ],
    totalCost: "150 XAF/kWh",
    source: "MINEE, 2023",
  },
  {
    id: 3,
    sector: "Numérique",
    image: numerique,
    factors: [
      { name: "Main-d'œuvre", cost: "150 000 XAF/mois" },
      { name: "Infrastructure", cost: "100 000 000 XAF" },
      { name: "Logiciels", cost: "10 000 000 XAF/an" },
      { name: "Formation", cost: "5 000 000 XAF/an" },
    ],
    totalCost: "20 000 000 XAF/projet",
    source: "MinPostel, 2023",
  },
  {
    id: 4,
    sector: "Bois-Forêts",
    image: bois,
    factors: [
      { name: "Main-d'œuvre", cost: "60 000 XAF/mois" },
      { name: "Exploitation forestière", cost: "500 000 XAF/ha" },
      { name: "Transport", cost: "200 000 XAF/m³" },
      { name: "Transformation", cost: "300 000 XAF/m³" },
    ],
    totalCost: "1 000 000 XAF/m³",
    source: "MINFOF, 2023",
  },
  {
    id: 5,
    sector: "Textile/Confection/Cuir",
    image: cuir,
    factors: [
      { name: "Main-d'œuvre", cost: "70 000 XAF/mois" },
      { name: "Matières premières", cost: "200 XAF/mètre" },
      { name: "Machines", cost: "50 000 000 XAF" },
      { name: "Énergie", cost: "100 XAF/kWh" },
    ],
    totalCost: "10 000 XAF/unité",
    source: "MINPMEESA, 2023",
  },
  {
    id: 6,
    sector: "Hydrocarbures/Raffinage",
    image: hydro,
    factors: [
      { name: "Main-d'œuvre", cost: "200 000 XAF/mois" },
      { name: "Exploration", cost: "10 000 000 000 XAF" },
      { name: "Raffinage", cost: "500 XAF/litre" },
      { name: "Transport", cost: "100 XAF/litre" },
    ],
    totalCost: "1 000 XAF/litre",
    source: "SNH, 2023",
  },
  {
    id: 7,
    sector: "Chimie et Pharmacie",
    image: chimie,
    factors: [
      { name: "Main-d'œuvre", cost: "120 000 XAF/mois" },
      { name: "Matières premières", cost: "500 XAF/kg" },
      { name: "Équipements", cost: "200 000 000 XAF" },
      { name: "R&D", cost: "50 000 000 XAF/an" },
    ],
    totalCost: "10 000 XAF/kg",
    source: "Ministère de la Santé, 2023",
  },
  {
    id: 8,
    sector: "Mines/Métallurgie/Sidérurgie",
    image: numerique,
    factors: [
      { name: "Main-d'œuvre", cost: "150 000 XAF/mois" },
      { name: "Exploitation minière", cost: "1 000 XAF/tonne" },
      { name: "Transformation", cost: "500 XAF/tonne" },
      { name: "Transport", cost: "200 XAF/tonne" },
    ],
    totalCost: "2 000 XAF/tonne",
    source: "MINMIDT, 2023",
  },
  {
    id: 9,
    sector: "Financement",
    image: finance,
    factors: [
      { name: "Main-d'œuvre", cost: "200 000 XAF/mois" },
      { name: "Infrastructure", cost: "100 000 000 XAF" },
      { name: "Technologie", cost: "50 000 000 XAF" },
      { name: "Risques", cost: "10 % des prêts" },
    ],
    totalCost: "15 % de taux d'intérêt",
    source: "COBAC, 2023",
  },
  {
    id: 10,
    sector: "Infrastructure",
    image: infrastructure,
    factors: [
      { name: "Main-d'œuvre", cost: "100 000 XAF/mois" },
      { name: "Matériaux", cost: "500 XAF/kg" },
      { name: "Machines", cost: "1 000 000 XAF/jour" },
      { name: "Entretien", cost: "10 % du coût initial/an" },
    ],
    totalCost: "1 000 000 XAF/mètre",
    source: "MINTP, 2023",
  },
];

const ProductionCostsBySector: React.FC<ProductionCostsBySectorProps> = ({ id }) => {
  // Déclarer `hoveredCard` avec `useState`
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div id={id} className="container mx-auto px-4 py-6 bg-gray-100 rounded-xl">
    {/* Titre et ligne de séparation */}
    <h2 className="text-xl font-bold text-center mb-4 text-[#0F0B60]">
      Coûts des Facteurs de Production par Secteur
    </h2>
    <span className="block w-16 h-0.5 bg-[#0F0B60] mx-auto mb-8"></span>
  
    {/* Grille de cartes (5 colonnes et 2 lignes) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {productionCosts.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          {/* En-tête de la carte */}
          <div className="p-3 border-b border-gray-200">
            <p className="text-xs font-bold text-green-500 text-center">
              {item.sector}
            </p>
          </div>
  
          {/* Corps de la carte */}
          <div className="p-3">
            {/* Section des détails des coûts avec l'image en arrière-plan */}
            <div
              className="relative rounded-lg overflow-hidden min-h-[100px] transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay pour améliorer la lisibilité du texte */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  
              {/* Détails des coûts */}
              <div className="relative p-3">
                <ul className="space-y-1">
                  {item.factors.map((factor, index) => (
                    <li key={index} className="text-xs text-white">
                      <span className="font-semibold">{factor.name} :</span>{" "}
                      <span>{factor.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  
          {/* Pied de page de la carte */}
          <div className="p-3 border-t border-gray-200">
            <p className="text-sm font-semibold text-[#0E600B] text-center">
              Coût total : {item.totalCost}
            </p>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Source : <span className="italic">{item.source}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductionCostsBySector;