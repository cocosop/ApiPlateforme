import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../../store/AuthStore';
import { UserRole } from '../../utils/roles';

/**
 * Masque une page aux rôles non autorisés.
 * Ce n'est qu'un confort d'affichage : le backend refuse de toute façon les appels non autorisés.
 */
export const RequireRole = ({ roles }: { roles: UserRole[] }) => {
  const role = useAuthStore((state) => state.decoded?.role) as UserRole | undefined;

  if (!role || !roles.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
