import apiConfig from "./apiConfig";

class ProjectService {
    addProject(data: any) {
        return apiConfig.post(`/projet`, data);
    }

    fetchAllProjects() {
        return apiConfig.get(`/projet`);
    }

    getProject(titre: string) {
        return apiConfig.get(`/projet/${titre}`);
    }

    updateProject(titre: string, data: any) {
        return apiConfig.put(`/projet/${titre}`, data);
    }

    disableProject(titre: string) {
        return apiConfig.put(`/projet/${titre}/disable`);
    }

    approveProject(titre: string) {
        return apiConfig.put(`/projet/${titre}/approve`);
    }

    studyingProject(titre: string) {
        return apiConfig.put(`/projet/${titre}/studying`);
    }

    rejectedProject(titre: string) {
        return apiConfig.put(`/projet/${titre}/rejected`);
    }

    enableProject(titre: string) {
        return apiConfig.put(`/projet/${titre}/enable`);
    }
}


export default new ProjectService();