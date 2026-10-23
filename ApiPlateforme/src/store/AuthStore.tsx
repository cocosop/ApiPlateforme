import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    sub: string;
    role: string;
    exp: number;
}

interface AuthState {
    // Access token court (15 min). Le refresh token, lui, reste dans un cookie HttpOnly
    // inaccessible au JavaScript.
    accessToken: string | null;
    decoded: DecodedToken | null;
    ready: boolean;

    setToken: (accessToken: string) => void;
    clearTokens: () => void;
    isExpired: () => boolean;
    isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            accessToken: null,
            decoded: null,
            ready: false,

            setToken: (accessToken: string) => {
                try {
                    const decoded = jwtDecode<DecodedToken>(accessToken);
                    set({ accessToken, decoded, ready: true });
                } catch (e) {
                    console.error("Token decoding failed", e);
                    set({ accessToken: null, decoded: null, ready: true });
                }
            },

            clearTokens: () => {
                set({ accessToken: null, decoded: null, ready: true });
            },

            isExpired: () => {
                const { decoded } = get();
                return !decoded || decoded.exp < Date.now() / 1000;
            },

            isAuthenticated: () => {
                const { accessToken, isExpired } = get();
                return !!accessToken && !isExpired();
            }
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({
                accessToken: state.accessToken,
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
