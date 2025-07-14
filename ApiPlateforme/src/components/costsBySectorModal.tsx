import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BarChart3, TrendingUp } from 'lucide-react';

interface CostsBySectorModalProps {
  onClose: () => void;
}

const CostsBySectorModal: React.FC<CostsBySectorModalProps> = ({ onClose }) => {
  const productionCosts = [
    {
      id: 1,
      sector: "Agro-industrie",
      image: "https://images.pexels.com/photos/4790263/pexels-photo-4790263.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "50 000 XAF/mois" },
        { name: "Semences/Engrais", cost: "300 000 XAF/ha" },
        { name: "Machines agricoles", cost: "10 000 000 XAF/an" },
        { name: "Irrigation", cost: "500 000 XAF/ha" },
      ],
      totalCost: "1 000 000 XAF/ha",
      source: "INS, 2023",
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      sector: "Énergie",
      image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "100 000 XAF/mois" },
        { name: "Équipements", cost: "500 000 000 XAF" },
        { name: "Maintenance", cost: "50 000 000 XAF/an" },
        { name: "Carburant", cost: "200 XAF/kWh" },
      ],
      totalCost: "150 XAF/kWh",
      source: "MINEE, 2023",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 3,
      sector: "Numérique",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "150 000 XAF/mois" },
        { name: "Infrastructure", cost: "100 000 000 XAF" },
        { name: "Logiciels", cost: "10 000 000 XAF/an" },
        { name: "Formation", cost: "5 000 000 XAF/an" },
      ],
      totalCost: "20 000 000 XAF/projet",
      source: "MinPostel, 2023",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      sector: "Bois-Forêts",
      image: "https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "60 000 XAF/mois" },
        { name: "Exploitation forestière", cost: "500 000 XAF/ha" },
        { name: "Transport", cost: "200 000 XAF/m³" },
        { name: "Transformation", cost: "300 000 XAF/m³" },
      ],
      totalCost: "1 000 000 XAF/m³",
      source: "MINFOF, 2023",
      color: "from-green-600 to-green-700"
    },
    {
      id: 5,
      sector: "Textile/Confection/Cuir",
      image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "70 000 XAF/mois" },
        { name: "Matières premières", cost: "200 XAF/mètre" },
        { name: "Machines", cost: "50 000 000 XAF" },
        { name: "Énergie", cost: "100 XAF/kWh" },
      ],
      totalCost: "10 000 XAF/unité",
      source: "MINPMEESA, 2023",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 6,
      sector: "Hydrocarbures/Raffinage",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "200 000 XAF/mois" },
        { name: "Exploration", cost: "10 000 000 000 XAF" },
        { name: "Raffinage", cost: "500 XAF/litre" },
        { name: "Transport", cost: "100 XAF/litre" },
      ],
      totalCost: "1 000 XAF/litre",
      source: "SNH, 2023",
      color: "from-gray-600 to-gray-700"
    },
    {
      id: 7,
      sector: "Chimie et Pharmacie",
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "120 000 XAF/mois" },
        { name: "Matières premières", cost: "500 XAF/kg" },
        { name: "Équipements", cost: "200 000 000 XAF" },
        { name: "R&D", cost: "50 000 000 XAF/an" },
      ],
      totalCost: "10 000 XAF/kg",
      source: "Ministère de la Santé, 2023",
      color: "from-red-500 to-red-600"
    },
    {
      id: 8,
      sector: "Mines/Métallurgie/Sidérurgie",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "150 000 XAF/mois" },
        { name: "Exploitation minière", cost: "1 000 XAF/tonne" },
        { name: "Transformation", cost: "500 XAF/tonne" },
        { name: "Transport", cost: "200 XAF/tonne" },
      ],
      totalCost: "2 000 XAF/tonne",
      source: "MINMIDT, 2023",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 9,
      sector: "Financement",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "200 000 XAF/mois" },
        { name: "Infrastructure", cost: "100 000 000 XAF" },
        { name: "Technologie", cost: "50 000 000 XAF" },
        { name: "Risques", cost: "10 % des prêts" },
      ],
      totalCost: "15 % de taux d'intérêt",
      source: "COBAC, 2023",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 10,
      sector: "Infrastructure",
      image: "https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg",
      factors: [
        { name: "Main-d'œuvre", cost: "100 000 XAF/mois" },
        { name: "Matériaux", cost: "500 XAF/kg" },
        { name: "Machines", cost: "1 000 000 XAF/jour" },
        { name: "Entretien", cost: "10 % du coût initial/an" },
      ],
      totalCost: "1 000 000 XAF/mètre",
      source: "MINTP, 2023",
      color: "from-teal-500 to-teal-600"
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Coûts des Facteurs de Production par Secteur</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          
          <div className="p-6">
            {/* Vue d'ensemble */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Analyse Comparative des Secteurs</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Données officielles 2023 des coûts de production dans les 10 secteurs stratégiques du Cameroun
              </p>
            </div>

            {/* Grille des secteurs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productionCosts.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.id * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  {/* En-tête avec image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.sector}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.sector}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-4">
                    {/* Facteurs de coût */}
                    <div className="space-y-2 mb-4">
                      {item.factors.map((factor, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{factor.name}</span>
                          <span className="font-medium text-gray-900">{factor.cost}</span>
                        </div>
                      ))}
                    </div>

                    {/* Coût total */}
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white text-center mb-3`}>
                      <div className="text-sm opacity-90">Coût total</div>
                      <div className="font-bold">{item.totalCost}</div>
                    </div>

                    {/* Source */}
                    <div className="text-xs text-gray-500 text-center">
                      Source: <span className="italic">{item.source}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Résumé statistique */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Synthèse des Coûts</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1M FCFA</div>
                  <div className="text-sm text-gray-600">Agro-industrie/ha</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">150 FCFA</div>
                  <div className="text-sm text-gray-600">Énergie/kWh</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20M FCFA</div>
                  <div className="text-sm text-gray-600">Numérique/projet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">10 Secteurs</div>
                  <div className="text-sm text-gray-600">Analysés</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CostsBySectorModal;