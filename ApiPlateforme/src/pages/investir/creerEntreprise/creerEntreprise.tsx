import { useState } from 'react';
import { ChevronDownIcon, DocumentTextIcon, BuildingLibraryIcon, ClockIcon, CheckBadgeIcon, ArrowRightIcon, CheckCircleIcon, LightBulbIcon, MapPinIcon } from '@heroicons/react/24/outline';
import oeuvre from "../../../assets/img/entreprise.jpg"
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import ProjectCard from '../../../components/projetCard/projetCard';
import { NavLink } from 'react-router-dom';

type Section = 'Contexte Juridique' | 'Avantages Fiscaux' | 'Institutions';

export default function CreationEntreprise() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      secteur: "Agro-industrie",
      titre: "Exploitation de plantation de cacao",
      ville: "Douala",
      quartier: "Bonaberi",
      description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
      image: CACAO,
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    },
    {
      id: 2,
      secteur: "Énergie",
      titre: "Parc solaire de 20 MW",
      ville: "Garoua",
      quartier: "Ngaoundere route",
      description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
      image: ENERGIE,
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    },
    {
      id: 3,
      secteur: "Numérique",
      titre: "Plateforme de paiement mobile",
      ville: "Yaoundé",
      quartier: "Bastos",
      description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
      image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
      latitude: 4.0511, // Ajoutez cette propriété
      longitude: 9.7679, // Ajoutez cette propriété
    }
    // Ajoutez plus de projets ici...
  ]);
  const [activeTab, setActiveTab] = useState<'physique' | 'morale'>('physique');
  const [openSection, setOpenSection] = useState<Section | null>(null);

  const toggleSection = (section: Section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const documents = {
    physique: [
      "Copie certifiée de la carte nationale d'identité/passeport",
      "Extrait du bulletin N°3 du casier judiciaire",
      "Extrait de l'acte de mariage ou certificat de célibat",
      "Certificat de résidence",
      "2 photos 4X4 avec noms au dos",
      "Autorisation préalable d'exercer (si nécessaire)",
      "Plan de localisation signé"
    ],
    morale: [
      "2 copies certifiées des statuts",
      "2 exemplaires de déclaration de conformité",
      "Liste certifiée des dirigeants",
      "2 extraits de casier judiciaire des dirigeants",
      "Autorisation préalable (si nécessaire)",
      "Plan de localisation signé"
    ]
  };

  const etapesCFCE = [
    { 
      title: 'Attestation CNPS', 
      cost: '8 000 XAF',
      details: 'Quittance de 6000 FCFA + 2 timbres de 1000 FCFA' 
    },
    { 
      title: 'Attestation de non-emploi', 
      cost: '2 500 XAF',
      details: 'Quittance de 1500 FCFA + 1 timbre de 1000 FCFA' 
    },
    { 
      title: 'Patente', 
      cost: 'Exonération 1ère année',
      details: 'Gratuit pendant la première année d\'activité' 
    },
    { 
      title: 'Carte de contribuable', 
      cost: 'Gratuit',
      details: 'Délivrée sans frais' 
    },
    { 
      title: 'Enregistrement du bail', 
      cost: '10% du loyer annuel / 0.11% valeur immo',
      details: 'Selon statut locataire/propriétaire' 
    },
    { 
      title: 'Registre du Commerce', 
      cost: '53 000 XAF (physique) / 41 500 XAF (morale)',
      details: 'Enregistrement final au RCCM' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
        <img src={oeuvre} alt="" className="absolute inset-0 z-10 size-full object-cover object-right md:object-center opacity-30" />
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20"></div>
        </div>
        <div className="absolute -top-52 left-1/2 z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">Votre entreprise au Cameroun en 72h</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
            Bénéficiez d'un cadre juridique OHADA modernisé et d'un processus accéléré 
            grâce aux Centres de Formalités de Création d'Entreprises (CFCE)
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <div className="flex items-center bg-white px-6 py-2 rounded-full">
              <ClockIcon className="w-5 h-5 mr-2 text-[#0F0B60]" />
              <span className="font-semibold text-[#0F0B60]">72 heures</span>
            </div>
          </div>
        </div>
      </div>
      <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
        <NavLink className="text-slate-500 hover:text-slate-600" to={'/'}>Accueil</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <NavLink className="text-slate-500 hover:text-slate-600" to={'#'}>Guide de l'investisseur</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <NavLink className="text-slate-500 hover:text-slate-600" to={'/main-doeuvre'}>Creation d'Entreprise</NavLink>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Section CFCE Détaillée */}
<section className="mb-16">
  <h2 className="text-2xl font-bold text-[#0F0B60] mb-8 flex items-center">
    <BuildingLibraryIcon className="w-6 h-6 mr-2" />
    Le CFCE en Détail
  </h2>
{/* Avantages CFCE */}
<div className="mt-8 p-6 bg-[#0F0B60]/10 rounded-lg">
  <h3 className="text-lg font-semibold text-[#0F0B60] mb-4">Pourquoi le CFCE ?</h3>
  
  <div className="grid md:grid-cols-3 gap-4">
    {[
      { 
        title: "Centralisation", 
        content: "Toutes les administrations regroupées en un seul lieu" 
      },
      { 
        title: "Rapidité", 
        content: "Délai légal de traitement de 3 jours ouvrés" 
      },
      { 
        title: "Expertise", 
        content: "Accompagnement par des conseillers spécialisés" 
      }
    ].map((avantage, i) => (
      <div key={i} className="p-4 bg-white rounded-lg">
        <div className="w-12 h-12 rounded-full bg-[#F5BA3A] flex items-center justify-center mb-3">
          <LightBulbIcon className="w-6 h-6 text-[#0F0B60]" />
        </div>
        <p className="font-semibold text-[#0E600B]">{avantage.title}</p>
        <p className="text-sm text-gray-600">{avantage.content}</p>
      </div>
    ))}
  </div>

  <div className="grid md:grid-cols-2 gap-8 mt-8">
    {/* Localisation */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-[#0E600B] mb-4 flex items-center">
        <MapPinIcon className="w-5 h-5 mr-2" />
        Implantation Nationale
      </h3>
      <p className="mb-4">Disponible dans tous les chefs-lieux de région :</p>
      <div className="grid grid-cols-2 gap-3">
        {[
          'Adamaoua - Ngaoundéré',
          'Centre - Yaoundé',
          'Est - Bertoua',
          'Extrême-Nord - Maroua',
          'Littoral - Douala',
          'Nord - Garoua',
          'Nord-Ouest - Bamenda',
          'Ouest - Bafoussam',
          'Sud - Ebolowa',
          'Sud-Ouest - Buéa'
        ].map((region, i) => (
          <div key={i} className="flex items-center p-2 bg-gray-50 rounded">
            <CheckCircleIcon className="w-4 h-4 text-[#0E600B] mr-2" />
            <span className="text-sm">{region}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Étapes de Création */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-[#DC2123] mb-4 flex items-center">
        <ClockIcon className="w-5 h-5 mr-2" />
        Processus en 72h
      </h3>
      <div className="space-y-4">
        {[
          {
            step: 1,
            title: "Préparation des documents",
            content: "Rassembler les pièces selon votre statut (physique/moral)"
          },
          {
            step: 2,
            title: "Dépôt au CFCE",
            content: "Dossier complet déposé au guichet unique"
          },
          {
            step: 3,
            title: "Traitement multiservice",
            content: "CNPS • Impôts • Greffe • Registre de commerce"
          },
          {
            step: 4,
            title: "Retrait des documents",
            content: "Récupération des attestations et enregistrements"
          }
        ].map((etape, i) => (
          <div key={i} className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-[#0F0B60] text-white flex items-center justify-center mr-4">
              {etape.step}
            </div>
            <div>
              <p className="font-semibold text-[#0F0B60]">{etape.title}</p>
              <p className="text-sm text-gray-600">{etape.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>  
</section>
 {/* Types de Sociétés */}
 <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#0E600B] mb-8 flex items-center">
            <BuildingLibraryIcon className="w-6 h-6 mr-2" />
            Structures Juridiques OHADA
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                type: 'EURL', 
                desc: 'Entreprise Unipersonnelle à Responsabilité Limitée - Capital minimal flexible' 
              },
              { 
                type: 'SARL', 
                desc: 'Société à Responsabilité Limitée - 2 associés minimum, capital variable' 
              },
              { 
                type: 'SA', 
                desc: 'Société Anonyme - Capital minimum 10 millions XAF, forme actionnariat' 
              },
              { 
                type: 'SAS', 
                desc: 'Société par Actions Simplifiée - Souplesse organisationnelle' 
              },
            ].map((societe, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#F5BA3A] hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-[#0F0B60] mb-3">{societe.type}</h3>
                <p className="text-gray-600 text-sm">{societe.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Documents Section */}
        <section className="mb-16">
  {/* Section Documents Requis */}
  <div className="mb-16">
    <h2 className="text-2xl font-bold text-[#0E600B] mb-8 flex items-center">
      <DocumentTextIcon className="w-6 h-6 mr-2" />
      Documents Requis
    </h2>
    
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('physique')}
          className={`flex-1 p-4 font-medium ${activeTab === 'physique' ? 'bg-[#0F0B60] text-white' : 'text-gray-600'}`}
        >
          Personne Physique
        </button>
        <button
          onClick={() => setActiveTab('morale')}
          className={`flex-1 p-4 font-medium ${activeTab === 'morale' ? 'bg-[#0F0B60] text-white' : 'text-gray-600'}`}
        >
          Personne Morale
        </button>
      </div>
      
      <div className="p-6">
        <ul className="space-y-3">
          {documents[activeTab].map((doc, i) => (
            <li key={i} className="flex items-start">
              <CheckBadgeIcon className="w-5 h-5 text-[#0E600B] mr-2 mt-1" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Section Procédures au CFCE */}
  <div>
    <h2 className="text-2xl font-bold text-[#0E600B] mb-8 flex items-center">
      <ClockIcon className="w-6 h-6 mr-2" />
      Procédures au CFCE
    </h2>
    
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        {etapesCFCE.map((step, i) => (
          <div key={i} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
            <div className="flex items-start">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-[#0F0B60] text-white`}>
                {i + 1}
              </div>
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="text-sm text-gray-500">{step.details}</p>
              </div>
            </div>
            <span className="font-semibold text-[#DC2123] min-w-[120px] text-right">{step.cost}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

       

        {/* Accordéon Sections */}
        <div className="space-y-4 mb-16">
          {[
           {
            title: 'Contexte Juridique',
            content: <>
              <p className="mb-4">Cadre légal renforcé par :</p>
              <ul className="list-disc pl-6 space-y-2 text-blue">
                <li>
                  <a
                    href="https://www.droit-afrique.com/upload/doc/ohada/Ohada-Acte-Uniforme-2010-droit-commercial.pdf"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Traité OHADA (Droit Commercial Général)
                  </a>
                </li>
                <li>
                  <a
                    href="https://douala.eregulations.org/media/-2016-decembre-2016-fixant-22417_1.pdf" 
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Loi N°2016/014 du 14/12/2016
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.droit-afrique.com/uploads/Cameroun-Decret-2017-877-modalites-authentification-sarl.pdf"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Décret N°2017/0877/PM du 28/02/2017
                  </a>
                </li>
              </ul>
            </>
          }
          ,
            { 
              title: 'Avantages Fiscaux',
              content: <>
                <p className="mb-4">Incitations principales :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#0E600B]/10 rounded-lg">
                    <p className="font-semibold text-[#0E600B]">Exonération de patente</p>
                    <p className="text-sm">Première année d'activité exonérée</p>
                  </div>
                  <div className="p-4 bg-[#0F0B60]/10 rounded-lg">
                    <p className="font-semibold text-[#0F0B60]">Coûts réduits</p>
                    <p className="text-sm">Enregistrement gratuit de la carte de contribuable</p>
                  </div>
                </div>
              </>
            },
            {
              title: 'Institutions',
              content: <>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'API (Promotion Investissements)', link: 'https://investincameroon.net/' },
                    { name: 'APME (Soutien PME)', link: 'https://www.apme.cm/en/home-en-2/?lang=en%20/' },
                    { name: 'CFCE (Guichets Uniques)', link: 'https://www.cfce.cm/' },
                    { name: 'MINMIDT (Industrie)', link: 'https://www.minmidt.cm/' },
                    { name: 'MINPMESA (Artisanat)', link: 'https://www.minpmeesa.cm/site/' }
                  ].map((inst, i) => (
                    <a
                      key={i}
                      href={inst.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <CheckBadgeIcon className="w-5 h-5 text-[#0F0B60] mr-2" />
                      <span className="text-blue-600 hover:text-blue-800">{inst.name}</span>
                    </a>
                  ))}
                </div>
              </>
            }
            
          ].map((section, i) => (
            <div key={i} className="border rounded-lg">
              <button
                onClick={() => toggleSection(section.title as Section)}
                className="flex justify-between items-center w-full p-4 bg-gray-50 hover:bg-gray-100"
              >
                <span className="font-semibold text-[#0F0B60]">{section.title}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${openSection === section.title ? 'transform rotate-180' : ''}`} />
              </button>
              {openSection === section.title && (
                <div className="p-4 bg-white space-y-4">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Doing Business Banner */}
        <div className="bg-[#F5BA3A] p-6 rounded-lg mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#0F0B60] mb-4">
              Environnement des Affaires en Progression
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <div className="bg-white px-4 py-2 rounded-full">
                <span className="font-bold text-[#DC2123]">#163</span> mondial (Doing Business 2018)
              </div>
              <div className="bg-white px-4 py-2 rounded-full">
                <span className="font-bold text-[#0E600B]">+3 places</span> en 1 an
              </div>
            </div>
            <p className="text-sm text-[#0F0B60]/90">
              Progrès notables : Création d'entreprise accélérée, fichier bancaire national, 
              centrale des incidents de paiement
            </p>
          </div>
        </div>

      
        <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
          {/* Titre avec style attractif */}
          <h2 className="text-3xl font-bold text-center text-[#0F0B60]">
            Saisissez des Opportunités Uniques !
          </h2>

          {/* Barre de séparation */}
          <div className="w-24 h-1 bg-[#0F0B60] mx-auto my-4 rounded-full"></div>

          {/* Message d'encouragement */}
          <p className="text-center text-gray-700 mb-6">
            Investissez dès aujourd’hui dans des projets innovants et rentables pour bâtir l’avenir de l’économie camerounaise.
          </p>

          {/* Liste des projets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Lien Voir plus */}
          <div className="flex justify-center mt-8">
            <a
              href="/banque-de-projets"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
            >
              Voir plus de projets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}