import React, { useState } from "react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/20/solid";

interface FiltersProps {
  filters: {
    secteur: string;
    ville: string;
    region: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      secteur: string;
      ville: string;
      region: string;
    }>
  >;
}

const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton flottant pour mobile */}
      <button
        className="fixed top-1/3 left-4 z-[1000] md:hidden bg-[#0F0B60] text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir les filtres"
      >
        <FunnelIcon className="w-6 h-6" />
      </button>

      {/* Overlay + Modal pour mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            {/* Bouton de fermeture */}
            <button
              className="absolute top-3 right-3 text-gray-700"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer les filtres"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-bold mb-4">Filtres</h2>

            {/* Sélecteur de secteur */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secteur d'activité
              </label>
              <select
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-500"
                value={filters.secteur}
                onChange={(e) =>
                  setFilters({ ...filters, secteur: e.target.value })
                }
              >
                <option value="">Tous les secteurs</option>
                <option value="Numérique">Numérique</option>
                <option value="Agro-industrie">Agro-industrie</option>
                <option value="Énergie">Énergie</option>
                <option value="Bois-Forêt">Bois-Forêt</option>
                <option value="Textile/Confection/Cuir">
                  Textile/Confection/Cuir
                </option>
                <option value="Hydrocarbures/Raffinage">
                  Hydrocarbures/Raffinage
                </option>
                <option value="Chimie et Pharmacie">Chimie et Pharmacie</option>
                <option value="Mines/Métallurgie/Sidérurgie">
                  Mines/Métallurgie/Sidérurgie
                </option>
                <option value="Financement">Financement</option>
                <option value="Infrastructures">Infrastructures</option>
              </select>
            </div>

            {/* Champ Ville */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ville
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring focus:ring-green-500"
                placeholder="Rechercher une ville"
                value={filters.ville}
                onChange={(e) =>
                  setFilters({ ...filters, ville: e.target.value })
                }
              />
            </div>

            {/* Bouton Réinitialiser */}
            <button
              onClick={() =>
                setFilters({ secteur: "", ville: "", region: "" })
              }
              className="mt-4 w-full bg-[#0F0B60] p-2 rounded-md text-white text-center text-sm font-semibold"
            >
              Réinitialiser les filtres
            </button>

            {/* Bouton OK */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full bg-[#0F0B60] p-2 rounded-md text-white text-center text-sm font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Filtre visible en mode desktop */}
      <div className="hidden md:block bg-white p-6 shadow-md rounded-lg md:w-1/4 sticky top-48 h-fit">
        <h2 className="text-xl font-bold mb-4">Filtres</h2>

        {/* Sélecteur de secteur */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Secteur d'activité
          </label>
          <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-500"
            value={filters.secteur}
            onChange={(e) =>
              setFilters({ ...filters, secteur: e.target.value })
            }
          >
            <option value="">Tous les secteurs</option>
            <option value="Numérique">Numérique</option>
            <option value="Agro-industrie">Agro-industrie</option>
            <option value="Énergie">Énergie</option>
            <option value="Bois-Forêt">Bois-Forêt</option>
            <option value="Textile/Confection/Cuir">
              Textile/Confection/Cuir
            </option>
            <option value="Hydrocarbures/Raffinage">
              Hydrocarbures/Raffinage
            </option>
            <option value="Chimie et Pharmacie">Chimie et Pharmacie</option>
            <option value="Mines/Métallurgie/Sidérurgie">
              Mines/Métallurgie/Sidérurgie
            </option>
            <option value="Financement">Financement</option>
            <option value="Infrastructures">Infrastructures</option>
          </select>
        </div>

        {/* Champ Région */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Région
          </label>
          <select
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-500"
            value={filters.region}
            onChange={(e) =>
              setFilters({ ...filters, region: e.target.value })
            }
          >
            <option value="">Toutes les régions</option>
            <option value="Littoral">Littoral</option>
            <option value="Centre">Centre</option>
            <option value="Nord">Nord</option>
            <option value="Sud">Sud</option>
            <option value="Extreme-Nord">Extrême-Nord</option>
            <option value="Adamaoua">Adamaoua</option>
            <option value="Nord-Ouest">Nord-Ouest</option>
            <option value="Sud-Ouest">Sud-Ouest</option>
            <option value="Ouest">Ouest</option>
            <option value="Est">Est</option>
          </select>
        </div>

        {/* Champ Ville */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ville
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:ring focus:ring-green-500"
            placeholder="Rechercher une ville"
            value={filters.ville}
            onChange={(e) =>
              setFilters({ ...filters, ville: e.target.value })
            }
          />
        </div>

        {/* Bouton Réinitialiser */}
        <button
          onClick={() =>
            setFilters({ secteur: "", ville: "", region: "" })
          }
          className="mt-4 w-full bg-[#0F0B60] p-2 rounded-md text-white text-center text-sm font-semibold"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </>
  );
};

export default Filters;