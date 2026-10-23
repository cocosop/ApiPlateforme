import { Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "../../layouts/PrivateLayout";
import Dashboard from "../../pages/dashboard/Dashboard";
import { useAuthReady } from "../../store/AuthReady";
import LoadingPage from "../../pages/loading/LoadingPage";
import Investment from "../../layouts/dashboard/investment";
import Notifications from "../../layouts/dashboard/notifications";
import Settings from "../../layouts/dashboard/settings";
import UserProfile from "../../layouts/dashboard/profil";
import Messages from "../../layouts/dashboard/messages";
import MyProjects from "../../layouts/dashboard/projects";
import SuiviProjetDetail from "../../layouts/dashboard/analytics";
import Demandes from "../../layouts/dashboard/demandes";
import Users from "../../layouts/users";

const PrivateContent = () => {
  const { isAuth, ready } = useAuthReady();

  if (!ready) {
    return (
      <Routes>
        <Route path="*" element={<LoadingPage />} />
      </Routes>
    );
  }

  if (!isAuth) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projets" element={<Investment />} />
        <Route path="/projet/details/:titre" element={<SuiviProjetDetail />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/parametres" element={<Settings />} />
        <Route path="/profil" element={<UserProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/investissements" element={<MyProjects />} />
        <Route path="/demandes" element={<Demandes />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default PrivateContent;
