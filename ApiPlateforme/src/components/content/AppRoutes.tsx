import { Route, Routes, Navigate } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";
import PrivateLayout from "../../layouts/PrivateLayout";
import OnboardingLayout from "../../layouts/OnboardingLayout";
import { RequireAuth } from "./RequireAuth";
import { RequireRole } from "./RequireRole";

// Public Pages
import Home from "../../pages/home/home";
import Faq from "../../pages/aPropos/faq/faq";
import Energie from "../../pages/sectors/energie/energie";
import Infrastructure from "../../pages/sectors/infrastructure/infrastructure";
import Numerique from "../../pages/sectors/numerique/numerique";
import PresentationCameroun from "../../pages/informations-generales/presentation-cameroun/presentation-cameroun";
import Logup from "../../pages/authentication/logup/logup";
import CadreJuridiqueFiscal from "../../pages/informations-generales/cadre-juridique-fiscal/cadre-juridique-fiscal";
import MainOeuvre from "../mainOeuvre/mainOeuvre";
import FacteursProduction from "../../pages/investir/facteursProduction/facteursProduction";
import AspectsJuridiques from "../../pages/informations-generales/aspects-juridiques/aspects-juridiques";
import Agroindustrie from "../../pages/sectors/agroindustrie/agroindustrie";
import Elevage from "../../pages/sectors/elevage/elevage";
import Financement from "../../pages/sectors/financement/financement";
import BoisForet from "../../pages/sectors/bois-foret/bois-forets";
import CreerEntreprise from "../../pages/investir/creerEntreprise/creerEntreprise";
import DroitInvestisseur from "../../pages/investir/droitInvestisseur/droitInvestisseur";
import Foncier from "../../pages/investir/foncier/foncier";
import TextileConfectionCuir from "../../pages/sectors/textile-confection-cuir/textile-confection-cuir";
import HydrocarburesRaffinage from "../../pages/sectors/hydrocarbures-raffinage/hydrocarbures-raffinage";
import ChimiePharmacie from "../../pages/sectors/chimie-pharmacie/chimie-pharmacie";
import MinesMetallurgieSiderurgie from "../../pages/sectors/mines-metallurgie-siderurgie/mines-metallurgie-siderurgie";
import PresentationApi from "../../pages/aPropos/presentation-api/presentation-api";
import Login from "../../pages/authentication/login/login";
import Fiscalite from "../../pages/investir/fiscalite/fiscalite";
import Incitation from "../../pages/investir/incitation/incitation";
import ActivationToken from "../../pages/authentication/activationToken/activationToken";
import ForgetPassword from "../../pages/authentication/forgetPassword/forgetPassword";
import ResetPassword from "../../pages/authentication/resetPassword/resetPassword";
import Potentiel from "../../pages/sectors/potentiel/potentiel";
import PolitiqueCondition from "../../pages/politiqueCondition/politiqueCondition";
import Testimony from "../../pages/testimony/testimony";

// Private Pages
import Dashboard from "../../pages/dashboard/Dashboard";
import Investment from "../../layouts/dashboard/investment";
import Notifications from "../../layouts/dashboard/notifications";
import Settings from "../../layouts/dashboard/settings";
import UserProfile from "../../layouts/dashboard/profil";
import Messages from "../../layouts/dashboard/messages";
import MyProjects from "../../layouts/dashboard/projects";
import SuiviProjetDetail from "../../layouts/dashboard/analytics";
import Demandes from "../../layouts/dashboard/demandes";
import Users from "../../layouts/users";
import InvestorOnboarding from "../../pages/authentication/onboarding/InvestorOnboarding";
import InvestorPortalLayout from "../../pages/investorPortal/InvestorPortalLayout";
import InvestorOverview from "../../pages/investorPortal/Overview";
import { MessagesPage, NotificationsPage, ProfilePage, SettingsPage, ProjectDetailPage } from "../../pages/investorPortal/Pages";
import InvestmentProjectApplication from "../../pages/investmentApplication/InvestmentProjectApplication";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ---------------- PUBLIC ROUTES ---------------- */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/temoignages" element={<Testimony />} />
        <Route
          path="/projets/detailsProjets/:id"
          element={<Navigate to="/signin" replace />}
        />

        {/* Informations générales */}
        <Route
          path="/presentation-du-cameroun"
          element={<PresentationCameroun />}
        />
        <Route
          path="/cadre-juridique-et-fiscal"
          element={<CadreJuridiqueFiscal />}
        />
        <Route path="/aspects-juridiques" element={<AspectsJuridiques />} />

        {/* Guide de l'investisseur */}
        <Route path="/main-doeuvre" element={<MainOeuvre />} />
        <Route
          path="/facteurs-de-production"
          element={<FacteursProduction />}
        />
        <Route path="/creation-dentreprise" element={<CreerEntreprise />} />
        <Route
          path="/droits-des-investisseurs"
          element={<DroitInvestisseur />}
        />
        <Route path="/fiscalite" element={<Fiscalite />} />
        <Route path="/incitation" element={<Incitation />} />
        <Route path="/foncier" element={<Foncier />} />

        {/* Secteurs et opportunités */}
        <Route path="/sanctuaire-agro-industrie" element={<Agroindustrie />} />
        <Route path="/sanctuaire-elevage" element={<Elevage />} />
        <Route path="/sanctuaire-energie" element={<Energie />} />
        <Route path="/sanctuaire-numerique" element={<Numerique />} />
        <Route path="/socle-infrastructure" element={<Infrastructure />} />
        <Route path="/socle-financement" element={<Financement />} />
        <Route path="/pilier-bois-forets" element={<BoisForet />} />
        <Route
          path="/pilier-textile-confection-cuir"
          element={<TextileConfectionCuir />}
        />
        <Route
          path="/pilier-hydrocarbures-raffinage"
          element={<HydrocarburesRaffinage />}
        />
        <Route path="/pilier-chimie-pharmacie" element={<ChimiePharmacie />} />
        <Route
          path="/pilier-mines-metallurgie-siderurgie"
          element={<MinesMetallurgieSiderurgie />}
        />
        <Route path="/potentiel" element={<Potentiel />} />

        {/* A propos */}
        <Route path="/presentation-api" element={<PresentationApi />} />
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/Politique-Confidentialite&Condition-Utilisation"
          element={<PolitiqueCondition />}
        />

        {/* Authentification */}
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/accept-invitation" element={<ResetPassword mode="invitation" />} />
        <Route path="/activation-account" element={<ActivationToken />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Logup />} />
      </Route>

      {/* Redirections directes pour garantir la présence de la sidebar */}
      <Route path="/project-application" element={<Navigate to="/investor-portal/project-application" replace />} />
      <Route path="/project-application/:id" element={<Navigate to="/investor-portal/project-application" replace />} />
      <Route path="/project-application/edit/:id" element={<Navigate to="/investor-portal/project-application" replace />} />

      {/* ---------------- PRIVATE ROUTES ---------------- */}
      <Route element={<RequireAuth />}>
        {/* Portail Investisseur */}
        <Route path="/investor-portal" element={<InvestorPortalLayout />}>
          <Route index element={<InvestorOverview />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
          <Route path="projects/detail/:id" element={<ProjectDetailPage />} />
          <Route path="project-application" element={<InvestmentProjectApplication />} />
          <Route path="project-application/:id" element={<InvestmentProjectApplication />} />
          <Route path="project-application/edit/:id" element={<InvestmentProjectApplication />} />
          <Route path="projects/new" element={<InvestmentProjectApplication />} />
          <Route path="projects/edit/:id" element={<InvestmentProjectApplication />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Onboarding – with public Navbar + Footer */}
        <Route element={<OnboardingLayout />}>
          <Route path="/onboarding" element={<InvestorOnboarding />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projets" element={<Investment />} />
          <Route
            path="/projet/details/:titre"
            element={<SuiviProjetDetail />}
          />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/parametres" element={<Settings />} />
          <Route path="/profil" element={<UserProfile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/investissements" element={<MyProjects />} />
          <Route path="/demandes" element={<Demandes />} />
          <Route element={<RequireRole roles={["ADMIN", "SUPER_ADMIN"]} />}>
            <Route path="/users" element={<Users />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
