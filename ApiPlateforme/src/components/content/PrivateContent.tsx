import { Navigate, Route } from 'react-router-dom';
import PrivateLayout from '../../layouts/PrivateLayout';
import Projets from '../../pages/projets/projets';
import DetailProjet from '../../pages/detailProjet/detailProjet';
import { staticData } from '../../staticData';
import Dashboard from '../../pages/dashboard/Dashboard';
import { useAuthReady } from '../../store/AuthReady';
import LoadingPage from '../../pages/loading/LoadingPage';

const PrivateContent = () => {
    const { isAuth, ready } = useAuthReady();

    if (!ready) {
        return <Route path="*" element={<LoadingPage />} />;
    }

    if (ready && !isAuth) {
        return <Route path="*" element={<Navigate to="/signin" replace />} />;
    }

    return (
        isAuth && ready ? (
            <Route element={<PrivateLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/projets/detailsProjets/:id" element={<DetailProjet projects={staticData} />} />
            </Route>
        ) : (
            <Route path="*" element={<Navigate to="/signin" replace />} />
        )
    );
};

export default PrivateContent;