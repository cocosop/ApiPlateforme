import { create } from 'zustand';
import { User } from './../typeUsers/users';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void; // ✅ On ajoute cette ligne
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }), // ✅ Et on définit la méthode ici
}));
