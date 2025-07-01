// src/pages/InvestorDashboard.tsx

import React, { useEffect, useState } from 'react';
import projectService from '../../services/projectService';
import DefaultImage from '../../assets/img/default-image.webp';
import { useNavigate } from 'react-router-dom';

type Project = {
  titre: string;
  secteur: string;
  status: string;
  image: string;
  investor: any;
  stages: Array<{
    titre: string;
    date: string;
    status: string;
  }>;
}

// const subscribedProjects: SubscribedProject[] = [
//   {
//     id: 1,
//     titre: "Modernisation de la filière cacao",
//     secteur: "Agro-industrie",
//     statut: "En cours",
//     montantInvesti: "150 000 €",
//     progress: 55,
//     image: "https://source.unsplash.com/featured/?cocoa",
//     promoteur: "AgriDev Cameroon"
//   },
//   {
//     id: 2,
//     titre: "Centrale solaire de Garoua",
//     secteur: "Énergie",
//     statut: "Planification",
//     montantInvesti: "200 000 €",
//     progress: 30,
//     image: "https://source.unsplash.com/featured/?solar",
//     promoteur: "SolarTech"
//   },
//   {
//     id: 3,
//     titre: "Plateforme numérique éducative",
//     secteur: "Numérique",
//     statut: "Terminé",
//     montantInvesti: "100 000 €",
//     progress: 100,
//     image: "https://source.unsplash.com/featured/?technology",
//     promoteur: "EduCam"
//   }
// ];

const MyProjects: React.FC = () => {
  const defaultImage = DefaultImage;
  const [projects, setProjects] = useState<Project[]>([])
  const navigate = useNavigate();

  const fetchProjects = async () => {
    const res = await projectService.fetchAllProjects();
    try {
      setProjects(res.data)
    } catch {
      console.error("Une erreur est survenue lors l'affichage des projets")
    }
  }

  const handleProjectClick = (project: Project) => {
    navigate(`/projet/details/${project.titre}`);
  };

  const handleProgressionProject = (project: Project) => {
    if (!project.stages || project.stages.length === 0) return 0;
    const completedStages = project.stages.reduce((acc, stage) => {
      if (stage.status.toLowerCase() === 'completed') {
        return acc + 1;
      }
      return acc;
    }, 0);
    return Math.round((completedStages / project.stages.length) * 100);
  };

  const handleProjectStatus = (project: Project) => {
    if (project.status.toLowerCase() === 'pending') {
      return 'En attente';
    } else if (project.status.toLowerCase() === 'rejected') {
      return 'Rejeté';
    } else if (project.status.toLowerCase() === 'studying') {
      return 'En étude';
    }
    return '';
  }

  const getStatusClasses = (project: Project) => {
    switch (project.status.toLowerCase()) {
      case 'studying':
        return 'bg-blue-100 text-green-700';
      case 'in_progress':
        return 'bg-red-100 text-yellow-700';
      case 'rejected':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [])
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mes Projets Investis</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, key) => (
          <div key={key}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image || defaultImage} alt={project.titre} className="w-full h-auto object-cover" />

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">{project.titre}</h2>
              <p className="text-sm text-gray-600">Secteur : <span className="font-medium">{project.secteur}</span></p>
              {<p className="text-sm text-gray-600">Promoteur : <span className="font-medium">{project.investor.firstname}</span></p>}
              <p className="text-sm text-gray-600">Statut : <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusClasses(project)}`}>{handleProjectStatus(project)}</span></p>

              <div className="mt-2">
                <label className="text-xs text-gray-500">Progression</label>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div className="text-right text-xs text-gray-500">{handleProgressionProject(project)}%</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
