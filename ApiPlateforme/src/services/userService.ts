import apiConfig from "./apiConfig";

class UserService {
    refreshToken(accessToken: string) {
        return apiConfig.post(`/auth/refresh-token`, accessToken);
    }

    verifyActivationToken(token: string) {
        return apiConfig.post(`/auth/activation-account`, { token });
    }

    resandVerifyActivationToken(email: string) {
        return apiConfig.post(`/auth/resend-activation-token`, { email });
    }

    login(email: string, password: string) {
        return apiConfig.post(`/auth/login`, { email, password });
    }

    logout(username: string) {

        return apiConfig.post(`/auth/logout/${username}`);
    }

    register(data: any) {
        return apiConfig.post(`/auth/register`, data);
    }

    updateProfile(username: string, data: any) {
        return apiConfig.put(`/user/edit/${username}`, data);
    }

    me() {
        return apiConfig.get("/user/me");
    }

    forgotPassword(email: string) {
        return apiConfig.post(`/auth/forgotPassword`, { email });
    }
}


export default new UserService();