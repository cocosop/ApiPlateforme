import apiConfig from "./apiConfig";

export interface ProjectInvestor {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    url_image?: string;
}

export interface ProjectStageModel {
    id: number;
    title: string;
    description: string;
    seq: number;
    date?: string;
    endDate?: string;
    status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
}

export interface ProjectDocModel {
    title: string;
    description: string;
    url_file: string;
}

export interface BackendProject {
    id: number;
    url_image?: string;
    titre: string;
    secteur: string;
    region: string;
    ville: string;
    quartier?: string;
    description: string;
    latitude?: string;
    longitude?: string;
    dateDebut?: string;
    dateFin?: string;
    investor?: ProjectInvestor;
    ROI?: number;
    montant?: number;
    budget?: number;
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'STUDYING';
    stages?: ProjectStageModel[];
    documents?: ProjectDocModel[];
    soumissionDate?: string;
    createdAt?: string;
    updatedAt?: string;
    hasChat?: boolean;
}

export interface ProjectPayload {
    titre: string;
    secteur: string;
    region: string;
    ville: string;
    quartier?: string;
    description: string;
    url_image?: string;
    ROI?: number;
    latitude?: string;
    longitude?: string;
    dateDebut?: string;
    dateFin?: string;
    budget?: number;
    montant?: number;
    status?: string;
}

class ProjectService {
    addProject(data: ProjectPayload) {
        return apiConfig.post<BackendProject>(`/projet`, data);
    }

    fetchAllProjects() {
        return apiConfig.get<BackendProject[]>(`/projet`);
    }

    getProject(titre: string) {
        return apiConfig.get<BackendProject>(`/projet/${encodeURIComponent(titre)}`);
    }

    updateProject(titre: string, data: Partial<ProjectPayload>) {
        return apiConfig.put<BackendProject>(`/projet/${encodeURIComponent(titre)}`, data);
    }

    disableProject(titre: string) {
        return apiConfig.patch(`/projet/${encodeURIComponent(titre)}/disable`);
    }

    approveProject(titre: string) {
        return apiConfig.patch(`/projet/${encodeURIComponent(titre)}/approve`);
    }

    studyingProject(titre: string) {
        return apiConfig.patch(`/projet/${encodeURIComponent(titre)}/studying`);
    }

    rejectedProject(titre: string) {
        return apiConfig.patch(`/projet/${encodeURIComponent(titre)}/reject`);
    }

    enableProject(titre: string) {
        return apiConfig.patch(`/projet/${encodeURIComponent(titre)}/enable`);
    }
}

export default new ProjectService();
