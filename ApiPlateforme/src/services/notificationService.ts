import apiConfig from "./apiConfig";

export interface NotificationResponse {
  id: number;
  title: string;
  body: string;
  category: "APPLICATION" | "DOCUMENT" | "REVIEW" | "ACCOUNT" | "DECISION";
  projectRef?: string;
  projectName?: string;
  unread: boolean;
  archived: boolean;
  createdAt: string;
}

class NotificationService {
  /** Toutes mes notifications triées par date desc */
  getAll() {
    return apiConfig.get<NotificationResponse[]>("/notifications");
  }

  /** Marquer une notification comme lue */
  markAsRead(id: number) {
    return apiConfig.patch<NotificationResponse>(`/notifications/${id}/read`);
  }

  /** Marquer toutes comme lues */
  markAllRead() {
    return apiConfig.patch<void>("/notifications/read-all");
  }

  /** Archiver / désarchiver */
  toggleArchive(id: number) {
    return apiConfig.patch<NotificationResponse>(`/notifications/${id}/archive`);
  }

  /** Supprimer */
  delete(id: number) {
    return apiConfig.delete<void>(`/notifications/${id}`);
  }
}

export default new NotificationService();
