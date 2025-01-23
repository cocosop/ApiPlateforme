import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/authentification/login/login';
import Faq from '../../pages/faq/faq';
import Projets from '../../pages/projets/projets';
import DetailProjet from '../../pages/detailProjet/detailProjet';
import { staticData } from './../../staticData';
import Blank from '../../pages/blank/blank';
import Logup from '../../pages/authentification/logup/logup';
import CreerEntreprise from '../../pages/investir/creerEntreprise/creerEntreprise';
import MainOeuvre from '../../pages/investir/mainOeuvre/mainOeuvre';
import FacteursProduction from '../../pages/investir/facteursProduction/facteursProduction';
import Foncier from '../../pages/investir/foncier/foncier';
import Fiscalite from '../../pages/investir/fiscalite/fiscalite';
import DroitInvestisseur from '../../pages/investir/droitInvestisseur/droitInvestisseur';
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
                <Route path='/signin' element={<Login />} />
                <Route path='/signup' element={<Logup />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/projets' element={<Projets />} />
                <Route path='/secteur-de-lagriculture' element={<Agriculture />} />
                <Route path='/secteur-de-lenergie' element={<Energie />} />
                <Route path='/secteur-des-tic' element={<Tic />} />
                <Route path='/creer-son-entreprise' element={<CreerEntreprise/>} />
                <Route path='/main-d-oeuvre' element={<MainOeuvre/>} />
                <Route path='/facteurs-de-production' element={<FacteursProduction/>} />
                <Route path='/foncier' element={<Foncier/>} />
                <Route path='/fiscalite' element={<Fiscalite/>} />
                <Route path='/droit-des-investisseurs' element={<DroitInvestisseur/>} />
                <Route path="/projets/detailsProjets/:id" element={<DetailProjet projects={staticData} />} />
                <Route path='/:selectedMenu' element={<Blank selectedMenu={selectedMenu} />} />
            </Routes>
        </div>
    );
};

export default content;