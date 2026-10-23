import { Navigate, Outlet } from 'react-router-dom';
import { useAuthReady } from '../../store/AuthReady';
import LoadingPage from '../../pages/loading/LoadingPage';

export const RequireAuth = () => {
  const { isAuth, ready } = useAuthReady();

  if (!ready) {
    return <LoadingPage />;
  }

  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
};
