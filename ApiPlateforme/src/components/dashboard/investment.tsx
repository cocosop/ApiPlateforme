import React, { useState } from 'react';
import { Briefcase, TrendingUp, AlertCircle, Check, Plus, X, MapPin } from 'lucide-react';
import { ProjeTypes } from '../../types';

const initialProjects: ProjeTypes[] = [
  {
    id: 1,
    titre: "Tech Startup Innovation",
    description: "Investissement dans une startup de technologie blockchain",
    montant: "€50,000",
    progress: 75,
    return: "+12.5%",
    risk: "Modéré",
    statut: "En cours",
    secteur: "Agriculture",
    promoteur: "Xavier Ngoumou",
    region: "Ouest",
    ville: "Bafoussam",
    quartier: "Kamkop",
    latitude: 52,
    longitude: 89,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 2,
    titre: "Projet Immobilier Durable",
    description: "Construction d'un complexe résidentiel écologique",
    montant: "€125,000",
    progress: 40,
    return: "+8.2%",
    risk: "Faible",
    statut: "En cours",
    secteur: "Agriculture",
    promoteur: "Xavier Ngoumou",
    region: "Ouest",
    ville: "Bafoussam",
    quartier: "Kamkop",
    latitude: 52,
    longitude: 89,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 3,
    titre: "Expansion E-commerce",
    description: "Financement de l'expansion d'une plateforme e-commerce",
    montant: "€75,000",
    progress: 90,
    return: "+15.7%",
    risk: "Élevé",
    statut: "Bientôt terminé",
    secteur: "Agriculture",
    promoteur: "Xavier Ngoumou",
    region: "Ouest",
    ville: "Bafoussam",
    quartier: "Kamkop",
    latitude: 52,
    longitude: 89,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
  }
];

const Investment: React.FC = () => {
  const [projects, setProjects] = useState<ProjeTypes[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    id: Math.floor(Math.random() * 1000), // Génération d'un ID aléatoire
    secteur: '',
    titre: '',
    promoteur: '',
    region: '',
    ville: '',
    quartier: '',
    description: '',
    return: '',
    montant: '',
    statut: 'Planification',
    image: '',
    risk: 'Faible' as 'Faible' | 'Modéré' | 'Élevé',
    progress: 0,
    latitude: 0,
    longitude: 0,
    deadline: '',
    budget: '',
    spent: '€0',
    team: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nouveau projet:', newProject);
    // Ici vous pourriez ajouter la logique pour sauvegarder le nouveau projet
    setIsModalOpen(false);
    // Réinitialiser le formulaire
    setNewProject({
      id: Math.floor(Math.random() * 1000),
      secteur: '',
      titre: '',
      promoteur: '',
      region: '',
      ville: '',
      quartier: '',
      description: '',
      return: '',
      montant: '',
      statut: 'Planification',
      image: '',
      risk: 'Faible',
      progress: 0,
      latitude: 0,
      longitude: 0,
      deadline: '',
      budget: '',
      spent: '€0',
      team: []
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Plus className="h-5 w-5" />
        Nouveau Projet
      </button>
      </div>
 {/* Modal pour nouveau projet */}
 {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-white py-2">
              <h3 className="text-lg font-semibold">Nouveau Projet</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Section Informations de base */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Informations de base
                  </h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Secteur d'activité</label>
                    <input
                      type="text"
                      name="secteur"
                      value={newProject.secteur}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Titre du projet</label>
                    <input
                      type="text"
                      name="titre"
                      value={newProject.titre}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Promoteur</label>
                    <input
                      type="text"
                      name="promoteur"
                      value={newProject.promoteur}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={newProject.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                {/* Section Localisation */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Localisation
                  </h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Région</label>
                    <input
                      type="text"
                      name="region"
                      value={newProject.region}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                    <input
                      type="text"
                      name="ville"
                      value={newProject.ville}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quartier</label>
                    <input
                      type="text"
                      name="quartier"
                      value={newProject.quartier}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
                      <input
                        type="number"
                        name="latitude"
                        value={newProject.latitude}
                        onChange={handleNumberInputChange}
                        step="0.000001"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
                      <input
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
              
              {/* Section Financière */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Informations financières</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Montant total (€)</label>
                    <input
                      type="text"
                      name="montant"
                      value={newProject.montant}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Retour sur investissement</label>
                    <input
                      type="text"
                      name="return"
                      value={newProject.return}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget alloué</label>
                    <input
                      type="text"
                      name="budget"
                      value={newProject.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                {/* Section Statut et Progression */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Suivi du projet</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                    <select
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Niveau de risque</label>
                    <select
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Progression (%)</label>
                    <input
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
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date limite</label>
                    <input
                      type="date"
                      name="deadline"
                      value={newProject.deadline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              {/* Section Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image du projet (URL)</label>
                <input
                  type="url"
                  name="image"
                  value={newProject.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="pt-4 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Créer le projet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-48 relative">
              <img 
                src={project.image} 
                alt={project.titre}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.risk === 'Faible' ? 'bg-green-100 text-green-700' :
                  project.risk === 'Modéré' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {project.risk}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{project.titre}</h3>
              <p className="text-gray-500 text-sm mb-4">{project.description}</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Progression</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Investissement</p>
                    <p className="font-semibold">{project.montant}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Retour prévu</p>
                    <p className="font-semibold text-green-500">{project.return}</p>
                  </div>
                </div>

                <button className="w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Investir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Processus d'Investissement</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Briefcase,
              title: "1. Sélection du Projet",
              description: "Choisissez parmi nos projets soigneusement sélectionnés"
            },
            {
              icon: AlertCircle,
              title: "2. Due Diligence",
              description: "Examinez les détails et les risques du projet"
            },
            {
              icon: Check,
              title: "3. Investissement",
              description: "Confirmez votre investissement et suivez sa progression"
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <step.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investment;
