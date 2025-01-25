import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/login/login';
import Faq from '../../pages/faq/faq';
import Projets from '../../pages/projets/projets';
import DetailProjet from '../../pages/detailProjet/detailProjet';
import { staticData } from './../../staticData';
import Blank from '../../pages/blank/blank';
import Agriculture from '../../pages/sectors/agroindustrie/agroindustrie';
import Energie from '../../pages/sectors/energie/energie';
import Infrastructure from '../../pages/sectors/infrastructure/infrastructure';
import Numerique from '../../pages/sectors/numerique/numerique';
import PresentationCameroun from '../../pages/informations-generales/presentation-cameroun/presentation-cameroun';
import Logup from '../../pages/authentification/logup/logup';

interface ContentProps {
    selectedMenu: any | null;
}

const content: React.FC<ContentProps> = ({ selectedMenu }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/signup' element={<Logup />} />
                <Route path='/presentation-du-cameroun' element={<PresentationCameroun />} />
                <Route path='/login' element={<Login />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/projets' element={<Projets />} />
                <Route path='/sanctuaire-agro-industrie' element={<Agriculture />} />
                <Route path='/sanctuaire-energie' element={<Energie />} />
                <Route path='/sanctuaire-numerique' element={<Numerique />} />
                <Route path='/socle-infrastructure' element={<Infrastructure />} />
                <Route path="/projets/detailsProjets/:id" element={<DetailProjet projects={staticData} />} />
                <Route path='/:selectedMenu' element={<Blank selectedMenu={selectedMenu} />} />
            </Routes>
        </div>
    );
};

export default content;