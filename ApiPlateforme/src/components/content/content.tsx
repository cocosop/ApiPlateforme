import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/login/login';
import Faq from '../../pages/faq/faq';
import Projets from '../../pages/projets/projets';
import DetailProjet from '../../pages/detailProjet/detailProjet';
import { staticData } from './../../staticData';
import Blank from '../../pages/blank/blank';
import Agriculture from '../../pages/sectors/agriculture/agriculture';
import Energie from '../../pages/sectors/energie/energie';
import Tic from '../../pages/sectors/tic/tic';

interface ContentProps {
    selectedMenu: any | null;
}

const content: React.FC<ContentProps> = ({ selectedMenu }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/projets' element={<Projets />} />
                <Route path='/secteur-de-lagriculture' element={<Agriculture />} />
                <Route path='/secteur-de-lenergie' element={<Energie />} />
                <Route path='/secteur-des-tic' element={<Tic />} />
                <Route path="/projets/detailsProjets/:id" element={<DetailProjet projects={staticData} />} />
                <Route path='/:selectedMenu' element={<Blank selectedMenu={selectedMenu} />} />
            </Routes>
        </div>
    );
};

export default content;