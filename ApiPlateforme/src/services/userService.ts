import apiConfig from "./apiConfig";

export type TwoFactorMethod = "NONE" | "EMAIL" | "TOTP";

export interface LoginResponse {
    accessToken?: string;
    expiresIn?: number;
    mfaRequired: boolean;
    mfaToken?: string;
    mfaMethod?: TwoFactorMethod;
}

class UserService {
    // ---- Connexion
    login(email: string, password: string) {
        return apiConfig.post<LoginResponse>(`/auth/login`, { email, password });
    }

    verifyTwoFactor(mfaToken: string, code: string) {
        return apiConfig.post<LoginResponse>(`/auth/login/verify-2fa`, { mfaToken, code });
    }

    resendTwoFactor(mfaToken: string) {
        return apiConfig.post(`/auth/login/resend-2fa`, { mfaToken });
    }

    logout() {
        return apiConfig.post(`/auth/logout`);
    }

    // ---- Inscription et activation
    register(data: { firstname: string; lastname: string; phone: string; email: string; password: string }) {
        return apiConfig.post(`/auth/register`, data);
    }

    verifyActivationToken(email: string, token: string) {
        return apiConfig.post(`/auth/activation-account`, { email, token });
    }

    resandVerifyActivationToken(email: string) {
        return apiConfig.post(`/auth/resend-activation-token`, { email });
    }

    // ---- Mot de passe oublié / invitation
    forgotPassword(email: string) {
        return apiConfig.post(`/auth/forget-password`, { email });
    }

    resetPassword(email: string, token: string, newPassword: string) {
        return apiConfig.post(`/auth/reset-password`, { email, token, newPassword });
    }

    acceptInvitation(email: string, token: string, newPassword: string) {
        return apiConfig.post(`/auth/accept-invitation`, { email, token, newPassword });
    }

    // ---- Profil
    me() {
        return apiConfig.get("/user/me");
    }

    updateProfile(data: { firstname: string; lastname: string; phone: string; url_image?: string }) {
        return apiConfig.put(`/user/me`, data);
    }

    // ---- Administration
    getAllUsers() {
        return apiConfig.get("/user");
    }

    disableUser(email: string) {
        return apiConfig.patch(`/user/${encodeURIComponent(email)}/disable`);
    }

    enableUser(email: string) {
        return apiConfig.patch(`/user/${encodeURIComponent(email)}/enable`);
    }
}


export default new UserService();
