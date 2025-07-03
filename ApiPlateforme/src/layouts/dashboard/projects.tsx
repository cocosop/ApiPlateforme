import React, { useEffect, useState } from 'react';
import projectService from '../../services/projectService';
import DefaultImage from '../../assets/img/default-image.webp';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';

type Project = {
  id: string;
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
  soumissionDate?: Date;
  description?: string;
  budget?: number;
  deadline?: string;
}

const MyProject: React.FC = () => {
  const defaultImage = DefaultImage;
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const res = await projectService.fetchAllProjects();
      setProjects(res.data);
    } catch (error) {
      console.error("Une erreur est survenue lors de l'affichage des projets", error);
    }
  };

  const handleAction = async (project: Project, action: 'studying' | 'approve' | 'rejected') => {
    setLoadingId(project.id);
    try {
      if (action === 'studying') await projectService.studyingProject(project.titre);
      if (action === 'approve') await projectService.approveProject(project.titre);
      if (action === 'rejected') await projectService.rejectedProject(project.titre);
      await fetchProjects();
    } catch (e) {
      // Optionally: show error
    }
    setLoadingId(null);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.secteur.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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

  const handleProjectStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'En attente';
      case 'rejected':
        return 'Rejeté';
      case 'studying':
        return 'En étude';
      case 'accepted':
        return 'Accepté';
      case 'in_progress':
        return 'En cours';
      default:
        return status;
    }
  };

  const getStatusClasses = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'studying':
        return 'bg-blue-100 text-blue-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'in_progress':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      {/* Filter Bar */}
      <div className="fixed top-16 left-64 w-[calc(100vw-16rem)] z-20 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2 max-w-full">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${statusFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
              >
                Tous
              </button>
              <button
                onClick={() => setStatusFilter('pending')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${statusFilter === 'pending' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
              >
                En attente
              </button>
              <button
                onClick={() => setStatusFilter('studying')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${statusFilter === 'studying' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
              >
                En étude
              </button>
              <button
                onClick={() => setStatusFilter('accepted')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${statusFilter === 'accepted' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
              >
                Acceptés
              </button>
              <button
                onClick={() => setStatusFilter('rejected')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${statusFilter === 'rejected' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
              >
                Rejetés
              </button>
            </div>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Rechercher un projet..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 min-h-screen pt-16">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex flex-col">
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const progress = handleProgressionProject(project);
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Image centrée avec padding */}
                    <div className="relative h-40 flex justify-center items-center bg-gray-100 p-4">
                      <img
                        src={project.image || defaultImage}
                        alt={project.titre}
                        className="object-contain h-full max-h-32 w-auto mx-auto rounded-md"
                      />
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(project.status)}`}>
                        {handleProjectStatus(project.status)}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.titre}</h3>
                      <p className="text-sm text-gray-500 mb-3">Secteur: {project.secteur}</p>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progression</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-full rounded-full bg-blue-600 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-400">
                          {project.soumissionDate
                            ? `Soumis: ${new Date(project.soumissionDate).toISOString().slice(0, 10)
                            }` : 'Date inconnue'}
                        </span>
                        {project.status.toLowerCase() === 'accepted' && (
                          <button
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/projet/details/${project.titre}`);
                            }}
                          >
                            Voir détails
                          </button>
                        )}
                      </div>
                      {/* Actions */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.status.toLowerCase() === 'pending' && (
                          <>
                            <button
                              className="flex-1 px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition text-xs"
                              disabled={loadingId === project.id}
                              onClick={e => {
                                e.stopPropagation();
                                handleAction(project, 'studying');
                              }}
                            >
                              {loadingId === project.id ? '...' : 'Étudier'}
                            </button>
                            <button
                              className="flex-1 px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition text-xs"
                              disabled={loadingId === project.id}
                              onClick={e => {
                                e.stopPropagation();
                                handleAction(project, 'approve');
                              }}
                            >
                              {loadingId === project.id ? '...' : 'Approuver'}
                            </button>
                            <button
                              className="flex-1 px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition text-xs"
                              disabled={loadingId === project.id}
                              onClick={e => {
                                e.stopPropagation();
                                handleAction(project, 'rejected');
                              }}
                            >
                              {loadingId === project.id ? '...' : 'Rejeter'}
                            </button>
                          </>
                        )}
                        {project.status === 'studying' && (
                          <>
                            <button
                              className="flex-1 px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 transition text-xs"
                              disabled={loadingId === project.id}
                              onClick={e => {
                                e.stopPropagation();
                                handleAction(project, 'approve');
                              }}
                            >
                              {loadingId === project.id ? '...' : 'Approuver'}
                            </button>
                            <button
                              className="flex-1 px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition text-xs"
                              disabled={loadingId === project.id}
                              onClick={e => {
                                e.stopPropagation();
                                handleAction(project, 'rejected');
                              }}
                            >
                              {loadingId === project.id ? '...' : 'Rejeter'}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProject.titre}</h2>
                  <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    {/* Image centrée et paddée dans la modale */}
                    <div className="flex justify-center items-center bg-gray-100 p-6 mb-6 rounded-lg">
                      <img
                        src={selectedProject.image || defaultImage}
                        alt={selectedProject.titre}
                        className="object-contain h-64 max-h-64 w-auto mx-auto rounded-md"
                      />
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                      <p className="text-gray-600">
                        {selectedProject.description || "Aucune description disponible."}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Secteur</h3>
                          <p className="text-sm text-gray-900 mt-1">{selectedProject.secteur}</p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Statut</h3>
                          <p className="text-sm mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(selectedProject.status)}`}>
                              {handleProjectStatus(selectedProject.status)}
                            </span>
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Progression</h3>
                          <div className="mt-1">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>{handleProgressionProject(selectedProject)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="h-full rounded-full bg-blue-600"
                                style={{ width: `${handleProgressionProject(selectedProject)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Budget</h3>
                          <p className="text-sm text-gray-900 mt-1">
                            {selectedProject.budget
                              ? `${selectedProject.budget.toLocaleString()} €`
                              : 'Non spécifié'}
                          </p>
                        </div>

                        {selectedProject.deadline && (
                          <div>
                            <h3 className="text-sm font-medium text-gray-500">Date limite</h3>
                            <p className="text-sm text-gray-900 mt-1">{selectedProject.deadline}</p>
                          </div>
                        )}

                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Date de soumission</h3>
                          <p className="text-sm text-gray-900 mt-1">
                            {selectedProject.soumissionDate
                              ? new Date(selectedProject.soumissionDate).toISOString().slice(0, 10)
                              : 'Date inconnue'}
                          </p>
                        </div>

                        <div className="pt-4">
                          <button
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                            onClick={() => {
                              navigate(`/projet/details/${selectedProject.titre}`);
                              closeModal();
                            }}
                          >
                            Voir les détails complets
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProject;