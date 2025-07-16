import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    sub: string;
    role: string;
    exp: number;
}

interface AuthState {
    accessToken: string | null;
    decoded: DecodedToken | null;
    ready: boolean;

    setToken: (accessToken: string) => void;
    clearTokens: () => void;
    isExpired: () => boolean;
    isAuthenticated: () => boolean;
    decodeAccessToken: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            accessToken: null,
            refreshToken: null,
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
