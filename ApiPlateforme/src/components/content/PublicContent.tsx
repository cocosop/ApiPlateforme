import { Route } from 'react-router-dom';
import Home from '../../pages/home/home'
import Faq from '../../pages/aPropos/faq/faq';
import Energie from '../../pages/sectors/energie/energie';
import Infrastructure from '../../pages/sectors/infrastructure/infrastructure';
import Numerique from '../../pages/sectors/numerique/numerique';
import PresentationCameroun from '../../pages/informations-generales/presentation-cameroun/presentation-cameroun';
import Logup from '../../pages/authentication/logup/logup';
import CadreJuridiqueFiscal from '../../pages/informations-generales/cadre-juridique-fiscal/cadre-juridique-fiscal';
import MainOeuvre from '../mainOeuvre/mainOeuvre';
import FacteursProduction from '../../pages/investir/facteursProduction/facteursProduction';
import AspectsJuridiques from '../../pages/informations-generales/aspects-juridiques/aspects-juridiques';
import Agroindustrie from '../../pages/sectors/agroindustrie/agroindustrie';
import Financement from '../../pages/sectors/financement/financement';
import BoisForet from '../../pages/sectors/bois-foret/bois-forets';
import CreerEntreprise from '../../pages/investir/creerEntreprise/creerEntreprise';
import DroitInvestisseur from '../../pages/investir/droitInvestisseur/droitInvestisseur';
import Foncier from '../../pages/investir/foncier/foncier';
import TextileConfectionCuir from '../../pages/sectors/textile-confection-cuir/textile-confection-cuir';
import HydrocarburesRaffinage from '../../pages/sectors/hydrocarbures-raffinage/hydrocarbures-raffinage';
import ChimiePharmacie from '../../pages/sectors/chimie-pharmacie/chimie-pharmacie';
import MinesMetallurgieSiderurgie from '../../pages/sectors/mines-metallurgie-siderurgie/mines-metallurgie-siderurgie';
import PresentationApi from '../../pages/aPropos/presentation-api/presentation-api';
import Login from '../../pages/authentication/login/login';
import Fiscalite from '../../pages/investir/fiscalite/fiscalite';
import Incitation from '../../pages/investir/incitation/incitation';
import PublicLayout from '../../layouts/PublicLayout';
import ActivationToken from '../../pages/authentication/activationToken/activationToken';
import ForgetPassword from '../../pages/authentication/forgetPassword/forgetPassword';
import ResetPassword from '../../pages/authentication/resetPassword/resetPassword';
import Potentiel from '../../pages/sectors/potentiel/potentiel';
import Testimony from '../../pages/testimony/testimony';

const PublicContent = () => {
    return (
        <Route element={<PublicLayout />}>
            {/* Routes principales */}
            <Route path='/' element={<Home />} />
            <Route path='/temoignages' element={<Testimony />} />

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
            <Route path='/incitation' element={<Incitation />} />
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
            <Route path='/potentiel' element={<Potentiel />} />

            {/* Routes a propos */}
            <Route path='/presentation-api' element={<PresentationApi />} />
            <Route path='/faq' element={<Faq />} />

            {/* Routes autres pages */}
            <Route path='/forget-password' element={<ForgetPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/activation-account' element={<ActivationToken />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Logup />} />
        </Route>
    );
};

export default PublicContent;