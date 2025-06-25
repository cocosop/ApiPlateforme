import axios from "axios";
import { useAuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../constants/constants";

const history = useNavigate();

const httpClient = axios.create({
    baseURL: `${backendUrl}/api/v1`,
});

httpClient.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const refreshToken = useAuthStore.getState().refreshToken;

                const res = await axios.post(`${backendUrl}/api/v1/auth/refresh-token`, {
                    refreshToken,
                });

                const { accessToken, refreshToken: newRefreshToken } = res.data;

                const auth = useAuthStore.getState();
                auth.setTokens(accessToken, newRefreshToken);

                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                return httpClient(originalRequest);
            } catch (refreshError) {
                useAuthStore.getState().clearTokens();
                history("/login");
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default httpClient;
