import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

interface DecodedToken {
    email: string;
    role: string;
    exp: number;
}

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    decoded: DecodedToken | null;
    ready: boolean;

    setTokens: (accessToken: string, refreshToken: string) => void;
    clearTokens: () => void;
    isExpired: () => boolean;
    isAuthenticated: () => boolean;
    decodeAccessToken: () => void;
    refreshAccessToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            accessToken: null,
            refreshToken: null,
            decoded: null,
            ready: false,

            setTokens: (accessToken: string, refreshToken: string) => {
                try {
                    const decoded = jwtDecode<DecodedToken>(accessToken);
                    set({ accessToken, refreshToken, decoded, ready: true });
                } catch (e) {
                    console.error("Token decoding failed", e);
                    set({ accessToken: null, refreshToken: null, decoded: null, ready: true });
                }
            },

            clearTokens: () => {
                set({ accessToken: null, refreshToken: null, decoded: null, ready: true });
            },

            decodeAccessToken: () => {
                const token = get().accessToken;
                const start = Date.now();

                if (!token) {
                    setTimeout(() => set({ decoded: null, ready: true }), 1000);
                    return;
                }
                try {
                    const decoded = jwtDecode<DecodedToken>(token);
                    const elapsed = Date.now() - start;

                    const minDelay = 1000;
                    const remaining = minDelay - elapsed;

                    if (decoded.exp && decoded.exp < Date.now() / 1000) {
                        setTimeout(() => set({ accessToken: null, decoded: null, ready: true }), Math.max(remaining, 0));
                    } else {
                        setTimeout(() => set({ decoded, ready: true }), Math.max(remaining, 0));
                    }
                } catch (e) {
                    console.error("Token decoding failed:", e);
                    setTimeout(() => set({ accessToken: null, decoded: null, ready: true }), 500);
                }
            },
            isExpired: () => {
                const { decoded } = get();
                return !decoded || decoded.exp < Date.now() / 1000;
            },

            isAuthenticated: () => {
                const { accessToken, isExpired } = get();
                return !!accessToken && !isExpired();
            },

            refreshAccessToken: async () => {
                const { refreshToken } = get();

                if (!refreshToken) {
                    console.warn("No refresh token available");
                    get().clearTokens();
                    return;
                }

                try {
                    const response = await axios.post('http://localhost:8080/api/v1/auth/refresh-token', {
                        refreshToken
                    });

                    const { accessToken: newAccess, refreshToken: newRefresh } = response.data;
                    get().setTokens(newAccess, newRefresh);
                } catch (error) {
                    console.error("Failed to refresh access token", error);
                    get().clearTokens();
                }
            }
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({
                accessToken: state.accessToken,
                refreshToken: state.refreshToken
            }),
            storage: {
                getItem: (name) => {
                    const item = sessionStorage.getItem(name);
                    return item ? JSON.parse(item) : null;
                },
                setItem: (name, value) => sessionStorage.setItem(name, JSON.stringify(value)),
                removeItem: (name) => sessionStorage.removeItem(name),
            },
        }
    )
);
