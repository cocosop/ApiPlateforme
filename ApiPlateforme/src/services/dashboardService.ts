import apiConfig from "./apiConfig";

export interface ProfileCompletenessDto {
  complete: number;
  total: number;
  percent: number;
}

export interface RecentMessageDto {
  chatId: string;
  projectName: string;
  lastMessage: string;
  senderFirstname?: string;
  senderLastname?: string;
  senderEmail?: string;
  timestamp?: string;
  unread: boolean;
}

export interface RecentNotificationDto {
  id: number;
  title: string;
  body: string;
  category: string;
  projectRef?: string;
  projectName?: string;
  unread: boolean;
  createdAt?: string;
}

export interface DashboardOverviewResponse {
  profileCompleteness: ProfileCompletenessDto;
  recentMessages: RecentMessageDto[];
  recentNotifications: RecentNotificationDto[];
}

class DashboardService {
  getOverview() {
    return apiConfig.get<DashboardOverviewResponse>("/dashboard/overview");
  }
}

export default new DashboardService();
