import { Navigate, Route } from 'react-router-dom';
import PrivateLayout from '../../layouts/PrivateLayout';
import Dashboard from '../../pages/dashboard/Dashboard';
import { useAuthReady } from '../../store/AuthReady';
import LoadingPage from '../../pages/loading/LoadingPage';
import Investment from '../../layouts/dashboard/investment';
import Notifications from '../../layouts/dashboard/notifications';
import Settings from '../../layouts/dashboard/settings';
import UserProfile from '../../layouts/dashboard/profil';
import Messages from '../../layouts/dashboard/messages';
import MyProjects from '../../layouts/dashboard/projects';
import SuiviProjetDetail from '../../layouts/dashboard/analytics';
import Demandes from '../../layouts/dashboard/demandes';

const PrivateContent = () => {
    const { isAuth, ready } = useAuthReady();

    if (!ready) {
        return <Route path="*" element={<LoadingPage />} />;
    }

    if (!isAuth) {
        return <Route path="*" element={<Navigate to="/signin" replace />} />;
    }

    return (
        isAuth && ready ? (
            <Route element={<PrivateLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projets" element={<Investment />} />
                <Route path="/projet/details/:titre" element={<SuiviProjetDetail />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/parametres" element={<Settings />} />
                <Route path="/profil" element={<UserProfile />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/investissements" element={<MyProjects />} />
                <Route path="/analytics" element={<SuiviProjetDetail />} />
                <Route path="/demandes" element={<Demandes />} />



            </Route>
        ) : (
            <Route path="*" element={<Navigate to="/signin" replace />} />
        )
    );
};

export default PrivateContent;