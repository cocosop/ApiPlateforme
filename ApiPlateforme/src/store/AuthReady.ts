import { useEffect } from "react";
import { useAuthStore } from "./AuthStore";
import { refreshAccessToken } from "../services/apiConfig";

let initialization: Promise<void> | null = null;

/**
 * Restaure la session au chargement de l'application :
 * - access token encore valide dans le sessionStorage -> on le réutilise ;
 * - sinon on tente un rafraîchissement via le cookie HttpOnly (session de 7 jours).
 */
function initializeSession(): Promise<void> {
  const { accessToken, setToken, clearTokens } = useAuthStore.getState();
  if (accessToken) {
    setToken(accessToken);
    if (!useAuthStore.getState().isExpired()) {
      return Promise.resolve();
    }
  }
  return refreshAccessToken()
    .then(() => undefined)
    .catch(() => clearTokens());
}

export function useAuthReady() {
  const ready = useAuthStore((state) => state.ready);
  const isAuth = useAuthStore((state) => state.isAuthenticated());

  useEffect(() => {
    if (!ready && !initialization) {
      initialization = initializeSession().finally(() => {
        initialization = null;
      });
    }
  }, [ready]);

  return { isAuth, ready };
}
