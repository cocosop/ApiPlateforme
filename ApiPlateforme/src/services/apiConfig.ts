import axios from "axios";
import { useAuthStore } from "../store/AuthStore";
import userService from "./userService";

const baseURL = import.meta.env.VITE_BASE_URL;

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
                // const refreshToken = useAuthStore.getState().refreshToken;

                const res = await userService.refreshToken()

                const { accessToken, refreshToken: newRefreshToken } = res.data;

                const auth = useAuthStore.getState();
                auth.setTokens(accessToken, newRefreshToken);

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
