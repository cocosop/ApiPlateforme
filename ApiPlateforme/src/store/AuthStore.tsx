import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    email: string;
    role: string;
    exp: number;
}

interface AuthState {
    token: string | null;
    decoded: DecodedToken | null;
    ready: boolean;
    setToken: (token: string) => void;
    decodeToken: () => void;
    clearToken: () => void;
    isAuthenticated: () => boolean;
    isExpired: () => boolean;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            token: null,
            decoded: null,
            ready: false,
            setToken: (token: string) => {
                try {
                    const decoded = jwtDecode<DecodedToken>(token);
                    set({ token, decoded, ready: true });
                } catch (error) {
                    console.error("Invalid token:", error);
                    set({ token: null, decoded: null, ready: false });
                }
            },
            decodeToken: () => {
                const token = get().token;

                if (!token) {
                    set({ decoded: null, ready: false });
                    return;
                }

                try {
                    const decoded = jwtDecode<DecodedToken>(token);

                    const currentTime = Date.now() / 1000;
                    if (decoded.exp && decoded.exp < currentTime) {
                        set({ token: null, decoded: null, ready: false });
                        return;
                    }

                    set({ decoded, ready: true });

                } catch (error) {
                    console.error('Token decoding failed:', error);
                    set({ token: null, decoded: null, ready: false });
                }
            },
            clearToken: () => set({ token: null, decoded: null, ready: false }),

            isAuthenticated: () => {
                const token = get().token;
                return !!token && !get().isExpired();
            },

            isExpired: () => {
                const { decoded } = get();
                return !decoded || decoded.exp < Date.now() / 1000;
            },
        }),
        {
            name: "auth-storage",
            partialize: (state) =>
                ({ token: state.token }),
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
