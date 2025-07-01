import apiConfig from "./apiConfig";

class StageService {
    addStage(data: any) {
        return apiConfig.post(`/stages/add`, data);
    }

    getStage(id: number) {
        return apiConfig.get(`/stages/${id}/details`);
    }

    updateStage(id: number, data: any) {
        return apiConfig.put(`/stages/${id}/edit`, data);
    }

    deleteStage(id: number) {
        return apiConfig.patch(`/stages/${id}/delete`);
    }
}


export default new StageService();;
