import apiConfig from "./apiConfig";

class DocService {
    addDoc(data: any) {
        return apiConfig.post(`/documents/add`, data);
    }

    editDoc(title: string, data: any) {
        return apiConfig.put(`/documents/${title}/edit`, data);
    }

    removeDoc(title: string) {
        return apiConfig.delete(`/documents/${title}/delete`);
    }
}


export default new DocService();;