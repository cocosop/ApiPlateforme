import { useEffect } from "react";
import { useAuthStore } from "./AuthStore";

export function useAuthReady() {
  const ready = useAuthStore((state) => state.ready);
  const decodeAccessToken = useAuthStore((state) => state.decodeAccessToken);
  const isAuth = useAuthStore((state) => state.isAuthenticated());

  useEffect(() => {
    if (!ready) {
      decodeAccessToken();
    }
  }, [ready, decodeAccessToken]);

  return { isAuth, ready };
}

