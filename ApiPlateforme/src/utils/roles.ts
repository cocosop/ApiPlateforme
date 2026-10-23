export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'INVESTOR' | 'PROJECT_OWNER';

// Ces vérifications ne servent qu'à l'affichage : les droits réels sont contrôlés par le backend.
export const isAdminRole = (role?: string | null): boolean =>
  role === 'ADMIN' || role === 'SUPER_ADMIN';

export const isSuperAdmin = (role?: string | null): boolean => role === 'SUPER_ADMIN';

const ROLE_LABELS: Record<UserRole, string> = {
  SUPER_ADMIN: 'Super administrateur',
  ADMIN: 'Administrateur',
  INVESTOR: 'Investisseur',
  PROJECT_OWNER: 'Porteur de projet',
};

export const roleLabel = (role?: string | null): string =>
  ROLE_LABELS[role as UserRole] ?? role ?? '';

/** Page d'accueil après connexion selon le rôle. */
export const homePathFor = (role?: string | null): string => {
  if (role === 'SUPER_ADMIN') return '/users';
  if (role === 'ADMIN') return '/demandes';
  return '/onboarding';
};
