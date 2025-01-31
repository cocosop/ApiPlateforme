import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faCity, faSyncAlt } from '@fortawesome/free-solid-svg-icons';// Définir le type pour les filtres

interface FiltersProps {
  filters: {
    secteur: string;
    ville: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    secteur: string;
    ville: string;
  }>>;
}

const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  return (

    <div className="top-4 bg-gray-60 p-6 shadow-md rounded-lg md:w-1/4 sticky">
      <h2 className="text-xl font-bold mb-4">Filtres</h2>

      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FontAwesomeIcon icon={faIndustry} className="mr-2" />
          Secteur d'activité
        </label>
        <select
          className="w-full p-2 border rounded-md focus:ring focus:ring-green-500"
          value={filters.secteur}
          onChange={(e) => setFilters({ ...filters, secteur: e.target.value })}
          aria-label="Sélectionner un secteur"
        >
          <option value="">Tous les secteurs</option>
          <option value="Numérique">Numérique</option>
          <option value="Agro-industrie">Agro-industrie</option>
          <option value="Énergie">Énergie</option>
          <option value="Bois-Forêt">Bois-Forêt</option>
          <option value="Textile/Confection/Cuir">Textile/Confection/Cuir</option>
          <option value="Hydrocarbures/Raffinage">Hydrocarbures/Raffinage</option>
          <option value="Chimie et Pharmacie">Chimie et Pharmacie</option>
          <option value="Mines/Métallurgie/Sidérurgie">Mines/Métallurgie/Sidérurgie</option>
          <option value="Financement">Financement</option>
          <option value="Infrastructures">Infrastructures</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FontAwesomeIcon icon={faCity} className="mr-2" />
          Ville
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-md focus:ring focus:ring-green-500"
          placeholder="Rechercher une ville"
          value={filters.ville}
          onChange={(e) => setFilters({ ...filters, ville: e.target.value })}
          aria-label="Rechercher une ville"
        />
      </div>

      <button
        onClick={() => setFilters({ secteur: "", ville: "" })}
        className="mt-4 w-full bg-[#0F0B60] p-2 rounded-md text-white text-center text-sm font-semibold flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faSyncAlt} className="mr-2" />
        Réinitialiser les filtres
      </button>
    </div>
  );
};

export default Filters;
