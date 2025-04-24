import { Navigate, Route } from 'react-router-dom';
import PrivateLayout from '../../layouts/PrivateLayout';
import Projets from '../../pages/projets/projets';
import DetailProjet from '../../pages/detailProjet/detailProjet';
import { staticData } from '../../staticData';
import Dashboard from '../../pages/dashboard/Dashboard';

const PrivateContent = () => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    return (
        isAuthenticated ? (
            <Route element={<PrivateLayout />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path="/projets" element={<Projets />} />
                <Route path="/projets/detailsProjets/:id" element={<DetailProjet projects={staticData} />} />
            </Route>
        ) : (
            <Route path="*" element={<Navigate to="/signin" replace />} />
        )
    );
};

export default PrivateContent;