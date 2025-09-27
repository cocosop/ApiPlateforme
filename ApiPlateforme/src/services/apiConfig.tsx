import axios from "axios";
import { useAuthStore } from "../store/AuthStore";
import userService from "./userService";

const baseURL = "https://investincameroun.com:8080/api/v1";

const apiConfig = axios.create({
    baseURL: baseURL,
});

apiConfig.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiConfig.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const token = useAuthStore.getState().accessToken;
                const res = await userService.refreshToken(token!)
                if (res.status !== 200) {
                    throw new Error("Failed to refresh token");
                }
                // Assuming the response contains the new access token
                const { accessToken } = res.data.accessToken;

                const auth = useAuthStore.getState();
                auth.setToken(res.data.accessToken);

                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                return apiConfig(originalRequest);
            } catch (refreshError) {
                useAuthStore.getState().clearTokens();
                window.location.href = '/signin';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiConfig;
