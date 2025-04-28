import { useEffect } from "react";
import { useAuthStore } from "./AuthStore";

export function useAuthReady() {
  const ready = useAuthStore((state) => state.ready);
  const decodeToken = useAuthStore((state) => state.decodeToken);
  const isAuth = useAuthStore((state) => state.isAuthenticated());

  useEffect(() => {
    if (!ready) {
      decodeToken();
    }
  }, [ready, decodeToken]);

  return { isAuth, ready };
}
