import apiConfig from "./apiConfig";

class MessageService {

    fetchAllChat() {
        return apiConfig.get(`/chat`);
    }
    fetchAllMessages() {
        return apiConfig.get(`/message`);
    }
    sendMessage(data: any) {
        return apiConfig.post(`/message/send`, data);
    }
    readMessage(id: string) {
        return apiConfig.patch(`/message/${id}/read`);
    }
    modifiedMessage(id: string, data: any) {
        return apiConfig.put(`/message/${id}/modified`, data);
    }
}


export default new MessageService();