import apiConfig from "./apiConfig";
import { UserRole } from "../utils/roles";

// Actions réservées au SUPER_ADMIN
class AdminService {
    createUser(data: { firstname: string; lastname: string; phone: string; email: string; role: Exclude<UserRole, 'SUPER_ADMIN'> }) {
        return apiConfig.post(`/admin/users`, data);
    }

    resendInvitation(email: string) {
        return apiConfig.post(`/admin/users/${encodeURIComponent(email)}/resend-invitation`);
    }

    resetTwoFactor(email: string) {
        return apiConfig.post(`/admin/users/${encodeURIComponent(email)}/reset-2fa`);
    }
}

export default new AdminService();
