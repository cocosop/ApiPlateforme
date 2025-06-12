// src/components/ProjectFormModal.tsx
import React from 'react';
import { X, Briefcase, MapPin } from 'lucide-react';
import { ProjeTypes } from '../../../types';

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  newProject: ProjeTypes;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleNumberInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ProjectFormModal: React.FC<ProjectFormModalProps> = ({
  isOpen,
  onClose,
  newProject,
  handleInputChange,
  handleNumberInputChange,
  handleSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2">
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
                <label htmlFor="secteur" className="block text-sm font-medium text-gray-700 mb-1">Secteur d'activité</label>
                <select
                  id="secteur"
                  name="secteur"
                  value={newProject.secteur}
                  onChange={handleInputChange}
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
                <label htmlFor="titre" className="block text-sm font-medium text-gray-700 mb-1">Titre du projet</label>
                <input
                  id="titre"
                  type="text"
                  name="titre"
                  value={newProject.titre}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="promoteur" className="block text-sm font-medium text-gray-700 mb-1">Promoteur</label>
                <input
                  id="promoteur"
                  type="text"
                  name="promoteur"
                  value={newProject.promoteur}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
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
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Région</label>
                <select
                  id="region"
                  name="region"
                  value={newProject.region}
                  onChange={handleInputChange}
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
                <label htmlFor="montant" className="block text-sm font-medium text-gray-700 mb-1">Montant total (XAF)</label>
                <input
                  id="montant"
                  type="text"
                  name="montant"
                  value={newProject.montant}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="return" className="block text-sm font-medium text-gray-700 mb-1">Retour sur investissement(%)</label>
                <input
                  id="return"
                  type="text"
                  name="return"
                  value={newProject.retour}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget alloué(XAF)</label>
                <input
                  id="budget"
                  type="text"
                  name="budget"
                  value={newProject.montant}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Suivi du projet */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-700">Suivi du projet</h4>

              <div>
                <label htmlFor="statut" className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                <select
                  id="statut"
                  name="statut"
                  value={newProject.statut}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Planification">Planification</option>
                  <option value="En cours">En cours</option>
                  <option value="Terminé">Terminé</option>
                  <option value="Suspendu">Suspendu</option>
                </select>
              </div>

              <div>
                <label htmlFor="risk" className="block text-sm font-medium text-gray-700 mb-1">Niveau de risque</label>
                <select
                  id="risk"
                  name="risk"
                  value={newProject.risk}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Faible">Faible</option>
                  <option value="Modéré">Modéré</option>
                  <option value="Élevé">Élevé</option>
                </select>
              </div>

              <div>
                <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-1">Progression (%)</label>
                <input
                  id="progress"
                  type="range"
                  name="progress"
                  min="0"
                  max="100"
                  value={newProject.progress}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-1">{newProject.progress}%</div>
              </div>
            </div>
          </div>

          {/* Image du projet */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image du projet (URL)</label>
            <input
              id="image"
              type="url"
              name="image"
              value={newProject.image}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Boutons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectFormModal;
