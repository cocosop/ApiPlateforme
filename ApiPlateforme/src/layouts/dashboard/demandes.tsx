import React, { useEffect, useState } from 'react';
import { Loader2, X } from 'lucide-react';
import { ProjeTypes, CreateProjectType } from '../../types'; // Assuming ProjeTypes is correctly defined here
import ProjectService from '../../services/projectService';
import Projet from '../../assets/img/ampoule.jpg';
import NewDemandeProjectForm from '../../components/dashboardComponent/newDemandeProjectForm';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { useAuthStore } from '../../store/AuthStore';
import { AxiosResponse } from 'axios'; // Import AxiosResponse type

// --- Default Values ---
const defaultNewProject: CreateProjectType = {
  secteur: '',
  titre: '',
  description: '',
  region: '',
  ville: '',
  quartier: '',
  latitude: 0,
  longitude: 0,
  montant: '',
  ROI: '',
  budget: 0,
  investor: '', // ✅ obligatoire
  url_image: '', // ✅ obligatoire
  dateDebut: new Date, // ✅ obligatoire
  dateFin: new Date,
  status: 'PENDING', // ✅ obligatoire
};

const DEFAULT_IMAGE_URL = Projet;

// --- Demandes Component ---
const Demandes: React.FC = () => {
    // --- State Management ---
    const { decoded } = useAuthStore();
    const isAdmin = decoded?.role === 'ADMIN';

    const [projects, setProjects] = useState<ProjeTypes[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProject, setNewProject] = useState<CreateProjectType>(defaultNewProject);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [creatingProject, setCreatingProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjeTypes | null>(null);
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    // --- Effects ---
    useEffect(() => {
        const fetchProjects = async () => {
            setLoadingProjects(true);
            try {
                // Access .data from the AxiosResponse
                const response: AxiosResponse<ProjeTypes[]> = await ProjectService.fetchAllProjects();
                setProjects(response.data); // Corrected: Use response.data
            } catch (error) {
                console.error("Erreur chargement des projets :", error);
                // Optionally, add user feedback for fetch error
            } finally {
                setLoadingProjects(false);
            }
        };

        fetchProjects();
    }, []);

    // --- Handlers for New Project Form ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject(prev => ({ ...prev, [name]: value }));
    };

    const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Check if value is a valid number before converting
        setNewProject(prev => ({ ...prev, [name]: value === '' ? 0 : Number(value) }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreatingProject(true);

        const projectDataToSend = {
            ...newProject,
            image_url: newProject.url_image || DEFAULT_IMAGE_URL,
        };

        try {
            // Access .data from the AxiosResponse
            const response: AxiosResponse<ProjeTypes> = await ProjectService.addProject(projectDataToSend);
            const createdProject = response.data; // Corrected: Use response.data
            setProjects(prev => [...prev, createdProject]);
            setIsModalOpen(false);
            setNewProject(defaultNewProject);
            setShowSuccessToast(true);
            setTimeout(() => setShowSuccessToast(false), 3000);
        } catch (error) {
            console.error("Erreur création projet :", error);
            alert("Erreur lors de la création du projet."); // User feedback
        } finally {
            setCreatingProject(false);
        }
    };

    // --- Helper for Status Color ---
    const getStatusColor = (status: string | undefined) => {
        switch (status) {
            case 'ACCEPTED':
                return 'bg-green-100 text-green-700';
            case 'REJECTED':
                return 'bg-red-100 text-red-700';
            case 'STUDYING':
                return 'bg-blue-100 text-blue-700';
            case 'PENDING':
            default:
                return 'bg-yellow-100 text-yellow-700';
        }
    };

    // --- Helper for Project Status Updates (Admin actions) ---
    // The serviceCall function now explicitly returns AxiosResponse<any>
const handleStatusUpdate = async (
    projectId: number, // <--- CHANGE THIS FROM 'string' TO 'number'
    projectTitle: string,
    newStatus: ProjeTypes['status'],
    serviceCall: (titre: string) => Promise<AxiosResponse<any>>
) => {
    try {
        await serviceCall(projectTitle);
        setProjects(prev =>
            prev.map(p =>
                p.id === projectId ? { ...p, status: newStatus } : p // Now, 'p.id' (number) is compared with 'projectId' (number)
            )
        );
        setSelectedProject(prev => prev ? { ...prev, status: newStatus } : null);
        // Optionally, add a success toast here
    } catch (error) {
        console.error(`Erreur lors de la mise à jour du statut vers ${newStatus} :`, error);
        alert(`Erreur lors de la mise à jour du statut vers ${newStatus}.`); // User feedback
    }
};

    // --- Render JSX ---
    return (
        <div className="space-y-6 p-4">
            {/* Header with New Demand Button */}
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="ps-btn text-sm/6 font-semibold"
                >
                    + Nouvelle Demande
                </button>
            </div>

            {/* New Project Form Modal */}
            <NewDemandeProjectForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                newProject={newProject}
                handleInputChange={handleInputChange}
                handleNumberInputChange={handleNumberInputChange}
                handleSubmit={handleSubmit}
                creating={creatingProject}
            />

            {/* Success Toast Notification */}
            <AnimatePresence>
                {showSuccessToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50"
                    >
                        <span>Projet créé avec succès !</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Projects Grid Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {loadingProjects ? (
                    // Loading State
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full flex justify-center items-center h-40"
                    >
                        <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
                    </motion.div>
                ) : projects.length > 0 ? (
                    // Display Projects
                    projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="border rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow bg-white cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold">{project.titre}</h3>
                                <span
                                    className={clsx(
                                        'px-2 py-1 text-xs rounded-full font-medium',
                                        getStatusColor(project.status)
                                    )}
                                >
                                    {project.status}
                                </span>
                            </div>
                            <p className="text-gray-500 mb-2">{project.secteur} - {project.region}, {project.ville}</p>
                            <p className="text-sm text-gray-700 line-clamp-3">{project.description}</p>
                        </motion.div>
                    ))
                ) : (
                    // No Projects Available
                    <p className="text-gray-500 col-span-full">Aucun projet disponible pour le moment.</p>
                )}
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
                >
                    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg relative space-y-4">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            <X />
                        </button>
                        <h2 className="text-xl font-bold">{selectedProject.titre}</h2>
                        <p><strong>Secteur :</strong> {selectedProject.secteur}</p>
                        <p><strong>Région :</strong> {selectedProject.region}</p>
                        <p><strong>Ville :</strong> {selectedProject.ville}</p>
                        <p><strong>Quartier :</strong> {selectedProject.quartier}</p>
                        <p><strong>Description :</strong> {selectedProject.description}</p>
                        <p><strong>Budget :</strong> {selectedProject.budget}</p>
                        <p>
                            <strong>Statut :</strong>{' '}
                            <span className={clsx('px-2 py-1 text-xs rounded-full font-medium', getStatusColor(selectedProject.status))}>
                                {selectedProject.status}
                            </span>
                        </p>

                        {/* Admin Action Buttons */}
                        {isAdmin && (
                            <div className="flex gap-3 pt-4 border-t border-gray-200 mt-4">
                             <button
    onClick={() =>
        selectedProject.id !== undefined && selectedProject.titre && // Check for undefined if ID can be optional
        handleStatusUpdate(selectedProject.id, selectedProject.titre, 'STUDYING', ProjectService.studyingProject)
    }
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
>
    Mettre en étude
</button>

<button
    onClick={() =>
        selectedProject.id !== undefined && selectedProject.titre && // Check for undefined
        handleStatusUpdate(selectedProject.id, selectedProject.titre, 'REJECTED', ProjectService.rejectedProject)
    }
    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
>
    Rejeter
</button>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Demandes;