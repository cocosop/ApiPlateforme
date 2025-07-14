import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Factor } from '../types';

interface FactorModalProps {
  factor: Factor;
  onClose: () => void;
}

const FactorModal: React.FC<FactorModalProps> = ({ factor, onClose }) => {
  const [zone, setZone] = useState('Zone 1');

  const commonCard = (title: string, content: JSX.Element | string) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 ease-in-out"
    >
      <h3 className="text-xl font-semibold mb-2 text-[#0F0B60]">{title}</h3>
      <div className="text-gray-700 text-sm">{content}</div>
    </motion.div>
  );

  const factorContentMap: Record<string, JSX.Element> = {
    "Intrants": (
      <div className="space-y-4">
        {commonCard("Définition des Intrants", "Intrants = matières premières, consommables, accessoires, etc.")}
        {commonCard("Tarif Douanier", "De 0% à 81% selon la nature des produits importés.")}
        {commonCard("Frais de Transitaire", "50 000 FCFA à 940 000 FCFA selon la valeur importée.")}
        {commonCard("Frais Financiers", "Entre 29 000 FCFA + 2,35% et 39 000 FCFA + 4,85%.")}
      </div>
    ),

    "Transport": (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {commonCard("Transport de marchandises", "40 - 90 FCFA/T")}
        {commonCard("Transport de liquides", "135 FCFA/L")}
        {commonCard("Transport aérien", "2 600 FCFA/Kg")}
        {commonCard("Transport du personnel", "5 000 - 10 000 FCFA/mois")}
      </div>
    ),

    "Terrain": (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div className="p-6 text-white rounded-xl bg-gradient-to-tr from-green-600 to-green-800 shadow-md text-center">
          <h3 className="text-lg font-bold">Terrains Aménagés</h3>
          <p className="text-md mt-2">300 FCFA/m²/an</p>
        </motion.div>
        <motion.div className="p-6 text-white rounded-xl bg-gradient-to-tr from-red-600 to-red-800 shadow-md text-center">
          <h3 className="text-lg font-bold">Terrains Bâtis</h3>
          <p className="text-md mt-2">1000 - 3000 FCFA/m²/an</p>
        </motion.div>
      </div>
    ),

    "Énergie": (
      <div className="space-y-4">
        {commonCard("Carburants", (
          <ul className="list-disc pl-6">
            <li>Super : 840 FCFA/L</li>
            <li>Gasoil : 828 FCFA/L</li>
            <li>Pétrole : 336.99 FCFA/L</li>
          </ul>
        ))}
        {commonCard("Électricité Basse Tension", (
          <ul className="list-disc pl-6">
            <li>≤ 110 kWh : 50 FCFA</li>
            <li>111 à 400 kWh : 79 FCFA</li>
            <li>... jusqu'à 2000 kWh</li>
          </ul>
        ))}
        {commonCard("Gaz et Eau", (
          <ul className="list-disc pl-6">
            <li>Bouteille 12kg : 6 500 FCFA</li>
            <li>Eau potable : 364 FCFA/m³</li>
            <li>Industrielle : 182 FCFA/m³</li>
          </ul>
        ))}
      </div>
    ),

    "Télécommunication": (
      <div className="space-y-4">
        {commonCard("Téléphonie Fixe (CAMTEL)", (
          <ul className="list-disc pl-6">
            <li>Fixe à fixe : 20 - 60 FCFA/min</li>
            <li>Fixe à mobile : 85 FCFA/min</li>
          </ul>
        ))}
        {commonCard("Téléphonie Mobile", (
          <ul className="list-disc pl-6">
            <li>Appels : 30 - 90 FCFA/min</li>
            <li>SMS : 50 à 200 FCFA</li>
          </ul>
        ))}
        {commonCard("Internet", (
          <ul className="list-disc pl-6">
            <li>ADSL : 20 000 - 30 000 FCFA/mois</li>
            <li>Haut débit : 12 000 à 300 000 FCFA/mois</li>
          </ul>
        ))}
      </div>
    ),

    "Personnel": (
      <div className="space-y-4">
        {commonCard("Salaire Minimum", "36 270 FCFA/mois (inchangé depuis 2014)")}
        {commonCard("Salaires par catégorie", (
          <ul className="list-disc pl-6">
            <li>Cadres : 267 000 - 457 000 FCFA</li>
            <li>Employés : 129 000 - 325 000 FCFA</li>
            <li>Ouvriers : 40 000 - 134 000 FCFA</li>
          </ul>
        ))}
        {commonCard("Cotisations Sociales", (
          <ul className="list-disc pl-6">
            <li>Familiale : 7%</li>
            <li>Risques : 1.75% à 5%</li>
            <li>Pension : 8.4%</li>
          </ul>
        ))}
        {commonCard("Zone actuelle", (
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="border rounded-md p-2 w-full text-gray-700"
          >
            <option>Zone 1 (Douala, Yaoundé)</option>
            <option>Zone 2 (Autres villes)</option>
          </select>
        ))}
      </div>
    ),

    "Assurance": (
      <div className="space-y-4">
        {commonCard("Incendie Immeubles", (
          <ul className="list-disc pl-6">
            <li>Bureaux : 0,70 pour mille</li>
            <li>Habitations mixtes : 0,75 pour mille</li>
          </ul>
        ))}
        {commonCard("Accident de Travail", "Inclus dans charges sociales (1,5% à 5%)")}
        {commonCard("Transport", (
          <ul className="list-disc pl-6">
            <li>Véhicules utilitaires : 121 212 FCFA à 150 086 FCFA</li>
          </ul>
        ))}
      </div>
    ),

    "Frais Bancaires": (
      <div className="space-y-4">
        {commonCard("Intérêts Bancaires", (
          <ul className="list-disc pl-6">
            <li>Long terme : 7% - 10%</li>
            <li>Moyen terme : 11% - 17%</li>
            <li>Crédits : 5% - 15%</li>
          </ul>
        ))}
        {commonCard("Frais de service", "29 000 FCFA + 2,35% jusqu’à 39 000 FCFA + 4,85%")}
        {commonCard("Dépôts à Terme", "Taux : 3,5%")}
      </div>
    ),
  };

  const normalizedName = factor.name.trim();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F0B60]">{factor.name}</h2>
            <button
              onClick={onClose}
              className="hover:bg-red-50 p-2 rounded-full transition duration-300"
              aria-label="Fermer"
            >
              <X className="w-6 h-6 text-red-500 hover:text-red-700 transition duration-300" />
            </button>
          </div>
          <div className="p-6 space-y-6">
            {factor.details
              ? typeof factor.details === 'function'
                ? factor.details({ zone, setZone })
                : factor.details
              : factorContentMap[normalizedName] ?? (
                <div className="text-center text-gray-500 py-10">
                  <p className="text-lg font-semibold">⛔ Contenu indisponible</p>
                  <p className="text-sm mt-1">
                    Les informations détaillées pour <strong>{factor.name}</strong> ne sont pas encore disponibles.
                  </p>
                </div>
              )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FactorModal;
