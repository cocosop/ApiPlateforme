import axios from 'axios';

/** Code d'erreur stable renvoyé par le backend (ex : ACCOUNT_LOCKED, INVALID_CODE). */
export const getApiErrorCode = (error: unknown): string | undefined =>
  axios.isAxiosError(error) ? error.response?.data?.error : undefined;

/** Message lisible renvoyé par le backend, ou message de repli. */
export const getApiErrorMessage = (error: unknown, fallback: string): string => {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return 'Impossible de joindre le serveur. Vérifiez votre connexion.';
    }
    const message = error.response.data?.message;
    if (typeof message === 'string' && message.length > 0) {
      return message;
    }
  }
  return fallback;
};
