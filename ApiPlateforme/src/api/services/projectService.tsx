import axios from 'axios';
import { ProjeTypes, CreateProjectType } from '../../types'; // Assurez-vous que ce chemin est correct
import { backendUrl } from '../../constants/constants';
import { useAuthStore } from '../../store/AuthStore';

// URL de base de votre API Spring Boot
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || `${backendUrl}/api/v1`;

// Instance Axios configurée
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  // Ajout du token d'authentification si disponible
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  // Gestion des erreurs de requête
  console.error('Erreur lors de la configuration de la requête:', error);
  return Promise.reject(error);
});

// Intercepteur pour la gestion globale des erreurs Axios
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.error('Session expirée ou non autorisée. Redirection vers la page de connexion...');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Fonctions d'interaction avec l'API des projets
export const projectApi = {
  /**
   * Récupère tous les projets depuis l'API.
   * @returns Une promesse résolue avec un tableau de ProjeTypes.
   */
  getAllProjects: async (): Promise<ProjeTypes[]> => {
    try {
      // CORRECTION : L'URL est maintenant '/projet' pour correspondre à votre backend.
      const response = await apiClient.get<ProjeTypes[]>('/projet');
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      throw error;
    }
  },

  /**
   * Enregistre un nouveau projet sur l'API.
   * @param projectData Les données du projet à créer.
   * @returns Une promesse résolue avec le projet créé.
   */
  createProject: async (projectData: CreateProjectType): Promise<ProjeTypes> => {
    try {
      const response = await apiClient.post<ProjeTypes>('/projet', projectData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du projet:', error);
      if (axios.isAxiosError(error) && error.response) {
        console.error('Réponse d\'erreur de l\'API:', error.response.data);
      }
      throw error;
    }
  },

  // Ajoutez ici d'autres fonctions comme updateProject, deleteProject, etc.
};