import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/login/login';
import Faq from '../../pages/faq/faq';
import Projets from '../../pages/projets/projets';
import DetailProjet from '../../pages/detailProjet/detailProjet';
import { staticData } from './../../staticData';
import Blank from '../../pages/blank/blank';

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
                <Route path="/projets/detailsProjets/:id" element={<DetailProjet projects={staticData} />} />
                <Route path='/:selectedMenu' element={<Blank selectedMenu={selectedMenu} />} />
            </Routes>
        </div>
    );
};

export default content;