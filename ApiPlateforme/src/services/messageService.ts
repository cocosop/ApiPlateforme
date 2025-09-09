import apiConfig from "./apiConfig";

class MessageService {

    // APIs for chat (seen and read)
    fetchAllChat() {
        return apiConfig.get(`/chat`);
    }
    readMessage(id: string) {
        return apiConfig.patch(`/chat/${id}/read`);
    }

    // APIs for message (sending and editing)
    sendMessage(data: any) {
        return apiConfig.post(`/message/send`, data);
    }

    modifiedMessage(id: string, data: any) {
        return apiConfig.put(`/message/${id}/modified`, data);
    }
}


export default new MessageService();