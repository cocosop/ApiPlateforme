// src/Investment.tsx
import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { ProjeTypes, CreateProjectType } from '../../types';
import ProjectFormModal from './../../components/dashboardComponent/newProjectForm/NewProjectForm';
import { projectApi } from '../../api/services/projectService';
import Projet from '../../assets/img/ampoule.jpg';
 

const defaultNewProject: CreateProjectType = {
  secteur: '',
  titre: '',
  promoteur: '',
  description: '',
  region: '',
  ville: '',
  quartier: '',
  latitude: 0,
  longitude: 0,
  montant: '',
  retour: '',
  statut: 'Planification',
  risk: 'Faible',
  progress: 0,
  image: '',
};
const DEFAULT_IMAGE_URL = Projet;


const Investment: React.FC = () => {
  const [projects, setProjects] = useState<ProjeTypes[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<CreateProjectType>(defaultNewProject);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectApi.getAllProjects();
        setProjects(data);
      } catch (error) {
        console.error("Erreur chargement des projets :", error);
      }
    };

    fetchProjects();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: Number(value) }));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // AJOUT : Préparez les données à envoyer en vérifiant si le champ 'image' est vide.
    const projectDataToSend = {
      ...newProject, // On copie toutes les données saisies dans le formulaire
      // Si `newProject.image` est vide, on utilise `DEFAULT_IMAGE_URL`.
      // Sinon, on garde la valeur saisie par l'utilisateur.
      image: newProject.image || DEFAULT_IMAGE_URL,
    };

    try {
      // On envoie les données préparées à l'API
      const created = await projectApi.createProject(projectDataToSend);
      
      setProjects(prev => [...prev, created]);
      alert("Projet créé avec succès !");
      setIsModalOpen(false);
      setNewProject(defaultNewProject);
    } catch (error) {
      console.error("Erreur création projet :", error);
      alert("Erreur lors de la création du projet.");
    }
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Nouveau Projet
        </button>
      </div>

      <ProjectFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newProject={newProject}
        handleInputChange={handleInputChange}
        handleNumberInputChange={handleNumberInputChange}
        handleSubmit={handleSubmit}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={project.image || DEFAULT_IMAGE_URL}
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
                <p className="text-gray-500 text-sm mb-4 line-clamp-1">{project.description}</p>

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
                      <p className="font-semibold">{project.montant} XAF</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Retour prévu</p>
                      <p className="font-semibold text-green-500">{project.retour} par an</p>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Investir
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">Aucun projet disponible pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default Investment;
