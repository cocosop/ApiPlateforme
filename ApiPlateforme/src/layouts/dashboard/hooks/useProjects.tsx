// src/features/projects/hooks/useProjects.ts
import { useState, useEffect, useCallback } from 'react';
import { projectApi } from '../../../api/services/projectService'; // Chemin ajusté
import { ProjeTypes } from '../../../types'; // Chemin ajusté

interface UseProjectsResult {
  projects: ProjeTypes[];
  loading: boolean;
  error: string | null;
  addProject: (project: ProjeTypes) => Promise<void>;
  fetchProjects: () => Promise<void>; // Fonction pour recharger les projets
}

export const useProjects = (): UseProjectsResult => {
  const [projects, setProjects] = useState<ProjeTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await projectApi.getAllProjects();
      setProjects(data);
    } catch (err) {
      setError('Failed to fetch projects.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []); // Dépendances vides car la fonction ne dépend de rien qui change

  const addProject = useCallback(async (project: ProjeTypes) => {
    setLoading(true); // Indiquer un chargement pendant l'ajout
    setError(null);
    try {
      const newProject = await projectApi.createProject(project);
      setProjects(prevProjects => [...prevProjects, newProject]);
    } catch (err) {
      setError('Failed to create project.');
      console.error(err);
      throw err; // Propage l'erreur si l'ajout échoue
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]); // Déclenche le chargement initial

  return { projects, loading, error, addProject, fetchProjects };
};