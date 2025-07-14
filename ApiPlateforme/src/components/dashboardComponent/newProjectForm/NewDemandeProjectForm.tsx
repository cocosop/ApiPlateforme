import React from 'react';
import { X, Briefcase, MapPin, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjeTypes } from '../../../types';

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  newProject: ProjeTypes;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleNumberInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  creating: boolean;
}

const NewDemandeProjectForm: React.FC<ProjectFormModalProps> = ({
  isOpen,
  onClose,
  newProject,
  handleInputChange,
  handleNumberInputChange,
  handleSubmit,
  creating
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
      >
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2 z-10">
          <h3 className="text-lg font-semibold">Nouveau Projet</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Informations de base */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Informations de base
              </h4>

              <div>
                <label htmlFor="secteur" className="block text-sm font-medium text-gray-700 mb-1">Secteur d'activité *</label>
                <select
                  id="secteur"
                  name="secteur"
                  value={newProject.secteur}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Sélectionnez un secteur --</option>
                  <option value="Agro-industrie">Agro-industrie</option>
                  <option value="Énergie">Énergie</option>
                  <option value="Numérique">Numérique</option>
                  <option value="Bois-Forêts">Bois-Forêts</option>
                  <option value="Textile/Confection/Cuir">Textile/Confection/Cuir</option>
                  <option value="Hydrocarbures/Raffinage">Hydrocarbures/Raffinage</option>
                  <option value="Chimie/Pharmacie">Chimie/Pharmacie</option>
                  <option value="Mines/Métallurgie/Sidérurgie">Mines/Métallurgie/Sidérurgie</option>
                  <option value="Financement">Financement</option>
                  <option value="Infrastructure">Infrastructure</option>
                </select>
              </div>

              <div>
                <label htmlFor="titre" className="block text-sm font-medium text-gray-700 mb-1">Titre du projet *</label>
                <input
                  id="titre"
                  type="text"
                  name="titre"
                  value={newProject.titre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={newProject.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Localisation */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Localisation
              </h4>

              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Région *</label>
                <select
                  id="region"
                  name="region"
                  value={newProject.region}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">-- Sélectionnez une région --</option>
                  <option value="Adamaoua">Adamaoua</option>
                  <option value="Centre">Centre</option>
                  <option value="Est">Est</option>
                  <option value="Extrême-Nord">Extrême-Nord</option>
                  <option value="Littoral">Littoral</option>
                  <option value="Nord">Nord</option>
                  <option value="Nord-Ouest">Nord-Ouest</option>
                  <option value="Ouest">Ouest</option>
                  <option value="Sud">Sud</option>
                  <option value="Sud-Ouest">Sud-Ouest</option>
                </select>
              </div>

              <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                <input
                  id="ville"
                  type="text"
                  name="ville"
                  value={newProject.ville}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="quartier" className="block text-sm font-medium text-gray-700 mb-1">Quartier</label>
                <input
                  id="quartier"
                  type="text"
                  name="quartier"
                  value={newProject.quartier}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                  <input
                    id="latitude"
                    type="number"
                    name="latitude"
                    value={newProject.latitude}
                    onChange={handleNumberInputChange}
                    step="0.000001"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                  <input
                    id="longitude"
                    type="number"
                    name="longitude"
                    value={newProject.longitude}
                    onChange={handleNumberInputChange}
                    step="0.000001"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Informations financières */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Informations financières</h4>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget prévu (XAF)</label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  value={newProject.budget}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              disabled={creating}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 disabled:opacity-50"
              disabled={creating}
            >
              {creating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enregistrement...
                </>
              ) : (
                "Enregistrer"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default NewDemandeProjectForm;
