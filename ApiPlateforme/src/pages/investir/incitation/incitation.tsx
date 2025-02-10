import { useState } from 'react';
import {
  SparklesIcon,
  BanknotesIcon,
  ChartBarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import { NavLink } from 'react-router-dom';
import oeuvre from "../../../assets/img/incitation2.jpg"
import CACAO from "../../../assets/img/cacao4.png"
import ENERGIE from "../../../assets/img/energie.jpg"
import ProjectCard from '../../../components/projetCard/projetCard';

const Incitation = () => {
  const [projects] = useState([
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

  // Données structurées
  const INCENTIVES_DATA = {
    phases: {
      installation: {
        title: "Phase d'Installation (0-5 ans)",
        icon: <BanknotesIcon className="h-8 w-8" />,
        benefits: [
          {
            title: "Exonérations Totales",
            items: [
              "Droits d'enregistrement",
              "TVA à l'import",
              "Patente",
              "Droits de mutation"
            ]
          },
          {
            title: "Avantages Douaniers",
            items: [
              "Enlèvement direct des équipements",
              "Exonération droits de douane",
              "Admission temporaire spéciale"
            ]
          }
        ]
      },
      exploitation: {
        title: "Phase d'Exploitation (5-10 ans)",
        icon: <ChartBarIcon className="h-8 w-8" />,
        benefits: [
          {
            title: "Réductions Fiscales",
            items: [
              "75% Impôt Société (5 premières années)",
              "50% réduction années 6-10",
              "Exonération droits prêts/emprunts"
            ]
          },
          {
            title: "Autres Avantages",
            items: [
              "Report des déficits (5 ans)",
              "TVA nulle à l'export",
              "Crédits d'impôt R&D"
            ]
          }
        ]
      }
    },
    sectors: [
      {
        name: "Agro-industrie",
        icon: "🌱",
        benefits: ["Exonération TVA", "Droits réduits à 5%"]
      },
      {
        name: "Énergie",
        icon: "⚡",
        benefits: ["Crédit impôt 30%", "Exonération foncière"]
      },
      {
        name: "Technologie",
        icon: "💻",
        benefits: ["TVA 0%", "Subventions R&D"]
      }
    ],
    keyFigures: [
      { value: "75%", label: "Réduction IS première phase" },
      { value: "10 ans", label: "Durée maximale avantages" },
      { value: "0%", label: "TVA exportations" },
      { value: "5%", label: "Droits de douane secteurs prioritaires" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0B60]/5 to-white">
      {/* En-tête */}
      <div>
        <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
          <img src={oeuvre} alt="" className="absolute inset-0 z-10 size-full object-cover object-right md:object-center opacity-30" />
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-20"></div>
          </div>
          <div className="absolute -top-52 left-1/2 z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#0E600B] to-[#F5BA3A] opacity-30"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green">
              <SparklesIcon className="h-16 w-16 mx-auto mb-4 text-white" />
              Incitations Fiscales au Cameroun
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Bénéficiez d'avantages exceptionnels pour votre investissement
            </p>
          </div>

        </div>
      </div>
      <div aria-label="Breadcrumbs" className="bg-gray-100 sticky top-24 z-10 flex align-center space-x-2 text-sm font-semibold p-6 lg:p-8 border-spacing-1">
        <NavLink className="text-slate-500 hover:text-slate-900 hover:underline" to={'/'}>Accueil</NavLink>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <p className="text-slate-500">Guide de l'investisseur</p>
        <div aria-hidden="true" className="text-slate-400 select-none">/</div>
        <p className="text-slate-500">Incitation</p>
      </div>

      {/* Chiffres clés */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {INCENTIVES_DATA.keyFigures.map((figure, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#0E600B]">{figure.value}</div>
              <div className="mt-2 text-[#0F0B60]">{figure.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Phases d'incitation */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#0F0B60] mb-12 text-center">
          Avantages par Phase d'Investissement
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(INCENTIVES_DATA.phases).map(([key, phase]) => (
            <div key={key} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[#0F0B60] p-6 flex items-center">
                <div className="p-3 bg-white/20 rounded-lg mr-4">
                  {phase.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
              </div>

              <div className="p-6">
                {phase.benefits.map((benefit, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-semibold text-[#0E600B] mb-3">
                      <CheckCircleIcon className="h-5 w-5 inline-block mr-2 text-[#DC2123]" />
                      {benefit.title}
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {benefit.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secteurs Prioritaires */}
      <section className="bg-[#0E600B]/5 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0F0B60] mb-8 text-center">
            Secteurs à Hauts Avantages
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {INCENTIVES_DATA.sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{sector.icon}</span>
                  <h3 className="text-xl font-bold text-[#0E600B]">{sector.name}</h3>
                </div>
                <ul className="space-y-2">
                  {sector.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <TrophyIcon className="h-4 w-4 text-[#F5BA3A] mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container mx-auto p-6">
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
  );
};

export default Incitation;