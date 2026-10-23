import axios, { InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../store/AuthStore";
import { backendUrl } from "../constants/constants";

// withCredentials : le cookie HttpOnly du refresh token est envoyé au backend
const apiConfig = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
});

// Client sans intercepteurs pour le rafraîchissement, afin d'éviter toute boucle
const authClient = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
});

let refreshPromise: Promise<string> | null = null;

/**
 * Obtient un nouvel access token grâce au cookie de refresh.
 * Un seul appel à la fois : les requêtes en échec simultanées attendent le même résultat.
 */
export function refreshAccessToken(): Promise<string> {
    if (!refreshPromise) {
        refreshPromise = authClient
            .post("/auth/refresh-token")
            .then((res) => {
                const accessToken: string = res.data.accessToken;
                useAuthStore.getState().setToken(accessToken);
                return accessToken;
            })
            .finally(() => {
                refreshPromise = null;
            });
    }
    return refreshPromise;
}

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
        const originalRequest = error.config as (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined;
        // Les routes /auth/* (login, 2FA...) renvoient 401 pour un mauvais mot de passe : pas de refresh
        const isAuthRoute = originalRequest?.url?.startsWith("/auth/");

        if (error.response?.status === 401 && originalRequest && !originalRequest._retry && !isAuthRoute) {
            originalRequest._retry = true;
            try {
                const accessToken = await refreshAccessToken();
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return apiConfig(originalRequest);
            } catch (refreshError) {
                useAuthStore.getState().clearTokens();
                if (!window.location.pathname.startsWith("/signin")) {
                    window.location.href = "/signin";
                }
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default apiConfig;
