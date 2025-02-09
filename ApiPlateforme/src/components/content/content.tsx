import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home'
import Login from '../../pages/login/login';
import Faq from '../../pages/aPropos/faq/faq';
import Projets from '../../pages/projets/projets';
import DetailProjet from '../../pages/detailProjet/detailProjet';
import { staticData } from '../../staticData';
import Blank from '../../pages/blank/blank';
import Energie from '../../pages/sectors/energie/energie';
import Infrastructure from '../../pages/sectors/infrastructure/infrastructure';
import Numerique from '../../pages/sectors/numerique/numerique';
import PresentationCameroun from '../../pages/informations-generales/presentation-cameroun/presentation-cameroun';
import Logup from '../../pages/authentification/logup/logup';
import CadreJuridiqueFiscal from '../../pages/informations-generales/cadre-juridique-fiscal/cadre-juridique-fiscal';
import MainOeuvre from '../../pages/investir/mainOeuvre/mainOeuvre';
import FacteursProduction from '../../pages/investir/facteursProduction/facteursProduction';
import AspectsJuridiques from '../../pages/informations-generales/aspects-juridiques/aspects-juridiques';
import Agroindustrie from '../../pages/sectors/agroindustrie/agroindustrie';
import Financement from '../../pages/sectors/financement/financement';
import BoisForet from '../../pages/sectors/bois-foret/bois-forets';
import CreerEntreprise from '../../pages/investir/creerEntreprise/creerEntreprise';
import DroitInvestisseur from '../../pages/investir/droitInvestisseur/droitInvestisseur';
import Fiscalite from '../../pages/investir/fiscalite/fiscalite';
import Foncier from '../../pages/investir/foncier/foncier';
import TextileConfectionCuir from '../../pages/sectors/textile-confection-cuir/textile-confection-cuir';
import HydrocarburesRaffinage from '../../pages/sectors/hydrocarbures-raffinage/hydrocarbures-raffinage';
import ChimiePharmacie from '../../pages/sectors/chimie-pharmacie/chimie-pharmacie';
import MinesMetallurgieSiderurgie from '../../pages/sectors/mines-metallurgie-siderurgie/mines-metallurgie-siderurgie';
import PresentationApi from '../../pages/aPropos/presentation-api/presentation-api';

interface ContentProps {
    selectedMenu: any | null;
}

const content: React.FC<ContentProps> = ({ selectedMenu }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

                {/* Routes informations générales */}
                <Route path='/presentation-du-cameroun' element={<PresentationCameroun />} />
                <Route path='/cadre-juridique-et-fiscal' element={<CadreJuridiqueFiscal />} />
                <Route path='/aspects-juridiques' element={<AspectsJuridiques />} />

                {/* Routes guide de l'investisseur */}
                <Route path='/main-doeuvre' element={<MainOeuvre />} />
                <Route path='/facteurs-de-production' element={<FacteursProduction />} />
                <Route path='/creation-dentreprise' element={<CreerEntreprise />} />
                <Route path='/droits-des-investisseurs' element={<DroitInvestisseur />} />
                <Route path='/fiscalite' element={<Fiscalite />} />
                <Route path='/foncier' element={<Foncier />} />

                {/* Routes secteurs et opportunités */}
                <Route path='/sanctuaire-agro-industrie' element={<Agroindustrie />} />
                <Route path='/sanctuaire-energie' element={<Energie />} />
                <Route path='/sanctuaire-numerique' element={<Numerique />} />
                <Route path='/socle-infrastructure' element={<Infrastructure />} />
                <Route path='/socle-financement' element={<Financement />} />
                <Route path='/pilier-bois-forets' element={<BoisForet />} />
                <Route path='/pilier-textile-confection-cuir' element={<TextileConfectionCuir />} />
                <Route path='/pilier-hydrocarbures-raffinage' element={<HydrocarburesRaffinage />} />
                <Route path='/pilier-chimie-pharmacie' element={<ChimiePharmacie />} />
                <Route path='/pilier-mines-metallurgie-siderurgie' element={<MinesMetallurgieSiderurgie />} />

                {/* Routes banque de projet */}
                <Route path='/projets' element={<Projets />} />
                <Route path="/projets/detailsProjets/:id" element={<DetailProjet projects={staticData} />} />

                {/* Routes a propos */}
                <Route path='/presentation-api' element={<PresentationApi />} />
                <Route path='/faq' element={<Faq />} />

                {/* Routes autres pages */}
                <Route path='/signin' element={<Login />} />
                <Route path='/signup' element={<Logup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/:selectedMenu' element={<Blank selectedMenu={selectedMenu} />} />
            </Routes>
        </div>
    );
};

export default content;