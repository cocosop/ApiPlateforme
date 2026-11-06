import apiConfig from "./apiConfig";

export interface ChatSenderModel {
    url_image?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
}

export interface ChatMessageModel {
    id: string;
    fileUrl?: string;
    content: string;
    isRead: boolean;
    isEdited: boolean;
    timestamp: string;
    sender: ChatSenderModel;
}

export interface ChatProjectModel {
    id: number;
    titre: string;
    description: string;
}

export interface BackendChat {
    id: string;
    project: ChatProjectModel;
    messages: ChatMessageModel[];
}

export interface SendMessagePayload {
    chatId: string;
    content: string;
    fileUrl?: string;
}

export interface MessageResponse {
    fileUrl?: string;
    content?: string;
}

class MessageService {
    // APIs for chat (seen and read)
    fetchAllChat() {
        return apiConfig.get<BackendChat[]>(`/chat`);
    }

    readMessage(chatId: string) {
        return apiConfig.patch<string>(`/chat/${encodeURIComponent(chatId)}/read`);
    }

    // APIs for message (sending and editing)
    sendMessage(data: SendMessagePayload) {
        return apiConfig.post<MessageResponse>(`/message/send`, data);
    }

    modifiedMessage(id: string, data: SendMessagePayload) {
        return apiConfig.put<MessageResponse>(`/message/${encodeURIComponent(id)}/modified`, data);
    }
}

export default new MessageService();
