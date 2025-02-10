import { useEffect, useState } from 'react';
import FONCIER from "../../../assets/img/droit.png";
import {
  DocumentTextIcon,
  ScaleIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  HandThumbUpIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
};

const InvestorRights = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    window.history.replaceState(null, '', `#${sectionId}`);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Ferme le menu mobile après navigation
    setMenuOpen(false);
  };

  const sections: Section[] = [
    {
      id: 'protection',
      title: 'Protection des Investissements',
      icon: ShieldCheckIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">📜 Textes Fondamentaux</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Code des Investissements (2013)</li>
                <li>OHADA - Droit des affaires unifié</li>
                <li>Conventions CIPRES et CIMA</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">🛡️ Garanties</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Protection contre l'expropriation</li>
                <li>Stabilité fiscale pendant 10 ans</li>
                <li>Liberté de transfert des capitaux</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'traitement',
      title: 'Traitement National et MFN',
      icon: ScaleIcon,
      content: (
        <div className="space-y-4">
          <div className="bg-[#F5BA3A]/10 p-4 rounded border-l-4 border-[#F5BA3A]">
            <p className="text-sm">
              Les investisseurs étrangers bénéficient du même traitement que les nationaux (principe CN) et des avantages accordés aux autres pays (clause NPF).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">💼 Domaines d'application</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Accès aux marchés publics</li>
                <li>Régime fiscal et douanier</li>
                <li>Protection juridique</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">🚫 Exceptions</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Secteurs stratégiques (défense, énergie)</li>
                <li>Mesures de sauvegarde économique</li>
                <li>Accords sectoriels spécifiques</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'cadre-legal',
      title: 'Cadre Légal et Institutions',
      icon: BuildingLibraryIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">🏛️ Institutions Clés</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>MINEPAT - Ministère de l'Économie</li>
                <li>API - Agence de Promotion des Investissements</li>
                <li>CRI - Centres de Formalités des Entreprises</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">⚖️ Cadre Juridique</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Droit OHADA unifié</li>
                <li>Code des Marchés Publics</li>
                <li>Loi sur la Concurrence</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'droit-propriete',
      title: 'Droit à la Propriété',
      icon: DocumentTextIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">🏡 Régime Foncier</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Titre foncier (25 ans renouvelables)</li>
                <li>Bail emphytéotique (jusqu'à 50 ans)</li>
                <li>Certificat de propriété</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">📑 Procédures</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Immatriculation au Cadastre</li>
                <li>Publication au Journal Officiel</li>
                <li>Certificat de non-rétrocession</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'procedure-terrain',
      title: 'Procédures d’Obtention de Terrain',
      icon: GlobeAltIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">📋 Processus en 5 étapes</h3>
              <ol className="list-decimal pl-6 space-y-2 text-sm">
                <li>Dépôt de demande à la mairie</li>
                <li>Étude d'impact environnemental</li>
                <li>Approbation du plan d'occupation</li>
                <li>Paiement des droits fonciers</li>
                <li>Délivrance du titre</li>
              </ol>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">⏱️ Délais et Coûts</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Délai moyen : 6-9 mois</li>
                <li>Frais d'enregistrement : 2-5% de la valeur</li>
                <li>Taxe annuelle : 0.1% de la valeur</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'fiscalite-incitations',
      title: 'Fiscalité et Incitations',
      icon: CurrencyDollarIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">🏭 Régimes Spéciaux</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Entreprise Pioneer : Exonération 5 ans</li>
                <li>ZES : TVA 0% sur les intrants</li>
                <li>PME : Réduction IS à 25%</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">📊 Barème Fiscal</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>IS : 33% (standard)</li>
                <li>TVA : 19.25%</li>
                <li>Droits de douane : 5-30%</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'resolution-conflits',
      title: 'Résolution des Conflits',
      icon: BriefcaseIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">⚖️ Voies de Recours</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Médiation via CACI</li>
                <li>Arbitrage OHADA</li>
                <li>Cour Commune de Justice</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">🌍 Arbitrage International</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Membre CIRDI depuis 2016</li>
                <li>Reconnaissance des sentences étrangères</li>
                <li>Délai moyen : 18-24 mois</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'liberte-entreprise',
      title: 'Liberté d’Entreprise',
      icon: ChartBarIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">📈 Indicateurs Clés</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Classement Doing Business : 167e → 135e</li>
                <li>Délai création entreprise : 3 jours</li>
                <li>Capital minimum : 1 XAF</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">🚀 Secteurs Prioritaires</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Agro-industrie</li>
                <li>Énergies renouvelables</li>
                <li>Numérique</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'responsabilite-sociale',
      title: 'RSE et Développement Durable',
      icon: HandThumbUpIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">🌱 Obligations RSE</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>1% du chiffre d'affaires en projets sociaux</li>
                <li>Respect des normes environnementales</li>
                <li>Formation du personnel local</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">🏆 Avantages</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Crédits d'impôt jusqu'à 30%</li>
                <li>Accès privilégié aux marchés publics</li>
                <li>Label "Entreprise Responsable"</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'liberte-capitaux',
      title: 'Circulation des Capitaux',
      icon: ArrowsRightLeftIcon,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0E600B]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0E600B] mb-2">💱 Transferts Autorisés</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Dividendes et bénéfices</li>
                <li>Royalties et licences</li>
                <li>Remboursement de prêts</li>
              </ul>
            </div>
            <div className="bg-[#0F0B60]/10 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0F0B60] mb-2">⚠️ Restrictions</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Plafond mensuel : 20M XAF</li>
                <li>Justificatifs obligatoires</li>
                <li>Taxe de sortie : 2%</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section Hero */}
      <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
        <img
          src={FONCIER}
          alt=""
          className="absolute inset-0 z-10 w-full h-full object-cover object-center opacity-30"
        />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20"></div>
        </div>
        <div className="absolute -top-52 left-1/2 z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30"></div>
        </div>
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white text-center">
            Droit des Investisseurs
          </h2>
          <p className="mt-4 text-lg text-gray-300 italic text-center">
            "Un cadre juridique clair et stable est la pierre angulaire d’un environnement propice aux investissements. Là où le droit protège, la confiance prospère."
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
        <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to={'/'}>Accueil</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <p className="text-slate-500">Guide de l'investisseur</p>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <p className="text-slate-500">Droit des Investisseurs</p>
      </div>

      {/* Bouton de menu pour mobile */}
      <div className="block md:hidden container mx-auto px-4 py-4">
        <button
          onClick={() => setMenuOpen(true)}
          className="w-full flex items-center justify-between p-3 bg-white rounded-lg shadow-md text-[#0F0B60] font-semibold"
        >
          Navigation Rapide
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu mobile (modal) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50">
          <div className="ml-auto w-2/3 max-w-sm bg-white p-4">
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Fermer
              </button>
            </div>
            <nav className="mt-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center w-full text-left p-3 rounded transition-colors hover:bg-gray-100 text-sm"
                >
                  <section.icon className="h-5 w-5 mr-2" />
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation latérale (affichée sur md et plus) */}
          <aside className="hidden md:block md:col-span-1 bg-white p-4 sm:p-6 rounded-lg shadow-md sticky top-48 h-fit">
            <nav className="space-y-2">
              <h2 className="text-[#0E600B] font-semibold mb-4 text-base sm:text-lg">
                Navigation Rapide
              </h2>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center w-full text-left p-3 rounded transition-colors text-sm sm:text-base ${window.location.hash === `#${section.id}`
                    ? 'bg-[#0F0B60] text-white'
                    : 'hover:bg-gray-100 text-[#0F0B60]'
                    }`}
                >
                  <section.icon className="h-5 w-5 mr-2" />
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Sections de contenu */}
          <div className="md:col-span-3 space-y-8">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md scroll-mt-24 transition-all duration-300 hover:shadow-lg"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F0B60] mb-4 flex items-center gap-2">
                  <section.icon className="h-6 w-6" />
                  {section.title}
                </h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestorRights;
